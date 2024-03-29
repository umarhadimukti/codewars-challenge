const decode = (m) => {
  const word = {
    '/\\':'a',
    ']3':'b',
    '(':'c',
    '|)':'d',
    '[-':'e',
    '/=':'f',
    '(_,':'g',
    '|-|':'h',
    '|':'i',
    '_T':'j',
    '/<':'k',
    '|_':'l',
    '|\\/|':'m',
    '|\\|':'n',
    '()':'o',
    '|^':'p',
    '()_':'q',
    '/?':'r',
    '_\\~':'s',
    '~|~':'t',
    '|_|':'u',
    '\\/':'v',
    '\\/\\/':'w',
    '><':'x',
    '`/':'y',
    '~/_':'z',
    '__':' '
  }
  return m.split(m[0]).filter(item => item).reverse().map(item => word[item]).join('');
}
console.log(decode("'|\|'/<'|_|''(_,'~|~''/<''()_'\/''|_|'']3''_T''_T'|^''/<''|_''('/<''__''\/\/''\/\/'\/'()_''()''_\~'_\~'~|~''/='()''`/'__'('']3'/\''_T''/='|\/|''~/_''~|~'|_|''|_''_T'|-|''|''|^''~|~''_\~''_T''_\~''_T''/\'"))