import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Car extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ name: 'car_name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'car_model', type: 'varchar', length: 100 })
    model: string;

    @Column({ name: 'car_year', type: 'int', length: 4 })
    year: number;

    @Column({ name: 'car_brand', type: 'varchar', length: 100 })
    brand: string;
}
