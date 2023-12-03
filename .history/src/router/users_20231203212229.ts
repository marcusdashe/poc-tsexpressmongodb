// import { } from './../../.history/src/middlewares/index_20231203211341';
import express from "express";
import { deleteUser, getAllUsers } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
};
