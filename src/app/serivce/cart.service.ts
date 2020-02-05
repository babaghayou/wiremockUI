import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items = [];

    constructor(private httpClient: HttpClient) {
    }

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getShippingPrices() {
        return this.httpClient.get('src/assets/shipping.json');
    }

    getMappings(): Observable<string> {
        return this.httpClient.get('http://sc-bb-integ02:9990/__admin/mappings',{responseType: 'text'});
    }

}