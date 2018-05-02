var coastalWelfareData = {
  metadata: {
    name: '*Coastal Welfare*',
    version: '1.0.0',
    updates: true,
    /*
         here is where you write updates
         do one line per update, like
         added legend to card 3
         added citations to card 5
         input thumbnail path to card 4
         loaded point data

         */
    index: 5,
    code: 'coastalWelfare',
    path: 'coastal-welfare',
    countryData: {},
    csv: '../../data/coastal-welfare/coastalWelfare.csv',
    color: '#B89E42',
    order: -1,
    description: 'Maritime security is closely linked to the well-being of the people living in adjacent coastal areas.'
  },
  load: function(csv, callback) {

    // Not sure why loadIAcsv() isn't working here...
    loadIAcsv(csv, callback);
    // var md = issueAreaData[issueArea].metadata;
    // d3.csv(csv, function(vals) {
    //   vals.forEach(function(d) {
    //     for (key in d) {
    //       if (isNaN(d[key]) != true) {
    //         // Convert all numbers (floats and ints) to proper data type
    //         d[key] = +d[key];
    //       }
    //     }
    //     md.countryData[d.iso3] = d;
    //   });
    //   callback('internationalCooperation load csv function callback');
    // });

  },
  cards: [
    { // Card 0
      title: 'Coastal Welfare',
      menu: 'Coastal Welfare',
      metadata: {
        owner: 'Sasha Egorova',
        description: 'Overview of the sub-index.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Coastal Welfare Score',
        tooltipHTML: function (iso3) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso3].index;
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Coastal Welfare:<br />" + tooltipVal + " / 100";
        },
        load: function(index, file) {
          var layer = 'card-'+index+'-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          // This works because we classed the layer with .card-0-layer
          choropleth(index, 1, 'index');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Coastal Welfare',
        },
        {
          tag: 'caption',
          text: 'The primary driver of maritime insecurity'
        },
        {
          tag: 'p',
          html: 'Maritime security is closely linked to the well-being of the people living in adjacent coastal areas. When coastal residents suffer from violence and poverty on or near the coast, their close proximity to the sea may draw them toward illicit maritime activities like piracy, smuggling, and trafficking. Transnational criminal networks are especially likely to establish themselves along coastlines that are weakly governed and affected by <a class="internal-ref inline coastal-welfare" href="#" data-link="3">armed conflict and other forms of violence</a>. In Nigeria, Somalia, the Philippines and elsewhere, violent non-state actors operating on shore often turn to the maritime space to smuggle in <a class="illicit-trade inline" href="../../illicit-trade">arms and illicit goods</a>.The coastal welfare score measures a population’s physical and economic security, both coastal and country-wide.'
        },
        {
          tag: 'img',
          src: '../../assets/coastal-welfare/coastal-welfare-coin-cloud.png', // This should be on the Stable Seas Deck - comments
        },
        {
          tag: 'p',
          html: 'A high level of coastal welfare is closely linked to a well-developed blue economy, strong rule of law, low incidence of piracy and armed robbery, and a low level of maritime mixed migration.'
        },
        {
          tag: 'p',
          html: 'This section is divided into three parts. The first will discuss the links between conflict and physical insecurity and maritime crime. The second will explore the economic insecurity trap and how illicit maritime activities undermine coastal economies. The section concludes with a discussion of methodology.'
        },
        // Insert infographic here ###
        // { tag: 'p',
        //   html: 'For more information about how these scores are calculated, please see our <a class="internal-ref coastal-welfare inline" href="#" data-link="6">Methodology</a> page.'
        // }

      ] // end of els array

    },

    { // Card 1
      title: 'Conflict and Maritime Crime',
      menu: 'Conflict and Maritime Crime',
      metadata: {
        owner: 'Sasha Egorova',
        description: 'How maritime crime funds violent non-state actors'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: '',
        translate: [],
        // extent: [
        //   [5, 20],
        //   [111, -41]
        // ],
        path: '../../data/coastal-welfare/lethal-incidents.csv',
        highlights: [],
        tooltip: true,
        legend: 'Physical Security Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['physical_security'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Physical Security Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, file) {

          var layer = 'card-' + index + '-layer';
          d3.csv(file, function(vals) {
            vals.forEach(function(d) {
              d.lat = +d.lat;
              d.lon = +d.lon;
              d.deaths = +d.deaths;
            });

            var incidents = mapg.append('g')
              .classed('card-layer coastal-incidents invisible ' + layer, true);

            incidents.selectAll('circle')
              .data(vals)
              .enter()
              .append('circle')
              .attr('cx', function(d) {
                return projection([d.lon, d.lat])[0];
              })
              .attr('cy', function(d) {
                return projection([d.lon, d.lat])[1];
              })
              .attr('r', '2px')
              .attr('class', function(d) {
                return 'nationwide'
              });

          });

          classEEZ(layer);

          // Add legend item for violent incident

        },
        switch: function(index) {
          var layer = 'card-' + index + '-layer';
          d3.select('.' + layer)
            .classed('invisible', false);

          choropleth(index, 1, 'physical_security');

          // Reveal legend item for violent incident
        }
      },
      els: [{
          tag: 'h1',
          text: 'War and Maritime Crimes',
        },
        {
          tag: 'caption',
          text: 'Vicious cycles of violence and insecurity'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Dots represent lethal conflict incidents occurring in 2016. Gold incidents occurred within 50km of the coast. <br><a href="https://www.prio.org/Data/Armed-Conflict/UCDP-PRIO/" target="_blank">Source: UCDP/PRIO</a></em>'
        },
        {
          tag: 'p',
          html: 'Sub-Saharan Africa is among the most war-torn regions of the world. In 2016, 10 of the 30 countries in the Stable Seas Maritime Security Index were affected by civil war. A total of 1,039 armed clashes occurred in these states; 256 incidents occurred within 50 kilometers of the coast and in the vicinity of key coastal towns, ports, and other critical maritime infrastructure.'
        },
        {
          tag: 'p',
          html: 'Armed conflict and maritime crime are linked in a cycle that perpetuates violence and insecurity. Civil war and other physically violent conflicts facilitate and drive illicit maritime activities. Active conflict creates the conditions illicit networks need to flourish: low government penetration and weak control of insurgent territories, poor rule of law, proliferation of arms, and additional networks that can be tapped into to support illicit activities.'
        },
        {
          tag: 'img',
          src: '../../assets/coastal-welfare/coastal_welfare_loop-01.png', // This should be on the Stable Seas Deck - comments
        },

        {
          tag: 'p',
          html: 'Moreover, war is a great market opportunity for illicit activities. Maritime arms trade and human smuggling are especially profitable in environments affected by civil war due to the demand for arms and the volume of refugees fleeing the violence.'
        },
        {
          tag: 'p',
          html: 'Conversely, criminal activities at sea facilitate violent conflict by funding insurgent campaigns. For example, piracy and armed robbery attacks on commercial vessels are a lucrative strategy for financing militant groups in the Gulf of Guinea. Since 2008, the Movement for the Emancipation of the Niger Delta (MEND) has attacked oil infrastructure off the coast of Nigeria. These attacks prompted the government to come to the negotiation table but also financed the group’s continued existence through ransom payments and the sale of stolen oil on the black market.'
        },
        {
          tag: 'links',
          items: [{
              org: ' ### Need to add these references to the text *** <sup>8</sup> Ralph Sundberg and Erik Melander, “Introducing the UCDP Georeferenced Event Dataset,” <em>Journal of Peace Research</em> 50, no.4 (2013): 523–532; Mihai Croicu and Ralph Sundberg, “UCDP GED Codebook version 17.1,” Department of Peace and Conflict Research, Uppsala University, 2017.'
            },
            {
              org: '<sup>9</sup> Ursula Daxacker and Brandon C. Prins, “Financing Rebellion: Using Piracy to Explain and Predict Conflict Intensity in Africa and Southeast Asia,” <em>Journal of Peace Research</em> 54, no. 2 (2017): 215–230.'
            },
            {
              org: '<sup>10</sup> Ibid.'
            }
          ]
        }
        // How about internal references????? ###

      ] // end of els array
    },
    { // Card 2
      title: 'The Economic Insecurity Trap',
      menu: 'The Economic Insecurity Trap',
      metadata: {
        owner: 'Sasha Egorova',
        description: 'Feedback loop between crime and economic insecurity.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: '',
        translate: [],
        path: '',
        highlights: [],
        tooltip: true,
        legend: 'Economic Security Score',
        tooltipHTML: function (iso3) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso3].economic;
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);

          return "Economic Security Score:<br />" + tooltipVal + " / 100<br />";
        },
        load: function(index, file) {
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          //  switchMainIndex(index);

          choropleth(index, 1, 'economic');
          // var artisanalFishing = issueAreaData[issueArea].metadata.countryData;
          //
          // var values = [];
          //
          // artisanalFishing.forEach(function(row, i) {
          //   values.push(row.ia5c1);
          // });
          //
          // var max = d3.max(values),
          //   min = d3.min(values),
          //   range = max - min;
          // artisanalFishing.forEach(function(row, i) {
          //   d3.selectAll('.eez.' + row.iso3)
          //     .classed('active', true)
          //     .style('fill', function() {
          //       return rampColor(1 - ((row.ia5c1 - range) / (max - min)))
          //     })
          //
          // });
        }
      },
      els: [{
          tag: 'h1',
          text: 'The Economic Insecurity Trap',
        },
        {
          tag: 'caption',
          text: 'How maritime crime hurts local economies'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate greater artisanal fishing opportunities.<br />Source: <a href="http://www.oceanhealthindex.org/" target="_blank">Ocean Health Index</a></em>'
        // },
        {
          tag: 'p',
          html: 'Fisheries, tourism, and other maritime industries provide coastal populations with opportunities to thrive in the <a class="blue-economy inline" href="./blue-economy">legal maritime economy</a>. When such opportunities diminish or are not available, workers are more likely to join criminal networks and to exploit maritime resources through illegal means.'
        },
        {
          tag: 'p',
          html: 'The relationship between recruitment for piracy and unemployment in fisheries is a striking example. Pirates recruit from local fishing communities, among other sectors, since fishers possess the navigational knowledge, skills, and resources that pirates need to execute their attacks. Stable and abundant income opportunities in the fishing sector keep people away from criminal activity, while poor fish catches can propel more people to join pirate networks.'
        },
        {
          tag: 'img',
          src: '../../assets/coastal-welfare/al_faxti_fishing.jpg',
          alt: 'Stable income opportunities in the fishing sector keep people away from criminal activity. Photo: Al Faxti Fishing, Jean-Pierre Larroque, OEF. ',
          caption: 'Stable income opportunities in the fishing sector keep people away from criminal activity. Photo: Al Faxti Fishing, Jean-Pierre Larroque, OEF. '
        },
        {
          tag: 'p',
          html: 'While poor coastal economic welfare enables maritime crimes, maritime crimes also disrupt local economies. Large injections of capital acquired through illicit means have effects similar to those of the “resource curse.” Large illicit capital inflows, such as ransom payments, lead to inflation. Inflation in turn undermines local manufacturing industries and exports. The service industry booms, and imports grow. While advantageous in the short term, this effect undermines long-term development and fosters dependency on the illicit sectors.'
        },
        // {
        //   tag: 'blockquote',
        //   html: '"Ransom revenues appear to largely fuel investment in services, real estate, finance or criminal sectors. Little appears to go into pastoral or export sectors."',
        //   source: 'Authors Steven Oliver, Ryan Jablonski, and Justin V. Hastings<br />The Tortuga Disease<sup>4</sup>',
        //   link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2233959' // What about internal references?
        // },
        {
          tag: 'p',
          html: 'The result of these dynamics is a feedback loop between poor coastal welfare and illicit maritime activity. As the illicit maritime economy develops to the detriment of the legitimate economy, workers are increasingly drawn to participate in the illicit economy.'
        },
        // Insert graph of Change in export volumes ###
        // {
        //   tag: 'img',
        //   src: '../../assets/coastal-welfare/change_export_volumes.jpg',
        // },
        // {
        //   tag: 'p',
        //   html: 'As a result of the effects of ransom revenues on the economy, employment opportunities in manufacturing, agriculture, and other export industries decrease. As unemployment and poverty rise, people start seeing more opportunity in the illicit economy.'
        // },
        // {
        //   tag: 'p',
        //   html: 'One result of these dynamics is the inception of a feedback loop between poor coastal welfare and illicit maritime activity; the more maritime crime develops, the more it can take a toll on economic development. The more economic development stagnates, the more people are inclined to move into illicit activities and crimes.'
        // },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> ***###??? Ryan Jablonski and Steven Oliver, “The Political Economy of Plunder: Economic Opportunity and Modern Piracy,” <em>Journal of Conflict Resolution</em> 57, no. 4 (2012): 682–708.'
            },
            {
              org: '<sup>2</sup> Mattias Fluckiger and Markus Ludwig, “Economic Shocks in the Fisheries Sector and Maritime Piracy,” <em>Journal of Development Economics</em> 114 (2015): 107–125.'
            },
            {
              org: '<sup>3</sup> Steven Oliver, Ryan Jablonski, and Justin V. Hastings, “The Tortuga Disease: The Perverse Effects of Illicit Foreign Capital,” <em>International Studies Quarterly<em> (forthcoming, 2017), accessed 28 August 2017,',
              url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2233959'
            },
            {
              org: '<sup>4</sup> Ibid.'
            },
            {
              org: '<sup>5</sup> Ibid.'
            },
          ]
        }
      ] // end of els array

    },

    // { // Card 2
    //   title: 'Somali Livelihoods',
    //   menu: 'Somali Livelihoods',
    //   metadata: {
    //     owner: 'Sasha Egorova',
    //     description: 'Focus on economic livelihoods in Somalia.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     path: '../../data/blue-economy/world-port-index.csv',
    //     extent: [
    //       [37, 14],
    //       [76, -9]
    //     ], // ### Guinea Bissau
    //     //    highlights: ['SOM'],
    //     load: function(index, file) {
    //
    //       var layer = 'card-' + index + '-layer';
    //       d3.csv(file, function(vals) {
    //
    //
    //         vals.forEach(function(d) {
    //         //  console.log(d);
    //           d.lat = +d.lat;
    //           d.lon = +d.lon;
    //           d.Harbor_2ize_code = +d.Harbor_2ize_code;
    //         });
    //
    //         var wpi = mapg.append('g')
    //           .classed('card-layer wpi-layer invisible ' + layer, true);
    //
    //         wpi.selectAll('circle')
    //           .data(vals).enter()
    //           .append('circle')
    //           .attr('cx', function(d) {
    //             return projection([d.lon, d.lat])[0];
    //           })
    //           .attr('cy', function(d) {
    //             return projection([d.lon, d.lat])[1];
    //           })
    //           .attr('r', function(d) {
    //             return d.Harbor_2ize_code * 2;
    //           })
    //           .classed('wpi-port', true)
    //           .style('fill', function() {
    //             return rampColor(1);
    //           })
    //           .on('mousemove', function (d) {
    //             var coords = d3.mouse(this);
    //             var y = d3.event.pageY,
    //               x = d3.event.pageX;
    //
    //             var tooltip = d3.select('div.tooltip');
    //             tooltip.style('left', (x + 20) + 'px')
    //               .style('top', (y - 20) + 'px')
    //               .classed('hidden', false)
    //               .classed('active', true)
    //               .style('text-align', 'left');
    //
    //
    //             var portName = d.Main_port_name.toLowerCase();
    //             portName = portName.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    //             // console.log(portName);
    //             tooltip.select('h1')
    //               .text(portName);
    //             //  console.log(d);
    //             tooltip.select('.tooltip-body')
    //               .text(countries[d.iso3]);
    //           })
    //           .on('mouseleave', function () {
    //             tooltip.classed('hidden', true);
    //             tooltip.select('h1').text(null);
    //             tooltip.select('.tooltip-body').text(null);
    //             d3.select(this).moveToBack();
    //           });
    //
    //       });
    //     },
    //     switch: function(index) {
    //       //  switchMainIndexInverse(0);
    //       d3.select('.card-' + index + '-layer')
    //         .classed('invisible', false);
    //     }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'Somali Livelihoods',
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'Supporting coastal communities amid drought'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Larger dots indicate larger ports, smaller dots indicate smaller ports. <br> Source: World Port Index</em>'
    //     },
    //     // { tag: 'legend',
    //     //   text: 'Map Legend',
    //     //   legendContent: '<em>Somalis suffer from the region\'s lowest coastal welfare score <br> <a class="internal-ref inline coastal-welfare" href="#" data-link="6">Methodology</a></em>' //###Fix this map if we have time its ugly
    //     // },
    //     {
    //       tag: 'p',
    //       html: 'The 2017 drought and famine have forced many Somalis to turn to the sea to support their livelihoods. As livestock and crops died, and with the reach of humanitarian assistance limited, many turned to fishing to feed their families. Conversely, illicit maritime activities might have also been fueled by the drought.'
    //     },
    //     {
    //       tag: 'blockquote',
    //       html: '“What we\'re seeing is that migration is increasing exponentially in all directions. People are leaving the region however they can. Some are going through Libya and across the Mediterranean and some are going to Yemen.”',
    //       source: 'Nichole Sobecki<sup>6</sup><br />Photojournalist',
    //       link: 'http://www.npr.org/sections/goatsandsoda/2017/06/17/533050733/photos-of-somalia-surviving-in-one-of-the-worlds-driest-places' // What about internal references?
    //     },
    //     {
    //       tag: 'p',
    //       html: '<a class="maritime-mixed-migration inline" href="../../maritime-mixed-migration">Human smuggling</a>is one of the key maritime crimes associated with the deteriorating coastal welfare off the coast of Somalia. Most Somalis do not have the financial means to be smuggled abroad and feel they have to migrate internally within Somalia.<sup>7</sup> As famine conditions worsen, many who can do so choose to be smuggled to other countries from Somali ports in order to escape the drought.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Somalia is just one example of how a change in coastal welfare and livelihoods can contribute to growing maritime insecurity. Amid crises like these, links between poor coastal welfare and maritime crimes can be addressed by supporting coastal development.'
    //     },
    //     { // Get this thumbnail!
    //       tag: 'video',
    //       videoId: '9U7fD3JkB60',
    //       thumb: '../../assets/coastal-welfare/AgriFood_video.jpg' // ###
    //     },
    //     {
    //       tag: 'p',
    //       html: 'These links between poor coastal welfare and maritime crime also mean that improved coastal opportunities could improve maritime security. For example, <a href="http://shuraako.org/" target="_blank">Shuraako</a>, a program of One Earth Future, has been supporting agriculture, fishing, and other businesses across the Somali regions through investments to create livelihood opportunities and foster economic growth. By boosting the formal economy, this work provides viable alternatives to illicit activities that undermine international security.'
    //     },
    //     {
    //       tag: 'links',
    //       items: [{
    //           org: '<sup>6</sup> Jason Beaubien, “Photos Of Somalia: The Drought, the People, the Captured Porcupine,” <em>NPR</em>, 17 July 2017,',
    //           url: 'http://www.npr.org/sections/goatsandsoda/2017/06/17/533050733/photos-of-somalia-surviving-in-one-of-the-worlds-driest-places'
    //         },
    //         {
    //           org: '<sup>7</sup> The Research and Evidence Facility Consortium, “Migration between the Horn of Africa and Yemen,” 25 July 2017,',
    //           url: 'https://www.soas.ac.uk/ref-hornresearch/research-papers/file122639.pdf'
    //         }
    //       ]
    //     }
    //   ] // end of els array
    //
    // },

    // { // Card 4
    //   title: 'Women and Coastal Welfare',
    //   menu: 'Women and Coastal Welfare',
    //   metadata: {
    //     owner: 'Sasha Egorova',
    //     description: 'Gender aspect of coastal welfare. Structural impediments towards women equally participating in coastal economies.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     path: '',
    //     highlights: [],
    //     tooltip: true,
    //     tooltipHTML: function (iso3) {
    //
    //       var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso3].womensEconomicSecurity;
    //       tooltipVal = Math.round(tooltipVal * 100);
    //       updatePointer(tooltipVal);
    //
    //       return "Womens' Economic Security:<br />" + tooltipVal + " / 100 <br />Source: World Bank Women,<br />Business, and the Law Dataset";
    //
    //     },
    //     load: function(index, file) {
    //
    //       var layer = 'card-' + index + '-layer';
    //       d3.select('.card-eez-layer')
    //         .classed(layer, true);
    //
    //     },
    //     switch: function(index) {
    //       choropleth(index, 1, 'womensEconomicSecurity');
    //      }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'Women and Coastal Welfare',
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'Secure coastlines for all'
    //     },
    //     // {
    //     //   tag: 'legend',
    //     //   text: 'Map Legend',
    //     //   legendContent: '<em>Lighter shades indicate greater women\'s economic security. <br> Source: <a href="http://wbl.worldbank.org/" target="_blank">World Bank Women, Business, and the Law Dataset</a></em>'
    //     // },
    //     {
    //       tag: 'p',
    //       html: 'Women’s active participation in coastal economies helps create more stable, secure, and profitable coastal areas for all. However, there are many obstacles to their full participation in the economy, and maritime industries in particular.'
    //     },
    //     {
    //       tag: 'blockquote',
    //       html: '“Women today represent about 50 percent of the world’s population and, for the past two decades, about 50 percent of the labor force. Yet there are stark differences in the outcomes they achieve: women are only half as likely as men to have a full-time wage-earning job. The women who do have paid jobs earn as much as one-third less than men. Fewer women than men are involved in trade or own registered companies. And women are more likely to work in low-productivity activities or informal employment.”',
    //       source: 'Cecile Fruman, Author<br />Why Gender Equality in Doing Business Makes Good Economic Sense<sup>11</sup>',
    //       link: 'http://blogs.worldbank.org/psd/why-gender-equality-doing-business-makes-good-economic-sense' // What about internal references?
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Maritime industries are no exception to this overall trend. There are fewer female seafarers than male ones, fewer women serving in navies and marine authorities, and fewer female members of coast guards.<sup>12</sup> Women’s participation in fisheries value chains is often limited to roles in processing and marketing, rather than fishing and resource management, which are considered to be traditionally male roles.<sup>13</sup>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/coastal-welfare/women_fisheries_west_africa.jpg', // This should be on the Stable Seas Deck - comments
    //       alt: 'A woman cooks in Youpwe fishing village, Cameroon. Photo: Jean-Pierre Larroque, OEF',
    //       caption: 'A woman cooks in Youpwe fishing village, Cameroon. Photo: Jean-Pierre Larroque, OEF'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'These differences in outcomes between men and women in business and the job market largely stem from the legal systems of their respective states. In sub-Saharan Africa in particular, women face multiple obstacles to equal participation in the economy:<sup>14</sup>'
    //     },
    //     {
    //       tag: 'ul',
    //       rows: ['In 5 out of 30 countries considered in the index, there are extra procedures for women to start a business compared to the procedures required for men.<sup>15</sup>', 'In 17 out of 30 countries, equal remuneration for work of equal value is not legally mandated.', 'In 21 out of 30 countries, nondiscrimination based on gender in hiring is not legally mandated.', 'In 18 out of 30 countries, non-pregnant women can’t do the same jobs as men.', 'In 2 out of 30 countries, non-pregnant women cannot work in the same occupations as men.']
    //     },
    //     {
    //       tag: 'p',
    //       html: 'In addition to unequal legal rights in terms of employment, women also face a lack of protection against different forms of violence:<sup>16</sup>'
    //     },
    //     {
    //       tag: 'ul',
    //       rows: ['In 17 out of 30 countries, there are no clear criminal penalties for domestic violence.', 'In 8 out of 30 countries, there is no legislation that addresses sexual harassment.', 'In 20 out of 30 countries, marital rape is not criminalized.']
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Removing obstacles to women’s participation in the economy and establishing functioning regulatory frameworks to protect women from violence are key steps toward having inclusive, sustainable, and secure coastal economies and welfare.'
    //     },
    //     {
    //       tag: 'links',
    //       items: [{
    //           org: '<sup>11</sup> Cecile Fruman, “Why Gender Equality in Doing Business Makes Good Economic Sense,” the World Bank Private Sector Development Blog, 17 November 2016,',
    //           url: 'http://blogs.worldbank.org/psd/why-gender-equality-doing-business-makes-good-economic-sense'
    //         },
    //         {
    //           org: '<sup>12</sup> Timothy Walker, “Why We Need More Women in Maritime Industries,” <em>World Economic Forum Agenda</em>, 4 September 2015,',
    //           url: 'https://www.weforum.org/agenda/2015/09/why-we-need-more-women-in-maritime-industries/'
    //         },
    //         {
    //           org: '<sup>13</sup>  Angela Lentisco and Robert Ulric Lee, <em>A Review of Women’s Access to Fish in Small-scale Fisheries</em> (Rome: Food and Agricuture Organization of the United Nations, 2015),',
    //           url: 'http://www.fao.org/3/a-i4884e.pdf'
    //         },
    //         {
    //           org: '<sup>14</sup> “Women, Business, and the Law 2016: Getting to Equal,” the World Bank, available at',
    //           url: 'http://wbl.worldbank.org/'
    //         },
    //         {
    //           org: '<sup>15</sup> The Doing Business Project, “Starting a Business,” the World Bank, 2017, accessed 28 August 2017,',
    //           url: 'http://www.doingbusiness.org/data/exploretopics/starting-a-business'
    //         },
    //         {
    //           org: '<sup>16</sup> “Women, Business, and the Law 2016: Getting to Equal,” the World Bank, available at',
    //           url: 'http://wbl.worldbank.org/'
    //         },
    //       ]
    //     }
    //   ] // end of els array
    // },
    // { // Card 5
    //   title: 'Progress in Ghana',
    //   menu: 'Progress in Ghana',
    //   metadata: {
    //     owner: 'Sasha Egorova',
    //     description: 'Lessons learned on what makes high coastal welfare in Ghana.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     path: '',
    //     extent: [[-5,14],[17,-2]],
    //     highlights: ['GHA'],
    //     load: function (index, file) {
    //       var layer = 'card-'+index+'-layer';
    //       d3.select('.card-eez-layer')
    //         .classed(layer, true);
    //
    //     },
    //     switch: function (index) {
    //       var layer = 'card-'+index+'-layer';
    //       d3.select('.' + layer)
    //         .classed('invisible', false);
    //       switchMainIndex(0);
    //     }
    //   },
    //   els: [
    //     { tag: 'h3',
    //       text: 'Progress in Ghana',
    //     },
    //     { tag: 'caption',
    //       text: 'Leading the Gulf of Guinea'
    //     },
    //     // { tag: 'legend',
    //     //   text: 'Map Legend',
    //     //   legendContent: '<em>Ghana enjoys one of the highest coastal welfare scores in sub-Saharan Africa.<br><a class="internal-ref inline coastal-welfare" href="#" data-link="6">Methodology</a><em>'
    //     // },
    //     { tag: 'p',
    //       html: 'Ghana has long been hailed as a success story for stability and growth in Africa, and for good reason. Since the institutionalization of a democratic political system in the early 1990s, the state has seen stable economic growth, a significant reduction of poverty, continuously climbing life expectancies and attainment of education, and steady progress towards other development goals.<sup>17</sup>'
    //     },
    //     { tag: 'img', // Add image ###
    //       src: '../../assets/placeholder.jpg',
    //       alt: '',
    //       caption: 'Caption for picture to be added###.'
    //     },
    //     { tag: 'p',
    //        html: 'Unlike in many of its neighbors, people in Ghana also enjoy a high degree of physical security. The country has not experienced a civil war, and has a low homicide rate of just 1.70, which puts it in the company of Canada, Kosovo, Malawi, Kuwait, and Bulgaria on the global scale. This is a remarkable level of physical security for a country that has been in close proximity to war and violent political change in recent memory.'
    //     },
    //     { tag: 'p',
    //        html: 'Ghana’s coastal areas are some of the most prosperous areas in the country, at least in part due to the location of the capital, Accra, on the coast. Maritime industries such as mariculture, commercial fishing, shipping, tourism, and others keep up with incomes and employment trends in other industries across the country, providing coastal populations with stable jobs and incomes.'
    //     },
    //     // { tag: 'p',
    //     //    html: 'Yet, having a high level of coastal welfare does not shield the country from maritime crime originating in neighboring countries. Ghana receives an unfavorable “high” ranking on both our  <a class="piracy inline" href="../../piracy">Piracy</a> and <a class="illicit-trade inline" href="../../illicit-trade">Illicit Trades</a> scores, in part because it shares the Gulf of Guinea with major piracy and maritime crime hotspots such as Nigeria. Ghana has become a significant hub for <a class="internal-ref inline illicit-trade" href="#" data-link="2">illicit trades in drugs and contraband</a>. This is due, at least in part, to internal challenges like corruption, insufficient capacity for enforcement of regulations, and growing internal demand for illicit goods.<sup>18</sup> Because coastal welfare is strong in Ghana relative to neighboring states, it is a destination country for economic migrants, which increases opportunities for trafficking and exploitation.'
    //     // },//###Make ssure links format color correctly in above paragraph
    //     { tag: 'p',
    //        html: 'Though Ghana faces challenges, citizens living along the coast are more secure, both physically and economically, than they are elsewhere in the Gulf of Guinea region. For this reason, Ghana is in a strong position to make gains against these problems and to continue leading regional efforts to secure the Gulf of Guinea maritime environment.'
    //     },
    //     { tag: 'links',
    //       items: [
    //         {org: '<sup>17</sup> “Ghana,” the World Bank, accessed 1 September 2017,', url: 'http://data.worldbank.org/country/ghana'},
    //         {org: '<sup>18</sup> U.S. Department of State, “Ghana,” Bureau of International Narcotics and Law Enforcement Affairs 2014 International Narcotics Control Strategy Report, accessed 1 September 2017,', url: 'https://www.state.gov/j/inl/rls/nrcrpt/2014/vol1/222893.htm.'},
    //       ]  // How about internal references????? ###
    //     }
    //   ] // end of els array
    // },
    { // Card 3
    title: 'Data and Methods',
    menu: 'Data and Methods',
    metadata: {
      owner: 'Curtis Bell',
      description: 'Methods.'
    },
    map: {
      type: 'continuous',
      scale: [],
      classes: 'card-6-layer',
      translate: [],
      highlights: null,
      tooltip: true,
      legend: 'Coastal Welfare Score',
      tooltipHTML: function (iso3) {
        var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso3].index;
        tooltipVal = Math.round(tooltipVal * 100);
        updatePointer(tooltipVal);

        return "Coastal Welfare:<br />" + tooltipVal + " / 100";
      },
      load: function (index, file) {  // ### *** This only should be for the first card ...
        // Color EEZ according to master Stable Seas index
        var layer = 'card-'+index+'-layer';

        d3.select('.card-eez-layer')
          .classed(layer, true);
      },
      switch: function (index) {
        choropleth(index, 1, 'index');
      }
    },
    els: [
    { tag: 'h1',
      text: 'Data and Methods'
    },
    {
      tag: 'caption',
      text: 'How we created the Coastal Welfare score'
    },
    // { tag: 'legend',
    //   text: 'Map Legend',
    //   legendContent: '<em>Lighter shades indicate higher coastal welfare scores.</em>'
    // },
    { tag: 'p',
       html: 'We conceptualize coastal welfare as a function of a population’s physical and economic security, both on the coast and in a country more generally. We calculate the Coastal Welfare Score with four equally weighted components:'
    },
    { tag: 'h4',
      text: 'Country-wide Physical Security'
    },
    { tag: 'p',
       html: 'We used two indicators to measure the Country-wide Physical Security Component: country-wide armed conflict events and homicide rates. The first indicator was derived from the Georeferenced Event Dataset (GED) produced by a joint initiative of the Uppsala Conflict Data Program (UCDP) and the Peace Research Institute of Oslo (PRIO). The dataset includes geocoded information about specific lethal instances of armed conflict, such as battles between governments and rebels or uses of violence against civilians worldwide. Homicide rate is taken from the United Nations Office on Drugs and Crime (UNODC).'
    },
    {
      tag: 'h4',
      html: 'Coastal Physical Security'
    },
    { tag: 'p',
       html: 'To isolate armed conflict occurring near the coastline, we identified armed conflict events within 50 kilometers of a country’s coast using the same Georeferenced Event Dataset (GED) from UCDP. The 256 qualifying events are spread across six countries: Somalia, Nigeria, Kenya, Angola, Mozambique, and Côte d’Ivoire.'
    },
    {
      tag: 'h4',
      html: 'Coastal Economic Security Component'
    },
    { tag: 'p',
       html: 'We use two indicators to measure coastal economic security. The first is the Artisanal Fishing Opportunities goal from the Ocean Health Index (OHI), which captures whether the demand for fishing opportunities is met on the coast in a lawful and sustainable manner. The second is the Coastal Livelihoods and Economies measure from OHI. This score measures the relative economic-well being of coastal areas in comparisonE to the rest of the country. This score is weighted by the Human Development Index (HDI) produced by the United Nations Development Program (UNDP).'
    },
    {
      tag: 'h4',
      html: 'Country-wide Economic Security'
    },
    { tag: 'p',
       html: 'We measure country-wide economic security using two indicators: the Human Development Index (HDI) from the the UNDP and infant mortality data from the World Bank. The Human Development Index is perhaps the world’s most influential score of social well-being. The HDI seeks to capture well-being by looking at three key measures of economic and human development: life expectancy, education provision, and gross national income. Infant mortality is commonly viewed as one of the best single indicators of social welfare. To improve infant mortality rates, countries must invest in health care, transportation infrastructure, nutrition, and women’s education across all socioeconomic classes and social groups.'
    },
    { tag: 'p',
       html: 'More details about all of these scores are available on our data page.'
    },

    { tag: 'links',
      items: [
        {org: '<sup>19</sup> ***###??? Sundberg and Melander, “Introducing the UCDP Georeferenced Event Dataset.'},
        {org: '<sup>20</sup> Ibid., pg. 2'},
        {org: '<sup>21</sup> The Women, Business, and the Law Project, “All Indicators,” the World Bank, accessed 1 September 2017,', url: 'http://wbl.worldbank.org/data/exploretopics/all-indicators'},
        {org: '<sup>22</sup> “Artisanal Fishing Opportunities,” the Ocean Health Index, accessed 1 September 2017,', url: 'http://www.oceanhealthindex.org/methodology/goals/artisanal-fishing-opportunities'},
        {org: '<sup>23</sup> The Women, Business, and the Law Project, “All Indicators,” the World Bank, accessed 1 September 2017,', url: 'http://wbl.worldbank.org/data/exploretopics/all-indicators'},
      ],  // How about internal references????? ###
    }

      ]
    } // End of seventh object in cards array
  ]
};
