import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XTrades-Task-Project';

  buttonClick() : void {
    alert("Button click");
  }
}
