async function deleteOrders(fromId, toId, apiKey) {
    for (let id = fromId; id <= toId; id++) {
        const apiUrl = `http://lab8-api.std-900.ist.mospolytech.ru/labs/api/orders/${id}?api_key=${apiKey}`; //  URL с ID заказа и api_key

        try {
            const response = await fetch(apiUrl, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error(`Ошибка при удалении заказа ${id}:`, errorData.error || response.status);
            } else {
                console.log(`Заказ ${id} успешно удален`);
            }
        } catch (error) {
            console.error(`Ошибка при удалении заказа ${id}:`, error);
        }
    }
}


// Пример использования:
const apiKey = '6abf2df4-0e72-432b-87c4-7879dd7c4d85'; //  Ваш api_key
deleteOrders(1, 300, apiKey);