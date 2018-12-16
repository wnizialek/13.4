function timeConvert(sec){
    var min = (sec / 60).toFixed(0);
    var hrs = (min / 60).toFixed(0);
    return sec + " sec. = ~ " + min + " min. = ~ " + hrs + " h."
}


exports.conventer = timeConvert;