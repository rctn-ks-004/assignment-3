import { Box, Typography } from "@mui/material";
import React from "react";

export default function Education() {
  return (
    <Box sx={{ height: "100vh", pb: "5rem" }} id="education">
      <hr />
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight={400}>
          Education
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            University of Waterloo - Computer Science Bachelor of Science
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            2018 - 2022 - Waterloo, ON
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            nunc eget dolor. Sed euismod, nisl ut aliquam aliquam, nunc nisl
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            University of Michigan - Software Engineering Bachelor of Science
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            2018 - 2022 - Ann Arbor, MI
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            nunc eget dolor. Sed euismod, nisl ut aliquam aliquam, nunc nisl
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            Michigan High School
          </Typography>
          <Typography variant="h6" fontWeight={400}>
            2014 - 2018 - Ann Arbor, MI
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            nunc eget dolor. Sed euismod, nisl ut aliquam aliquam, nunc nisl
            <br />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
