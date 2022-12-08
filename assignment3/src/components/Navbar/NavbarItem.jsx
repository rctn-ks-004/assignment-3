import * as React from "react";
import { css } from "../../styles/styles";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
export default function NavbarItem(props) {
  const { isActive, url, text } = props;
  const navigate = useNavigate();
  return (
    <Link
      offset={-10}
      to={url}
      spy
      smooth
      onClick={() => navigate(`#${text.toLowerCase()}`)}
      className={styles.defaultStyle()}
      activeClass={styles.activeStyle()}
    >
      {text}
    </Link>
  );
}

const styles = {
  defaultStyle: css({
    color: "#E2A089",
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15,
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  }),
  activeStyle: css({
    color: "white",
  }),
};
