import styled from "@emotion/styled";
import { height } from "@mui/system";

export const Div = styled('div')(({ theme }) => ({
    display: " flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "25px"
}))

export const Divs = styled('div')(({ theme }) => ({
    background: theme.palette.custom.whiteSmoke,
    display: " flex",
    flexDirection: "column",
    width: "100%",
    height: "500px",
    gap: "8px",
    padding: "15px",
    borderRadius: "5px"
}))

export const Img = styled('img')(({ theme }) => ({
    width: "11px",
    height: "11px"
}))