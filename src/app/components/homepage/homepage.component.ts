import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  images=[
    {name:'ny.jpg',caption:'New York'},
    {name:'cal.jpg',caption:'California'}]
}
