import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from './ComponentsFolders/HomePage';
import LoadingPage from './ComponentsFolders/AnimationComp/LoadingPage';
import SearchComp from './ComponentsFolders/SearchComponents/SearchComp';


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
