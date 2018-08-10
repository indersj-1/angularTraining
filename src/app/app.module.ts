import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StartComponent } from './start/start.component';
import { BindingComponent } from './binding/binding.component';
import { NestedComponent } from './binding/nested.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { ViewChildParentComponent } from './viewchild/viewchildparent.component';
import { ViewChildComponent1 } from './viewchild/viewchild.component';
import { TemplateRefComponent } from './viewchild/templateref.component';
import { IOModule } from './input-output/input-output.module'
import {DIModule} from './di/di.module';
import {CompLifeCycleComponent,ChildComponent} from './completelifecyle/completelifecycle.component'
import { DynamicComponent } from './dynamic/dynamic.component';
import { Service } from './dynamic/service.loader';
import { ContactModule } from './multicomp/contact.module';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { WeatherComponent } from './http/weather.component';

 @NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    StartComponent,
    BindingComponent,
    NestedComponent,
    ViewChildComponent1,
    ViewChildComponent,
    CompLifeCycleComponent,
    ChildComponent,
    ViewChildParentComponent,
    TemplateRefComponent,
    DynamicComponent,
    WeatherComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IOModule,
    DIModule,
    ContactModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Service],
  entryComponents:[DynamicComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
