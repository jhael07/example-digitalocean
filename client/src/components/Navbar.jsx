import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <p>Logo</p>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/new">Crear Tarea</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
