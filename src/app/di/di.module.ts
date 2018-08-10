import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { ProductService } from "./product.service";






@NgModule({
 imports: [FormsModule,CommonModule],
 declarations:[ProductComponent],
 exports:[ProductComponent],
 providers:[ProductService]
})

export class DIModule{}