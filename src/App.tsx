import './styles.css';
import IMAGE_PNG from './react-logo.png';
import IMAGE_SVG from './react-logo.svg';

export const App = () => {
  return (
    <>
      <h1>React Typescript Webpack Template</h1>
      <img src={IMAGE_PNG} alt='React logo png' width='300' height='300' />
      <img src={IMAGE_SVG} alt='React logo svg' width='300' height='300' />
    </>
  );
};

export default App;
