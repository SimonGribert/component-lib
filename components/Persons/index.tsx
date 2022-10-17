import Person from "./Person";
import styles from "./Persons.module.css";

const Persons = (): JSX.Element => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.maxWContainer}>
        <div className={styles.personContainer}>
          <Person
            key={0}
            headshot="/headshot.jpeg"
            name="Simon Gribert"
            title="Full Stack Developer"
            index={0}
            // backgroundAnimation={backgroundAnimation}
          />
          <Person
            key={1}
            headshot="/headshot.jpeg"
            name="Michael Gribert"
            title="Senior Industry Salesman"
            index={1}
            // backgroundAnimation={backgroundAnimation}
          />
          <Person
            key={2}
            headshot="/headshot.jpeg"
            name="Jakob Gribert"
            title="Logistics Intern"
            index={2}
            // backgroundAnimation={backgroundAnimation}
          />
        </div>
      </div>
    </div>
  );
};

export default Persons;
