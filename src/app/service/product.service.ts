import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${API_URL}/products/${id}`);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + `/products/${id}`);
  }
}
