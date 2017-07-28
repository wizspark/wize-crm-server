import {Table, Model, PrimaryKey, Column, AutoIncrement, HasMany} from "sequelize-typescript";
import {Lead} from './Lead';

@Table({timestamps: true})
export class LeadStatusType extends Model<LeadStatusType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @HasMany(() => Lead)
    leads: Lead[];

}