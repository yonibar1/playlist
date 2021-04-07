import { PlayListApp } from './views/PlayListApp';
import { AppHeader } from './cmps/AppHeader';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="app-container">
      <PlayListApp />
      </div>
    </div>
  );
}

export default App;
