import React from "react";
import { H3 } from "../../../ui/typography";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  useTheme,
} from "@mui/material";
import {
  cyan,
  green,
  grey,
  lightBlue,
  orange,
  purple,
  red,
} from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeColor } from "../../../store/themeSlice";
import CheckIcon from "@mui/icons-material/Check";
import Language from "./Language";
import Dark from "./Dark";
import Font from "./Font";
import { useTranslation } from "react-i18next";

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
  "input:hover ~ &": {
    transform: "scale(1.1)",
  },
}));

const ColorChecked = styled(Color)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Theme = () => {
  const dispatch = useDispatch();
  const themeMainColor = useSelector((state) => state.themeMainColor);
  const theme = useTheme();
  console.log(theme.palette);
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", p: 0 }}>
      <Language />
      <Dark />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <H3>{t("settingsThemeMainColor")}</H3>
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
                  control={
                    <Radio
                      sx={{ padding: "0" }}
                      checkedIcon={
                        <ColorChecked
                          aria-label="color-selected"
                          sx={{ background: color.color }}
                        >
                          <CheckIcon sx={{ color: grey[100] }} />
                        </ColorChecked>
                      }
                      icon={
                        <Color
                          aria-label="color-not-selected"
                          sx={{ background: color.color }}
                        />
                      }
                    />
                  }
                />
              );
            })}
          </RadioGroup>
        </Box>
      </Box>
      <Font />
    </Box>
  );
};

export default Theme;
