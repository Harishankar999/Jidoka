import React, { useState } from "react";
import { Button, Input, Text, useToast } from "@chakra-ui/react";
import style from "./style/login.module.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handleClick = () => {
    if (username && password) {
      toast({
        title: "Login Successful.",
        description: "You've logged into your account.",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      navigate("/home");
    } else {
      toast({
        title: "Login Failed.",
        description: "You've entered invalid credentials.",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log(e.keyCode);
      handleClick();
    }
  };

  return (
    <div className={style.login}>
      <Text fontSize={"4xl"}>USER LOGIN</Text>
      <Text fontSize={"2xl"} textAlign={"left"}>
        Enter Username:
      </Text>
      <Input
        placeholder="Enter Your Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Text fontSize={"2xl"} textAlign={"left"}>
        Enter Password:
      </Text>
      <Input
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <Button colorScheme={"teal"} margin={"10px"} onClick={handleClick}>
        LOGIN
      </Button>
    </div>
  );
};

export default Login;
