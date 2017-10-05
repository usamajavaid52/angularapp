import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RatingModule } from "primeng/primeng";

@Component({
  selector: "business",
  templateUrl: "./business.component.html"
})
export class BusinessComponent {
  public adList = ["Lahore", "Islamabad", "Karachi"];
  constructor(private router: Router) {}
}
export class ModelComponent {
  val: number;

  msg: string;

  handleRate(event) {
    this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
    this.msg = "Rating Cancelled";
  }
}
