import * as React from "react";
import { css } from "../../styles/styles";
import icon from "../../assets/icon.png";
import NavbarItem from "./NavbarItem";
const navLinks = [
  {
    url: "about",
    text: "About",
  },
  {
    url: "experience",
    text: "Experience",
  },
  {
    url: "education",
    text: "Education",
  },
  {
    url: "skills",
    text: "Skills",
  },
  {
    url: "interests",
    text: "Interests",
  },
  {
    url: "awards",
    text: "Awards",
  },
];

export default function Navbar() {
  return (
    <div className={styles.navbarContainer()}>
      <div className={styles.contentContaniner()}>
        <div className={styles.imageContainer()}>
          <img src={icon} className={styles.imageStyle()} alt="icon" />
        </div>
        {navLinks.map((item) => (
          <NavbarItem text={item.text} url={item.url} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  navbarContainer: css({
    display: "flex",
    alignItems: "center",
    backgroundColor: "#BC5A3C",
    top: 0,
    left: 0,
    height: "100%",
    position: "fixed",
    width: "20%",
    zIndex: 1,
  }),
  contentContaniner: css({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  }),
  imageContainer: css({
    display: "flex",
    width: "70%",
    aspectRatio: 1,
    backgroundColor: "#C67A65",
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  }),
  imageStyle: css({
    width: "92%",
    aspectRatio: 1,
    borderRadius: 999,
  }),
};
