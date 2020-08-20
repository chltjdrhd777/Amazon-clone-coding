import { ProductPropsType } from "../components/Product";

function serialGenerator() {
  const serialMaterilas = Math.random().toString(16);
  const randomSerials = `${serialMaterilas.substr(
    2,
    5
  )}-${serialMaterilas.substr(2, 3)}-${serialMaterilas.substr(3, 5)}`;
  return randomSerials;
}

export const productInfo: ProductPropsType[] = [
  { id: serialGenerator(), title: "", price: 1, rating: 1, imageUrl: "" },
  { id: serialGenerator(), title: "", price: 2, rating: 3, imageUrl: "" },
];
