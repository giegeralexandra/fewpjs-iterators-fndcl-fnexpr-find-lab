
function superbowlWin(array) {
    let year 
    array.find(function(e){
        if (e.result === "W"){
            year = e.year
        }
    })
    return year 
}