import React from "react";
import { Toolbar, Typography } from "@mui/material";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import "./index.css";
import { useHistory } from "react-router-dom";

const NavBar = ({ activeItem }) => {
  const history = useHistory();
  const [inputData, setInputData] = React.useState();

  const handleChange = (targetValue) => {
    setInputData(targetValue);
  };
  const handleOnTextKeyDown = (e) => {
    if (e.keyCode === 13) {
      return history.push(`/Search/${inputData}`);
    }
  };
  const renderNavItem = (title, active) => {
    return (
      <Typography sx={{ flexGrow: 1 }}>
        <span className={active ? "Navbar__active" : "Typography__NavBar"}>
          {" "}
          {title}
        </span>
      </Typography>
    );
  };
  return (
    <Toolbar className="NavBar">
      <Typography sx={{ flexGrow: 0.5, margin: "0 80px" }}>
        <LibraryBooksSharpIcon />
        <strong> Bookshop</strong>
      </Typography>
      {renderNavItem("Books", activeItem === "Books" ? true : false)}
      {renderNavItem("Genre", activeItem === "Genre" ? true : false)}
      {renderNavItem("Language", activeItem === "Language" ? true : false)}
      {renderNavItem("Aurthors", activeItem === "Aurthor" ? true : false)}

      <input
        type="search"
        className="search__NavBar"
        placeholder="&#xF002;   Search"
        value={inputData}
        onKeyDown={handleOnTextKeyDown}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Toolbar>
  );
};

export default NavBar;
