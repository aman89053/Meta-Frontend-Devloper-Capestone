const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      paraa: action.payload.para,
      parah: action.payload.parah,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
      paraa: action.payload.paraa,
      parah: action.payload.parah,
    };
  }

  return state;
};

export default reducer;
