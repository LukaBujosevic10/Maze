$(document).ready(function() {
    var wrap = $('#wrap');
    var x;
    // prevljenje lavirinta
    for(var i = 0; i < 400; i++){
      x = Math.floor((Math.random() * 3) + 1);
      if(i == 0 | i == 399){
        $(wrap).append('<dic class="put"></div>')
      }else{
        if(x == 1){
          $(wrap).append('<div class="zid"></div>')
        }else{
          $(wrap).append('<dic class="put"></div>')
        }
      }

    }
    // kraj pravljenja lavirinta
var put = $('.put');
    // postavljanje kruga na prvo polje puta
    $(put[0]).append('<div id="krug"></div>');
    // kraj posztavljanja kruga
    $(put[put.length-1]).append('<div id="kraj"></div>')

    var zid = $('.zid');
    var brojac_prputa = 0;
    var za_pamcenje;
    var slucajan_pomeraj;
    var pozicija_puta;
    var razlika_top;
    var razlika_left;
    var brojac;
    var proslo_pomeranje;
    var moguce_pomeranje = new Array();
    var proslo_pomeranje;
    var pr_put = new Array();
    function pomeranje(){
    var pozicija_kruga = $('#krug').offset();
    brojac = 0;
    for(i = 0; i < put.length; i++){
      pozicija_puta = $(put[i]).offset();
      razlika_top = pozicija_kruga.top - pozicija_puta.top;
      razlika_left = pozicija_kruga.left - pozicija_puta.left;
      if(Math.abs(razlika_top) == 20 && razlika_left == 0){
        moguce_pomeranje[brojac] = $(put[i]);
        brojac++;
      }
      if(Math.abs(razlika_left) == 20 && razlika_top == 0){
        moguce_pomeranje[brojac] = $(put[i]);
        brojac++;
      }
    }

    // ovde izvaciti iz niza moguće pomeranje element koji odgovara prethodnom polju

    var n = $('#postavljeno');
    var postavljeno = $("#postavljeno").offset();
    var razlika;

    if (moguce_pomeranje.length != 1) {
      if (pr_put.length > 2) {

        for(i = 0; i < moguce_pomeranje.length; i++){
          razlika = pr_put.length - 2;


          if(moguce_pomeranje[i].offset().top == pr_put[razlika].offset().top && moguce_pomeranje[i].offset().left == pr_put[razlika].offset().left){

            moguce_pomeranje.splice(i, 1);

          }

        }
      }

    }



    slucajan_broj = Math.floor((Math.random() * moguce_pomeranje.length));
    $('.put').removeAttr('id');


      pr_put[brojac_prputa] = moguce_pomeranje[slucajan_broj];
      $('#krug').offset(moguce_pomeranje[slucajan_broj].offset());
      brojac_prputa++;
      console.log($('#krug').offset());
      if($('#krug').offset().top == $('#kraj').offset().top && $('#krug').offset().left == $('#kraj').offset().left){
        clearInterval(poziv);
      }
    moguce_pomeranje.length = 0;
  }
  var poziv = setInterval(pomeranje, 50);
});
