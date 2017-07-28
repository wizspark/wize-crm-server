import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Account} from './Account';

@Entity()
export class Opportunity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    owner: string;

    @Column()
    revenue: number;

    @ManyToOne(type => Account, account => account.opportunities)
    account: Account;

}