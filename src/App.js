import Header from './components/Header';
import Banner from './components/Banner';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import PokemonModal from './components/PokemonModal';
import Store from './store/store';

export default function App() {
  return (
    <Store>
      <Header />
      <Banner />
      <PokemonList />
      <Footer />
      <PokemonModal />
    </Store>
  );
}
