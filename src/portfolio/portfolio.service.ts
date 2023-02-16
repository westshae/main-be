import { Injectable } from "@nestjs/common";
import "dotenv/config";
import axios from "axios";

interface formattedRepo{
  id:string,
  name:string,
  fullname:string,
  description:string,
  url:string,
  language:string,
  archived:boolean,
  updatedAt:string,
}

@Injectable()
export class PortfolioService {
  async queryGithub() : Promise<any>{    
    try{
      let response = await axios
      .get("https://api.github.com/users/westshae/repos",
      {
        headers:{
          Authorization: `Bearer ${process.env.GITPERSONALACCESSTOKEN}`,
        }
      });
      return this.formatGithub(response.data);
    }catch(e){
      console.error(e);
    }
  }
  async formatGithub(data){
    let collection:Array<formattedRepo> = [];

    for(let repo of data){
      let date = new Date(repo.updated_at);
      collection.push({
        id: repo.id,
        name: repo.name,
        fullname: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        archived: repo.archived,
        updatedAt: (date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()),
      });
    }

    collection.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    return collection;
  }
}
