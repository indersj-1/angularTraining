import { Component } from '@angular/core';
import {Product} from './product';
import { ProductService } from './product.service';


@Component({
    selector:'app-DI',
    templateUrl :'./product.component.html'
})

export class ProductComponent{
    product:Product;
    constructor(public ps:ProductService){
        console.log("Service is injected");
    }
    ngOnInit(){
        this.product = this.ps.getProduct();
    }
}