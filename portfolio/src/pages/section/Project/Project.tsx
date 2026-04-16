import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";

import schedule1 from "../../../assets/schedule/schedule_01.png";
import portfolio1 from "../../../assets/portfolio/my_porfolio.png";
import movies_lib from "../../../assets/movies_library/movies_lib.png";
import chrome_loot from "../../../assets/chrome_loot_project/chrome_data_01.png";
import dns_spoofer from "../../../assets/dns_spoofing_lab/dns_spoofer_01.png";
import secret_word from "../../../assets/secret_word/secret_word.png";
import pentest_toolkit from "../../../assets/pentest_toolkit/pentest_toolkit.png";

import schedule_video from "../../../assets/schedule/schedule.mp4";
import movies_lib_video from "../../../assets/movies_library/movies_lib_video.mp4";
import chrome_dark_video from "../../../assets/chrome_loot_project/chrome_dark_theme.mp4";
import secret_word_video from "../../../assets/secret_word/secret_word_video.mp4";
import pentest_toolkit_video from "../../../assets/pentest_toolkit/pentest_toolkit_video.mp4";
import dns_spoofer_project_video from "../../../assets/dns_spoofing_lab/dns_spoofer_project.mp4";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techs: string[];
  image: string;
  github?: string;
  demo?: string;
  video?: string;
  link?: string;
};

export default function Projects() {
  const projects = useMemo<Project[]>(
    () => [
      {
        id: 1,
        title: "Portfolio Website",
        category: "Frontend Development",
        description:
          "Responsive portfolio built with React and Material UI to showcase projects, skills, experience and contact information in a clean and modern interface.",
        longDescription:
          "This project was created to present my professional profile in a clear and modern way. It includes a responsive layout, reusable UI components, project showcase sections, contact actions and structured navigation. The focus was on usability, visual consistency and creating a recruiter-friendly experience.",
        techs: ["React", "TypeScript", "MUI", "Responsive Design"],
        image: portfolio1,
        github: "https://github.com/maykon92/portfolio_git.git",
      },
      {
        id: 2,
        title: "Schedule System",
        category: "Full Stack Development",
        description:
          "Full stack scheduling application built with React, Node.js and MongoDB, featuring frontend interface design, backend API development and database integration.",
        longDescription:
          "This project is a full stack scheduling system developed to simulate a real-world application flow. It includes a React frontend for user interaction, a Node.js backend for API logic and MongoDB with Mongoose for data persistence. The project demonstrates component organization, routing, API communication and structured backend development.",
        techs: [
          "React",
          "Node.js",
          "MongoDB",
          "Mongoose",
          "Redux Toolkit",
          "Axios",
          "MUI",
        ],
        image: schedule1,
        github: "https://github.com/maykon92/schedule",
        video: schedule_video,
        link: "https://schedule-silk-beta.vercel.app/",
      },
      {
        id: 3,
        title: "Movies Library",
        category: "Frontend Development",
        description:
          "Movie browsing application built with React and API integration, allowing users to explore titles, search content and view dynamic movie data.",
        longDescription:
          "This project was developed as a frontend application focused on API consumption and dynamic rendering of movie data. It demonstrates React component structure, search functionality and real-time content loading from an external movie API, with an emphasis on clean UI and user interaction.",
        techs: ["React", "Vite", "API Integration", "JavaScript", "CSS"],
        image: movies_lib,
        github: "https://github.com/maykon92/movies_lib",
        video: movies_lib_video,
        link: "https://movies-lib-roan-alpha.vercel.app/",
      },
      {
        id: 4,
        title: "Secret Word",
        category: "Frontend Development",
        description:
          "Interactive word guessing game built with React, featuring dynamic state management, user input handling and responsive UI feedback.",
        longDescription:
          "This project is an interactive word guessing game developed with React, focused on user interaction and dynamic state control. It includes features such as random word selection, input validation, game progression logic and real-time feedback to the user. The application demonstrates component-based architecture, state management with hooks and a clean, responsive user interface designed to enhance the gameplay experience.",
        techs: ["React", "JavaScript", "CSS", "State Management"],
        image: secret_word, 
        github: "https://github.com/maykon92/Secret-Words.git", 
        video: secret_word_video,
        link: "https://secret-words-psi.vercel.app/",
      },
      {
        id: 5,
        title: "DNS Spoofing Lab",
        category: "Cyber Security",
        description:
          "Controlled lab project demonstrating DNS spoofing concepts in a safe environment for educational purposes.",
        longDescription:
          "This cybersecurity lab project was developed in a controlled environment to study how DNS spoofing works, how traffic can be redirected and which indicators can reveal malicious behavior. The project helps demonstrate both offensive concepts and defensive awareness in a practical and ethical learning scenario.",
        techs: ["Python", "Flask", "Kali Linux", "Networking"],
        image: dns_spoofer,
        github: "https://github.com/maykon92/dns_spoofer_project",
        video: dns_spoofer_project_video,
      },
      {
        id: 6,
        title: "Chrome Loot Project",
        category: "Cyber Security",
        description:
          "Educational proof-of-concept developed in a controlled lab environment to demonstrate how social engineering can be used to expose sensitive browser data.",
        longDescription:
          "This project was created for educational purposes in a fully controlled lab environment to demonstrate how deceptive execution flows can lead to browser data exposure. The focus is on understanding the risk, the attack flow and the importance of defensive awareness rather than real-world misuse.",
        techs: ["C#", ".NET", "Flask", "Windows Lab", "Python"],
        image: chrome_loot,
        github: "https://github.com/maykon92/chrome_loot_project",
        video: chrome_dark_video,
      },
      {
        id: 7,
        title: "Pentest Toolkit",
        category: "Cyber Security",
        description:
          "Educational cybersecurity toolkit developed in Python for hands-on learning in controlled lab environments.",
        longDescription:
          "This project was built to support practical cybersecurity learning through a structured Python toolkit. It includes modules related to reconnaissance, service inspection and controlled educational simulations, with an emphasis on ethical use, technical understanding and organized project structure.",
        techs: ["Python", "CLI", "Sockets", "Flask", "Security Testing"],
        image: pentest_toolkit,
        github: "https://github.com/maykon92/pentest_toolkit/",
        video: pentest_toolkit_video,
      },
    ],
    []
  );

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const isExternalVideo =
    selectedProject?.video?.startsWith("http") ?? false;

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          "linear-gradient(180deg, #2c2c2c 0%, #232323 40%, #0d0d0d 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 2,
              color: "rgba(255,255,255,0.72)",
              fontWeight: 700,
            }}
          >
            My Work
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 1,
              mb: 2,
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 780,
              mx: "auto",
              color: "rgba(255,255,255,0.72)",
              fontSize: { xs: "1rem", md: "1.05rem" },
              lineHeight: 1.8,
            }}
          >
            A selection of full stack and cyber security projects, combining
            frontend interfaces, backend systems, API integration and hands-on
            lab environments to build practical, real-world solutions.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.04)",
                  backgroundImage: "none",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 14px 34px rgba(0,0,0,0.35)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: "cover" }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      display: "inline-block",
                      mb: 1.5,
                      px: 1.25,
                      py: 0.5,
                      borderRadius: 10,
                      bgcolor: "primary.main",
                      color: "primary.contrastText",
                      fontWeight: 600,
                    }}
                  >
                    {project.category}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1, color: "#fff" }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {project.techs.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          borderColor: "rgba(255,255,255,0.2)",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions
                  sx={{ px:5, pb: 2, pt: 2, gap: 1, flexWrap: "wrap" }}
                >
                  <Button
                    variant="contained"
                    startIcon={<VisibilityOutlinedIcon />}
                    onClick={() => handleOpenProject(project)}
                    sx={{
                      backgroundColor: "#1f1f1f",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#2b2b2b",
                      },
                    }}
                  >
                    View Details
                  </Button>

                  {project.github && (
                    <Button
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                      component="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.22)",
                        "&:hover": {
                          borderColor: "rgba(255,255,255,0.4)",
                          backgroundColor: "rgba(255,255,255,0.06)",
                        },
                      }}
                    >
                      GitHub
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      variant="text"
                      startIcon={<PlayCircleOutlineIcon />}
                      component="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.06)",
                        },
                      }}
                    >
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseProject}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: "#1f1f1f",
            color: "#fff",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: 700,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {selectedProject.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.6)", mt: 0.5 }}
                >
                  {selectedProject.category}
                </Typography>
              </Box>

              <IconButton
                onClick={handleCloseProject}
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 3 }}>
              <Box
                component="img"
                src={selectedProject.image}
                alt={selectedProject.title}
                sx={{
                  width: "100%",
                  height: { xs: 220, md: 360 },
                  objectFit: "cover",
                  borderRadius: 3,
                  mb: 3,
                }}
              />

              {selectedProject.video && !isExternalVideo && (
                <Box
                  component="video"
                  src={selectedProject.video}
                  controls
                  sx={{
                    width: "100%",
                    borderRadius: 3,
                    mb: 3,
                    backgroundColor: "#000",
                  }}
                />
              )}

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.8,
                }}
              >
                {selectedProject.longDescription}
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 1.5 }}
              >
                Technologies
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {selectedProject.techs.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    sx={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </Stack>
            </DialogContent>

            <DialogActions
              sx={{
                px: 3,
                py: 2,
                borderTop: "1px solid rgba(255,255,255,0.08)",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {selectedProject.github && (
                <Button
                  startIcon={<GitHubIcon />}
                  component="a"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.22)",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.4)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  GitHub
                </Button>
              )}

              {selectedProject.video && isExternalVideo && (
                <Button
                  startIcon={<PlayCircleOutlineIcon />}
                  component="a"
                  href={selectedProject.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                >
                  Watch Video
                </Button>
              )}

              {selectedProject.demo && (
                <Button
                  variant="contained"
                  component="a"
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Demo
                </Button>
              )}

              {selectedProject.link && (
                <Button
                  startIcon={<LinkIcon />}
                  component="a"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.22)",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.4)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  Visit Website
                </Button>
              )}

              <Button onClick={handleCloseProject} color="inherit">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}