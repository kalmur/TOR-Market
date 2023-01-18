export interface Ipropertybase {
  id: number;
  name: string;
  category: string;
  price: string;
  city: string;
  image?: string;
  sellRent: number;
  availableFrom?: Date;
}
