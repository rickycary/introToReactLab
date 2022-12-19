import logo from './logo.svg';
import './App.css';
import './styles.css';
import Sidebar from './components/Sidebar';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Header from './components/Header';
import MainBox from './components/MainBox';


function App() {
  return( <>
    <div class="container">
      <Sidebar />
      <div class="content">
        <div className="header">
          <Header />
        </div>
        <div class="boxDivs">
          <Box1 />
          <Box2 />
          <Box3 />
        </div>
          <div className="mainBox">
            <MainBox />
          </div>
        </div>
    </div>
      </>
  )
}

export default App;
