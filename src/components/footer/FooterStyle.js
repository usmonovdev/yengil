import styled from "@emotion/styled";

export const Styledfooter = styled("footer")(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: theme.palette.custom.bunting,
    padding: "20px 0"
}))

export const Div = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "10px",
    padding: "10px 0"
}))

export const Img = styled('img')(({ theme }) => ({
    width: "30px",
    cursor: "pointer"
}))

export const FooterContainer = styled("div")(({ theme }) => ({
    background: theme.palette.custom.midnight,
    width: "100%",
    minheight: "40px",
    padding: "20px 0",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))