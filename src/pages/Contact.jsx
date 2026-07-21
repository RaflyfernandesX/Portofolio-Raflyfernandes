import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import PageShell from '../components/ui/PageShell';
import SectionHeader from '../components/ui/SectionHeader';
import { profile } from '../data/profile';
import { fadeInUp } from '../utils/animation';

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Nama wajib diisi.';
  }

  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Format email belum valid.';
  }

  if (!values.message.trim()) {
    errors.message = 'Pesan wajib diisi.';
  } else if (values.message.trim().length < 12) {
    errors.message = 'Pesan minimal 12 karakter.';
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contacts = useMemo(
    () => [
      { label: 'Email', value: profile.email, icon: FiMail, href: `mailto:${profile.email}` },
      { label: 'GitHub', value: 'github.com/RaflyfernandesX', icon: FaGithub, href: profile.github },
      { label: 'LinkedIn', value: 'linkedin.com/in/raflyjuliawan', icon: FaLinkedin, href: profile.linkedin },
      { label: 'Instagram', value: '@raflyfernandes._', icon: FaInstagram, href: profile.instagram },
    ],
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }));
    setIsSubmitted(false);
    setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Pesan baru dari ${values.name} - Portofolio`,
          from_name: values.name,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setValues({ name: '', email: '', message: '' });
      } else {
        setSubmitError('Gagal mengirim pesan. Coba lagi beberapa saat.');
      }
    } catch {
      setSubmitError('Terjadi kesalahan jaringan. Coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Let's Contact"
        description="Feel free to reach out if you'd like to discuss internship opportunities, collaborate on projects, or simply connect. I'd be happy to hear from you."
      />
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="glass-panel flex items-center gap-4 rounded-[2rem] p-5 transition hover:-translate-y-1 hover:border-primary/45">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-xl text-primary">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">{item.label}</span>
                  <span className="block break-all font-semibold text-slate-950 dark:text-white">{item.value}</span>
                </span>
              </a>
            );
          })}
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-panel rounded-[2rem] p-6">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Nama lengkap"
                />
                {errors.name ? <p id="name-error" className="mt-2 text-sm text-red-400">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="nama@email.com"
                />
                {errors.email ? <p id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="min-h-36 w-full resize-y rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-slate-950/45 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Tulis pesan singkat..."
                />
                {errors.message ? <p id="message-error" className="mt-2 text-sm text-red-400">{errors.message}</p> : null}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 w-full rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            {isSubmitted ? (
              <p className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-300">
                Pesan berhasil terkirim. Terima kasih sudah menghubungi saya!
              </p>
            ) : null}
            {submitError ? (
              <p className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-500 dark:text-red-300">
                {submitError}
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </PageShell>
  );
}