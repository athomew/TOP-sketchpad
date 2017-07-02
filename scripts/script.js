var gridSize = 16;
var tileSize = 25;
var tileSizeStr = tileSize.toString() + 'px';

$(document).ready(function(){
    makeGrid(gridSize);
    $(document).on('mouseenter','.tile', function(){
        $(this).addClass('filled');
    })
    $(document).on('click','#resize-button', function(){
        $('#container').remove();
        gridSize = $('#grid-size').val();
        tileSize = (400/gridSize);
        tileSizeStr = tileSize.toString() + 'px';
        makeGrid(gridSize);
    });
});

function makeGrid(size){
    $('body').append('<div id="container"></div>');
    for (var i=1; i<=size; i++) {
        makeRow(size, i);
    }
    $('.row').height(tileSizeStr);
    $('.tile').height(tileSizeStr);
    $('.tile').width(tileSizeStr);
};

function makeRow(size, n){
    $('#container').append('<div class="row" id="row'+ n + '"></div>');
    for (var i=1; i<=size; i++) {
            makeTile(n, i);
        }
}

function makeTile(n, m){
        var curRowID = "#row" + n.toString();
        $(curRowID).append('<div class="tile" id="tile'+ n + 'x' + m + '"></div>');
}

function resize(){

}
