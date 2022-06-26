import React from "react";
import "./Header.css";
import {IconButton} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>
			<img className="header__logo" src="./Tinder_logo.png" alt="" />
			<IconButton>
				<ForumIcon fontSize="large" className="header__icon" />
			</IconButton>
		</div>
	);
}

export default Header;