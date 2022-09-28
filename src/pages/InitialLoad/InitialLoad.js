import logo from "../../assets/images/initialLoadLogo.png";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styledComponents/InitialLoad/InitialLoadSC";

export default function InitialLoad() {
  const navigate = useNavigate();
  setTimeout(() => navigate("/welcome"), 4000);
  return (
    <Container>
      <div>
        <img src={logo} alt="Health Lab Logo" />
      </div>
    </Container>
  );
}
