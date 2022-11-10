import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../pages/style/home.module.css";
const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    toast({
      title: "Logout Successful.",
      description: "You've logged out Successfully.",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
    navigate("/");
  };
  return (
    <Box className={style.nav}>
      <Text fontSize={"2xl"}>JIDOKA Assignment</Text>
      <Button colorScheme={"teal"} onClick={handleLogout}>
        LOGOUT
      </Button>
    </Box>
  );
};

export default Navbar;
