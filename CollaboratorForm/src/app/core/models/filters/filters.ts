export class Filters {
    'admissioDateMIN': number;
    'admissioDateMAX': number;
    'specialTech': string;
    'district': string;
    // 'previousPage': boolean;
    // 'nextPage': boolean;
    // 'countResults': number;
    // 'startPage': number;
    constructor(data?: any) {
        Object.assign(this, data);
    }
}
