import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Modal, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { H3, Paragraph } from "../../../ui/typography";
import DeleteMo from "../../../ui/DeleteMo";
import { t } from "i18next";
import axios from "../../../utils/api";

const modalStyle = {
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

const StyledH3 = styled(H3)(({ theme }) => ({
  background: theme.palette.action.hover,
  width: "100%",
  padding: "4px",
  borderRadius: "5px",
  textAlign: "left",
}));

const UsersMo = forwardRef((props, ref) => {
  const { link, id } = props;
  const theme = useTheme();
  const [user, setUser] = useState();
  const [usersMo, setUsersMo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useImperativeHandle(ref, () => ({
    async handleGetUser() {
      setUsersMo(!usersMo);
      try {
        setIsLoading(true);
        const { data } = await axios.get(link + "/" + id);
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error");
      }
    },
  }));
  return (
    <div>
      <Modal
        open={usersMo}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
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
          <Box sx={modalStyle}>
            <Paragraph>{t("teacherMoInfo")}</Paragraph>
            {isLoading ? (
              <>
                <Skeleton variant="h3" sx={{ borderRadius: '5px', height: '38px' }} />
                <Skeleton variant="h3" sx={{ borderRadius: '5px', height: '38px' }} />
                <Skeleton variant="h3" sx={{ borderRadius: '5px', height: '38px' }} />
              </>
            ) : (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <StyledH3>
                  {t("userMoName")}: {user?.full_name}
                </StyledH3>
                <StyledH3>
                  {t("gruopOpenPhone")}: {user?.phone}
                </StyledH3>
                <StyledH3>
                  {t("teachersEditLabel")}: {user?.salary}%
                </StyledH3>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
                gap: "10px",
              }}
            >
              <Button
                onClick={() => setUsersMo(!usersMo)}
                color="alsoWhite"
                variant="contained"
              >
                {t("groupOpenCanel")}
              </Button>
              <DeleteMo />
            </Box>
          </Box>
        </motion.div>
      </Modal>
    </div>
  );
});

export default UsersMo;
