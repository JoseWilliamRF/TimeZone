import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import LimitedEditions from './components/LimitedEditions';

// Inicializa o GA4
ReactGA.initialize('G-1528KCFFXC');

function App() {
  useEffect(() => {
    // 1. Envia a visualização da página (Seu código original)
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Página Inicial',
    });

    // 2. A MÁGICA: O Espião Global de Cliques
    const handleGlobalClick = event => {
      // Procura se o elemento clicado (ou o "pai" dele) tem a etiqueta 'data-ga-action'
      const trackedElement = event.target.closest('[data-ga-action]');

      if (trackedElement) {
        // Extrai os atributos que você colocou lá no HTML
        const action = trackedElement.getAttribute('data-ga-action');
        const category =
          trackedElement.getAttribute('data-ga-category') || 'Geral';
        const label =
          trackedElement.getAttribute('data-ga-label') || 'Sem label';

        // Dispara o evento de fato para o Google Analytics
        ReactGA.event({
          category: category,
          action: action,
          label: label,
        });

        // Console.log para você ver funcionando no seu Localhost (Aperte F12)
        console.log(
          `✅ Disparou pro Google: [${category}] ${action} - ${label}`,
        );
      }
    };

    // Coloca o espião para escutar a página inteira
    document.addEventListener('click', handleGlobalClick);

    // Limpeza (Desliga o espião quando a página for fechada - regra de ouro do React)
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []); // O array vazio garante que isso só rode 1 vez quando o site carregar

  return (
    <main>
      <Navbar />
      <Hero />
      <Collection />
      <LimitedEditions />
    </main>
  );
}

export default App;
