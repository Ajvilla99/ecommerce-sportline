import { ApiProperty } from "@nestjs/swagger";

export class Testapi {
    
@ApiProperty({
    example: 'b1a9f8e7-8b2d-4f12-9e72-6a7b4b8c9f56',
    description: 'Unique identifier for the product',
  })
  id: string;

  @ApiProperty({
    example: 'Nike Air Zoom Pegasus 40',
    description: 'Official name of the product',
  })
  name: string;

  @ApiProperty({
    example: 'Lightweight running shoes designed for daily training.',
    description: 'Detailed description of the product features and benefits',
  })
  description: string;

  @ApiProperty({
    example: 129.99,
    description: 'Retail price of the product in USD',
  })
  price: number;

  @ApiProperty({
    example: 'Footwear',
    description: 'Category the product belongs to',
  })
  category: string;

  @ApiProperty({
    example: 150,
    description: 'Available stock quantity for the product',
  })
  stock: number;

  @ApiProperty({
    example: 'https://cdn.sportline.com/products/nike-pegasus-40.jpg',
    description: 'URL of the main image of the product',
  })
  imageUrl: string;

  @ApiProperty({
    example: true,
    description: 'Indicates if the product is currently active and available for sale',
  })
  isActive: boolean;

  @ApiProperty({
    example: '2025-11-07T03:30:00Z',
    description: 'Date when the product was created in the system',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2025-11-07T04:00:00Z',
    description: 'Date of the last product update',
  })
  updatedAt: Date;
}