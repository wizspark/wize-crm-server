import {Table, Model, Column, AutoIncrement, PrimaryKey, HasMany, BelongsTo, ForeignKey} from "sequelize-typescript";
import {LeadSourceType} from './LeadSourceType';
import {LeadStatusType} from './LeadStatusType';
import {LeadPhone} from './LeadPhone';

@Table({timestamps: true})
export class Lead extends Model<Lead> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    title: string;

    @Column
    email: string;

    @Column
    companyName: string;

    @Column
    owner: string;

    @Column
    dnbScore: number;

    @HasMany(() => LeadPhone)
    phones: LeadPhone[];

    @ForeignKey(() => LeadSourceType)
    @Column
    sourceId: number;

    @BelongsTo(() => LeadSourceType)
    source: LeadSourceType;

    @ForeignKey(() => LeadStatusType)
    @Column
    leadStatusTypeId: number;

    @BelongsTo(() => LeadStatusType)
    status: LeadStatusType

}