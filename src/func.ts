export function fun(num: number) {
    return (num + 1) * (num + 1);
}

fun.derivative = function(x: number) {
    return 2 * (x + 1);
}
