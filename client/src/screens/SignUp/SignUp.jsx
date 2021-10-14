import { useState } from "react";
import "./SignUp.css";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";

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
      <div className="authentication-form">
        <div className="user-form-container sign-up">
          <h3 className="user-form-heading">Sign Up!</h3>
          <form onSubmit={submitForm}>
            <div className="input-group">
              <label className="user-label">First Name</label>
              <input
                className="user-input"
                required
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label className="user-label">Last Name</label>
              <input
                className="user-input"
                required
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label className="user-label">Username</label>
              <input
                className="user-input"
                required
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label className="user-label">Email address</label>
              <input
                className="user-input"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label className="user-label">Password</label>
              <input
                className="user-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label className="user-label">Password Confirmation</label>
              <input
                className="user-input"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            {toggle ? <div className="danger">Passwords do not match</div> : null}
            <Button name="Sign Up" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
