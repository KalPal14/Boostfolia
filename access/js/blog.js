

jQuery(document).ready(function($){
var url = document.location.href;
new Clipboard('.get_link1', {text: function(){ return url;}});
$('.get_link1').click(function(){alert('Cсылка успешно скопирована в буфер обмена.');});
});

jQuery(document).ready(function($){
var url = document.location.href;
new Clipboard('.get_link2', {text: function(){ return url;}});
$('.get_link2').click(function(){alert('Cсылка успешно скопирована в буфер обмена.');});
});

jQuery(document).ready(function($){
var url = location.href;
new Clipboard('.get_link3', {text: function(){ return url;}});
$('.get_link3').click(function(){alert('Cсылка успешно скопирована в буфер обмена.');});
});