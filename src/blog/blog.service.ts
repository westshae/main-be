import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogEntity } from "./blog.entity";
import { Repository } from "typeorm";
import * as nodemailer from "nodemailer";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
import axios from "axios";
import { checkEmail, checkToken } from "src/utility/sanitise";

@Injectable()
export class BlogService {
  @InjectRepository(BlogEntity)
  private readonly blogRepo: Repository<BlogEntity>;
  
}
