export class Filters {
    'admissionDateMIN': number;
    'admissionDateMAX': number;
    'specialTech': string;
    'district': string;
    'professionalCategory': string
    'client': string;
    // 'previousPage': boolean;
    // 'nextPage': boolean;
    // 'countResults': number;
    // 'startPage': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
