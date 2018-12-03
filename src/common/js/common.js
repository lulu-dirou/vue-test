export default {
  // 特殊符号(转出)
  html_encode: function(str){
    var s = ''
    if (str.length === 0) return ''
    s = str.replace(/&/g, '&amp;')
    s = s.replace(/</g, '&lt;')
    s = s.replace(/>/g, '&gt;')
    s = s.replace(/ /g, '&nbsp;')
    s = s.replace(/'/g, '&#39;')
    s = s.replace(/“/g, '&rdquo;')
    s = s.replace(/”/g, '&rdquo;')
    s = s.replace(/\n/g, '<br>')
  return s
  },
  // 特殊符号(转入)
  html_decode: function(str){
    var s = ''
    if (str.length === 0) return ''
    s = str.replace(/&amp;/g, '&')
    s = s.replace(/&lt;/g, '<')
    s = s.replace(/&gt;/g, '>')
    s = s.replace(/&nbsp;/g, ' ')
    s = s.replace(/&#39;/g, '\'')
    s = s.replace(/&ldquo;/g, '“')
    s = s.replace(/&rdquo;/g, '”')
    s = s.replace(/<br>/g, '\n')
    return s
  },
}
