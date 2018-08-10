import { Component,Inject, ViewContainerRef } from '@angular/core';
 import {Service} from './dynamic/service.loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YoYo Angular';
  constructor(public myservice:Service, @Inject(ViewContainerRef) MyViewContainerRef){
    myservice.setRootViewContainerRef(MyViewContainerRef)
    myservice.addDynamicComponent();
  }
}
