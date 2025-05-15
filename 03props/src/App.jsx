import "./App.css";
import Card from "./components/Card";

function App() {
  
  // let myObj = {
  //   username: "akash",
  //   age: 24
  // }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card channel="chai aur code"/>
      <Card channel = "akash"/>
    </>
  );
}

export default App;
