import {Injectable} from '@angular/core';
import {Leader} from "../shared/leader";
import {LEADERS} from "../shared/leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() {
  }

  public getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(LEADERS), 2000)
    });
  }

  public getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000)
    });
  }

  public getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      // Simulate server latency with 2 seconds delay
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000)
    });
  }
}
