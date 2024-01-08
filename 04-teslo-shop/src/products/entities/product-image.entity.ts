import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  // !Relación (Uno a muchos) de Product to ProductImage
  // product
  @ManyToOne(
    () => Product,
    (product) => product.images,
    { onDelete: 'CASCADE' } // Eliminar en cascada.
  )
  product: Product;
}
