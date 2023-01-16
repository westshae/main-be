import { Controller, Get } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get("preview")
  async getPreview(){
    try{
      console.log(await this.portfolioService.queryGithub())
      return await this.portfolioService.queryGithub();
    } catch(e){
      console.error(e);
    }
  }
}
