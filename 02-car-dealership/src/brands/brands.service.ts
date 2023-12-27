import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota'.toLowerCase(),
    //   createdAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand: { id: string }) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand with id "${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id.toString());

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB.updatedAt = new Date().getTime();

        // Change name the mayus to minus
        if (updateBrandDto.name) {
          updateBrandDto.name = updateBrandDto.name.toLowerCase();
        }

        brandDB = { ...brandDB, ...updateBrandDto };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  fillbrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
