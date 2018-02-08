var si = 'This is an example';
var sii = si.replace(/[^a-z ]/ig, '')
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    return +match === 0 ? "" : match[index === 0 ? 'toLowerCase' : 'toUpperCase']();
});
console.log(sii);
