import Header from "./components/Header/Header.jsx";
import "./index.css";
import AllCoreConcepts from "./components/AllCoreConcepts/AllCoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  console.log("app component is executed");
  return (
    <>
      <Header />
      <main>
        {/*section for coreconcept */}
        <AllCoreConcepts />
        {/*section for Example */}
        <Examples />
      </main>
    </>
  );
}

export default App;
