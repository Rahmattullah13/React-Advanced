import { data } from '../../../data';
import React from 'react';

const useStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    setPeople(people.filter((person) => person.id !== id));
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" style={{ marginTop: '2rem' }} className="btn" onClick={clearAllItems}>
        clear items
      </button>
    </div>
  );
};

export default useStateArray;