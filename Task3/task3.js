class Product {
  constructor(title, author, selector) {
    this.title = title;
    this.author = author;
    this.selector = selector;
  }
}

class Ebook extends Product {
  constructor(title = "blue", author = "red", selector) {
    super(title, author, selector);
  }
  updateinfo() {
    const data = (document.querySelector(this.selector).innerHTML =
      this.author + " " + this.title);
    return data;
  }
  download() {
    return console.log(`Downloading... ${this.title}`);
  }
  order() {
    return console.log(`Enter delivery address!`);
  }
}
class Book extends Product {
  constructor(title, author, selector) {
    super(title, author, selector);
  }
  updateinfo() {
    const data = (document.querySelector(this.selector).innerHTML =
      this.author + " " + this.title);
    return data;
  }
  download() {
    return console.log(`Downloading... ${this.title}`);
  }
  order() {
    return console.log(`Enter delivery address!`);
  }
}

const DarkerSky = new Ebook("Darker sky", "Ruben Eliassen", ".ebook");
DarkerSky.updateinfo();
DarkerSky.download();
DarkerSky.order();
const LongestNight = new Book("The Longest Night", "Maciej Dancewicz", ".book");
LongestNight.updateinfo();
LongestNight.download();
LongestNight.order();
