import { createContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const ModeContext = createContext();
export const ModeProvider = ({ children }) => {
	const [mode, setMode] = useState("light");
	const handleModeChange = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
	}

	return (
		<ModeContext.Provider value={{ mode, handleModeChange}}>
			{children}
		</ModeContext.Provider>
	)
}

ModeContext.propTypes = {
  children: PropTypes.element,
};
