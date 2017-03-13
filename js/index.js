var aviso = 'Inserta tu DNI';
    
    
function revisar_dni(dni){
    var numero;
    var letr;
    var letra;
    var expresion_regular_dni= /^\d{8}[a-zA-Z]$/;
    
    if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET'[numero];
    if (letra!=letr.toUpperCase()) {
       aviso = 'Dni erroneo, la letra del NIF no se corresponde';
       return false;
     }else{
       aviso='';
       return true;
     }
    }else{
        aviso = 'Dni erroneo, formato no válido';
        return false;
    }
}
$('#input-dni').on('input',function(){
    if( revisar_dni($(this).val() )){
        $(this).css('border-color','green');
    }else {
        $(this).css('border-color','red');
    }

}); 
function crear_parrafo(e){
    e.preventDefault();
    if (aviso!='') alert(aviso);
    else crear_lista();
        
}
function crear_lista(){
    
    var te = document.getElementById("texto").value;
    var ul = document.getElementById('lista-parrafos');
    var li = document.createElement("LI");
    var p = document.createElement('P');
    var t = document.createTextNode(te);
    ul.appendChild(li);
    li.appendChild(p);
    p.appendChild(t)
    
    
}

function contar_parrafos(){
    
    //posible tambien con document.getElementsByTagName('p'); //=> Retorna coleccion elementos 'HTMLCollection'
    var paragraphs = document.querySelectorAll('p');  //=> retorna lista de nodos 'NodeList'
    
    document.querySelector('#numero-parrafos').textContent= paragraphs.length;
    
    
    
    
}