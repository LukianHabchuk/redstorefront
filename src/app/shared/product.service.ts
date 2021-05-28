import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './interfaces';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }

  public getRelated(productId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/related/${productId}`);
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/product/update`, product);
  }

  public deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}/product/find/${id}`);
  }
}
