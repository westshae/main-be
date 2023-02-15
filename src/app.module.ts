import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConnectionService } from "./database-connection.service";
import { AuthModule } from "./auth/auth.module";
import { PortfolioModule } from './portfolio/portfolio.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    AuthModule,
    PortfolioModule,
    BlogModule
  ],
})
export class AppModule {}
