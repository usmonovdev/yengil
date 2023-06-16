import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { H3 } from "../../../ui/typography";
import InputComp from "../../../ui/InputComp";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Telegram } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export const AddStudents = () => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [firstName, setFirstNmae] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="blue">
        Qo'shish
      </Button>
      <Modal 
      sx={{zIndex: "10001"}}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <H3>Add People</H3>
          <InputComp
            placeholder="Azizbek"
            value={name}
            setValue={setName}
            label="Ism"
            required={true}
            name={name}
          />
          <InputComp
            placeholder="Usmonov"
            value={firstName}
            setValue={setFirstNmae}
            label="Familiya"
            required={true}
            name={name}
          />
          <InputComp
            placeholder="+99890-000-00-00"
            value={phone}
            setValue={setPhone}
            label="Telefon"
            required={true}
            name={name}
          />
          <InputComp
            placeholder="@t_samandar_t"
            value={telegram}
            setValue={setTelegram}
            label="Telegram"
            required={true}
            name={name}
          />
          <InputComp
            placeholder="Matematika"
            value={notes}
            setValue={setNotes}
            label="Notes"
            required={true}
            name={name}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              value={date}
              setValue={setDate}
            >
              <DatePicker label="Qabul qilingan kun" />
            </DemoContainer>
          </LocalizationProvider>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              style={{
                background: theme.palette.custom.newStudentWhite,
                color: "black",
              }}
            >
              Close
            </Button>
            <Button variant="contained" color="blue">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
