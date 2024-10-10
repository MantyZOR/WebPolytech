document.addEventListener("DOMContentLoaded", () => {
    const soupSection = document.querySelector('#soups .dishes');
    const mainDishSection = document.querySelector('#main_dishes .dishes');
    const drinkSection = document.querySelector('#drinks .dishes');

    const sortedDishes = dishes_massive.sort((a, b) => a.name.localeCompare(b.name));

    sortedDishes.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.classList.add('dish');
        dishElement.setAttribute('data-dish', dish.keyword);
        dishElement.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}">
      <p>Цена: ${dish.price}₽</p>
      <p>${dish.name}</p>
      <p>Вес: ${dish.count}</p>
      <button>Добавить</button>
    `;

        // Добавляем в соответствующую секцию в зависимости от категории
        if (dish.category === 'soup') {
            soupSection.appendChild(dishElement);
        } else if (dish.category === 'main_dish') {
            mainDishSection.appendChild(dishElement);
        } else if (dish.category === 'drink') {
            drinkSection.appendChild(dishElement);
        }

        // Добавление блюда в заказ по клику
        dishElement.querySelector('button').addEventListener('click', () => {
            addToOrder(dish);
        });
    });
});
