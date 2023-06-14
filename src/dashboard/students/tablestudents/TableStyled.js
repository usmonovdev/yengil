import styled from "@emotion/styled";

export const Img = styled("img")(({ theme }) => ({
    width: "18px",
    height: "18px",
    cursor: "pointer",
    zIndex: '1'
}))

export const TD = styled("td")(({ theme }) => ({
    background: "#f0f0f0",
    textAlign: "center",
    padding: "10px",
    borderRadius: "5px",
}))