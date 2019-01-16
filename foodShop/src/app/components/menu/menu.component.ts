import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishDetail';
import { DishService } from 'src/app/services/dishService/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private DishService: DishService) { 
    
  }

  dishes: Dish[] = this.DishService.getDishes();
  dishObject: Dish = this.dishes[0];

 

  ngOnInit() {
   } 

   onSelect(dishObject: Dish, value: boolean){
       console.log(dishObject);
       dishObject.show = value;
   }
  
  

}
