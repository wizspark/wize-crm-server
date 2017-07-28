import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsTo, ForeignKey} from "sequelize-typescript";
import {Lead} from './Lead';
import {PhoneType} from './PhoneType';

@Table({timestamps: true})
export class LeadPhone extends Model<LeadPhone> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @ForeignKey(() => Lead)
    @Column
    leadId: number;

    @BelongsTo(() => Lead)
    lead: Lead;

    @ForeignKey(() => PhoneType)
    @Column
    phoneTypeId: number;

    @BelongsTo(() => PhoneType)
    phoneType: PhoneType;

}