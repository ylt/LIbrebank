import {Account as _Account} from 'librebank-core';
import * as paypal from 'paypal-rest-sdk';

class Account implements _Account {
    constructor(private bank) {

    }

    public getPayments(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let params = {
                'count': 10,
                'start_index': 1
            };
            paypal.payment.list(params, this.bank.ppconf, (error, payments) => {
                if (error)
                    reject(error);
                resolve(payments);
            })
        });
    }

}

export default Account;