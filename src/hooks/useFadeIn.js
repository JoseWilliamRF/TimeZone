import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef(null);

  useEffect(() => {
    const currentElement = ref.current;

    // Se o elemento ainda não carregou, ignora.
    if (!currentElement) return;

    // A MÁGICA DINÂMICA: Ele pega o ID direto da tag HTML (ex: "shop", "limited")
    // e verifica se a URL atual tem esse mesmo hash. Serve para QUALQUER seção!
    if (window.location.hash === `#${currentElement.id}`) {
      currentElement.classList.add('visible');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return ref;
}
