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
  languages:Array<{name:string, lines:number}>,
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
      let reponse = await axios
        .get("https://api.github.com/repos/westshae/" + repo.name + "/languages",
        {
          headers:{
            Authorization: `Bearer ${process.env.GITPERSONALACCESSTOKEN}`,
          }
        });


      collection.push({
        id: repo.id,
        name: repo.name,
        fullname: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        archived: repo.archived,
        updatedAt: repo.pushed_at,
        languages: reponse.data        
      });
    }

    collection.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    return collection;
  }
}
