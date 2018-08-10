import { Injectable } from '@angular/core'
import { Product } from './product';

// @Injectable({ providedIn: 'root' })

export class ProductService {


    getProduct(): Product {
        return new Product(
            101, "iphonex", 8000, "the latest iphone"
        )
    }
}