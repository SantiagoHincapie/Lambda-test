import { postNewUser } from "../api/user.api.ts";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SingUp = () => {
  const notifyError = () =>
    toast.error("Asegúrate de diligenciar todos los campos");
  const notifySuccess = () => toast.success("Usuario registrado exitosamente");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const resp = await postNewUser(data);
      console.log(resp);
      notifySuccess();
      navigate("/LogIn"); // Redirige a otra página tras el éxito (ajusta la ruta según sea necesario)
    } catch (error) {
      console.error(error);
      notifyError();
    }
  });

  return (
    <div className="card">
      <div className="card-body">
        <Toaster position="top-center" reverseOrder={false} />
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              {...register("full_name", { required: true, minLength: 10 })}
            />
            {errors.full_name && <span> VALOR REQUERIDO*</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              type="text"
              className="form-control"
              {...register("age", { required: true, maxLength: 3 })}
            />
            {errors.age && <span> VALOR REQUERIDO*</span>}
          </div>
          <div className="mb-3 form-check">
            <select
              className="form-select"
              aria-label="Default select example"
              {...register("gender", { required: true })}
            >
              <option disabled>Genero</option>
              <option value="F">Femenino</option>
              <option value="M">Masculino</option>
              <option value="O">otro</option>
              <option value="NA">Prefiero no decirlo</option>
            </select>
            {errors.gender && <span> VALOR REQUERIDO*</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Cedula</label>
            <input
              type="text"
              className="form-control"
              {...register("cedula", { required: true, maxLength: 11 })}
            />
            {errors.cedula && <span> VALOR REQUERIDO*</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Numero celular</label>
            <input
              type="text"
              className="form-control"
              {...register("cell_phone_number", {
                required: true,
                maxLength: 10,
              })}
            />
            {errors.cell_phone_number && <span> VALOR REQUERIDO*</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electronico</label>
            <input
              type="text"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && <span> VALOR REQUERIDO*</span>}
          </div>
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
