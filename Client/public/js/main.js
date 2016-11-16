$(document).ready(function($){
  $("#searchForm").submit(function (){
    if($("#searchKey").val() !== ""){
      //splitting the search into pieces. Each piece is searched for individually as well as together.
      var txt = $("#searchKey").val();
      var indTxt = $("#searchKey").val().split(" ");

      $("#result").text("No images found :C");
    }
    else{
      $("#result").text("No keyword entered!");
    }
    //page not reloaded
    return false;
  });
});
