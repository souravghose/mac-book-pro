// get product configuration id and cost

function getProductConfig(configId, cost) {
    const productConfigId = document.getElementById(configId);
    productConfigId.innerText = cost;
}


function updateTotalCost() {

    // update total price 
    let bestPrice = 1299;
    let memoryCost = document.getElementById('extra-memory-costs');
    memoryCost = parseInt(memoryCost.innerText);
    let storageCost = document.getElementById('extra-storage-costs');
    storageCost = parseInt(storageCost.innerText);
    let deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge = parseInt(deliveryCharge.innerText);
    let newTotalCost = bestPrice + memoryCost + storageCost + deliveryCharge;
    document.getElementById('total-price').innerText = newTotalCost;
    document.getElementById('total-cost').innerText = newTotalCost;
    applyPromo();

}
// update total price after promo code

function applyPromo() {

    let promoInput = document.getElementById('input-promo-code');
    const promoCode = 'stevekaku';
    if (promoInput.value.toLowerCase() == promoCode) {

        let previousTotalPrice = document.getElementById('total-price').innerText;
        let previousTotalCost = document.getElementById('total-cost').innerText;
        let newTotalPrice = parseInt(previousTotalPrice);
        let newTotalCost = parseInt(previousTotalCost);

        // calculate promo code

        newTotalPrice = (newTotalPrice * 80) / 100;
        document.getElementById('total-price').innerText = newTotalPrice;
        newTotalCost = newTotalCost * 80 / 100;
        document.getElementById('total-cost').innerText = newTotalPrice;
        promoInput.value = '';
    }
}



document.getElementById('8gb-memory-size').addEventListener('click', function() {
    getProductConfig('extra-memory-costs', 0);
    updateTotalCost()

});
document.getElementById('16gb-memory-size').addEventListener('click', function() {
    getProductConfig('extra-memory-costs', 180)
    updateTotalCost()
});
document.getElementById('256gb-ssd').addEventListener('click', function() {
    getProductConfig('extra-storage-costs', 0)
    updateTotalCost()
});
document.getElementById('512gb-ssd').addEventListener('click', function() {
    getProductConfig('extra-storage-costs', 100)
    updateTotalCost()
});

document.getElementById('1tb-ssd').addEventListener('click', function() {
    getProductConfig('extra-storage-costs', 180)
    updateTotalCost()
});
document.getElementById('delivery-option-free').addEventListener('click', function() {
    getProductConfig('delivery-charge', 0)
    updateTotalCost()
});
document.getElementById('delivery-option-with-charge').addEventListener('click', function() {
    getProductConfig('delivery-charge', 20)
    updateTotalCost()
});