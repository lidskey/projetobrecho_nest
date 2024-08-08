import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";


@Entity({ name: "tb_categoria" })

export class Categoria{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    tipo: string
    


    @OneToMany(() => Produto, (produto) => produto.categoria)
    produto: Produto[]

}