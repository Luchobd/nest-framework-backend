import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter], // Exportamos el servicio para que sea accesible desde otros módulos.
})
export class CommonModule {}
