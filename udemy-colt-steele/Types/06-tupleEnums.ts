// JavaScript'de yer alan bir özellik değildir, diziye yeni kurallar ekler.
// Bir array türü ancak sabit uzunlukta sıralı bir array
// Tuple ile oluşturulan array'de yer alan elemanların sıralanışına göre türlerinin belirlenmesi
//  [number, string] olarak bir array oluşturulduysa [10,"Merhaba"] şeklinde eleman eklenmelidir.

// Bu şekilde oluşturulan array'e 3 adet number olan eleman ekleyebilirsin = Tuple
const color: [number, number, number] = [23, 21, 52];

type HTTPResponse = [number, string];

// Elemanların sırası oluşturulan type'a uymalı
const goodRes: HTTPResponse = [200, "OK"];
const badRes: HTTPResponse = [404, "Not Found"];

// goodRes.push(123);
// goodRes.pop();

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

// ----------------------------------------------------------------
// ENUMS
// oluşturulan kod boyunca yeniden kullanılabilen adlandırılmış dizi sabiti
// Başlangıç değeri 0...
// Eğer ilk eleman olan PENDING değerini 10 tanımlanırsa devamında gelen elemanlar +1 şeklinde atanarak 11 12 ...
// şeklinde devam edecek
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// hepsi bir türden oluşmak zorunda değil ama genelde tek türden oluşturulur.
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 234,
}
