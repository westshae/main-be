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
  updatedAtFormatted:string,
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
      const yyyy = date.getFullYear();
      let mm:any = date.getMonth() + 1; // Months start at 0!
      let dd:any = date.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const formattedDate = dd + '/' + mm + '/' + yyyy;

      collection.push({
        id: repo.id,
        name: repo.name,
        fullname: repo.full_name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        archived: repo.archived,
        updatedAtFormatted: formattedDate,
	updatedAt: repo.updated_at,
      });
    }

    collection.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    return collection;
  }
}
