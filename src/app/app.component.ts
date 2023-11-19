import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ztm';

  demoImageUrl = "https://picsum.photos/id/237/300/200"

  changeImage(event: KeyboardEvent) {
    this.demoImageUrl = (event.target as HTMLInputElement).value;
  }

  logSelectedImage(event: string) {
    console.log(event)
  }
}
