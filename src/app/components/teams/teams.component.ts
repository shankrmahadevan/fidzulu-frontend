import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService: TeamService) {}

  backendTeamMembers:string[] = []

  ngOnInit(): void {
    
    // ['bikes', 'food', 'toys', 'books', 'dvds', 'laptops']
      for(let category of ['toys', 'dvds']){

        this.teamService.getBackendTeam(category).subscribe(data => {
          data.memberNames.forEach((name: any) => {
            this.backendTeamMembers.push(name)
          })
          
        })
      }

  }


}
