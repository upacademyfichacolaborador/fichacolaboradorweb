export class Credentials {
     'id': number;
    'username': string;
    'password': string;
    'role': string;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
