import { Module } from "@nestjs/common";
import { Produto } from "./entities/produto.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "../categoria/entities/categoria.entity";
import { ProdutoService } from "./services/produto.service";
import { CategoriaService } from "../categoria/services/categoria.service";
import { ProdutoController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto, Categoria])],
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule],
})
export class ProdutoModule { }