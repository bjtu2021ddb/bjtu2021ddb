import AV from 'leancloud-storage/live-query';
import './App.css';
import Home from './pages/Home';
AV.init({
  appId: 'D2Lp5opsBuU0pViwGNsM9I88-gzGzoHsz',
  appKey: 'sTjoMU6UUPTSV127KrTJcC0Q',
  serverURL: 'https://d2lp5ops.lc-cn-n1-shared.com',
});

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
