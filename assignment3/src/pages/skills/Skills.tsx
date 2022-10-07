import { Box, Typography } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    <Box sx={{ minHeight: "100vh", pr: "5rem", pb: "5rem" }} id="skills">
      <hr />
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight={400}>
          Skills
        </Typography>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            Front End
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            Back End
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            DevOps
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            Quality Assurance
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            <br />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
