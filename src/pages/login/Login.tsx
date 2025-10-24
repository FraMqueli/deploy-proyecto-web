import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../../assets/logo_web.png";

interface User {
  name: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<User>({ name: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    /*e.preventDefault();

    const body_post: User = {
      name: formData.name,
      password: formData.password,
    };

    console.log(users);

    if (users !== null) {
      const user = users.find((v) => v.name === formData.name);
      if (user && user.password !== formData.password) {
        alert("Contraseña incorrecta");
        return;
      }
    }

    if (users) {
      const user = users.find((v) => v.name === formData.name);
      if (!user) {
        const updatedUsers = [...users, body_post];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    } else {
      const newList: User[] = [body_post];
      setUsers(newList);
      localStorage.setItem("users", JSON.stringify(newList));
    }

    try {
      const response = await fetch("https://t1-back-2025-2-s1.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body_post),
      });

      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/pokemons");
    } catch (error) {
      console.error("Error:", error);
    } */
    console.log("a");
  };

  return (
    <div className="login">
      <div className="contenedor-formulario">
        <h1
          style={{ fontSize: "16px", marginBottom: "10px", fontWeight: "bold" }}
        >
          INICIAR SESIÓN
        </h1>
        <hr className="linea-divisoria" />
        <img className="logo-login" src={logo} />
        <h3 className="titulo-bienvenido">Bienvenido a Wamart</h3>
        <p className="instrucciones">
          Ingresa tu usuario y contraseña para iniciar sesión
        </p>
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre de usuario"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button className="boton-login" type="submit">
            Iniciar sesión
          </button>

          <div className="info-login">
            <p>¿Olvidaste tu contraseña?</p>
            <br />
          </div>
          <button
            className="boton-login"
            type="button"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
