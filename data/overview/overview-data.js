var overviewData = {
  metadata: {
    name: 'Overview',
    updates: true,
    version: '1.0.0',
    /*
    here is where you write updates
    do one line per update, like
    added legend to card 3
    added citations to card 5
    input thumbnail path to card 4
    loaded point data

    */
    index: 1,
    code: 'overview',
    path: 'overview',
    countryData: {},
    csv: '../../data/overview/overview.csv',
    color: '#FC4C02',
    order: -1,
    description: 'The index maps and measures global threats to maritime governance and analyzes challenges like piracy, smuggling, and capacity-building.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback);

  },
  cards: [
    { // Card 0
      title: 'Introducing Stable Seas',
      menu: 'Introducing Stable Seas',
      metadata: {
        owner: 'Curtis Bell',
        description: 'This will be the title card that introduces the website.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Stable Seas Maritime Security Index Score',
        tooltipHTML: function(tooltipVal) {
          var score = Math.round(issueAreaData[issueArea]
            .metadata.countryData[tooltipVal].Average * 100);
          updatePointer(score);
          return 'Average score:<br />' + score + ' / 100';
        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'Average', false)

        }
      },
      els: [{
          tag: 'h1',
          text: 'Introducing Stable Seas',
        },
        {
          tag: 'caption',
          text: '<em>A new effort to measure and map maritime security in sub-Saharan Africa</em>'
        },

        {
          tag: 'p',
          html: 'The Stable Seas Maritime Security Index is a new effort to measure and map nine facets of good maritime governance: 1) international cooperation, 2) the rule of law, 3) maritime enforcement capacity, 4) coastal welfare, 5) development of the blue economy, 6) fisheries, 7) piracy and armed robbery at sea, 8) illicit maritime trades, and 9) maritime mixed migration. By bringing these nine issues into one comprehensive analysis, we can better understand how they intersect to affect maritime security. This improved understanding can then inform stronger maritime security policy.'
        },
        {
          tag: 'img',
          src: '../../assets/overview/issue_areas_graphic.png',
          alt: 'Stable Seas issue areas: International Cooperation, Rule of Law, Maritime Enforcement, Coastal Welfare, Blue Economy, Fisheries, Piracy & Armed Robbery, Illicit Trade, Maritime Mixed Migration.',
        },
        {
          tag: 'p',
          html: 'The inaugural edition of our report covers the 30 exclusive economic zones (EEZs) that envelop sub-Saharan Africa from the mid-Atlantic to the Gulf of Aden. Countries in this region face unique maritime security challenges and overcoming them will require international coordination and careful consideration of the interdependencies linking these maritime threats. This site highlights these linkages by combining quantitative measures with important case studies from across the region.'
        },
        {
          tag: 'p',
          html: 'Scores reflect publicly available data, as well as extensive collaboration with African militaries and governments, international organizations, African and Western non-governmental organizations, and other stakeholders with an intimate understanding of the African maritime security environment.'
        },
        {
          tag: 'p',
          html: 'Please browse the site by using the colored toolbar across the top of the screen to view different issue areas. The blue toggle button at the top of the page will allow you to view information country-by-country, rather than issue-by-issue.'
        }
      ] // end of els array
    },
    { // Card 1
      title: 'Indian Ocean Overview',
      menu: 'Indian Ocean Overview',
      metadata: {
        owner: 'Ben Lawellin',
        description: 'Introduces the maritime threat and crime environment in east Africa.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        extent: [[0, -65],
          [140, 42]],
        legend: 'Stable Seas Maritime Security Index Score',
        tooltipHTML: function(tooltipVal) {
          var score = Math.round(issueAreaData[issueArea]
            .metadata.countryData[tooltipVal].Average * 100);
          updatePointer(score);
          return 'Average score:<br />' + score + ' / 100';
        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'Average', false)
        }
      },
      els: [{
          tag: 'h1',
          text: 'Indian Ocean Overview',
        },
        {
          tag: 'caption',
          text: 'Piracy has declined but challenges remain'
        },
        {
          tag: 'p',
          html: 'Africa’s share of the Indian Ocean Basin includes the Gulf of Aden, the waters off the Horn of Africa, the vast expanse of the Western Indian Ocean, and the Mozambique Channel. The issues facing coastal countries in this region are as diverse and complex as the geographies of these maritime spaces. The ten sub-Saharan governments with territorial waters in this area coordinate through regional efforts like the Djibouti Code of Conduct and the Indian Ocean Tuna Commission, among others.'
        },
        {
          tag: 'img',
          src: '../../assets/overview/maritime_instability_somalia.jpg',
          alt: 'Special protection unit in Berbera, Somaliland. Photo: Jean-Pierre Larroque, OEF.',
          caption: 'Special protection unit in Berbera, Somaliland. Photo: Jean-Pierre Larroque, OEF.'
        },
        {
          tag: 'p',
          html: 'From the Gulf of Aden to South Africa, <a class="maritime-mixed-migration inline" href="../maritime-mixed-migration">maritime mixed migration</a> is nearly omnipresent.  Some of those seeking better socioeconomic conditions head south along the Tanzanian and Mozambican coasts for South Africa. Many more take the dangerous journey north through Somalia or Djibouti toward the Arabian Peninsula. At all stages, migrants are vulnerable to forced labor, sex trafficking, and other forms of degradation.'
        },
        {
          tag: 'bigtext',
          html: 'Maritime insecurity in the Western Indian Ocean has global repercussions.'
        },
        {
          tag: 'p',
          html: 'The transnational criminal networks in this area are entrenched and their activities fuel conflict around the globe. <a class="illicit-trade inline" href="../illicit-trade">Illicit trading in arms, wildlife, drugs, and contraband</a> links East African ports to distant markets in the Middle East, Southeast Asia, and beyond. These activities provide weapons for African insurgent groups, fill the coffers of separatists and drug cultivators in South Asia, and corrupt the massively important seaports that oversee the majority of Africa’s international commerce.'
        },
        {
          tag: 'bigtext',
          html: 'Though Somali piracy has declined, war in Yemen is bringing new maritime threats.'
        },
        {
          tag: 'p',
          html: 'The waters in the north, in the Gulf of Aden and around Somalia, are among the least stable on the planet. Besides the latent threat of <a class="piracy inline" href="../piracy">Somali pirates,</a>, several military vessels have been targeted and hit by anti-ship missiles by militants in Yemen. Seaborne improvised explosive devices resembling sea mines have been spotted, and there have been incidents of <a class="piracy inline" href="../piracy#3">attempted maritime terrorism</a> against shipping and oil terminals in the region. These events have the potential to affect international shipping traffic through the Red Sea, which is among the world’s most important global transportation chokepoints.'
        },

        {
          tag: 'p',
          html: 'Throughout the island nations off the east coast of Africa, <a class="fisheries inline" href="../fisheries">illegal, unreported, and unregulated (IUU) fishing</a> is one of the primary concerns. These islands have operated as tax havens, attracting “white-collar crime” and providing money-laundering services for the area’s transnational criminal networks. Many of these states have taken significant measures to combat money laundering and other financial crimes, and in the process have strengthened their banking sectors.'
        },
        {
          tag: 'p',
          html: 'Farther south, the waters are calmer and more stable. Criminals exploit weak maritime enforcement capacity and engage in smuggling out of some of Africa’s largest ports, but the problems are less severe than they are in the northwest Indian Ocean. With the recent reduction to the size of the High Risk Area for piracy, some of the private security contractors employed to protect vessels and oil rigs are going out of business.'
        },
        {
          tag: 'p',
          html: 'Maritime enforcement capacity remains low throughout the region, but new developments, including the 2017 Jeddah Amendment to the Djibouti Code of Conduct, will enhance regional cooperation and increase the likelihood that multinational efforts to improve maritime security will be successful.'
        }
      ] // end of els array
    },
    { // Card 2
      title: 'Gulf of Guinea Overview',
      menu: 'Gulf of Guinea Overview',
      metadata: {
        owner: 'Greg Clough',
        description: 'This card introduces Yaounde and major issues in these states.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        extent: [[-25, -45],
          [110, 32]],
        legend: 'Stable Seas Maritime Security Index Score',
        tooltipHTML: function(tooltipVal) {
          var score = Math.round(issueAreaData[issueArea]
            .metadata.countryData[tooltipVal].Average * 100);
          updatePointer(score);
          return 'Average score:<br />' + score + ' / 100';
        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'Average', false)
        }
      },
      els: [{
          tag: 'h1',
          text: 'Gulf of Guinea Overview',
        },
        {
          tag: 'caption',
          text: 'The global hotspot for piracy, armed robbery, and extractives crime'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<div class="brew-10 legend-entries light">Sub-Saharan members of the Yaoundé Code of Conduct</div>'
        // },
        {
          tag: 'p',
          html: 'Twenty one sub-Saharan countries line the long coastline that stretches from the waters off Senegal to South Africa’s Cape of Good Hope. The heart of the region, the Gulf of Guinea, faces what is perhaps the world’s most severe maritime security challenge. Tremendous natural resources, proximity to onshore violent non-state actors, and limited maritime law enforcement capabilities leave countries vulnerable to <a class="piracy inline" href="../piracy">piracy</a>, <a class="piracy inline" href="../piracy#1">crude oil-related crime</a>, smuggling, and more.'
        },
        {
          tag: 'img',
          src: '../../assets/overview/oil_platform_Niger_delta_PiusUtomiEkpei_getty.jpg',
          alt: 'Oil platform in the Niger delta. Photo: Pius Utomi Ekpei, AFP/Getty Images.',
          caption: 'Oil platform in the Niger delta. Photo: Pius Utomi Ekpei, AFP/Getty Images.'
        },

        {
          tag: 'bigtext',
          html: 'Oil wealth boosts national incomes, but also attracts transnational crime.'
        },
        {
          tag: 'p',
          html: 'There have been repeated attacks against shipping and oil infrastructure both at sea and on shore within the Niger Delta. These events have the potential to affect international shipping traffic. Even more worrisome for the workers who either transit the Gulf of Guinea as seafarers or as employees of extractive industries is the highly efficient system of kidnapping for ransom that has developed over the last few years. The frequency and violence of these kidnappings have earned the Gulf of Guinea the distinction of being the world’s most violent maritime space.'
        },
        {
          tag: 'p',
          html: 'For many coastal states in West Africa, <a class="fisheries inline" href="../fisheries">illegal, unregulated, and unreported (IUU) fishing</a> is threatening the long-term sustainability of the <a class="blue-economy inline" href="../blue-economy">Blue Economy</a>. IUU fishing reduces the catch available for local artisanal fishers and threatens local food security while allowing foreign fishing vessels to profit through resource theft. Though extensive legal regimes are in place, the region’s coast guards and maritime domain awareness are proving insufficient.'
        },
        {
          tag: 'p',
          html: '<a class="illicit-trade inline" href="../illicit-trade#1">Drug smuggling</a>, <a class="illicit-trade inline" href="../illicit-trade#3">weapons trafficking</a>, <a class="illicit-trade inline" href="../illicit-trade#4">illicit trade in wildlife</a>, and <a class="maritime-mixed-migration inline" href="../maritime-mixed-migration">human trafficking</a> are also common in the West African maritime space. Combating each of these crimes presents unique challenges. While the world’s most trafficked animal, the pangolin, makes its home in African states and its illicit trade can be countered at its point of origin, the drug trade often uses African states as a transshipment point en route to Europe. These activities undermine good governance while funding narcotics networks that stretch from the Americas to West Africa and Europe.'
        },
        {
          tag: 'bigtext',
          html: 'Maritime enforcement capacity is improving, but the Gulf of Guinea continues to suffer from high rates of piracy and armed robbery at sea.'
        },
        {
          tag: 'p',
          html: 'Fortunately, Africa’s Atlantic coast is also home to some of the region’s best-established multilateral maritime security strategies. Through agreements like the <a class="international-cooperation inline" href="../international-cooperation#3">Yaoundé Code of Conduct</a>, coastal countries are increasing maritime domain awareness and coordinating their responses to the region’s maritime security challenges.'
        }
      ] // end of els array
    },
    // { // Card 4
    //   title: 'Continental Cooperation',
    //   menu: 'Continental Cooperation',
    //   metadata: {
    //     owner: 'Ben Lawellin',
    //     description: 'Introduces the difficulties in combatting these crimes across Africa.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: 'card-eez-layer',
    //     translate: [],
    //     highlights: [],
    //     tooltip: true,
    //     units: {
    //       text: 'xo units',
    //       multiplier: 100
    //     },
    //     load: function(index, csv) { // ### *** This only should be for the first card ...
    //       var layer = 'card-' + index + '-layer'; // Class EEZs or countries?
    //       d3.select('.card-eez-layer')
    //         .classed(layer, true);
    //     },
    //     switch: function(index) {
    //       // class according to Lome ratification
    //       var lome = issueAreaData[issueArea].metadata.countryData;
    //
    //       lome.forEach(function(country, i) {
    //         if (country.ia1c4 == 1) {
    //           d3.selectAll('.country.' + country.iso3)
    //             .classed('active', true)
    //             .transition()
    //             .delay(i * 10)
    //             .style('fill', rampColor(0.5))
    //             .style('stroke', rampColor(1));
    //
    //           d3.selectAll('.eez.' + country.iso3)
    //             .classed('active', true)
    //             .transition()
    //             .delay(i * 10)
    //             .style('stroke', function() {
    //               return rampColor(1);
    //             });
    //         }
    //       });
    //
    //     }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'Continental Cooperation',
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'Working toward Africa-wide solutions'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Highlights represent sub-Saharan countries that have signed the AU\'s Lomé Charter</em>'
    //     },
    //
    //     {
    //       tag: 'p',
    //       html: 'African law enforcement and security institutions are faced with problems common throughout the continent: corruption, lack of professionalization of the security sector, limited resources, underdeveloped port infrastructure, and the dynamic and adaptive nature of violent non-state actors.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/overview/continental_cooperation.jpg',
    //       alt: 'First technical meeting to evaluate the Yaoundé Code of Conduct. Photo credit: Jean-Pierre Larroque',
    //       caption: 'First technical meeting to evaluate the Yaoundé Code of Conduct.<br />Photo credit: Jean-Pierre Larroque'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Several African-led initiatives are making progress against these problems. While many of these initiatives are still in their infancy, they show great promise in developing Africa’s <a class="blue-economy inline" href="../../blue-economy">Blue Economy</a> and the protections necessary to safeguard it.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The African Peace and Security Architecture (APSA) guides all multilateral security affairs in the African Union. Within the APSA, the principle pillar is the Peace and Security Council, which is in turn supported by a variety of structures centered on decision-making processes related to the prevention, management, and resolution of crises and conflicts along with post-conflict reconstruction and development in the continent. These structures include the Commission, the Panel of the Wise, the Continental Early Warning System (CEWS), the African Standby Force (ASF), and the Peace Fund. While the maritime component of the APSA is small, the ASF, the CEWS, and other entities do incorporate modest maritime structures into the larger peace and security architecture.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The ASF is a continental multilateral peacekeeping force operating throughout mainland Africa. The ASF consists of military, police, and civilian components, with very minimal maritime components, operating under the guidance of the African Union. Stood up in order to act in times of crisis such as the Rwandan genocide, the ASF was created to prevent subsequent atrocities from occurring. The ASF comprises five Standby Brigades divided into different geographic zones throughout the continent. Currently, only the East Africa Standby Brigade has an operational maritime component. However, as in many institutions throughout Africa, there is a significant lack of capacity in both the ASF land and maritime components. As of late 2017, no ASF brigade has deployed in support of an ongoing conflict.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The Lomé Charter is another continent-wide peace and security framework, but it deals more explicitly in the maritime realm. The aim of the charter was to make the maritime sector a key driver of Africa’s economic and social development. The charter is a binding agreement among 30 countries on maritime safety and security signed in October 2016 in Lomé, Togo. One of the most significant facets of the charter is the linkage of the development of the <a class="blue-economy inline" href="../../blue-economy">Blue Economy</a> to the necessary <a class="maritime-enforcement inline" href="../../maritime-enforcement">protections</a> to secure these vital resources. For instance, without protections set in place to secure fishing grounds from IUU fishing, currently abundant fishing areas could quickly become overfished if law enforcement mechanisms or resource management plans are not put in place.'
    //     }
    //   ] // end of els array
    // },
    // { // Card 5
    //   title: 'Our Team',
    //   menu: 'Our Team',
    //   metadata: {
    //     owner: 'Curtis Bell',
    //     description: 'Briefly introduce the three organizations.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: 'card-eez-layer',
    //     extent: [
    //       [-80, -80],
    //       [180, 80]
    //     ],
    //     translate: [],
    //     highlights: ['SOM', 'KEN', 'FRA', 'ETH', 'SYC', 'MUS', 'MDG', 'MOZ', 'GAB', 'GHA', 'CMR', 'TGO', 'COG', 'DJI',
    //       'UGA', 'ITA', 'GBR', 'COL', 'BEL', 'AUT', 'ZAF', 'IDN', 'BHR', 'TZA', 'CHN', 'CHE', 'MLT', 'VNM', 'CAN', 'USA', 'CPV'
    //     ],
    //     load: function(index, csv) { // ### *** This only should be for the first card ...
    //       var layer = 'card-' + index + '-layer'; // Class EEZs or countries?
    //
    //
    //
    //     },
    //     switch: function(index) {
    //       var offices = ['USA', 'GBR', 'SOM', 'KEN', 'COL'];
    //
    //       offices.forEach(function(office, i) {
    //         d3.selectAll('.country.' + office)
    //           .classed('active', true)
    //           .style('stroke', 'black');
    //       });
    //     }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'Our Team',
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'Working towards peace through governance'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Highlighted countries show locations where we have worked to promote good maritime governance in support of this project.</em>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/stable_seas_intro_oef_logo.png'
    //     },
    //     {
    //       tag: 'p',
    //       html: '<em>The Stable Seas Maritime Security Index</em> is being developed by One Earth Future (OEF) through its programs OEF Research, Oceans Beyond Piracy and Secure Fisheries. OEF is a self-funded, private operating foundation that seeks to create a more peaceful world through collaborative, data-driven programs that contribute to thought leadership on global issues. OEF is based in the United States in Broomfield, Colorado, with field staff operating in Somalia, Kenya, and Colombia.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/oceans_beyond_piracy_logo.png'
    //     },
    //     {
    //       tag: 'p',
    //       html: '<strong>Oceans Beyond Piracy</strong> believes that the solutions for addressing piracy and maritime crime should come from within the community of stakeholders. We work with an extensive—and growing—number of experts to find solutions to maritime crime. Through meetings and workshops we host, our research and analysis, on-the-ground regional involvement in areas affected by piracy and maritime crime, and our development and encouragement of new cross-sector partnerships, we support the international community in efforts to bring an end to contemporary maritime piracy. More information can be found at <a href="http://www.obp.ngo" target="_blank">www.obp.ngo</a>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/oef_research_logo.png'
    //     },
    //     {
    //       tag: 'p',
    //       html: '<strong>OEF Research</strong> produces empirical and actionable research for the purpose of eliminating the root causes of war. Related OEF Research products include investigations of the behavior of private firms operating in fragile states, the long-term impact of maritime piracy on seafarers and their families, and the role of non-state actors in maritime governance. More information can be found at <a href="http://oefresearch.org" target="_blank">www.oefresearch.org</a>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/secure_fisheries_logo.png'
    //     },
    //     {
    //       tag: 'p',
    //       html: '<strong>Secure Fisheries</strong> combines science-based research with a policy-oriented approach to combat illegal fishing and support sustainable fisheries. Operating primarily in Somalia, Somaliland, and the Lake Victoria region, we serve as a bridge between security efforts at sea and stability and prosperity efforts on land. More information can be found at <a href="http://www.securefisheries.org" target="_blank">www.securefisheries.org</a>'
    //     }
    //     //###ADD DROPDOWNS FOR PUBLICATIONS FOR EACH PROGRAM.
    //   ] // end of els array
    // }
    { // Card 3
      title: 'About the Scores',
      menu: 'About the Scores',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Briefly introduce the three organizations.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        tooltip: true,
        legend: 'Stable Seas Maritime Security Index Score',
        tooltipHTML: function (iso) {
        //  console.log(iso);
          var val = issueAreaData[issueArea].metadata.countryData[iso].Average;
          val = Math.round(val * 100);
          updatePointer(val);
          return "Average Score:<br />" + val + " / 100";
        //  updatePointer(val);
        //  console.log(val);
        },
        translate: [],
        highlights: [],
        load: function(index, csv) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer'; // Class EEZs or countries?
          d3.select('.card-eez-layer')
            .classed(layer, true);

        },
        switch: function(index) {
          choropleth(index,1, 'Average', false);
        }
      },
      els: [{
          tag: 'h1',
          text: 'About the Scores',
        },
        {
          tag: 'caption',
          text: 'Informing improved maritime security strategies'
        },
        {
          tag: 'p',
          html: 'The Stable Seas Maritime Security Index combines original research with information from external stakeholders and secondary sources to create country-by-country scores on nine maritime security issues: 1) international cooperation, 2) the rule of law, 3) maritime enforcement capacity, 4) coastal welfare, 5) development of the blue economy, 6) fisheries, 7) piracy and armed robbery at sea, 8) illicit maritime trades, and 9) maritime mixed migration.'
        },
        {
          tag: 'p',
          html: 'Each score has a possible range of 0 to 100, with higher scores always representing more desirable outcomes. Issues that have become more localized, like piracy and armed robbery, are very high for much of the region but acutely low in concentrated hotspots. More pervasive problems, like illicit maritime trades, are represented by very low scores nearly everywhere.'
        },
        {
          tag: 'p',
          html: 'The measures presented here reflect the best available information about complex and under-reported issues occurring in expansive remote areas. Some issue scores necessarily reflect best faith estimates rather than exact and verifiable figures. Readers can find methodology summaries throughout the website, along with complete datasets and technical notes from our main page at <a href="https://stableseas.org/">www.stableseas.org</a>.'
        },
        {
          tag: 'p',
          html: 'We plan to update these scores annually as new information becomes available.'
        }

      ] // end of els array
    }
  ]
}
