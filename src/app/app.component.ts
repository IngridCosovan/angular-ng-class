import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  downloadStatus = 0;
  constructor() {}
  ngOnInit(): void {}

  downloadFile() {
    this.downloadStatus = 1;
    setTimeout(() => {
      this.downloadStatus = 2;
    }, 2000);
  }

  clsName = 'two';
  clsNameTwo = 'three';
}
