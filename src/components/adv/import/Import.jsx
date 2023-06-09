import Left from "./Left";
import Right from "./Right";
import { Box } from "@mui/system";

const Import = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <Left />
      <Right />
    </Box>
  );
};

export default Import;
