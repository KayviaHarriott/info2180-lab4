document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('search-button');
    //alert(button.innerHTML);
    //alert(button.value);
    //button.onclick = showContent;
    //var phpContent = "";

   //function showContent(){
    //    alert("Here you go!");


   //}
  //$("button").click(function(){
        //alert("Here you go!");
    //    $.ajax("superheroes.php", {
    //        method: 'GET',
    //        data: {
    //            id: idI,
    //        }
    //    }).done(function(response){
    //        let parseHTML = response;
    //        $("#container").html(parseHTML);
    //    }).fail(function(){
    //        alert('There was an issue with the request.');
    //    });



   //});

   function testing2(city = ""){
    let countryI = 1;
    //countryI = countryI.trim();
    
    $.ajax("superheroes.php", {
        method: 'GET',
        data: {
            id: 1,
            name: "Steve Rogers",
            alias: "Captain America",
            biography: "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers."
       
        }
    }).done(function(response){
        let parseHTML = response;
        $("#result").html(parseHTML);
    }).fail(function(){
        alert('There was an issue with the request.');
    });
}
});


});