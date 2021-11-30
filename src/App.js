import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homes from './components/Homes/Homes';
import Resume from './components/Resume/Resume';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Homes/>}/>
          <Route path="/homes" element = {<Homes/>}/>
          <Route path="/resume" element = {<Resume/>}/>
          <Route path="/blog" element = {<Blog/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
