import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @Min(1)
  @IsPositive()
  no: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  name: string;
}
