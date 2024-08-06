import { useNavigate } from "react-router-dom";

const Home = (props: any) => {
  const { fullName, age, gender, cedula, cellPhone, email } = props;
  console.log(fullName, age, gender, cedula, cellPhone, email);
  const navigate = useNavigate();
  const closetSesion = () => {
    navigate("/LogIn");
  };

  return (
    <div
      className="card"
      style={{
        width: "450px",
      }}
    >
      <div className="card-body">
        <h2>Bienvenid@ {fullName}</h2>
        <br />
        <h3> Edad: {age}</h3>
        <br />
        <h3> Genero: {gender}</h3>
        <br />
        <h3> cedula: {cedula}</h3>
        <br />
        <h3> Telefono: {cellPhone}</h3>
        <br />
        <h4> Correo: {email}</h4>
        <br />
        <button type="button" className="btn btn-info" onClick={closetSesion}>
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default Home;
