
// grid=[[null,null,null],[null,null,null],[null,null,null]]
let grid=new Array(8);
$(document).ready(function () {
    let counter =0;
    let start =false;
    let player ="player 1"
    let playerValue =true;
    const cells=$('td');
  

    
    const click_handler =function (){
        if (!start)
            return
        
        const id =this.id.match(/\d+/g); 
        // const temp =$(this).parent();
        // const row = temp[0].className.match(/\d+/g); 
        
        
        if (playerValue){
            $(this).append("<b>X</b>");
       // $(this).css("background-color","red");
            playerValue=false;
            grid[id]="X";
            player="player 2"
            counter++;

        }
        else{
            $(this).append("<b>o</b>");
            // $(this).css("background-color","red");
                 playerValue=true;
                 grid[id]="O";
                 player="player 1"
                 counter++;
        }
        
       // debugger;
      
       $(".player p").text(player);
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