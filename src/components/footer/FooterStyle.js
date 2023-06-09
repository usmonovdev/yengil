import styled from "@emotion/styled";

export const Styledfooter = styled("footer")(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: theme.palette.custom.bunting,
}))

export const Div = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "10px",
}))

export const Img = styled('img')(({ theme }) => ({
    width: "30px",
    cursor: "pointer"
}))

export const FooterContainer = styled("div")(({ theme }) => ({
    background: theme.palette.custom.midnight,
    width: "100%",
    minheight: "40px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))