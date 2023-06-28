import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { H3 } from "../../../ui/typography";
import icon from "../../../assets/icons/icon-72x72.png";
import InputComp from "../../../ui/InputComp";
import { IMaskInput } from "react-imask";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteMo from "../../../ui/DeleteMo";

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

const Account = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [logoutMo, setLogoutMo] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { t } = useTranslation();

  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "25%" },
          marginTop: "20px",
          transform: isInView ? "none" : "translateY(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
        ref={ref}
      >
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            justifyContent: "flex-start",
            bgcolor: "action.hover",
            width: "100%",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              border: "2px solid",
              borderColor: "blue.main",
              width: "50px",
              height: "50px",
              padding: "5px",
              borderRadius: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={icon} width={"100%"} />
          </Box>
          <H3 style={{ padding: 0, textTransform: "uppercase" }}>
            {t("settingsAccountLogo")}
          </H3>
          <FormControlLabel
            htmlFor="logo"
            sx={{ m: 0 }}
            control={<AddAPhotoIcon style={{ cursor: "pointer" }} />}
          />
          <TextField
            type="file"
            sx={{ display: "none" }}
            inputProps={{ accept: "image/*" }}
            id="logo"
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            marginTop: "20px",
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
          <Button variant="contained" color="blue">
            {t("settingsAccountButton")}
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            bgcolor: "error.main",
            padding: "5px 10px",
            borderRadius: "5px",
            marginTop: "20px",
            justifyContent: "space-between",
          }}
        >
          <H3 style={{ textTransform: "uppercase" }}>Chiqish</H3>
          <IconButton onClick={() => setLogoutMo(!logoutMo)}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Box>
      <DeleteMo
        modal={logoutMo}
        setModal={setLogoutMo}
        text={"Rostdan ham akauntdan chiqmoqchimisiz?"}
      />
    </>
  );
};

export default Account;
