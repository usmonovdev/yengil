import { Box, Button, Modal } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LoadingButton } from "@mui/lab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "70%", md: "400px" },
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "center",
};

const DeleteMo = ({ modal, setModal, text = "Aniqmi?", link, id }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteUser = async () => {
    try {
      setIsLoading(true);
      await axios.delete(link + "/" + id);
      setIsLoading(false)
      setModal(false)
    } catch (error) {
      console.log("error in deleting data");
    }
  };

  return (
    <>
      <Modal
        disableScrollLock={true}
        open={modal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            top: "50%",
            left: "50%",
            position: "absolute",
            width: "100%",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            translateX: "-50%",
            translateY: "-50%",
            width: "100%",
          }}
          transition={{ duration: 1, type: "spring", delay: 0.1 }}
        >
          <Box sx={style}>
            <h2 id="child-modal-title">{t("groupOpenDelete")}</h2>
            <p id="child-modal-description">{t(text)}</p>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
            >
              <Button
                variant="contained"
                onClick={() => setModal(!modal)}
                color="alsoWhite"
              >
                {t("groupOpenCanel")}
              </Button>
              <LoadingButton loading={isLoading} color="error" variant="contained" onClick={handleDeleteUser}>
                {t("groupOpenDelete")}
              </LoadingButton>
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default DeleteMo;
