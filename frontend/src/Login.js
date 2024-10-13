import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Evento que atualiza os valores dos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Evento ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Validação
    const validationErrors = Validation(values);

    if (Object.keys(validationErrors).length > 0) {
      // Se houver erros, armazena-os no estado
      setErrors(validationErrors);
    } else {
      // Se não houver erros, prosseguir com o login (simulação ou envio ao backend)
      console.log("Login efetuado com sucesso!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action=""onSubmit={handleSubmit}>
          {" "}
          {/* Evento onSubmit */}
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Insira seu Email"
              className="form-control rounded-0"
              value={values.email}
              onChange={handleInputChange} // Evento onChange
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Senha</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Insira sua Senha"
              className="form-control rounded-0"
              value={values.password}
              onChange={handleInputChange} // Evento onChange
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button className="btn btn-success w-100 rounded-0">Login</button>
          <p></p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Criar Conta
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
