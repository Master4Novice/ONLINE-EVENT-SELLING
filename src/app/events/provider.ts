import { Address } from './events/address';
import { IdCard } from './events/idCard';

export class Provider{
    id: number;
    fName: string;
    mName: string;
    lName: string;
    sex : string;
    idCard[] : IdCard;
    address[]: Address;
    landLNumber : number;
    mobileNumber : number;
    emailId : string;
}