import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Lead} from './Lead';
import {PhoneType} from './PhoneType';

@Entity()
export class LeadPhone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Lead, lead => lead.phones)
    lead: Lead;

    @OneToMany(type => PhoneType, phoneType => phoneType.leadPhone)
    phoneTypes: PhoneType[];

}