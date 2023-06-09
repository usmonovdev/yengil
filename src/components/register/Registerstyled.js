import styled from "@emotion/styled";

export const Div = styled('div')(({ theme }) => ({
    width: "100%",
    display: "grid",
    justifyItems: "end"
}))

export const RegisterBox = styled('div')(({ theme }) => ({
    width: {xs: "800px"},
    margin: "0 auto",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
}))

export const Img = styled('img')(({ theme }) => ({
    width: "15px",
    height: "15px",
    display: "flex",
    marginRight: "20px",
    marginTop: "-35px",
    zIndex: "1"
}))