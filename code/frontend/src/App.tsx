import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Authentic from "./components/Authentic";
import Visit from "./components/Visit";

export default function App() {
  return (
    <div className="min-h-screen bg-ground text-ink font-body">
      <Nav />
      <main>
        <Hero />
        <Products />
        <Authentic />
      </main>
      <Visit />
    </div>
  );
}
