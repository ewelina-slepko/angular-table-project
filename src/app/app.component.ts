import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  data = [
    { name: "Jan", surname: "Kowalski1", age: "30", dateOfBirth: "06.12.1991" },
    { name: "Jan", surname: "Kowalski2", age: "30", dateOfBirth: "06.12.1991" },
    { name: "Jan", surname: "Kowalski3", age: "30", dateOfBirth: "06.12.1991" },
    { name: "Jan", surname: "Kowalski4", age: "30", dateOfBirth: "06.12.1991" },
  ];
}
