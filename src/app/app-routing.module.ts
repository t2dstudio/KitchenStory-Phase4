import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-Browser/Animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component:CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  }
];

@NgModule({
  //declarations: [
    //AppComponent

  //],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    //AppRoutingModule,
   //BrowserModule

  ],
  //providers:[],
  //bootstrap:[AppComponent], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
