
import './App.css';
import ColorCard from './components/color-card/Colorcard'
import Button from './components/button/Button'
import Prompt from './components/prompt/Prompt'

function App() {
  return (
    <div className="app">
      <h1>Random Color Palette Generator</h1>
      <ColorCard/>
      <Button />
      <Prompt />
    </div>
  );
}

export default App;
