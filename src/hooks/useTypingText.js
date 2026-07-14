import { useEffect, useState } from 'react';

export function useTypingText(words, speed = 72, pause = 1100) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const delay = isDeleting ? speed / 2 : speed;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && letterIndex === currentWord.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        setLetterIndex((index) => index + (isDeleting ? -1 : 1));
      },
      !isDeleting && letterIndex === currentWord.length ? pause : delay,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, pause, speed, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}
