import { Box, Avatar, List, ListItem } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        p: 2,
        height: "100vh",
        position: "fixed",
        minWidth: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 130, height: 130, border: "5px solid white" }}
      />

      <Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 150,
          }}
        >
          <ListItem
            sx={{
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            <HashLink smooth className={styles.navlink} to="#about">
              About
            </HashLink>
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            <HashLink smooth className={styles.navlink} to="#experience">
              Experience
            </HashLink>
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            <HashLink smooth className={styles.navlink} to="#education">
              Education
            </HashLink>
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            <HashLink smooth className={styles.navlink} to="#skills">
              Skills
            </HashLink>
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            <HashLink smooth className={styles.navlink} to="#interest">
              Interest
            </HashLink>
          </ListItem>
          <ListItem
            sx={{
              justifyContent: "center",
              fontSize: "1.5rem",
            }}
          >
            <HashLink smooth className={styles.navlink} to="#awards">
              Awards
            </HashLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
