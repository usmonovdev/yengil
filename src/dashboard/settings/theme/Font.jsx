import { Box, FormControlLabel, Radio, RadioGroup, styled, useTheme } from "@mui/material";
import React from "react";
import { H3 } from "../../../ui/typography";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { toggleFont } from "../../../store/themeSlice";

const FontBox = styled(Box)(({ theme }) => ({
  width: "fit-content",
  height: "fit-content",
  background: theme.palette.action.hover,
  padding: "10px",
  borderRadius: "6px",
  transition: "200ms",
  "input:hover ~ &": {
    transform: "scale(1.1)",
  },
}));

const FontChecked = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.blue.main,
  padding: "10px",
  borderRadius: "6px",
  transition: "200ms",
  color: grey[100],
}));

const fonts = [
  {
    name: "Raleway",
    full: "Raleway, sans-serif",
    id: 1
  },
  {
    name: "Montserrat",
    full: "Montserrat, sans-serif",
    id: 2
  },
  {
    name: "Belanosima",
    full: "Belanosima, sans-serif",
    id: 3
  },
  {
    name: "Poppins",
    full: "Poppins, sans-serif",
    id: 4
  },
]

const Font = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <H3>Shrift oilasi</H3>
      <Box>
      <RadioGroup
          name="use-radio-group"
          sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          {fonts.map((font) => {
            return (
              <FormControlLabel
                key={font.id}
                onClick={() => dispatch(toggleFont(font.name))}
                value={`first+${font.id}`}
                sx={{ m: 0 }}
                checked={theme.typography.fontFamily == font.full}
                control={
                  <Radio
                    disableRipple
                    sx={{ padding: "0", fontFamily: font.name }}
                    checkedIcon={
                      <FontChecked aria-label="font-selected">
                        <p>{font.name}</p>
                      </FontChecked>
                    }
                    icon={
                      <FontBox aria-label="font-not-selected">
                        <p>{font.name}</p>
                      </FontBox>
                    }
                  />
                }
              ></FormControlLabel>
            );
          })}
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Font;
