import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/interfaces';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getAll().subscribe(
      (response: Product[]) => {
        this.productList = response;
        console.log(this.productList);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
