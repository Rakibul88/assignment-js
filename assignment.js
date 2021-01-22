

// This code is for Kilometer to Meter converter

function kilometerToMeter (kilometer){
    var meter = kilometer*1000;
    return meter;
}

// This code is for Budget Calculator

function budgetCalculator (watch, phone, laptop){
    var watchPrice = watch*50; 
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    
    var totalCost = watchPrice + phonePrice + laptopPrice;
    return totalCost;
}

// This code is for Hotel Cost spanding per day

function hotelCost(days){
    if(days<=10){
        total = days*100;
        return total;
    }

    if(10<days<=20){
        total = days*80;      
    }

    if(20<=days){
        total = days*50;       
    }
    return total;
}

// This code is for finding the biggest name in Friend list

function megaFriend(char){
    var maxWord = 0
    var biggest;

    for(i = 0; i < char.length; i++){
        
        if(char[i].length > maxWord){
            var maxWord = char[i].length;
            biggest = char[i];
        }
    }
    return biggest;
}

