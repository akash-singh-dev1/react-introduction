import React from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import "./index.css";
import TabButton from "/src/components/TabButton/TabButton.jsx";
import { useState } from "react";

function App() {
  console.log("app component is executed");

  const [selectedTopic, setSelectedTopic] = useState("");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        {/*section for coreconcept */}
        <section id="core-concepts">
          <h2> core concept</h2>
          <ul>
            {CORE_CONCEPTS.map((obj, index) => {
              console.log("map function is executed");
              return (
                <CoreConcept
                  key={index}
                  img={obj.image}
                  title={obj.title}
                  description={obj.description}
                />
              );
            })}
          </ul>
        </section>
        {/*section for Example */}
        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/* included isSelected prop to Dynamically add class active to the TabButton component*/}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              States
            </TabButton>
          </menu>
          {selectedTopic === "" ? (
            <p>please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
