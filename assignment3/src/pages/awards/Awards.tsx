import { Box, Typography } from "@mui/material";
import React from "react";

export default function Awards() {
  return (
    <Box sx={{ minHeight: "100vh", pr: "5rem", pb: "5rem" }} id="awards">
      <hr />
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight={400}>
          Awards
        </Typography>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam aliquam, nunc nisl aliquet nisl, eget
            aliquet nisl nunc eget dolor. Sed euismod, nisl ut aliquam aliquam,
            <br />
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" fontWeight={600}>
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
