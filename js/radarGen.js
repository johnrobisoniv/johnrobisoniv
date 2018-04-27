var issuesDict = {
  "overview": [
    "Overview",
    "#FC4C02"
  ],
  "internationalCooperation": [
    "International Cooperation",
    "#3CB2C1"
  ],
  "ruleOfLaw": [
    "Rule of Law",
    "#6E497E"
  ],
  "maritimeEnforcement": [
    "Maritime Enforcement",
    "#354EA1"
  ],
  "coastalWelfare": [
    "Coastal Welfare",
    "#B89E42"
  ],
  "blueEconomy": [
    "Blue Economy",
    "#307ABD"
  ],
  "fisheries": [
    "Fisheries",
    "#06A89D"
  ],
  "piracy": [
    "Piracy",
    "#B6782A"
  ],
  "illicitTrade": [
    "Illicit Trades",
    "#098895"
  ],
  "maritimeMixedMigration": [
    "Maritime Mixed Migration",
    "#896F33"
  ]
}



function radarGen (csv) {
  var outputData = {};
  var regionsArray = [
    "overview",
    "westernCoast",
    "northernGulf",
    "southernGulf",
    "southernCoast",
    "westIndianOcean",
    "easternCoast"
  ]
  d3.csv(csv, function (error, rows) {
    if (error) throw error;
    var i = 0;
    rows.forEach(function (country) {
      var countryArray = [];

    //  console.log(country);

      for (key in country) {
        if (issuesDict[key] || regionsArray.includes(key)) {

          var axis = issuesDict[key][0],
            value = Math.round(country[key] * 100),
            color = issuesDict[key][1];

          var point = {
            value: value,
            axis: axis,
            color: color
          };

          countryArray.push(point)
        }


      }


      outputData[country.iso3] = countryArray;
      i++;
    });
    return outputData;

  });
}
