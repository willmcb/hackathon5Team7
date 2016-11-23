$(document).ready(function () {
  var baseURL = 'https://staging-adp.dsd.io/api/case_workers/claims?api_key=bbef1c5f-0ded-43d2-8d53-5a6358659dac&status=unallocated&scheme=agfs&filter=all&sorting=id&direction=asc&limit=10';
  $.get(baseURL + 'search=T20150040', function(data) {
    console.log(data);
  });
});
