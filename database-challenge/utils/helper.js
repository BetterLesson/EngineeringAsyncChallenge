    
    export const cleanDate = (dateStr) =>{
    //date time, time offset is included but could have been sep. for sql field...
        const [dateTime, offsetStr] = dateStr.split(" ");
        const [year, month, day, hours, minutes, seconds] = dateTime.split(/[-T:]/g);
        const offsetHours = parseInt(offsetStr.slice(0, 3));
        const offsetMinutes = parseInt(offsetStr.slice(4));
        const offsetTotalMinutes = offsetHours * 60 + offsetMinutes;
        const date = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
        const offsetDate = new Date(date.getTime() + offsetTotalMinutes * 60 * 1000);
        return offsetDate.toISOString().slice(0, 19).replace("T", " ");
      }

  
    export const cleanDollarAmount = (amount) =>{  
        //this does not care for the currency type, it ignores the currency symbol
        //remove $ and , 
        const cleaned = amount.replace(/[^\d.-]/g, '');
        //convert to number with two decimal places
        const number = Number.parseFloat(cleaned).toFixed(2);
        return number;
    };
    
    export const isValidEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
      };

    export const isValidName = (name) =>{
        //remove characters: specail, numeric in case user tries to add numbers or othe odd symbols
        if(!/^[a-zA-Z]+$/.test(name)){
           return name.replace(/[^a-zA-Z]/g, '');
        }
        return name;
      };
    
    export const isEmptyValue = (value) => {
        if (value === undefined || value === null) {
          return true;
        }
        if (typeof value === "string" && value.trim() === "") {
          return true;
        }
        if (Array.isArray(value) && value.length === 0) {
          return true;
        }
        if (typeof value === "object" && Object.keys(value).length === 0) {
          return true;
        }
        return false;
      };
    
   export const cleanDiscountCode = (discount) =>{

     //remove special characters and make uppercase
     return discount.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();;
    };
    
    export const cleanPhone = (phoneNumber) => {
        // Remove all non-digit characters
        const cleaned = phoneNumber.replace(/\D/g, '');

        if (cleaned.length !== 11) {
          return null;
        }
        return `+${cleaned}`;
      };
    
 