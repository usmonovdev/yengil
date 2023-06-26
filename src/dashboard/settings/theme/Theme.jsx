import React from "react";
import { H3 } from "../../../ui/typography";
import { Box, styled } from "@mui/material";
import {
  cyan,
  green,
  lightBlue,
  orange,
  purple,
  red,
} from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { toggleThemeColor } from "../../../store/themeSlice";

const mainColors = [
  {
    color: lightBlue[600],
    id: 1,
  },
  {
    color: cyan[600],
    id: 2,
  },
  {
    color: orange[600],
    id: 3,
  },
  {
    color: green[600],
    id: 4,
  },
  {
    color: red[600],
    id: 5,
  },
  {
    color: purple[600],
    id: 6,
  },
];

const Color = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  cursor: "pointer",
}));

const Theme = () => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <H3>Asosiy rang</H3>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {mainColors.map((color) => {
          return (
            <Color
              sx={{ background: `${color.color}` }}
              key={color.id}
              onClick={() => dispatch(toggleThemeColor(color.color))}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Theme;
