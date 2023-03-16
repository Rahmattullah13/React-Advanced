import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const handleChange = (e) => {
  //   //for now we won't use it
  //   const name = e.target.name;
  //   const value = e.target.value;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(name, email);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" onChange={(e) => setName(e.target.value)} id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} id="email" />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
