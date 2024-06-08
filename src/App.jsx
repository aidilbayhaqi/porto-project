import NavBar from './components/NavBar';
import {Banner} from './components/Banner'
import {Skill} from './components/Skill'
import {Project} from './components/Project'
import {Contact} from './components/Contact'
import { Footer } from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      </div>
  );
}

export default App;
