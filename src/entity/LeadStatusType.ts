import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Lead} from './Lead';

@Entity()
export class LeadStatusType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Lead, lead => lead.status)
    leads: Lead[];

}