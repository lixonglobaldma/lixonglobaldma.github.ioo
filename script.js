// Mobile menu
var btn=document.getElementById('menuBtn');
var nav=document.getElementById('mainNav');
if(btn&&nav){btn.addEventListener('click',function(){nav.classList.toggle('open');});}
// Footer year
var y=document.getElementById('year');
if(y){y.textContent=new Date().getFullYear();}
// Forms: open the visitor's email app with the message filled in.
// Nothing is sent from this website. The visitor must press Send in their email app.
document.querySelectorAll('form.mail-form').forEach(function(form){
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var msg=form.querySelector('.form-msg');
    if(!form.checkValidity()){
      msg.className='form-msg err';
      msg.textContent='Please fill in all required fields correctly.';
      return;
    }
    var lines=[];
    form.querySelectorAll('input,select,textarea').forEach(function(f){
      if(f.name){
        var label=form.querySelector('label[for="'+f.id+'"]');
        lines.push((label?label.textContent:f.name)+': '+f.value);
      }
    });
    var link='mailto:lixonglobaldma@gmail.com?subject='+encodeURIComponent(form.getAttribute('data-subject'))+'&body='+encodeURIComponent(lines.join('\n\n'));
    window.location.href=link;
    msg.className='form-msg';
    msg.textContent='Your email app should open with your message ready. Your request is sent only after you press Send in that app. If nothing opens, please email us directly at lixonglobaldma@gmail.com.';
  });
});
