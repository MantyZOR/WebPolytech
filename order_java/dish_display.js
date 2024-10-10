document.addEventListener("DOMContentLoaded", () => {
    const soupSection = document.querySelector('#soups .dishes');
    const mainDishSection = document.querySelector('#main_dishes .dishes');
    const drinkSection = document.querySelector('#drinks .dishes');
    const resetButton = document.getElementById('resetButton');  // Находим кнопку "Сброс"

    const sortedDishes = dishes_massive.sort((a, b) => a.name.localeCompare(b.name));

    sortedDishes.forEach(dish => {
        const dishElement = document.createElement('div');
        dishElement.classList.add('dish');
        dishElement.setAttribute('data-dish', dish.keyword);
        dishElement.setAttribute('data-kind', dish.kind);  // Добавляем data-kind для фильтрации
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

    // Добавляем обработчик на кнопку сброса
    resetButton.addEventListener('click', () => {
        // Сбрасываем объект order
        order = {
            soup: null,
            main_dish: null,
            drink: null
        };

        // Обновляем отображение заказа после сброса
        updateOrderDisplay();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');  // Проверяем, активна ли кнопка
            const kind = button.getAttribute('data-kind');
            const section = button.closest('section');
            const dishes = section.querySelectorAll('.dish');

            // Переключаем активный класс на кнопке
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.toggle('active');

            // Показать/скрыть блюда в зависимости от фильтра
            if (button.classList.contains('active')) {
                dishes.forEach(dish => {
                    if (dish.getAttribute('data-kind') === kind) {
                        dish.style.display = 'block';
                    } else {
                        dish.style.display = 'none';
                    }
                });
            } else {
                // Если фильтр снят, показываем все блюда
                dishes.forEach(dish => dish.style.display = 'block');
            }
        });
    });
});