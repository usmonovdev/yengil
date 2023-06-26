import React from "react";
import { H3 } from "../../../ui/typography";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import {
  cyan,
  green,
  lightBlue,
  orange,
  purple,
  red,
} from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeColor } from "../../../store/themeSlice";

const mainColors = [
  {
    color: lightBlue[600],
    hex: "#039be5",
    id: 1,
  },
  {
    color: cyan[600],
    hex: "#00acc1",
    id: 2,
  },
  {
    color: orange[600],
    hex: "#fb8c00",
    id: 3,
  },
  {
    color: green[600],
    hex: "#43a047",
    id: 4,
  },
  {
    color: red[600],
    hex: "#e53935",
    id: 5,
  },
  {
    color: purple[600],
    hex: "#8e24aa",
    id: 6,
  },
];

const Color = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "200ms",
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
}));

const ColorChecked = styled(Color)(({ theme }) => ({
  border: "2px solid black"
}));

const Theme = () => {
  const dispatch = useDispatch();
  const themeMainColor = useSelector(state => state.themeMainColor)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <H3>Asosiy rang</H3>
      <Box>
        <RadioGroup
          name="use-radio-group"
          sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          {mainColors.map((color) => {
            return (
              <FormControlLabel
                onClick={() => dispatch(toggleThemeColor(color.color))}
                key={color.id}
                value={`first+${color.id}`}
                sx={{ m: 0 }}
                checked={color.hex === themeMainColor}
                control={<Radio sx={{ padding: "0" }} checkedIcon={<ColorChecked sx={{ background: color.color }} />} icon={<Color sx={{ background: color.color }} />} />}
              />
            );
          })}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Theme;
