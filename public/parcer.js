const violityPage = {
  title: () => document.querySelector('h1.page_title').innerText,
  seller: () => document.querySelector('.left_txt a').href,
  price: () => document.querySelector('.current.c_price_button span').innerText,
  description: () => document.querySelector('.eDescription').innerText,
  images: () =>
    [...document.querySelectorAll(':scope .about_lot_img .li img')].map(
      (img) => img.src
    ),
  period: '',
  language: '',
};

console.log(violityPage);

function scrap(shape = violityPage) {
  const result = {};
  for (const key of Object.keys(shape)) {
    result[key] = shape[key]();
  }
  return result;
}
scrap();

const images = document.querySelectorAll('.about_lot_img .li img');
const srcArray = Array.from(images).map((img) => img.src);
console.log(srcArray);

const title = document.querySelector('h1.page_title').innerText;
const seller = document.querySelector('.left_txt a').href;
const price = document.querySelector('.current.c_price_button span').innerText;
const description = document.querySelector('.eDescription').innerText;
