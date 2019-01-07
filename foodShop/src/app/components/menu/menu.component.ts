import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishDetail';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public hideComments: boolean;

  dishes: Dish[] = DISHES;
  dishObject: Dish = this.dishes[0];

  constructor() { 
    
  }

  ngOnInit() {
   } 

   onSelect(dishObject: Dish, value: boolean){
       console.log(dishObject);
       dishObject.show = value;
   }
  
  

}
