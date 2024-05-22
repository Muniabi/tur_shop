// cards.js


// АКЦИИ //

// Функция для создания карточки товара в АКЦИИ
export function createProductCard(imageSrc, title, price) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("action-cards__card");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("item-action-cards__image");

    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = "";

    const list = document.createElement("ul");
    list.classList.add("action-cards__list", "list-action-cards");

    const titleItem = document.createElement("li");
    titleItem.classList.add("list-action-cards__item");
    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.classList.add("list-action-cards__title");
    titleLink.textContent = title;
    titleItem.appendChild(titleLink);

    const priceItem = document.createElement("li");
    priceItem.classList.add("list-action-cards__item", "price");
    priceItem.textContent = price;

    const buttonLink = document.createElement("a");
    buttonLink.href = "#";
    buttonLink.classList.add("list-action-cards__button", "button");
    buttonLink.textContent = "В корзину";

    list.appendChild(titleItem);
    list.appendChild(priceItem);
    list.appendChild(buttonLink);

    cardDiv.appendChild(imageDiv);
    imageDiv.appendChild(image);
    cardDiv.appendChild(list);

    return cardDiv;
}

// Находим контейнер для карточек товаров
const container = document.querySelector(".action-cards__main");

// Создаем карточки товаров
const products = [
    {
        imageSrc: "../img/catalog/volma-layer.png",
        title: "Штукатурка Волма-Слой, 30 кг",
        price: "769 ₽"
    },
    {
        imageSrc: "../img/catalog/tim28.png",
        title: "Штукатурка декоративная Тим-28 короед, 25 кг",
        price: "495 ₽"
    },
    {
        imageSrc: "../img/catalog/litox-start.png",
        title: "Штукатурка Литокс Старт, 30 кг",
        price: "495 ₽"
    },
    {
        imageSrc: "../img/catalog/screwяONconcrete.png",
        title: "Шуруп по бетону 152х75",
        price: "495 ₽"
    },
    {
        imageSrc: "../img/catalog/knaufMP75.png",
        title: "Штукатурка МП-75 Кнауф, 30 кг",
        price: "389 ₽"
    },
    {
        imageSrc: "../img/catalog/knauf-karton.png",
        title: "Гипсокартон влагостойкий ГСП-Н2 КНАУФ",
        price: "557 ₽"
    },
    // Добавьте здесь остальные товары, если необходимо
];

// Добавляем каждую карточку товара в контейнер
products.forEach(product => {
    const card = createProductCard(product.imageSrc, product.title, product.price);
    container.appendChild(card);
});


// ПОПУЛЯРНЫЕ КАТЕГОРИИ //

// Функция для создания карточки категории
function createCategoryCard(title, imageSrc) {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("popular-category__item");

    const categoryLink = document.createElement("a");
    categoryLink.classList.add("popular-category__link");
    categoryLink.href = "#";

    const categoryTitle = document.createElement("div");
    categoryTitle.classList.add("category-link__title");
    categoryTitle.textContent = title;

    const categoryImage = document.createElement("img");
    categoryImage.classList.add("category-link__image");
    categoryImage.src = imageSrc;
    categoryImage.alt = "";

    categoryLink.appendChild(categoryTitle);
    categoryLink.appendChild(categoryImage);
    categoryItem.appendChild(categoryLink);

    return categoryItem;
}

// Находим контейнер для карточек категорий
const categoryContainer = document.querySelector(".popular-category__list");

// Создаем карточки категорий
const categories = [
    {
        title: "Сухие смеси",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Пиломатериалы",
        imageSrc: "./img/category/pilomat.png"
    },
    {
        title: "Профили",
        imageSrc: "./img/category/profile.png"
    },
    {
        title: "Гипсокартон",
        imageSrc: "./img/category/gipsocarton.png"
    },
    {
        title: "Инструменты",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Для дачи",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Окна",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Двери",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Сантехника",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Краски",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Электротовары",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    {
        title: "Интерьер",
        imageSrc: "./img/catalog/volma-layer.png"
    },
    // Добавьте здесь остальные категории, если необходимо
];

// Добавляем каждую карточку категории в контейнер
categories.forEach(category => {
    const categoryCard = createCategoryCard(category.title, category.imageSrc);
    categoryContainer.appendChild(categoryCard);
});




// ПОПУЛЯРНЫЕ ТОВАРЫ //

// Функция для создания карточки товара в Популярных товарах
function createPopularProductCard(imageSrc, title, price, alt) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("popular-products__card");

    const linkImage = document.createElement("a");
    linkImage.href = "#";
    linkImage.classList.add("item-popular-products__image");
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = alt;
    linkImage.appendChild(image);

    const list = document.createElement("ul");
    list.classList.add("popular-products__list", "list-popular-products");

    const titleItem = document.createElement("li");
    titleItem.classList.add("list-popular-products__item");
    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.classList.add("list-popular-products__title");
    titleLink.textContent = title;
    titleItem.appendChild(titleLink);

    const priceItem = document.createElement("li");
    priceItem.classList.add("list-popular-products__item", "price");
    priceItem.textContent = price;
    const priceImg = document.createElement("img");
    priceImg.src = "@img/dop-info.svg";
    priceImg.alt = "";
    priceImg.classList.add("info");
    priceImg.width = "12px";
    priceImg.height = "12px";
    priceItem.appendChild(priceImg);

    const buttonLink = document.createElement("a");
    buttonLink.href = "#";
    buttonLink.classList.add("list-popular-products__button", "button");
    buttonLink.textContent = "В корзину";

    list.appendChild(titleItem);
    list.appendChild(priceItem);
    list.appendChild(buttonLink);

    cardDiv.appendChild(linkImage);
    cardDiv.appendChild(list);

    return cardDiv;
}

// Находим контейнер для карточек товаров
const popularTovarcontainer = document.querySelector(".popular-products__main");

// Создаем массив с данными для карточек товаров
const popularProductsData = [
    {
        imageSrc: "./img/tovary/sheben20:40.png",
        title: "Щебень 20/40 навал (10 тонн)",
        price: "8 990 ₽",
        alt: "0001"
    },
    {
        imageSrc: "./img/tovary/sheben40:70.png",
        title: "Щебень 40/70 навал (15 тонн)",
        price: "12 750 ₽",
        alt: "0002"
    },
    {
        imageSrc: "./img/tovary/electrodAno-21.png",
        title: "Электроды АНО-21",
        price: "343 ₽",
        alt: "0003"
    },
    {
        imageSrc: "/img/tovary/gipsokartonVolma.png",
        title: "Гипсокартон Волма, 2500 х 1200 х 12,5 мм",
        price: "335 ₽",
        alt: "0004"
    },
    {
        imageSrc: "/img/tovary/profil.png",
        title: "Профиль 0,55мм для гипсокартона",
        price: "195 ₽",
        alt: "0005"
    },
    {
        imageSrc: "/img/tovary/gipsoKartonKnauf.png",
        title: "Гипсокартон влагостойкий ГСП-Н2 КНАУФ ",
        price: "557 ₽",
        alt: "0006"
    },
    {
        imageSrc: "/img/tovary/shtukaturkaKnauf.png",
        title: "Кнауф Мп 75 штукатурка гипсовая МН 30к",
        price: "380 ₽",
        alt: "0007"
    },
    {
        imageSrc: "/img/tovary/ugolok.png",
        title: "Уголок серый канализационный Д110 ГР90",
        price: "335 ₽",
        alt: "0008"
    },
    {
        imageSrc: "/img/tovary/knaufRotband.png",
        title: "Knauf Ротбанд, 30 кг",
        price: "508 ₽",
        alt: "0009"
    },
    {
        imageSrc: "/img/tovary/samorez.png",
        title: "Саморез по металлу 3,5х25 мм для гипсокартона",
        price: "340 ₽",
        alt: "0010"
    },
    {
        imageSrc: "/img/tovary/SuperFinish.png",
        title: "Шпатлевка универсальная Danogips SuperFinish 17 л",
        price: "2 555 ₽",
        alt: "0011"
    },
    {
        imageSrc: "/img/tovary/knaufSapfir.png",
        title: "Гипсокартон КНАУФ САПФИР ГСП-DFH3IR 2500х1200х12,5",
        price: "827 ₽",
        alt: "0012"
    },
    // Добавьте здесь остальные товары, если необходимо
];

// Создаем и добавляем карточки товаров в контейнер
popularProductsData.forEach(product => {
    const card = createPopularProductCard(product.imageSrc, product.title, product.price, product.alt);
    popularTovarcontainer.appendChild(card);
});

