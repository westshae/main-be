import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { checkEmail, checkToken } from "src/utility/sanitise";
import { BlogService } from "./blog.service";
@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
}
