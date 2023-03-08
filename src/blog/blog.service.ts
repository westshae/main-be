import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogEntity } from "./blog.entity";
import { Repository } from "typeorm";
import { TextEntity } from "./text.entity";

@Injectable()
export class BlogService{
  @InjectRepository(BlogEntity)
  private readonly blogRepo: Repository<BlogEntity>;
  
  @InjectRepository(TextEntity)
  private readonly textRepo: Repository<TextEntity>;

  getPost(id:number){
    return this.textRepo.findOne({id:id});
  }

  getPostData(id:number){
    return this.blogRepo.findOne({id:id});
  }

  getList(){
    return this.blogRepo.find();
  }
}