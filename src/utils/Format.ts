export const formatPriceString = (price: string | number) => {
    if (price === '') return '';
    price = String(price).replace(/[,]/g, '');
    let numberPrice = Number(price);
    let result = '';
    if (numberPrice || numberPrice === 0) {
        if (numberPrice % 1) {
            numberPrice = Number(numberPrice.toFixed(2));
        }
        result = numberPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return result;
};

export const formatPrice = (number: string | number) => {
    let split = Number(number)
        .toFixed(2)
        .split('.');
    return `${Number(split[0]).toLocaleString('en-US')}.${split[1]} บาท`;
}