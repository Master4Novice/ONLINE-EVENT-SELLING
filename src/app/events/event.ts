import { Address } from './address';
import { Provider } from './provider';

export class Event{
    id : number;
    name : string;
    description : string;
    provider : Provider;
    price : number;
    status : string;
    address : Address;
}