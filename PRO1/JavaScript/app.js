

$(document).ready(function () {
    let counter = 0;
    let start = false;
    let player = "player 1"
    let playerValue = true;
    const cells = $('td');

    let grid = [[null, null, null], [null, null, null], [null, null, null]]
    // grid={"row0":new Array(3),"row1":new Array(3),"row3":new Array(3)}; 


    const click_handler = function () {
        if (!start)
            return

        const cul = this.id.match(/\d+/g);
        const temp = $(this).parent();
        const row = temp[0].className.match(/\d+/g);


        if (playerValue) {
            $(this).append("<b>X</b>");
            // $(this).css("background-color","red");
            playerValue = false;
            grid[row][cul] = "X";
            player = "player 2"
            counter++;

        }
        else {
            $(this).append("<b>o</b>");
            // $(this).css("background-color","red");
            playerValue = true;
            grid[row][cul] = "O";
            player = "player 1"
            counter++;
        }

        console.log(result(grid));
        // debugger;
        console.log(counter);
        $(".player p").text(player);
        $(this).unbind();


    }

    const startHandler = function () {
        start = true;
        $('aside').append("<b>Start</b>");
        $(".player p").text(player);
        $(this).unbind();
    }
    const resetHandler = function () {
        window.location.reload();

    }



    const allEqual = arr => arr.every(v => v === arr[0])

    const extractColumn = function (arr, column) {
        return arr.map(x => x[column])
    }

    const result = function (arr) {

             /*diagonal are equl */
        const diagonal1=[arr[0][0],arr[1][1] ,arr[2][2]]
        const diagonal2=[arr[0][2],arr[1][1],arr[2][0]]

        if (allEqual(diagonal1)||allEqual(diagonal2))
            return arr[1][1]
       
  
      



        /*row are */
        if (allEqual(arr[0]))
            return arr[0][0]
        else if (allEqual(arr[1]))
            return arr[1][0]
        else if (allEqual(arr[2]))
            return arr[2][0]

    /*colum are equal*/
        if (allEqual(extractColumn(arr, 0)))
            return arr[0][0]
        else if (allEqual(extractColumn(arr, 1)))
            return arr[0][1]
        else if (allEqual(extractColumn(arr, 2)))
            return arr[0][2]




    }


    $("td").click(click_handler);
    $("#start").click(startHandler);
    $("#reset").click(resetHandler);
















});











/*
my references
allEqual
    https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal


    extractColumn
    https://gist.github.com/eddieajau/5f3e289967de60cf7bf9

    */