// import express from "express";
const express = require("express");
// import http from "http";
const http = require("http");
const socketio = require("socket.io");
const port = 4001;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello world");
});
let timeChange;
const data = [
  { name: 1, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 2, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 3, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 4, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 5, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 6, x: Math.random() * 10, y: Math.random() * 10 },
  { name: 7, x: Math.random() * 10, y: Math.random() * 10 },
];
const httpServer = http.createServer(app);

const server = new socketio.Server(httpServer, {
  cors: {
    origin: "*",
  },
});
server.on("connection", (socket) => {
  console.log("connected");
  if (timeChange) clearInterval(timeChange);
  if (data.length > 5) {
    data.reverse().pop();
    data.reverse();
  }
  data.push({
    name: data[data.length - 1].name + 1,
    x: Math.random() * 10,
    y: Math.random() * 10,
  });

  setInterval(() => {
    socket.emit("message", data);
  }, 1000);
});
httpServer.listen(process.env.PORT || port);
