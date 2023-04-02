export const cleanName = (str) => {
    return str.replace(/[^a-zA-Z ]/g, '');
};
//checks for a valid email
export const isValidEmail = (email) => {

    const validChars = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return !validChars.test(email);
};
//required attr not working
export const isEmptyInput = (val) => {
    if(val === "" ){
        return true;
    }
    else{
          return false;
    }
}