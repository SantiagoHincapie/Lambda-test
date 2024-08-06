import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'

import { DataInterface } from "../Interfaces/DataInterface";

import { getByUser } from "../api/user.api";

interface LogInProps {
  userData: (data: DataInterface) => void;
}

const LogIn = (props: LogInProps) => {
  const navigate = useNavigate();
  const [logInData, setLogInData] = useState<DataInterface>({
    age: "",
    cedula: "",
    cell_phone_number: "",
    email: "",
    full_name: "",
    gender: "",
  });

  const onLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: CONSUMIR API
    const response = await getByUser(logInData.email, logInData.cedula);
    const userData = response.data.data;

    //mandar a los props logInData
    props.userData(response.data);
    navigate("/Home");
  };

  const handleLogIn = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLogInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className="card"
      style={{
        width: "450px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">LogIn</h5>
        <form onSubmit={onLogIn}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Correo electronico"
              name="email"
              onChange={handleLogIn}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Cedula" className="form-label">
              Cedula
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Correo electronico"
              name="cedula"
              onChange={handleLogIn}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar sesion
            <Link to={"/Home"} />
          </button>
        </form>
        <Link to={"/SingUp"}>Registrarse</Link>
      </div>
    </div>
  );
};

export default LogIn;
