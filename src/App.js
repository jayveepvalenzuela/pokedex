import Header from './components/Header';
import Banner from './components/Banner';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import PokemonModal from './components/PokemonModal';
import Store from './store/store';

function App() {
  return (
    <main>
      <Store>
        <Header />
        <Banner />
        <PokemonList />
        <Footer />
        <PokemonModal />
      </Store>
    </main>
  );
}

export default App;
