import styled from "../style";

export const PageContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 36,
  padding: 24,
});

export const PageTitleText = styled("h2", {
  fontWeight: 900,
  marginBottom: 24,
  fontSize: 34,
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
