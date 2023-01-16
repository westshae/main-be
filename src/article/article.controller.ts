import {  Controller } from "@nestjs/common";
import { checkEmail, checkToken } from "src/utility/sanitise";
import { ArticleService } from "./article.service";
@Controller("article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
}
