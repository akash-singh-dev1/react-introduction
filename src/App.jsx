import React from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/*section for coreconcept */}
        <section id="core-concepts">
          <h2> core concept</h2>
          <ul>
            {CORE_CONCEPTS.map((obj) => {
              console.log("map function is executed");
              return (
                <CoreConcept
                  img={obj.image}
                  title={obj.title}
                  description={obj.description}
                />
              );
            })}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
