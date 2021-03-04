import { Controller, Get, Post, Put, Delete, Res, Req, HttpStatus, Body } from '@nestjs/common';
import { Response, Request } from 'express';
import { CreateProductsDto } from './dto/products.dto';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    async createPost(@Req() req, @Res() res, @Body() createProductsDto: CreateProductsDto){
        const product = await this.productsService.createProducts(createProductsDto)
        res.status(HttpStatus.OK).send(product)
    }
}
