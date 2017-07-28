import {Table, Model, PrimaryKey, Column, AutoIncrement, HasMany} from "sequelize-typescript";
import {LeadPhone} from './LeadPhone';

@Table({timestamps: true})
export class PhoneType extends Model<PhoneType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @HasMany(() => LeadPhone)
    leadPhones: LeadPhone[];

}