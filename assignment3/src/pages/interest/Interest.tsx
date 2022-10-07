import { Box, Typography } from "@mui/material";
import React from "react";

export default function Interest() {
  return (
    <Box sx={{ minHeight: "100vh", pr: "5rem", pb: "5rem" }} id="interest">
      <hr />
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight={400}>
          Interest
        </Typography>

        <Box display="flex">
          <Box sx={{ mt: 5, mr: 5 }}>
            <Typography variant="h6" fontWeight={600}>
              Front End
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
              aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam
              aliquam,
              <br />
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Javascript</Typography>
              </li>
              <li>
                <Typography variant="body1">Typescript</Typography>
              </li>
              <li>
                <Typography variant="body1">React</Typography>
              </li>
              <li>
                <Typography variant="body1">Node.js</Typography>
              </li>
              <li>
                <Typography variant="body1">CSS</Typography>
              </li>
              <li>
                <Typography variant="body1">HTML</Typography>
              </li>
              <li>
                <Typography variant="body1">SASS</Typography>
              </li>
            </ul>
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" fontWeight={600}>
              Back End
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
              aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam
              aliquam,
              <br />
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">Sanity CMS</Typography>
              </li>
              <li>
                <Typography variant="body1">MySQL</Typography>
              </li>
              <li>
                <Typography variant="body1">Node.js</Typography>
              </li>
              <li>
                <Typography variant="body1">Express</Typography>
              </li>
              <li>
                <Typography variant="body1">MongoDB</Typography>
              </li>
              <li>
                <Typography variant="body1">Mongoose</Typography>
              </li>
              <li>
                <Typography variant="body1">GraphQL</Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
