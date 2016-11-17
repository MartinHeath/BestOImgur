$(document).ready(function($){
  $("#images").on("click","img", function (){
     window.open($(this).attr("src"), '_blank_');
  });
  $("#searchForm").submit(function (){
    if($("#searchKey").val() !== ""){
      //splitting the search into pieces. Each piece is searched for individually as well as together.
      var txt = $("#searchKey").val();
      var indTxt = $("#searchKey").val().split(" ");

      // post data
      $.ajax({
        type: "POST",
        url: window.location.href + "data",
        data: {"keySentence": txt, "keyWords": indTxt},
        dataType: "json",

        success: function(data){
          if(data.length !== 0){
            //clear container
            $("#images").html("");

            $("#result").html("Showing Results for <b>" + txt + "</b>");  //"(" + data.length + " hits)");
            for ( var i= 0; data.length; i++){
              console.log(data[i].link.substr(0,9));
              if(data[i].link.substr(0,9) == "http://i."){
                $("#images").append("<div class ='col-sm-4'> <img class='imgthumbnail' src='" + data[i].link + "'> </div>");
              }
            }
          }
          else{
            $("#images").html("");
            $("#result").text("No images found :C");
          }
        },
        error: function(jqXHR, textStatus, errorThrown){
          alert(errorThrown);
        }
      });
    }
    else{
      $("#images").html("");
      $("#result").text("No keyword entered!");
    }
    //page not reloaded
    return false;
  });
});
