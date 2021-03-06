/*

The scheme of interactions discussed below is based on the 
Mediator Design Pattern. 

ParentComponent is acting as a central authority 
which is responsible for communication between childcomponents.

*/
import {Component, ViewChild} from '@angular/core';
import {ViewChildComponent} from './viewchild.component';
import {ViewChildComponent1} from './viewchild.component';
@Component({
    selector: 'app-viewchild',
    template: `
   <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">
            Show/Hide Child Component Text
        </button>

    <div class="container" style="background:yellow">    
        <child-component></child-component>
        <child-component1></child-component1>
    </div>

   </div>
    `
})
export class ViewChildParentComponent {
    // Can access only one child
    @ViewChild(ViewChildComponent)  private cc:ViewChildComponent;  
  
    @ViewChild(ViewChildComponent1)  private cc1:ViewChildComponent1;  
    showHideText() {
        this.cc.toggleVisibility('Parent Component');
        this.cc1.toggleVisibility1('Parent Component1');
        
    }
}


