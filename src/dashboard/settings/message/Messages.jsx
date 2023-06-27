import React from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { H3, Paragraph } from "../../../ui/typography";
import styled from "@emotion/styled";
import AdvancePay from "./AdvancePay";
import Unpaid from "./Unpaid";
import Paid from "./Paid";
import Joined from "./Joined";
import { useTheme } from "@emotion/react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.blue.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
          }}
        >
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

const H = styled(H3)(({ theme }) => ({
  color: theme.palette.mode == "light" ? "black" : "white",
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Messages = ({ value, index }) => {
  const [values, setValues] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  return (
    <TabPanel value={value} index={1}>
      <Box
        sx={{
          flexGrow: 1,
          width: { xs: "100%", md: "100%" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
          bgcolor: theme.palette.mode == "light" ? "background.paper" : "#21212121" ,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={values}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            width: { sm: "60%", md: "30%" },
            borderColor: "divider",
          }}
        >
          <Tab
            sx={{ mt: 1 }}
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "space-between" },
                  gap: "10px",
                }}
              >
                <Paragraph>Oldindan to’lov </Paragraph>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: "0 0 0 0" }} defaultChecked />}
                />
              </Box>
            }
            {...a11yProps(0)}
          />
          <Tab
            sx={{ mt: 1 }}
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "space-between" },
                  gap: "10px",
                }}
              >
                <Paragraph>To’lov qilinmadi</Paragraph>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: "0 0 0 0" }} defaultChecked />}
                />
              </Box>
            }
            {...a11yProps(1)}
          />
          <Tab
            sx={{ mt: 1 }}
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "space-between" },
                  gap: "10px",
                }}
              >
                <Paragraph>To’lov qilindi</Paragraph>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: "0 0 0 0" }} defaultChecked />}
                />
              </Box>
            }
            {...a11yProps(2)}
          />
          <Tab
            sx={{ mt: 1 }}
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "space-between" },
                  gap: "10px",
                }}
              >
                <Paragraph>Guruhga qo’shildi</Paragraph>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: "0 0 0 0" }} defaultChecked />}
                />
              </Box>
            }
            {...a11yProps(3)}
          />
        </Tabs>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            gap: "120px",
          }}
        >
          <AdvancePay value={values} index={0} />
          <Unpaid value={values} index={1} />
          <Paid value={values} index={2} />
          <Joined value={values} index={3} />
          <Box
            sx={{
              margin: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "30%",
            }}
          >
            <H3>Kalit so’zlar</H3>
            <Box
              sx={{
                border: "1px solid gray",
                width: { xs: "250%", sm: "250%", md: "150%" },
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <H>(STUDENT) - Talabaning ismi</H>
              <H>(GROUP) - Guruh nomi</H>
              <H>(TEACHER) - O’qituvchining ismi</H>
              <H>(DAYS) - Dars kunlari</H>
              <H>(HOURS) - Darsning boshlanish va tugash vaqti</H>
              <H>(SUM) - To’lov miqdori</H>
              <H>(MARKAZ) - O’quv markaz</H>
            </Box>
          </Box>
        </Box>
      </Box>
    </TabPanel>
  );
};

export default Messages;
