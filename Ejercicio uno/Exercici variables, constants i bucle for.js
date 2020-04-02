
var nom = "Frederic";
var cognom1 = "Campínyez";
var cognom2 = "Martínez";
var dia = 14;
var mes = 6;
var any = 1972;
var traspas = 1948;
var cicle = 4;
var i;
var limite = any-traspas;
var arrayTraspas = [];
var boolean ;
for (i=0;i <=limite; i++ ){
    if ((i%cicle)== 0){
        target=traspas+i;
        arrayTraspas.push(target);
    }
};
if ((i%cicle) == 0){
    boolean = true;
}
else if ((i%cicle) != 0){
    boolean = false;

}

var cert = "El meu any de naixement és de traspàs";
var fals = "El meu any de naixement no és de traspàs";


alert("El meu segon cognome és "+cognom2+" el primer "+ cognom1+ " i el meu nom " + nom +".");
alert("La meva data de naixement es " + dia + "/"+mes+"/"+any+".");
alert("Hi ha "+ arrayTraspas.length + " anys de traspàs desde el 1948 fins al "+any+". Son els anys "+arrayTraspas);
if (boolean == true){
    alert(cert);
}
if (boolean == false){
    alert(fals);
}