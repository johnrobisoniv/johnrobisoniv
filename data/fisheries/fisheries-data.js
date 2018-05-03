var fisheriesData = {
  metadata: { // Independent data source for each page
    version: '0.0.2',
    name: 'Fisheries',
    updates: true,
    /*
         here is where you write updates
         do one line per update, like
         added legend to card 3
         added citations to card 5
         input thumbnail path to card 4
         loaded point data

         */
    index: 7,
    code: 'fisheries',
    path: 'fisheries',
    countryData: {},
    csv: '../../data/fisheries/fisheries.csv',
    color: '#06A89D',
    order: -1,
    description: 'Fish are one of the last remaining wild sources of protein on the planet, and are a critical component of both food and economic security.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback);
    // var md = issueAreaData[issueArea].metadata;
    //
    // d3.csv(csv, function(vals) {
    //   vals.forEach(function(d) {
    //     d.ia7c0 = +d.ia7c0;
    //     d.ia7c2 = +d.ia7c2;
    //   });
    //   issueAreaData[issueArea].metadata.countryData = vals;
    //   callback('coastalWelfare load csv function callback');
    // });
    //
    // d3.csv('../../data/' + md.path + '/indexValues.csv', function(vals) {
    //
    //   issueAreaData[issueArea].metadata.indexData = vals;
    //
    // });
  },
  cards: [{ // Card 0
      title: 'Fisheries',
      menu: 'Fisheries',
      metadata: {
        owner: 'Sarah Glaser',
        description: 'Introduces the issue.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Fisheries Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_INDEX'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Fisheries Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_INDEX');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Fisheries',
        },
        {
          tag: 'caption',
          text: 'A critical component of food and economic security'
        },
        {
          tag: 'p',
          html: 'Fish are one of the last remaining wild sources of protein on the planet and they are a critical component of both food and economic security around the world. Fish provide a low-fat source of vitamins, iron, and calcium for billions of people, especially in countries designated as Low-Income Food-Deficit Countries by the UN Food and Agriculture Organization (FAO).<sup>1</sup> In Africa, fisheries employ 5.6 million people and international trade in fisheries products is a pillar of national economies.<sup>2</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/fisheries-coin-cloud.png',
          alt: 'Coin Cloud - Fisheries and related issues ' // ###ks have to put x img here
          //caption: 'al estimate.'
        },
        {
          tag: 'p',
          html: 'Healthy fisheries are connected to a strong blue economy, low occurrences of piracy, and high rule of law. When fisheries are abundant and well managed, they can contribute to maritime security by boosting national economies, local livelihoods, and nutrition. Nations that have formal governance mechanisms and strong fisheries laws are better able to monitor and enforce policies that support healthy fisheries. Likewise, clean waters and healthy fish stocks support economic growth and reinforce governance norms. Nations that do not prioritize fisheries management and governance are not fully leveraging a critical natural resource and may lose profits and food to larger, faster foreign and distant-water fishing fleets.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/tuna_somali.jpg',
          //  alt: 'Coin Cloud - Fisheries and related issues ' // ###ks have to put x img here
          caption: 'Coastal tuna caught in Somali waters. Photo: Jean-Pierre Larroque/One Earth Future.'
        },
        {
          tag: 'p',
          html: 'As fish stocks face shortages and even collapse, competition for fishing grounds and for this mobile resource is growing. At sea, fisheries conflict can include violent attacks by foreign industrial vessels on domestic artisanal vessels; illegal, unreported, and unregulated (IUU) fishing; forced labor and slavery; and territorial disputes between and within national borders. Fishing vessels can also be used to surreptitiously transport weapons, drugs, and other illicit goods. Fisheries therefore contribute directly and indirectly to maritime security by stoking territorial and resource-based conflicts and by providing food and income that produce community resilience and reduce the root causes of conflict.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> Low-Income Food-Deficit Countries, or LIFDCs, are defined by the UN FAO as countries that have an annual net income per person at a level that qualifies for International Development Association assistance (currently $1,395 per person) and are net importers of food; “Low-Income Food-Deficit Countries,” The Food and Agriculture Organization of the United Nations, accessed 1 September 2017.',
              url: 'http://www.fao.org/focus/e/SpeclPr/LIFDCs.htm'
            },
            {
              org: '<sup>2</sup> <em>The State of World Fisheries and Aquaculture 2016</em> (Rome: The Food and Agriculture Organization of the United Nations, 2016).',
              url: 'http://www.fao.org/3/a-i5555e.pdf'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 1
      title: 'Fisheries Health',
      menu: 'Fisheries Health',
      metadata: {
        owner: 'Sarah Glaser',
        description: 'How IUU fishing undermines security, with link to maritime mixed migration and slavery at sea.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Fisheries Health Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_HEALTH'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Fisheries Health Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_HEALTH');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          html: 'Fisheries Health',
        },
        {
          tag: 'caption',
          text: 'Sustainable fisheries are necessary for maritime security'
        },
        {
          tag: 'p',
          html: 'Wild fisheries support human health and livelihoods. In 2014, 37 million people were involved in wild capture fisheries, and about 7.5 million of those were women. Developing countries were responsible for 60 percent of fishery quantity and 54 percent of export trade in fisheries products. And global per capita consumption has reached a historic high of over 20 kg per year.<sup>3</sup>'
        },
        {
          tag: 'p',
          html: 'But this rising consumption comes at a cost: today, over 40% of all fish stocks are collapsed or overfished, and another 40% are fully exploited. Global fish stocks have little capacity to support higher catches. Notably, in 2014 aquaculture exceeded wild fish catch for the first time in history.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/Kleisner_stockstatus_final.png', // This should be on the Stable Seas Deck - comments
          //    alt: 'Source: Agnew, et al, (2009) Estimating the Worldwide Extent of Illegal Fishing, PLoS One, 4(2)',
          caption: 'Stock status for fisheries around the world.'
        },
        {
          tag: 'p',
          html: 'The health of fish stocks can refer both to the sustainability of current levels of catch, but also to the capacity of a country to profitably and efficiently use their natural resources. Our measure of fisheries health, the Ocean Health Index’s Wild Caught Fisheries sub-goal, accounts for both concepts. For fisheries to contribute optimally to maritime security, those fisheries should be used to support national income and nutrition at a sustainable rate that ensures fisheries for future generations.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/food-provision-wild-caught-fisheries.jpeg', // This should be on the Stable Seas Deck - comments
          //    alt: 'Source: Agnew, et al, (2009) Estimating the Worldwide Extent of Illegal Fishing, PLoS One, 4(2)',
          caption: 'Wild Caught Fisheries score from <a href="http://www.oceanhealthindex.org/region-scores/maps" target="_blank">Ocean Health Index</a>'
        },
        {
          tag: 'p',
          html: 'In sub-Saharan Africa, marine fisheries health is fairly poor, but this is similar to stocks in North and South America, Europe, and most of Asia. Threats to healthy marine fisheries include overfishing, climate change, poor governance and management, IUU fishing, and ocean pollution. Fish stocks do not recognize international borders, so regional cooperation is critical for improving fisheries health.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>3</sup>“The State of World Fisheries and Aquaculture,” <em>Rome: The Food and Agriculture Organization of the United Nations, 2016</em> ',
              url: 'http://www.fao.org/3/a-i5555e.pdf'
            },
            // {
            //   org: '<sup>4</sup> D.J. Agnew, J. Pearce, G. Pramod, T. Peatman, R.A. Watson, J.R. Beddington, and T.J. Pitcher, “Estimating the Worldwide Extent of Illegal Fishing,” <em>PloS One</em> 4, no. 2 (2009), e4570.',
            //   url: 'http://doi.org/10.1371/journal.pone.0004570'
            // },
            // {
            //   org: '<sup>5</sup> Sarah Glaser, Paige Roberts, Robert Mazurek, Kaija Hurlburt, and Liza Kane-Hartnett, <em>Securing Somali Fisheries</em> (Denver: One Earth Future, 2015), doi: 10.18289/OEF.2015.001.'
            // },
          ]
        }
      ] // end of els array
    },
    { // Card 2
      title: 'Foreign Fishing',
      menu: 'Foreign Fishing',
      metadata: {
        owner: 'Kelsey Soeth',
        description: 'How we define good policy, development of legislation, enforcement.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Foreign Fishing Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_FOREIGN'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Foreign Fishing Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_FOREIGN');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Foreign Fishing',
        },
        {
          tag: 'caption',
          text: 'Fishing fleets from distant nations can undermine security in African waters'
        },
        {
          tag: 'p',
          html: 'The presence of foreign fishing vessels in EEZ waters can cause maritime insecurity and conflict. In African waters, domestic fishing fleets tend to be small-scale and artisanal, using small boats and gear. Foreign vessels, especially those from distant-water fleets that have traveled thousands of miles to fish, are larger, faster, and use larger sets of gear. This can cause direct conflict between domestic and foreign vessels. In some African countries, foreign vessels have been accused of destroying artisanal gear, crowding out smaller boats, destroying marine habitat, and depleting fisheries resources. Case studies in both East and West Africa demonstrate that illegal, unreported, and unregulated (IUU) fishing is often related to, and even caused by, the presence of foreign fishing vessels in a nation’s waters. This is not universally true, and some nations that host foreign fleets have low levels of IUU fishing. Likewise, not all foreign vessels perpetuate conflict.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/fish_military.jpg',
          alt: '',
          caption: 'Coast Guard officers approaches a suspect fishing vessel. Photo: Africom.'
        },
        {
          tag: 'p',
          html: 'IUU fishing exacerbates maritime insecurity and fuels armed conflict at sea, undermines national and international governance, and threatens the sustainability of fisheries. IUU fishing costs Mauritania, Senegal, The Gambia, Guinea-Bissau, and Sierra Leone $2.3 billion per year.<sup>4</sup> About 37% of all fish catch off West Africa and 18% off East Africa is considered illegal or unreported.<sup>5</sup> Foreign unregulated fishing accounts for twice as much fish catch as that made by the domestic artisanal fishing fleet in Somali waters.<sup>6</sup> While good estimates can be difficult to make, the emerging picture is clear: IUU fishing deprives African fishers of a significant source of income, and much of it is driven by distant-water fishing fleets from Europe and Asia.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/legal-vs-illegal-fishing.png',
          alt: '',
          caption: 'Source: Agnew, et al, (2009) Estimating the Worldwide Extent of Illegal Fishing, PLoS One, 4(2)'
        },

        {
          tag: 'p',
          html: 'Illegal fishing occurs in contravention of local, national, regional, or international law and can include fishing with banned gear, in closed locations or seasons, or without proper permission. Unreported fishing refers to fish catch that is not fully recorded or reported to proper authorities, often entering an illegal market. Unregulated fishing is that which occurs in areas lacking regulations to ensure resource sustainability and good management.'
        },
        {
          tag: 'p',
          html: 'Fortunately, growing attention to the challenge represented by IUU fishing and strong international will to solve this problem have produced a host of projects, alliances, and policies. <a href="https://stopillegalfishing.com/" target="_blank">Stop Illegal Fishing</a> has made significant progress in Africa by bringing attention to the problem of illegal fishing and partnering with governments, NGOs, civil society, and the fishing industry to stop illegal fishing in African waters. The Stimson Center’s <a href="http://naturalsecurityforum.org/number-crunch" target="_blank">Natural Security Forum</a> is tracking and mapping IUU fishing around the world.  <a href="http://globalfishingwatch.org/" target="_blank">Global Fishing Watch</a> is using satellite data to track and monitor fishing vessels around the world.'
        },
        {
          tag: 'p',
          html: 'In addition, in 2016 the Port State Measures Agreement (PSMA) entered into force with ratification by 25 countries, including Cabo Verde, Gabon, The Gambia, Ghana, Guinea, Madagascar, Mauritius, Mozambique, São Tomé, Senegal, the Seychelles, Somalia, South Africa, and Togo. The PSMA is an international treaty written by the UN Food and Agriculture Organization that strengthens enforcement and monitoring capabilities at ports to reduce the amount of IUU fish entering global marketplaces. The strong support from African nations is a promising sign of political will to increase maritime domain awareness around fisheries issues and to prioritize the health of wild fisheries.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>4</sup>Alkaly Doumbouya, Ousmane T. Camara, Josephus Mamie, Jeremias F. Intchama, Abdoulie Jarra, Salifu Ceesay, Assane Guye, Diene Ndiaye, Elye Beibou, Allan Padilla, and Dyhia Belhabib, “Assessing the Effectiveness of Monitoring Control and Surveillance of Illegal Fishing: The Case of West Africa,” <em>Frontiers in Marine Science</em> 50, no. 4 (2017), doi: 10.3389/fmars.2017.00050.',
              //url: 'http://dx.doi.org/10.18289/OEF.2017.014'
            },
            {
              org: '<sup>5</sup>D.J. Agnew, J. Pearce, G. Pramod, T. Peatman, R.A. Watson, J.R. Beddington, and T.J. Pitcher, “Estimating the Worldwide Extent of Illegal Fishing,” PloS One 4, no. 2 (2009), e4570.',
              url: 'http://doi.org/10.1371/journal.pone.0004570'
            },
            {
              org: '<sup>6</sup>Sarah Glaser, Paige Roberts, Robert Mazurek, Kaija Hurlburt, and Liza Kane-Hartnett, Securing Somali Fisheries (Denver: One Earth Future, 2015), doi: 10.18289/OEF.2015.001.',
              //  url: 'http://dx.doi.org/10.18289/OEF.2017.014'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 3
      title: 'Fisheries Legislation',
      menu: 'Fisheries Legislation',
      metadata: {
        owner: 'Robert Mazurek',
        description: 'Description and case study from Fish-I Africa, a partnership and information sharing center comprised of 8 east African nations with a focus on IUU fishing in Western Indian Ocean.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Fisheries Legislation Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_LEGISLATION'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Fisheries Legislation Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_LEGISLATION');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Fisheries Legislation',
        },
        {
          tag: 'caption',
          text: 'National efforts to protect a vital resource'
        },
        {
          tag: 'p',
          html: 'Minimizing conflict around fisheries requires strong national policies and resource governance, and most African states have enacted domestic fisheries legislation. We identified eight key factors these policies should include:<sup>7</sup> a fisheries observer program, data collection, foreign-vessel licensing, restrictions on foreign vessels, gear restrictions, endangered species protections, artisanal fisher protections, and catch limits based on maximum sustainable yield (MSY).'
        },
        {
          tag: 'p',
          html: 'More than one-third of the countries in the Stable Seas Maritime Security Index had provisions for at least six of eight factors in their fisheries legislation. All countries but Cameroon, which recently repealed their domestic fisheries legislation without replacement, have current federal fisheries legislation in place. Gear restrictions and provisions for the collection of scientific and statistical data were commonly mandated. Two-thirds of countries have also included foreign-vessel licensing and protections for artisanal fishers in their legislation.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/CE_IUUfishing.jpg',
          //  alt: '',
          caption: 'Mozambican armed forces simulate searching a fishing vessel suspected of illegal fishing in the 2013 Cutlass Express exercise. Photo: Tech. Sgt. Chad Thompson.'
        },
        {
          tag:'p',
          html: 'Endangered species protection was the only legislative factor included by fewer than one-third of states. However, a lack of endangered species protection in fisheries legislation does not necessarily indicate a lack of commitment to the protection of the marine environment. Gabon, for example, lacks explicit provisions for endangered species protection in its fisheries legislation, but Gabonese president Ali Bongo Ondimba announced at the 2017 UN Oceans Conference the creation of one of the African continent’s largest marine protected areas. The network of marine parks and aquatic reserves will protect 53,000 square kilometers of ocean, 27% of Gabon’s territorial waters. Gabon joins South Africa, Kenya, and Mauritius, among others, in hosting a marine protected area within its EEZ.'
        },
        {
          tag: 'blockquote',
          html: '“Seeing the results of the Pristine Seas expedition made me realize that our marine ecosystems were as rich and as precious as our better-known rain forests, and that we had to do for the oceans what my father, the late President Omar Bongo Ondimba, did for the forests when he created 13 national parks in 2002.” — President Ali Bongo Ondimba of Gabon'
        },
        {
          tag: 'p',
          html: 'While strong scores imply fairly robust fisheries management systems across the majority of African coastal states, in many cases they belie reality. Legislation alone is not indicative of capacity to enforce. Though the will to manage fisheries using modern legislative provisions is evident, and a heartening development after the purely mercantilist nature of colonial-era fisheries legislation, it is not sufficient for African fisheries to be managed solely on paper. States must proactively use these legislative provisions to cut down on illegal fishing activity and protect their resources.'
        },
        {
          tag: 'links',
          items: [{
            org: '<sup>7</sup> Paige M. Roberts, Laura C. Burroughs, and Robert H. Mazurek, “An Exploration of Federal Fisheries Management Agencies in Eastern Africa,” Secure Fisheries, 2017.',
            url: 'http://dx.doi.org/10.18289/OEF.2017.014'
          }, ]
        }
      ] // end of els array
    },
    { // Card 4
      title: 'Regional Fisheries Management Organizations',
      menu: 'Regional Fisheries Management Organizations',
      metadata: {
        owner: 'Paige Roberts',
        description: 'Visualizing the interactions among disparate uses of the marine space means they can be managed effectively to support economic sustainability in all the relevant sectors and avoid conflict over this multi-use space.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Measure of RFMO Involvement',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_RFMO'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of RFMO Involvement:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_RFMO');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Regional Fisheries Management Organizations',
        },
        {
          tag: 'caption',
          text: 'International cooperation addresses management of valuable highly migratory species'
        },
        {
          tag: 'p',
          html: 'Regional fisheries management organizations (RFMOs) are comprised of member states who have an interest in participating in shared management of fish stocks under the jurisdiction of an RFMO. Members may include those states whose waters are home to the fishes under management and distant water fishing nations who travel to fish inside the waters of an RFMO. There are seventeen RFMOs that cover over 90 percent of the world’s oceans.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/rfmo.jpg',
          caption: 'Jurisdictions of the five so-called tuna RFMOs that manage most of the world’s tuna stocks. Image: Pew Charitable Trusts.'
        },
        {
          tag: 'p',
          html: 'Membership in an RFMO is voluntary, and membership comes with both perks and responsibilities. Members vote on management provisions, decide how fishery quotas are allocated between countries, share information and intelligence, and work to improve the sustainability of fish in their waters. Members are bound by decisions made by the RFMO body and are required to submit annual reports documenting their compliance with regulations and detailing their catch of species covered by the RFMO’s mandate.'
        },
        {
          tag: 'p',
          html: 'The Indian Ocean Tuna Commission (IOTC) and the International Commission for the Conservation of Atlantic Tunas (ICCAT) are the primary RFMOs managing African fisheries. Thirty-one nations belong to the IOTC, including most fishing nations in East Africa. Fifty-two nations belong to ICCAT, including most fishing nations in West Africa.'
        },
        {
          tag: 'p',
          html: 'RFMOs are often criticized for allowing levels of fish catch higher than those recommended by scientific assessment and playing politics with fisheries. Member states may fail to comply with regulations, misreport catch, or block progress on legislative advances. But RFMOs are also critical venues for international collaboration and consensus on fisheries, especially migratory ones, that require sustained cooperation.'
        },
        //
        // {
        //   tag: 'links',
        //   items: [{
        //       org: '<sup>8</sup> Helen Massy-Beresford, “Where is the Fastest-Growing City in the World?” <em>The Guardian</em>, 18 November 2015.',
        //       url: 'https://www.theguardian.com/cities/2015/nov/18/where-is-the-worlds-fastest-growing-city-batam-niamey-xiamen'
        //     },
        //     {
        //       org: '<sup>9</sup> Laura Burke, Kathleen Reytar, Mark Spalding, and Allison Perry, <em>Reefs at Risk Revisited</em> (Washington, D.C.: World Resources Institute, 2011): chap. 3.',
        //       url: 'http://www.wri.org/sites/default/files/pdf/reefs_at_risk_revisited.pdf'
        //     },
        //     {
        //       org: '<sup>10</sup> “Marine Problems: Shipping,” the World Wildlife Federation, accessed 8 August 2017.',
        //       url: 'http://wwf.panda.org/about_our_earth/blue_planet/problems/shipping/'
        //     },
        //   ]
        // }
      ] // end of els array
    },
    { // Card 5
      title: 'Ocean Pollution',
      menu: 'Ocean Pollution',
      metadata: {
        owner: 'Paige Roberts',
        description: 'Visualizing the interactions among disparate uses of the marine space means they can be managed effectively to support economic sustainability in all the relevant sectors and avoid conflict over this multi-use space.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Measure of Pollution',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_POLLUTION'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of Pollution:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_POLLUTION');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Ocean Pollution',
        },
        {
          tag: 'caption',
          text: 'Healthy fisheries require healthy oceans'
        },
        {
          tag: 'p',
          html: 'Ocean pollution affects fish stocks in a variety of ways. Pathogens, like those contained in sewage outflow, can directly poison marine life and even sicken humans through bioaccumulation in seafood. Agricultural outflow, primarily fertilizers carried into coastal waters through river plumes and runoff, creates algal blooms, cloudy waters, and low oxygen conditions that have created massive Dead Zones in the world’s oceans. And recently, significant attention is being paid to the problem of plastic pollution that is choking marine life, destroying the aesthetic value of beaches, and making its way up the marine food chain and onto our plates.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/plastic_ocean.jpg',
          caption: 'Plastic pollution fills a beach Photo: Belguebli Mohammed.'
        },
        {
          tag: 'p',
          html: 'In Africa, most coastal waters are just as polluted as the rest of the world. Some of the small island nations have lower populations and therefore cleaner waters. Most coastal African states struggle with waste treatment, plastic and a lack of recycling facilities, and terrestrial runoff.'
        },
        {
          tag: 'img',
          src: '../../assets/fisheries/Clean_Waters.png',
          caption: 'Clean Waters Score from <a href="http://www.oceanhealthindex.org/region-scores/maps" target="_blank">Ocean Health Index</a>'
        },
        {
          tag: 'p',
          html: 'While not widespread, toxic waste dumping is also a problem for African waters. The Yauonde Agreement, the Djibouti Code of Conduct, and the Lome Charter recognize illegal toxic waste dumping as part of transnational organized crime in the maritime domain. In some cases, the perception of the problem is far greater than the reality. But weak maritime enforcement and monitoring capacity have enabled some high profile illegal dumping cases:'
        },
        {
              tag: 'ul',
              rows: ['In 2006, a ship flagged in Panama but chartered by a multinational company docked in the Port of Abidjan, Cote d’Ivoire carrying 500 tons of hazardous waste. Ultimately, 100,000 people sought medical attention, the company responsible settled a lawsuit, and several Ivoiran officials were <a href="http://www.bbc.com/news/world-africa-10735255" target="_blank">forced to resign</a>.', 'Dumping in Somalia has long been alleged but difficult to prove. A series of reports in the 1990s alleged vast inland toxic waste dumping by Italian and other European groups in Somalia. Several reports suggest waste also was dumped at sea.']
            },
        {
          tag: 'p',
          html: 'In Africa, illegal toxic waste dumping threatens public health, water quality, and environmental justice. Developed nations exploit less stringent environmental regulations in African countries and weaknesses in maritime domain awareness. As a result, toxic waste – including e-waste from electronics – enters African nations legally and illegally.'
        }
      ] // end of els array
    },
    { // Card 5
      title: 'Data and Methods',
      menu: 'Data and Methods',
      metadata: {
        owner: 'Sarah Glaser',
        description: 'Methods.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        path: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Fisheries Score',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['FI_INDEX'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Fisheries Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          // Class with layer

        },
        switch: function(index) {
          // Simply show target layer
          d3.select('.card-' + index + '-layer')
            .classed('invisible', false);

          choropleth(index, 1, 'FI_INDEX');
          //    console.log('choro')

        }
      },
      els: [{
          tag: 'h1',
          text: 'Data and Methods'
        },
        {
          tag: 'caption',
          text: 'How we created the Fisheries score'
        },
        {
          tag: 'p',
          html: 'The Fisheries Score incorporates five equally weighted components relevant to fisheries-related maritime insecurity and the health of fisheries: biological health of fish stocks, presence of foreign fishing vessels, strength of domestic fisheries law, membership in regional fisheries management organizations (RFMOs), and ocean pollution.'
        },
        {
          tag: 'h4',
          text: 'Fisheries Health'
        },
        {
          tag: 'p',
          html: 'The health of fish stocks is an indicator of how sustainable and reliable the resource is for future harvest. We use the score from the Wild-Caught Fisheries sub-goal of the Food Provision goal in the Ocean Health Index. The <a href="http://www.oceanhealthindex.org./" target="_blank">Ocean Health Index</a> measures countries on biological, physical, economic, and social factors to assess how sustainably humans are using the ocean. The Fisheries sub-goal measures how well a nation achieves optimal sustainable production of seafood compared to a biological baseline. The target is for a given nation to maintain a fish population at the level that produces maximum sustainable yield (known as BMSY). Countries are penalized for both underfishing and overfishing. Thus, this metric is not solely one of conservation—a nation that does not fish will not earn the highest score, because they are leaving potential revenue in the water.'
        },
        {
          tag: 'h4',
          text: 'Foreign Fishing'
        },
        {
          tag: 'p',
          html: 'The presence of foreign fishing vessels in EEZ waters can be a cause of maritime insecurity and conflict. We use data collected and maintained by <a href="http://www.seaaroundus.org/" target="_blank">Sea Around Us</a> that assigns all fish catch in an EEZ to a given country. Data are aggregated over all species caught and the total catch (in metric tons) by all foreign fleets is divided by total catch (domestic plus foreign catch) to measure the percentage of all catch inside an EEZ done by foreign vessels.'
        },
        {
          tag: 'h4',
          html: 'Fisheries Legislation'
        },
        {
          tag: 'p',
          html: 'Strong domestic fisheries laws include clear directives for management, provisions for enforcement, and mandates for data collection that inform fisheries management plans. When governments have strong fisheries laws, conflict is minimized through clear guidelines on access rights and approved fishing methods. We measure the strength of domestic fisheries laws by coding each piece of legislation, archived in the <a href="http://www.fao.org/documents/en/" target="_blank">FAO Document Depository</a>, for mandates on the following: a fisheries observer program, data collection, foreign-vessel licensing, restrictions on foreign vessels, gear restrictions, endangered species protections, protections for artisanal (domestic) fishers, and catch limits based on maximum sustainable yield. The component is calculated by summing the number of mandates in each piece of legislation and dividing by the maximum possible.'
        },
        {
          tag: 'h4',
          text: 'Regional Fisheries Management Organizations'
        },
        {
          tag: 'p',
          text: 'Governments that engage and collaborate with international fisheries bodies are more likely to adopt norms around fisheries management and scientific data collection and to adopt best practices for monitoring, control, and surveillance. Regional fisheries management organizations (RMFOs) are international bodies with voluntary membership for those countries whose fishing interests fall within RFMO jurisdiction. Some RFMOs are defined solely by geographic extent, while others are defined by the scope of the fishes they manage (e.g., tuna and other highly migratory species). We use maps showing the boundaries of four RFMOs—the Indian Ocean Tuna Commission, the International Commission for the Conservation of Atlantic Tunas, the Commission for the Conservation of Southern Bluefin Tuna, and the South East Atlantic Fisheries Organisation—to identify overlap between RFMO jurisdiction and EEZs. Scores were calculated by counting the number of RFMO memberships a country had from the pool of RFMOs that had overlapping jurisdictions (i.e., countries did not get penalized for not joining RFMOs outside their EEZs).'
        },

        {
          tag: 'h4',
          text: 'Ocean Pollution'
        },
        {
          tag: 'p',
          text: 'Marine pollution can negatively impact fisheries by disrupting breeding or feeding areas, reducing reproduction, or introducing diseases. It is also a proxy for coastal development which disrupts marine habitat like seagrass beds and coral reefs. We use the score from the Clean Waters goal in the Ocean Health Index. The Clean Waters goal measures pollution from chemicals, nutrients (agriculture), pathogens, and trash (including plastics) in EEZ waters.'
        },
        {
          tag: 'p',
          html: 'More details about all of these scores are available on our data page.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>11</sup> “FAO Document Depository,”',
              url: 'http://www.fao.org/documents/search/en/'
            },
            {
              org: '<sup>12</sup> “The Ocean Health Index,” Ocean Health Index, accessed 1 September 2017,',
              url: 'www.oceanhealthindex.org'
            },
          ]
        }
      ]
    }
  ]
};
