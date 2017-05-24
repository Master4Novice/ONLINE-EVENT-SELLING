import { Address } from './address';
import { IdCard } from './idCard';

export class Provider{
    id: number;
    fName: string;
    mName: string;
    lName: string;
    sex : string;
    idCard: IdCard;
    address: Address;
    landLNumber : number;
    mobileNumber : number;
    emailId : string;
}