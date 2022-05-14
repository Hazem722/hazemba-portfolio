import { v4 as uuidv4 } from 'uuid';
import myPortfolio from '../images/myPortfolio.jpg';
import MovieappImage from '../images/MovieappImage.jpg';
import TeslaClone from '../images/TeslaClone.jpg';
import CarWow from '../images/Carwow.jpg';
import Kasper from '../images/Kasper.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Custom Portfolio',
    desc:
      'A custom portfolio using react, styled Components and NextJs! I made it  using a bench of cool technologies! check it out',
    img: myPortfolio,
    source: 'https://github.com/Hazem722/portfolio_hazem-example',
    visit: 'https://hazem-portfolio-example.vercel.app/',
  },
  {
    id: uuidv4(),
    name: 'Movie Application',
    desc:
      'An application to watch and save all your favorite movies on one place. I developed the website using a bench of cool technologies! check it out',
    img: MovieappImage,
    source: 'https://github.com/Hazem722/Movie-App',
    visit: 'https://animated-klepon-2c26d1.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Tesla-Clone',
    desc:
      'A clone of Tesla Website! done using ReactJS, Styled Components, Redux Toolkit & React Reveal. Check out that cool reveal-on-scroll animations ',
    img: TeslaClone,
    source: 'https://github.com/Hazem722/Tesla-Clone-Practice',
    visit: 'https://tesla-clone-project.vercel.app',
  },
  {
    id: uuidv4(),
    name: 'CarWow',
    desc:
      'Using Vanilla Js, I made a car buying comparison site! Yes another projects about cars! well you guess it right , I love cars, especially sport ones!',
    img: CarWow,
    source: 'https://github.com/Hazem722/CarWow',
    visit: 'https://hazem722.github.io/CarWow/',
  },
  {
    id: uuidv4(),
    name: 'Kasper',
    desc:
      'HTML And CSS Design , this is my second time cloning a template using only html and css! this where it all started .. check it out ! ',
    img: Kasper,
    source: 'https://github.com/Hazem722/HTML_CSS_Template_two',
    visit: 'https://hazem722.github.io/HTML_CSS_Template_two/',
  },
];

export default projects;
