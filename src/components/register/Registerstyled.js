import styled from "@emotion/styled";

export const Div = styled('div')(({theme}) => ({
    width: "100%",
    display:"flex",
    flexDirection:"row",
    gap: "10px"
}))

export const Img = styled('img')(({theme}) => ({
    width: "50px",
    height: "50px"
}))