var form = document.getElementById('formulaire');
var txt = document.getElementById('txt');

var ul = document.createElement('ul');
ul.id="sortable";
form.appendChild(ul);

form.addEventListener('submit', function(){

var li = document.createElement('li');
li.textContent = txt.value;
ul.appendChild(li);
var btn = document.createElement('button');
btn.type='button';
btn.id = 'bouton';
btn.textContent = 'supprimer';
li.appendChild(btn);
var form2 = document.createElement('form');
form2.id='form2';
li.appendChild(form2);
var input = document.createElement('input');
input.type='text';
input.name='modify';
input.placeholder='modification';
input.value='';
form2.appendChild(input);
var input2 = document.createElement('input');
input2.type='submit';
input2.value='enregistrer';
input.appendChild(input2);

form2.addEventListener('submit', function(){
  li.textContent = input.value;
  ul.replaceChild(li, li);
  li.appendChild(btn);
  li.appendChild(form2);
  form2.appendChild(input);
  input.appendChild(input2);
  event.preventDefault();
});

event.preventDefault();

btn.addEventListener('click', function(){
  ul.removeChild(li);
 });

 $( function() {
   $( "#sortable" ).sortable();
   $( "#sortable" ).disableSelection();
 } );

});
