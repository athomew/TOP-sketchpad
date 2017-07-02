$(document).ready(function(){
    makeGrid(16);
    $(document).on('mouseenter','.tile', function(){
        $(this).addClass('filled');
    })
});

function makeGrid(size){
    $('body').append('<div id="container"></div>');
    for (var i=1; i<=size; i++) {
        makeRow(size, i);
    }
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
