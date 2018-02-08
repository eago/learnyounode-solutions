const si = 'This is an example';

let sii = si.replace(/[^a-z ]/ig, '')
.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: any, index: number) => {
    /*
    若是空格，则被替换掉， 否则进入下一轮判断， 如果是在第一个位置被匹配（大写字母）， 否则就是在其他位置被匹配
    （空格加小写字母）
    */
return +match === 0 ? "" : match[index === 0 ? 'toLowerCase' : 'toUpperCase']();
});

console.log(sii);