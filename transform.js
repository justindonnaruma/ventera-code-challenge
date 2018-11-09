const fs = require('fs')

console.log('###### Loading file...')
const rawData = fs.readFileSync('data.json')

console.log('###### Parsing data...')
const data = JSON.parse(rawData)

console.log('###### Mapping data...')
const transformedData = data.map(obj => {
  obj.customerId = obj.customer.id
  delete (obj.customer)
  return obj
})

console.log('###### Writting data to file...')
const rawTransformedData = JSON.stringify(transformedData)
fs.writeFileSync('data-transformed.json', rawTransformedData, 'utf8')

console.log('###### Done.')
