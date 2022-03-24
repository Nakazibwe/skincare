import React from "react";
import PropTypes from "prop-types";
import {useLocation} from  'react-router-dom';
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/'&& <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add Step"}
        onClick={onAdd}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Skin Care Routine",
  subtitle: "Your go to skincare routine for a glow",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
