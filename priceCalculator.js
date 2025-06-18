function calculateTotal(items) {
    var sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += cars[i].cost;
    }
    return sum;
}

function calculateGST(purchaseAmount) {
    var gst = (10 * purchaseAmount)/100;    
    var sumTotal = purchaseAmount + gst;
    return sumTotal;
}