export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  type: ProductType;
  tag: Tag;
  ratio: number;
  countAvailable: number;
  details: string;
}

export enum ProductType {
  SOCKS, PANTS, SHOES, ELECTRONIC, TSHIRT
}

export enum Tag {
  NEW, SALE, EXCLUSIVE, FEATURED, STANDARD
}
