'use strict';

const COUNT_ESTATE = 7;
const CATEGORY = "Недвижимость";
const MIN_PRICE = 250000;
const MAX_PRICE = 2000000;
const MIN_RATING = 0;
const MAX_RATING = 50;
const MIN_AREA = 30;
const MAX_AREA = 250;
const MIN_ROOM_COUNT = 1;
const MAX_ROOM_COUNT = 7;
const ONE_DAY = 1000 * 60 * 60 * 24;
const TWO_DAYS = ONE_DAY * 2;

const names = [
    "Двушка в центре Питера",
    "Однушка в спальнике Питера",
    "Трешка рядом с Кремлём",
    "Студия для аскетов",
    "Апартаменты для фрилансера"
];

const descriptions = [
    "Студия с лаконичным дизайном возле Ангары.",
    "Трёхкомнатная квартира для большой семьи рядом с Кремлём.",
    "2 минуты до набережной и прекрасного вида на Волгу.",
    "В квартире есть сауна, джакузи и домашний кинотеатр. Перепланировка согласована.",
    "Уютная однушка в тихом спальном районе. Рядом лес и озёра."
];

const sellers = [
    "Бюро Семёна",
    "Игнат-Агент",
    "Виталий Петрович",
    "Марья Андреевна"
];

const cities = [
    "Иркутск",
    "Москва",
    "Красноярск",
    "Минск"
];

const streets = [
    "ул. Шахтеров",
    "ул. Полярная",
    "ул. Лиственная",
    "ул. Мира",
    "ул. Советская"
];

const fileNames = [
    "apt_1.png",
    "apt_2.png",
    "apt_3.png",
    "apt_4.png",
    "apt_5.png",
    "apt_6.png",
    "house_1.png",
    "house_2.png",
    "house_3.png",
    "house_4.png",
];

const types = [
    "house",
    "apartment",
    "flat"
];

const estates = [];

const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];

const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

const getName = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getDescription = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getPrice = (MIN_PRICE, MAX_PRICE) => {
    return (getRandomNumber(MIN_PRICE, MAX_PRICE) / 100) * 100;
}

const getSellerName = (arr) => {
    const index = getRandomNumber(0, arr.length);
    return arr[index];
}

const getRating = (MIN_RATING, MAX_RATING) => {
    return getRandomNumber(MIN_RATING, MAX_RATING) / 10;
}

const getPublishDate = () => {
    // console.log(Date.now());
    // return Math.floor(Math.random() * Date.now());
    const dateNow = Date.now();
    const date = getRandomNumber(dateNow - ONE_DAY * 5, dateNow);
    return date;

}

const getCity = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getStreet = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getBuildNumber = () => {
    return Math.floor((Math.random() * 40));
}

const renderPhotosSrc = () => {
    const count = getRandomNumber(1, 4);
    const photos = [];

    for (let index = 0; index < count; index++) {
        const photoName = fileNames[getRandomNumber(0, fileNames.length)];
        const srcPhoto = `img/${photoName}`;
        photos.push(srcPhoto);
    }

    return photos;
}

const getType = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getArea = (MIN_AREA, MAX_AREA) => {
    return getRandomNumber(MIN_AREA, MAX_AREA);
}

const getRoomsCount = (MIN_ROOM_COUNT, MAX_ROOM_COUNT) => {
    return getRandomNumber(MIN_ROOM_COUNT, MAX_ROOM_COUNT);
}

const getEstate = () => {
    return {
        name: getName(names),
        description: getDescription(descriptions),
        price: getPrice(MIN_PRICE, MAX_PRICE),
        category: CATEGORY,
        seller: {
            fullname: getSellerName(sellers),
            rating: getRating(MIN_RATING, MAX_RATING),
        },
        publishDate: getPublishDate(),
        address: {
            city: getCity(cities),
            street: getStreet(streets),
            building: getBuildNumber(),
        },
        photos: renderPhotosSrc(fileNames),
        filters: {
            type: getType(types),
            area: getArea(MIN_AREA, MAX_AREA),
            roomsCount: getRoomsCount(MIN_ROOM_COUNT, MAX_ROOM_COUNT),
        },
    };
}

for (let i = 0; i < COUNT_ESTATE; i++) {
    const estate = getEstate();
    estates.push(estate);

}

// console.log(estates);

const productList = document.querySelector('.results__list');

const getProductItem = (item) => {
    const card = `<li class="results__item product">
    <button class="product__favourite fav-add" type="button" aria-label="Добавить в избранное">
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="product__image">
      <div class="product__image-more-photo hidden">+2 фото</div>
      <img src="${item.photos[0]}" width="318" height="220" alt="${item.name}">
    </div>
    <div class="product__content">
      <h3 class="product__title">
        <a href="#">${item.name}</a>
      </h3>
      <div class="product__price">${item.price}</div>
      <div class="product__address">${item.address.street}</div>
      <div class="product__date">${getProductDate(item.publishDate)}</div>
    </div>
  </li>`;
    console.log(item.publishDate)
    return card;
}

const getProductDate = (publishDate) => {
    const dateNow = Date.now();
    const dateDifference = dateNow - publishDate;

    if (dateDifference < ONE_DAY) {
        return 'Сегодня';
    } else if (dateDifference > ONE_DAY && dateDifference < TWO_DAYS) {
        return 'Вчера';
    } else {
        return `${new Date (publishDate).getDate()} ${months[new Date (publishDate).getMonth()]} ${new Date (publishDate).getFullYear()} год`;
    }
}

const renderElement = (template) => {
    const item = document.createElement('div');
    item.innerHTML = template;
    return item.firstChild;
};

const renderProductList = () => {
    const fragment = document.createDocumentFragment();

    const list = estates.length < 7 ? estates.slice() : estates.slice(0, 7); // тернарный оператор

    list.forEach((item) => {
        const productItem = getProductItem(item);
        const element = renderElement(productItem);
        fragment.appendChild(element);
    });

    return fragment;
}

productList.innerHTML = "";

productList.appendChild(renderProductList());

