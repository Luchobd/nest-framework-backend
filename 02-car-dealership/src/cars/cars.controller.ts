import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  // ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // !ParseIntPipe: Transforma la cadena de texto en un número entero. Se comento porque se usa ahora UUID y ese dato llega como "string".
  // @Get(':id')
  // getCarById(@Param('id', ParseIntPipe) id: number) {
  //   console.log({ id });
  //   return this.carsService.findOneById(id);
  // }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}

// ParseIntPipe: Transforma la cadena de texto en un número entero.
// ParseUUIDPipe: Verifica que la cadena de texto es un UUID.
