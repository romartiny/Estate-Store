'use strict';

const COUNT_ESTATE = 7;
const CATEGORY = "Недвижимость";

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

const getPrice = (minNum, maxNum) => {
    return (getRandomNumber() /100) * 100;
}

const getSellerName = (arr) => {
    const index = getRandomNumber(0, arr.length);
    return arr[index];
}

const getRating = (minNum, maxNum) => {
    return getRandomNumber(minNum, maxNum) / 10;
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

const getArea = (minNum, maxNum) => {
    return getRandomNumber(minNum, maxNum);
}

const getRoomsCount = (minNum, maxNum) => {
    return getRandomNumber(minNum, maxNum);
}

const getEstate = () => {
    return {
        name: getName(names),
        description: getDescription(descriptions),
        price: getPrice(250000, 2000000),
        category: CATEGORY,
        seller: {
            fullname: getSellerName(sellers),
            rating: getRating(0, 50),
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
            area: getArea(30, 250),
            roomsCount: getRoomsCount(1,7),
        },
    };
}

for (let i = 0; i < COUNT_ESTATE; i++) {
    const estate = getEstate();
    estates.push(estate);
    
}

console.log(estates);
