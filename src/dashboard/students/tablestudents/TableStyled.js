import styled from "@emotion/styled";

export const Img = styled("img")(({ theme }) => ({
    width: "18px",
    height: "18px",
    cursor: "pointer",
    zIndex: '1',
}))

export const TD = styled("td")(({ theme }) => ({
    background: theme.palette.custom.whiteSmoke,
    textAlign: "center",
    padding: "10px",
    borderRadius: "5px",
}))