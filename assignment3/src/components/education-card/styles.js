import styled from "../../style";

export const HeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const InstanceText = styled("h3", {
  textTransform: "uppercase",
  fontWeight: 600,
});

export const DateText = styled("p", {
  color: "$primary",
});

export const SummaryText = styled("p", {
  textAlign: "justify",
  lineHeight: "140%",
});
