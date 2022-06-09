import { Injectable, Next } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarEntity } from './repository/car.entity';

@Injectable()
export class CarsService {

  constructor(@InjectRepository(CarEntity)
  private readonly CarRepository: Repository<CarEntity>) {
  };

  async create(CreateCarDto: CreateCarDto) {
    try {
      const createCar = await this.CarRepository.create(CreateCarDto).save();
      if (createCar.hasId) return 'success';
    } catch (error) {
      console.log(error);
      return `follwing error has ocurred ${error}`;
    }

  }

  async findAll(): Promise<CarEntity[]> {
    try {
      const getAllCars = await this.CarRepository.find({ select: ['id', 'name', 'model', 'year', 'brand'] });
      if (getAllCars.length > 0) return getAllCars;

    } catch (error) {
      console.log(error);
      return error; //consultar outros metodos de retorno para o tipo da promisse
    }

  }

  async findOne(id: number): Promise<CarEntity> {
    try {
      const findCarById = await this.CarRepository.findOne({ where: { id: id } });
      if (findCarById.hasId) return findCarById;
    } catch (error) {
      console.log(error);
      return error;
    }

  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
