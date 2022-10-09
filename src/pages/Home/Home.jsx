import logo from "../../assets/images/initialLoadLogo.png";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styledComponents/Home/HomeSC";
import DoctorOptions from "../../components/homeComponents/DoctorOptions";
import AdminOptions from "../../components/homeComponents/AdminOptions";
import PatientOptions from "../../components/homeComponents/PatientOptions";
import TechnicianOptions from "../../components/homeComponents/TechnicianOption";
import transparentLogo from "../../assets/images/health lab-logos_transparent.png";
export default function Home() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData) navigate("/");
  const role = userData.role;
  return (
    <Container>
      <img src={transparentLogo} alt="logo" />
      <div className="descriptionBox">
        <h2>Description</h2>
        <p>
          We know that your time is important, that's why we brought you a
          solution so you can take care of your health with greater peace of
          mind.
        </p>
      </div>
      {role === "admin" ? (
        <AdminOptions />
      ) : role === "doctor" ? (
        <DoctorOptions />
      ) : role === "technician" ? (
        <TechnicianOptions />
      ) : (
        <PatientOptions />
      )}
    </Container>
  );
}
