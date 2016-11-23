$(document).ready(function () {
  function search(caseNumber) {
    var baseURL = '/search';
    $.get(baseURL + '?search=' + caseNumber, function(data) {
      console.log(data);
    });
  }
});
