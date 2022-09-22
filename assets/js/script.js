// js
// text change 

function textChange(){
    document.getElementById('headTitle').innerHTML = "Hello World";
};

var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });




// jQuary

$(document).ready(function(){

    // hide/show/toggle

    $('#hide').click(function(){
        $('#text').hide();
    });
    
    $('#show').click(function(){
        $('#text').show();
    });

    $('#toggle').click(function(){
        $('#text').toggle();
    });


    // fade

    $('#fadeout').click(function(){
        $('#fadeText').fadeOut(1000);
    });
    
    $('#fadein').click(function(){
        $('#fadeText').fadeIn(1000);
    });

    $('#fadetoggle').click(function(){
        $('#fadeText').fadeToggle("fast");
    });
  
    

    // accordint

    $('#faqQ1').click(function(){
        $('#faqAns1').slideToggle();
    });

    
    // jq ui

    // draggable 
    $( "#draggable" ).draggable();

    // droppable
    $( "#draggable2" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    // sortable
    $( "#sortable" ).sortable();

    // accordion 
    $( "#accordion" ).accordion();

    // autocomplete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    // datepicker
    $( "#datepicker" ).datepicker();

    // tabs
    $( "#tabs" ).tabs();

    // tooltip
    $( document ).tooltip();

    // add class
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }

    // remove class
    $( "#removeButton" ).on( "click", function() {
      $( "#removeClass" ).removeClass( "removeNewClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#removeClass" ).addClass( "removeNewClass" );
      }, 1500 );
    }

    // switch class
    $( "#switchButton" ).on( "click", function() {
    $( ".switchNewClass" ).switchClass( "switchNewClass", "switchAnotherNewClass", 1000 );
    $( ".switchAnotherNewClass" ).switchClass( "switchAnotherNewClass", "switchNewClass", 1000 );
    });

    // toggle class
    $( "#toggleButton" ).on( "click", function() {
      $( "#toggleEffect" ).toggleClass( "toggleNewClass", 1000 );
    });


    // counter up plugin
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // counter 2
    


}) // end tag