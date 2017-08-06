/**
 * Created by joe on 02/08/17.
 */

import Account from './Account';

interface Bank {

    getAccount(): Account;

    getATMs();

}

export default Bank;