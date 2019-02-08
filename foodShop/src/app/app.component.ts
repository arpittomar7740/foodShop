import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ActivatedRoute } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-UI';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/menu']);
  }

}




