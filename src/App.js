import { useState } from 'react';
import './App.css';

function Customer() {

  const [customer, _setCustomer] = useState({ name: "", code: "" });
  const [customers, _setCustomers] = useState([]);

  const setCustomer = (e) => {
    _setCustomer(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };


  const setCustomers = (e) => {
    _setCustomers(prevState => (
      [...prevState, customer]
    ));

    _setCustomer(prevState => ({
      ...prevState,
      name: "", code: ""
    }));
  };
  return (
    <div className="CustomerComponent">
      Name: <input value={customer.name} type="text" name="name" id="name" onChange={setCustomer} /><br />

      Code: <input value={customer.code}type="text" name="code" id="code" onChange={setCustomer} /><br />

      <input type="button" value="Add to Table" onClick={setCustomers} /><br />

      <table>
        <tr>
          <td>Name</td>
          <td>Code</td>
        </tr>
        {customers.map(
          (x, index) => (
            <tr key={index}>
              <td>{x.name}</td>
              <td>{x.code}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Customer;
