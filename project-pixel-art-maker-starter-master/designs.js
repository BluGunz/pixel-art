

const pixelTable = document.getElementById("pixelCanvas");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const colorMix = document.getElementById("colorPicker");



$('#sizePicker').submit(function(e) { // When size is submitted by the user, call makeGrid()
    e.preventDefault(); // Prevents the grid to be deleted after it is created
    width = $(inputWidth).val();
    height = $(inputHeight).val();
    makeGrid(height, width);
    OnClickListener()

});


function makeGrid(a, b) {
   $('tr').remove(); // removes the previously inputed number and output the new inputted numbers.

/**
 * // collection data from makeGrid to create a horizontal and vertical lines pattern.
 * @param int a after inputting a number the height will be made with boxes horizontal
 * @param int b after inputting a number the height will be made with boxes horizontal
 */ 
    for (let y = 1; y <= a; y++) {
        $('table').append('<tr id=table' + y + '></tr>');
        
        for (let z = 1; z <= b; z++) {
            $('tr:last' ).append('<td></td>') 
            
        };   
    };

};
//OnClickListener Detects mouse over, mouse or finger touch presses, and clicks on an actor. 
function OnClickListener(){
    $('td').click (event => {
    let colorful = $(colorMix).val();
    $(event.target).css('background-color', colorful);
    });

};