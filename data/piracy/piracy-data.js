var piracyData = {
  // not prepped?
  metadata: { // Independent data source for each page
    version: '1.0.0',
    name: '*Piracy*',
    updates: true,
    /*
         0.0.2:
           1 footnotes
           2 legends
           3 maps ready to go


         */
    index: 8,
    code: 'piracy',
    path: 'piracy',
    countryData: {},
    incidents: [],
    csv: '../../data/piracy/piracy.csv',
    color: '#B6782A',
    order: -1,
    description: 'Most maritime crime continues to be piracy and armed robbery. These acts endanger seafarers, threaten commerce, and fund criminal networks.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback);
    // We should probably also load incidents here instead of on card 0 ?
    d3.select('body')
      .append('script')
      .attr('src', 'https://d3js.org/d3-hexbin.v0.2.min.js');


    d3.csv('../../data/piracy/piracy-incidents.csv', function(incidents) {
      incidents.forEach(function(d) {
        d.lat = +d.lat;
        d.lon = +d.lon;
      });

      issueAreaData[issueArea].metadata.incidents = incidents;

      var incidentsLayer = mapg.append('g')
        .classed('card-layer piracy-incidents card-1-layer card-2-layer', true);

      var incidentsColor = ['rgb(64, 194, 94)', 'rgb(54, 19, 105)', 'blue']

      function inModel(d) {
        if (d.category == 'Robbery' || d.category == 'Armed robbery' || d.category == 'Unarmed robbery' || d.category == 'Hijack for cargo theft' || d.category == 'Kidnapping') {
          return true;
        }
      }

      filtered = incidents.filter(inModel);



      incidentsLayer.selectAll('circle')
        .data(filtered).enter()
        .append('circle')
        .attr('cx', function(d) {
          return projection([d.lon, d.lat])[0];
        })
        .attr('cy', function(d) {
          return projection([d.lon, d.lat])[1];
        })
        .attr('class', function(d, i) {
          return 'incident-' + d.category.split(' ')[0].toLowerCase();
        })
        .style('opacity', 0.5)
        .classed('piracy-incident', true)
        .on('mouseenter', function (d) {
        //  var category = d['category-code'];

          var pieSegment = d3.select('.pie-segment-' + d.category.split(' ')[0].toLowerCase());

          pieSegment.moveToFront();
          pieSegment.style('stroke', 'white')
            .style('stroke-width', '3px');

          // pieSegment.select(function () {
          //   console.log('node', this.parentNode)
          //   return this.parentNode;
          //
          // }).moveToFront();

        })
        .on('mousemove', function(d) {

          d3.select(this)
            .style('opacity', 1)
            .attr('r', '4px');

          d3.select(this).moveToFront();
          var coords = d3.mouse(this);
          var y = d3.event.pageY,
            x = d3.event.pageX;
          //    console.log(d3.event);

          var tooltip = d3.select('div.tooltip');
          tooltip.style('left', (x + 20) + 'px')
            .style('top', (y - 20) + 'px')
            .classed('hidden', false)
            .classed('active', true)
            .style('text-align', 'left');
          //  console.log(d);
          tooltip.select('h1')
            .text(null);

          var format = d3.timeParse('%m/%d/%y %h:%M');

          //    console.log(Date(d.date));
          var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          var date = new Date(Date.parse(d.date));
          var day = days[date.getDay()];
          var month = months[date.getMonth()];
          var year = date.getYear() + 1900;
          //      console.log(day, month, year);
          tooltip.select('.tooltip-body')
            .text(d.category + ' on ' + date.getDate() + " " + month + ' ' + year);

      //    d3.select()

        })
        .on('mouseleave', function(d) {
          d3.select(this)
            .transition().delay(2)
            .style('opacity', 0.5)
            .attr('r', '3px');

          d3.select(this).moveToBack();

          d3.select('div.tooltip')
            .classed('hidden', true);

          d3.selectAll('.tooltip.active')
            .attr('style', null) // what did this just break??
            .classed('active', false);

          var pieSegment = d3.select('.pie-segment-' + d.category.split(' ')[0].toLowerCase());
        //  console.log();

          pieSegment.style('stroke', null)
            .style('stroke-width', null);
        })
        .transition().delay(10)
        .attr('r', '3px')
        //    .attr('opacity', 0.5)
        .attr('fill', function(d) {
          //console.log(d.category);
          var i;
          var c;
          switch (d['category'].toLowerCase()) {
            case 'armed robbery':
              i = 0;
              break;
              // case 'failed attack':
              //   i = 2;
              //   break;
              // case 'failed boarding':
              //   i = 3;
              //   break;
            case 'hijack for cargo theft':
              i = 2;
              break;
            case 'kidnapping':
              i = 1;
              break;
            case 'robbery':
              i = 0;
              break;
              // case 'suspicious activity':
              //   i = 7;
              //   break;
            case 'unarmed robbery':
              i = 0;
              break;
            default:
              //  console.log('error building piracy attack type:');
              //  console.log('[' + d.category + ']');
          }

          //  console.log('{' + d.category + '}', i);

          return incidentsColor[i];
        })
        .attr('stroke', function(d) {
          var i;
          switch (d.category.toLowerCase()) {
            case 'armed robbery':
              i = 0;
              break;
              // case 'failed attack':
              //   i = 2;
              //   break;
              // case 'failed boarding':
              //   i = 3;
              //   break;
            case 'hijack for cargo theft':
              i = 2;
              break;
            case 'kidnapping':
              i = 1;
              break;
            case 'robbery':
              i = 0;
              break;
              // case 'suspicious activity':
              //   i = 7;
              //   break;
            case 'unarmed robbery':
              i = 0;
              break;
            default:
              // console.log('error building piracy attack type:');
              // console.log('[' + d.category + ']');
          }
          return incidents[i];
        });

      //  console.log(filtered);
      var rolled = d3.nest()
        .key(function(d) {
          return d.category
        })
        .rollup(function(v) {
          return v.length
        })
        .entries(filtered);

    //  console.log(rolled);

      var svg = d3.select('#piracy-incidents-svg'),
        radius = Math.min(width, height) / 4;
    //    console.log('r', radius);

      var pieG = svg.append("g")
        .classed('pie-g gog-incidents-pie ', true)
        .attr("transform", "translate(" + (radius) + "," + (radius) + ")");

      var pie = d3.pie()
        .sort(null)
        .value(function(d) {
        //  console.log(d);
          return d.value;
        });

      var pathPie = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

      var labelPie = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);


      var arc = pieG.selectAll(".arc")
        .data(pie(rolled))
        .enter().append("g")
        .attr("class", function (d, i) {
          var cat = d.data.key.split(' ')[0].toLowerCase();

          return "arc pie-segment-" + cat;
        });

      arc.append("path")
        .attr("d", pathPie)
        .attr("fill", function(d,i) {
          return incidentsColor[i];
        })
        .on('mouseenter', function (d, i) {

          d3.select(this.parentNode).moveToFront();

          d3.select(this)
            .style('stroke', 'white')
            .style('stroke-width', '3px');
          //
          // d3.select('#pie-label-' + i)
          //   .classed('invisible', false);

          d3.selectAll('.incident-' + d.data.key.split(' ')[0].toLowerCase())
            .moveToFront()
          //  .transition().duration(100)
            .style('r', 4)
            .style('opacity', 1)
            .style('stroke-width', '1px')
            .style('stroke', 'white');

        })
        .on('mouseleave', function (d,i) {
          d3.select(this)
            .style('stroke', null)
            .style('stroke-width', null);

          d3.select('#pie-label-' + i)
            .classed('invisible', true);

          d3.selectAll('.incident-' + d.data.key.split(' ')[0].toLowerCase())
          //  .moveToFront()
            .style('r', 3)
            .style('opacity', 0.5)
            .style('stroke-width', null)
            .style('stroke', null);

        });

      svg.append("g")
        .append('text')
        .attr('id', function (d, i) {
          return 'pie-label-' + i;
        })
        .classed('pie-segment-label ', true)
        .attr("transform", function(d) {
          console.log('label', labelPie.centroid(d));
          var pos = labelPie.centroid(d);
          pos[0] = pos[0] - 50;
          return "translate(" + pos + ")";
        })
        .attr("dy", "0.35em")
        .text(function(d, i) {
          console.log(d);
          return d.data.key;
        });

      // var pieChartLabel = pieG.append('text')
      //   .attr('id', 'gog-incidents-pie-label')
      //   .classed('pie-chart-label', true)
      //   .attr('transform', 'translate(' + (radius * -1) + ',' + (radius * -1 - 30) +')');
      //
      //   pieChartLabel.append('tspan')
      //     .attr('x', 0)
      //     .attr('dy', '0em')
      //     .text('Piracy Incidents');
      //   pieChartLabel.append('tspan')
      //     .attr('x', 0)
      //     .attr('dy', '1.5em')
      //     .text('by Type');

    });



  },
  cards: [
    { // Card 0
      title: 'Piracy and Armed Robbery',
      menu: 'Piracy and Armed Robbery',
      metadata: {
        owner: 'Maisie Pigeon',
        description: 'Card will introduce the issue.'
      },
      map: {
        type: 'continuous',
        path: '../../data/piracy/piracy-incidents.csv',
        scale: [],
        classes: '',
        translate: [],
        tooltip: true,
        legend: 'Piracy and Armed Robbery Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          updatePointer(tooltipVal);
          return "Piracy and Armed Robbery:<br />" + tooltipVal + " / 100";

        },
        //    extent: [[27,-26],[94,30]],
        //  highlights: ,
        load: function(index, file) { // ### *** This only should be for the first card ...

          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);


        },
        switch: function(index) {

          choropleth(index, 1, 'index');

        }
      },
      els: [{
          tag: 'h1',
          text: 'Piracy and Armed Robbery',
        },
        // {tag: 'indexTable'
        // },
        // { tag: 'caption',
        //   text: 'Note: scores are rounded to the nearest whole number.'
        // },
        {
          tag: 'caption',
          text: 'An evolving threat on both coasts'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Dots represent known piracy and armed robbery incidents in 2016. <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
        // },
        {
          tag: 'p',
          html: 'Though terrorism is a growing concern in some regions, the most significant challenge to effective maritime governance and security across sub-Saharan Africa is piracy and armed robbery at sea. Piracy and armed robbery are distinguished by geography. Attacks beyond a state’s territorial sea are classified as piracy, those within are armed robbery. In either case, these crimes endanger seafarers, threaten commerce, fund violent actors, and enable transnational criminal networks. The piracy and armed robbery score measures a country’s proximity to piracy and armed robbery incidents using data from Oceans Beyond Piracy’s annual State of Piracy report.'
        },
        {
          tag: 'h2',
          text: 'Piracy & Armed Robbery and related issues'
        },
        {
          tag: 'img',
          src: '../../assets/piracy/piracy-coin-cloud.png',
          alt: 'Coin Cloud - Piracy and related issues ' // ###ks have to put x img here
          //caption: 'al estimate.'
        },
        {
          tag: 'p',
          html: 'High scores for rule of law and coastal welfare are related to low incidence of piracy and armed robbery. Waters with the least piracy and armed robbery also have the highest fisheries scores.'
        },
        {
          tag: 'p',
          html: 'This section is divided into four parts. The first will discuss the three primary models of piracy: kidnap for ransom, hijacking for cargo theft, and robbery. The second and third will provide overviews of violence at sea in the Gulf of Guinea and the Horn of Africa, respectively. Finally, the section concludes with a summary of the methodology.'
        },
        // {
        //   tag: 'img',
        //   src: '../../assets/piracy/piracy_models-01.png',
        // },
        // {
        //   tag: 'h3',
        //   html: 'Kidnap for Ransom'
        // },
        // {
        //   tag: 'p',
        //   html: 'In kidnap-for-ransom attacks, perpetrators aim to capture a vessel and its crew and hold them— sometimes onshore—until a ransom payment is received. Historically, kidnap-for-ransom attacks are most closely associated with East African pirate groups, but a considerable increase in the number of these attacks was observed in West Africa in 2016.<sup>1</sup>'
        // },
        // {
        //   tag: 'p',
        //   html: 'Kidnapping for ransom entails less risk to the criminal groups than some of the other models of piracy and can result in substantial returns to the perpetrators. The rise in attacks of this kind is clearly a troubling development as kidnappings typically involve greater violence to the crews held hostage.'
        // },
        // {
        //   tag: 'p',
        //   html: 'Some regional variations of this model exist: in East Africa, pirate groups generally take the entire crew and their vessel hostage, whereas in West Africa, kidnappers tend to target high-ranking members of the crew, such as the captain or other officers. The durations of the kidnappings also vary; West African kidnappers normally only hold their hostages for a few weeks, though the victims are often subjected to considerable amounts of cruel treatment in that time.'
        // },
        // {
        //   tag: 'h3',
        //   html: 'Hijacking for Cargo Theft'
        // },
        // {
        //   tag: 'p',
        //   html: 'Hijacking for cargo theft entails perpetrators attacking a tanker and siphoning its oil while the crew is temporarily held captive onboard. Typically, the oil is then sold through black market channels. This form of piracy has been especially prevalent in the Gulf of Guinea.'
        // },
        // {
        //   tag: 'h3',
        //   html: 'Robberies'
        // },
        // {
        //   tag: 'p',
        //   html: 'Robberies occur when perpetrators steal ship stores, equipment, and personal effects from the crew. Robberies of this kind most often take place in port or at anchorage and differ from kidnappings in that profits come from the sale of stolen goods rather than the ransoming of a ship, its crew, or its cargo.'
        // },
        // {
        //   tag: 'p',
        //   html: 'As with other crimes perpetrated at sea, piracy and armed robbery are quite challenging to address. To date in West Africa, no prosecutions for piracy or armed robbery have occurred. This is further complicated by the fact that vast underreporting of this set of crimes is suspected because there are a multitude of disincentives to reporting, meaning that the full scope of the problem is not yet understood.'
        // },
        {
          tag: 'links',
          items: [{
            org: '<sup>1</sup> Pigeon, Maisie et al., “State of Maritime Piracy 2016,” 3 May 2017,',
            url: 'http://oceansbeyondpiracy.org/reports/sop'
          }, ]
        }
      ] // end of els array
    }, // End of first element of cards object
    // { // Card 1
    //   title: 'Re-emergence in Somalia?',
    //   menu: 'Re-emergence in Somalia?',
    //   metadata: {
    //     owner: 'Maisie Pigeon',
    //     description: 'Feature Somali Waters report, talk about recent uptick in Somali piracy.'
    //   },
    //   map: {
    //     path: '../../data/piracy/piracy-2017-incidents.csv',
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     extent: [
    //       [43, -6],
    //       [68, 22]
    //     ],
    //     //  highlights: ,
    //     load: function(index, file) { // ### *** This only should be for the first card ...
    //       var layer = 'card-' + index + '-layer';
    //
    //       d3.csv(file, function(incidents) {
    //         incidents.forEach(function(d) {
    //           d.lat = +d.lat;
    //           d.lon = +d.lon;
    //         });
    //
    //         var incidentsLayer = mapg.append('g')
    //           .classed('card-layer piracy-2017-incidents invisible ' + layer, true);
    //
    //         incidentsLayer.selectAll('circle')
    //           .data(incidents).enter()
    //           .append('circle')
    //           .attr('cx', function(d) {
    //             return projection([d.lon, d.lat])[0];
    //           })
    //           .attr('cy', function(d) {
    //             return projection([d.lon, d.lat])[1];
    //           })
    //           .attr('r', '1.5px')
    //           .attr('fill', function() {
    //             return rampColor(0.2);
    //           })
    //           .attr('stroke', function() {
    //             return rampColor(1);
    //           })
    //           .attr('class', function(d) {
    //             return 'a' + d.id
    //           })
    //           .classed('piracy-2017-incident', true);
    //
    //       });
    //     },
    //     switch: function(index) {
    //       d3.selectAll('.card' + index + '-layer')
    //         .classed('invisible', false);
    //     }
    //   },
    //   els: [
    //
    //     {
    //       tag: 'h1',
    //       text: 'Re-emergence in Somalia?'
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'An unusually active 2017'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Vessels hijacked in 2017. <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
    //     },
    //
    //     {
    //       tag: 'p',
    //       html: 'In response to the piracy threat, the international community spent billions of dollars to protect vessels transiting the High Risk Area in the Western Indian Ocean: a number of international navies deployed to the region, East African judicial systems absorbed much of the impact of piracy trials, and merchant vessels began to apply vessel self-protection measures, including re-routing around or increasing speeds through the High Risk Area.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/piracy/ITS_espero_escorts_aris-13.jpg', // This should be on the Stable Seas Deck - comments
    //       alt: 'ITS Espero escorts Aris-13 after hijacking incident. Photo: EUNAVFOR',
    //       caption: ' ITS Espero escorts Aris-13 after hijacking incident. Photo: EUNAVFOR'
    //     }, {
    //       tag: 'p',
    //       html: 'At its peak, piracy off the coast of Somalia posed a major threat to international shipping traffic transiting the Western Indian Ocean region. Between 2008 and 2012, thousands of seafarers and their vessels were taken hostage by pirate groups and held in miserable conditions, sometimes for years at a time.'
    //     },
    //
    //     // { tag: private <a href="http://oceansbeyondpiracy.org/sites/default/files/attachments/Privately_Contracted_Armed_Maritime_Security_IssuePaper.pdf" target="_blank"></a>
    //     //   html: 'With the decrease in acts of piracy against merchant vessels came an unexpected boost for the pirates: the international community’s perception of risk declined. Some naval mandates to address piracy were not renewed beyond 2016, removing naval forces from the region, and many vessels no longer employ vessel self-protection measures with the stringency observed during the peak of piracy, opening a window of opportunity for pirate groups. Our Piracy and Armed Robbery Scores, which show activity in the 2016 calendar year, reflect the final period before a sudden change.'
    //     // },
    //     {
    //       tag: 'p',
    //       html: 'In the spring of 2017, after almost five years without a successful attack on a merchant vessel, pirates hijacked <em>Aris-13</em> and its crew off the coast of Somalia and held them for three days. In the weeks that followed, pirate groups operating off the coast of Somalia hijacked four additional vessels.',
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Calling the incidents in the spring of 2017 a “re-emergence” is a bit of a misnomer. While no merchant vessels were hijacked between 2012 and 2017, pirate groups took a number of smaller, more vulnerable vessels, demonstrating their continued intention to hijack ships and their crews. Several fishing dhows and their crews were captured during this period, including <em>Siraj</em>, crewmembers of which remain in captivity two and a half years after their initial capture.',
    //     }
    //   ] // end of els array
    // },
    { // Card 1
      title: 'Three Models of Piracy',
      menu: 'Three Models of Piracy',
      metadata: {
        owner: 'Maisie Pigeon',
        description: 'Feature Somali Waters report, talk about recent uptick in Somali piracy.'
      },
      map: {
        type: 'continuous',
        path: '../../data/piracy/piracy-2017-incidents.csv',
        scale: [],
        classes: '',
        translate: [],
        tooltip: true,
        legend: 'Piracy and Armed Robbery Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          updatePointer(tooltipVal);
          return "Piracy and Armed Robbery:<br />" + tooltipVal + " / 100";

        },
        load: function(index, file) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';
          d3.select('.piracy-incidents')
            .classed(layer, true);
          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'index');

          d3.selectAll('.card' + index + '-layer')
            .classed('invisible', false);
        }
      },
      els: [

        {
          tag: 'h1',
          text: 'Three Models of Piracy'
        },
        {
          tag: 'caption',
          text: 'Kidnapping, robbery, hijacking'
        },
        {
          tag: 'p',
          html: 'As with other crimes perpetrated at sea, piracy and armed robbery are challenging to address. This is compounded by disincentives to reporting that have led to massive underreporting, such that the scope of the problem is not fully understood. Regardless of the true scale of piracy and armed robbery at sea, there are three dominant models for successful attacks.'
        },
        {
          tag: 'img',
          src: '../../assets/piracy/piracy_models-01.png',
          alt: 'Models of maritime piracy' // ###ks have to put x img here
          //caption: 'al estimate.'
        },
        {
          tag: 'h3',
          html: 'Kidnap for Ransom'
        },
        {
          tag: 'p',
          html: 'In kidnap for ransom attacks, perpetrators aim to capture a vessel and its crew and hold them— sometimes onshore—until a ransom payment is received. Historically, kidnap for ransom attacks are most closely associated with East African pirate groups, but a considerable increase in the number of these attacks was observed in West Africa in 2016.'
        },
        {
          tag: 'p',
          html: 'Some regional variations of this model exist. In East Africa, pirate groups generally take the entire crew and their vessel hostage. In West Africa, kidnappers tend to target high-ranking members of the crew, such as the captain or other officers. These crew members are then removed from the vessel and held onshore. The duration of captivity also varies. West African kidnappers typically hold their hostages between two and four weeks, compared to months or years in East Africa. In either case, the victims are subjected to considerable amounts of cruel treatment.'
        },
        {
          tag: 'h3',
          html: 'Hijacking for Cargo Theft'
        },
        {
          tag: 'p',
          html: 'Hijacking for cargo theft entails perpetrators attacking a tanker and siphoning its oil while the crew is temporarily held captive onboard. The oil is then sold through black market channels. This form of piracy has been especially prevalent in the Gulf of Guinea, though the rise in kidnap for ransom attacks has corresponded with a decline in hijackings for cargo theft.'
        },
        {
          tag: 'h3',
          html: 'Robbery'
        },
        {
          tag: 'p',
          html: 'Robberies occur when perpetrators board a vessel and steal ship stores, equipment, and/or personal effects from the crew. They most often take place in port or at anchorage and differ from kidnappings in that profits come from the sale of stolen goods rather than the ransoming of a ship, its crew or cargo.'
        }
        // {
        //   tag: 'caption',
        //   text: 'An unusually active 2017'
        // },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Vessels hijacked in 2017. <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
        // },
        //
        // {
        //   tag: 'p',
        //   html: 'In response to the piracy threat, the international community spent billions of dollars to protect vessels transiting the High Risk Area in the Western Indian Ocean: a number of international navies deployed to the region, East African judicial systems absorbed much of the impact of piracy trials, and merchant vessels began to apply vessel self-protection measures, including re-routing around or increasing speeds through the High Risk Area.'
        // },
        // {
        //   tag: 'img',
        //   src: '../../assets/piracy/ITS_espero_escorts_aris-13.jpg', // This should be on the Stable Seas Deck - comments
        //   alt: 'ITS Espero escorts Aris-13 after hijacking incident. Photo: EUNAVFOR',
        //   caption: ' ITS Espero escorts Aris-13 after hijacking incident. Photo: EUNAVFOR'
        // }, {
        //   tag: 'p',
        //   html: 'At its peak, piracy off the coast of Somalia posed a major threat to international shipping traffic transiting the Western Indian Ocean region. Between 2008 and 2012, thousands of seafarers and their vessels were taken hostage by pirate groups and held in miserable conditions, sometimes for years at a time.'
        // },
        //
        // // { tag: private <a href="http://oceansbeyondpiracy.org/sites/default/files/attachments/Privately_Contracted_Armed_Maritime_Security_IssuePaper.pdf" target="_blank"></a>
        // //   html: 'With the decrease in acts of piracy against merchant vessels came an unexpected boost for the pirates: the international community’s perception of risk declined. Some naval mandates to address piracy were not renewed beyond 2016, removing naval forces from the region, and many vessels no longer employ vessel self-protection measures with the stringency observed during the peak of piracy, opening a window of opportunity for pirate groups. Our Piracy and Armed Robbery Scores, which show activity in the 2016 calendar year, reflect the final period before a sudden change.'
        // // },
        // {
        //   tag: 'p',
        //   html: 'In the spring of 2017, after almost five years without a successful attack on a merchant vessel, pirates hijacked <em>Aris-13</em> and its crew off the coast of Somalia and held them for three days. In the weeks that followed, pirate groups operating off the coast of Somalia hijacked four additional vessels.',
        // },
        // {
        //   tag: 'p',
        //   html: 'Calling the incidents in the spring of 2017 a “re-emergence” is a bit of a misnomer. While no merchant vessels were hijacked between 2012 and 2017, pirate groups took a number of smaller, more vulnerable vessels, demonstrating their continued intention to hijack ships and their crews. Several fishing dhows and their crews were captured during this period, including <em>Siraj</em>, crewmembers of which remain in captivity two and a half years after their initial capture.',
        // }
      ] // end of els array
    },
    // { // Card 2
    //   title: 'Counter-Piracy',
    //   menu: 'Counter-Piracy',
    //   metadata: {
    //     owner: 'Kelsey Soeth',
    //     description: 'Highlight international efforts to reduce piracy, but talk to Jay to avoid too much overlap.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     //  highlights: ,
    //     load: function(index, file) { // ### *** This only should be for the first card ...
    //       var layer = 'card-' + index + '-layer';
    //       d3.select('.card-eez-layer')
    //         .classed(layer, true);
    //       // Class loaded layer with card-0-layer to enable switch() method
    //
    //       //.classed(layer, true);
    //     },
    //     switch: function(index) {
    //       // d3.selectAll('.card' + index + '-layer')
    //       //   .classed('invisible', false);
    //
    //       // Need to review these highlights with Ben !!
    //       var highlights = ['SOM', 'DJI', 'SYC', 'KEN', 'MDG', 'TZA', 'MUS', 'COM', 'ZAF', 'MOZ', 'COG', 'COD', 'NGA', 'TGO', 'CMR', 'GHA', 'SLE', 'SEN', 'CIV', 'GAB', 'GIN', 'GNB', 'GNQ', 'BEN', 'LBR', 'GMB', 'AGO', 'NAM', 'CPV'];
    //
    //       highlights.forEach(function(iso3, i) {
    //         d3.selectAll('.eez.' + iso3)
    //           .classed('active', true)
    //           .transition().delay(10 * i)
    //           .style('stroke', rampColor(1));
    //
    //         d3.selectAll('.country.' + iso3)
    //           .classed('active', true)
    //           .transition().delay(10 * i)
    //           .style('fill', rampColor(0.5))
    //           .style('stroke', rampColor(1));
    //       })
    //     }
    //   },
    //
    //   els: [{
    //       tag: 'h1',
    //       text: 'Counter-Piracy',
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'International efforts to address piracy off Africa\’s coasts'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Highlights represent sub-Saharan countries with ongoing maritime capacity-building projects. <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The unanimous adoption of UN Security Council Resolution 1851 in 2008 resulted in the formation of the Contact Group on Piracy off the Coast of Somalia (CGPCS) to facilitate the discussion and coordination of actions among states and organizations to suppress Somali piracy. The resolution called for participants to cooperate in the fight against piracy and armed robbery at sea off the Somali coast by deploying naval vessels and seizing boats and arms used in the commission of attacks.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'More than 60 countries and organizations have joined the CGPCS, and their accomplishments include facilitation of the operational coordination of an unprecedented international naval effort from more than 30 countries; the creation of partnerships with the shipping industry to improve and promote Best Management Practices that merchant ships and crews can take to avoid, deter, delay, and counter pirate attacks; and the strengthening of regional capacity to counter piracy.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/piracy/Togolese_PM_Dussey_cgpcs.jpg',
    //       alt: 'Togolese Prime Minister Robert Dussey speaks at a CGPCS meeting. ###Ask Maisie for photo credit',
    //       caption: 'Togolese Prime Minister Robert Dussey speaks at a CGPCS meeting. Photo credit: Jérôme Michelet'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Another UN initiative, the United Nations Office on Drugs and Crime’s Maritime Crime Programme, supports a number of counter-piracy causes with a particular focus on the provision of a regional criminal justice response. The International Police Organization is also involved in counter-piracy efforts; the INTERPOL Maritime Piracy Task Force utilizes a three-pronged approach to countering maritime piracy through the improvement of evidence collection, facilitation of data exchange, and the provision of support for regional capabilities.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The EU has also become active by partnering with the UN on the Program to Promote Regional Maritime Security (MASE). Active from 2012 to 2018, the objective of MASE is to enhance maritime security in the eastern and southern Africa and Indian Ocean regions.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'In 2012, the EU launched EUCAP Nestor, a civilian mission which assisted host countries in the Horn of Africa with developing self-sustaining capacity for enhancement of maritime security. In 2015, EUCAP pivoted to focus on Somalia. Today, EUCAP Somalia contributes to establishing and building the capacity of maritime civilian law enforcement capabilities. The EU also launched the Critical Maritime Routes program in 2010 with two main objectives: to secure the sea lanes of communication and protect the economy of the EU.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The latest iteration of this initiative, CRIMARIO, goes beyond these initial objectives and aims to enhance maritime security and safety in the wider Indian Ocean region by supporting coastal countries in the establishment of maritime situational awareness, which is defined as the sharing and fusion of data from various maritime sources to achieve an understanding of the maritime domain in order to enable the improvement of maritime security and safety and the maritime environment.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/piracy/EUCAP_Nestor_Bosasso_port_police.jpg',
    //       alt: 'EUCAP Nestor working with Bosasso Port Police for logistical assistance. Photo: EUNAVFOR',
    //       caption: 'EUCAP Nestor working with Bosasso Port Police for logistical assistance. Photo: EUNAVFOR'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The EU’s support of maritime security in African waters extends to the Gulf of Guinea, where it supported the Critical Maritime Routes in the Gulf of Guinea project (CRIMGO). In 2016, the EU and several West African coastal countries launched the Gulf of Guinea Inter-regional Network (GoGIN) to replace CRIMGO. GoGIN aims to facilitate cooperation between the 19 Gulf of Guinea coastal countries from Senegal to Angola by setting up an effective and technically-efficient network for the exchange of information to improve and coordinate maritime security strategy in the region.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The international community has come together in a multitude of venues, from the UN Security Council to regional capacity-building programs, to combat piracy in the Horn of Africa and the Gulf of Guinea. Throughout the world, nations are working in tandem to counter threats to their maritime security in order to ensure safe passage on the high seas and foster economic development.'
    //     }
    //   ] // end of els array
    // },
    { // Card 2
      title: 'The Gulf of Guinea',
      menu: 'Gulf of Guinea',
      metadata: {
        owner: 'Kelsey Soeth',
        description: 'Track rise of piracy in GoG, feature State of Piracy report.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: '',
        translate: [],
        extent: [
          [-20, -34],
          [46, 28]
        ],
        highlights: [],
        tooltip: false,
        legend: 'Piracy and Armed Robbery Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          updatePointer(tooltipVal);
          return "Piracy and Armed Robbery:<br />" + tooltipVal + " / 100";

        },
        load: function(index, file) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';
          //  console.log('load load load', layer);

          d3.select('piracy-incidents')
            .classed(layer, true);
          d3.select('.card-eez-layer')
            .classed(layer, true);
          // Load up point map GIS layer - geojson

          // Class loaded layer with layer to enable switch() method

          //.classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'index');


          d3.selectAll('.card' + index + '-layer')
            .classed('invisible', false)

          // setTimeout( function () {
          //   d3.select('.gog-incidents-pie')
          //   .classed('invisible', false);
          // }, 1500);

        }
      },
      els: [{
          tag: 'h1',
          text: 'Gulf of Guinea',
        },
        {
          tag: 'caption',
          text: 'The Global Hotspot for Piracy, Armed Robbery, and Extractives Crime'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Known piracy and armed robbery incidents during 2016. <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
        // },
        {
          tag: 'p',
          html: 'The Gulf of Guinea has earned its reputation for being the most dangerous area of transit in the world for seafarers. Since 2013, attacks in West Africa have occurred at much higher frequency than in East Africa. There were 100 estimated attacks in the Gulf of Guinea in 2013 compared to 23 off the Somali coast. In 2016, 95 attacks were reported in the Gulf of Guinea compared to 27 attacks in the Horn of Africa. This difference is particularly significant in terms of the human cost. Nearly 1,400 more seafarers were subjected to attacks in the Gulf of Guinea than off the coast of Somalia.3 While the number of attacks has remained high in recent years, the model of piracy has gradually shifted.'
        },
        {
          tag: 'h2',
          html:'Piracy Incidents by type, Gulf of Guinea'
        },
        {
          tag: 'svg',
          id: 'piracy-incidents-svg'
        },
        // {
        //   tag: 'img',
        //   src: '../../assets/piracy/piracy_costs-01.png', // This should be on the Stable Seas Deck - comments
        // },
        {
          tag: 'p',
          html: 'The Niger Delta has an abundance of oil wealth, and criminal networks have historically turned to hijacking for cargo theft for a cut of the region’s riches. This takes place when a vessel is commandeered, its tracking devices disabled, its crew held captive, and its cargo siphoned off onto a smaller ship and sold on the black market. This process is time-consuming and logistically complex. As naval activity has increased since 2013, and Nigerian president Muhammadu Buhari made cracking down on oil theft a hallmark of his administration since 2015, the number of hijackings for cargo theft has fallen drastically while kidnap for ransom attacks, a much faster and less resource-intensive crime, have been on the rise.'
        },
        // {
        //   tag: 'img',
        //   src: '../../assets/piracy/piracy_incidents_west_africa-01.png', // This should be on the Stable Seas Deck - comments
        // },
        {
          tag: 'img',
          src: '../../assets/piracy/hijacking_oil_theft_model-01.png',
          alt: 'The Hijacking for cargo theft model' // ###ks have to put x img here
          //caption: 'al estimate.'
        },
        {
          tag: 'p',
          html: 'In 2014, there were 5 incidents of hijacking for cargo theft and 15 kidnap for ransom attacks. By 2016, hijacking for cargo theft incidents had dropped by 80 percent while kidnap for ransom attacks rose by nearly 30 percent from 2015. Though captured crew members spend relatively little time in captivity compared to East Africa, the high turnover of hostages and the frequency of armed attacks results in a high level of violence.'
        },
        {
          tag: 'p',
          html: 'While piracy attacks have shifted away from hijacking for cargo theft to kidnapping for ransom, oil theft in the Delta has not disappeared. Well-armed rebel groups successfully attacked several high-value, strategic targets in 2016, including Shell’s Forcados oil pipeline, Chevron’s Okan platform, and the largest export terminal in Nigeria, ExxonMobil’s Qua Iboe. These incidents reflect continued interest in disrupting the business of foreign oil companies through illicit activities.'
        },
        // {
        //   tag: 'p',
        //   html: 'In the Gulf of Guinea, the model of kidnap for ransom is less complicated than in the Horn of Africa; pirates tend to capture only high-value crew members and take them ashore, abandoning the vessel. The hostages are usually released after two to four weeks. While captured crew members spend relatively little time in captivity, the high turnover of hostages and the frequency of armed attacks results in a high level of violence.'
        // },
        // {
        //   tag: 'p',
        //   html: 'The international community has been tremendously successful in reducing piracy off the Somali coast, but piracy in the Gulf of Guinea is proving more difficult. Through actions formalized by UN Resolution 2446, Somali waters are patrolled by multiple international navies. The littoral states of the Gulf of Guinea are all sovereign nations with the rights to patrol their own territorial waters, but naval capacity is limited and no UN resolution exists for countering piracy there.'
        // },
        // {
        //   tag: 'p',
        //   html: 'Private armed security teams proved to be a powerful deterrent to Somali pirates, but these teams are prohibited by law from entering Nigeria’s territorial waters (where two-thirds of piracy attacks in the Gulf of Guinea occur). These challenges all contributed to the rise of piracy in the Gulf of Guinea, and they now contribute to the extraordinary difficulty of combating it.'
        // },
        {
          tag: 'links',
          items: [{
              org: '<sup>2</sup> Madsen, Jens Vestergard, et al. “State of Maritime Piracy 2013,” 8 May 2017,',
              url: 'http://oceansbeyondpiracy.org/sites/default/files/attachments/SoP2013-2PagerDigital_0.pdf'
            },
            {
              org: '<sup>3</sup> Pigeon, Maisie et al., “State of Maritime Piracy 2016,” 3 May 2017,',
              url: 'http://oceansbeyondpiracy.org/reports/sop'
            },
          ]
        }
      ] // end of els array
    },
    // { // Card 4
    //   title: 'Hijacking for Cargo Theft',
    //   menu: 'Hijacking for Cargo Theft',
    //   metadata: {
    //     owner: 'Kelsey Soeth',
    //     description: 'Focus mostly on Gulf of Guinea.'
    //   },
    //   map: {
    //     path: '../../data/piracy/bunkering-incidents.csv',
    //     scale: [],
    //     classes: '',
    //     extent: [
    //       [-12, -19],
    //       [50, 17]
    //     ],
    //     translate: [],
    //     highlights: [],
    //     tooltip: true,
    //     units: {
    //       text: 'xo units',
    //       multiplier: 100
    //     },
    //     load: function(index, file) { // ### *** This only should be for the first card ...
    //       var layer = 'card-' + index + '-layer';
    //
    //       d3.csv(file, function(incidents) {
    //         incidents.forEach(function(d) {
    //           d.lat = +d.lat;
    //           d.lon = +d.lon;
    //         });
    //
    //         var incidentsLayer = mapg.append('g')
    //           .classed('card-layer bunkering-incidents invisible ' + layer, true);
    //
    //         incidentsLayer.selectAll('circle')
    //           .data(incidents).enter()
    //           .append('circle')
    //           .attr('cx', function(d) {
    //             return projection([d.lon, d.lat])[0];
    //           })
    //           .attr('cy', function(d) {
    //             return projection([d.lon, d.lat])[1];
    //           })
    //           .attr('r', '3px')
    //           .attr('fill', function() {
    //             return rampColor(0.2);
    //           })
    //           .attr('stroke', function() {
    //             return rampColor(1);
    //           })
    //           .classed('bunkering-incident', true);
    //
    //       });
    //
    //     },
    //     switch: function(index) {
    //       d3.selectAll('.card-' + index + '-layer')
    //         .classed('invisible', false);
    //     }
    //   },
    //
    //   els: [{
    //       tag: 'h1',
    //       text: 'Hijacking for Cargo Theft',
    //     },
    //     {
    //       tag: 'caption',
    //       html: 'Taking Advantage of Resource Wealth'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Known incidents of hijacking for cargo theft (2013-2016). <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'As global oil prices rose above $100 a barrel in the early 2000s, oil theft became a very lucrative business. In the Niger Delta, a region both marred by poverty and blessed by vast oil reserves. Though the oil boom has earned the Nigerian government billions of dollars since operations began in the 1980s, the riches have failed to trickle down to local communities. Furthermore, the environmental degradation caused by oil companies operating under corruption and weak government regulation has spoiled traditional industries such as farming and fishing. With those opportunities gone and unemployment persistently high, stealing crude oil is an attractive alternative.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/piracy/hijacking_oil_theft_model-01.png', // This should be on the Stable Seas Deck - comments
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Hydrocarbon theft takes many forms, from small-scale theft and illegal refining to theft at export terminals, as well as piracy and oil tanker hijackings.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The Niger Delta’s swamps and shallow waters are crisscrossed in a grid-like pattern by oil pipelines linking the region’s 22 petroleum storage depots and 4 refineries.<sup>4</sup>  This infrastructure is most frequently targeted for theft by the tapping of oil pipelines or wellheads; much of it is hidden from inspectors as it takes place underwater. This method diverts a percentage of the oil flow, and the oil is then pumped onto waiting vessels. While approximately 25 percent of the stolen oil is refined in artisanal refineries and sold within the delta, 75 percent is transported to coastal tankers for export to the global market. “White collar” oil theft occurs at export terminals. Excess oil products beyond the amount licensed are transferred to tankers through manipulation of meters and forgery of bills of lading.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Hijacking for hydrocarbons occurs when a vessel is commandeered, its tracking devices are disabled, and its cargo is siphoned off onto a smaller ship in an isolated location and sold on the black market. This process can take days and the crew is often held captive for the duration. Since 2013, the number of attacks on oil tankers in the Gulf of Guinea has fallen drastically. This can be attributed to both the global drop in oil prices and the significantly increased naval activity in the region.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/piracy/oil_attacks_niger_delta.jpg', // This should be on the Stable Seas Deck - comments
    //       alt: 'One of the armed militant groups attacking oil installations in the Niger Delta. Photo: Pius Utomi Ekpei/AFP/Getty Images',
    //       caption: 'One of the armed militant groups attacking oil installations in the Niger Delta. Photo: Pius Utomi Ekpei/AFP/Getty Images'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'A significant amount of oil theft in the delta can be attributed to regional rebel groups. Their stated goal is to force the foreign oil companies out in favor of turning control of oil operations over to local people. They are well-armed with machine guns, rocket launchers, and speedboats for attacks on offshore oil infrastructure. In 2016, successful attacks on high-value, strategic targets by rebel groups included Shell’s Forcados oil pipeline, Chevron’s Okan platform, and the largest export terminal in Nigeria, ExxonMobil’s Qua Iboe.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Continued low prices have discouraged the hijacking and bunkering of fuel tankers by reducing profits. Nigerian president Muhammadu Buhari has also made cracking down on oil theft a hallmark of his administration since 2015. In light of these factors, illicit networks have abandoned these activities in favor of kidnapping for ransom. However, as oil prices rise in 2017, pirate groups may return to the lucrative activities of bunkering and oil theft.'
    //     },
    //     {
    //       tag: 'links',
    //       items: [{
    //         org: '<sup>4</sup> West Sands Advisory Intel, “Nigeria\'s Oil Theft Epidemic,” OilPrice.com, Oil Price, 6 June 2017,',
    //         url: 'http://oilprice.com/Energy/Crude-Oil/Nigerias-Oil-Theft-Epidemic.html'
    //       }, ]
    //     }
    //   ] // end of els array
    // },
    { // Card 5
      title: 'The Horn of Africa and the Bab el-Mandeb',
      menu: 'HOA & the Bab el-Mandeb',
      metadata: {
        owner: 'Maisie Pigeon',
        description: 'Be sensitive about how we describe emerging threats of terrorism in the Red Sea and Gulf of Aden.'
      },
      map: {
        scale: [],
        classes: '',
        path: '../../data/piracy/politically-motivated-incidents.csv',
        translate: [],
        extent: [
          [30, 8],
          [81, 6]
        ],
        //extent: [[45,24],[88,-15]],
        highlights: [],
        tooltip: false,
        load: function(index, file) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';

          d3.csv(file, function(incidents) {
            incidents.forEach(function(d) {
              d.lat = +d.lat;
              d.lon = +d.lon;
            });

            var incidentsLayer = mapg.append('g')
              .classed('card-layer political-piracy-incidents invisible ' + layer, true);

            incidentsLayer.selectAll('circle')
              .data(incidents).enter()
              .append('circle')
              .attr('cx', function(d) {
                return projection([d.lon, d.lat])[0];
              })
              .attr('cy', function(d) {
                return projection([d.lon, d.lat])[1];
              })
              .attr('r', '3px')
              .attr('fill', function() {
                return rampColor(0.2);
              })
              .attr('stroke', function() {
                return rampColor(1);
              })
              .classed('political-incident', true);

          });

          d3.csv('../../data/piracy/bam-terror-data.csv', function(incidents) {
            incidents.forEach(function(d) {
              d.lat = +d.lat;
              d.lon = +d.lon;
              d.count = +d.count;
            });

            var incidentsLayer = mapg.append('g')
              .classed('card-layer bam-terror-incidents invisible ' + layer, true);

            incidentsLayer.selectAll('circle')
              .data(incidents).enter()
              .append('circle')
              .attr('cx', function(d) {
                return projection([d.lon, d.lat])[0];
              })
              .attr('cy', function(d) {
                return projection([d.lon, d.lat])[1];
              })
              .attr('r', function (d) {
                return Math.sqrt(d.count) + 'px';
              })
              .attr('fill', function(d) {
                if (d.actor == 'Al-Shabaab') {
                  return colorBrew[0];
                } else if (d.actor == 'Houthi extremists (Ansar Allah)') {
                  return colorBrew[2];
                } else {
                  return colorBrew[4];
                }
              //  return themeColor(1);
              })
            //  .attr('stroke', 'black')
            //  .attr('stroke-width', 0.3)
              .style('opacity', 0.5)
              .classed('bam-terror-incident', true);

          });



        },
        switch: function(index) {
          d3.selectAll('.card-' + index + '-layer')
            .classed('invisible', false);
        }
      },
      els: [{
          tag: 'h1',
          text: 'The Horn of Africa and the Bab el-Mandeb',
        },
        // {
        //   tag: 'caption',
        //   text: '*** This all needs to be written / filled in ***'
        // },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Politically motivated maritime security incidents (2016). <br> Source: <a href="http://obp.ngo/" target="_blank">Oceans Beyond Piracy</a></em>'
        // },
        {
          tag: 'p',
          html: 'At the peak of piracy between 2008 and 2012, thousands of seafarers and their vessels were taken hostage. In response, the international community spent billions of dollars to protect vessels transiting the Western Indian Ocean: international navies deployed to the region, East African judicial systems absorbed the impact of piracy trials, and merchant vessels began to apply vessel self-protection measures, including re-routing around or increasing speeds through the High Risk Area.'
        },
        {
          tag: 'p',
          html: 'While no merchant vessels were hijacked between 2012 and 2017, pirate groups took a number of smaller, more vulnerable vessels, demonstrating their continued intention to hijack ships and their crews. In the spring of 2017, after almost five years without a successful attack on a merchant vessel, pirates hijacked Aris-13. In the weeks that followed, pirate groups operating off the coast of Somalia hijacked four additional vessels.'
        },
        {
          tag: 'p',
          html: 'Though down from its peak, piracy remains a threat around the Horn of Africa. Maritime terrorism is an emerging hazard.'
        },
        {
        //  gif: true,
          tag: 'img',
      //    videoId: 'iOrjS1qmNDk',
          src: '../../assets/piracy/bab-al-mandeb-attacks.gif'
        },
        {
          tag: 'p',
          html: 'Attacks on five vessels in the Bab el-Mandeb strait in the last quarter of 2016 raised concerns over increasing maritime instability there. The trend continued into 2017 with Oceans Beyond Piracy recording an increase in suspicious activity in the Bab el-Mandeb, including sightings of naval mines and marine-borne improvised explosive devices.'
        },
        {
          tag: 'p',
          html: 'The full extent to which these violent incidents might impact the international community has yet to be seen, but vessel traffic transiting the Gulf of Aden must continue to be vigilant.'
        },
        // {
        //   tag: 'p',
        //   html: 'The attack against HSV-2 Swift was claimed by Houthi rebels, but the majority of the incidents have gone unclaimed, despite most having originated from Houthi-held territory in Yemen. The attacks in the region are most likely attributable to spillover from the conflict in Yemen.'
        // },
        // {
        //   tag: 'p',
        //   html: 'First, many naval operations deployed to address piracy are currently winding down or have ended already: EU NAVFOR’s Operation Atalanta was extended through the end of 2018, but NATO’s Operation Ocean Shield concluded its mission at the end of 20166 leaving limited naval forces in the area available for response. Complicating this further is the fact that the Combined Maritime Forces operations in the region are the only ones with a mandate that explicitly includes combating these evolving maritime terrorism threats.7'
        // },
        // {
        //   tag: 'p',
        //   html: 'Second, the response required to counter an attack of this nature differs considerably from the response necessary to protect a vessel from a pirate attack. Oceans Beyond Piracy asks if recommendations established to counter piracy in Best Management Practices (Version 4) need to be reevaluated to fit an evolving threat, and similarly, if private security teams require training to combat an array of risks in addition to piracy.'
        // },
        // {
        //   tag: 'p',
        //   html: 'Finally, vessels may decide to re-route around the Bab el-Mandeb strait entirely in order to avoid any potential dangers—a decidedly expensive and difficult option for the shipping industry to take.'
        // },
        // {
        //   tag: 'p',
        //   html: 'The full extent to which these violent incidents might impact the international community has yet to be seen, but vessel traffic transiting the Gulf of Aden must continue to be vigilant.'
        // },
        // {
        //   gif: true,
        //   tag: 'video',
        //   videoId: 'Dscw8gv4maY',
        //   thumb: '../../assets/piracy/bab-al-mandeb-attacks.gif'
        // },
        // {
        //   tag: 'caption',
        //   html: 'Note - this is not the correct video, just wanted to indicate functionality of the gif. Try clicking on it ;) ###'
        // },
        // {
        //   tag: 'p',
        //   html: 'The attack against HSV-2 <em>Swift</em> was claimed by Houthi rebels, but the majority of the incidents have gone unclaimed, despite most having originated from Houthi-held territory in Yemen. The attacks in the region are therefore most likely attributable to spillover from the conflict in Yemen. As discussed in the <em>Stable Seas: Somali Waters</em>  report, this has myriad implications for shipping traffic in the region.' //### add hyperlink to somali waters report
        // },
        // {
        //   tag: 'p',
        //   html: 'First, many naval operations deployed to address piracy are currently winding down or have ended already: EU NAVFOR’s Operation Atalanta was extended through the end of 2018, but NATO’s Operation Ocean Shield concluded its mission at the end of 2016<sup>6</sup> leaving limited naval forces in the area available for response. Complicating this further is the fact that the Combined Maritime Forces operations in the region are the only ones with a mandate that explicitly includes combating these evolving maritime terrorism threats.<sup>7</sup>'
        // },
        // {
        //   tag: 'p',
        //   html: 'Second, the response required to counter an attack of this nature differs considerably from the response necessary to protect a vessel from a pirate attack. Oceans Beyond Piracy asks if recommendations established to counter piracy in <em>Best Management Practices (Version 4)</em> need to be reevaluated to fit an evolving threat, and similarly, if private security teams require training to combat an array of risks in addition to piracy.<sup>8</sup>'
        // },
        // {
        //   tag: 'p',
        //   html: 'Finally, vessels may decide to re-route around the Bab el-Mandeb strait entirely in order to avoid any potential dangers—a decidedly expensive and difficult option for the shipping industry to take.'
        // },
        // {
        //   tag: 'p',
        //   html: 'The full extent to which these violent incidents might impact the international community has yet to be seen, but vessel traffic transiting the Gulf of Aden must continue to be vigilant.'
        // },
        {
          tag: 'links',
          items: [{
              org: '<sup>5</sup> NYA International, “Special Advisory: Naval mines and MBIEDs off Yemen,” 19 May 2017.',
              url: 'https://www.ukpandi.com/fileadmin/uploads/uk-pi/LP%20Documents/LP_Bulletins/170519_NYA_M_Special_Advisory_Yemen.pdf'
            },
            {
              org: '<sup>6</sup> North Atlantic Treaty Organization, “NATO Concludes Successful Counter-piracy Mission,” 15 December 2016.',
              url: 'http://www.nato.int/cps/en/natohq/news_139420.htm'
            },
            {
              org: '<sup>7</sup> Combined Maritime Forces, “About CMF,” accessed 31 August 2017.',
              url: 'https://combinedmaritimeforces.com/about/'
            },
            {
              org: '<sup>7</sup> Oceans Beyond Piracy, “Addressing Maritime Insecurity in the Horn of Africa: Can the Existing Counter-Piracy Framework Help Address the Evolving Maritime Threat?” Oceans Beyond Piracy Issue Paper, accessed 29 August 2017.',
              url: 'http://oceansbeyondpiracy.org/sites/default/files/attachments/Maritime_Insecurity_HornofAfrica_Issue_Paper.pdf'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 6
      title: 'Data and Methods',
      menu: 'Data and Methods',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Card will provide basic methodology info.'
      },
      map: {
        type: 'continuous',
        path: '../../data/piracy/piracy-incidents.csv',
        scale: [],
        classes: '',
        translate: [],
        tooltip: true,
        legend: 'Piracy and Armed Robbery Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          updatePointer(tooltipVal);
          return "Piracy and Armed Robbery:<br />" + tooltipVal + " / 100";

        },
        //    extent: [[27,-26],[94,30]],
        //  highlights: ,
        load: function(index, file) { // ### *** This only should be for the first card ...

          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);


        },
        switch: function(index) {

          choropleth(index, 1, 'index');

        }
      },
      els: [{
          tag: 'h1',
          text: 'Data and Methods',
        },
        {
          tag: 'caption',
          text: 'How we created the Piracy and Armed Robbery score'
        },
        {
          tag: 'p',
          html: 'The piracy and armed robbery score is measured by the proximity of incidents to the coastline. Incidents are classified as piracy or armed robbery using the classification system of the International Maritime Organization (IMO), which relies on the definition of piracy in the United Nations Convention on the Law of the Sea (UNCLOS). According to Article 101 of UNCLOS 1982:'
        },
        {
          tag: 'p',
          html: 'Piracy consists of any of the following acts:'
        },
        {
          tag: 'p',
          classes: 'indent-1',
          html: '(a) any illegal acts of violence or detention, or any act of depredation, committed for private ends by the crew or the passengers of a private ship or a private aircraft, and directed:'
        },
        {
          tag: 'p',
          classes: 'indent-2',
          html: '(i) on the high seas, against another ship or aircraft, or  against persons or property on board such ship or aircraft;'
        },
        {
          tag: 'p',
          classes: 'indent-2',
          html: '(ii) against a ship, aircraft, persons or property in a place outside the jurisdiction of any State;',
        },
        {
          tag: 'p',
          classes: 'indent-1',
          html: '(b) any act of voluntary participation in the operation of a ship or of an aircraft with knowledge of facts making it a pirate ship or aircraft;'
        },
        {
          tag: 'p',
          classes: 'indent-1',
          html: '(c)        any act of inciting or of intentionally facilitating an act described in subparagraph (a) or (b).'
        },
        {
          tag: 'p',
          html: 'The IMO clarifies the definition of armed robbery as:'
        },
        {
          tag: 'p',
          classes: 'indent-1',

          html: '1)    Any illegal act of violence or detention or any act of depredation, or threat thereof, other than an act of piracy, committed for private ends and directed against a ship or against persons or property on board such a ship, within a State’s internal waters, archipelagic waters and territorial sea;'
        },
        {
          tag: 'p',
          classes: 'indent-1',

          html: '2)    Any act of inciting or of intentionally facilitating an act described above.'
        },
        {
          tag: 'p',
          html: 'The principal difference between piracy and armed robbery is geography. Piracy takes place in international waters, including the high seas, EEZs, and contiguous zones. Armed robbery occurs in territorial and internal waters.'
        },
        {
          tag: 'p',
          html: 'Because many attacks occur just outside a nation’s EEZ, this score is not calculated as a simple count of events within an EEZ. Rather, it measures a nation’s proximity to incidents of piracy and armed robbery.'
        },
        {
          tag: 'p',
          html: 'More details about all of these scores are available on our data page.'
        }

      ] // end of els array
    }
  ] // end of cards array
};
