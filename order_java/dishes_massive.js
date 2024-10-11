const dishes_massive = [
    // Супы
    {
        keyword: 'fish_soup1',
        name: 'Рыбный суп',
        price: 299,
        category: 'soup',
        count: '300г',
        image: '../images/soups/fish1_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'fish_soup2',
        name: 'Уха',
        price: 320,
        category: 'soup',
        count: '350г',
        image: '../images/soups/fish2_soup.jpg',
        kind: 'fish'
    },
    {
        keyword: 'meat_soup1',
        name: 'Суп с фрикадельками',
        price: 270,
        category: 'soup',
        count: '400г',
        image: '../images/soups/meat1_soup.jpg',
        kind: 'meat'
    },
    {
        keyword: 'meat_soup2',
        name: 'Говяжий суп',
        price: 310,
        category: 'soup',
        count: '350г',
        image: '../images/soups/meat2_soup.jpg',
        kind: 'meat'
    },
    {
        keyword: 'veg_soup1',
        name: 'Овощной суп',
        price: 250,
        category: 'soup',
        count: '300г',
        image: '../images/soups/veg1_soup.jpg',
        kind: 'veg'
    },
    {
        keyword: 'veg_soup2',
        name: 'Суп из тыквы',
        price: 240,
        category: 'soup',
        count: '320г',
        image: '../images/soups/veg2_soup.jpg',
        kind: 'veg'
    },

    // Основные блюда
    {
        keyword: 'fish_main1',
        name: 'Запеченная рыба',
        price: 450,
        category: 'main_dish',
        count: '350г',
        image: '../images/main_dishes/fish1_main.png',
        kind: 'fish'
    },
    {
        keyword: 'fish_main2',
        name: 'Рыба гриль',
        price: 470,
        category: 'main_dish',
        count: '400г',
        image: '../images/main_dishes/fish2_main.png',
        kind: 'fish'
    },
    {
        keyword: 'meat_main1',
        name: 'Стейк из говядины',
        price: 750,
        category: 'main_dish',
        count: '500г',
        image: '../images/main_dishes/meat1_main.webp',
        kind: 'meat'
    },
    {
        keyword: 'meat_main2',
        name: 'Шашлык из свинины',
        price: 680,
        category: 'main_dish',
        count: '400г',
        image: '../images/main_dishes/meat2_main.jpg',
        kind: 'meat'
    },
    {
        keyword: 'veg_main1',
        name: 'Овощной салат',
        price: 300,
        category: 'main_dish',
        count: '250г',
        image: '../images/main_dishes/veg1_main.webp',
        kind: 'veg'
    },
    {
        keyword: 'veg_main2',
        name: 'Овощи на гриле',
        price: 320,
        category: 'main_dish',
        count: '300г',
        image: '../images/main_dishes/veg2_main.jpg',
        kind: 'veg'
    },

    // Салаты и стартеры
    {
        keyword: 'fish_starter1',
        name: 'Рыбный стартер',
        price: 320,
        category: 'salad_starter',
        count: '250г',
        image: '../images/salad_starter/fish_starter.webp',
        kind: 'fish'
    },
    {
        keyword: 'meat_salad1',
        name: 'Салат с курицей',
        price: 280,
        category: 'salad_starter',
        count: '200г',
        image: '../images/salad_starter/meat_salad.jpg',
        kind: 'meat'
    },
    {
        keyword: 'veg_salad1',
        name: 'Салат из свежих овощей',
        price: 220,
        category: 'salad_starter',
        count: '200г',
        image: '../images/salad_starter/veg1_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'veg_salad2',
        name: 'Кукурузный салат',
        price: 260,
        category: 'salad_starter',
        count: '250г',
        image: '../images/salad_starter/veg2_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'veg_salad3',
        name: 'Цезарь с овощами',
        price: 280,
        category: 'salad_starter',
        count: '230г',
        image: '../images/salad_starter/veg3_salad.jpg',
        kind: 'veg'
    },
    {
        keyword: 'veg_salad4',
        name: 'Оливье без мяса',
        price: 240,
        category: 'salad_starter',
        count: '300г',
        image: '../images/salad_starter/veg4_salad.jpg',
        kind: 'veg'
    },

    // Напитки
    {
        keyword: 'cold_drink1',
        name: 'Кола',
        price: 150,
        category: 'drink',
        count: '300мл',
        image: '../images/drinks/cold1_drink.jpg',
        kind: 'cold'
    },
    {
        keyword: 'cold_drink2',
        name: 'Прохладительные фруктовые напитки',
        price: 180,
        category: 'drink',
        count: '350мл',
        image: '../images/drinks/cold2_drink.webp',
        kind: 'cold'
    },
    {
        keyword: 'cold_drink3',
        name: 'Свежевыжатый сок арбузный',
        price: 200,
        category: 'drink',
        count: '250мл',
        image: '../images/drinks/cold3_drink.jpg',
        kind: 'cold'
    },
    {
        keyword: 'heat_drink1',
        name: 'Капучино',
        price: 120,
        category: 'drink',
        count: '200мл',
        image: '../images/drinks/heat1_drink.jpg',
        kind: 'heat'
    },
    {
        keyword: 'heat_drink2',
        name: 'Чай чёрный',
        price: 150,
        category: 'drink',
        count: '250мл',
        image: '../images/drinks/heat2_drink.webp',
        kind: 'heat'
    },
    {
        keyword: 'heat_drink3',
        name: 'Горячий шоколаж',
        price: 110,
        category: 'drink',
        count: '300мл',
        image: '../images/drinks/heat3_drink.jpg',
        kind: 'heat'
    },

    // Десерты
    {
        keyword: 'small_desert1',
        name: 'Мини-торты',
        price: 90,
        category: 'desert',
        count: '100г',
        image: '../images/desert/small1_desert.webp',
        kind: 'small'
    },
    {
        keyword: 'small_desert2',
        name: 'Пирожное "Ананас"',
        price: 120,
        category: 'desert',
        count: '120г',
        image: '../images/desert/small2_desert.jpg',
        kind: 'small'
    },
    {
        keyword: 'small_desert3',
        name: 'Пирожное "Макарон"',
        price: 70,
        category: 'desert',
        count: '50г',
        image: '../images/desert/small3_desert.jpg',
        kind: 'small'
    },
    {
        keyword: 'medium_desert1',
        name: 'Чизкейк',
        price: 250,
        category: 'desert',
        count: '200г',
        image: '../images/desert/medium1_desert.jpg',
        kind: 'medium'
    },
    {
        keyword: 'medium_desert2',
        name: 'Тирамису',
        price: 270,
        category: 'desert',
        count: '220г',
        image: '../images/desert/medium2_desert.jpeg',
        kind: 'medium'
    },
    {
        keyword: 'large_desert1',
        name: 'Торт шоколадный',
        price: 350,
        category: 'desert',
        count: '350г',
        image: '../images/desert/large_desert.jpg',
        kind: 'large'
    }
];
