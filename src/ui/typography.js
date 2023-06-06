import styled from "@emotion/styled";

export const H1 = styled("h1")(({ theme }) => ({
    fontSize: "36px"
}));

export const H2 = styled("h2")(({ theme }) => ({
    fontSize: "26px",
    fontWeight: "400"
}));

export const H3 = styled("h3")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "400",
}));

export const Paragraph = styled("p")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "400",
}));

export const StyledAncor = styled("a")(({ theme }) => ({
    textDecoration: "none"
}))