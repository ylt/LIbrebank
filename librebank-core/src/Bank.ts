import User from './User';

export interface oauthconf {
    mode: string,
    client_id: string,
    client_secret: string
}

export interface Bank {

    authenticate(conf: any): User;

    // getATMs();

}

export default Bank;