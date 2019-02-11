import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/dish';
import { DISHES } from 'src/app/shared/dishDetail';
import { DishService } from 'src/app/services/dishService/dish.service';
import { LeaderData } from 'src/app/shared/leaderData';
import { LeaderService } from 'src/app/services/leaderService/leader.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private DishService: DishService, private LeaderService: LeaderService) {
  }
  dishes: Dish[] = this.DishService.getDishes();
  dishObject: Dish = this.dishes[0];

  featuredLeaders: LeaderData[] = this.LeaderService.getFeaturedLeader();
  
  ngOnInit() {
   }
   onSelect(dishObject: Dish, value: boolean) {
       dishObject.show = value;
   }
}
