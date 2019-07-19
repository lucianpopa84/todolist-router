import React from "react";
import { ALL, DONE, TODO } from "../useFilter";
import { NavLink } from "react-router-dom";

const style = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  maxWidth: "200px"
};

function Filter() {
  return (
      <div className="todoFilter" style={style}>
        <NavLink to="/all">
          {ALL}
        </NavLink>
        |
        <NavLink to="/done">
          {DONE}
        </NavLink>
        |
        <NavLink to="/todo">
          {TODO}
        </NavLink>
      </div>
  );
}

export default Filter;
