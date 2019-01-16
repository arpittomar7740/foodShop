import { Injectable } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishDetail';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  public getDishes(): Dish[] {
    return DISHES
  }
}
