let order = {
    soup: null,
    main_dish: null,
    drink: null
};

function addToOrder(dish) {
    order[dish.category] = dish;
    updateOrderDisplay();
}

function updateOrderDisplay() {
    const orderSection = document.querySelector('.order-section');

    const soupText = order.soup ? `${order.soup.name} ${order.soup.price}₽` : 'Блюдо не выбрано';
    const mainDishText = order.main_dish ? `${order.main_dish.name} ${order.main_dish.price}₽` : 'Блюдо не выбрано';
    const drinkText = order.drink ? `${order.drink.name} ${order.drink.price}₽` : 'Напиток не выбран';

    const total = (order.soup ? order.soup.price : 0) +
        (order.main_dish ? order.main_dish.price : 0) +
        (order.drink ? order.drink.price : 0);

    orderSection.innerHTML = `
    <h3>Ваш заказ</h3>
    <label>Суп: ${soupText}</label><br>
    <label>Главное блюдо: ${mainDishText}</label><br>
    <label>Напиток: ${drinkText}</label><br>
    ${total > 0 ? `<h4>Стоимость заказа: ${total}₽</h4>` : ''}
    <label for="comment" class="comment_from_java">Комментарий к заказу</label>
    <textarea id="comment" name="comment" rows="4"></textarea>
  `;
}

