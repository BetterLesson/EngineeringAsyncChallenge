import { cleanDate, cleanDollarAmount, cleanDiscountCode, isEmptyValue, isValidName, cleanPhone } from "../utils/helper.js";

export class Cleaner {
    
    constructor(){
        this.orders = [];
        this.users = [];
        this.coaching_service_ids = new Set();
        this.book_ids = new Set();
        this.orders_to_books = [];
        this.orders_to_coaching_services = [];
        this.orderTracking = new Set();
        this.errorQueque = [];

    }

     addOrder({UUID, orderDate, orderTotal, discountCode, email}) {
        if(!this.orderTracking.has(UUID)){

            const cleanedDate = isEmptyValue(orderDate)? null : cleanDate(orderDate);
            const cleanedDiscount = isEmptyValue(discountCode)? null : cleanDiscountCode(discountCode);
            const cleanedOrderTotal = isEmptyValue(orderTotal)? null : cleanDollarAmount(orderTotal);

            const cleanedOrder = {
                order_id:UUID,
                orderTotal:cleanedOrderTotal,
                orderDate:cleanedDate,
                discountCode:cleanedDiscount,
                customer:email
            }
            this.orders.push(cleanedOrder);

        } else{
            this.errorQueque.push([UUID, 'duplicate order id'])
            return new Error(`${UUID}, duplicate order`)
        }
        
      }
    
      addUser({customerName, email, cellPhone, address}) {
    
        const cleanedPhoneNum = isEmptyValue(cellPhone)? null:cleanPhone(cellPhone);
        const cleanedFullName = isEmptyValue(customerName)? null: isValidName(customerName)
    
        const cleanedUser = {
            customerName:cleanedFullName,
            address:address,
            cellPhone:cleanedPhoneNum,
            email:email
        }
        this.users.push(cleanedUser);
      }
    //if they is not coach key at all, this doesnt handle that, same for books of any missing data
     addCoachingServiceId({coachingServiceID, UUID}) {
        if(isEmptyValue(coachingServiceID)){
          this.orders_to_coaching_services.push({
                    coachingServiceID:null,
                    order_id:UUID
                })
        }
        else{
            coachingServiceID.forEach((id)=>{
                this.coaching_service_ids.add(id);
                this.orders_to_coaching_services.push({
                    coachingServiceID:id,
                    order_id:UUID
                })
            }) 
        }
      }
    
      addBookId({bookSetID, UUID}) {
        if(isEmptyValue(bookSetID)){
            this.orders_to_books.push({
                order_id:UUID,
                book_id:null
            })

        }
        else{
            bookSetID.forEach((id)=>{
                this.book_ids.add(id);
                this.orders_to_books.push({
                    order_id:UUID,
                    book_id:id
                })
            }) 
        }
       
      }
    
  
     getMapData(){

        return {
            orders:this.orders,
            users:this.users,
            coaching_service_ids:this.coaching_service_ids,
            book_ids:this.book_ids,
            orders_to_books:this.orders_to_books,
            orders_to_coaching_services:this.orders_to_coaching_services
        }
    }
}

