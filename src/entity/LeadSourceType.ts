import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Lead} from './Lead';

@Entity()
export class LeadSourceType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Lead, lead => lead.source)
    leads: Lead[];

}