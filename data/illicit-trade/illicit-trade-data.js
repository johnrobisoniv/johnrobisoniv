var illicitTradeData = {
  // PREPPED
  metadata: { // Independent data source for each page
    version: '1.0.0',
    name: '*Illicit Trades*',
    updates: true,
    /*
           added

           */
    index: 9,
    code: 'illicitTrade',
    path: 'illicit-trade',
    countryData: {},
    csv: '../../data/illicit-trade/illicitTrade.csv',
    color: '#098895',
    order: -1,
    description: 'Criminal networks leverage new technologies to deal in the markets of narcotics, weapons, wildlife, and black market pharmaceuticals.'
  },
  load: function(csv, callback) {

    loadIAcsv(csv, callback);
    // var md = issueAreaData[issueArea].metadata;
    //
    // d3.csv(csv, function(vals) {
    //   vals.forEach(function(d) {
    //     d.ia9c0 = +d.ia9c0;
    //   });
    //   issueAreaData[issueArea].metadata.countryData = vals;
    //   callback('illicitTrade load csv function callback');
    // });
    //
    // d3.csv('../../data/' + md.path + '/indexValues.csv', function(vals) {
    //
    //   issueAreaData[issueArea].metadata.indexData = vals;
    //
    // });
  },
  cards: [
    { // Card 0
      title: 'Illicit Trades',
      menu: 'Illicit Trades',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Introduce the issue.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Illicit Trades Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['index'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Illicit Trades:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'index');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Illicit Trades',
        },
        {
          tag: 'caption',
          text: 'Trafficking in African Waters'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Lighter shades indicate the country\'s shadow economy is smaller relative to total gross domestic product.<br />Source: <a href="http://www.imf.org/" target="_blank">International Monetary Fund</a></em>'
        },
        {
          tag: 'p',
          html: 'Forces of globalization, such as advancements in communication and transportation technology, have facilitated the integration of formerly isolated domestic markets. However, these same forces have also fueled the rise of transnational organized crime.'
        },
        // {tag: 'indexTable'
        // },
        // { tag: 'caption',
        //   text: 'Note: scores are rounded to the nearest whole number.'
        // },
        {
          tag: 'bigtext',
          html: 'Criminal networks leverage new technologies to facilitate the trafficking of contraband and the laundering of any proceeds.'
        },
        {
          tag: 'p',
          html: 'Criminal networks leverage new technologies to facilitate the trafficking of contraband and the laundering of any proceeds. They couple these new strategies with timeless tactics; among them threatening violence against rival criminal networks and agents of the state, bribery of corrupt port authorities and law enforcement officials, and co-optation of local communities.<sup>1</sup>'
        },
        {
          tag: 'p',
          html: 'As transnational networks become entrenched, some expand and diversify their activities. It is not uncommon to find linkages between various trafficking activities. Some criminal networks directly fund non-state actors engaged in rebellion and terror.<sup>2</sup>'
        },
        // { tag: 'p',
        //   html: 'Our Illicit Trades score reflects expert evaluations of trade in four categories: arms, drugs, contraband, and wildlife. They reflect not only the scale of each problem but also the extent to which it exists in the maritime domain. High scores reflect the diversity in the types of illicit maritime trade rather than the volume, which is impossible to estimate reliably due to the nature of black markets.'
        // },
        {
          tag: 'p',
          html: 'Sub-Saharan Africa has become an important consumer economy for contraband, but these scores also reflect the fact that many African ports have become preferred transshipment hubs for traffickers across a range of illicit economy sectors. This is evident in the global narcotics trade, with East Africa becoming the single largest conduit for heroin from Afghanistan to countries throughout the world. West Africa, too, is playing a leading role in the transshipment of cocaine from South America to Europe.<sup>3</sup>'
        }, //###above two paragraphs flagged for significant review
        {
          tag: 'img',
          src: '../../assets/piracy/illicit-trade-coin-cloud.png',
          alt: 'Coin Cloud - Illicit Trade and related issues ' // ###ks have to put x img here
          //caption: 'al estimate.'
        },
        {
          tag: 'p',
          html: 'Countries with more severe illicit trades tend to have weaker blue economies and greater problems with maritime mixed migration. These correlations reveal that transnational smugglers of goods also smuggle vulnerable people and undermine the legitimate coastal economy.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> Robert J. Kelly, Jess Maghan, and Joseph D. Serio, <em>Illicit Trafficking: A Reference Handbook</em> (Santa Barbara, California: ABC-CLIO, 2005).'
            },
            {
              org: '<sup>2</sup> The Globalization of Crime: A Transnational Organized Crime Threat Assessment,” United Nations Office on Drugs and Crime, 2010,',
              url: 'https://www.unodc.org/documents/data-and-analysis/tocta/TOCTA_Report_2010_low_res.pdf'
            },
            {
              org: '<sup>3</sup> Ibid.'
            }
          ]
        }
      ] // end of els array
    },
    { // Card 1
      title: 'Narcotics Globalized',
      menu: 'Narcotics Globalized',
      metadata: {
        owner: 'John Filitz',
        description: 'Focuses on Indian Ocean routes to / from China.'
      },
      map: {
        scale: [],
        path: '../../data/illicit-trade/smack-track.csv',
        classes: '',
        translate: [],
        highlights: [],
        tooltip: true,
        units: {
          text: 'xo units',
          multiplier: 100
        },
        // extent: [
        //   [15, -65],
        //   [150, 60]
        // ],
        load: function(index, csv) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';

          classEEZ(layer);

          // Load flow map layer

          // Load topoJSON of flow map
          // d3.csv(csv, function(vals) {
          //   vals.forEach(function(d) {
          //     d.lat = +d.lat;
          //     d.lon = +d.lon;
          //   });
          //
          //   var smack = mapg.append('g')
          //     .classed('card-layer smack-track invisible ' + layer, true);
          //
          //   smack.selectAll('circle')
          //     .data(vals).enter()
          //     .append('circle')
          //     .attr('cx', function(d) {
          //       return projection([d.lon, d.lat])[0];
          //     })
          //     .attr('cy', function(d) {
          //       return projection([d.lon, d.lat])[1];
          //     })
          //     .attr('r', '5px')
          //     //  .transition().delay(i * 10)
          //     .style('fill', function(d, i) {
          //       return rampColor(1 - (i / vals.length))
          //     })
          //     .classed('smack-track-point', true);
          //
          // });

          // Class with layer
        },
        switch: function(index) {
          // Need to do choropleth() with opiates measure ...

          // d3.select('.card-' + index + '-layer')
          //   .classed('invisible', false);

        }
      },
      els: [{
          tag: 'h1',
          text: 'Narcotics Globalized',
        },
        {
          tag: 'caption',
          text: 'The importance of Africa’s seaports to the global illicit economy'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Dots represent the primary drug route from South Asia to East African ports.</em>'
        },
        //###flag for comms (stable seas card deck doesn't have card 9.1 so I'll wait to hear from them to make sure this is correct)
        {
          tag: 'p',
          html: 'The global narcotics trade is becoming more sophisticated and diversified in the quest for improved efficiencies in trafficking routes and new markets. The increasing prevalence of synthetic drugs, the advent of genetically modified poppy seeds being used in the production of heroin, and increased coca cultivation in Colombia have boosted narcotics production and trafficking globally.<sup>4</sup> Sub-Saharan seaports are crucial hubs in this trade.'
        },
        {
          tag: 'img',
          src: '../../assets/illicit-trade/heroin-trafficking-flows.png', // This should be on the Stable Seas Deck - comments
        },
        {
          tag: 'h3',
          text: 'The East and Southern African-Afghani Connection',
        },
        {
          tag: 'p',
          html: 'A large share of the opiates produced in central Asia transit the “southern route” through the Arabian Sea region and toward East African ports. Referred to colloquially as the “Smack Track,” this route begins on the Makran Coast of Balochistan shared by the Islamic Republic of Iran and Pakistan.<sup>5</sup> The route then heads for the coastlines of Kenya, the United Republic of Tanzania, and Mozambique, which are being increasingly favored by heroin and hashish traffickers due to low rates of seizure and severely constrained maritime law enforcement capacities.<sup>6</sup>'
        },
        {
          tag: 'bigtext',
          html: 'The Indian Ocean drug trade typically avoids remote stretches of coastline and instead infiltrates East Africa\'s largest seaports.'
        },
        {
          tag: 'p',
          html: 'Individuals involved in trafficking are often of Pakistani and Iranian nationality as well as East African, including Kenyans and Tanzanians.<sup>7</sup> The extent of heroin trafficking in southern Africa is unknown, but South African authorities have declared East Africa to be the primary source of heroin in South Africa.<sup>8</sup> Four maritime interdictions led by the Combined Maritime Forces in the Indian Ocean between April 2012 and May 2013 seized 1,194 kg of high-purity heroin.<sup>9</sup> South Africa is also increasingly becoming a transshipment hub due to its sophisticated financial services sector and international transportation linkages.<sup>10</sup>'
        },
        //### Insert Graph 1: Number of heroin shipments to East African countries detected in Pakistan between 2000 and 2011 Source: “Transnational Organized Crime in Eastern Africa: A Threat Assessment,” United Nations Office on Drugs and Crime, 2013, https://www.unodc.org/documents/data-and-analysis/Studies/TOC_East_Africa_2013.pdf
        //### Insert Map 1: Heroin Trafficking Routes Source: Illicit Trade: Converging Criminal Networks, 2015, OECD, https://illicittrade.com/reports/downloads/illicit-trade-converging-criminal-networks.pdf
        {
          tag: 'p',
          html: 'Small dhows are commonly used to transport narcotics across Arabian Sea and Indian Ocean waters. These small vessels can easily evade detection and dock at non-commercial ports, including islands. In Kenya, Pemba Island and Shimoni Island are routinely used as initial drop-off points. Heroin, in particular, is then repackaged and transported by speedboat to Mombasa.<sup>11</sup> In April 2014, <em>HMAS Darwin</em> seized 1,032 kg of heroin 27 nautical miles off the coast of Mombasa, making it the largest seizure of its kind ever recorded in Africa. In July 2014, at least 343 kg of heroin (800 kg was reported by the UN)<sup>12</sup> was seized from unflagged MV Al Noor (or MV Amin Darya) off the Lamu archipelago north of Mombasa.<sup>13</sup> The purity of the drugs seized in these types of incidents is usually high, indicating greater opportunities for dilution and onward transshipment. Once narcotics arrive at large ports, commercial ships can be used to transport them around the world.<sup>14</sup> Use of Africa’s busiest commercial ports makes detection less likely due to the high number of containers being processed daily.<sup>15</sup>'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>4</sup> “World Drug Report 2017,” United Nations Office on Drugs and Crime, 2017,',
              url: 'https://www.unodc.org/wdr2017/index.html'
            },
            {
              org: '<sup>5</sup> “The Afghan Opiate Trade and Africa 2016: A Baseline Assessment,” United Nations Office on Drugs and Crime, 2017,',
              url: 'https://www.unodc.org/documents/data-and-analysis/Afghanistan/Afghan_Opiate_trade_Africa_2016_web.pdf'
            },
            {
              org: '<sup>6</sup> Ibid.'
            },
            {
              org: '<sup>7</sup> “Transnational Organized Crime in Eastern Africa: A Threat Assessment,” United Nations Office on Drugs and Crime, 2013,',
              url: 'https://www.unodc.org/documents/data-and-analysis/Studies/TOC_East_Africa_2013.pdf'
            },
            {
              org: '<sup>8</sup> Ibid.'
            },
            {
              org: '<sup>9</sup> “The Afghan Opiate Trade and Africa 2016,” United Nations Office on Drugs and Crime.'
            },
            {
              org: '<sup>10</sup> Ibid.'
            },
            {
              org: '<sup>11</sup> Margarita Dimova, “A New Agenda for Policing: Understanding the Heroin Trade in Eastern Africa,” University of London School of Economics and Political Science, N.D., available at,',
              url: 'https://ecpr.eu/Filestore/PaperProposal/9e9dd3da-27fa-42cb-96c6-0bc8b5639c99.pdf'
            },
            {
              org: '<sup>12</sup> “UN Security Council Report of the Monitoring Group on Somalia and Eritrea pursuant to Security Council Resolution 2244 (2015): Somalia,” United Nations Security Council S/2016/919, 28 September 2016,',
              url: 'http://www.securitycouncilreport.org/atf/cf/%7B65BFCF9B-6D27-4E9C-8CD3-CF6E4FF96FF9%7D/s_2016_919.pdf'
            },
            {
              org: '<sup>13</sup> Dimova, “A New Agenda for Policing.”'
            },
            {
              org: '<sup>14</sup> “Transnational Organized Crime in Eastern Africa,” United Nations Office on Drugs and Crime.'
            },
            {
              org: '<sup>15</sup> Dimova, “A New Agenda for Policing.”'
            }
          ]
        }
      ] // end of els array
    },
    { // Card 2
      title: 'Coca Crossing Oceans',
      menu: 'Coca Crossing Oceans',
      metadata: {
        owner: 'John Filitz',
        description: 'Focuses on Atlantic trade, West Africa.'
      },
      map: {
        scale: [],
        classes: '',
        path: '../../data/illicit-trade/narcotics-west-africa.csv',
        translate: [],
        extent: [
          [-40, -15],
          [70, 40]
        ],
        highlights: [],
        tooltip: true,
        tooltipHTML: function (iso3) {
        //  console.log(iso3);
          return iso3;
        },

        load: function(index, csv) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);

          // Load flow map layer

          // ### I don't love this map
          // var layer = 'card-' + index + '-layer';
          // // Load topoJSON of flow map
          // d3.csv(csv, function(rows) {
          //   rows.forEach(function(row, i) {
          //     row.lat = +row.lat;
          //     row.lon = +row.lon;
          //   });
          //
          //   var narcotics = mapg.append('g')
          //     .classed('west-africa-narcotics-routes card-layer invisible ' + layer, true);
          //
          //   narcotics.selectAll('circle')
          //     .data(rows).enter()
          //     .append('circle')
          //     .attr('cx', function(d) {
          //       return projection([d.lon, d.lat])[0];
          //     })
          //     .attr('cy', function(d) {
          //       return projection([d.lon, d.lat])[1];
          //     })
          //     .attr('r', '4px')
          //     .attr('class', function(d) {
          //       return d.route;
          //     })
          //     .style('fill', function(d) {
          //       if (d.route == 'main') {
          //         return rampColor(1);
          //       } else if (d.route == 'southern') {
          //         return colorBrew[0][1];
          //       } else if (d.route == 'eastern') {
          //         return colorBrew[1][1];
          //       } else if (d.route == 'northern') {
          //         return colorBrew[2][1];
          //       }
          //     })
          //     .on('mouseenter', function() {
          //       var route = d3.select(this).attr('class');
          //       d3.selectAll('.' + route + '.route-label')
          //         .classed('invisible', false)
          //     })
          //     .on('mouseleave', function() {
          //       var route = d3.select(this).attr('class');
          //       d3.selectAll('.' + route + '.route-label')
          //         .classed('invisible', true)
          //     });
          //
          //   var labels = [{
          //       title: 'Southern Route',
          //       class: 'southern',
          //       coords: [0, 17.5]
          //     },
          //     {
          //       title: 'Northern Route',
          //       class: 'northern',
          //       coords: [-16.3, 15.76]
          //     },
          //     {
          //       title: 'Eastern Route',
          //       class: 'eastern',
          //       coords: [-15.2, 23.9]
          //     }
          //   ];
          //
          //
          //
          //   var routeLabels = mapg.append('g')
          //     .classed('route-labels', true);
          //
          //   routeLabels.selectAll('.route-label')
          //     .data(labels).enter()
          //     .append('text')
          //     .attr('x', function(d) {
          //       return projection(d.coords)[0];
          //     })
          //     .attr('y', function(d) {
          //       return projection(d.coords)[1];
          //     })
          //     .text(function(d) {
          //       return d.title
          //     })
          //     .attr('class', function(d) {
          //       return 'route-label invisible ' + d.class
          //     });
          // });

          // Class with layer
        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

        }
      },
      els: [{
          tag: 'h1',
          text: 'Coca Crossing Oceans',
        },
        {
          tag: 'caption',
          text: 'From South America to West Africa and beyond'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>This map shows transit points on the West African coast and overland routes linking these ports to European consumers.</em>'
        },
        {
          tag: 'h3',
          text: 'Cocaine Trafficking in West African Waters',
        },
        {
          tag: 'p',
          html: 'West African ports have been important transshipment points in the global narcotics trade for decades, though the nature and volume of the trade has been very dynamic. The earliest evidence of Africa’s involvement in the Atlantic Ocean narcotics trade involved Lebanese traffickers sending heroin via Nigeria to the United States in 1952.<sup16</sup> The 1960s saw the region dominate the supply of African marijuana to Europe. Shortly thereafter, in the 1970s and 1980s, Ghanaian and Nigerian traffickers secured a foothold in the supply of cocaine to the United States and Europe.<sup>17</sup> According to a 2007 report by the United Nations Office on Drugs and Crime (UNODC), the region supplied over one-quarter of the 135 to 145 tons of annual cocaine demand in Europe that year.<sup>18</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/illicit-trade/cocaine-trafficking-west-africa.png', // This should be on the Stable Seas Deck - comments
        },
        {
          tag: 'p',
          html: 'According to a 2013 report by the UNODC, there are three main hubs for the trafficking of cocaine in West Africa; the northern hub comprising Guinea-Bissau, Guinea, The Gambia, and Senegal; the southern hub, comprising Nigeria at the core but also including Benin, Togo, and Ghana; and the eastern hub of Mali and Mauritania.<sup>19</sup>'
        },
        {
          tag: 'p',
          html: 'A notable spike in the frequency and volume of cocaine being trafficked to West Africa was reported in the period 2004–2009, with bulk shipments in excess of 100 kg common.<sup>20</sup> The west coast of Africa has historically played an integral role in the trafficking of narcotics to European countries.<sup>21</sup> The increased prominence in recent years is attributed to improved law enforcement oversight in narcotics-trafficking states in the Caribbean, the fragility of West African states and state institutions making them susceptible to co-optation by narcotics traffickers, and the geographic proximity of South America to the west coast of Africa making it the shortest point for crossing the Atlantic.<sup>22</sup>'
        },
        {
          tag: 'p',
          html: 'It is here that Guinea-Bissau established itself as Africa’s first “narco-state,” with senior-ranking public officials being implicated in the cocaine trade. Guinea, The Gambia, Sierra Leone, and Mauritania also came to be seen as a cocaine-trafficking hubs.<sup>23</sup> The involvement of senior public officials from these countries in narcotics trafficking laid bare the vulnerability of this region to the global narcotics trade.'
        },
        {
          tag: 'p',
          html: 'Of particular concern is the linking of narcotics trafficking to insurgent groups; in the Sahel region, al-Qaeda in the Islamic Maghreb and Colombian drug traffickers exchange cash for heavily armed escorts through Mauritania, Mali, and Algeria in order to access European markets.<sup>24</sup> Similarly, Boko Haram in Nigeria routinely facilitates the trafficking of heroin and cocaine across its territories.<sup>25</sup>'
        },
        //###BREAK TEXT TALK TO FILITZ AND CURTIS
        {
          tag: 'h3',
          text: 'Emerging Trends',
        },
        {
          tag: 'p',
          html: 'The modus operandi used in the trafficking of narcotics is ever-evolving; although according to a 2013 UNODC report maritime trafficking of cocaine has seen a notable decline since its peak in 2004–2009 due to an absence of regular seizures, perception of a decline should be met with skepticism.<sup>26</sup>'
        },
        {
          tag: 'p',
          html: 'In December 2016, Spanish and Moroccan authorities seized 2,575 kg of cocaine off the coast of the Western Sahara en route to Europe, underscoring the continuing importance of West African waters to the bulk trafficking of cocaine.<sup>27</sup>'
        },
        {
          tag: 'p',
          html: 'There has been a noteworthy shift by Nigerian narcotics traffickers to using commercial ships and shipping containers for trafficking, including their playing an increasingly important role in trafficking heroin to European markets. The use of commercial shipping makes detection significantly more difficult due to the large volume of goods moving through African seaports.<sup>28</sup>'
        },
        {
          tag: 'p',
          html: 'Of further concern is the shift being seen as sub-Saharan African countries including Nigeria, Guinea, Niger, and South Africa move from being net consumers of methamphetamine to establishing methamphetamine production capabilities with the intention to service domestic as well as export markets, including Southeast Asia.<sup>29</sup>'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>16</sup> Stephen Ellis, “West Africa’s International Drug Trade,” African Affairs 108 (2009): 171–196.'
            },
            {
              org: '<sup>17</sup> Ibid.'
            },
            {
              org: '<sup>18</sup> Ibid.'
            },
            {
              org: '<sup>19</sup> “Transnational Organized Crime in Eastern Africa,” United Nations Office on Drugs and Crime.'
            },
            {
              org: '<sup>20</sup> Peter McGuire, “Narcotics Trafficking in West Africa: A Governance Challenge,” <em>The Pardee Papers</em> No. 9, March 2010,',
              url: 'http://www.bu.edu/pardee/files/2010/03/Pardee_Paper-9-Narcotics-Trafficking.pdf'
            },
            {
              org: '<sup>21</sup> Ellis, “West Africa’s International Drug Trade.”'
            },
            {
              org: '<sup>22</sup> “Cocaine Trafficking in Western Africa: Situation Report,” United Nations Office on Drugs and Crime, October 2007,',
              url: 'https://www.unodc.org/documents/data-and-analysis/Cocaine-trafficking-Africa-en.pdf'
            },
            {
              org: '<sup>23</sup> McGuire, “Narcotics Trafficking in West Africa.”'
            },
            {
              org: '<sup>24</sup> Colin P. Clarke, “Drugs and Thugs: Funding Terrorism through Narcotics Trafficking,” <em>Journal of Strategic Security</em> 9, no.3. (2016), available at',
              url: 'http://scholarcommons.usf.edu/cgi/viewcontent.cgi?article=1536&amp;context=jss'
            },
            {
              org: '<sup>25</sup> “World Drug Report 2017,” United Nations Office on Drugs and Crime.'
            },
            {
              org: '<sup>26</sup> “Transnational Organized Crime in West Africa: A Threat Assessment,” United Nations Office on Drugs and Crime, 2013,',
              url: 'https://www.unodc.org/toc/en/reports/TOCTAWestAfrica.html'
            },
            {
              org: '<sup>27</sup> Christopher Woody, “Spanish and Moroccan Police Seized 5,700 Pounds of Cocaine in the Middle of a High-Seas Trafficking Corridor,” <em>Business Insider</em>, 6 December 2016,',
              url: 'http://www.businessinsider.com/spanish-police-seize-cocaine-morocco-2016-12.'
            },
            {
              org: '<sup>28</sup> “Transnational Organized Crime in West Africa,” United Nations Office on Drugs and Crime.'
            },
            {
              org: '<sup>29</sup> Ibid.'
            }
          ]
        }
      ] // end of els array
    },
    { // Card 3
      title: 'Weapons of War',
      menu: 'Weapons of War',
      metadata: {
        owner: 'Sean Duncan',
        description: 'Gulf of Aden.'
      },
      map: {
        path: '../../data/illicit-trade/weapons-of-war.csv',
        scale: [],
        classes: '',
        translate: [],
        extent: [
          [40, 15],
          [65, -20]
        ],
        highlights: [],
        tooltip: true,
        units: {
          text: 'xo units',
          multiplier: 100
        },
        load: function(index, file) { // ### *** This only should be for the first card ...
          // Load flow map layer

          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Load topoJSON of flow map
          // d3.csv(file, function(rows) {
          //   rows.forEach(function(row, i) {
          //     row.lat = +row.lat;
          //     row.lon = +row.lon;
          //   });
          //
          //   // console.log(rows);
          //   var arms = mapg.append('g')
          //     .classed('east-africa-arms-flows card-layer invisible ' + layer, true);
          //
          //   arms.selectAll('circle')
          //     .data(rows).enter()
          //     .append('circle')
          //     .attr('cx', function(d) {
          //       return projection([d.lon, d.lat])[0];
          //     })
          //     .attr('cy', function(d) {
          //       return projection([d.lon, d.lat])[1];
          //     })
          //     .attr('r', '3px')
          //     .attr('class', 'east-africa-arms-route')
          //     .style('fill', function(d, i) {
          //       return rampColor(i / rows.length);
          //     });
          //   // .on('mouseenter', function () {
          //   //   var route = d3.select(this).attr('class');
          //   //   d3.selectAll('.' + route + '.route-label')
          //   //     .classed('invisible', false)
          //   // })
          //   // .on('mouseleave', function () {
          //   //   var route = d3.select(this).attr('class');
          //   //   d3.selectAll('.' + route + '.route-label')
          //   //     .classed('invisible', true)
          //   // });
          //   //
          //   var label = {
          //     title: 'Port of Mombasa',
          //     coords: [40.66, -3.06]
          //   };
          //
          //
          //
          //
          //
          //   var mombasa = d3.select('.labels');
          //
          //   mombasa.append('text')
          //     .attr('x', function(d) {
          //       return projection(label.coords)[0];
          //     })
          //     .attr('y', function(d) {
          //       return projection(label.coords)[1];
          //     })
          //     .text(function(d) {
          //       return label.title;
          //     })
          //     .attr('class', function(d) {
          //       return 'mombasa label invisible card-layer';
          //     });
          // });


          // Class with layer
        },
        switch: function(index) {
          // Add code to load eez with choropleth - arms scores


          // Simply show target layer
          // d3.select('.card-' + index + '-layer')
          //   .classed('invisible', false);
          //
          // d3.select('.mombasa.label')
          //   .classed('invisible', false)
          //   .classed('active', true);
        }
      },
      els: [{
          tag: 'h1',
          text: 'Weapons of War',
        }, //###need images
        {
          tag: 'caption',
          text: 'How maritime insecurity benefits violent non-state actors'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Major routes linking arms from East African ports to conflict zones in central Africa.</em>'
        },
        {
          tag: 'p',
          html: 'In a 2015 statement to the UN Security Council,<sup>30</sup> ambassador Tete Antonio noted that of the 500 million illicit small and light weapons (SALW) in circulation globally, over 100 million were in circulation in Africa.<sup>31</sup> The illicit trade for these goods fuels political violence and instability throughout the world and in Africa in particular,<sup>32</sup> with former Secretary-General of the United Nations Ban Ki-moon noting that SALW were at the center of the devastation wrought by the 250 global conflicts in the past decade.<sup>33</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/illicit-trade/arms-trafficking.png'
        },
        {
          tag: 'p',
          html: 'In Africa, the accessibility of SALW makes them “real weapons of mass destruction.”<sup>34</sup> The African Union attributes at least 5 million fatalities in Africa to SALW since 1950.<sup>35</sup> The proliferation of weapons in Africa and the associated deaths have no doubt had a significant and deleterious impact on the social, economic, and political stability of the affected countries.<sup>36</sup>'
        },
        {
          tag: 'p',
          html: 'As part of the African Union’s Agenda 2063, the continental body has set an ambitious goal of ending all wars on the continent by 2020 under an effort labelled Vision 2020, also known as “Silencing the Guns.” Key to achieving this milestone is curtailing the accessibility and availability of SALW.<sup>37</sup>'
        },
        {
          tag: 'h3',
          text: 'Rule of Law Efforts',
        },
        {
          tag: 'p',
          html: 'There are a growing number of bilateral and multilateral agreements aimed at curbing the illicit trade in SALW, though until recently few of them focused explicitly on what occurs in the maritime space.<sup>38</sup> More recently, however, the regional Yaoundé Code of Conduct, the Djibouti Code of Conduct, and the African Union’s Lomé Charter underscore the importance of maritime governance in stemming the flow of illicit weapons to the continent.'
        },
        {
          tag: 'h3',
          text: 'Geographic Areas of Importance',
        },
        {
          tag: 'p',
          html: 'The Horn of Africa region, according to the United Nations Somalia and Eritrea Monitoring Group, remains a key weapons trafficking and transshipment point in Africa.<sup>39</sup> A range of weapons including rocket-propelled grenades and heavy machine guns are trafficked to the region for clients within Africa and beyond. The weapons originate from a variety of groups and include items of Ukrainian, Iranian, and Chinese origin.<sup>40</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/illicit-trade/arms-in-circulation.png'
        },
        {
          tag: 'p',
          html: 'Compounding the challenge of curbing weapons trafficking is the fact that the increasing utilization of commercial cargo vessels makes detecting trafficking more difficult.<sup>41</sup> Some of East Africa’s largest ports have been cited as being key weapons transshipment points servicing neighboring countries that are in the throes of seemingly intractable violent conflicts, including Uganda and South Sudan.<sup>42</sup>'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>30</sup> “Small Arms: The Human Cost of the Illicit Transfer, Destabilizing Accumulation and Misuse of Small Arms and Light Weapons” (Statement by Ambassador Tete Antonio to the United Nations Security Council, New York, 13 May 2015),',
              url: 'http://archive.au.int/collect/newyorko/import/English/Statement%20By%20Amb%20Tete%20Antonio%20in%20Security%20Council%20Debat_E.pdf'
            },
            {
              org: '<sup>31</sup> Dahida D. Philip and Akangbe Oluwabamidele Moses, “Arms, Light Weapons and Rebel Insurgency Across Africa: Impact on Neighboring States,” <em>Public Policy and Administration Research</em> 3, No.10 (2013).'
            },
            {
              org: '<sup>32</sup> “Human Cost of Illicit Flow of Small Arms, Light Weapons Stressed in Security Council Debate,” SC/11889, United Nations Security Council 7442nd Meeting,13 May 2015,',
              url: 'https://www.un.org/press/en/2015/sc11889.doc.htm'
            },
            {
              org: '<sup>33</sup> Manasseh Wepundi, Eliud Nthiga, Eliud Kabuu, Ryan Murray, and Anna Alvazzi del Frate, “Availability of Small Arms and Perceptions of Security in Kenya: An Assessment,” <em>Small Arms Survey Special Report</em>, June 2012,',
              url: 'http://www.smallarmssurvey.org/fileadmin/docs/C-Special-reports/SAS-SR16-Kenya.pdf'
            },
            {
              org: '<sup>34</sup> “Small Arms Survey 2001: Profiling the Problem,” <em>Small Arms Survey</em> (Oxford: Oxford University Press, 2001),',
              url: 'http://www.smallarmssurvey.org/fileadmin/docs/A-Yearbook/2001/en/Small-Arms-Survey-2001-Executive-Summary-EN.pdf'
            },
            {
              org: '<sup>35</sup> “Silencing the Guns, Owning the Future: Realizing a Conflict-Free Africa” (report on the proceedings of the Fifth African Union High-Level Retreat on the Promotion of Peace, Security and Stability in Africa, 21–23 October 2014, Arusha, Tanzania), African Centre for the Constructive Resolution of Disputes, 2015,',
              url: 'http://www.peaceau.org/uploads/arusha-au-high-level-retreat-report-web.pdf'
            },
            {
              org: '<sup>36</sup> Ibid.'
            },
            {
              org: '<sup>37</sup> Ibid.'
            },
            {
              org: '<sup>38</sup> Ibid.'
            },
            {
              org: '<sup>39</sup> “UN Security Council Report of the Monitoring Group on Somalia and Eritrea pursuant to Security Council Resolution 2244 (2015): Somalia,” United Nations Security Council S/2016/919.'
            },
            {
              org: '<sup>40</sup> Jonah Leff and Emile LeBrun, “Following the Thread: Arms and Ammunition Tracing in Sudan and South Sudan,” <em>Small Arms Survey 2014</em> (Geneva: Graduate Institute of International and Development Studies, 2014),',
              url: 'http://www.smallarmssurveysudan.org/fileadmin/docs/working-papers/HSBA-WP32-Arms-Tracing.pdf'
            },
            {
              org: '<sup>41</sup> Hugh Griffiths and Michael Jenks, “Maritime Transport and Destabilizing Commodity Flows,” Stockholm International Peace Institute, January 2012,',
              url: 'https://www.sipri.org/publications/2012/sipri-policy-papers/maritime-transport-and-destabilizing-commodity-flows'
            },
            {
              org: '<sup>42</sup> Wepundi et al., “Availability of Small Arms and Perceptions of Security in Kenya.”'
            }
          ]
        }
        //### Video to embed: https://www.youtube.com/watch?v=7dJEHB_aY0Y
      ] // end of els array
    },
    { // Card 4
      title: 'The Wildlife Trafficking Crisis',
      menu: 'The Wildlife Trafficking Crisis',
      metadata: {
        owner: 'Sean Duncan',
        description: 'Southern Africa.'
      },
      map: {
        scale: [],
        path: '../../data/illicit-trade/illicit-trade-c4.csv',
        classes: '',
        translate: [],
        highlights: [],
        tooltip: true,
        units: {
          text: 'xo units',
          multiplier: 100
        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Load flow map layer
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.cape-town-label')
            .classed('active', true)
            .classed('invisible', false);

        }
      },
      els: [{
          tag: 'h1',
          text: 'The Wildlife Trafficking Crisis',
        },
        {
          tag: 'caption',
          text: 'A key law enforcement priority for African countries'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Major wildlife trafficking hubs in East, West, and Southern Africa.</em>'
        },
        {
          tag: 'p',
          html: 'The illicit trade in wildlife and protected species is global in scale but particularly prevalent across sub-Saharan Africa. Reptiles, big cats, apes, parrots, ivory, rhino horn, pangolin scales,  teak wood, and rosewood<sup>44</sup> are only some of the plant and wildlife species trafficked in Africa. Rhino horn and ivory comprise most of the global illicit market, with a market value of between USD$5 and $23 billion annually.<sup>45</sup> The vast majority of trafficked wildlife and related products are destined for markets in Asia.<sup>46</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/illicit-trade/rhino_and_ivory_values.png', // This should be on the Stable Seas Deck - comments
        },
        {
          tag: 'p',
          html: 'South Africa is considered the leading source of the illicit trade in rhino horn, with rhino poaching increasing from an average of 13 rhinos per year<sup>47</sup> in the period 2000–2007 to an average of 849 per year in the period 2010–2016.<sup>48</sup> The trade in rhino horn and ivory is incredibly lucrative; rhino horn sells for USD$65,000 per kilogram, typically weighing 1–3 kg, while ivory sells for approximately USD$2,100 per kilogram with the typical elephant tusk weighing approximately 20 kg.<sup>49</sup> Linkages to other organized crime subsectors such as money laundering and arms, narcotics, and human trafficking are common.<sup>50</sup> Militias in the Democratic Republic of the Congo, the Central African Republic, Chad, Niger, and South Sudan also rely on the illicit wildlife trade as a key revenue stream.<sup>51</sup>'
        },
        {
          tag: 'p',
          html: 'Maritime shipping is an integral component of this trade: most of the rhino horn is trafficked out of South African ports, with Mozambique’s Maputo port and Nigeria’s Lagos port playing increasingly important roles. The contraband is usually containerized and concealed as timber or agricultural products.<sup>52</sup> Between 2009 and 2013, 72 percent of ivory seizures by weight were from cargo containers at sea.<sup>53</sup>'
        },

        {
          tag: 'p',
          html: 'In 2008, the ports of Lagos, Nigeria; Douala, Cameroon; and Accra, Ghana served as the main West African maritime trafficking hubs for ivory. The ports of Mombasa, Kenya and Maputo, Mozambique were prominent maritime trafficking hubs on the eastern and southern coastlines. South Africa’s port of Durban, however, was the single largest conduit for ivory trafficking on the continent, with Tanzania’s ports of Dar es Salaam and Zanzibar combined serving as the second largest conduit.<sup>54</sup>'
        },
        {
          tag: 'p',
          html: 'Due to increased law enforcement efforts by the South African and Singaporean authorities in the period 2009–2012, a shift in the pattern of ivory trafficking across the African continent was observed.<sup>55</sup> Kenya became the leading hub for trafficking ivory out of Africa, followed by Tanzania. Togo, on the west coast, also emerged as a new and important player in the illicit ivory trade. Several large-scale ivory seizures in Togo revealed that ivory trafficked there was destined for Malaysia via western Europe.<sup>56</sup> Also noteworthy were the ivory seizures in Kenya, Tanzania, and Uganda in 2013, which for the first time exceeded seizures in Asia.<sup>57</sup>'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>43</sup> “World Wildlife Crime Report: Trafficking in Protected Species,” United Nations Office on Drugs and Crime, 2016,',
              url: 'https://www.unodc.org/documents/data-and-analysis/wildlife/World_Wildlife_Crime_Report_2016_final.pdf'
            },
            {
              org: '<sup>44</sup> “Forest Governance and Timber Trade Flows Within, To and From Eastern and Southern African Countries: Kenya Country Study,” the European Commission, February 2014,',
              url: 'https://europa.eu/capacity4dev/file/21144/download?token=eNn21m25'
            },
            {
              org: '<sup>45</sup> Channing May, “Transnational Crime and the Developing World,” Global Financial Integrity, March 2017,',
              url: 'http://www.gfintegrity.org/wp-content/uploads/2017/03/Transnational_Crime-final.pdf'
            },
            {
              org: '<sup>46</sup> <em>Illicit Trade: Converging Criminal Networks</em> (Paris: Organisation for Economic Co-operation and Development, 2016),',
              url: 'http://dx.doi.org/10.1787/9789264251847-en'
            },
            {
              org: '<sup>47</sup> Ibid.'
            },
            {
              org: '<sup>48</sup> “Poaching Statistics,” Save the Rhino, accessed 5 September 2017,',
              url: 'https://www.savetherhino.org/rhino_info/poaching_statistics'
            },
            {
              org: '<sup>49</sup> <em>Illicit Trade: Converging Criminal Networks</em>, Organisation for Economic Co-operation and Development.'
            },
            {
              org: '<sup>50</sup> May, “Transnational Crime and the Developing World.”'
            },
            {
              org: '<sup>51</sup> “Illegal Trade in Wildlife and Timber Products Finances Criminal and Militia Groups, Threatening Security and Sustainable Development,” United Nations Environment Programme, 24 June 2014,',
              url: 'groups-threatening-security'
            },
            {
              org: '<sup>52</sup> <em>Illicit Trade: Converging Criminal Networks</em>, Organisation for Economic Co-operation and Development.'
            },
            {
              org: '<sup>53</sup> Varun Vira, Thomas Ewing, and Jackson Miller, “Out of Africa: Mapping the Global Trade in Illicit Elephant Ivory,” C4Adsand Born Free USA, August 2014,',
              url: 'http://www.wwf.se/source.php/1578610/out%20of%20africa.pdf'
            },
            {
              org: '<sup>54</sup> <em>Illicit Trade: Converging Criminal Networks</em>, Organisation for Economic Co-operation and Development.'
            },
            {
              org: '<sup>55</sup> Ibid.'
            },
            {
              org: '<sup>56</sup> Ibid.'
            },
            {
              org: '<sup>57</sup> Ibid.'
            }
          ]
        }
        //### Video to embed: https://www.youtube.com/watch?v=Ss58fP7qxEA&list=***Graphic***:  See map for rhino trade:  https://visionscarto.net/routes-of-rhino-horn
      ] // end of els array
    },
    { // Card 5
      title: 'Black Market Pharmaceuticals',
      menu: 'Black Market Pharmaceuticals',
      metadata: {
        owner: 'John Filitz',
        description: 'Special focus on the pharmaceutical trade.'
      },
      map: {
        type: 'boolean',
        scale: [],
        classes: '',
        translate: [],
        //highlights: ['SEN','GNB','GIN','SLE','LBR','CIV','GHA','TGO','BEN','NGA','CMR','GAB','COG','COD','AGO','NAM','ZAF','MOZ','TZA','KEN'],
        tooltip: true,
        legend: '',
        tooltipHTML: function(iso) {
        },
        load: function (index, csv) {  // ### *** This only should be for the first card ...
          // Load points layer with boxes
          var layer = 'card-'+index+'-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function (index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

      //    choropleth(index, 1, 'pharma_seizure')

        }
      },
      els: [
        { tag: 'h1',
          text: 'Black Market Pharmaceuticals',
        },
        { tag: 'caption',
          text: 'The health crisis of counterfeit medicines in Africa'
        },
        { tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Highlighted countries have recorded a major seizure of black market pharmaceuticals in recent years.</em>'
        },
        { tag: 'p',
          html: 'Counterfeit and pirated goods are classified as the most valuable illicit economy subsector, with estimates of annual revenue ranging between USD$923 billion and $1.13 trillion. Counterfeit pharmaceuticals and medicines comprise approximately 25 percent of this market, and are valued at between USD$70 and $200 billion annually.<sup>68</sup> It is also the only counterfeiting sector that completely displaces original products from the market.<sup>69</sup>'
        },
        { tag: 'p',
           html: 'China is the largest single source of counterfeit medicines, with substantial factories also reported in India and Russia.<sup>70</sup> Most of the counterfeit medicines emanate from commercial shipping ports and are transported in containers.<sup>71</sup> Recently, Nigeria has been cited as a key emerging source of counterfeit medicine production and distribution in Africa.<sup>72</sup>'
        },

        {
        //  gif: true,
          tag: 'img',
      //    videoId: 'nGL85NkTbUg',
          thumb: '../assets/illicit-trade/Counterfeit-Medicine-Flows.gif' // ###
        },

            //###Insert JP's GIF
        { tag: 'p',
           html: 'The prevalence of counterfeit medicines is a particular challenge for sub-Saharan African countries, with estimates indicating that on average, 30 percent of medicines available are counterfeit. According to critics, the impact of counterfeit medicines, with specific reference to anti-malarials, should be viewed as a crime against humanity as they deliberately derail efforts to prevent the 660,000 annual deaths attributed to Malaria.<sup>73</sup> For instance, 59 percent of the anti-malarial medication monitored in the period 2002–2010 in Burkina Faso, Chad, Cameroon, the Democratic Republic of the Congo, Ghana, Kenya, Nigeria, Rwanda, and Senegal failed chemical analysis. Governance, consumer awareness, and education are central to combating this problem.<sup>74</sup>'
        },
        { tag: 'h3',
          text: 'Law Enforcement Efforts',
        },
        { tag: 'p',
           html: 'There are ongoing efforts by sub-Saharan African countries and international development agencies to address the challenge of counterfeit medicine. Four law enforcement operations led by the World Customs Organization and the International Institute of Research Against Counterfeit Medicines in partnership with African countries have yielded significant successes, with an average interception rate of 78 percent. The seized counterfeit medications include antibiotics and painkillers as well as anti-malarial, anti-inflammatory, anti-cancer, and diabetes medications that posed direct threats to human health. Starting in 2012, 869 million counterfeit medicines have been seized by the four enforcement operations, with the seized contraband valued at an estimated USD$569 million.<sup>75</sup>'
        },
        { tag: 'links',
          items: [
            {org: '<sup>68</sup> May, “Transnational Crime and the Developing World.”'},
            {org: '<sup>69</sup> “The Economic Impact of Counterfeiting and Piracy: Report Prepared for BASCAP and INTA,” Frontier Economics, 2017,', url: 'https://www.inta.org/Communications/Documents/2017_Frontier_Report.pdf'},
            {org: '<sup>70</sup> “The Globalization of Crime,” United Nations Office on Drugs and Crime.'},
            {org: '<sup>71</sup> Ibid.'},
            {org: '<sup>72</sup> Ibid.'},
            {org: '<sup>73</sup> Kaliyaperumal Karunamoorthi, “The Counterfeit Anti-Malarial is a Crime Against Humanity: A Systematic Review of the Scientific Evidence,” <em>Malaria Journal</em> 13 (209): 2014, doi: 10.1186/1475-2875-13-209. '},
            {org: '<sup>74</sup> <em>Illicit Trade: Converging Criminal Networks</em>, Organisation for Economic Co-operation and Development.'},
            {org: '<sup>75</sup> “Operation Vice Grips 2: Record Seizure of Counterfeit Medicines in Africa, Alert to Public Health Emergency,” International Institute of Research Against Counterfeit Medicines, 25 October 2012,', url: 'http://www.iracm.com/en/vice-grips-2-2/'}
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
        scale: [],
        classes: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Illicit Trades Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['index'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Illicit Trades:<br />" + tooltipVal + " / 100";

        },
        load: function (index, csv) {  // ### *** This only should be for the first card ...
          // Load flow map layer
          var layer = 'card-'+index+'-layer';
          // Load topoJSON of flow map
          classEEZ(layer);
          // Class with layer
        },
        switch: function (index) {

          choropleth(index, 1, 'index');

        }
      },
      els: [
        { tag: 'h1',
          text: 'Data and Methods',
        },
        {
          tag: 'caption',
          text: 'How we created the Illicit Trade score'
        },
        { tag: 'p',
          html: 'Illicit trades are a problem nearly everywhere, but the goods being trafficked vary by region. To capture the breadth of the maritime illicit trades, we created scorecards evaluating each country’s participation in the illicit maritime movement of the following products: coca and its derivatives, opiates, cannabis, synthetic narcotics, small arms and light weapons, wildlife products, and miscellaneous contraband. The nature of the shadow economy means precise estimates of the scale of these trades are impossible to obtain. However, we can evaluate the relative severity of each trade and the diversity of illicit goods moving through each country’s waters.'
        },
        { tag: 'p',
           html: 'For each of the seven illicit trades and 30 countries, in-house respondents assessed the severity of the problem and the extent to which each trade is a maritime issue (rather than land-based or air-based). Respondents worked together to identify the most reliable and recent sources, and each assessment is linked to sources in the scorecards available for download.'
        },
        { tag: 'p',
           html: 'More details about all of these scores are available on our data page.' //### insert link
        }
      ] // end of els array
    }
  ]
};
