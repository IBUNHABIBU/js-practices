function isAnagram(str1, str2){
  return strFormat(str1) === strFormat(str2);
}
function strFormat(params) {
  return params
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = isAnagram;