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

__________________-

document.addEventListener('DOMContentLoaded', function() {
    //alert("Document loads");
    var form = document.querySelector('form');
    var textField = document.getElementsByClassName('name-alias-field')[0].value;

    //form.onsubmit = findName();

    
    form.addEventListener('subbmit', function(evt){
        evt.preventDefault();
        if (textField == " " || textField == "" || textField == null){
            requestCountry();
        }
        else{
            defaultEmpty2(textField);
        }


    });

    function defaultEmpty(txtrequest = ""){   

        $.ajax("superheroes.php", {
            method: 'GET'             
            
        }).done(function(response){
            let parseHTML = response;
            $("#result").html(parseHTML);
            //alert(response);
            
        }).fail(function(){
            alert('There was an issue with the request.');
        });
    }

    function defaultEmpty2(txtrequest = ""){   
        let superheroesI = textField;
        superheroesI = superheroesI.trim();

        $.ajax("superheroes.php", {
            method: 'GET',
            data: {
                alias: superheroesI
            }        
            
        }).done(function(response){
            let parseHTML = response;
            $("#result").html(parseHTML);
            //alert(response);
            
        }).fail(function(){
            alert('There was an issue with the request.');
        });
    }
    

    function requestCountry(city = ""){
        let countryI = $("#name-alias-field").val();
        countryI = countryI.trim();
        
        $.ajax("superheroes.php", {
            method: 'POST',
            data: {
                alias: 1
            }
        }).done(function(response){
            let parseHTML = response;
            $("#result").html(parseHTML);


        }).fail(function(){
            alert('There was an issue with the request.');
        });
    }

    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        //alert("Works");
        requestCountry();

    });
});
