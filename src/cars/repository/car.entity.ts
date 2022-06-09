import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({name: 'cars'})
export class CarEntity extends BaseEntity {
    @PrimaryGeneratedColumn('identity')
    id : number;
    
    @Column({type:'varchar' , length: 100 })
    @ApiProperty({example: 'Mustang GT' , description: 'The name of the car'})
    name: string;

    @Column({type:'varchar' , length: 100 })
    @ApiProperty({example: 'Ford', description: 'The model of the car'})
    model: string;

    @Column({type:'int'})
    @ApiProperty({example: '2020', description: 'The year of the car'})
    year: number;

    @Column({type:'varchar' , length: 100 })
    @ApiProperty({example: 'Ford', description: 'The brand name of the car'})
    brand: string;
}
