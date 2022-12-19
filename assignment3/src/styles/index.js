import styled from "../style";

export const SectionContainer = styled("section", {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 36,
  padding: 48,
});

export const PageTitleText = styled("h2", {
  fontWeight: 900,
  marginBottom: 24,
  fontSize: 34,
  letterSpacing: 5
});

export const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: 8,
});

export const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});
