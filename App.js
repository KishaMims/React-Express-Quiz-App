import logo from './logo.svg';
import './App.css';
//import Diffculty from './Components/selectdiffculty';
import GetQuiz from './Components/getquiz';
//import QuizSetup from './Components/game';
import { Background } from './Components/background';

function App() {
  return (
    <div className="App">
      <Background img={"https://www.brookings.edu/wp-content/uploads/2020/05/Banner.jpg"}
        alt="many countries flags"/>
     <GetQuiz/>
    </div>
  );
}

export default App;
