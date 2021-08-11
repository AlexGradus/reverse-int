module.exports = function reverse (n) {
    let line=n;
    line=line.toString();
    line=line.split('');
    line=line.reverse();
    line=line.join('').replace(/-/g,'');
    line=Number(line);
    return line;
  
}
