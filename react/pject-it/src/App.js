import './App.css';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Profiles from './componets/Profiles';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profiles />
    </div>
  );
}

export default App;
