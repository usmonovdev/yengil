import React from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { H3 } from "../../../ui/typography";
import { useTranslation } from "react-i18next";
import { grey } from "@mui/material/colors";

const LngBox = styled(Box)(({ theme }) => ({
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

const ColorChecked = styled(LngBox)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.blue.main,
  color: grey[100],
}));

const Language = () => {
  const { i18n } = useTranslation();
  const languages = [
    {
      language: "uz",
      title: "Uzbek",
      id: 1,
    },
    {
      language: "en",
      title: "English",
      id: 2,
    },
    {
      language: "ru",
      title: "Russian",
      id: 3,
    },
  ];

  const handleChangeLng = (e) => {
    i18n.changeLanguage(e);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <H3>Til</H3>
      <Box>
        <RadioGroup
          name="use-radio-group"
          sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          {languages.map((lng) => {
            return (
              <FormControlLabel
                key={lng.id}
                onClick={() => handleChangeLng(lng.language)}
                value={`first+${lng.id}`}
                sx={{ m: 0 }}
                checked={i18n.language == lng.language}
                control={
                  <Radio
                    disableRipple
                    sx={{ padding: "0" }}
                    checkedIcon={
                      <ColorChecked aria-label="font-selected">
                        <p>{lng.title}</p>
                      </ColorChecked>
                    }
                    icon={
                      <LngBox aria-label="font-not-selected">
                        <p>{lng.title}</p>
                      </LngBox>
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

export default Language;
