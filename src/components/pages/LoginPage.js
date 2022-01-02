import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css";
import Select from "react-select";
export default function SignInPage() {
  const options = [
    { value: "medico", label: "Medico" },
    { value: "paciente", label: "Paciente" },
    { value: "secretaria", label: "Secretaria" },
  ];
  const option = [
    { value: "femenino", label: "Femenino" },
    { value: "masculino", label: "Masculino" },
  ];
  const [datos, setDatos] = useState({
    userName: "",

    contraseña: "",
  });
  const handleInputChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  async function entrar(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userName: "junisa",
      contraseña: "123sadad",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://egsjxsrhvb.execute-api.us-east-1.amazonaws.com/dev/users/login",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="text-center m-5-auto">
      <h2>Ingreso</h2>
      <form action="/home" onSubmit={entrar}>
        <p>
          <label>Username or email address</label>
          <br />
          <input
            type="text"
            onChange={handleInputChange}
            name="userName"
            required
          />
        </p>
        <p>
          <label>Password</label>
          <Link to="/register">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            onChange={handleInputChange}
            name="contraseña"
            required
          />
        </p>
        <p>
          <br />
          <label style={{ marginLeft: -10 }}>Tipo de usuario </label>
          <br />
          <Select options={options} />  
          <br />
        </p>
        <p>
          <button
            id="sub_btn"
            onClick={() => console.log("estos")}
            type="submit"
          >
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
