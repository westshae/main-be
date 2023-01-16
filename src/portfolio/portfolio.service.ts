import { Injectable } from "@nestjs/common";
import "dotenv/config";
import axios from "axios";

@Injectable()
export class PortfolioService {
  async queryGithub() : Promise<any>{    
    try{
      let response = await axios
      .get("https://api.github.com/users/westshae/repos");
      return response.data;
    }catch(e){
      console.error(e);
    }
  }
  formatGithub(data){
    return data;
  }
}
