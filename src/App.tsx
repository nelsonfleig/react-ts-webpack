import './styles.css'
import IMAGE_PNG from './react-logo.png'
import IMAGE_SVG from './react-logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={IMAGE_PNG} alt="React logo png" width="300" height="300" />
      <img src={IMAGE_SVG} alt="React logo svg" width="300" height="300" />
      <ClickCounter />
    </>
  )
}

export default App
