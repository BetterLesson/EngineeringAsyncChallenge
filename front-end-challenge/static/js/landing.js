function dumpData(){
    var form_data = document.getElementsByClassName('form-control')
    for(let i = 0; i < form_data.length; i++){
        console.log(form_data[i].value)
    }
}