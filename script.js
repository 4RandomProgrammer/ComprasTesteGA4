const products = [
    {
        "id": "1234",
        "name": "Stan and Friends Tee1",
        "brand": "Google",
        "category": "Apparel",
        "variant": "green",
        "price": 1.99,
        "quantity": 1
    },
    {
        "id": "1235",
        "name": "Stan and Friends Tee2",
        "brand": "Google",
        "category": "Apparel",
        "variant": "green",
        "price": 2.99,
        "quantity": 1
    },
    {
        "id": "1236",
        "name": "Stan and Friends Tee3",
        "brand": "Google",
        "category": "Apparel",
        "variant": "green",
        "price": 3.99,
        "quantity": 1
    },
    {
        "id": "1237",
        "name": "Stan and Friends Tee4",
        "brand": "Google",
        "category": "Apparel",
        "variant": "green",
        "price": 4.99,
        "quantity": 1
    },
    {
        "id": "1239",
        "name": "Stan and Friends Tee5",
        "brand": "Google",
        "category": "Apparel",
        "variant": "green",
        "price": 5.99,
        "quantity": 1
    },
    {
        "id": "1230",
        "name": "Stan and Friends Tee6",
        "brand": "Google",
        "category": "Apparel",
        "variant": "green",
        "price": 15.99,
        "quantity": 3
    },
]
console.log(window.dataLayer)
function purchase() {
    let min = 1;
    let max = 6;
    let totProducts = Math.floor(Math.random() * (max - min) + min);
    let id = Math.floor(Math.random() * (2000000 - 0) + 0)
    let dl = window.dataLayer;
    let productsPurchase = [];
    let purchaseTotal = 0;
    console.log(dl)
    for(let i = 0; i < totProducts; i++){
        productsPurchase.push(products[i])
        purchaseTotal += products[i].price
    }
    dl.push({

            "event":"orderPlaced",
            "ecommerce": {
        
              "purchase":{
        
                "products":productsPurchase,

                "actionField":{
                  "shipping":2.00,
                  "coupon": "sem desconto",
                  "affiliation":"RockyTeste"
                }
              }
              
              
            },
            "transactionTotal":purchaseTotal + 2,
            "transactionId": "ID" + id.toString()
        
    })
}