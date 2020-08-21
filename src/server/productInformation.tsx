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
  {
    id: serialGenerator(),
    title:
      "NEAT Worker Bee 카디오이드 솔리드 스테이트 콘덴서 마이크 팝 필터 및 쇼크 마운트 포함",
    price: "107,788",
    rating: 4.3,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81WxpdqQSfL._AC_SY606_.jpg",
  },
  {
    id: serialGenerator(),
    title: "HP Elite X3 and Elite X3 Desk Dock (X9U42UT#ABA)",
    price: "230,127",
    rating: 3.7,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91wVe75wrOL._AC_SX679_.jpg",
  },
  {
    id: serialGenerator(),
    title: "Alex Vando 남성용 드레스 셔츠 레귤러 핏 긴소매 남성용 셔츠",
    price: "22,999",
    rating: 3.5,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71id%2BwwTw-L._AC_UX569_.jpg",
  },
];
