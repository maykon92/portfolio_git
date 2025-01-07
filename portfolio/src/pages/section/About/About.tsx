import { styled } from "@mui/material/styles";
import { Container, Typography, Divider, Box, Grid, Paper } from "@mui/material";

const About = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: "#8d848487",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "160px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const SkillBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
    borderRadius: '5px',
    boxShadow: theme.shadows[3],
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.dark
    }
  }));

  return (
    <>
      <StyledHero>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
          }}
        >
          <Container maxWidth="md">
            <Typography
              color="grey.contrastText"
              variant="h2"
              textAlign="center"
              marginTop="30px"
              marginBottom="10px"
              fontFamily="Segoe UI"
            >
              About me
            </Typography>
          </Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
              width: "100%",
            }}
          >
            <Typography
              color="grey.contrastText"
              variant="h6"
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              margin="0 auto"
              width="80%"
              padding="0 20px"
            >
              Tenho mais de 4 anos de experiência como desenvolvedor Full Stack,
              trabalhando com uma variedade de tecnologias e frameworks para
              construir aplicações robustas e escaláveis. Minha trajetória
              profissional inclui projetos em diferentes indústrias, onde pude
              aplicar e aprimorar minhas habilidades em desenvolvimento de software,
              design de sistemas e trabalho em equipe. Estou sempre em busca de
              novos desafios e oportunidades para crescer profissionalmente.
            </Typography>
          </Box>
        </Box>
        <Divider 
          variant="middle" 
          sx={{ 
            width: '80%', 
            margin: '0 auto', 
            borderWidth: '2px',
            borderColor: 'grey.contrastText'
          }} 
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
          }}
        >
          <Container maxWidth="md">
            <Typography
              color="grey.contrastText"
              variant="h2"
              textAlign="center"
              marginTop="10px"
              marginBottom="10px"
              fontFamily="Segoe UI"
            >
              Skills
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  PHP
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  HTML
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  CSS
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  JavaScript
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  MySQL
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  React
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  MongoDB
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  Firebase
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  PostgreSQL
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  TypeScript
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  Git
                </SkillBox>
              </Grid>
              <Grid item xs={12} sm={8} md={2}>
                <SkillBox>
                  Material UI
                </SkillBox>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </StyledHero>
    </>
  );
};

export default About;
