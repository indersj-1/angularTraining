import {Component} from '@angular/core';
@Component({
    selector: 'child-component',
    template: `
    <div>
       <h2>Child Component</h2>
       <div class="text">
         <span [hidden]="!showText">
            I am visible now! Thanks to {{visibilitySource}}
          </span>
        </div>
      <div>
        <button (click)="toggleVisibility('Child Component')">
           Show/Hide Text
        </button>
      </div>
    </div>
    `,
    styles: ['.text { margin-bottom: 10px; color:red}']
})
export class ViewChildComponent {
    showText:Boolean = false;    
    visibilitySource:string = '';

    toggleVisibility(source:any) {
        this.showText = !this.showText;
        this.visibilitySource = source;
       }

  
}



@Component({
    selector: 'child-component1',
    template: `
    <div>
       <h2>Child Component</h2>
       <div class="text">
         <span [hidden]="!showText">
            I am visible now! Thanks to {{visibilitySource}}
          </span>
        </div>
      <div>
        <button (click)="toggleVisibility1('Child Component1')">
           Show/Hide Text
        </button>
      </div>
    </div>
    `,
    styles: ['.text { margin-bottom: 10px; color:red}']
})
export class ViewChildComponent1 {
    showText:Boolean = false;    
    visibilitySource:string = '';

 

       toggleVisibility1(source:any) {
        this.showText = !this.showText;
        this.visibilitySource = source;
       }
}
