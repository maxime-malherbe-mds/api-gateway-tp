import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Metric {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public method? : string;

    @Column()
    public path? : string;

    @Column()
    public userAgent? : string;

    @Column()
    public time? : number;

    @Column()
    public date? : Date;

}
