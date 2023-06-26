import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { H2 } from "../../../ui/typography";
import icon from "../../../assets/icons/icon-72x72.png";
import InputComp from "../../../ui/InputComp";
import { IMaskInput } from "react-imask";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+{998} (00) 000 00 00"
      definitions={{
        _: /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Account = ({ value, index }) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { t } = useTranslation();

  return (
    <TabPanel value={value} index={index}>
      <motion.div
        initial={{x: "30%" }}
        animate={{x:-10}}
        transition={{ duration: 0.9, delay: 0.1 }}
      >

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
          justifyContent: "flex-start",
        }}
        >
        <Box
          sx={{
            border: "2px solid #64b5f6",
            width: "100px",
            height: "100px",
            borderRadius: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <img src={icon} style={{ width: "60px", height: "60px" }} />
        </Box>
        <H2>{t("settingsAccountLogo")}</H2>
        <label htmlFor="logo">
          <EditIcon />
        </label>
        <TextField
          type="file"
          sx={{ display: "none" }}
          inputProps={{ accept: "image/*" }}
          id="logo"
          />
      </Box>
      <Box
        sx={{
          width: "300px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "flex-end",
        }}
        >
        <InputComp
          label={t("settingsAccountCenterName")}
          placeholder={"Buxoro scholl"}
          value={name}
          setValue={setName}
          />
        <InputComp
          label={t("settingsAccountPhone")}
          placeholder={"+998-90-000-00-00"}
          value={phone}
          setValue={setPhone}
          inputProps={TextMaskCustom}
          />
        <FormControl
          variant="outlined"
          sx={{ width: "100%" }}
          color="blue"
          onClick={(e) => setPassword(e.target.value)}
          >
          <InputLabel htmlFor="outlined-adornment-password">
            {t("settingsAccountPassword")}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label={t("settingsAccountPassword")}
            />
        </FormControl>
        <Button variant="contained" color="blue" sx={{ width: "50%" }}>
          {t("settingsAccountButton")}
        </Button>
      </Box>
      </motion.div>
    </TabPanel>
  );
};

export default Account;
