import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../shared/interfaces';
import {ProductService} from '../shared/product.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product$: Observable<Product>;
  relatedProducts$: Observable<Product[]>;
  @Input()
  ngSwitch: any;

  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
    this.getRelated();
  }

  public getProduct(): void {
    this.product$ = this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getProduct(Number(params.get('id')))
      )
    );
  }

  public getRelated(): void {
    this.relatedProducts$ = this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getRelated(Number(params.get('id')))
      )
    );
  }
}
