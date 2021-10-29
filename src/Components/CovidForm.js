import React, { useState } from 'react';

function CovidForm(props) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ID, setID] = useState('');
  const [Address, setAddress] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Temperture, setTemperture] = useState('');
  const [radio, setRadio] = useState('');
  const [radio2, setRadio2] = useState('');
  const [radio3, setRadio3] = useState('');

  const handleSubmit = e => {
    props.handleSubmit(
      FirstName,
      LastName,
      ID,
      Address,
      PhoneNumber,
      Temperture,
      radio,
      radio2,
      radio3
    );

    e.preventDefault();
  };
  const handleChangeFirstName = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleChangeLastName = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleChangeID = e => {
    e.preventDefault();
    setID(e.target.value);
  };
  const handleChangeAddress = e => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const handleChangePhoneNumber = e => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleChangeTemperture = e => {
    e.preventDefault();
    setTemperture(e.target.value);
  };

  return (
    <div className="container">
      <h2 className="heading">
        Covid-19 Screening Form
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bank2 ml-2"
          viewBox="0 0 16 16"
        >
          <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
        </svg> */}
        {/* <h6 className="sub-text">Health Center</h6> */}
        <h5>Screening Checklist</h5>
      </h2>
      <form onSubmit={handleSubmit} />
      <input
        type="text"
        placeholder="First Name"
        className="form-control w-75 mt-3"
        onChange={handleChangeFirstName}
        required
      />
      <input
        type="text"
        placeholder="Surname"
        className="form-control w-75 mt-3"
        onChange={handleChangeLastName}
        required
      />
      <input
        type="text"
        placeholder="ID Number"
        className="form-control w-75 mt-3"
        onChange={handleChangeID}
        required
      />
      <input
        type="text"
        placeholder="Address"
        className="form-control w-75 mt-3"
        onChange={handleChangeAddress}
        required
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="form-control w-75 mt-3"
        onChange={handleChangePhoneNumber}
        required
      />
      <input
        type="text"
        placeholder="Temperture"
        className="form-control w-75 mt-3"
        onChange={handleChangeTemperture}
        required
      />

      {/* Questions */}

      <div className="heading mt-3">
        <h4>Medical Questions</h4>
      </div>
      <div>
        <label> Have you been tested positive for Covid-19?{radio}</label>
        <br />
        <input
          type="radio"
          value="yes"
          id="grip1"
          checked={radio === 'Yes'}
          onChange={e => {
            setRadio(e.target.value);
          }}
        />
        Yes
        <br />
        <input
          id="grip1"
          type="radio"
          value="No"
          checked={radio === 'No'}
          onChange={e => {
            setRadio(e.target.value);
          }}
        />
        No
        <br />
        <label>
          Have you been incontact with someone who has Covid-19?{radio2}
        </label>
        <br />
        <input
          type="radio"
          value="yes"
          id="grip2"
          checked={radio2 === 'Yes'}
          onChange={e => {
            setRadio2(e.target.value);
          }}
        />
        Yes
        <br />
        <input
          type="radio"
          value="No"
          id="grip2"
          checked={radio2 === 'No'}
          onChange={e => {
            setRadio2(e.target.value);
          }}
        />
        No
        <br />
        <label>Do you have any of the following symptoms?{radio3}</label>
        <br />
        <input
          type="radio"
          value="Fever"
          id="grip3"
          checked={radio3 === 'Fever'}
          onChange={e => {
            setRadio3(e.target.value);
          }}
        />
        Fever
        <br />
        <input
          type="radio"
          value="Cough"
          id="grip3"
          checked={radio3 === 'Cough'}
          onChange={e => {
            setRadio3(e.target.value);
          }}
        />
        Cough
        <br />
        <input
          type="radio"
          value="shortness of Breath"
          id="grip3"
          checked={radio3 === 'shortness of Breath'}
          onChange={e => {
            setRadio3(e.target.value);
          }}
        />
        Difficulty of Breathing
        <br />
        <input
          type="radio"
          value="None"
          id="grip3"
          checked={radio3 === 'None'}
          onChange={e => {
            setRadio3(e.target.value);
          }}
        />
        None
      </div>

      <input
        className="btn btn-light mb-1 ml-4"
        type="submit"
        value="Submit"
        onClick={handleSubmit}
      />
      <input className="btn btn-success mb-1 ml-3" type="reset" />
    </div>
  );
}

export default CovidForm;
