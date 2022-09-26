import { Link } from "react-scroll";
import styled from "../../style";

export const AsideContainer = styled("aside", {
  position: "sticky",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  height: "100vh",
  gap: 36,
  padding: 48,
  background: "rgba(249, 102, 102)",
});

export const LinkCustom = styled(Link, {
  textTransform: "uppercase",
  cursor: "pointer",
  fontWeight: 900,
  opacity: 0.7,
  color: "$white",
  "&:hover, &.active": { opacity: 1 },
});

export const ImgCustom = styled("img", {
  width: 160,
  borderRadius: 9999,
  border: "12px solid rgba(255,255,255,0.6)",
});
