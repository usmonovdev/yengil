import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const H1 = styled("h1")(({ theme }) => ({
    fontSize: "36px",
    color: theme.palette.white.main
}));

export const H2 = styled("h2")(({ theme }) => ({
    fontSize: "26px",
    fontWeight: "400",
    color: theme.palette.white.main
}));

export const H3 = styled("h3")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "400",
    color: theme.palette.white.main
}));

export const Paragraph = styled("p")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "400",
    color: theme.palette.white.main
}));

export const StyledAncor = styled("a")(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.white.main
}))

export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.white.main
}))

export const ColoredSpan = styled("span")(({ theme }) => ({
    color: theme.palette.secondary.main
}))

export const Span = styled("span")(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "400",
    color: theme.palette.white.main
}));

export const H3White = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "400",
    color: theme.palette.common.white
}))