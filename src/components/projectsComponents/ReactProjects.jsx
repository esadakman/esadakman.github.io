import {
  ButtonStyleCard,
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  TitleCard,
} from "../componentsStyles/ReactProjects.styled"; 
import { useNavigate } from "react-router-dom";
import { Title } from "../componentsStyles/About.styled";
import { Flex } from "../componentsStyles/Main.styled";
import reactData from "../../helpers/reactProjects";

const ReactProjects = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    // 👇️ Proje linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  }; 
  return (
    <Flex justify="center" wrap="wrap" style={{marginTop:'3rem'}}>
      <Flex>
        <Title>React Projects</Title>
      </Flex>
      <ProjectsContainer>
        {reactData.map((info) => {
          return (
            <CardWrapper
              key={info?.id}
              title="Click for details"
              onClick={() => openInNewTab(info?.link)}
            >
              <Card>
                <img src={info?.imgSrc} alt="poster" />
                <Desc>
                  <h2>Overview</h2>
                  <ul>
                    <li>{info?.overview[0]}</li>
                    <li>{info?.overview[1]}</li>
                    <li>{info?.overview[2]}</li>
                  </ul>
                </Desc>
              </Card>
              <TitleCard>
                <p>{info?.projectName}</p>
              </TitleCard>
            </CardWrapper>
          );
        })}

        {/* //! ============Divider=========================== */}
      </ProjectsContainer>
      <ButtonStyleCard
        onClick={() => navigate(-1)}
        style={{ width: "fit-content", height: "3rem" }}
      >
        GO TO HOMEPAGE{" "}
      </ButtonStyleCard>
    </Flex>
  );
};

export default ReactProjects;
