import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from "./product-list/product-alerts/product-alerts.component";
import {ProductDetailsComponent} from "./product-list/product-details/product-details.component";

import {TeamListComponent} from './team-list/team-list.component';
import {PlayersListComponent} from './players-list/players-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule, MatTableModule} from "@angular/material";
import {CartComponent} from "./cart/cart.component";
import {HttpClientModule} from "@angular/common/http";
import {ShippingComponent} from "./cart/shipping/shipping.component";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'nba/teams', component: TeamListComponent},
            {path: 'cart', component: CartComponent},
            {path: 'nba/players', component: PlayersListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'shipping', component: ShippingComponent}
        ]),
        BrowserAnimationsModule,
        MatSliderModule,
        MatTableModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductDetailsComponent,
        TeamListComponent,
        PlayersListComponent,
        ProductAlertsComponent,
        CartComponent,
        ShippingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/