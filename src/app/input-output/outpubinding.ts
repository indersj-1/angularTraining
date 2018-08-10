import { Component, EventEmitter, Output, Input } from '@angular/core';

//ODM object database model
export interface IPriceQuote {
    stockSymbol: string;
    lastPrice: number;
}

@Component({
    selector: 'price-quoter',
    template: `<h3 class="well text-danger">
    Child PriceQuoterComponent:
          {{stockSymbol}} 
          {{price | currency:'USD' }}
   </h3>
   `
})


export class PriceQuoterComponent {

    @Output() lastPriceEvent: EventEmitter<IPriceQuote> = new EventEmitter();
    stockSymbol: string = 'Bank of america';
    price: number;

    constructor() {
        window.setInterval(() => {
            let priceQuote: IPriceQuote = {
                stockSymbol: this.stockSymbol,
                lastPrice: 100 * Math.random(),
            };
            this.price = priceQuote.lastPrice;
            this.lastPriceEvent.emit(priceQuote)
        }, 1000);
    }

}

@Component({
    selector: 'app-event',
    template: `
    <div class='container'>
        <h1 class='text-success'>
        Parent Component received: 
        {{stockSymbol}} - {{price | currency:'USD'}}
        </h1>

   <price-quoter (lastPriceEvent)="priceQuoteHandler($event)">
       </price-quoter>

    <app-mail  [info]="stockInfo"></app-mail> 
    </div>`
})

export class OutputComponent {
    stockSymbol:string;
    price:number;
    stockInfo: IPriceQuote = {
        lastPrice:0,
        stockSymbol:""
    };

    priceQuoteHandler(event:IPriceQuote){
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
        this.stockInfo = {...event}
    }
}


@Component({
 selector:'app-mail',
 template:`
 <div class='container'>
     <h3 class='text-primary'>
         Sent mail about {{info.stockSymbol}}
         and Stock value    {{info.lastPrice | currency:'USD'}}  successfully.
     </h3>
 </div>
 `,
})

export class MainComponent{
    @Input() info:IPriceQuote;
    constructor(){
        console.table(this.info)
    }
}