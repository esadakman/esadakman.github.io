import {
  ButtonStyleCard,
  Card,
  CardWrapper,
  Desc,
  ProjectsContainer,
  ProjectsTitles,
  TitleCard,
} from "../componentsStyles/ReactProjects.styled";
import { useNavigate } from "react-router-dom"; 
import { Flex } from "../componentsStyles/Main.styled";
import djangoData from "../../helpers/djangoProjects";
import Reveal from "../Reveal";

const DjangoProjects = () => {
  const navigate = useNavigate();
  const openInNewTab = (url) => {
    // 👇️ Proje linkine tıklanıldığında yeni sekmede açmak için aşağıdaki func. kullandım
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Flex justify="center" wrap="wrap" style={{ marginTop: "3rem" }}>
      <Flex>
        <ProjectsTitles>Django Projects</ProjectsTitles>
      </Flex>
      <ProjectsContainer>
        {djangoData.map((info, i) => {
          return (
            <Reveal key={info?.id} delay={(i % 3) * 0.08}>
            <CardWrapper
              title="Click for details"
              onClick={() => openInNewTab(info?.link)}
            >
              <TitleCard>
                <div className="fa fa-circle red" />
                <div className="fa fa-circle yellow" />
                <div className="fa fa-circle green" />
                <p>{info?.projectName}</p>
              </TitleCard>
              <Card>
                <img src={info?.imgSrc} alt="poster" />
                <Desc>
                  <img alt="detail" title="Click for details ..." /> 
                  <h2>Overview</h2>
                  <ul>
                    <li>{info?.overview[0]}</li>
                    <li>{info?.overview[1]}</li>
                    <li>{info?.overview[2]}</li>
                  </ul>
                </Desc>
              </Card>
            </CardWrapper>
            </Reveal>
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

export default DjangoProjects;
