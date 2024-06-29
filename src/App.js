
import './App.css';
import Advertisement from './components/Advertisement/Advertisement';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Vegetable from './components/Vegetable/Vegetable';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Advertisement/>
      <Catalog/>
      <Vegetable/>
      <Footer/>
    </div>
  );

}


export default App;
