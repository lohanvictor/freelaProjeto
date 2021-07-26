export interface Service {
    id?: number;
    name: string;
    typeService: string;
    value: number;
    shift: string;
}

export interface HirerRequest {
    id?:number;
    ampDesc: string;
    name: string;
    details: string;
    value:number;
    typePade: string;
}