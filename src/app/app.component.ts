import { Component } from "@angular/core";

const FPS = 60;

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent  {
  width = 100;
  originalWidth = 100;
  targetWidth = 200;
  timer = 0;

  action(): void {
    this.timer = setInterval(() => {
      console.log(1);
      this.width += (this.targetWidth - this.originalWidth) / FPS;
      if (this.width >= 200) {
        clearInterval(this.timer);
      }
    }, 1000 / FPS);
  }

  clear(): void {
    this.width = 100;
    clearInterval(this.timer);
  }
}
