import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BodyComponent } from "./body.component";
import { NavbarComponent } from "./navbar.component";
import { MapComponent } from "./map.component";
import { BusinessComponent } from "./business.component";
export const routes: Routes = [
  {
    path: "",
    redirectTo: "Home",
    pathMatch: "full"
  },
  {
    path: "Home",
    component: BodyComponent,

    children: [
      //{ path: "Home", redirectTo: "Home", pathMatch: "full" },
      { path: "Home", component: BusinessComponent }
    ]
  },
  {
    path: "map",
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
