var maritimeEnforcementData = {
  metadata: { // Independent data source for each page
    version: '1.0.0',
    name: 'Maritime Enforcement',
    updates: true,
    /*
         here is where you write updates
         do one line per update, like
         added legend to card 3
         added citations to card 5
         input thumbnail path to card 4
         loaded point data

         */
    index: 4,
    code: 'maritimeEnforcement',
    path: 'maritime-enforcement',
    countryData: {},
    csv: '../../data/maritime-enforcement/maritimeEnforcement.csv',
    color: '#354EA1',
    order: -1,
    description: 'In states where maritime enforcement is employed, smugglers and traffickers cannot operate freely and fisheries laws are enforced.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback);
  },
  cards: [
    { // Card 0
      title: 'Maritime Enforcement',
      menu: 'Maritime Enforcement',
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
        legend: 'Maritime Enforcement Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          tooltipVal = Math.round((tooltipVal * 100));
          updatePointer(tooltipVal);
          return "Maritime Enforcement:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
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
          text: 'Maritime Enforcement'
        },
        {
          tag: 'caption',
          text: 'Building capacity to enhance maritime governance'
        },
        {
          tag: 'p',
          html: 'Good maritime governance is not possible without navies and coast guards that are adequate for monitoring territorial waters and exclusive economic zones. Where states are up to this task, smugglers and traffickers cannot operate freely and fisheries laws are enforceable. However, inadequate capacity to govern the maritime space can hamper a country’s efforts to regulate maritime activity and effectively render any maritime legislation irrelevant. Poor capacity in this area provides tempting opportunities for those who seek to profit from the absence of real enforcement of maritime law.'
        },
        {
          tag: 'img',
          src: '../../assets/maritime-enforcement/maritime-enforcement-coin-cloud.png',
          alt: 'Maritime Enforcement and related issues'
        },

        {
          tag: 'p',
          html: 'Our research finds that maritime enforcement capabilities are more closely associated with some maritime threats than with others. Piracy and armed robbery, for example, occur in target-rich environments, regardless of local maritime enforcement capacity. Trafficking in illicit goods that move through large seaports is also seemingly undeterred by coastal patrol capabilities. However, we do find that strong maritime enforcement capacity is closely associated with international cooperation and the development of the blue economy.'
        },
        {
          tag: 'p',
          html: 'This section reviews the four main components of our score: EEZ difficulty, coastal patrol assets, maritime domain awareness, and naval capacity. The final card summarizes our methods and describes our data.'
        },
      ] // end of els array
    }, // End of first element of cards object
    { // Card 1
      title: 'Assessing the Challenge',
      menu: 'Assessing the Challenge',
      metadata: {
        owner: 'Jay Benson',
        description: 'Importance of not only vessels, but communications and monitoring equipment.'
      },
      map: {
        type: 'continuous',
        path: '../../data/maritime-enforcement/information-sharing-centers.js',
        scale: [],
        classes: 'card-2-layer',
        translate: [],
        tooltip: true,
        legend: 'Maritime Domain Awareness Score ####?',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].mda;
          tooltipVal = Math.round((tooltipVal * 100));
          updatePointer(tooltipVal);
          return "Maritime Domain Awareness:<br />" + tooltipVal + " / 100";

        },
        highlights: null,
        load: function(index, file) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {
          // Show loaded GIS layer
          choropleth(index, 1, 'mda')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Assessing the Challenge'
        },
        {
          tag: 'caption',
          text: '??'
        },
        {
          tag: 'p',
          html: 'Every state in the Stable Seas Index is presented with a unique geographic challenge in ensuring the security of its maritime space. Stable Seas measures the scope of the hurdles presented to each state by its maritime geography, because this geography defines their maritime enforcement needs. When considering the scope of these geographic challenges four components are likely to be important:'
        },
        {
          tag: 'ul',
          rows: ['EEZ Size- EEZ’s across Africa range extensively in size. The Seychelles has an EEZ of 1,336,559 square km, which is larger than the land area of France, Spain and the United Kingdom combined (<a href="https://data.worldbank.org/indicator/AG.LND.TOTL.K2?year_high_desc=true" target="_blank">World Bank</a>). The Democratic Republic of Congo, by contrast, has an EEZ of 1,606 square km, roughly 832 times smaller. Obviously, this means they have significantly different needs when it comes to the capacity to provide security and governance in their respective maritime domains.','Coastline Length- Coastlines are important because they represent the space in which threats to security in the maritime domain can move onshore. Long coastlines are difficult to monitor, allowing opportunities for nontraditional security threat like trafficking in weapons, drugs and illicit goods to make their make their way onshore.', "Number of Maritime Boundaries- The number of maritime neighbors a state has is not a threat to security in itself, but higher numbers of maritime neighbors do present a problem of coordination and information sharing. Even more than on land, maritime boundaries are difficult to monitor and control and security threats at sea are inherently transnational. Without strong coordination and information sharing with maritime neighbors, effective responses to emerging threats at sea are incredibly difficult. In this vital coordination task, a state such as Madagascar, with five maritime neighbors, faces a more significant challenge than a state like Gambia, with only one.", "Number of Maritime Disputes- Territorial disputes represent a clear challenge to maritime security and governance. It is rare that they lead to actual armed conflict between states, but they often create areas of unclear or disputed authority at sea, hampering efforts to counter maritime crime and realize the full potential of the blue economy."]
        },
        {
          tag: 'p',
          html: 'The geography of Africa’s extensive maritime domain presents significant challenges but also incredible opportunities. By enhancing the region’s maritime enforcement capabilities through additional resources, improved maritime domain awareness, strengthened regional cooperation, and continued capacity building efforts, effective maritime security and governance can be provided, transforming this challenge into a tremendous asset.'
        },
        // {
        //   tag: 'links',
        //   items: [{
        //       org: '<sup>1</sup> DefenceWeb, “European Union Enhances Maritime Awareness of Seychelles Air Force,” April 7, 2014,',
        //       url: 'http://www.defenceweb.co.za/index.php?option=com_content&view=article&id=34272:european-union-enhances-maritime-awareness-of-seychelles-air-force&catid=35:Aerospace&Itemid=107'
        //     },
        //     {
        //       org: '<sup>4</sup> CRIMARIO, “The IORIS Network,” 2016,',
        //       url: 'http://www.crimario.eu/en/information-sharing/the-ioris-network/'
        //     },
        //     {
        //       org: '<sup>5</sup> CRIMARIO, “Achievements,” 2017,',
        //       url: 'http://www.crimario.eu/en/training/achievements/'
        //     },
        //   ],
        // }
      ]

    },
    { // Card 2
      title: 'Maritime Domain Awareness',
      menu: 'Maritime Domain Awareness',
      metadata: {
        owner: 'Jay Benson',
        description: 'Importance of not only vessels, but communications and monitoring equipment.'
      },
      map: {
        type: 'continuous',
        path: '../../data/maritime-enforcement/information-sharing-centers.js',
        scale: [],
        classes: 'card-2-layer',
        translate: [],
        tooltip: true,
        legend: 'Maritime Domain Awareness Score ####?',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].mda;
          tooltipVal = Math.round((tooltipVal * 100));
          updatePointer(tooltipVal);
          return "Maritime Domain Awareness:<br />" + tooltipVal + " / 100";

        },
        highlights: null,
        load: function(index, file) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {
          // Show loaded GIS layer
          choropleth(index, 1, 'mda')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Maritime Domain Awareness'
        },
        {
          tag: 'caption',
          text: 'A prerequisite for effective maritime governance'
        },
        {
          tag: 'p',
          html: 'Maritime domain awareness (MDA) is the ability to collect, analyze, and disseminate information on a variety of activities in the maritime domain which may affect safety, security, the environment, and economic activity. The sheer size of the maritime space (Mozambique, for example, has an EEZ larger than the land area of Metropolitan France), the limited resources, and the high level of activity makes having even a basic level of MDA incredibly challenging.'
        },
        {
          tag: 'img',
          src: '../../assets/maritime-enforcement/yaounde-information-sharing.jpg',
          alt: 'Naval officers using SeaVision, a web-based system that supports developing MDA.',
          caption: 'Naval officers using SeaVision, a web-based system that supports developing MDA.' // from http://www.crimario.eu/en/2017/02/16/visualising-maritime-data-in-madagascar/
        },
        {
          tag: 'p',
          html: 'MDA in the region is in need of further development. Few states have the number of vessels, aircraft, and remote sensing or communication systems necessary to maintain an accurate picture of activity in their respective maritime spaces. However, important steps are being taken to improve state and regional MDA capabilities.'
        },
        {
          tag: 'p',
          html: 'One of many examples at the level of the state is the donation made to Seychelles by EUCAP Somalia of imagery analysis software and training.<sup>3</sup> These tools should significantly enhance capacity for maritime intelligence collection. Further capacity building of this kind will be critical to developing the tools and skills necessary for accurate MDA in African waters.'
        },
        {
          tag: 'video',
          videoId: 'Ih6M-NfLybc',
          thumb: '../../assets/maritime-enforcement/eu-crimario-video-thumb.png' // ###
        },
        {
          tag: 'caption',
          text: 'EU CRIMARIO - Video on information sharing.'
        },
        {
          tag: 'p',
          html: 'MDA is also being built at a regional level. A prime example of this is the Critical Maritime Routes (CMR) initiative, an EU-funded program to enhance MDA in the Western Indian Ocean region and Gulf of Guinea. The program includes the development of a new information-sharing platform, the IORIS Network,<sup>4</sup> as well as trainings for individuals from regional maritime agencies on subjects such as data collection/analysis and information sharing which build MDA capabilities.<sup>5</sup> Similar information-sharing efforts are being made in the Gulf of Guinea via the <a class="international-cooperation inline" href="../../international-cooperation#4">Yaoundé Process</a>.'
        },
        {
          tag: 'p',
          html: 'Continuing to commit resources  to improved MDA both locally and through external capacity-building is critical, as it serves as the basis for addressing all other challenges to maritime governance and security in African waters.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>3</sup> DefenceWeb, “European Union Enhances Maritime Awareness of Seychelles Air Force,” April 7, 2014,',
              url: 'http://www.defenceweb.co.za/index.php?option=com_content&view=article&id=34272:european-union-enhances-maritime-awareness-of-seychelles-air-force&catid=35:Aerospace&Itemid=107'
            },
            {
              org: '<sup>4</sup> CRIMARIO, “The IORIS Network,” 2016,',
              url: 'http://www.crimario.eu/en/information-sharing/the-ioris-network/'
            },
            {
              org: '<sup>5</sup> CRIMARIO, “Achievements,” 2017,',
              url: 'http://www.crimario.eu/en/training/achievements/'
            },
          ],
        }
        // { tag: 'img',
        //   src: '../../assets/maritime-enforcement/mda-center.jpg',
        //   alt: 'MDA systems.',
        //   caption: 'MDA systems from www.imagesatintl.com.'
        // }
      ]
    }, // End of third object in cards array
    // { // Card deprecated
    //   title: 'Toxic Waste Dumping',
    //   menu: 'Toxic Waste Dumping',
    //   metadata: {
    //     owner: 'Sarah Glaser',
    //     description: 'Electronics dumping as an example of lack of MDA, and debunking assumptions in Horn of Africa.'
    //   },
    //   map: {
    //     path: '../../data/maritime-enforcement/toxic-dumping-locations.csv',
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     load: function(index, csv) {
    //       var layer = 'card-' + index + '-layer';
    //
    //       d3.csv(csv, function(locations) {
    //         locations.forEach(function(row) {
    //           row.lat = +row.lat;
    //           row.lon = +row.lon;
    //         })
    //
    //         var locg = mapg.append('g')
    //           .classed('card-layer toxic-dumping-locations invisible ' + layer, true);
    //
    //         locg.selectAll('circle')
    //           .data(locations)
    //           .enter()
    //           .append('circle')
    //           .attr('cx', function(d) {
    //             return projection([d.lon, d.lat])[0];
    //           })
    //           .attr('cy', function(d) {
    //             return projection([d.lon, d.lat])[1];
    //           })
    //           .attr('r', '8px')
    //           .classed('toxic-dumping-incident', true)
    //           .style('fill', function() {
    //             return rampColor(1);
    //           });
    //
    //       })
    //     },
    //     switch: function(target) {
    //       var layer = 'card-' + target + '-layer';
    //       d3.select(layer)
    //         .classed('invisible', false);
    //
    //     }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'Toxic Waste Dumping'
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'Not pervasive but significant'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: 'Points on the map represent potential coastal sources of toxic contamination of the maritime environment. Sites are designated as such due to the presence of agrofuel and biomass energy plants, E-waste, waste importation zones, chemical industries, toxic waste treatment, uncontrolled dump sites, mineral processing, mine tailings, and thermal power plants. <br>Source: <a href="https://ejatlas.org/" target="_blank">Environmental Justice Atlas</a>'
    //     },
    //     {
    //       tag: 'p',
    //       text: 'The Yaoundé Code of Conduct, the Djibouti Code of Conduct, and the Lomé Charter recognize illegal dumping of toxic waste as part of transnational organized crime in the maritime domain. A lack of comprehensive numbers, and the illegal nature of the problem, obscures understanding of how widespread this problem really is.'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/maritime-enforcement/mauritania-ship-graveyard.jpg',
    //       alt: '.',
    //       caption: 'Ship graveyard in Mauritania. Photo credit: Sebastián Losada.'
    //     },
    //     {
    //       tag: 'p',
    //       text: 'In some cases, the perception of the problem is far greater than the reality. But weak maritime enforcement and monitoring capacity have enabled some high- profile illegal dumping cases:'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'There are few confirmed cases of dumping. In 2006, a ship flagged in Panama but chartered by a multinational company docked in the Port of Abidjan, C&ocirc;te d\'Ivoire, carrying 500 tons of hazardous waste, which was later dumped into the water illegally. Ultimately, 100,000 people sought medical attention, the company responsible settled a lawsuit, and several Ivoirian officials were forced to resign.<sup>6</sup>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/maritime-enforcement/toxic-waste-protesters.png',
    //       caption: 'Protesters of toxic waste following the incident when an international oil-trader dumped 500 tons of toxic waste off the coast of Côte d’Ivoire. Photo credit: Issouf Sanogo/AFP/Getty Images.'
    //     }, //###Make sure image is in
    //     {
    //       tag: 'p',
    //       html: 'Dumping in Somalia has long been alleged but difficult to prove. A series of reports in the 1990s suggested  inland toxic waste dumping by Italian and other European groups in Somalia was widespread. Several reports suggested waste was also dumped at sea; after the 2004 Indian Ocean tsunami, waste canisters washed up on Somali beaches. The Environmental Justice Atlas reports the appearance of rashes, fish kills, groundwater pollution, and even deaths as a result of this dumping. But to date, widespread dumping in Somali waters has not been confirmed.<sup>7</sup>'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'In Africa, illegal dumping of toxic waste threatens public health, water quality, and environmental justice. Developed nations exploit the less stringent environmental regulations in African countries and weaknesses in maritime domain awareness. As a result, toxic waste—including e-waste from electronics, a significant fraction of which originates in Western nations—enters African nations legally and illegally.'
    //     },
    //     {
    //       tag: 'h4',
    //       text: 'Legal Efforts'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Three international legal instruments attempt to control the movement of hazardous waste across national boundaries. The London Convention of 1972 permanently banned the dumping of radioactive and industrial waste in the world’s oceans. The Basel Convention of 1989 aimed to reduce the generation of hazardous waste and encourage environmentally sound disposal and treatment. In 1991, twelve African nations negotiated the Bamako Convention, which addressed weaknesses in the Basel Convention and explicitly banned importation of hazardous and radioactive waste. Regardless, hundreds of thousands of tons of waste are shipped to Africa each year, some of which ends up illegally dumped at sea or in ports.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Ultimately, waste dumping and importation in Africa appears to be largely a terrestrial problem. Recent toxic leakage from ship graveyards in West Africa<sup>8</sup> is cause for concern, but overall the threat posed is believed to be neither systemic nor widespread.'
    //     },
    //     {
    //       tag: 'links',
    //       items: [{
    //           org: '<sup>6</sup> BBC, “Trafigura Found Guilty of Exporting Toxic Waste,” 23 July 2010,',
    //           url: 'http://www.bbc.com/news/world-africa-10735255'
    //         },
    //         {
    //           org: '<sup>7</sup> Chris Milton, “Somalia Used as Toxic Dumping Ground,” <em>The Ecologist</em>, 1 March 2009,',
    //           url: 'http://www.theecologist.org/News/news_analysis/268581/somalia_used_as_toxic_dumping_ground.html'
    //         },
    //         {
    //           org: '<sup>8</sup> Daniel Cressey, “West Africa’s Toxic Problem,” <em>Nature</em>, 20 January 2011,',
    //           url: 'http://www.nature.com/news/2011/110120/full/news.2011.35.html'
    //         },
    //       ]
    //     }
    //   ]
    // }, // End of fourth  object in cards array
    // Card 3
    { // Card 3
      title: 'Coastal Patrol Assets',
      menu: 'Coastal Patrol Assets',
      metadata: {
        owner: 'Jay Benson',
        description: 'Most states lack committed coast guards.'
      },
      map: {
        type: 'continuous',
        path: '',
        scale: [],
        classes: 'card-4-layer',
        translate: [],
        highlights: null,
        legend: 'Coastal Patrol Assets Score',
      //  categories: ['Navy', 'Law Enforcement', 'Navy & Law Enforcement'],
        tooltip: true,
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].vessels;
        //  var legend = issueAreaData[issueArea].cards[activeCard].map.categories;
        //   console.log(legend);
           tooltipVal = Math.round((tooltipVal * 100));
           updatePointer(tooltipVal);
          return "Coastal Patrol Assets Score: " + tooltipVal + ' / 100';
        },
        load: function(index, file) {
          // Color map with vessel score chloropleth ...
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {

          choropleth(index, 1, 'vessels');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Coastal Patrol Assets'
        },
        {
          tag: 'caption',
          text: 'Policing African Waters'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<div class="brew-00 legend-entries">Countries with a navy.</div><br /><div class="brew-20 legend-entries">Countries that have a coast guard.</div><br /><div class="brew-40 legend-entries">Countries with both a navy and a coast guard.</div><br /> <br> Source: <a href=\'https://www.iiss.org/-/media/documents/publications/the%20military%20balance/military%20balance%202016/mb2016%20further%20assessments.pdf?la=en.\' target=\'_blank\'>2016 Military Balance report</a>'
        // },
        {
          tag: 'p',
          html: 'Most states in sub-Saharan Africa have navies, but relatively few have forces such as coast guards dedicated to maritime law enforcement. While navies are built primarily for national defense and warfighting, maritime law enforcement is intended to counter a variety of illicit activities at sea, including but not limited to <a href="../../piracy" class="piracy inline">piracy</a>, <a href="../../human-trafficking" class="maritime-mixed-migration inline"> maritime mixed migration</a>, <a href="../../fisheries" class="fisheries inline">IUU fishing</a>, and transport of drugs, arms, and wildlife.<sup>9</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/maritime-enforcement/cameroon-coast-guard.jpg',
          alt: 'Cameroon Coast Guard',
          caption: 'Centre for Multinational Coordination (CMC) in Douala, Cameroon. Photo by Jean-Pierre Larroque, OEF.'
          // from http://www.ghananewsagency.org/social/ghana-and-u-s-maritime-forces-complete-combined-operation-73501
        },
        {
          tag: 'p',
          text: 'Maritime law enforcement also requires unique skillsets and knowledge in areas such as evidence collection, the conduction of search and rescue operations, and fisheries management which are not core to the primary mission of navies. While navies need to work primarily with other military branches and national defense actors, maritime law enforcement requires effective collaboration with fisheries agencies, police forces, and other civilian actors. All of these differences mean that the use of navies for law enforcement purposes is not natural and at times ineffective. However, using navies for law enforcement also has benefits, which are to avoid splitting the chain of command, and a greater mutualization of scarce assets. Where navies are used for law enforcement, they need adapted assets and specific training.'
        },
        {
          tag: 'p',
          html: 'Thankfully, the region is experiencing an increase in maritime law enforcement capabilities through both internal and external capacity-building. One example of these efforts is South Africa’s Project Biro, which commissioned three inshore and three offshore patrol vessels, increasing the country’s maritime law enforcement capacity and lessening the burden of such patrols for the navy’s frigates, which are significantly more expensive to operate.<sup>10</sup>'
        },
        {
          tag: 'h4',
          text: 'International Partnerships'
        },
        {
          tag: 'p',
          html: 'External capacity-building in this area comes in the form of training and equipment contributed by a variety of state and multilateral actors. One example of such efforts is the Africa Maritime Law Enforcement Partnership (AMLEP) program.<sup>11</sup> AMLEP involves training and multinational operations/boardings which are focused on countering maritime crime, as opposed to national defense. In 2016, AMLEP multinational patrols conducted 32 boardings which identified 50 violations of maritime law, and issued $1.2 million in fines. While these interdictions are valuable in their own right, the skills developed in the course of such operations will be even more critical to creating sustained maritime security in the region.'
        },
        {
          tag: 'video',
          videoId: '9qUiwnR90mE',
          thumb: '../../assets/maritime-enforcement/usns-spearhead-video-thumb.png', // ###
          caption: 'From the USNS Spearhead'
        },
        {
          tag: 'p',
          html: 'African maritime law enforcement is also being strengthened through multilateral assistance, the most prominent example of which is the UNODC’s Global Maritime Crime Programme (GMCP).<sup>12</sup> GMCP has enhanced maritime law enforcement by developing models for prosecuting acts of piracy, training regional legal professionals on issues related to maritime crime, constructing law enforcement facilities, and training coast guard personnel in counter-trafficking and smuggling operations.<sup>13</sup> Like the AMLEP program described above, these kinds of capacity building projects will be crucial to ensuring the region has the infrastructure, equipment, and training to effectively govern its maritime space.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>9</sup> Augustus Vogel, “Navies versus. Coast Guards: Defining the Roles of African Maritime Security Forces,” <em>African Security Brief</em>, No. 2, December 2009, p. 2.'
            },
            {
              org: '<sup>10</sup> Timothy Walker, “Can Project Brio Help Africa to Overcome its Maritime Security Challenges?” <em>Institute for Security Studies</em>, May 4, 2015,',
              url: 'https://issafrica.org/iss-today/can-project-biro-help-africa-to-overcome-its-maritime-security-challenges'
            },
            {
              org: '<sup>11</sup> Africom, “Africa Maritime Law Enforcement Partnership (AMLEP) Program,”',
              url: 'http://www.africom.mil/what-we-do/security-cooperation/africa-maritime-law-enforcement-partnership-amlep-program'
            },
            {
              org: '<sup>12</sup> UNODC,”UNODC Global Maritime Crime Programme,”',
              url: 'https://www.unodc.org/unodc/en/piracy/index.html'
            },
            {
              org: '<sup>13</sup> UNODC, “Maritime Crime Programme- Indian Ocean,”',
              url: 'https://www.unodc.org/unodc/en/piracy/indian-ocean-division.html'
            },
          ]
        }
      ]
    }, // End of fifth  object in cards array
    { // Card 4
      title: 'Improving Naval Capability',
      menu: 'Improving Naval Capability',
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
        legend: 'Naval Capability Assessment Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['navalCapacity'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Naval Capability Assessment Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'navalCapacity');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Improving Naval Capability'
        },
        {
          tag: 'caption',
          text: 'Building capacity to enhance maritime governance'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate a greater number of coastal patrol vessels Source: 2016 Military Balance Report</em>'
        // },
        //
        // {
        //   tag: 'p',
        //   html: 'Good maritime governance is not possible without navies and coast guards that are adequate for monitoring territorial waters and exclusive economic zones. Where states are up to this task, smugglers and traffickers cannot operate freely and fisheries laws are enforceable. However, inadequate capacity to govern the maritime space can hamper a country’s efforts to regulate maritime activity and effectively render any maritime legislation irrelevant. Poor capacity in this area provides tempting opportunities for those who seek to profit from the absence of real enforcement of maritime law.'
        // },

        {
          tag: 'p',
          html: 'Naval, coastguard, and maritime police capacities in sub-Saharan Africa vary widely. Navies like those of Nigeria and South Africa are comparatively robust, but the gap separating these states from all other coastal sub-Saharan states is quite large.'
        },
        {
          tag: 'img',
          src: '../assets/maritime-enforcement/global_military_spending-01.png',
          alt: 'Pie graph'
          //caption: 'al estimate.'
        },
        {
          tag: 'p',
          html: 'According to the <a href=\'https://www.iiss.org/-/media/documents/publications/the%20military%20balance/military%20balance%202016/mb2016%20further%20assessments.pdf?la=en.\' target=\'_blank\'>2016 Military Balance report</a>, Nigeria has more than five times as many vessels as any other country in the region. South Africa operates the region’s only submarines and is the only state with the capacity to engage in any kind of naval warfare. The disparity also applies to naval personnel, with the navies of just three countries (Nigeria, South Africa, and the Democratic Republic of the Congo comprising more than 60% of the region’s sailors.'
        },
        {
          tag: 'p',
          html: 'Conversely, the vast majority of sub-Saharan maritime security actors are extremely under-resourced. Liberia has a 50-member coast guard to patrol an EEZ larger than the land area of the United Kingdom. Thirteen states in the region have fewer than ten vessels each with which to provide security to their massive maritime domains, and these tend to be small inshore vessels incapable of providing more than basic coastal patrol operations.'
        },
        {
          tag: 'p',
          html: 'Enforcement capabilities are generally low given the severity of the maritime security threats seen across the region. The thirty sub-Saharan countries covered in this report have approximately 36,000 sailors in total, nearly 10,000 fewer than Japan’s Maritime Self-Defense Force.<sup>1</sup> This lack of capacity is a result of both limited resources and an understandable tendency across the region to focus on land-based security threats. Total sub-Saharan military spending in 2016 was $19.2 billion, just 1.1% of estimated global military spending,<sup>2</sup> despite the presence of several of the globe’s most active conflicts. Given the urgency with which African states must address security threats on shore, a relatively small share of African military spending is available to maintain maritime enforcement capability.'
        },
        {
          tag: 'img',
          src: '../assets/maritime-enforcement/south_africa_navy_ltcommander_501416590.png',
          alt: 'Lieutenant Commander Zimasa Mabela aboard South African naval vessel. Photo credit: Rodger Bosch/AFP/Getty Images.',
          caption: 'Lieutenant Commander Zimasa Mabela aboard South African naval vessel. Photo credit: Rodger Bosch/AFP/Getty Images.'
        }, //###Insert image
        {
          tag: 'p',
          html: 'Despite this lack of resources, enforcement capacity in the region is steadily improving. The acquisition of additional maritime security assets and the continued development of actors’ human capital through investments in training, capacity building, and <a class="maritime-enforcement inline internal-ref" data-link="5">multilateral exercises</a> is giving regional forces the ability to more actively govern their maritime domains. This has resulted in an increasing number of enforcement operations countering maritime security threats such as <a class="fisheries inline" href="../fisheries">illegal, unreported, and unregulated (IUU) fishing</a>, <a class="illicit-trade inline" href="../illicit-trade">illicit trades</a>, and <a class="piracy inline" href="../piracy">piracy</a>. Continuing to improve the region’s enforcement capacity will require additional resources, training, and regional cooperation.'
        },
        {
          tag: 'img',
          src: '../assets/maritime-enforcement/bosaaso-port-police.jpg',
          alt: 'Boasasso Port Police. Photo credit: Oceans Beyond Piracy.', // ### Spelling on Bosasso?
          caption: 'Boasasso Port Police. Photo credit: Oceans Beyond Piracy.'
        }, //###Insert image
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> Céline Pajon, “Japan’s Coast Guard and Maritime Self-Defense Force: Cooperation among Siblings,” <em>Maritime Awareness Project</em>, December 1, 2016,',
              url: 'http://maritimeawarenessproject.org/2016/12/01/japans-coast-guard-and-maritime-self-defense-force-cooperation-among-siblings/'
            },
            {
              org: '<sup>2</sup> Nan Tian, Aude Fleurant, Pieter D. Wezeman and Siemont T Wezeman, “Trends in World Military Expenditure, 2016,” SIPRI, April 2017, p. 4',
              url: 'https://www.sipri.org/sites/default/files/Trends-world-military-expenditure-2016.pdf'
            },
          ],
        }

      ] // end of els array
    },
    // { // Card 4
    //   title: 'The Role of Multinational Exercises',
    //   menu: 'The Role of Multinational Exercises',
    //   metadata: {
    //     owner: 'Emina Sadic',
    //     description: 'What kinds of exercises are being used to increase capacity?'
    //   },
    //   map: {
    //     scale: [],
    //     classes: 'card-5-layer',
    //     translate: [],
    //     highlights: null,
    //     load: function(index, file) { // ### *** This only should be for the first card ...
    //       // Class GIS layer with layer.
    //       var layer = 'card-' + index + '-layer';
    //       d3.select('.card-eez-layer')
    //         .classed(layer, true);
    //     },
    //     switch: function(index) {
    //       // ### Still need to work out how to represent countries that are in multiple lists!
    //       var cutlass = ['DJI', 'MUS', 'MOZ', 'COM', 'KEN', 'MDG', 'SYC', 'UGA', 'USA'],
    //         obangame = ['AGO', 'CPV', 'COG', 'COD', 'CIV', 'GNQ', 'GIN', 'GNB', 'LBR', 'NAM', 'STP', 'SEN',
    //           'SLE', 'BEN', 'CMR', 'GAB', 'GHA', 'NGA', 'TGO', 'USA'
    //         ],
    //         nemo = ['FRA', 'BEN', 'CMR', 'GAB', 'GHA', 'NGA', 'TGO']; // ### lots of overlap with obangame!
    //
    //       cutlass.forEach(function(member, i) {
    //         d3.selectAll('.country.' + member)
    //           .classed('active', true) // flag so style gets cleared...!
    //           .transition().delay(i * 10)
    //           .style('fill', colorBrew[0][0])
    //           .style('stroke', colorBrew[0][1]);
    //
    //
    //         d3.selectAll('.eez.' + member)
    //           .classed('active', true) // flag so style gets cleared...!
    //           .transition().delay(i * 10)
    //           .style('stroke', colorBrew[0][1]);
    //       });
    //
    //       obangame.forEach(function(member, i) {
    //         d3.selectAll('.country.' + member)
    //           .classed('active', true)
    //           .transition().delay(i * 10)
    //           .style('fill', colorBrew[1][0])
    //           .style('stroke', colorBrew[1][1]);
    //
    //
    //         d3.selectAll('.eez.' + member)
    //           .classed('active', true)
    //           .transition().delay(i * 10)
    //           .style('stroke', colorBrew[1][1]);
    //       });
    //
    //       nemo.forEach(function(member, i) {
    //         d3.selectAll('.country.' + member)
    //           .classed('active', true)
    //           .transition().delay(i * 10)
    //           .style('fill', colorBrew[2][0])
    //           .style('stroke', colorBrew[2][1]);
    //
    //
    //         d3.selectAll('.eez.' + member)
    //           .classed('active', true)
    //           .transition().delay(i * 10)
    //           .style('stroke', colorBrew[2][1]);
    //       });
    //     }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'The Role of Multinational Exercises'
    //     },
    //     //###NEED THUMBNAILS FOR BOTH VIDEOS
    //     {
    //       tag: 'caption',
    //       text: 'Building capacity and interoperability'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<div class="brew-00 legend-entries">Cutlass Express participants.</div><br /><div class="brew-10 legend-entries">Obangame Express participants.</div><br /><div class="brew-20 legend-entries">Nemo & Obangame participants.</div><br />'
    //     },
    //     {
    //       tag: 'p',
    //       text: 'Maritime security threats require cooperation and coordination among African navies and international actors. Coastal states are able to enhance their capacity-building efforts and interoperability measures through international exercises conducted on both coasts of Africa.'
    //     },
    //     {
    //       tag: 'blockquote',
    //       html: '“We know that the issues of maritime security involves a lot of people and a lot of issues across many agencies in each of our governments. So, there has to be cooperation within our governments as well as cooperation between our count[r]ies. Exercises like this are extremely important to make that possible.”',
    //       source: 'Andrew Haviland, Charge d\' Affaires<br />U.S. Embassy Côte  d\'Ivoire<sup>14</sup>',
    //       link: 'http://www.navy.mil/submit/display.asp?story_id=99689' // What about internal references?
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Falling under the umbrella of the African Partnership Station, East Africa’s Cutlass Express and West Africa’s Obangame Express are annual regionally focused exercises facilitated by the U.S. Naval Forces Europe-Africa/U.S. 6th Fleet.<sup>15</sup> Obangame Express is designed to improve regional cooperation, maritime domain awareness, information-sharing practices, and tactical interdiction expertise among signatories of the Yaoundé Code of Conduct.<sup>16</sup> Collaboration with international actors allows these regional forces to learn how to counter illicit sea-based activity.<sup>17</sup>'
    //     },
    //     {
    //       tag: 'video',
    //       videoId: 'vkFQOqaxjP8',
    //       thumb: '../../assets/maritime-enforcement/multinational_cooperation_video.jpg'
    //     },
    //     {
    //       tag: 'caption',
    //       html: 'American and Senegalese sailors conduct visit, board, search, and seizure training aboard Senegalese naval vessel PHM Njambuur during Obangame Express 2016.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Further efforts to assist West African countries in their fight against <a class="piracy inline" href="../../piracy">piracy</a> and <a class="fisheries inline" href="../../fisheries">IUU fishing </a> include Exercise NEMO, a French initiative. The exercise seeks to strengthen a 2013 agreement between the Economic Community of Central African States (ECCAS) and the Economic Community of West African States (ECOWAS) to fight piracy in the Gulf of Guinea.<sup>18</sup>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/maritime-enforcement/us-navy-cameroon-obangame.jpg',
    //       alt: 'US Navy and Cameroonian sailors during a simulated boarding of a suspect vessel for Obangame Express.  Photo credit: John Herman/US Navy.',
    //       caption: 'US Navy and Cameroonian sailors during a simulated boarding of a suspect vessel for Obangame Express.  Photo credit: John Herman/US Navy.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'In a similar vein, Cutlass Express is an exercise that serves to assess and improve the maritime law enforcement capacity of East African coastal and island states, promote regional security, and inform planning and operations. In order to achieve these goals, focused scenarios include the interdiction of illicit arms, drugs, natural resources, and people that pose a threat to regional stability. Partners in this exercise include Comoros, Djibouti, Kenya, Mauritius, Mozambique, Seychelles, Uganda, and the United States.<sup>19</sup>'
    //     },
    //     {
    //       tag: 'blockquote',
    //       html: '“We must continue in good spirit of partnership and alliances to support our continent and ensure that trade can advance freely. No one nation can deal with the challenges that we face in the world today. The ocean is so vast that a united effort is required to make sure that our oceans are safe.”',
    //       source: 'Rear Adm. B.K. Mhlana, Fleet Flag Officer<br />South African Navy<sup>20</sup>',
    //       link: 'http://www.navy.mil/submit/display.asp?story_id=99689' // What about internal references?
    //     },
    //
    //     {
    //       tag: 'p',
    //       html: 'International exercises highlight the willingness of affected countries to enhance their coast guard and naval capacity to adequately respond to maritime threats ranging from piracy to human smuggling. By simulating real-life scenarios of the potential maritime threats existing in each region, international exercises can test the abilities of participating states to respond to these threats, highlighting areas of capacity strength and offering opportunities to improve upon weaker points.'
    //     },
    //     {
    //       tag: 'video',
    //       videoId: '593TZ8oVd08',
    //       thumb: '../../assets/maritime-enforcement/exercise_cutlass_express_video.jpg', // ###
    //       caption: 'Maritime forces of Djibouti and Sudan prepare to board a ship during exercise Cutlass Express 2016.<sup>21</sup>'
    //     },
    //     {
    //       tag: 'caption',
    //       html: 'Maritime forces of Djibouti and Sudan prepare to board a ship during exercise Cutlass Express 2016.'
    //     },
    //     {
    //       tag: 'links',
    //       items: [{
    //           org: '<sup>14</sup> U.S. 6th Fleet Public Affairs, “Exercise Obangame Express 2017 Concludes with Closing Ceremonies,” United States Navy, 3 April 2017,',
    //           url: 'http://www.navy.mil/submit/display.asp?story_id=99689'
    //         },
    //         {
    //           org: '<sup>15</sup> Africom, “Exercise Cutlass Express 2017 Concludes,” <em>DefenceWeb</em>, 9 February 2017,',
    //           url: 'http://www.defenceweb.co.za/index.php?option=com_content&view=article&id=46748:exercise-cutlass-express-2017-concludes&catid=51:Sea&Itemid=106'
    //         },
    //         {
    //           org: '<sup>16</sup> Africom, “Obangame Express,” United States Africa Command, accessed 29 August 2017,',
    //           url: 'http://www.africom.mil/what-we-do/exercises/obangame-express'
    //         },
    //         {
    //           org: '<sup>17</sup> Barthélemy Blédé, “US and West Africa Join Forces on Maritime Security,” Institute for Security Studies, 7 April 2017,',
    //           url: 'https://issafrica.org/iss-today/us-and-west-africa-join-forces-on-maritime-security'
    //         },
    //         {
    //           org: '<sup>18</sup> Ronald Mutum, “Nigerian, French Navy in Joint Exercise,” <em>AllAfrica.com</em>, 12 September 2016,',
    //           url: 'http://allafrica.com/stories/201609130110.html'
    //         },
    //         {
    //           org: '<sup>19</sup> Africom, “Cutlass Express,” United States Africa Command, accessed 29 August 2017,',
    //           url: 'http://www.africom.mil/what-we-do/exercises/cutlass-express'
    //         },
    //         {
    //           org: '<sup>20</sup> David Rider, “Exercise Cutlass Express 2015,” <em>Maritime Security Review</em>, 21 November 2014,',
    //           url: 'http://www.marsecreview.com/2014/11/exercise-cutlass-express-2015/'
    //         },
    //         {
    //           org: '<sup>21</sup> United States Navy, “Maritime Forces of Djibouti and Sudan Prepare to Board a Ship During Exercise Cutlass Express 2016,” 3 February 2016,',
    //           url: 'http://www.navy.mil/view_imagex.asp?id=210947&t=1'
    //         },
    //       ]
    //     }
    //   ]
    // },
    // Card 5
    // {
    //   title: 'Training Together',
    //   menu: 'Training Together',
    //   metadata: {
    //     owner: 'Emina Sadic',
    //     description: 'Success story: togo/Ghana/US/Nigeria.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: 'card-6-layer',
    //     translate: [],
    //     extent: [
    //       [-10, 23],
    //       [51, -8]
    //     ],
    //     highlights: ['NGA', 'STP', 'BEN', 'TGO', 'GHA'],
    //     load: function(index, file) { // ### *** This only should be for the first card ...
    //       // Load GIS data from file
    //
    //       // Class GIS data with layer
    //       var layer = 'card-' + index + '-layer';
    //
    //     },
    //     switch: function(index) {
    //       d3.select('.card-' + index + '-layer')
    //         .classed('invisible', false);
    //     }
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'Training Together'
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'The case of the MT Maximus'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Highlighted countries participated in USNS Spearhead</a>'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'The significance of the multinational training exercises in the Gulf of Guinea was highlighted in 2016 when MT <i>Maximus</i> was hijacked by fourteen pirates 70 nm south of Côte d’Ivoire in an attempt to steal 4,700 metric tons of diesel fuel cargo.'
    //     },
    //     {
    //       gif: true,
    //       tag: 'video',
    //       videoId: 'iOrjS1qmNDk',
    //       thumb: '../../assets/maritime-enforcement/Maximus-Hijacking.gif'
    //     },
    //
    //     {
    //       tag: 'p',
    //       html: 'At the same time that pirates hijacked the vessel and took 18 crew members hostage, the Ghanaian navy was conducting Africa Maritime Law Enforcement Partnership  operations with the United States’ USNS <i>Spearhead</i>. USNS <i>Spearhead</i> assisted the regional navies by tracking the vessel for two days as it sailed from Ivoirian to Ghanaian waters, at which point the tracking mission was handed over to the Ghanaian navy. While Benin and Togo were unable to mobilize a response effort, Nigeria was able to dispatch two naval vessels, NNS <i>Okpabana</i> and NNS <i>Sagbama</i>, reinforced with detachments of the Nigerian Special Boat Service, to recapture <i>Maximus</i>. <sup>22</sup> Nigerian forces subsequently apprehended six pirates.<sup>23</sup>'
    //     },
    //     {
    //       tag: 'blockquote',
    //       html: '“The training and exercises, as well as the combined operations that have taken place over the years, directly contributed to the successful interception and takedown of the pirates onboard the MAXIMUS.”<br /><br />Lt. Cdr. Todd Behney,  U.S. Africa Command maritime programs officer<br />US Coast Guard<sup>24</sup>',
    //       //  source: '',
    //       //    link: '### need a URL!'       // What about internal references?
    //     },
    //     {
    //       tag: 'p',
    //       html: 'As a model of regional cooperation under the Yaoundé Code of Conduct, the mission demonstrated that regional actors possess the coordination capacity to effectively respond to maritime threats. Similarly, the mission validated the effectiveness and significance of multinational exercises conducted with international navies, such as the Obangame Express exercise series, which contributed to the ability of regional naval actors to quickly respond to the situation.'
    //     },
    //     {
    //       tag: 'video',
    //       videoId: 'c5sCpFqv2Kw',
    //       thumb: '../../assets/maritime-enforcement/nigerian_navy_video_thumb.png' // ### put in GIF animation and thumbNAILS John Hoopes
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Previous efforts by the United States and France to help develop the national maritime operation centers of four Gulf of Guinea countries, Benin, Ghana, Nigeria, and Togo, including the use of remote sensors, radars, automated information systems, and databases, led these respective states to have the ability to track the vessel as it traversed the waters of those countries nearly 800 miles from its starting point.<sup>25</sup>'
    //     },
    //     {
    //       tag: 'blockquote',
    //       html: '“International cooperation is the new mantra for maritime security. We cannot go it alone.”',
    //       source: 'Rear Admiral Henry Bablola<br />Nigerian Navy<sup>26</sup>',
    //       link: '### need a URL!' // What about internal references?
    //     }, //###CUT THIS QUOTE AND PLACE IT INTO VERY TOP OF CARD 2.7 AIMS 2050
    //     {
    //       tag: 'links',
    //       items: [{
    //           org: '<sup>22</sup> Nathan D. Herring, “West Africa Piracy Case Highlights U.S. Capacity Building Efforts,” United States Africa Command, 11 March 2016,',
    //           url: 'https://www.africom.mil/media-room/article/28044/west-africa-piracy-case-highlights-u-s-capacity-building-efforts'
    //         },
    //         {
    //           org: '<sup>23</sup> Dirk Steffen, “West African Navies Coming Of Age?” Center for International Maritime Security, 7 March 2016,',
    //           url: 'http://cimsec.org/coming-of-age-of-the-west-african-navies/22919'
    //         },
    //         {
    //           org: '<sup>24</sup> Herring, “West Africa Piracy Case.”'
    //         },
    //         {
    //           org: '<sup>25</sup> Herring, “West Africa Piracy Case.”'
    //         },
    //         {
    //           org: '<sup>26</sup> Michelle Faul, “Navies From The United States, Ghana, Togo And Nigeria Track Hijacked Tanker Through Waters Off Five Countries Before Nigerian Naval Forces Storm Aboard,” <em>US News and World Report</em>, 27 February 2016,',
    //           url: 'https://www.usnews.com/news/world/articles/2016-02-26/us-nigerian-navies-ship-rescue-success-for-cooperation'
    //         },
    //       ]
    //     }
    //   ]
    // },
    // // Card 7
    { // Card 4
      title: 'Data and Methods',
      menu: 'Data and Methods',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Methods.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-7-layer',
        translate: [],
        highlights: null,
        tooltip: true,
        legend: 'Maritime Enforcement Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          tooltipVal = Math.round((tooltipVal * 100));
          updatePointer(tooltipVal);
          return "Maritime Enforcement:<br />" + tooltipVal + " / 100";

        },
        load: function(index, file) { // ### *** This only should be for the first card ...
          // Color EEZ according to master Stable Seas index
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
          text: 'Methodology'
        },
        // { tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate greater maritiime enforcement capability</em>'
        // },
        {
          tag: 'p',
          text: 'We measure and define Maritime Enforcement as each country’s capacity to effectively patrol its territorial waters and EEZ for the purposes of investigating illicit activity and enforcing maritime law. The score is not concerned with legal regimes or naval warfighting efforts, though both of these related concepts are greatly affected by Maritime Enforcement. Rather, this score focuses on the difficulty of managing a state’s specific maritime space, its capacity to perform constabulary duties in that space, and the development and regional integration of its maritime domain awareness systems.'
        },

        {
          tag: 'p',
          text: 'We measure the Maritime Enforcement Score with four components:'
        },
        {
          tag: 'h4',
          text: 'Difficulty'
        },
        {
          tag: 'p',
          html: 'States face unique challenges depending on the geography of their maritime space. Our difficult score captures this variation by considering factors like coastline length, EEZ size, and relations between each country and its immediate maritime neighbors.'
        },
        {
          tag: 'h4',
          text: 'Coastal Patrol Assets'
        },
        {
          tag: 'p',
          text: 'We measure the number of coastal patrol vessels available to federal forces, which may include a navy, coast guard, port police, and/or other maritime enforcement division. We derive these vessel counts from The Military Balance 2016, an annual global report from the International Institute for Strategic Studies (IISS). This report did not include information for Sao Tome and Principe or Comoros, so we supplemented these data with in-house research and inquiries to regional stakeholders. We adopt the coastal patrol vessel definition from the Military Balance report:'
        },
        {
          tag: 'blockquote',
          html: 'Patrol and Coast Combatants: “surface vessels designed for coastal or inshore operations. These include corvettes... offshore patrol ships…, patrol craft…, and patrol boats.”'
        },
        {
          tag: 'h4',
          text: 'Expert Assessment of Naval Capacity'
        },
        {
          tag: 'p',
          html: 'Counts of vessels miss some important aspects of naval capability. Equipment can be outdated and navies can be underfunded or inadequately trained. To address this reality and complement our Coastal Patrol Vessels Component, we use an in-house expert assessment to measure naval capability by gauging what activities fall within and beyond the capabilities of African navies.'
        },
        {
          tag: 'h4',
          text: 'Expert Assessment of Maritime Domain Awareness (MDA)'
        },
        {
          tag: 'p',
          html: 'Finally, we assess the extent to which a country has made a deliberate commitment to establishing the onshore infrastructure needed to develop maritime domain awareness. It takes into account the establishment of Maritime Operations Centers (MOCs), the information gathering, processing and sharing capabilities of those MOCs, and the county\'s level of integration into multinational MSA constructs, such as participation in regional MOCs or Zone information sharing arrangements.'
        },
        {
          tag: 'p',
          text: 'More details about all of these scores are available on our data page.'
        }
      ]
    } // End of eighth  object in cards array
  ] // End of cards array
};
