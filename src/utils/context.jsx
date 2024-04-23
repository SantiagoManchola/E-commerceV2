import  { createContext } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

const AppContext = ({ children }) => {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

AppContext.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppContext;