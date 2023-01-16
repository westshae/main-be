import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ArticleEntity } from "./article.entity";
import { Repository } from "typeorm";
import * as nodemailer from "nodemailer";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
import axios from "axios";
import { checkEmail, checkToken } from "src/utility/sanitise";

@Injectable()
export class ArticleService {
  @InjectRepository(ArticleEntity)
  private readonly articleRepo: Repository<ArticleEntity>;
}
