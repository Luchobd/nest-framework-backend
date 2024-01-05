import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // !Aplicamos ese "Type" para realizar una transformación de tipo numero al dato "limit". Es lo mismo que aplicar el, enableImplicitConversions: true que aplicamos en la practica con Mongo.
  limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // !Aplicamos ese "Type" para realizar una transformación de tipo numero al dato "limit". Es lo mismo que aplicar el, enableImplicitConversions: true que aplicamos en la practica con Mongo.
  offset?: number;
}
