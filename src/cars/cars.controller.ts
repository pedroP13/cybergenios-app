import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody} from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarEntity } from './repository/car.entity';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService) {
  }

  @ApiBody({ type: CarEntity })
  @Post()
  async create(@Body()createCarDto: CreateCarDto){ 
    try {
      const createCar = await this.carsService.create(createCarDto);
      if(createCar) return "Car created successfully"; 
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get()
  async findAll(): Promise<CarEntity[]>  {
    try {
      const getAllCars = await this.carsService.findAll();
      if (getAllCars.length > 0) return getAllCars;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      const GetCarByid =  this.carsService.findOne(+id); 
      if(GetCarByid) return GetCarByid;
    } catch (error) {
      console.log(error);
      return error;
    }
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
