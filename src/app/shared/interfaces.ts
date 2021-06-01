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

export interface UserDTO {
  userName: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
  role: Role;
  status: Status;
}

export enum Role {
  ADMIN, USER
}

export enum Status {
  ACTIVE, BANNED
}
