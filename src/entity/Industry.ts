import {Table, Model, PrimaryKey, Column, AutoIncrement, HasMany} from "sequelize-typescript";
import {Account} from './Account';

@Table({timestamps: true})
export class Industry extends Model<Industry> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @HasMany(() => Account)
    accounts: Account[];

}