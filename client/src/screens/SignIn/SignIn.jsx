import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import "./SignIn.css"

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid email or password",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    if (form.isError) {
      return (
        <div className="danger">
          {form.errorMsg}
        </div>
      );
    } else {
      return null;
    }
  };

  const { email, password } = form;
  return (
    <Layout>
      <div className="authentication-form">
      <div className="helper">
          <p>New to EVNTZ?</p>
          <Link to="/sign-up" className="login-signup-link"> Create an account <i className="fas fa-chevron-right"></i></Link>
        </div>
        <div className="user-form-container">
          <h3 className="user-form-heading">Sign In</h3>
          <p className="mobile-helper">New to EVNTZ?<Link to="/sign-up" className="login-signup-link"> Create an account <i className="fas fa-chevron-right"></i></Link></p>
          <form className="user-form"onSubmit={onSignIn}>
            <div className="email-group"> 
              <label className="user-label">Email</label>
              <input
                className="user-input"
                required
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="password-group">
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
            {/* {toggle ? <div className="danger">Incorrect email or password</div> : null} */}
            <br/>
            {renderError()}
            <Button name="Sign In" />
          
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
