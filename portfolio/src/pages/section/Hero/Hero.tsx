import { Box, Container, Grid, Typography, styled, Button } from "@mui/material";
import Avatar from "../../../assets/images/portfolio_02-removebg-preview_01.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { AnimatedBackground } from "../../../components/AnimatedBackGround/AnimatedBackGround";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "160px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "65%",
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* IMAGE */}
          <Grid item xs={12} md={4}>
            <Box position="relative" sx={{ overflow: "hidden" }}>
              <Box position="absolute" width="150%" top={-100} right={0}>
                <AnimatedBackground />
              </Box>

              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>

          {/* TEXT */}
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              pb={2}
            >
              Maykon Da Luz
            </Typography>

            <Typography
              color="primary.contrastText"
              variant="h4"
              textAlign="center"
            >
              Building Web Applications & Cyber Security Solutions
            </Typography>

            {/* BUTTONS */}
            <Grid container justifyContent="center" spacing={3} pt={3}>
              {/* DOWNLOAD CV */}
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/Maykon_Da_Luz_CV.pdf"
                  download
                  sx={{
                    width: "100%",
                    maxWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    py: 2,
                  }}
                >
                  <Typography>Download CV</Typography>
                </Button>
              </Grid>

              {/* CONTACT */}
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <Button
                  variant="outlined"
                  onClick={() => navigate("/contact")}
                  startIcon={<MailOutlineIcon />}
                  sx={{
                    width: "100%",
                    maxWidth: 220,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    py: 2,
                  }}
                >
                  <Typography>Contact me</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;