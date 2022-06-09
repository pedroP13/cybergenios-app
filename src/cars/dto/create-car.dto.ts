import {IsInt, IsNotEmpty, IsString} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class CreateCarDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()  
    model: string;

    @IsNotEmpty()
    @IsInt()
    year: number;

    @IsNotEmpty()
    @IsString()
    brand: string;
}
