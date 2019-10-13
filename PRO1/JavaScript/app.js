
// grid=[[null,null,null],[null,null,null],[null,null,null]]

$(document).ready(function () {
    let counter =0;
    let start =false;
    let player ="player 1"
    const cells=$('td');
  

    
    const click_handler =function (){
        if (!start)
            return
        
        const col =this.id.match(/\d+/g); 
        const temp =$(this).parent();
        const row = temp[0].className.match(/\d+/g); 
        

        console.log( grid)
        console.log(row);
        console.log(col);
        
        
       // debugger;
        $(this).css("background-color","whi");
        $(this).unbind();

        
      }

      const startHandler = function (){
        start=true;
        $('aside').append("<b>Start</b>");
        $(".player p").text(player);
        $(this).unbind();
      }
      const resetHandler= function (){
        window.location.reload();

      }


    $("td").click(click_handler);
    $("#start").click(startHandler);
    $("#reset").click(resetHandler);
    

      













});