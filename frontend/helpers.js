function getValues(){
    var values_from_form = document.getElementsByClassName('bl-form-control')

    for(let i = 0; i < values_from_form.length; i++){
        console.log(values_from_form[i].value)
    }
}