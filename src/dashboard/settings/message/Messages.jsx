import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
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

const StyledP = styled(Paragraph)(({ theme }) => ({
  width: "100%",
  height: "fit-content",
  background: theme.palette.action.hover,
  padding: "10px",
  borderRadius: "5px",
}));

const tabsData = [
  {
    title: "Oldindan to’lov",
    id: 1,
  },
  {
    title: "To’lov qilinmadi",
    id: 2,
  },
  {
    title: "To’lov qilindi",
    id: 3,
  },
  {
    title: "Guruhga qo’shildi",
    id: 4,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ padding: { xs: "20px 0 0 0", md: "0 20px 0 20px" }}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Messages = () => {
  const [values, setValues] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: "space-between",
        marginTop: "20px"
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "30%" },
        }}
      >
        <Tabs
          orientation="vertical"
          value={values}
          onChange={handleChange}
          aria-label="tab-box"
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            // ".css-lfwcke-MuiTabs-flexContainer": {
            //   display: "flex",
            //   flexDirection: "column",
            //   gap: "10px",
            // },
          }}
        >
          {tabsData.map((tab, index) => {
            return (
              <Tab
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  bgcolor: "action.hover",
                  borderRadius: "5px 0 0 5px",
                  marginBottom: "8px"
                }}
                label={
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <Paragraph>{tab.title}</Paragraph>
                    <FormControlLabel control={<IOSSwitch defaultChecked />} />
                  </Box>
                }
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: { sm: "100%", md: "30%" },
          flexDirection: "row",
          gap: "120px",
        }}
      >
        <TabPanel value={values} index={0}>
          <AdvancePay />
        </TabPanel>
        <TabPanel value={values} index={1}>
          <Unpaid />
        </TabPanel>
        <TabPanel value={values} index={2}>
          <Paid />
        </TabPanel>
        <TabPanel value={values} index={3}>
          <Joined />
        </TabPanel>
      </Box>
      <Box
        sx={{
          padding: { xs: "0", md: "0 20px 0 20px" },
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: { sm: "100%", md: "30%" },
        }}
      >
        <H3>Kalit so’zlar</H3>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <StyledP>(STUDENT) - Talabaning ismi</StyledP>
          <StyledP>(GROUP) - Guruh nomi</StyledP>
          <StyledP>(TEACHER) - O’qituvchining ismi</StyledP>
          <StyledP>(DAYS) - Dars kunlari</StyledP>
          <StyledP>(HOURS) - Darsning boshlanish va tugash vaqti</StyledP>
          <StyledP>(SUM) - To’lov miqdori</StyledP>
          <StyledP>(MARKAZ) - O’quv markaz</StyledP>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
