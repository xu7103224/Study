/******************************************************
* file    : 简单记录
* author  : page(pk)
* time    : 2016/11/15
*******************************************************/
var template = {
    // data = [];
};

function compute(data)
{
    if ( !data instanceof Array) return;

    var sum = 0;
    for (var i = 0; i < data.length; ++i){
        sum += data[i];
    }
    console.log("sum = " + sum);
}

var a10 = [5149.87, -2278.10, 12297.36, 1008.57, 270, 469, 273, 5328];
compute(a10);

var a11 = [9798.79, -2842.81, 8816.51, 1199.65, 220, 282.73, 273.95, 5359];
compute(a11);

var a12 = [11744.38, -6727.77, 5329.82, 1390.73, 14.5, 231.47, 269.95, 7754.967];
compute(a12);


var a1712 = [9146.06, -3992.55, 827.60, 174.10, 852, 3534.68, 134.68, 2712.99];
compute(a1712);

var a1703 = [10046.45, -3117.06, 2595.45, 165.18, 637.5, 3174.74, 68.68, 5108.73];
compute(a1703);
