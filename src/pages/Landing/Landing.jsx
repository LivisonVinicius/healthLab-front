import BGImage from "../../assets/images/benefits-banner 1.png";
import logo from "../../assets/images/initialLoadLogo.png";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styledComponents/Landing/LandingSC";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  useEffect(() => {
    if (userData !== null) {
      navigate("/home");
    }
  }, []);
  return (
    <Container bg={BGImage}>
      <div>
        <img src={logo} alt="logo" />
        <h1>Medical Reports Whenever You are</h1>
        <div>
          <button
            className="button primary"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
          <button
            className="button secondary"
            onClick={() => navigate("/signup")}
          >
            New here? Register
          </button>
        </div>
      </div>
    </Container>
  );
}
