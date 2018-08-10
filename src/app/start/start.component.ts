import { Component, ViewEncapsulation } from '@angular/core';

@Component({
"selector":"app-start",
"templateUrl":'./start.component.html',
 "styleUrls":['./start.component.css'], //internal style
 "styles":[`
  
     h1{
        background-color:yellow;
     }
     
     `
 ],
 encapsulation:ViewEncapsulation.Native 
})
export class StartComponent{
    authenticated:boolean=true;
    unauthenticated:boolean=false;
  
    show:boolean=true;
     time:any;
     name:string='Sriram';
     buttonStatus:boolean = false;
     titleStyle:string = 'red';
       
    constructor() {
       window.setInterval(() => {
                  this.time=new Date().toString()
          }, 1000)
     }  
  // methods   - Event handlers
    Save(event:any){
        console.table(event.target)
      alert("Ok.. Your points are redeemed")
      this.buttonStatus=true
      this.show=false;
    }
}