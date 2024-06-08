var precio;
var cantidad;
var total;
productos=['Victoria Secret', 'Gucci', 'Mercedes Benz', 'Liberatta'];
producto='Victoria Secret';
precio=[100, 49, 79, 99];
cantidad=[6,8,9,10];
total=precio*cantidad;
var texto='';
var el=document.getElementById('cost');
for(let i=0; i<productos.length;i++)
{
    texto+=productos[i]+' $'+(precio[i]*cantidad[i])+' ';
}
el.textContent=texto;

