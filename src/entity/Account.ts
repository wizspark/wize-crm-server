import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Industry} from './Industry';
import {Opportunity} from './Opportunity';

@Entity()
export class Account {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    owner: string;

    @Column()
    revenue: number;

    @ManyToOne(type => Industry, industry => industry.accounts)
    industry: Industry;

    @OneToMany(type => Opportunity, opportunity => opportunity.account)
    opportunities: Opportunity[];

}