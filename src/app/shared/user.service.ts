import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UserDTO} from './interfaces';

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public createUser(user: UserDTO): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/create`, user);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${id}`);
  }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }
}
