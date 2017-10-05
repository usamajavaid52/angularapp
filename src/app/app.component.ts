import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { BodyComponent } from "./body.component";

//import { myFooterComponent } from './component.myFooter';

@Component({
  selector: "my-app",
  template: ` 
  <navbar></navbar> 
  <router-outlet></router-outlet>
  
  

  
  ,`
  //<div class="container">
  //<router-outlet></router-outlet>
})
export class AppComponent {}
