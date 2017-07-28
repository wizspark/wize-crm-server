import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {LeadSourceType} from './LeadSourceType';
import {LeadStatusType} from './LeadStatusType';
import {LeadPhone} from './LeadPhone';

@Entity()
export class Lead {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    email: string;

    @Column()
    companyName: string;

    @Column()
    owner: string;

    @Column()
    dnbScore: number;

    @OneToMany(type => LeadPhone, phone => phone.lead)
    phones: LeadPhone[];

    @ManyToOne(type => LeadSourceType, source => source.leads)
    source: LeadSourceType;

    @ManyToOne(type => LeadStatusType, status => status.leads)
    status: LeadStatusType

}