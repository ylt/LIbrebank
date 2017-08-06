import {User as _User} from 'librebank-core';
import * as paypal from 'paypal-rest-sdk';
import Account from './Account';

export class User implements _User {

    private paypal;

    constructor(private bank, public ppconf) {


        //paypal.configure(ppconf); // this configures globally..
    }


    //paypal only has the one account
    getAccounts() {
        return new Promise((resolve, reject) => {
          resolve([
              new Account(this)
          ]);
        });
    }

    getAccount(id) {
        return new Account(this);
    }

}

export default User;