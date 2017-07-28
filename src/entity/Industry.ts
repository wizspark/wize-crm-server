import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Account} from './Account';

@Entity()
export class Industry {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Account, account => account.industry)
    accounts: Account[];

}