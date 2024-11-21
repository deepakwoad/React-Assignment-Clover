import { useReducer } from "react";
import InputComponent from "./InputComponent";
import { formReducer, INITIAL_STATE } from "../utils/formReducer";

const Form = () => {

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedSubjects = checked
        ? [...state.subjects, value]
        : state.subjects.filter((subject) => subject !== value);
      dispatch({ type: "SET_SUBJECTS", payload: updatedSubjects });
    } else {
      dispatch({ type: "SET_FIELD", payload: { name, value } });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!state.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!state.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!state.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!state.contact) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^[6-9]\d{9}$/.test(state.contact)) {
      newErrors.contact = "Contact number must be 10 digits.";
    }

    if (!state.gender) {
      newErrors.gender = "Gender selection is required.";
    }

    if (!state.url) {
      newErrors.url = "URL is required.";
    } else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(state.url)) {
      newErrors.url = "Enter a valid URL.";
    }

    if (!state.choice) {
      newErrors.choice = "You must select an option.";
    }

    if (!state.about.trim()) {
      newErrors.about = "About section cannot be empty.";
    }

    console.log(newErrors, "=============Error Object===============");

    dispatch({ type: "SET_ERRORS", payload: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    console.log("Form Data Submitted: ", state);
    } else {
      console.log("Validation failed.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-h2">Form in React</h2>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label={"First Name*"}
          type={"text"}
          name={"firstName"}
          placeholder={"Enter First Name"}
          value={state.firstName}
          onChange={handleChange}
          error={state.errors.firstName}
        />

        <InputComponent
          label={"Last Name*"}
          type={"text"}
          name={"lastName"}
          placeholder={"Enter Last Name"}
          value={state.lastName}
          onChange={handleChange}
          error={state.errors.lastName}
        />

        <InputComponent
          label={"Enter Email*"}
          type={"email"}
          name={"email"}
          placeholder={"Enter email"}
          value={state.email}
          onChange={handleChange}
          error={state.errors.email}
        />

        <InputComponent
          label={"Contact*"}
          type={"number"}
          name={"contact"}
          placeholder={"Enter Mobile Number"}
          value={state.contact}
          onChange={handleChange}
          error={state.errors.contact}
        />

        <InputComponent
          label={"Gender*"}
          type={"radio"}
          name={"gender"}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
          checked={(value) => state.gender === value}
          onChange={handleChange}
          error={state.errors.gender}
        />

        <InputComponent
          label={"Your best Subject"}
          type={"checkbox"}
          name={"subjects"}
          value={["English", "Maths", "Physics"]}
          checked={(value) => state.subjects.includes(value)}
          onChange={handleChange}
          error={state.errors.subjects}
        />

        <InputComponent
          label={"Enter URL*"}
          type={"url"}
          name={"url"}
          placeholder={"Enter URL"}
          value={state.url}
          onChange={handleChange}
          error={state.errors.url}
        />

        <InputComponent
          label={"Select your choice"}
          type={"select"}
          name={"choice"}
          value={state.choice}
          options={[
            { label: "Option 1", value: "Option 1" },
            { label: "Option 2", value: "Option 2" },
            { label: "Option 3", value: "Option 3" },
          ]}
          onChange={handleChange}
          error={state.errors.choice}
        />

        <InputComponent
          label={"About"}
          type={"textarea"}
          name={"about"}
          placeholder={"About yourself"}
          value={state.about}
          onChange={handleChange}
          error={state.errors.about}
        />

        <div className="button-group">
          <button type="reset" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
