import { Ipropertybase } from "./ipropertybase";


export class Property implements Ipropertybase {
  id: number;
  name: string;
  category: string;
  price: string;
  city: string;
  image?: string;
  sellRent: number;
  description?: string;
  availableFrom?: Date;
}
