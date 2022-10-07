import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        pr: "5rem",
      }}
      id="about"
    >
      <hr />
      <Box sx={{ mt: "5rem", }}>
        <Typography variant="h2" fontWeight={600}>
          Max Verstappen
        </Typography>
        <Typography variant="h5" fontWeight={500}>
          Full Stack Developer
        </Typography>
      </Box>
      <Box sx={{ mt: "4rem" }}>
        <Typography variant="h4" fontWeight={500}>
          About
        </Typography>
        <Typography variant="body1">
          I am a software engineer with a passion for building web applications
          and learning new technologies. I have a Bachelor's degree in Computer
          Science from the University of Texas at Arlington. I have experience
          working with React, Node, Express, and MongoDB. I am currently working
          on a project to build a full stack web application using React, Node,
          Express, and MongoDB.
        </Typography>
      </Box>
      <Box sx={{ mt: "4rem" }}>
        <Typography variant="h6" fontWeight={600} sx={{ mt: "1rem" }}>
          Phone: <a href="tel:469-855-0000">469-855-0000</a>
        </Typography>
        <Typography variant="h6" fontWeight={600} sx={{ mt: "1rem" }}>
          Email:{" "}
          <a href="mailto:maxverstappen@example.com">jhondeans@example</a>
        </Typography>
        <Typography variant="h6" fontWeight={600} sx={{ mt: "1rem" }}>
          Github:{" "}
          <a
            href="https://github.com/maxverstappen"
            target="_blank"
            rel="noreferrer"
          >
            Max Verstappen
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
