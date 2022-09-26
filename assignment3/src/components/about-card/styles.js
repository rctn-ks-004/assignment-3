import styled from "../../style";

export const NameText = styled("h2", {
  textTransform: "uppercase",
  fontWeight: 900,
  letterSpacing: "0.3em",
  variants: {
    variant: {
      red: { color: "$primary" },
    },
  },
});

export const InformationText = styled("p", {
  fontWeight: 600,
  variants: {
    variant: {
      red: { color: "$primary" },
    },
  },
});

export const SummaryText = styled("p", {
  textAlign: "justify",
  lineHeight: "160%",
  letterSpacing:0.4
});

export const ALinkContainer = styled("a", {
  color: "Black",
});
