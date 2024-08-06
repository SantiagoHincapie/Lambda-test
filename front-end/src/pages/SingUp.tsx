import { ChangeEvent, FormEvent, useState } from "react";
import { postNewUser } from "../api/user.api.ts";
import { DataInterface } from "../Interfaces/DataInterface";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SingUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState<DataInterface>({
    fullName: "",
    age: "",
    gender: "",
    cedula: "",
    cellPhone: "",
    email: "",
  });

  const onSubmit = handleSubmit(async (data) => {
    const resp = await postNewUser(data);
    console.log(resp);
  });
  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="card">
      <div className="card-body">
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
