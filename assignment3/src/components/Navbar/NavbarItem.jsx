import * as React from "react";
import { css } from "../../styles/styles";
import { Link } from "react-scroll";
export default function NavbarItem(props) {
  const { isActive, url, text } = props;
  return (
    <Link
      offset={-80}
      to={url}
      spy
      smooth
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
  }),
  activeStyle: css({
    color: "white",
  }),
};
