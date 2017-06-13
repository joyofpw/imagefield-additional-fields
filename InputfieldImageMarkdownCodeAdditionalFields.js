// Code adapted from 
// https://github.com/Toutouwai/ImageToMarkdown/blob/master/ImageToMarkdown.js
// Authored by Robin Sallis

$(function()
{
  $('.InputfieldImageMarkdownCodeAdditionalFieldsButton').on('click', function(event) 
  {
    var string = $(this).attr('data-href');
    var type = $(this).attr('data-type');

    if(type == 'markdown')
    {
      string = '![](' + string + ')';
    }

    if(type == 'html')
    {
      string = '<img src="' + string + '">';
    }

    copyToClipboard(string);
    return false;
  });
});

function copyToClipboard(string) 
{
  // htmlentities
  // from https://stackoverflow.com/a/27020300
  string = string.replace(/./gm, function(s) 
  {
    return "&#" + s.charCodeAt(0) + ";";
  });

  var temp = $('<input type="text" value="' + string + '">');
  $('body').append(temp);
  temp.select();
  document.execCommand('copy');
  temp.remove();
}