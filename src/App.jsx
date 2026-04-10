import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import LimitedEditions from './components/LimitedEditions';

function App() {
  return (
    <main>
      <Navbar></Navbar>

      <Hero></Hero>
      <Collection></Collection>
      <LimitedEditions></LimitedEditions>

      {/* Aqui entrará o Carrossel com os Logos em SVG */}

      {/* Aqui entrará a imagem Parallax da mão segurando o relógio */}
    </main>
  );
}

export default App;
