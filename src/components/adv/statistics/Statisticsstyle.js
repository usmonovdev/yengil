import styled from "@emotion/styled";

export const StatisticsBox = styled('div')(({ theme }) => ({
    width: "100%",
    height: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: { xs: "column", md: "row" },
}))

export const ImgBox = styled('img')(({ theme }) => ({
    width: "50%",
}))

export const TextBox = styled('div')(({ theme }) => ({
    width: "50%"
}))