import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {LeadPhone} from './LeadPhone';

@Entity()
export class PhoneType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => LeadPhone, leadPhone => leadPhone.phoneTypes)
    leadPhone: LeadPhone;

}