import { Server } from "restify";
import PostController from "./../controllers/post.controller";
import UserController from "../controllers/user.controller";
import { IsAuthenticated } from "../policies/Authorizer";
export default function routeDefinition(server: Server) {
  const user = new UserController();
  server.post("/signup", user.addUser);
  server.post("/login", user.userLogin);

  const post = new PostController();
  server.post("/post", post.addPost);
  server.post("/post/:id", post.updatePost);
  // server.post("/:id", post.);
}
