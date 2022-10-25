import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from './ComponentsFolders/HomePage';
import LoadingPage from './ComponentsFolders/LoadingPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoadingPage/>}/>
        <Route path='homePage' element={<HomePage/>}/>
      </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
