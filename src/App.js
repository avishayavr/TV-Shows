import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';
import SearchComp from './pages/SearchPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoadingPage/>}/>
        <Route path='homePage' element={<HomePage/>}/>
        <Route path='searchComp' element={<SearchComp/>}/>
      </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
