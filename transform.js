const fs = require('fs')

const rawData = fs.readFileSync('data.json')
const data = JSON.parse(rawData)

console.log (data)

const transformedData = data.map(obj =>{
    obj.customerId = obj.customer.id
    delete(obj.customer)
    return obj
});
console.log(transformedData)

const rawTransformedData = JSON.stringify(transformedData)

fs.writeFileSync('data-transformed.json', rawTransformedData, 'utf8')