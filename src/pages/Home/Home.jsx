import { useNavigate } from "react-router-dom";
import { Container } from "../../styledComponents/Home/HomeSC";
import DoctorOptions from "../../components/homeComponents/DoctorOptions";
import AdminOptions from "../../components/homeComponents/AdminOptions";
import PatientOptions from "../../components/homeComponents/PatientOptions";
import TechnicianOptions from "../../components/homeComponents/TechnicianOption";
import transparentLogo from "../../assets/images/health lab-logos_transparent.png";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { userData } from "../../config/constants";
export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  useEffect(() => {
    if (userData() === null) {
      navigate("/");
    } else {
      setName(userData().name);
      setRole(userData().role);
    }
  }, [name, role, userData]);
  return (
    <Container>
      <img src={transparentLogo} alt="logo" />
      <RiLogoutBoxLine onClick={() => logOut()} />
      <div className="welcomeBox">
        <h1>Hello, {name}</h1>
      </div>
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
