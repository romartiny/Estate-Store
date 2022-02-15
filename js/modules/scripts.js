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
const MAP_TOKEN = 'pk.eyJ1Ijoicm9tYXJ0aW55IiwiYSI6ImNremY5dzY4MzFhbWoyc282b3F6ajQxMmoifQ.CLr7iZg8U6AkSRE3Olf_5Q';

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
  "ул.Шахтеров",
  "ул.Полярная",
  "ул.Лиственная",
  "ул.Мира",
  "ул.Советская"
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

const getSellerName = (arr) => {
  const index = getRandomNumber(0, arr.length);
  return arr[index];
}

const getRating = (MIN_RATING, MAX_RATING) => {
  return getRandomNumber(MIN_RATING, MAX_RATING) / 10;
}

const getPublishDate = () => {
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

const getPrice = (MIN_PRICE, MAX_PRICE) => {
  const rubPrice = (getRandomNumber(MIN_PRICE, MAX_PRICE) / 100) * 100;
  const normalPrice = Math.floor(rubPrice / 100) * 100;
  const price = Number.prototype.toFixed.call(parseFloat(normalPrice) || 0, 0),
    priceReplace = price.replace(/(\D)/g, ","),
    lastPrice = priceReplace.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

  return lastPrice + ' ₽';
};

const getEstate = (index) => {
  return {
    id: index,
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
  const estate = getEstate(i);
  estates.push(estate);

}

//----------------------------------------------------------------

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
      <img src="${item.photos[0]}" width="318" height="220" alt="${item.name}" data-id="${item.id}">
    </div>
    <div class="product__content">
      <h3 class="product__title">
        <a href="#" data-id="${item.id}">${item.name}</a>
      </h3>
      <div class="product__price">${item.price}</div>
      <div class="product__address">${item.address.street}</div>
      <div class="product__date">${getProductDate(item.publishDate)}</div>
    </div>
  </li>`;
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

const renderProductList = (list) => {
  const fragment = document.createDocumentFragment();

  list.forEach((item) => {
    const productItem = getProductItem(item);
    const element = renderElement(productItem);
    fragment.appendChild(element);
  });

  return fragment;
}

const findProduct = (id, list) => {
  return list.find((el) => el.id === id);
}

const list = estates.length < 7 ? estates.slice() : estates.slice(0, 7);

productList.innerHTML = "";

productList.appendChild(renderProductList(list));

//----------------------------------------------------------------

const modal = document.querySelector('.popup');
const productTitle = document.querySelectorAll('.product__title');
const productImage = document.querySelectorAll('.product__image');

// gallery photos

const renderPhotos = (photos, name) => {
  let images = '';
  photos.forEach((elem, index) => {
    images = images + `<li class="gallery__item ${index === 0 ? 'gallery__item--active' : ""} ">
    <img src="${elem}" width="124" height="80" alt="${name}">
  </li>`;
  });
  return images;
}

const getModalWindow = (item) => {
  const card = `<div class="popup__inner">
    <button class="popup__close" type="button" aria-label="Закрыть">
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
      </svg>
    </button>
    <div class="popup__date">${getProductDate(item.publishDate)}</div>
    <h3 class="popup__title">${item.name}</h3>
    <div class="popup__price">${item.price}</div>
    <div class="popup__columns">
      <div class="popup__left">
        <div class="popup__gallery gallery">
          <button class="gallery__favourite fav-add">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="gallery__main-pic">
            <img src="${item.photos[0]}" width="520" height="340" alt="Загородный дом">
          </div>
          <ul class="gallery__list">
            ${renderPhotos(item.photos, item.name)}
          </ul>
        </div>
        <ul class="popup__chars chars">
          <li class="chars__item">
            <div class="chars__name">Площадь</div>
            <div class="chars__value">${item.filters.area}</div>
          </li>
          <li class="chars__item">
            <div class="chars__name">Количество комнат</div>
            <div class="chars__value">${item.filters.roomsCount}</div>
          </li>
          <li class="chars__item">
            <div class="chars__name">Тип недвижимости</div>
            <div class="chars__value">${typeTranslate[item.filters.type]}</div>
          </li>
        </ul>
        <div class="popup__seller seller seller--good">
          <h3>Продавец</h3>
          <div class="seller__inner">
            <a class="seller__name" href="#">${item.seller.fullname}</a>
            <div class="seller__rating"><span>${item.seller.rating}</span></div>
          </div>
        </div>
        <div class="popup__description">
          <h3>Описание товара</h3>
          <p>${item.description}</p>
        </div>
      </div>
      <div class="popup__right">
        <div class="popup__map" id="map">  

        </div>
        <div class="popup__address">${item.address.city}, ${item.address.street}, ${item.address.building}</div>
      </div>
    </div>
  </div>`;
  return card;
}

//map token

const typeTranslate = {
  'apartment': 'Комната',
  'flat': 'Квартира',
  'house': 'Дом',
}

const initOpenModal = (evt) => {
  const onClosePopupButtonClick = () => {
    removePopupListeners();
    closeModal();
  }

  const openModal = () => {
    modal.classList.add('popup--active');
  }

  const closeModal = () => {
    modal.classList.remove('popup--active');
  }

  const onOverlayClick = (evt) => {
    if (evt.target === modal) {
      // evt.preventDefault;
      closeModal();
    }
  }

  const onClosePopupEnterPress = (evt) => {
    if (evt.key === 'Enter') {
      onClosePopupButtonClick();
    }
  }

  const onClosePopupEscapePress = (evt) => {
    if (evt.key == 'Escape') {
      evt.preventDefault();
      onClosePopupButtonClick();
    }
  }

  const onClosePopupClick = (evt) => {
    onClosePopupButtonClick();
  }

  const initModalListeners = (evt) => {
    document.addEventListener('click', onOverlayClick);
    closePopupButton.addEventListener('click', onClosePopupClick);
    document.addEventListener('keypress', onClosePopupEscapePress);
    modal.addEventListener('keypress', onClosePopupEnterPress);
  }

  const removePopupListeners = () => {
    document.removeEventListener('click', onOverlayClick);
    closePopupButton.removeEventListener('click', onClosePopupButtonClick);
    document.addEventListener('keypress', onClosePopupEscapePress);
    modal.removeEventListener('keypress', onClosePopupEnterPress);
  }

  const renderModalElement = (card) => {
    const elem = document.createElement('div');
    elem.insertAdjacentElement("beforeend", card);
    return elem.firstChild;
  }

  const id = +evt.target.dataset.id;
  const productData = findProduct(id, list);

  const renderPopupMap = (item) => {
    findAddress(productData);
  }

  const renderModalInfo = (productData) => {
    modal.innerHTML = "";
    modal.insertAdjacentElement("beforeEnd", renderElement(getModalWindow(productData)));
    renderPopupMap(productData);
  }

  renderModalInfo(productData);

  const closePopupButton = modal.querySelector('.popup__close');
  const galleryList = modal.querySelector('.gallery__list');
  const galleryItems = galleryList.querySelectorAll('.gallery__item');
  const mainPhoto = modal.querySelector('.gallery__main-pic');

  const onImageClick = (evt, item) => {
    // mainPhoto.src = evt.target.src; 

    galleryItems.forEach(item => {
      item.classList.remove('gallery__item--active');
    });

    evt.currentTarget.classList.add('gallery__item--active');
    mainPhoto.firstElementChild.src = evt.target.src;
  }

  galleryItems.forEach((image) => {
    image.addEventListener('click', onImageClick);
  });

  // adressLongitude, addressLatitude

  const popupMap = (adressLongitude, addressLatitude) => {

    // const popupFullMap = modal.querySelector('map');

    // let map = L.map('map').setView([1, 1]);

    let map = L.map('map', {
      setView: [adressLongitude, addressLatitude],
      center: [adressLongitude, addressLatitude],
      zoom: -12
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 1024,
      zoomOffset: 1,
      accessToken: MAP_TOKEN,
    }).addTo(map);

    L.marker([adressLongitude, addressLatitude]).addTo(map);

  }

  const results = modal.querySelector('map');

  function findAddress(item) {

    let addressArr = [];
    let fullAddress = `${item.address.city}+${item.address.street}+${item.address.building}`;

    let url = 'https://nominatim.openstreetmap.org/search?format=json&limit=3&q=' + fullAddress;

    fetch(url)
      .then(response => response.json())
      .then(data => addressArr = data)
      .then(show => cosnole.log(renderAddress()))
      .catch(err => renderAddress(addressArr))
  }

  function renderAddress(addressArr, item) {
    let addressData = addressArr;
    // console.log(addressData);
    const firstMapElement = addressData[0];
    const adressLongitude = firstMapElement.lon; //dolgota
    const adressLatitude = firstMapElement.lat; //shirota
    console.log(adressLongitude, adressLatitude);
    popupMap(adressLongitude, adressLatitude);
    // return adressLongitude, adressLatitude;
  }

  initModalListeners();

  openModal();
}

//geocode map cords

const onProductCardTitleClick = (evt) => {
  evt.preventDefault();
  initOpenModal(evt);
}

const onProductCardImageClick = (evt) => {
  initOpenModal(evt);
}

productImage.forEach((image) => {
  image.addEventListener('click', onProductCardImageClick);
});

productTitle.forEach((button) => {
  button.addEventListener('click', onProductCardTitleClick);
});

//----------------------------------------------------------------

const sortPopularButton = document.querySelector('#sort-popular');
const sortCheapButton = document.querySelector('#sort-cheap');
const sortDateButton = document.querySelector('#sort-new');

const filterCopy = [];

const sortPrice = (firstItem, secondItem) => firstItem.price - secondItem.price;
const sortDate = (firstItem, secondItem) => firstItem.publishDate - secondItem.publishDate;

const onSortPriceButtonClick = () => {
  renderElement(filterCopy.slice().sort(sortProductPrice));
}

const lastSort = () => {
  sortCheapButton.addEventListener('click', onSortPriceButtonClick);
}