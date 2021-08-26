import { Component, Input, OnInit } from "@angular/core";
import "../shared/utils";

@Component({
  selector: "app-simple-table",
  templateUrl: "./simple-table.component.html",
  styleUrls: ["./simple-table.component.scss"],
})
export class SimpleTableComponent implements OnInit {
  @Input() data;

  tableKeys: string[];
  headers: string[];

  constructor() {}

  ngOnInit(): void {
    this.getTableKeys();
    this.getHeaders();
  }

  getTableKeys() {
    this.tableKeys = Object.keys(this.data[0])
  }

  getHeaders() {
    this.headers = Object.keys(this.data[0]).map((el) =>
      el.capitalizeFirstLetter().splitCamelCase()
    );
  }
}
