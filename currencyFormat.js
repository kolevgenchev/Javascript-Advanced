function createFormatter(separator, symbol, symbolFirst,func){
   return function(value){
    return func(separator, symbol, symbolFirst, value)
   }
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);