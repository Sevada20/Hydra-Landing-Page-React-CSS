import "./App.css";
import AboutSection from "./components/aboutSection/AboutSection";
import Activity from "./components/activitySection/Activity";
import Cards from "./components/cards/Cards";
import ContactForm from "./components/contactForm/ContactForm";
import ContactsComponent from "./components/contacts/ContactsComponent";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import PartnyorEcosystemComp from "./components/partnyorsEcosystems/PartnyorEcosystemComp";
import ProductSectionComponent from "./components/productSection/ProductSectionComponent";
import TechnoHardware from "./components/technologies&Hardware/TechnoHardware";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductSectionComponent />
      <ContactsComponent />
      <Introduction />
      <AboutSection />
      <Cards />
      <TechnoHardware />
      <PartnyorEcosystemComp />
      <Activity />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
