import "./App.css";
import Overview from "./components/Overview";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <main className="bg-gradient-to-r from-pitch to-lilac h-screen p-10">
      <Overview />
    </main>
  );
}

export default App;
