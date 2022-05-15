import styled from "styled-components";
import { BsArrowBarLeft } from "react-icons/bs";
import { useNavigate } from "react-router";

export default function Dashboard(props) {
  const { setShowDashboard, showDashboard } = props;

  const navigate = useNavigate();

  function showOptionsOrName() {
    if (!localStorage.getItem("token")) {
      return (
        <>
          <span onClick={() => navigate("/signin")}>Sign In</span>
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </>
      );
    }
    return (
      <>
        <span>Olá, {localStorage.getItem("name")}</span>
        <span
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            setShowDashboard(false);
            navigate("/");
          }}
        >
          Logout
        </span>
      </>
    );
  }

  return (
    <Wrapper>
      <BluredBG>teste</BluredBG>
      <DashboardContainer showDashboard={showDashboard}>
        <DashboardHeader>
          <h3>Shoes&Clothes</h3>
        </DashboardHeader>

        <OptionsContainer>{showOptionsOrName()}</OptionsContainer>

        <DashboardHeader>
          <h3>Categorias</h3>
        </DashboardHeader>

        <CategoriesContainer>
          <span onClick={() => setShowDashboard(false)}>Sneakers</span>
        </CategoriesContainer>

        <BsArrowBarLeft
          id="arrow-back"
          onClick={() => setShowDashboard(false)}
        />
      </DashboardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const BluredBG = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 2;
`;

const DashboardContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  #arrow-back {
    font-size: 20px;
  }
`;

const CategoriesContainer = styled.div`
  margin-bottom: 25px;

  span {
    margin-top: 25px;
    font-weight: 700;
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  align-items: center;

  h3 {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Koulen", cursive;
    font-weight: 700;
    font-size: 25px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-weight: 700;
  }
`;
