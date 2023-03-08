import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TextEntity } from './text.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity]), TypeOrmModule.forFeature([TextEntity])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}