"use strict";$(document).ready(function(){!function(e,t,a){var o=document.getElementById(e);o.style.visibility="visible";var i=document.querySelectorAll("#".concat(e," path"));t=t;for(var n=0;n<i.length;n++)i[n].style.strokeDasharray=i[n].getTotalLength(),i[n].style.strokeDashoffset=i[n].getTotalLength(),i[n].style.animation="line-anim 2s ease forwards ".concat(t,"s"),t+=a;o.style.animation="fill 0.5s ease forwards ".concat(t,"s")}("logo",0,.3),setTimeout(function(){$(".overlay").fadeOut("slow")},2300),AOS.init();new Typed(".element",{strings:["Web Development","App Development","Social Media Marketing","Graphics Design","Video Editing","IOT Automation","Data Entry"],typeSpeed:50,loop:!0,backDelay:1200,backSpeed:40});$(".btn-menu").click(function(e){$("nav ul").toggleClass("hidden")}),$(".go-top").click(function(e){$("html, body").animate({scrollTop:0},"500")}),1024<window.innerWidth&&102<window.scrollY&&$(".site-header").addClass("fixed float-header"),815<window.scrollY&&$(".go-top").addClass("show"),$(window).scroll(function(){815<window.scrollY?$(".go-top").addClass("show"):$(".go-top").removeClass("show"),1024<window.innerWidth&&(window.scrollY<=102&&0!=window.scrollY?($(".site-header").removeClass("float-header"),$(".site-header").addClass("fixed")):102<window.scrollY&&0!=window.scrollY?$(".site-header").addClass("float-header"):$(".site-header").removeClass("fixed float-header"))}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){var t;location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")||location.hostname!=this.hostname||(t=(t=$(this.hash)).length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))});var t=$(".main-carousel");t.flickity({cellAlign:"center",contain:!0});var a=$("#package-slides a");a.click(function(){var e=$(this).attr("data-toggle");$(this).parent().parent().find("a").removeClass("active"),$(this).addClass("active"),t.flickity("select",e)}),t.on("change.flickity",function(e,t){a[t].click()})});