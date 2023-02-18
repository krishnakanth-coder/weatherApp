import './App.css'
import CurrentLocation from './components/CurrentLocation';
import SearchFavLocation from './components/SearchFavLocation';
function App() {
  return (
    <div className="app-container">
      <div className="weather-app-container">
      <CurrentLocation/>
      <SearchFavLocation/>
      </div>
    </div>
  );
}

export default App;
