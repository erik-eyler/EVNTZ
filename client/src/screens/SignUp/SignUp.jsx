import { useState } from "react";
import "./SignUp.css";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const SignUp = (props) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = async () => {
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      setToggle(false);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if(form.password !== form.passwordConfirmation){
      setToggle(true);
    } else {
      onSignUp();
    }
  }

  const {
    firstName,
    lastName,
    username,
    email,
    password,
    passwordConfirmation,
  } = form;
  
 

  return (
    <Layout>
    <div className="form-container">
      <h3>Sign Up</h3>
      <form onSubmit={submitForm}>
        <label>First Name</label>
        <input
          required
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Enter First Name"
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Enter Last Name"
          onChange={handleChange}
        />
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={handleChange}
        />
        <label>Email address</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {toggle ? <div className="danger">Passwords do not match</div> : null}
        <button type="submit">Sign Up</button>
      </form>
      </div>
      </Layout>
  );
};

export default SignUp;
