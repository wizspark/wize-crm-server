import {Table, Model, PrimaryKey, AutoIncrement, Column, HasMany} from "sequelize-typescript";
import {Lead} from './Lead';

@Table({timestamps: true})
export class LeadSourceType extends Model<LeadSourceType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @HasMany(() => Lead)
    leads: Lead[];

}