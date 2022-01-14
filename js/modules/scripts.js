// Main Massive

const estates = [];

// Names

const names = [
    "Двушка в центре Питера",
    "Однушка в спальнике Питера",
    "Трешка рядом с Кремлём",
    "Студия для аскетов",
    "Апартаменты для фрилансера"
];

const getName = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getRandomNumber = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

// Description

const descriptions = [
    "Студия с лаконичным дизайном возле Ангары.",
    "Трёхкомнатная квартира для большой семьи рядом с Кремлём.",
    "2 минуты до набережной и прекрасного вида на Волгу.",
    "В квартире есть сауна, джакузи и домашний кинотеатр. Перепланировка согласована.",
    "Уютная однушка в тихом спальном районе. Рядом лес и озёра."
];

const getDescription = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

// Price

const getPrice = (minNum, maxNum) => {
    return Math.floor((Math.random() * (maxNum - minNum) + minNum) /100) * 100;
}

// Category

const CATEGORY = "Недвижимость";

// Seller

const sellers = [
    "Бюро Семёна",
    "Игнат-Агент",
    "Виталий Петрович",
    "Марья Андреевна"
];

const getSellerName = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

// Rating

const getRating = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum) / 10;
}

// Date

const getPublishDate = () => {
    timeNow = Math.floor(Math.random() * Date.now());
    return new Date(timeNow);
}

// City

const city = [
    "Иркутск",
    "Москва",
    "Красноярск",
    "Минск"
];

const getCity = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

// Street

const streets = [
    "ул. Шахтеров",
    "ул. Полярная",
    "ул. Лиственная",
    "ул. Мира",
    "ул. Советская"
];

const getStreet = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

// Building

const getBuild = (minNum, maxNum) => {
    return Math.floor((Math.random() * 40));
}

// Photos

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

const renderPhotosSrc = () => {
    const count = getRandomNumber(1, 4);
    const photos = [];
    for (let index = 0; index < count; index++) {
        const photoName = fileNames[getRandomNumber(0, fileNames.length)];
        // const srcPhoto = "img/" + photoName;
        const srcPhoto = `img/${photoName}`;
        photos.push(srcPhoto);
    }
    return photos;
}

// Filters

const type = [
    "house",
    "apartment",
    "flat"
];

const getType = (arr) => {
    const i = getRandomNumber(0, arr.length);
    return arr[i];
}

const getArea = (minNum, maxNum) => {
    return Math.floor((Math.random() * (maxNum - minNum) + minNum));
}

const getRoomsCount = (minNum, maxNum) => {
    return Math.floor((Math.random() * (maxNum - minNum) + minNum));
}

// For Massive

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
        publishDate: getPublishDate(),
        address: {
            city: getCity(city),
            street: getStreet(streets),
            building: getBuild(1, 40),
        },
        photos: renderPhotosSrc(fileNames),
        filters: {
            type: getType(type),
            area: getArea(30, 250),
            roomsCount: getRoomsCount(1,7),
        },
    };
}

const countEstate = 7;

for (let i = 0; i < countEstate; i++) {
    const estate = getEstate();
    estates.push(estate);
    
}

// Write Massive

console.log(estates);