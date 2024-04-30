// cards.js


// Функция для создания карточки товара
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
