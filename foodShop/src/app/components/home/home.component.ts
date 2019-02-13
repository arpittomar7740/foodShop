import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from 'src/app/services/dishService/dish.service';
import { Dish } from 'src/app/shared/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes: Dish[];
  featuredDishes: Dish;
  constructor(private DishService: DishService) { }

  ngOnInit() {
    this.DishService.getFeaturedDish()
    .subscribe((resp) =>{
      this.featuredDishes = resp;
      console.log(this.featuredDishes)
    })
    
    this.DishService.getDishesFromDatabase()
    .subscribe((resp) => {
      this.dishes = resp;
    })
  }

}
