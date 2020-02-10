function sololetras(e){

    key=e.keyCode;

    teclado=String.fromCharCode(key).toLowerCase();
    letra="a b c d e f g h i j k l m n ñ o p q r s t u v w x y z";
    especiales="8-37-38-46";//array
    teclado_especial="false";

    for(var i in especiales){

        if(key==especiales[i]){

            teclado_especial=true;
        }
    }

    if(letra.indexOf(teclado)==-1 && !teclado_especial){
        return false;

    }



}