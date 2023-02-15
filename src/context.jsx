import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
  paraa: "",
  parah :"",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Little Lemon",
        image: "./images/hero1.jpg",
        parah:"We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist."
      },
    });
  };

  const udpateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Aman Agrawal",
        image: "./images/about1.svg",
        paraa:"I am a Developer of this Website, Hope you liked it."
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// gloabal custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
