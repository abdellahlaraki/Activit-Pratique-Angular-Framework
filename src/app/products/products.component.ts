import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [

  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone:true,
})
export class ProductsComponent {
  products!:Array<any>;
  private productService:ProductService;
  constructor(productService:ProductService) {
    this.productService=productService;
  }
  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (resp:any) => {
        this.products = resp;
      },
      error:err => {
        console.log(err)
      }
    })
  }

  handleDelete(product: any) {
    this.productService.deleteProduct(product).subscribe({
      next:resp=>{this.getAllProducts()},
      error:err => {
        console.log(err)
      }
    })
  }
}
