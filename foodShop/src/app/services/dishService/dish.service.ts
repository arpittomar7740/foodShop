import { Injectable } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishDetail';
import { HttpClient } from '@angular/common/http';
import { baseUrl} from '../../shared/baseUrl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  public getDishes(): Dish[] {
    return DISHES;
  }

  public getDishesFromDatabase() : Observable<Dish[]> {
    return this.http.get<Dish[]> (baseUrl + 'dishes');
  }

  public getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]> (baseUrl + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }
}
