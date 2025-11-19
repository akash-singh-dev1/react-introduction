import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "/src/components/CoreConcept/CoreConcept.jsx";
const AllCoreConcepts = () => {
  return (
    <>
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
    </>
  );
};
export default AllCoreConcepts;
