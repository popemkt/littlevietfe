import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as _ from 'lodash';
import { Observable, tap } from 'rxjs';
import { BaseResponse } from 'src/dtos/base-response';
import { CartDetail } from 'src/dtos/cart/cart-detail';
import { TakeAwayProduct } from 'src/dtos/product/take-away-product';
import { GetTakeAwayProducts, UpdateCart } from '../actions/take-away.action';
import { TakeAwayService } from '../services/take-away.service';

export class TakeAwayStateModel {
    products: TakeAwayProduct[] = [];
    cart!: CartDetail;
}

@State<TakeAwayStateModel>({
    name: 'takeaway',
    defaults: {
        products: [],
        cart: {
            products: [],
            subTotalPrice: 0,
            totalPrice: 0
        }
    }
})

@Injectable()
export class TakeAwayState {

    constructor(private takeAwayService: TakeAwayService) {
    }

    @Selector()
    static getTakeAwayProducts(state: TakeAwayStateModel) {
        return state.products;
    }

    @Selector()
    static getCartDetail(state: TakeAwayStateModel) {
        return state.cart;
    }

    @Action(GetTakeAwayProducts)
    getTakeAwayProducts({getState, setState}: StateContext<TakeAwayStateModel>) : Observable<BaseResponse<TakeAwayProduct[]>> {
        return this.takeAwayService.getTakeAwayProductMenu().pipe(tap((result) => {
            const state = getState();
            if (result.success) {
                setState({
                    ...state,
                    products: result.payload
                });
            }
        }));
    }

    @Action(UpdateCart)
    updateCart({getState, setState}: StateContext<TakeAwayStateModel>, payload: UpdateCart) {
        const state = getState();
        const index = state.products.findIndex(p => p.id == payload.productId);
        let cloneProducts = _.cloneDeep(state.cart.products);

        const existed = cloneProducts.findIndex(p => p.id == payload.productId);

        if (existed >= 0) {
            cloneProducts[existed].price = state.products[index].price;
            cloneProducts[existed].quantity += payload.quantity;
            setState({
                ...state,
                cart: {
                    ...state.cart,
                    products: cloneProducts
                }
            });
        } else {
            cloneProducts.push({
                caName: state.products[index].caName,
                esName: state.products[index].esName,
                name: state.products[index].name,
                quantity: payload.quantity,
                price: state.products[index].price,
                id: state.products[index].id
            });
        }
        cloneProducts =  cloneProducts.filter( pro => { return pro.quantity != 0; }); 
        let price = 0;
        cloneProducts.forEach(pro => {
            price += pro.price * pro.quantity;
        });
        setState({
            ...state,
            cart: {
                ...state.cart,
                products: cloneProducts,
                subTotalPrice: price,
                totalPrice: price
            }
        });
    }
}