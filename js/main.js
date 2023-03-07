/*owl carousel*/
$(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        }
    }
});
/*modal onloading form*/
$(document).ready(function()
{
    setTimeout(function()
    {
        $("#exampleModalCenter").modal("show")
    }),1000
}
);


$('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    autoplay:true,
    dots:true,
    nav:false,
    margin:10,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

//
function validateform()
{
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var xx=document.myform.xx.value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");
    
    if(name==null||name=="")
    {
        alert("name cant'be blank");
        return false;
    }
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
    {  
        alert("Please enter a valid e-mail address ");  
        return false;  
    }
    
    
}