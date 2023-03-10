import "./App.css";
import ContactsComponent from "./components/contacts/ContactsComponent";
import Header from "./components/header/Header";
import ProductSectionComponent from "./components/productSection/ProductSectionComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductSectionComponent />
      <ContactsComponent />
    </div>
  );
}

export default App;
