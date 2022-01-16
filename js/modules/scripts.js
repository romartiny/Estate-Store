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
    return (getRandomNumber(MIN_PRICE, MAX_PRICE) /100) * 100;
}

const getSellerName = (arr) => {
    const index = getRandomNumber(0, arr.length);
    return arr[index];
}

const getRating = (MIN_RATING, MAX_RATING) => {
    return getRandomNumber(MIN_RATING, MAX_RATING) / 10;
}

const getPublishDate = () => {
     return Math.floor(Math.random() * Date.now());
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
        publishDate: new Date(getPublishDate()),
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

console.log(estates);
