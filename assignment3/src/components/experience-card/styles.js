import styled from "../../style";

export const ExperienceContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

export const HeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CompanyText = styled("h3", {
  textTransform: "uppercase",
  fontWeight: 600,
});

export const DateText = styled("p", {
  color: "$primary",
});

export const CityText = styled("p", {
  color: "$grey",
});

export const SummaryText = styled("p", {
  textAlign: "justify",
  lineHeight: "140%",
});
