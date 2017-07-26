import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'This is App Component';
  name: string = 'Ilayaraja';
  
  employee = {
    first_name: 'Alexandra',
    last_name: 'Daddario',
    city: 'Los Angeles'
  };

  logName() {
    console.log('Logging the name');
  }
}
