let order = {
    soup: null,
    "main-course": null,
    salad: null,
    drink: null,
    dessert: null
};

function addToOrder(dish) {
    order[dish.category] = dish;
    /*updateOrderDisplay();*/
}

function updateOrderDisplay() {
    const orderSection = document.querySelector('.order-section');

    const soupText = order.soup ? `${order.soup.name} ${order.soup.price}₽` : 'Блюдо не выбрано';
    const mainDishText = order["main-course"] ? `${order["main-course"].name} ${order["main-course"].price}₽` : 'Блюдо не выбрано';
    const saladStarterText = order.salad ? `${order.salad.name} ${order.salad.price}₽` : 'Салат или стартер не выбран';
    const drinkText = order.drink ? `${order.drink.name} ${order.drink.price}₽` : 'Напиток не выбран';
    const desertText = order.dessert ? `${order.dessert.name} ${order.dessert.price}₽` : 'Десерт не выбран';

    const total = (order.soup ? order.soup.price : 0) +
        (order.main_dish ? order.main_dish.price : 0) +
        (order.salad ? order.salad.price : 0) +
        (order.drink ? order.drink.price : 0) +
        (order.dessert ? order.dessert.price : 0);

    if (!order.soup && !order["main-course"] && !order.salad && !order.drink && !order.dessert) {
        orderSection.innerHTML = `
            <h3>Ваш заказ</h3>
            <p class="bold-text">Ничего не выбрано</p>
            <label for="comment" class="comment_from_java">Комментарий к заказу</label>
            <textarea id="comment" name="comment" rows="4"></textarea>
        `;
    } else {
        orderSection.innerHTML = `
        <h3>Ваш заказ</h3>
        <h4>Суп:</h4>
        ${soupText}<br><br>
        <h4>Главное блюдо:</h4>
        ${mainDishText}<br><br>
        <h4>Салат или стартер:</h4>
        ${saladStarterText}<br><br>
        <h4>Напиток:</h4>
        ${drinkText}<br><br>
        <h4>Десерт:</h4>
        ${desertText}<br><br>
        ${total > 0 ? `<h4>Стоимость заказа:</h4>${total}₽` : ''}
        <label for="comment" class="comment_from_java">Комментарий к заказу</label>
        <textarea id="comment" name="comment" rows="4"></textarea>
      `;
    }
}

function checkOrder() {
    const hasSoup = order.soup !== null;
    const hasMainDish = order["main-course"] !== null;
    const hasSaladStarter = order.salad !== null;
    const hasDrink = order.drink !== null;
    const hasDesert = order.dessert !== null;

    // Проверяем допустимые комбинации
    const validCombinations = [
        // Полный набор
        hasSoup && hasMainDish && hasSaladStarter && hasDrink,
        // Суп + главное + напиток
        hasSoup && hasMainDish && hasDrink && !hasSaladStarter,
        // Суп + салат + напиток
        hasSoup && !hasMainDish && hasSaladStarter && hasDrink,
        // Главное + салат + напиток
        !hasSoup && hasMainDish && hasSaladStarter && hasDrink,
        // Главное + напиток
        !hasSoup && hasMainDish && !hasSaladStarter && hasDrink
    ];

    // Если хотя бы одна комбинация верна - заказ правильный
    if (validCombinations.some(combo => combo === true)) {
        return true;
    }

    // Пустой заказ
    if (!hasSoup && !hasMainDish && !hasSaladStarter && !hasDrink && !hasDesert) {
        return false;
    }

    return false;
}

function showNotification(message) {

    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const notificationButton = document.getElementById('notification-button');

    document.body.classList.add('noscroll'); // Отключаем прокрутку

    notificationButton.addEventListener('click', () => {
        notification.classList.add('hidden');
        document.body.classList.remove('noscroll'); // Включаем прокрутку обратно
    });

    notificationText.textContent = message;
    notification.classList.remove('hidden');


    notificationButton.addEventListener('click', () => {
        notification.classList.add('hidden');
    });
}


document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').addEventListener('submit', (event) => {
        if (!checkOrder()) {
            event.preventDefault();
        }
    });
});
