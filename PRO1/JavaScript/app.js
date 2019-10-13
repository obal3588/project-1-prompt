

$(document).ready(function () {
    let counter = 0;
    let start = false;
    let player = "player 1"
    let playerValue = true;
    const cells = $('td');


    let grid = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]

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

       
        // debugger;
        whoWin();
        $(".player p").text(player);
        $(this).unbind();


    }


    const whoWin = function(){

        const finalResult = result(grid);
        if (finalResult ==-1)
            return
        else{
            debugger;
            $("td").unbind();
            start=false;
            const temp ="<b>" +"<br>"+finalResult[0]+" "+finalResult[1]+"</b>";
            console.log(temp);
            
            $("footer").append(temp)
        }


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

        const resultRow = rowCheck(arr);
        const resultColum = columCheck(arr);
        const resultDiagonal = checkDiagonal(arr)
        // console.log(resultRow);
        // console.log(resultColum);
        // console.log(resultDiagonal);




        if (resultRow != -1) {
            debugger;
            const temp = resultRow[1]
            const rowClass = '.row' + temp;
            $(rowClass).css("background-color", "red")
            
            return ["Who win is ", resultRow[0]];
        }

        else if (resultColum != -1) {

            const temp = resultColum[1]
            const columClass = ' #ceil' + temp;
            $(columClass).css("background-color", "red")

            return ["win", resultColum[0]];


        }
        else if (resultDiagonal != -1) {
            //debugger;
            if (resultDiagonal[1] == 1) {
                $(".row0 #ceil0").css("background-color", "red");
                $(".row1 #ceil1").css("background-color", "red");
                $(".row2 #ceil2").css("background-color", "red");
            }
            else {

                $(".row0 #ceil2").css("background-color", "red");
                $(".row1 #ceil1").css("background-color", "red");
                $(".row2 #ceil0").css("background-color", "red");

            }
            return ["win", resultDiagonal[0]]
        }
        else
            return -1


    }



    const columCheck = function (arr) {
        /*colum are equal*/
        if (allEqual(extractColumn(arr, 0)))
            return [arr[0][0], 0]
        else if (allEqual(extractColumn(arr, 1)))
            return [arr[0][1], 1]
        else if (allEqual(extractColumn(arr, 2)))
            return [arr[0][2], 2]

        return -1
    }
    const rowCheck = function (arr) {

        const temp = arr[1];
        /*row are */
        if (allEqual(arr[0]))
            return [arr[0][0], 0, arr[0]]
        else if (allEqual(temp))
            return [arr[1][0], 1, arr[1]]
        else if (allEqual(arr[2]))
            return [arr[2][0], 2, arr[2]]

        else
            return -1
    }
    const checkDiagonal = function (arr) {
        /*diagonal are equl */
        const diagonal1 = [arr[0][0], arr[1][1], arr[2][2]]
        const diagonal2 = [arr[0][2], arr[1][1], arr[2][0]]

        if (allEqual(diagonal1))
            return [arr[1][1], 1, diagonal1]

        else if (allEqual(diagonal2))
            return [arr[1][1], 2, diagonal2]

        return -1
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




