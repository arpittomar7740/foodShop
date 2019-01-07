import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishDetail';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  @Input()
  dish: Dish;
  
  @Input()
  dishObject: Dish;

  constructor() { }

  ngOnInit() {
    
  }

}
