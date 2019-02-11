import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/services/leaderService/leader.service';
import { LeaderData } from 'src/app/shared/leaderData';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private LeaderService: LeaderService) { }
  leaders: LeaderData[] = this.LeaderService.getLeader();
  ngOnInit() {
  }

}
