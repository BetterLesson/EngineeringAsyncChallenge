const dataStore = require('./dataStore.json')

const books = dataStore.books
const bookSets = dataStore.book_sets
const coachingServices = dataStore.coaching_services
const customers = dataStore.customers


//Add Books first
for(book of books){
    console.log(`INSERT into BOOK:`, book)
}
console.log(``)
for(bookSet of bookSets){
    console.log(`INSERT into BOOK_SET:`, bookSet)
    for(id of bookSet.books){
        console.log(`INSERT into Books_BookSets: book_ids=${id}, book_set_id=${bookSet.UUID}`)
    }
}
for(customer of customers){
    //Add Coaching Services
    console.log(`INSERT into Customer: `,customer)
    
    coachingServices.filter((service)=>{
        if (customer.coaching_service_ids.includes(service.UUID)){
            console.log(`INSERT into Coaching_Services:`, service)
            return true
        }
    })

    //Add Coaching Relationships
    for(service_id of customer.coaching_service_ids){
        console.log(`INSERT into Customers_Coaching_Services: customer_id=${customer.UUID} coaching_service_id=${service_id}`)
    }

    //Add Book Set Realationships
    for(id of customer.book_set_ids){
        console.log(`INSERT into Customers_BookSets: customer_id=${customer.UUID} coaching_service_id=${id}`)
    }
    // "order_total": 37.99,
    // "order_date": "12-25-22T23:00:05Z",
    // "discount_code": "CHEAP"
    //Add Orders
    const order = {id:'1',total:customer.order_total,date:customer.order_date,discout_code:customer.discout_code}
    console.log(`INSERT into Orders UID AUTO generated on INSERT:`, order)

    //Add Orders Relationships
    for(service_id of customer.coaching_service_ids){
        console.log(`INSERT into Orders_Coaching_Services: order_id=${order.id} coaching_service_id=${service_id}`)
    }

    for(id of customer.book_set_ids){
        console.log(`INSERT into Orders_BookSets: order_id=${order.id} book_set_id=${id}`)
    }
}