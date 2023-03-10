import "./App.css";
import AboutSection from "./components/aboutSection/AboutSection";
import ContactsComponent from "./components/contacts/ContactsComponent";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import ProductSectionComponent from "./components/productSection/ProductSectionComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductSectionComponent />
      <ContactsComponent />
      <Introduction />
      <AboutSection />
    </div>
  );
}

export default App;
