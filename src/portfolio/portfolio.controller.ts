import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { checkEmail, checkToken } from "src/utility/sanitise";
import { PortfolioService } from "./portfolio.service";
@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

}
