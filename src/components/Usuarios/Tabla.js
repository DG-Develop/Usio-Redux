import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Tabla = (props) => {
  const ponerFilas = () =>
    props.usuarios.map(({ id, name, email, website }, key) => (
      <tr key={id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{website}</td>
        <td>
          <Link to={ `/publicaciones/${key}` }>
            <div className="eye-solid icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{ponerFilas()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);
