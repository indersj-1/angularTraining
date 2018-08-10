import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StockComponent } from './inputbinding';
import { OrderComponent} from './ordercomponent';
import { SMSComponent } from './smscomponent';
import { TimerComponent } from './timercomponent';
import { CommonModule } from '@angular/common';
import { OutputComponent, PriceQuoterComponent, MainComponent } from './outpubinding';

@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[
        StockComponent,
        OrderComponent,
        SMSComponent,
        TimerComponent,

        PriceQuoterComponent,
        OutputComponent,
        MainComponent

    ],
    exports:[
        StockComponent,
        OutputComponent
    ]
})

export class IOModule{}