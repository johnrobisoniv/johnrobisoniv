var blueEconomyData = {
  metadata: { // Independent data source for each page
    version: '0.0.1',
    name: 'Blue Economy',
    updates: true,
    /*
         here is where you write updates
         do one line per update, like
         added legend to card 3
         added citations to card 5
         input thumbnail path to card 4
         loaded point data

         */
    index: 6,
    code: 'blueEconomy',
    path: 'blue-economy',
    countryData: {},
    csv: '../../data/blue-economy/blueEconomy.csv',
    color: '#307ABD',
    order: 1,
    description: 'The contributions ocean-based commercial sectors make to a state’s overall economic health can lead to a less violent society.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback)
  },
  cards: [
    { // Card 0
      title: 'Blue Economy',
      menu: 'Blue Economy',
      metadata: {
        owner: 'Sarah Glaser',
        description: 'Overview of the sub-index.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Blue Economy Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_INDEX'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Blue Economy:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_INDEX');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Blue Economy',
        },
        {
          tag: 'caption',
          text: 'Making the most of our oceans'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Larger dots indicate larger ports, smaller dots indicate smaller ports</em>.'
        },
        {
          tag: 'p',
          html: 'Economic growth is a pillar of national security. Nations with strong economies are less likely to go to war. Nations with weak economies are more likely to face conditions that precipitate or escalate violence.<sup>1</sup> The Blue Economy has recently emerged as a framework for understanding the economic contribution ocean-based sectors make to a state’s overall economic health.'
        },
        {
          tag: 'img',
          src: '../../assets/blue-economy/blue-economy-coin-cloud.png',
          alt: 'Coin Cloud - Blue Economy and related issues ' // ###ks have to put x img here
          //caption: 'al estimate.'
        },
        {
          tag: 'p',
          html: 'The ocean is an increasingly important source of economic opportunity, holding potential in the fields of energy (both renewable and non-renewable), food, tourism, coastal protection from storms, transportation that links the global economy, and natural products that promise advances in medicine. It is frequently lamented—with awe—that our maps of the seafloor are less detailed and complete than our maps of Mars.<sup>2</sup> Yet, with technology in sonar, satellite mapping and tracking, deep sea exploration, and remotely operated vehicles all advancing rapidly, the ocean and its riches present a new frontier. Greater access also brings greater risks, however: the threat of overfishing, destructive drilling and extraction, conflict over shared or disputed spaces, and difficult trade-offs to make between coastal development and conservation.'
        },
        {
          tag: 'p',
          html: 'The Blue Economy framework goes beyond simple metrics of national economic growth or wealth and assesses the sustainability and equity of ocean-based economic sectors. That’s why simple national measures such as gross domestic product fall short in capturing what the Blue Economy means. The Blue Economy borrows ideas and orientations from green movements that recognize that economic opportunity must take into account natural limits on growth, that economic growth is most stable when it benefits a wide range of participants (including women, youth, and racial minorities), and that human activities can undermine long-term economic well-being with short-sighted policies and implementation.'
        },
        {
          tag: 'p',
          html: 'In Africa, the Blue Economy includes sectors that are untapped, inefficiently leveraged, or that produce more economic gain for foreign industries and thus represents an important area of growth that could contribute significantly to long-term resilience and security.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> Christopher Blattman and Eduard Miguel, “Civil War,” <em>Journal of Economic Literature</em> 48 (2010), doi: 10.1257/jel.48.1.3.'
            },
            {
              org: '<sup>2</sup> John Copley, “Just How Little Do We Know About the Ocean Floor,” Scientific American, 9 October 2014,',
              url: 'https://www.scientificamerican.com/article/just-how-little-do-we-know-about-the-ocean-floor/'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 1
      title: 'Fisheries',
      menu: 'Fisheries',
      metadata: {
        owner: 'Sarah Glaser',
        description: 'Future potential for aquaculture and cost benefit analysis (sustainability issue).'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Measure of fisheries****?',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_FISHERIES'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of fisheries***?:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_FISHERIES');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Fisheries',
        },
        {
          tag: 'caption',
          text: 'Ensuring economic and food security '
        },
        {
          tag: 'p',
          html: 'In 2015, the United Nations FAO estimated worldwide production of fish from aquaculture surpassed - for the first time in history - production of fish from the wild.<sup>1</sup> The history of aquaculture is fraught: while many laud it as the inevitable and welcome progress of time and a shift that will increase global food production, others see it as a threat to the environment, to sustainable livelihoods, and to ways of life.'
        },
        {
          tag: 'p',
          html: 'Small-scale fish farming can provide alternative forms of employment for wild fishers and farmers alike, creating economic resilience in communities vulnerable to economic and natural resource shocks.<sup>2</sup> Aquaculture may also provide new employment avenues for women who are often overlooked in the value chains of wild fisheries.'
        },
        // {
        //   tag: 'bigtext',
        //   html: 'Mariculture: The cultivation of marine species, such as fish and shrimp, in enclosures filled with seawater.'
        // },
        //Insert graph from comms
        {
          tag: 'p',
          html: 'But aquaculture also has drawbacks. It is highly capitalized and requires access to and familiarity with technology and investment dollars. Mariculture typically occurs directly in marine habitats, such as mangroves or estuaries, and the water pollution and habitat destruction have negative impacts for wild fisheries and the marine ecosystem in general. Finally, as aquaculture markets and demand grows, the value chain for fisheries will be affected, and women and small-scale (i.e., poor) fishers may lost out on the market altogether.<sup>3</sup>'
        },
        //###<<<insert video of Mama Winnie, aquaculture entrepreneur from Kenya>>>
        {
          tag: 'p',
          html: 'In our study, only ten of 30 countries have reported income from mariculture activities. South Africa reported over $43 million from mariculture in 2015, while Madagascar reported over $20 million.<sup>4</sup> For Madagascar especially, this represents a significant contribution to the domestic economies. South Africa primarily grows mussels and abalone; these stocks of bivalves are typically highly sustainable in terms of growing, feeding, and harvesting. Madagascar, on the other hand, relies on shrimp aquaculture<sup>5</sup> that is implicated in significant mangrove deforestation and water pollution. The future of aquaculture in other African nations could follow the lead of South Africa in promoting sustainable approaches to high-value species if the global market will support it.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>3</sup> ###### ALLL OF THESE NEEED UPDATINGG###### United Nations Food and Agriculture Organization, “The State of World Fisheries and Aquaculture,” 2016.',
              url: 'http://www.fao.org/3/a-i5555e.pdf'
            },
            {
              org: '<sup>4</sup> John Bostock, Brendan McAndrew, Randolph Richards, Kim Jauncey, Trevor Telfer, Kai Lorenzen, David Little, Lindsay Ross, Neil Handisyde, Iain Gatward, and Richard Corner, “Aquaculture: Global Status and Trends.” ,em>Philosophical Transactions of the Royal Society</em> 265, no. 1554 (2010): 2897–912, doi:10.1098/rstb.2010.0170.'
            },
            {
              org: '<sup>5</sup>   Randall Brummett, Jerome Lazard, and John Moehl, “African Aquaculture: Realizing the Potential,” <em>Food Policy</em> 33 (2008): 371–385, doi:10.1016/j.foodpol.2008.01.005.'
            },
            {
              org: '<sup>6</sup> Christophe Béné, Robert Arthur, Hannah Norbury, Edward Allison, Malcolm Beveridge, Simon Bush, Liam Campling, Will Leschen, David Little, Dale Squires, Shakuntala Thilsted, Max Troell, and Meryl Williams, “Contribution of Fisheries and Aquaculture to Food Security and Poverty Reduction: Assessing the Current Evidence.” <em>World Development</em> 79 (2016): 177–196, doi:10.1016/j.worlddev.2015.11.007.'
            },
            {
              org: '<sup>7</sup> United Nations Food and Agriculture Organization, “Fisheries and Aquaculture Global Statistical Collection,” 2017.',
              url: 'http://www.fao.org/fishery/statistics/en'
            },
            {
              org: '<sup>8</sup> Fisheries and Aquaculture Department, “National Aquaculture Sector Overview: Madagascar,” Food and Agriculture Organization of the United Nations, accessed 14 September 2017.',
              url: 'http://www.fao.org/fishery/countrysector/naso_madagascar/en'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 2
      title: 'Marine and Coastal Tourism',
      menu: 'Marine and Coastal Tourism',
      metadata: {
        owner: 'Sean Duncan',
        description: 'The impact of maritime insecurity on tourism (Seychelles as impacted by piracy, Nigeria as impacted by insecurity).'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Tourism Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_TOURISM'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Tourism Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_TOURISM');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Marine and Coastal Tourism',
        },
        {
          tag: 'caption',
          text: 'Why increasing maritime security pays off'
        },
        {
          tag: 'legend',
          text: 'Map Legend',
          legendContent: '<em>Lighter shades indicate stronger maritime tourism industries. <br> Source: <a href="http://www.oceanhealthindex.org/" target="_blank">Ocean Health Index</em>.'
        },
        {
          tag: 'p',
          html: 'Ten years ago, the emerging threat of piracy off the coast of Somalia devastated the coastal tourism industry across East Africa. In 2008, well-reported hijackings and kidnappings led to a 95 percent decrease in Kenyan cruise ship tourism.<sup>9</sup> In 2009, Seychelles concluded that piracy and armed robbery were costing the local tourism industry roughly USD$12 million per year.<sup>10</sup> These changes had immediate economic impacts. In Kenya, the loss of cruise ships removed 40,000 tourists from the economy.<sup>11</sup> In Seychelles, the reduction in tourism equated to a 1.5 percent contraction in national gross domestic product.'
        },
        {
          tag: 'img',
          src: '../../assets/blue-economy/Marle_Hullot_flicr.jpg', // This should be on the Stable Seas Deck - comments
          alt: 'Photo credit: Jean-Marle Hullot',
          caption: 'Photo credit: Jean-Marle Hullot'
        },
        {
          tag: 'bigtext',
          html: 'A recent rebound in East African maritime tourism suggests the Gulf of Guinea could see a sharp increase in tourists if maritime security issues were addressed.'
        },
        {
          tag: 'p',
          html: 'But the trends are reversible. Since instances of piracy and armed robbery off the coast of Somalia sharply decreased in 2012, the economy of Seychelles has rebounded. GDP in 2015 reached approximately USD$1.4 billion—up from the 2009 low point of USD$847 million. Since 2011, the Kenyan tourism industry has rebounded slightly, with roughly 5,000 tourists visiting by cruise ship in 2013.<sup>12</sup>'
        },

        {
          tag: 'p',
          html: 'These trends in East Africa suggest maritime insecurity in the Gulf of Guinea could be deterring tourism today. Foreigners avoid visiting high-risk locations, and the Gulf of Guinea is quickly overtaking the Western Indian Ocean as sub-Saharan Africa’s most piracy-prone <a href="http://oceansbeyondpiracy.org/reports/sop" target="_blank">maritime space.</a> Regional waters are plagued not only by piracy but also by extractives-related crime, trafficking, and other illicit activities. Tourism revenues are unlikely to be maximized until these well-publicized security threats are addressed.'
        },
        {
          tag: 'p',
          html: 'While West Africa’s tourism potential has remained largely untapped, flourishing crime and a lack of maritime governance will only inhibit the growth and development of a thriving tourism industry in the future. As the African Development Bank group has concluded, countries in West Africa lag behind other African countries when it comes to tourism.<sup>13</sup> This is a missed opportunity, as the coastal states in West Africa have unique cultures, heritages, landscapes, and goods that would appeal to tourists coming from both inside and outside the continent. The Gambia, for instance, has 80 km of beaches and rich coastal reserves that few get the chance to enjoy. Gabon is home to beautiful white-sand beaches, and an astounding 11.25 percent of the country has been set aside as national park land. Each country has something special to offer visitors. Consequently, securing the maritime environment in the Gulf of Guinea—and the rest of sub-Saharan Africa—would bolster economic development and allow the region to function more efficiently.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>9</sup> “Piracy Forces Kenya Cruise Tourism Down 95 Percent,” <em>VOA News</em>, accessed 28 August 2017,',
              url: 'https://www.voanews.com/a/piracy-forces-kenya-cruise-tourism-down-95-percent-95324914/154676.html'
            },
            {
              org: '<sup>10</sup> Robert Haywood and Roberta Spivak, <em>Maritime Piracy</em> (Abingdon: Routledge, 2012).'
            },
            {
              org: '<sup>11</sup> Joseph Akwiri, “Kenya to Build Cruise Ship Terminal at Its Biggest Port,” <em>Reuters</em>, 18 November 2015,',
              url: 'http://af.reuters.com/article/topNews/idAFKCN0T71SW20151118'
            },
            {
              org: '<sup>12</sup> Ibid.'
            },
            {
              org: '<sup>13</sup> “Tourism in West Africa: An Economic, Social and Cultural Opportunity,” African Development Bank, accessed 31 August 2017,',
              url: 'https://www.afdb.org/en/blogs/measuring-the-pulse-of-economic-transformation-in-west-africa/post/tourism-in-west-africa-an-economic-social-and-cultural-opportunity-14479/'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 3
      title: 'Port Development in the Blue Economy',
      menu: 'Port Development',
      metadata: {
        owner: 'Sean Duncan',
        description: 'Describes port development in Gulf of Guinea (capacity and connetivity, overview of projects in Ghana, Togo, Benin, Nigeria, and Cameroon) and East Africa (capacity and connectivity, overview of projects in Somalia, Tanzania, Kenya, and Djibouti).'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Transportation Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_TRANSPORTATION'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Transportation Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_TRANSPORTATION');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Port Development in the Blue Economy',
        },
        {
          tag: 'caption',
          text: 'Africa\'s links to the global economy'
        },
        {
          tag: 'p',
          html: 'Foreign direct investment (FDI) in Africa has increased significantly in recent years, with a large portion of the money going into port and infrastructure development. Port investment will promote economic development through trade while reducing risks to ships entering ports around the continent.'
        },
        {
          tag: 'p',
          html: 'This influx of FDI is positive. African ports remain largely underdeveloped overall, and the lack of proper port infrastructure continues to contribute to expensive delays stemming from the increased amount of time that vessels need to spend in port or waiting to enter a crowded port.15 However, without proper maritime security and safety in these developing ports, vessels can be vulnerable to threats such as piracy and armed robbery.'
        },
        {
          tag: 'p',
          html: 'These threats can be detrimental to maritime trade and port revenue. For example, commerce in the Gulf of Guinea was significantly impacted during 2011 when more than 20 attacks were recorded off the coast of Benin. The port of Cotonou, which handles approximately 90 percent of the country’s foreign trade and accounts for roughly 80 percent of national fiscal revenue, experienced a steep 70 percent decline in port traffic due to piracy and armed robbery,<sup>16</sup> leading to an estimated loss of USD$81 million in customs revenue for the year as the shipping industry moved business operations to other ports and anchorages in the Gulf of Guinea.<sup>17</sup>'
        },
        //###<<< video: https://www.youtube.com/watch?v=vM_f2g0jXTg>>>
        {
          tag: 'p',
          html: 'Similarly, the large number of piracy and armed robbery–related incidents recorded in the Gulf of Guinea in 2015 likely had something to do with the dramatic decreases in gross tonnage handled at Nigerian ports. The Rivers and Delta port complexes recorded the largest declines in volume throughout the year, with decreases in gross tonnage of 29 percent and 33.5 percent respectively.<sup>18</sup> Enhancing port capacity would decrease the amount of time vessels spend in port and waiting to enter port, and would likely lead to increased port revenue stemming from enhanced efficiency.'
        },
        {
          tag: 'p',
          html: 'To establish a scoring methodology for maritime transportation and shipping, One Earth Future used the IMO GISIS Database to evaluate port infrastructure quality and the Liner Shipping Connectivity Index from UNCTAD to capture how well-connected individual countries are to global shipping networks.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>14</sup> ### These need review ####*** Matina Stevis and Asa Fitch, “Dubai’s DP World Agrees to Manage Port in Somaliland for 30 Years,” <em>The Wall Street Journal</em>, 30 May 2016,',
              url: 'https://www.wsj.com/articles/dubais-dp-world-agrees-to-manage-port-in-somaliland-for-30-years-1464549937'
            },
            {
              org: '<sup>15</sup> Savahna Nightingale, “IHS Maritime: The African Paradigm Shift and the Importance of Maritime Development,” Youtube video posted 6 June 2013 by IHSChannel,',
              url: 'https://www.youtube.com/watch?v=vM_f2g0jXTg'
            },
            {
              org: '<sup>16</sup> United Nations Security Council, “Report of the United Nations Assessment Mission on Piracy in the Gulf of Guinea (7 to 24 November 2011),” United Nations Security Council Report S/2012/45, 19 January 2012,',
              url: 'http://www.securitycouncilreport.org/atf/cf/%7B65BFCF9B-6D27-4E9C-8CD3-CF6E4FF96FF9%7D/AUUN%20S%202012%2045.pdf'
            },
            {
              org: '<sup>17</sup> Ibid.'
            },
            {
              org: '<sup>18</sup> “2015 Full Year Report,” Nigerian Ports Authority, accessed 28 August 2017,',
              url: 'https://www.nigerianports.org/dynamicdata/uploads/YearlyReports/2015-FULL-YEAR-REPORT.pdf'
            },
          ]
        }
      ] // end of els array
    },
    // { // Card 4 #### This card will be included !!!!
    //   title: 'The Invisible Fishers',
    //   menu: 'The Invisible Fishers',
    //   metadata: {
    //     owner: 'Laura Burroughs',
    //     description: 'Women\'s work goes unrecognized in fisheries sector; highlight women\'s role in processing in Sierra Leone and related challenges.'
    //   },
    //   map: {
    //     scale: [],
    //     classes: '',
    //     translate: [],
    //     path: '',
    //     extent: [
    //       // [-15, 15],
    //       // [8, -1]
    //     ],
    //     highlights: [],
    //     tooltip: true,
    //     units: {
    //       text: 'xo units',
    //       multiplier: 100
    //     },
    //     load: function(index, file) {
    //       var layer = 'card-' + index + '-layer';
    //       // Load higher resolution Sierra Leone layer
    //
    //       // Load point data
    //
    //       // Class point & GIS data with layer
    //       d3.select('.card-eez-layer')
    //         .classed(layer, true);
    //
    //     },
    //     switch: function(index) {
    //       // Figure out what to switch to.
    //       var values = issueAreaData[issueArea].metadata.countryData;
    //
    //       var valsArr = [];
    //
    //       values.forEach(function(row, i) {
    //         valsArr.push(row.ia6c4);
    //       });
    //
    //       var max = d3.max(valsArr);
    //       var min = d3.min(valsArr);
    //       var range = max - min;
    //
    //       values.forEach(function(row, i) {
    //         d3.selectAll('.eez.' + row.iso3)
    //           .classed('active', true)
    //           .transition().delay(i * 10)
    //           .style('fill', rampColor(1 - ((row.ia6c4 - min) / range)))
    //           .style('stroke', rampColor(1));
    //       });
    //     }
    //
    //   },
    //   els: [{
    //       tag: 'h1',
    //       text: 'The Invisible Fishers',
    //     },
    //     {
    //       tag: 'caption',
    //       text: 'The overlooked role of women in fisheries supply chains'
    //     },
    //     {
    //       tag: 'legend',
    //       text: 'Map Legend',
    //       legendContent: '<em>Lighter shades indicate greater opportunities for artisanal fishing<br />\
    //         Source: <a href="http://www.oceanhealthindex.org/" target="_blank">Ocean Health Index</a></em>.'
    //     },
    //     {
    //       tag: 'bigtext',
    //       html: '“[T]he extent of the damage to the ocean is many decades shy of the impact of industrialisation on land, and there is still time, if we act now, to get the principles and the framework for the development of the ocean economy right. Business as usual is clearly not an option.” - The Economist Intelligence Unit Limited, 2015'
    //     },
    //     //###<<<The map complementing this section will be a zoom in on Sierra Leone>>>
    //     {
    //       tag: 'p',
    //       html: 'Imagine a person who makes their living from fisheries. The picture is likely of a “fisherman” traveling out to sea in a boat to catch fish. However, the fisheries value chain consists of many important links, from the mending of nets to the drying of fish for sale, and women make up a large and vital portion of this sector. In fisheries, women comprise the majority of processing and post-harvest workers worldwide; the Food and Agriculture Organization of the United Nations (FAO) estimates over 90 percent of this sector is women.<sup>19</sup>'
    //     },
    //     {
    //       tag: 'img',
    //       src: '../../assets/blue-economy/Youpwe_Fishing_Village8S6A6034_JP.jpg',
    //       alt: 'Women play a key role in the fisheries value chain. Photo: Jean-Pierre Larroque',
    //       caption: 'Women play a key role in the fisheries value chain. Photo: Jean-Pierre Larroque'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Despite the vital roles women play in the fisheries value chain, fishing is most often perceived to be men’s work. Women’s work in the fisheries sector often goes unrecognized by creditors, policymakers, development programs, and in research, resulting in a lack of support for their work, lack of access to markets, and exclusion from fisheries management and policy decisions. This is problematic for women’s livelihoods and empowerment, and it distorts fisheries data and results in misinformed management measures. Women’s work in the fisheries sector must be understood and supported in order to advance gender equity, food security, and effective fisheries management.'
    //     },
    //     //###<<<photo of women fishers in Sierra Leone>>>
    //     {
    //       tag: 'p',
    //       html: 'In Sierra Leone, the fisheries sector provides substantial revenue and employment, supporting over 500,000 people.<sup>20</sup> Around 85 percent of those employed in fisheries processing are women.<sup>21</sup> Women and men generally occupy complementary roles in the value chain. Men catch fish from canoes or work from shore in groups to pull in nets of fish.<sup>22</sup> Once they come into port, they sell their catch to women who then perform the post-harvest activities, such as cleaning and drying the fish or bringing it directly to markets for sale. Much of the fish is obtained from family members and most of the processing work is conducted within the home rather than in formal facilities.'
    //     },
    //     {
    //       tag: 'p',
    //       html: 'Beyond post-harvest work, some women also catch fish directly, using nets to catch small fish in rivers and other small water bodies. Some women even lease boats and own fishing companies.<sup>23</sup> The fisheries sector and processing in particular provide important livelihood opportunities for women. However, their incomes are still much lower than those of their male counterparts,<sup>24</sup> and many women report struggling with other restrictive factors.'
    //     },
    //     {
    //       tag: 'links',
    //       items: [{
    //           org: '<sup>19</sup> Food and Agriculture Organization of the United Nations, “Promoting Gender in Fisheries Activities in Somalia,” <em>Blue Growth Blog</em>, 5 June 2016,',
    //           url: 'http://www.fao.org/blogs/blue-growth-blog/promoting-gender-in-fisheries-activities-in-somalia/en/'
    //         },
    //         {
    //           org: '<sup>20</sup> “Sierra Leone News: Revitalizing the Fishing Sector,” <em>Awoko Newspaper</em>, 22 June 2017,',
    //           url: 'http://awoko.org/2017/06/22/sierra-leone-news-revitalizing-the-fishing-sector/'
    //         },
    //         {
    //           org: '<sup>21</sup> Andy Thorpe, Nicky Pouw, Andrew Baio, Ranita Sandi, Ernest Ndomahina, and Thomas Lebbie, “\'Fishing Na Everybody Business\’: Women\’s Work and Gender Relations in Sierra Leone\’s Fisheries,” <em>Feminist Economics</em> 20, no. 3 (April 2014): 53–77,',
    //           url: 'http://dx.doi.org/10.1080/13545701.2014.895403'
    //         },
    //         {
    //           org: '<sup>22</sup> Larry Tucker, “What We Can Learn from Artisanal Fishermen, Fish-women in Sierra Leone,” SwitSalone, 15 February 2017,',
    //           url: 'http://www.switsalone.com/24920_what-we-can-learn-from-artisanal-fishermen-fish-women-in-sierra-leone/'
    //         },
    //         {
    //           org: '<sup>23</sup> P.B. Browne, “Women Do Fish: A Case Study on Gender and the Fishing Industry in Sierra Leone” in <em>Global Symposium on Women in Fisheries</em>, eds. M.J. Williams, N.H. Chao-Liao, P.S. Choo, K. Matics, M.C. Nandeesha, M. Shariff, I. Saison, E. Tech, J.M.C Wong (Penang, Malaysia: ICLARM—The World Fish Centre, 2002): 169–172,',
    //           url: 'http://pubs.iclarm.net/resource_centre/WF_328.pdf'
    //         },
    //         {
    //           org: '<sup>24</sup> Ibid.'
    //         },
    //       ]
    //     }
    //   ] // end of els array
    // },
    { // Card 5
      title: 'Adjusted Net Savings',
      menu: 'Adjusted Net Savings',
      metadata: {
        owner: 'Sean Duncan',
        description: 'Sustainable vs unsustainable economic growth, focus on Cabo Verde, Namibia, Guinea, Liberia.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Adjusted Net Savings',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_ANS'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Adjusted Net Savings:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_ANS');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Sustainability in the Blue Economy',
        },
        {
          tag: 'caption',
          text: 'Toward a more accurate measure of development'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate higher Adjusted Net Savings (ANS) scores.<br />Source: <a href="https://data.worldbank.org/products/data-books/little-green-data-book" target="_blank">World Bank</a></em>.'
        // },
        {
          tag: 'blockquote',
          html: '“The extent of the damage to the ocean is many decades shy of the impact of industrialisation on land, and there is still time, if we act now, to get the principles and the framework for the development of the ocean economy right. Business as usual is clearly not an option.” <br />Source: The Economist Intelligence Unit Limited, 2015<sup>6</sup>'
        },
        {
          tag: 'p',
          html: 'So begins an extensive - and ultimately optimistic - recent review of the Blue Economy framework by the Economist Intelligence Unit, for the World Ocean Summit. The Blue Economy is more than a system of accounting and dollar signs attached to ocean-based enterprises. It is an aspirational framework that seeks to guide maritime development in a manner that is sustainable and equitable. Consequently, Blue Economy framework includes progressive and novel metrics that provide a more holistic view of economic growth.'
        },
        {
          tag: 'p',
          html: 'Adjusted Net Savings (ANS) measures sustainable development by examining changes in comprehensive wealth and after accounting for depletion of natural resources and investments in human capital.<sup>7</sup> One of the core principles behind ANS is that it is necessary for countries to create a surplus investment in order to escape low-level subsistence—which is particularly relevant in the African context.'
        },
        {
          tag: 'p',
          html: 'High values of ANS suggest a country’s degradation of natural resources and changes in human capital are being balanced by net savings—indicating sustainable growth. In our study, Cabo Verde and Namibia had the highest ANS scores in 2016.  Both nations benefitted from high Gross Domestic Savings, and Namibia also saw large investments into education. Conversely, if ANS is negative over multiple years, the country is on an unsustainable path. Guinea, for instance, had the lowest measured value out of any country in the world. This is because Guinea suffered from resource depletion (represented by high rates of mineral and net forest depletion), but also from negative Gross Domestic Savings—indicating that the Guinean economy is expending more income than it produces.'
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>25</sup> ### all NEED REVIEW### The Economist Intelligence Unit, <em>“The Blue Economy: Growth, Opportunity and a Sustainable Ocean Economy,”</em> Briefing Paper presented at the World Ocean Summit 2015,',
              url: 'https://www.eiuperspectives.economist.com/sustainability/blue-economy'
            },
            {
              org: '<sup>26</sup> Environmental Department of the World Bank, “Beyond GDP: Measuring Progress, True Wealth, and the Well Being of Nations,” contribution to Beyond GDP Virtual Indicator Expo, 29 June 2012,',
              url: 'http://ec.europa.eu/environment/beyond_gdp/download/factsheets/bgdp-ve-ans.pdf'
            },
            {
              org: '<sup>27</sup> Cullen Hendrix and Idean Salehyan, “Climate Change, Rainfall, and Social Conflict in Africa,” <em>Journal of Peace Research</em> 49 (2012), doi: 10.1177/0022343311426165.'
            },
          ]
        }
      ] // end of els array
    },
    { // Card 6
      title: 'Climate Vulnerability',
      menu: 'Climate Vulnerability',
      metadata: {
        owner: 'John Filitz',
        description: 'Oil and gas.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Climate Vulnerability Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_CLIMATE'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Climate Vulnerability Score:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_CLIMATE');
        }
      },

      els: [{
          tag: 'h1',
          text: 'Climate Vulnerability',
        },
        {
          tag: 'caption',
          text: 'Climate change poses risks to blue economic growth'
        },
        {
          tag: 'p',
          html: 'Climate change presents varied risks to sustainable economic development: depending on the underlying biome and other geophysical considerations, a given nation may experience more or less rainfall in the future, rise in sea surface temperature may be minor or major, and sea level rise may threaten coastal developments or not. The risk of conflict is strongly related.<sup>8</sup> The ND-GAIN Climate Vulnerability index, incorporated into our measure of Blue Economy, accounts for 75 different climate-related variables.'
        },

        {
          tag: 'p',
          html: 'The Somali region ranks last in our measure of climate vulnerability - the economy and people are the most vulnerable to the impacts of climate change in the future. In the Horn of Africa, the physical connections between ocean dynamics like temperature and terrestrial dynamics like rainfall are strongly linked. The Somali region is currently facing one of the worst droughts in its history - over 22 million people are at risk of starvation. And while short-term climate impacts are most profound - and visible - on land, the impacts on the ocean will not be avoided. Just as the Somali fishing sector is attracting both domestic and international investment, the species that inhabit Somali waters might migrate elsewhere and short-circuit this nascent economic sector.'
        },

        {
          tag: 'links',
          items: [{
              org: '<sup>28</sup>### NEEDS REVIEW ####  International Energy Agency, “Africa Energy Outlook: A Focus on Energy Prospects in Sub-Sharan Africa,” World Energy Outlook Special Report, 2014,',
              url: 'https://www.iea.org/publications/freepublications/publication/WEO2014_AfricaEnergyOutlook.pdf'
            },
            {
              org: '<sup>29</sup> Ibid.'
            },
            {
              org: '<sup>30</sup> “Corruption Perceptions Index 2016,” Transparency International, 25 January 2017,',
              url: 'https://www.transparency.org/news/feature/corruption_perceptions_index_2016'
            },
            {
              org: '<sup>31</sup> Jacob Zuma, “Acceptance Speech by President Jacob Zuma on the Occasion of the 37th SADC Summit of Heads of State and Government, Pretoria, 19th of August 2017,” The Presidency of the Republic of South Africa,',
              url: 'http://www.thepresidency.gov.za/speeches/acceptance-speech-president-jacob-zuma-occasion-37th-sadc-summit-heads-state-and-government'
            },
            {
              org: '<sup>32</sup> “Corruption Perceptions Index 2016,” Transparency International, 25 January 2017,',
              url: 'https://www.transparency.org/news/feature/corruption_perceptions_index_2016'
            },
          ]
        }
        //###INSERT BLOCKQUOTE: “One of the potential game-changers for the region is the discovery of globally significant natural gas resources both onshore and offshore in a number of our member states. As a new initiative, we are proposing the establishment of an Inter-state Natural Gas Committee to share learning for regional gas development and to prepare for the development of the wider gas economy. As such, the inclusion and promotion of gas into the regional energy mix will facilitate an increase in universal access to energy, as well as industrial development in SADC.”<sup>33</sup>
      ] // end of els array
    },
    { // Card 7
      title: 'Data and Methods',
      menu: 'Data and Methods',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Methods.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Blue Economy Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['BE_INDEX'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Blue Economy:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          // Class EEZ with card-0-layer to enable switch() method
          var layer = 'card-' + index + '-layer';
          var l = d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'BE_INDEX');
        }
      },
      els: [
    { tag: 'h1',
      text: 'Data and Methods'
    },
    {
      tag: 'caption',
      text: 'How we created the Blue Economy score'
    },
    { tag: 'p',
      text: 'The Blue Economy score incorporates six equally-weighted components that are central to the blue economy: fisheries, marine and coastal tourism, maritime transportation and shipping, offshore oil and gas, adjusted net savings, and climate change.'
    },
    { tag: 'h4',
      text: 'Fisheries'
    },
    { tag: 'p',
      text: 'Fisheries are an important part of the economy throughout Africa. In some countries, fisheries products are the top grossing export. In others, the income from artisanal and small-scale fisheries are important for livelihoods. We combine the value (in U.S. dollars) of wild caught fisheries and mariculture (aquaculture occurring in the marine environment or of marine species) for this input. Value of wild caught fish by a given country (i.e., excluding fish caught by foreign-flagged vessels) was obtained from the Sea Around Us program. Value of mariculture by a given country was obtained from the UN Food and Agriculture Organization’s Global Statistical collection. The values were summed, and standardized by dividing by total population of a country as reported by the World Bank.'
    },
    { tag: 'h4',
      text: 'Marine and Coastal tourism'
    },
    { tag: 'p',
      text: 'Sustainable coastal tourism supports jobs and livelihoods in coastal communities. We use the score from the Tourism and Recreation goal in the Ocean Health Index. The Ocean Health Index  measures countries on biological, physical, economic, and social factors to assess how sustainably humans are using the ocean. The Tourism and Recreation goal measures the proportion of the total labor force engaged in the coastal tourism and travel sector, factoring in unemployment and sustainability. Countries where such employment was 9.5% or greater of the total labor force received a perfect (100) score.'
    },
    { tag: 'h4',
      text: 'Marine Transportation and Shipping'
    },
    { tag: 'p',
      text: 'Maritime ports and the shipping and commerce they support are pillars of the Blue Economy. Large, well-functioning ports support larger volumes of shipping, geater export and import markets, and link national economies to the global economy. We calculated this score by combining two sub-scores: port quantity and port quality. Port quantity was calculated from the Liner Shipping Connectivity Index, a national-level metric developed by the United Nations Conference on Trade and Development and accounts for number of ships, container capacity of those ships, maximum vessel size, number of services, and number of companies that operate in ports. We developed our own port quality metric that accounted for harbor size plus availability of the following services: first port of entry, tug assist, air and rail communications, medical facilities, water and fuel supplies, and dry dock repair. The overall transportation score was calculated by equally weighting the port quantity and quality sub-scores.'
    },
    { tag: 'h4',
      text: 'Offshore Oil and Gas'
    },
    { tag: 'p',
      text: 'Offshore oil and natural gas development contributes substantially to some African nations, like Nigeria, but the distribution is highly skewed: of the 30 nations included in this report, 17 of them gain no income from offshore oil or gas. For oil, we placed nations into one of five tiers based on volume of proven reserves, ultimately recoverable oil, cumulative production, and remaining recoverable resources. Tier 1 countries had high volumes of offshore oil, while Tier 5 countries had no proven reserves or current production. Likewise, for natural gas we placed nations into one of four tiers based on the same criteria. Tiers were converted to scores of 0 - 1 and the oil and gas scores were averaged.'
    },
    { tag: 'h4',
      text: 'Adjusted Net Savings'
    },
    { tag: 'p',
      text: 'Adjusted Net Savings (ANS) is a measure of true savings in a country after taking into account depletion of natural resources and damages, as well as investments in human capital.[1] Many economists have adopted ANS as a metric that overcomes some shortfalls in using Gross Domestic Product to measure economic growth and development. ANS is derived from the standard national accounting measure of gross saving by making four adjustments: consumption of fixed capital is deducted to obtain net national saving; current public expenditure on education is added to account for investment in human capital; estimates of the depletion of a variety of natural resources are deducted to reflect the decline in asset values associated with extraction and depletion; and deductions are made for damages from carbon dioxide and particulate emissions. We use ANS measures from the World Bank’s World Development Indicators Little Green Book. Values for 23 of the countries here were used, and the regional average was used for countries without ANS values. Raw scores ranged from -47.8 to 36.9 so we normalized scores and benchmarked regional values to the global range.'
    },
    { tag: 'h4',
      text: 'Climate Vulnerability'
    },
    { tag: 'p',
      text: 'Several components of the Blue Economy, such as fisheries and tourism, may be affected by global climate change. To account for this risk, we included a measure of vulnerability to climate change. We used the University of Notre Dame’s Global Adaptation Index (known as ND-GAIN). The index measures a country’s vulnerability to climate change based on: (1) exposure to climate-related or climate-exacerbated hazards, (2) sensitivity to the hazard’s impacts and (3) capacity to adapt or manage to the impacts. We use the ND-GAIN Vulnerability score which is calculated at a national scale and updated annually.'
    },
    {
      tag: 'p',
      html: 'More details about all of these scores are available on our data page.'
    },
    { tag: 'links',
      items: [
        {org: '<sup>32</sup>#### Review #### “The Ocean Health Index,” Ocean Health Index, accessed 1 September 2017,', url: 'http://www.oceanhealthindex.org'},
    /// ### added http to the website as original did not include it. Please check if valid.
        {org: '<sup>33</sup> World Bank, <em>The Little Green Data Book 2017</em>, World Development Indicators (Washington, DC: World Bank, 2017),', url: 'https://openknowledge.worldbank.org/handle/10986/27466 License: CC BY 3.0 IGO'},
        {org: '<sup>34</sup> Ibid.'},
      ]
    }
      ]
    }
  ]
};
