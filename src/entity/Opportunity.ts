import {Table, Model, PrimaryKey, AutoIncrement, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {Account} from './Account';

@Table({timestamps: true})
export class Opportunity extends Model<Opportunity> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    owner: string;

    @Column(DataType.DOUBLE)
    revenue: number;

    @ForeignKey(() => Account)
    @Column
    accountId: number;

    @BelongsTo(() => Account)
    account: Account;

}