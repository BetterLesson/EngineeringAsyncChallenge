//could use a class

export const addUserSQL = ({users}) =>{

let valuesArr = users.map((user)=>{
    const str = `('${user.email}', '${user.customerName}', '${user.cellPhone}, ${user.address}')`
    return str;
})
const joinedVals = valuesArr.join(', ')

let valuesStr = `VALUES ${joinedVals}`
const insert = `INSERT INTO users (user_email, full_name, cell_phone_number, user_address) ${valuesStr};`
return insert;

};

export const addOrderSQL = ({orders}) =>{

    let valuesArr = orders.map((order)=>{
        const str = `('${order.order_id}', '${order.orderDate}', '${order.orderTotal}, ${order.customer}, ${order.discountCode}')`
        return str;
    })
    const joinedVals = valuesArr.join(', ')
    
    let valuesStr = `VALUES ${joinedVals}`
    const insert = `INSERT INTO orders (order_id, order_date, order_total, user_email, discount_code)  ${valuesStr};`
    return insert;
};

export const addCoachingServiceSQL = ({coaching_service_ids}) =>{
    //Set
    let valuesArr = [];
    coaching_service_ids.forEach((id)=>{
        const str = `('${id}', NULL')`
        valuesArr.push(str);
    })
    const joinedVals = valuesArr.join(', ')
    
    let valuesStr = `VALUES ${joinedVals}`
    const insert = `INSERT INTO coaching_services (coaching_service_id, coaching_service_name) ${valuesStr};`
    return insert;
};

export const addBookSQL = ({book_ids})=>{

    let valuesArr = [];
    book_ids.forEach((id)=>{
        const str = `('${id}', NULL')`
        valuesArr.push(str);
    })
    const joinedVals = valuesArr.join(', ')
    
    let valuesStr = `VALUES ${joinedVals}`
    const insert = `INSERT INTO books (book_id, book_name)  ${valuesStr};`
    return insert;

};

export const addCoachServiceToOrderSQL = ({orders_to_coaching_services}) =>{
    //rename to link?
    let valuesArr = orders_to_coaching_services.map((pair)=>{
        const str = `('${pair.order_id}', '${pair.coachingServiceID}')`
        return str;
    })
    const joinedVals = valuesArr.join(', ')
    
    let valuesStr = `VALUES ${joinedVals}`
    const insert = `INSERT INTO services_orders (order_id, service_id)  ${valuesStr};`
    return insert;

}

export const addBookToOrderSQL = ({orders_to_books}) =>{
    //rename to link?
    let valuesArr = orders_to_books.map((pair)=>{
        const str = `('${pair.order_id}', '${pair.book_id}')`
        return str;
    })
    const joinedVals = valuesArr.join(', ')
    
    let valuesStr = `VALUES ${joinedVals}`
    const insert = `INSERT INTO books_orders (book_id, order_id) ${valuesStr};`
    return insert;

}


















