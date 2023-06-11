import styled from "@emotion/styled";

export const Navbar = styled('div')(({ theme }) => ({
    width: "100px",
    cursor: "pointer",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    background: theme.palette.blue.main
}))

export const Img = styled('img')(({ theme }) => ({
    width: "24px",
    height: "24px",
}))

export const Div = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "25px",
}))