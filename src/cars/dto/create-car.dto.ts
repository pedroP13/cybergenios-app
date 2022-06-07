import {IsInt, IsNotEmpty, IsString} from 'class-validator';
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
