//Config
var applicationID = 'TS106XF7Y9';
var apiKey = 'da97fcc72d5377406b5da395ade6f5f5';
var index = 'JSON';

var client = algoliasearch(applicationID, apiKey);
var helper = algoliasearchHelper(client, index);

//var algolia = algoliasearch('TS106XF7Y9', 'da97fcc72d5377406b5da395ade6f5f5');

helper.on('result', function(content) {
  renderHits(content);
});

function renderHits(content) {
  $('#container').html(function() {
    return $.map(content.hits, function(hit) {
      return '<li>' + hit._highlightResult.name.value + '</li>';
    });
  });
}

$('#search-box').on('keyup', function() {
  helper.setQuery($(this).val())
        .search();
});

helper.search();