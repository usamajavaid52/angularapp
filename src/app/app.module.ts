import { BrowserModule } from "@angular/platform-browser";
//import{Routes,Router, RouterModule} from '@angular/router';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/Forms";
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from "@agm/core";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/primeng";
import { AutoCompleteModule } from "primeng/primeng";

import { NavbarComponent } from "./navbar.component";
import { BodyComponent } from "./body.component";
import { MapComponent } from "./map.component";
import { BusinessComponent } from "./business.component";
import { AppRoutingModule } from "./app.routing"; //Routing from Angular.io
/*const appRoutes: Routes=[
  {
    path:'map',
    component: MapComponent,
    
    
  }

]*/ @NgModule(
  {
    declarations: [
      AppComponent,
      NavbarComponent,
      BodyComponent,
      MapComponent,
      BusinessComponent
    ],
    imports: [
      /*RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),*/
      BrowserModule,
      FormsModule,
      HttpModule,
      ButtonModule,
      AppRoutingModule,
      AutoCompleteModule,
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyCdTqIi0wGWBGpIOkISdQSwpY4wmhbk-X0"
      })
    ],
    providers: [],
    bootstrap: [AppComponent]
  }
)
export class AppModule {}
export class Model {
  onclick() {
    //execute action
  }
}
