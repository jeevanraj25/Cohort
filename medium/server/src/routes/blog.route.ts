import { Hono } from "hono";
import { createBlog, deleteBlog, getBlog,  getBlogbyID,  updateBlog } from "../controllers/blog";
import { authMiddleware } from "../Middleware/auth";

const blogRouter =new Hono();

// blogRouter.use("*",authMiddleware);
blogRouter.get("/get",getBlog);
blogRouter.get("/get/:id",getBlogbyID);
blogRouter.put("/update/:id",updateBlog);
blogRouter.delete("/delete/:id",deleteBlog);
blogRouter.post('/create',createBlog );
  

export default blogRouter;