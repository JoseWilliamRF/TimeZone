import audemarsImg from '../assets/images/audemars.png'; // Ajuste o nome exato do seu arquivo
import rolexImg from '../assets/images/rolex.png';
import omegaImg from '../assets/images/omega.png';
import longineImg from '../assets/images/longine.png';
import patekImg from '../assets/images/patekPhillipe.png';

export const brandsList = [
  'All',
  'Audemars Piguet',
  'Rolex',
  'Omega',
  'Longine',
  'Patek Philippe',
];

//array de objetos com os dados reais dos produtos
//se quiser adicionar "preço" ou "modelo", basta colocar aqui e o React desenha sozinho

export const watchesData = [
  { id: 1, brand: 'Audemars Piguet', image: audemarsImg }, // Usa a variável importada, sem aspas!
  { id: 2, brand: 'Rolex', image: rolexImg },
  { id: 3, brand: 'Omega', image: omegaImg },
  { id: 4, brand: 'Longine', image: longineImg },
  { id: 5, brand: 'Patek Philippe', image: patekImg },
];
