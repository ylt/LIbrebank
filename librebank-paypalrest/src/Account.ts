import {Account as _Account} from 'librebank-core';
import * as paypal from 'paypal-rest-sdk';

class Account implements _Account {

    private paypal;

    constructor(private bank) {

    }

    public getPayments(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            paypal.payment.list({
                'count': '10',
                'start_index': '1'
            }, (error, payments) => {
                if (error)
                    reject(error);
                resolve(payments);
            })
        });
    }

}

export default Account;