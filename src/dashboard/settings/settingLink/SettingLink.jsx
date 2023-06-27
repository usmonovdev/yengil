import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Account from "../account/Account";
import { useTranslation } from "react-i18next";
import Theme from "../theme/Theme";
import Messages from "../message/Messages";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SettingLink() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation();

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          indicatorColor="secondary"
          value={value}
          onChange={handleChange}
          textColor="secondary"
        >
          <Tab label={t("settingsAccount")} {...a11yProps(0)} />
          <Tab label="xabarlar" {...a11yProps(1)} />
          <Tab label="Mavzu" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Account value={value} index={0} />
      <Messages value={value} index={1} />
      <TabPanel value={value} index={2}>
        <Theme />
      </TabPanel>
    </Box>
  );
}
