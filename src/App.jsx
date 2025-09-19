import Header from "./components/Header";
import PasswordGenerator from "./components/PasswordGenerator";
import Features from "./components/Features";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PasswordGenerator />
        <Features />
        <Instructions />
      </main>
      <Footer />
    </div>
  );
};

export default App;
