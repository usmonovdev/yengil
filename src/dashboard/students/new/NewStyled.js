import styled from "@emotion/styled";

export const Div = styled('div')(({ theme }) => ({
    width: "100%",
    minHeight: "5vh",
    display: "flex",
    justifyContent: "space-between",
}))

export const Divs = styled('div')(({ theme }) => ({
    width: "30%",
    background: "#f0f0f0",
}))

export const Img = styled('img')(({ theme }) => ({
    width: "21px",
    height: "21px",
    background: "#212E48",
    borderRadius: "52px",
}))