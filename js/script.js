// Zadanie: Tworzenie klasy:
// 1. Tworzenie funkcji konstruującej (klasa) telefony
function Phone(brand, price, color) {
// 2. Klasa powinna posiadać następujące parametry: brand, price, color. Aby dodać te parametry należy użyć "this"
	this.brand = brand;
	this.price = price;
	this.color = color;
}
// 3. Pora na utworzenie metody - korzystając z funkcji prototypowej. Dla klasy "Phone" należy utworzyć metodę "printinfo", która opisze telefon za pomocą console.log
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
// 4. Utworzenie obiektów, przedstawiające modele.
var iPhone6S = new Phone("Apple", 2250, "silver");
var SmsungGalaxyS6 = new Phone("Samsung", 2000, "black");
var OnePlus = new Phone("OnePlus", 1550, "red");
OnePlus.printInfo();
iPhone6S.printInfo();
SmsungGalaxyS6.printInfo();
//coś 