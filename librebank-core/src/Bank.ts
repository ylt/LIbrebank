import Account from './Account';

interface Bank {

    getAccount(): Account;

    getATMs();

}

export default Bank;