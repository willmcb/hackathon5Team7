var response = JSON.parse('{"claim":{"claim_uuid":"a31c297d-5a14-42a7-87d3-25cf30c2592b","claim_details":{"claim_type":"Claim::AdvocateClaim","supplier_account_code":"11AAA","advocate_category":"LEDJR","additional_information":"The cold passed reluctantly from the earth, and the retiring fogs revealed an army stretched out on the hills, resting.","apply_vat":"Y","state":"submitted","submitted_at":"2016-09-28T15:47:19Z","originally_submitted_at":"2016-09-28T15:47:19Z","authorised_at":null,"created_by":{"id":1,"uuid":"c65802d9-44cd-4644-a931-ee0d5b2c2ef6","first_name":"Barry","last_name":"Stir","email":"advocate@example.com"},"external_user":{"id":1,"uuid":"c65802d9-44cd-4644-a931-ee0d5b2c2ef6","first_name":"Barry","last_name":"Stir","email":"advocate@example.com"}},"case_details":{"case_type":"Trial","case_number":"C39255543","cms_number":"CMS-2015-195-1","providers_reference":null,"court_code":"436","offence":{"category":"Concealing criminal property","class":"Offences involving serious violence or damage and serious drug offences"},"trial_dates":{"date_started":"2016-07-22","date_concluded":"2016-08-08","estimated_length":37,"actual_length":17},"retrial_dates":{"date_started":null,"date_concluded":null,"estimated_length":0,"actual_length":0},"cracked_dates":{"date_fixed_notice":null,"date_fixed":null,"date_cracked":null,"date_cracked_at_third":null}},"defendants":[{"representation_orders":[{"maat_reference":"1621677167","date":"2015-08-25"}]},{"representation_orders":[{"maat_reference":"3134435264","date":"2015-08-25"}]},{"representation_orders":[{"maat_reference":"2435377823","date":"2015-08-25"}]}],"fees":[{"type":"Hearings relating to disclosure (whole day)","code":"HDW","date":null,"quantity":1,"amount":75,"rate":75,"dates_attended":[]},{"type":"Pages of prosecution evidence","code":"PPE","date":null,"quantity":800,"amount":200,"rate":0,"dates_attended":[]},{"type":"Number of prosecution witnesses","code":"NPW","date":null,"quantity":0,"amount":0,"rate":0,"dates_attended":[]},{"type":"Number of cases uplift","code":"NOC","date":null,"quantity":4,"amount":1652,"rate":413,"dates_attended":[]},{"type":"Number of defendants uplift","code":"NDR","date":null,"quantity":3,"amount":678,"rate":226,"dates_attended":[]},{"type":"Conferences and views","code":"CAV","date":null,"quantity":6,"amount":3642,"rate":607,"dates_attended":[]},{"type":"Plea and case management hearing","code":"PCM","date":null,"quantity":2,"amount":250,"rate":125,"dates_attended":[]},{"type":"Standard appearance fee","code":"SAF","date":null,"quantity":0,"amount":0,"rate":0,"dates_attended":[]},{"type":"Daily attendance fee (51+)","code":"DAJ","date":null,"quantity":0,"amount":0,"rate":0,"dates_attended":[]},{"type":"Daily attendance fee (41 to 50)","code":"DAH","date":null,"quantity":0,"amount":0,"rate":0,"dates_attended":[]},{"type":"Daily attendance fee (3 to 40)","code":"DAF","date":null,"quantity":15,"amount":2520,"rate":168,"dates_attended":[]},{"type":"Basic fee","code":"BAF","date":null,"quantity":1,"amount":250,"rate":250,"dates_attended":[]}],"expenses":[{"date":"2016-09-08","type":null,"location":"Vonhaven","mileage_rate":null,"reason":null,"distance":0,"hours":0,"quantity":10,"rate":48.51,"net_amount":2240.92,"vat_amount":0},{"date":"2016-09-20","type":null,"location":"Lake Billyhaven","mileage_rate":null,"reason":null,"distance":0,"hours":0,"quantity":6,"rate":7.69,"net_amount":402.65,"vat_amount":0},{"date":"2016-09-16","type":null,"location":"Parishaven","mileage_rate":"25p","reason":null,"distance":39,"hours":0,"quantity":5,"rate":23.72,"net_amount":1879.82,"vat_amount":0}]}}')

console.log(response.claim.case_details);

$(response).each(function(i, item) {
    $('.resultsTable > tbody:last-child').append(
      '<tr>' + '<td>' + item.claim.case_details.trial_dates.date_started + '</td>' +
      '<td>' + item.claim.case_details.trial_dates.date_concluded + '</td>' +
      '<td>' + item.claim.case_details.case_type +  '</td>' +
      '<td>' + item.claim.claim_details.created_by.first_name + " " + item.claim.claim_details.created_by.last_name +  '</td>' +
      '<td>' + item.claim.claim_details.advocate_category +  '</td>' +
      '<td>' + item.claim.case_details.offence.category +  '</td>' +
      '</tr>'
    );

});

$(response).each(function(i, item) {
    var maatRef = response.claim.defendants;
    console.log(maatRef);
    $(maatRef).each(function(i, item){
      $('.defendantNames > tbody:last-child').append(
        '<tr>' + '<td>' + item.representation_orders[i].maat_reference + '</td>' + '</tr>'
      );
    });


});
