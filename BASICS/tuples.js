function add3DCoordinate(c1, c2) {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCoordinate([0, 100, 0], [10, 20, 30]));
function simpleStringState(initial) {
    var str = initial;
    return [
        function () { return str; },
        function (v) {
            str = v;
        }
    ];
}
var _a = simpleStringState("Hello"), str1getter = _a[0], str1setter = _a[1];
var _b = simpleStringState("jack"), str2getter = _b[0], str2setter = _b[1];
console.log(str1getter());
