document.addEventListener('DOMContentLoaded', function() {
    //alert("Document loads");

    $("#search-button").click(function(){
                //alert("Button click works");
        showPHP();
    });

    function showPHP(txtrequest = ""){             
        $.ajax("superheroes.php", {
            method: 'GET'             
            
        }).done(function(response){
            let parseHTML = response;
            //$("#result").html(parseHTML);
            alert(response);
            
        }).fail(function(){
            alert('There was an issue with the request.');
        });
    }

});
