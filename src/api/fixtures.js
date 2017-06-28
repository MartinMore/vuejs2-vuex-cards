/* eslint-disable */

/* GIFTCARDS */
const currency = {
    "id": "BOB",
    "name": "Bolivianos",
    "symbol": "Bs.",
    "decimalPlaces": 2,
    "decimalSeparator": ".",
    "thousandSeparator": ","
};
const cardsCatOrder = [21,20,19,18,17];
const cardsCat = {
    "17": {
        "id": 17,
        "name": "Cumpleaños",
        "cardsTmplOrder": [
            29,
            28
        ]
    },
    "18": {
        "id": 18,
        "name": "Aniversario",
        "cardsTmplOrder": [
            31,
            30
        ]
    },
    "19": {
        "id": 19,
        "name": "Felicitaciones",
        "cardsTmplOrder": [
            33,
            32
        ]
    },
    "20": {
        "id": 20,
        "name": "Navidad",
        "cardsTmplOrder": [
            34
        ]
    },
    "21": {
        "id": 21,
        "name": "Gracias",
        "cardsTmplOrder": [
            35
        ]
    }
};
const cardsTmpl = {
    "28": {
        "id": 28,
        "giftCardCategoryId": 17,
        "title": "¡Feliz cumpleaños!",
        "cardImage": {
            "key": "admin/giftcardtemplate/feliz-cumpleanos-card-1446760367.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/feliz-cumpleanos-card-1446760367.png",
            "size": 35206,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/feliz-cumpleanos-card-1446760367.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "29": {
        "id": 29,
        "giftCardCategoryId": 17,
        "title": "¡Feliz cumpleaños!",
        "cardImage": {
            "key": "admin/giftcardtemplate/feliz-cumpleanos-card-1446760402.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/feliz-cumpleanos-card-1446760402.png",
            "size": 52144,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/feliz-cumpleanos-card-1446760402.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "30": {
        "id": 30,
        "giftCardCategoryId": 18,
        "title": "¡Feliz aniversario!",
        "cardImage": {
            "key": "admin/giftcardtemplate/feliz-aniversario-card-1446760540.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/feliz-aniversario-card-1446760540.png",
            "size": 44845,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/feliz-aniversario-card-1446760540.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "31": {
        "id": 31,
        "giftCardCategoryId": 18,
        "title": "¡Feliz aniversario!",
        "cardImage": {
            "key": "admin/giftcardtemplate/feliz-aniversario-card-1446760583.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/feliz-aniversario-card-1446760583.png",
            "size": 38640,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/feliz-aniversario-card-1446760583.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "32": {
        "id": 32,
        "giftCardCategoryId": 19,
        "title": "¡Felicitaciones!",
        "cardImage": {
            "key": "admin/giftcardtemplate/felicitaciones-card-1446760675.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/felicitaciones-card-1446760675.png",
            "size": 58806,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/felicitaciones-card-1446760675.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "33": {
        "id": 33,
        "giftCardCategoryId": 19,
        "title": "¡Felicitaciones!",
        "cardImage": {
            "key": "admin/giftcardtemplate/felicitaciones-card-1446760719.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/felicitaciones-card-1446760719.png",
            "size": 106371,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/felicitaciones-card-1446760719.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "34": {
        "id": 34,
        "giftCardCategoryId": 20,
        "title": "¡Feliz Navidad!",
        "cardImage": {
            "key": "admin/giftcardtemplate/feliz-navidad-card-1446761481.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/feliz-navidad-card-1446761481.png",
            "size": 21503,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/feliz-navidad-card-1446761481.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    },
    "35": {
        "id": 35,
        "giftCardCategoryId": 21,
        "title": "¡Gracias!",
        "cardImage": {
            "key": "admin/giftcardtemplate/gracias-card-1446761562.png",
            "buc": "static-cp",
            "url": "//rest.cinepapaya.com/stat/img/static-cp/admin/giftcardtemplate/gracias-card-1446761562.png",
            "size": 16464,
            "extension": "png",
            "width": 556,
            "height": 358,
            "urlS3": "//static-cp.s3-us-west-2.amazonaws.com/admin/giftcardtemplate/gracias-card-1446761562.png"
        },
        "amount": 0,
        "customizableAmount": true,
        "active": true
    }
};
const availablePrices = ["50","60","80","100","120","160","200","250","300","400","480"];
const maximumAmount = 480;
const maximumQuantity = 10;

export default {
    /* GIFTCARDS */
    getCurrency(cb) {
        setTimeout(() => cb(currency), 500);
    },
    getCardsCatOrder(cb) {
        setTimeout(() => cb(cardsCatOrder), 500);
    },
    getCardsCat(cb) {
        setTimeout(() => cb(cardsCat), 500);
    },
    getCardsTmpl(cb) {
        setTimeout(() => cb(cardsTmpl), 500);
    },
    getAvailablePrices(cb) {
        setTimeout(() => cb(availablePrices), 500);
    },
    getMaximumAmount(cb) {
        setTimeout(() => cb(maximumAmount), 500);
    },
    getMaximumQuantity(cb) {
        setTimeout(() => cb(maximumQuantity), 500);
    }
};
