
import {default as _Bank} from 'librebank-core';
import * as paypal from 'paypal-rest-sdk';
import User from './Account';
import Account from './Account';

interface paypalconf {
    mode: string,
    client_id: string,
    client_secret: string
}

class Bank extends _Bank {

    authenticate(conf : paypalconf) { //personal access token
        return new User(this, conf)
    }


}

export default Bank;