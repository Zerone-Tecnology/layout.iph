var journals = document.querySelectorAll('[data-journal-target]');
var descriptions = document.querySelectorAll('[data-journal-content]');

journals.forEach(journal => {
    journal.addEventListener("click", () =>{
       const target = document.querySelector(journal.dataset.journalTarget);
       descriptions.forEach(description => {
          description.style.display = "none";
       });
        $(journal.dataset.journalTarget).animate({
            width: "toggle"
        })
       
   });
});




// $('.img-1').click(function(){
// 	if ( document.querySelector('.panel__img-1').style.display == "block" ) {
//         $(".panel__img-1").animate({
//              width: "toggle"
//          });
// 	} 
// 	else{
// 		$(".panel__img-1").animate({
//             width: "toggle"
//         });
// 	}
// });

// $('.img-2').click(function(){
// 	if ( document.querySelector('.panel__img-2').style.display == "block" ) {
// 		$(".panel__img-2").animate({
//             width: "toggle"
//         });
// 	} 
// 	else{
// 		$(".panel__img-2").animate({
//             width: "toggle"
//         });
// 	}
// });

// $('.img-3').click(function(){
// 	if ( document.querySelector('.panel__img-3').style.display == "block" ) {
// 		$(".panel__img-3").animate({
//             width: "toggle"
//         });
// 	} 
// 	else{
// 		$(".panel__img-3").animate({
//             width: "toggle"
//         });
// 	}
// });


// $(document).ready(function(){
//     $(".img-1").click(function(){
//         $(".panel__img-1").animate({
//             width: "toggle"
//         });
//     });
// });