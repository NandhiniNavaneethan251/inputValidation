import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputValidation';

  public in="";
 public error="";
 public Domain="";
 public userid="";
  

  constructor(){ }

  ngOnInit(){

  }
  onClick(){
    if (this.in == null || this.in == "") {
      
      this.error= "Field cannot be empty";
      this.Domain= "";
      this.userid= "";
    
    }
    else {
      var n2 = this.in.includes("/");
      if (n2 == false) {
          this.error = "Invalid Entry";
          this.Domain = "";
          this.userid= "";
      } else {
          var ind = this.in.indexOf("/");
          this.Domain = this.in.substring(0, ind);
          this.userid = this.in.substring(ind + 1);
          if (this.Domain.length < 1 || this.userid.length < 1) {
              this.error= "Invalid Entry";
              this.Domain = "";
              this.userid= "";
          } else {

              this.error= "";

          }

      }

  }
  }

}
