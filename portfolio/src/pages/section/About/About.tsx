import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import ApiIcon from "@mui/icons-material/Api";
import PsychologyIcon from "@mui/icons-material/Psychology";

const About = () => {
  const StyledAbout = styled("section")(({ theme }) => ({
    background:
      "linear-gradient(180deg, #2c2c2c 0%, #232323 40%, #0d0d0d 100%)",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const InfoCard = styled(Card)(() => ({
    height: "100%",
    borderRadius: 20,
    background: "rgba(255, 255, 255, 0.04)",
    backgroundImage: "none",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 14px 34px rgba(0,0,0,0.35)",
      border: "1px solid rgba(255,255,255,0.16)",
    },
  }));

  const cardItems = [
    {
      icon: <CodeIcon sx={{ fontSize: 34 }} />,
      title: "Full Stack Development",
      description:
        "Building complete applications with React, Node.js and MongoDB, covering frontend, backend and data integration.",
    },
    {
      icon: <ApiIcon sx={{ fontSize: 34 }} />,
      title: "Backend & APIs",
      description:
        "Designing REST APIs, handling data flow and implementing server-side logic using Node.js and Mongoose.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 34 }} />,
      title: "Cyber Security",
      description:
        "Developing practical lab projects to understand vulnerabilities, network behavior and system security.",
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 34 }} />,
      title: "Problem Solving",
      description:
        "Analytical and solution-oriented mindset focused on building efficient and scalable systems.",
    },
  ];

  return (
    <StyledAbout>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255,255,255,0.75)",
                letterSpacing: 2,
                fontWeight: 700,
              }}
            >
              Get to know me
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.2rem", md: "3rem" },
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              I am a full stack developer focused on building modern,
              responsive and scalable applications, with a strong interest in
              cyber security. My work combines frontend development, backend
              systems and database integration to create complete and
              functional solutions.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              I have professional experience as a systems developer in Brazil,
              where I worked on banking systems using PHP, JavaScript, SQL and
              the MVC architecture pattern. In this role, I developed and
              maintained features for real-world financial systems, working
              with business rules, production environments and structured
              application design.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.9,
              }}
            >
              Currently, I build applications using technologies such as React,
              TypeScript, Node.js and MongoDB, while also developing
              cybersecurity projects in controlled lab environments to better
              understand system vulnerabilities and security practices.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Based in Sydney, Australia
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Focused on Full Stack Development and Cyber Security
              </Typography>
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {cardItems.map((item) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <InfoCard>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ mb: 2 }}>{item.icon}</Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.68)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </InfoCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

export default About;