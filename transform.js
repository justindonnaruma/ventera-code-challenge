const fs = require('fs')

const transformedData = data.map(obj =>{
    obj.customerId = obj.customer.id
    delete(obj.customer)
    return obj
});

console.log(transformedData);