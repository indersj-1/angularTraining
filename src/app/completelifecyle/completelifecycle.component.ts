import { Component,Inject, ViewContainerRef, OnInit, OnChanges, OnDestroy, DoCheck, Input, SimpleChange, SimpleChanges, ChangeDetectorRef } from '@angular/core';

import {Service} from '../dynamic/service.loader';




@Component({
    selector: 'app-lifecycle',
    template: `
      <h1 class="container">Google Search:
          <input type="text" [(ngModel)]="search">
       </h1>
       <child [search]="search"></child>

    `
})
export class CompLifeCycleComponent {
    search: string = 'computers';
    constructor(public myservice:Service, @Inject(ViewContainerRef) MyViewContainerRef){
        myservice.setRootViewContainerRef(MyViewContainerRef)
        myservice.addDynamicComponent();
      }
}



@Component({
    selector: 'child',
    template: `
      <h1>{{search}}</h1>
    `
})

export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
    @Input() search:string;
    constructor(public cd:ChangeDetectorRef) {
        console.log(`constructor: ${this.search}`)
        // this.cd.detach();
    }
    ngOnInit() {
        console.log(`init ${this.search}`);
        // setTimeout(() => {
        //     this.cd.reattach();  
        //   }, 5000);
    }
    ngOnChanges(change:SimpleChanges) {
       console.log(`simplechange `,change);
    }
    ngDoCheck() {
        if(this.search.length == 10){
            // this.cd.detectChanges();
            // console.log("detectchange")
        }
        // this.cd.checkNoChanges()
    }
    ngOnDestroy() {

    }
 
    

}


