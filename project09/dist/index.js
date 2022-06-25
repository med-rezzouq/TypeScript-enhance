"use strict";
function calTotalPrice(price) {
    return +(price + (price * 0.18)).toFixed(1);
}
const priceOfToy = calTotalPrice(100);
const discountPrice = priceOfToy / 2;
calTotalPrice(discountPrice);
