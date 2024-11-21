export const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gender: "",
  subjects: [],
  url: "",
  choice: "",
  about: "",
  errors: {}
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_SUBJECTS":
      return {
        ...state,
        subjects: action.payload,
      };
    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "reset":
      return INITIAL_STATE;
    default:
      state;
  }
};
