import styled from "@emotion/styled";

export const Div = styled('div')(({ theme }) => ({
    width: "90%",
    minHeight: "5vh",
    display: "flex",
    justifyContent: "space-between",
}))

export const Nav =styled('div')(({theme}) =>({
    width: "100%",
    height:"3vh",
    background:"#D9D9D9"
}))

export const Divs = styled('div')(({ theme }) => ({
    width: "30%",
    minHeight: "3vh",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    background: theme.palette.custom.whiteSmoke,
}))

export const Img = styled('img')(({ theme }) => ({
    width: "21px",
    height: "21px",
    background: "#212E48",
    borderRadius: "52px",
}))