
function kilometerToMeter (kilometer){
    var meter = kilometer*1000;
    return meter;
}


function budgetCalculator (watch, phone, laptop){
    var watchPrice = watch*50; 
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    
    var totalCost = watchPrice + phonePrice + laptopPrice;
    return totalCost;
}

console.log (budgetCalculator (2, 3, 4));



