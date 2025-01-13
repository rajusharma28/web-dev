function calculateIncomeTax(income){
    let tax =0;

    if(income <= 250000){
        tax=0;
    }
    else if(income <= 500000){
        tax =(income-250000) *0.05;
    }
    else if(income <= 10000000){
        tax =(250000*0.05) +((income - 500000)*0.2);
    }
    else{
        tax =(250000*0.05) +(50000*0.2) + ((income - 100000)*0.3);
    }
    return tax;
}

const tax = calculateIncomeTax(income)
