import BannerSection from './section/BannerSection';
import ComparativeSection from './section/comparativeSection';
import NavBar from './section/NavBar';
import Recommendation from './section/Recommendation';
import TransportSection from './section/TransportSection';
import ProductsSections from './section/ProductsSections';
import CartSection from './section/CartSection';
import FormSection from './section/FormSection';

function App() {
  return (
    <>
      <NavBar />
      <BannerSection />
      <ComparativeSection />
      <Recommendation />
      <TransportSection />
      <ProductsSections />
      <CartSection />
      <FormSection />
    </>
  );
}

export default App;
