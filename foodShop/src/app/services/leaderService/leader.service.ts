import { Injectable } from '@angular/core';
import {LeaderData} from '../../shared/leaderData';
import {LEADERS} from '../../shared/leadersDetails';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  public getLeader(): LeaderData[] {
    return LEADERS;
  }

  public getFeaturedLeader(): LeaderData[] {
    return LEADERS.filter((leader) => {
      if(leader.featured === true){
        return leader;
      }
    });
  }
}
