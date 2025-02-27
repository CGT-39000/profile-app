import Wrapper from "../components/Wrapper";
import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <>
        <h1>Register</h1>
        <AuthForm isRegister={true}></AuthForm>
		<br />
        <Link to="/register">
          Don&apos;t Have An Account? Please Register Here
        </Link>
      </>
    </Wrapper>
  );
};

export default Register;
