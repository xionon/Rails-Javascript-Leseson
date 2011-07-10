// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  var LiveClick = {
    onclick: function(event){
      window.location.hash = $(this).attr('href');
      event.preventDefault();
    },

    pagechange: function () {                   //detect hash change
      var hash = window.location.hash.slice(1); //hash to string ("#myanchor" becomes "myanchor")
      $('#main').load(hash + ' #main div');
    }
  }

  $('a').live('click', LiveClick.onclick);
  $(window).bind('hashchange load', LiveClick.pagechange);
});
