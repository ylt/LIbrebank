import {Bank as _Bank} from 'librebank-core';
import * as paypal from 'paypal-rest-sdk';
import User from './User';
import Account from './Account';


class Bank implements _Bank {

    authenticate(conf : any) { //personal access token
        return new User(this, conf)
    }


}

export default Bank;