import { Address } from './events/address';
import { Provider } from './events/provider;

export class Event{
    id : number;
    name : string;
    description : string;
    provider : Provider;
    price : number;
    status : string;
    address : Address;
}