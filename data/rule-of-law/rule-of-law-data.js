var ruleOfLawData = {
  metadata: { // Independent data source for each page
    version: '1.0.0',
    name: '*Rule of Law*',
    updates: true,
    /*
         here is where you write updates
         do one line per update, like
         added legend to card 3
         added citations to card 5
         input thumbnail path to card 4
         loaded point data

         */
    index: 3, //Issue Area #3, index 2...
    code: 'ruleOfLaw',
    countryData: {},
    csv: '../../data/rule-of-law/ruleOfLaw.csv',
    path: 'rule-of-law',
    color: '#6E497E',
    order: -1,
    description: 'Where the rule of law is strong, governments can be confident that legal efforts to address maritime crime and violence will yield results.'
  },
  load: function(csv, callback) {

    loadIAcsv(csv, callback);
  },
  cards: [
    { // Card 0
      title: 'Rule of Law',
      menu: 'Rule of Law',
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
        legend: 'Rule of Law Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);

          return "Rule of Law:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) { // ### *** This only should be for the first card ...
          // Class EEZ with card-0-layer to enable switch() method
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
          text: 'Rule of Law',
        },
        {
          tag: 'caption',
          text: 'Progress requires effective and legitimate legal institutions'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate countries with a better Corruption Perceptions Index score. <br />Source: <a href="https://www.transparency.org/" target="_blank">Transparency International</a></em>'
        // },
        {
          tag: 'p',
          html: 'Rule of law is crucial for translating maritime security measures from paper to practice. Good governance of the maritime space requires bureaucratic and legal structures that are capable of developing, implementing, and enforcing policy. Where these structures are undermined by corruption, ineffectiveness, inefficiency, and inconsistent application of the law, legislative approaches to maritime security cannot be enforced and legal measures have little impact.'
        },
        {
          tag: 'img',
          src: '../../assets/rule-of-law/rule-of-law-coin-cloud.png', // This should be on the Stable Seas Deck - comments
          alt: 'Command exercise, Crew of EU Naval Force frigate FGS Augsburg, police officers with EUCAP NESTOR and Djibouti Navy. Photo credit: European Union Naval Force',
          caption: 'Command exercise, Crew of EU Naval Force frigate FGS Augsburg, police officers with EUCAP NESTOR and Djibouti Navy. Photo credit: European Union Naval Force'
        },
        {
          tag: 'p',
          html: 'Countries with high scores for rule of law also had high scores for coastal welfare and fisheries as well as relatively low levels of migration and human trafficking at sea. These correlations demonstrate the threat that corruption can pose to healthy fisheries management and participation in the legal coastal economy.'
        },
        // {
        //   tag: 'p',
        //   html: 'This section is divided into three parts. The first section explores the intersection of corruption and the blue economy. Then next section discusses the role of the legal finish as a deterrent to transnational maritime crime. The section concludes with a review of methodology.'
        // },
      ] // end of els array
    }, // End of first element of cards object
    { // Card 1
      title: 'Fighting Corruption',
      menu: 'Fighting Corruption',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Corruption remains high, but efforts like EITI are making meaningful progress. Highlight Nigeria.'
      },
      map: {
        type: 'continuous',
        path: './data/main.csv',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        tooltip: true,
        legend: 'Corruption Perceptions Index',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['corruption'];
          tooltipVal = (tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Corruption Perceptions Index:<br />" + Math.round(tooltipVal) + " / 100 <br /><em>Note: Higher CPI scores indicate less corruption</em>";
        },
        load: function(index, js) {
          // Color EEZ according to change in Corruption Perceptions Index
          d3.select('.card-eez-layer')
            .classed('card-' + index + '-layer', true);
        },
        switch: function(index) {
          choropleth(index, 1, 'corruption'); // ### this needs updating!!
        }
      }, // end of 'map' object
      els: [{
          tag: 'h1',
          text: 'Fighting Corruption'
        },
        {
          tag: 'caption',
          text: 'How dishonesty and bribery undermine legal efforts'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Changes in the Corruption Perceptions Index, 2012-2016. Darker purple countries show improving conditions, while darker red countries show worsening. White-shaded countries saw no change during this period. <br />Source: <a href="https://www.transparency.org" target="_blank">Transparency International</a> </em>'
        // },
        {
          tag: 'p',
          html: 'Corruption remains the greatest threat to effective policy implementation in sub-Saharan Africa. It is especially threatening in the maritime domain due to weak state presence, proximity to international borders, and the great concentration of wealth that occurs at important seaports.'
        },
        {
          tag: 'p',
          html: 'In corrupt coastal and maritime environments local officials take bribes, profit from selective enforcement of fisheries and environmental regulations, and permit black market trading and trafficking.These activities undermine the licit economy and prevent the effective development of the blue economy. The good news, however, is that many sub-Saharan countries have made significant progress against corruption over the last five years.'
        },
        {
          tag: 'img',
          src: '../../assets/rule-of-law/eiti_members-01.png',
          alt: 'Map of EITI African member states'
        },
        {
          tag: 'caption',
          text: 'These countries are African members of the <a href="https://eiti.org/" target="_blank"> Extractive Industries Transparency Initiative</a>'
        },
        {
          tag: 'h3',
          text: 'Nigeria: Overcoming Corruption in the Oil Industry'
        },
        // { tag: 'p',
        //   html: 'It isn’t coincidental that the countries receiving many of the region’s harshest corruption scores are also the region’s most important offshore oil producers. Unique challenges for this industry, including crude oil theft and opaque processes for licensing and rewarding contracts, hamstring economies that should be among Africa’s strongest. Still, success stories like Nigeria’s show that governments in this region can make considerable progress toward reducing corruption.'
        // },
        {
          tag: 'p',
          html: 'Nigeria, the region’s largest oil producer, was also the first sub-Saharan state to embrace the Extractive Industries Transparency Initiative (EITI) framework. Member states subject themselves to periodic reviews of their extractive industry management and are then held accountable for making progress toward any areas of concern. Following the January 2017 review, Fredrik Reinfeldt, Chair of the EITI Board, said of Nigeria:'
        },
        {
          tag: 'blockquote',
          html: '“Nigeria has repeatedly demonstrated how the EITI process can be used to achieve important, tangible results for its citizens. Swiftly addressing the corrective actions identified through Validation should help Nigeria continue to demonstrate regional leadership and make a full transition to the EITI standard.”<br /><em>- Fredrik Reinfeldt, Chair of the EITI Board</em>',
          source: ''
          //link: '#'       // What about internal references?
        },
        {
          tag: 'p',
          text: 'EITI’s review of 34 aspects of good extractives governance found inadequate progress in only one area (policy on contract disclosure), but found that Nigeria made meaningful or satisfactory strides in areas like public debate, distribution of revenues, and civil society engagement. With further work within this framework, Nigeria will build stronger institutions and deepen norms of good, corruption-free governance.'
        },
        {
          tag: 'p',
          text: 'Approximately half of coastal sub-Saharan states are now participating in the EITI process. Two oil-rich states that have seen the worst trends in corruption, Angola and Equatorial Guinea, are not among them.'
        }
      ]
    }, // End of second  object in cards array
    { // Card 2
      title: 'Bribes and Bureaucracy',
      menu: 'Bribes & Bureaucracy',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Why is corruption linked to bureaucratic burdens, opportunities for bribery. Highlight firm behavior report.'
      },
      map: {
        type: 'continuous',
        path: '../../data/main.csv',
        scale: [],
        classes: 'card-2-layer',
        translate: [],
        highlights: null,
        tooltip: true,
        legend: 'WB "Trading Across Borders" Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['efficiency'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return 'WB "Trading Across Borders" Score:<br />' + tooltipVal + " / 100";

        },
        load: function(index, js) { // ### do we need the 'js' parameter??
          // Color EEZ -- Ease of Trade score
          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true); // in the data.issueArea.cards array
        },
        switch: function(index) {

          choropleth(index, 1, 'efficiency');

          //  d3.select('.' + target).classed('invisible', false);
        }
      },
      els: [{
          tag: 'h1',
          text: 'Bribes and Bureaucracy'
        },
        {
          tag: 'caption',
          text: 'How excessive bureaucracy brings bribe-seeking'
        },
        //###insert corruption infographic from Andrea
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate lower barriers and restrictions on international trade <br> Source: <a href="https://www.doingbusiness.org/" target="_blank">2017 World Bank Doing Business Report</a></em>'
        // },
        {
          tag: 'p',
          html: 'To effectively fight corruption and curtail bribe-seeking, states can review their bureaucracies and eliminate points where these activities are most likely to occur. Seaports should be a focal point in this search. Because more than 90% of sub-Saharan Africa’s international trade flows through its seaports, port administrators are uniquely positioned to demand bribes, permit illicit economic activity, and undermine good governance. A recent report by <em> The Economist </em> went as far as to call this behavior “onshore piracy.”<sup>1</sup>'
        },
        {
          tag: 'img',
          src: '../../assets/rule-of-law/cross_border_corruption.png',
          alt: 'Pie graph showing African / non-Africa cross-border corruption.',
          caption: 'Source: United Nations Economic Commission for Africa'
        },
        {
          tag: 'p',
          html: 'When the rule of law is weak, administrative gatekeepers can demand bribes before goods can continue to their next destination. The World Bank estimates that the resulting transit delays cost African economies billions of dollars each year, so it is no surprise that recent anti-graft efforts in Kenya, Tanzania, Mozambique, and elsewhere have resulted in high-profile removals of customs officials and port directors.<sup>2</sup>'
        },
        {
          tag: 'p',
          html: 'Each year, the World Bank measures these bureaucratic inefficiencies with a “Trading Across Borders” score. Countries receiving high scores move goods through their ports efficiently, limiting opportunities for bribe-seeking. Lower scores mark countries where inefficiencies and “red tape” increase opportunities for port corruption. These data are presented on the adjacent map.'
        },
        {
          tag: 'p',
          html: 'Solving this problem will require compliance from both African and non-African actors, as most of this kind of rent-seeking occurs as a transaction between an African recipient and non-African firm. Cooperation from the many multinational corporations doing business in African seaports will be especially important. A 2016 report <sup>3</sup> from the United Nations Economic Commission for Africa found more than 99% of known cases of cross-border corruption in the region since 1994 involved non-African firms. These cases included simple bribery of port and customs authorities as well as more elaborate illicit financial schemes involving kickbacks, insurance fraud, money laundering, and selective enforcement of trade regulations.'
        },
        {
          tag: 'p',
          html: 'The cross-border corruption occurring in African seaports has detrimental spillover effects for other sectors. Preferential treatment of foreign firms, norms of rent-seeking, and corrupt officials can negatively influence the regulatory environment for domestic businesses that are far removed from international trade.'
        },
        // {
        //   tag: 'img',
        //   src: '../../assets/rule-of-law/firm-behavior.jpeg',
        //   alt: 'Firm Behavior in Fragile States',
        //   caption: 'Firm Behavior in Fragile States by Dr Victor Owuor',
        //   link: 'http://oefresearch.org/publications/firm-behavior-fragile-states'
        // },
        // {
        //   tag: 'p',
        //   html: 'The recent <em> Firm Behavior in Fragile States </em> report on the issues facing small firms in fragile sub-Saharan economies highlights how excessive bureaucracy and regulation suppress business growth, impose unnecessary “facilitation fees,” and weaken judicial integrity. The report, based on field research in Somaliland, the Democratic Republic of the Congo, and South Sudan, strongly argues that informal non-governmental arrangements like business collectives, sector-specific cooperatives, and public-private partnerships must be part of the solution.'
        // },
        // {
        //   tag: 'p',
        //   html: 'Unless governments can rein in corruption and improve maritime trade governance, it will be difficult for governments, private associations, and institutions to promote a stronger rule of law and healthier business environment.'
        // },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> “Africa’s Ports: The Bottleneck,” The Economist, 19 March 2016.',
              url: 'https://www.economist.com/news/middle-east-and-africa/21695054-new-investment-alone-will-not-fix-africas-ports-governments-need-deal'
            },
            {
              org: '<sup>2</sup> Sandra Sequeria, “Investigating and Tackling Corruption in African Ports,” <em>Research Impact: Making a Difference</em> (The London School of Economics and Political Science, 2015).',
              url: 'http://www.lse.ac.uk/researchAndExpertise/researchImpact/PDFs/Sequeria.pdf'
            },
            {
              org: '<sup>3</sup> UN Economics Commission for Africa, “Measuring Corruption in Africa: The International Dimension Matters,” African Governance Report IV (2016).',
              url: 'https://www.uneca.org/sites/default/files/PublicationFiles/agr4_eng_fin_web.pdf'
            },
          ]
        }
      ]
    }, // End of third object in cards array
    { // Card 3
      title: 'Inclusion',
      menu: 'Inclusion',
      metadata: {
        owner: 'Curtis Bell',
        description: ''
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: '',
        translate: [],
        highlights: null,
        tooltip: true,
        legend: 'Measure of inclusion',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['inclusion'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of inclusion:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'inclusion');
        }
      },
      els: [{
          tag: 'h1',
          html: 'Inclusion'
        },
        {
          tag: 'caption',
          text: 'Linking marginalization to maritime insecurity'
        },
        {
          tag: 'p',
          html: 'Equal treatment under the law, regardless of ethnicity, socioeconomic status, religion, subnational region, or gender, is the basis of inclusive governance. Inclusive governance is important in coastal areas because marginalized groups are less likely to possess the resources and property rights needed to make a living wage through legal economic activities. In this way, exclusion can depress coastal economies and compel some to turn toward maritime crime and illicit economy activity.'
        },
        {
          tag: 'p',
          html: 'Levels of inclusion vary greatly along the sub-Saharan coastline, though many states have made notable progress in this area. In Somalia, for example, Somalia women’s economic empowerment is being expanded through a number of fisheries projects by the Food and Agriculture Organization of the United Nations (FAO). These projects include training women boat-builders and adding value to post-harvest fish catches. One community organizer working with the project notes:'
        },
        {
          tag: 'blockquote',
          html: '“It is important to have women involved in these activities since their contributions have a big influence on ensuring stronger household level financial management and food security that will directly benefit their families.”',
          source: 'Ms. Shukri Ahmed Mohamed, community organizer with FAO Somalia<sup>9</sup',
          link: '#'
        },
        {
          tag: 'p',
          html: 'Programs like this, when coupled with equal property and business rights for women, can greatly expand licit opportunities in coastal economies. These opportunities are a strong defense against illicit economic activities.'
        },
        {
          tag: 'p',
          html: 'Our inclusion data, presented on the adjacent map, also account for inclusion across religion, class, ethnicity, and region. Exclusion based on any of these factors can threaten political stability and economic development in coastal areas.'
        }
      ]

    },
    { // Card 4
      title: 'Exploiting Weak Governance',
      menu: 'Exploiting Weak Governance',
      metadata: {
        owner: 'Curtis Bell',
        description: ''
      },
      map: {
        type: 'continuous',
        path: '../../data/main.csv',
        scale: [],
        classes: 'card-2-layer',
        translate: [],
        highlights: null,
        tooltip: true,
        legend: 'Measure of efficacy',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['efficacy'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of efficacy:<br />" + tooltipVal + " / 100";

        },
        load: function(index, js) { // ### do we need the 'js' parameter??
          // Color EEZ -- Ease of Trade score
          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true); // in the data.issueArea.cards array
        },
        switch: function(index) {

          choropleth(index, 1, 'efficacy');

          //  d3.select('.' + target).classed('invisible', false);
        }
      },
      els: [{
          tag: 'h1',
          text: 'Exploiting Weak Governance'
        },
        {
          tag: 'caption',
          text: 'Weak local control undermines regional stability'
        },
        {
          tag: 'p',
          html: 'Even where countries invest heavily in good port management and port security, maritime governance can be undermined by a weak state presence in remote coastal areas. Any coastal location with a weak state presence can be exploited, and this means countries in this region must maintain adequate law enforcement capabilities and maritime domain awareness across the entirety of their maritime spaces.'
        },
        {
          tag: 'p',
          html: 'Unfortunately, the same geographic characteristics that undermine effective law enforcement also provide safe sanctuaries for traffickers, pirates, and insurgents operating in maritime spaces. Small, portable, high-value goods, including cocaine and heroin, are most likely to be smuggled in these areas. These problems are especially evident in offshore island groups, such as Guinea-Bissau’s Bijagos archipelago or the Lamu region of Kenya.'
        },
        {
          tag: 'p',
          html: 'When states eliminate these “blind spots,” they gain the ability to enforce good policy and exert local control. Legislation can more directly translate into action and states can become much more likely to successfully curb illicit maritime activities. Because criminal networks based in under-governed locales travel great distances to smuggle or pirate, eliminating local areas with weak governance can significantly improve maritime security over very large regions.'
        },
        {
          tag: 'img',
          src: '../../assets/rule-of-law/packets_cocaine_guinea_bissau.jpg', // This should be on the Stable Seas Deck - comments
          alt: 'Packets of seized cocaine at a police station in Guinea-Bissau. Photo: Issouf Sanogo/AFP/Getty Images',
          caption: 'Packets of seized cocaine at a police station in Guinea-Bissau. Photo: Issouf Sanogo/AFP/Getty Images'
        },
        {
          tag: 'blockquote',
          html: '“The greatest fragility we have is the islands, many of them uninhabited, but still the drug traffickers use them as a depot and then transport [the drug] to the continent. On the other hand, even in those that are inhabited the presence of the state is weak, or in some cases nonexistent.” —Mamadu Djalo Pires, Minister of Justice, Guinea-Bissau, 2009; translated<sup>5</sup>', //### need closed brackets around the words "the drug" in this blockquote
          link: 'http://***.org/***' // What about internal references?
        },
        { tag: 'links',
          items: [
            {org: '<sup>5</sup> S.A, RTP, Rádio e Televisão de Portugal 2009 LUSA Agência de Notícias de Portugal. “Arquipélago Dos Bijagós Utilizado Como Depósito Dos Narcotraficantes.” Accessed September 28, 2017.', url: 'https://www.rtp.pt/noticias/mundo/arquipelago-dos-bijagos-utilizado-como-deposito-dos-narcotraficantes_n302245.'}
          ]
        }

      ]
    },
    { // Card 5
      title: 'The Legal Finish',
      menu: 'The Legal Finish',
      metadata: {
        owner: 'Curtis Bell',
        description: ''
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: '',
        translate: [],
        highlights: null,
        tooltip: true,
        legend: 'Judicial Integrity Measure',
        tooltipHTML: function(iso) {
          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['judicial_integrity'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Judicial Integrity measure:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
          var layer = 'card-' + index + '-layer';

          d3.select('.card-eez-layer')
            .classed(layer, true);
        },
        switch: function(index) {
          choropleth(index, 1, 'judicial_integrity');
        }
      },
      els: [{
          tag: 'h1',
          html: 'The Legal Finish'
        },
        {
          tag: 'caption',
          text: 'Just outcomes require sound legal systems'
        },
        {
          tag: 'p',
          html: 'Capacity-building efforts focus on detecting illicit maritime activity and apprehending suspects, but effective legal structures are no less important to good maritime governance. Without an accountable and fair judiciary, suspects cannot receive due process and counter-piracy or counter-trafficking efforts lose effectiveness and legitimacy. For these reasons, judicial integrity is a core component of the rule of law and a prerequisite for sustainable maritime security.'
        },
        {
          tag: 'p',
          html: 'There is growing recognition of the importance of a strong “legal finish” to maritime enforcement strategies. In Somalia, Nigeria, and elsewhere, officials recognize that suspects are apprehended in vain if states do not have the policies and bureaucracies needed to prosecute maritime crimes in a timely and transparent manner. This is why major regional maritime security exercises like the Gulf of Guinea’s Obangame Express now conclude with mock trials. Countries building judicial integrity can replicate successful policies from other countries and explicitly address legal finishes in their national maritime security strategies.'
        },
        {
          tag: 'p',
          html: 'We gauge judicial integrity with Varieties of Democracy data on government attacks on the judiciary, the prevalence of bribery in a country’s court system, and the extent to which corrupt judges are held accountable for their crimes. We find that this factor correlates highly with other components of the rule of law, including corruption and government efficacy. These aspects of the rule of law are positively reinforcing: countries with sound judicial systems are better able to prosecute corruption and lower levels of corruption are conducive for building stronger legal structures.'
        }
      ]
    },
    { // Card 6

      title: 'Data and Methods',
      menu: 'Data and Methods',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Methods.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-5-layer',
        translate: [],
        highlights: null,
        tooltip: true,
        legend: 'Rule of Law Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso].index;
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Rule of Law:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {
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
          html: 'Data and Methods'
        },
        {
          tag: 'caption',
          text: 'How we created the Rule of Law score'
        },
        {
          tag: 'p',
          html: 'Good maritime governance requires bureaucratic and legal structures that are capable of designing, implementing, and enforcing policy. Threats to the rule of law, including corruption, bribery, discrimination, and underdeveloped and ineffective political institutions impede a state’s capacity to provide good maritime governance. We measure the Rule of Law Score with five equally weighted components:'
        },
        {
          tag: 'h4',
          html: 'Corruption'
        },
        {
          tag: 'p',
          html: 'Corrupt officials fail to enforce policy and enable transnational crime and corruption in maritime governance. Maritime trade is especially affected because nearly all of Africa’s international trade transits the maritime space. Many organizations have created corruption measures already, so we adapt the <a href="https://www.transparency.org/news/feature/corruption_perceptions_index_2016" target="_BLANK">Corruption Perceptions Index by Transparency International</a> to create the Corruption Component. This measure averages 13 other corruption variables, with more corrupt countries earning lower values.'
        },
        {
          tag: 'h4',
          html: 'Efficacy'
        },
        {
          tag: 'p',
          html: 'Ineffective governments cannot enforce policy, and this hinders a state’s ability to secure its maritime space and prevent illicit maritime activities. We measure efficacy by rescaling the Functioning of Government indicator from Freedom House. The Freedom House Functioning of Government indicator ranges from 0 to 12, with the most efficacious governments receiving higher scores.'
        },
        {
          tag: 'h4',
          html: 'Government Efficiency'
        },
        {
          tag: 'p',
          html: 'Governments with unnecessary administrative and bureaucratic hurdles provide more opportunities for bribery and corruption, especially as these systems relate to trade, customs, and international migration. Each year, the World Bank Doing Business report gauges government efficiency in several areas, one of which is Trading Across Borders. This indicator is computed from expert estimates of the amount of time and money required to move a standard shipping container into the country. The measure is especially relevant for efficiency in African maritime governance, as the region’s international trade transits almost exclusively through seaports.'
        },
        {
          tag: 'h4',
          html: 'Judicial Integrity'
        },
        {
          tag: 'p',
          html: 'Judicial integrity is important to the enforcement of existing laws and ensuring that the de jure regulations are de facto conditions. Where judges are bribed and laws go unenforced, the rule of law is too weak for policies aimed at the maritime domain to be effective. We create the Judicial Integrity Component using three indicators from the Varieties of Democracy Project (V-Dem), a leading dataset on the strength of governance around the world: Judicial Attacks, Judicial Accountability, and Judicial Bribery.'
        },
        {
          tag: 'h4',
          html: 'Inclusion'
        },
        {
          tag: 'p',
          html: 'We gauge political inclusion with five indicators from the Varieties of Democracy Project (V-Dem). These cover unequal treatment under the law according to social group identification, subnational region, religion, socioeconomic status, and gender. These are measures of equal treatment under the law, and not the absolute provision of liberal and transparent governance. Non-democratic states can score well if the law is equally applied across all five of these social divisions.'
        },
        {
          tag: 'p',
          html: 'More details about all of these scores are available on our data page.'
        }
        // { tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Lighter shades indicate higher Rule of Law scores.</em>'
        // },
        // { tag: 'p',
        //    html: 'The Rule of Law score considers five concepts that are central to good governance: corruption, government efficacy, government efficiency, judicial integrity, and inclusion. We calculate these five scores and then average them across the five areas. We provide an overview of our methodology below and a complete summary in the <a href="../../data" target="_blank">Technical Notes</a>.'
        // },
        // { tag: 'h4',
        //   text: 'Corruption'
        // },
        // { tag: 'p',
        //    html: 'Corrupt officials fail to enforce policy and thus enable transnational crime, and corruption in maritime governance and maritime trade is especially problematic because nearly all of Africa’s international economic activity—both legitimate and illicit—transits the maritime space. Many organizations have created corruption measures already, so we adapt the Corruption Perceptions Index by Transparency International (TI). This measure averages 13 other corruption indicators and scores states on a scale from 0 to 100, with more corrupt countries earning lower scores. TI’s methodology prevents nearly every state from exceeding 80, so we divide each country’s score by 80 to achieve a more reasonable high benchmark.'
        // },
        // { tag: 'h4',
        //   text: 'Government Efficacy'
        // },
        // { tag: 'p',
        //   html: 'Ineffective governments cannot enforce policy, which hinders a state’s ability to secure its maritime space and prevent illicit maritime activities. We measure efficacy by rescaling the Functioning of Government score from Freedom House. This score, published as part of the annual <em> Freedom in the World report </em>, reflects expert responses to questions like “Do non-state actors, including criminal gangs, the military, and foreign governments, interfere with or prevent elected representatives from adopting and implementing legislation and making meaningful policy decisions?” and “Are there independent and effective auditing and investigative bodies that function without impediment or political pressure or influence?”'
        // },
        // { tag: 'h4',
        //   text: 'Government Efficiency'
        // },
        // { tag: 'p',
        //   html: 'Governments that have unnecessary administrative and bureaucratic hurdles provide more opportunities for bribery and corruption, especially as these systems relate to trade, customs, and international migration. Each year, the World Bank gauges government efficiency in several areas, one of which is “Trading Across Borders.” This score is computed from expert estimates of the amount of time and money required to move a standard shipping container into the country. The measure is especially relevant for efficiency in African maritime governance, as the region’s international trade transits almost exclusively through seaports.'
        // },
        // { tag: 'h4',
        //   text: 'Judicial Integrity'
        // },
        // { tag: 'p',
        //   html: 'Judicial integrity is important to the enforcement of existing laws and ensuring that the de jure regulations are de facto conditions. Where judges are bribed and laws go unenforced, the rule of law is too weak for policies aimed at the maritime domain to be effective. We capture this concept using three variables from the Varieties of Democracy Project, a leading dataset on the strength of governance around the world. Specifically, we create a Judicial Integrity score from three measures that score how often (1) the government attacks the judiciary in public, (2) corrupt or inept judges are held accountable and removed from office, and (3) individuals and businesses pay bribes in return for favorable or speedy decisions.'
        // },
        // { tag: 'h4',
        //   text: 'Inclusion'
        // },
        // { tag: 'p',
        //   html: 'We gauge political inclusion with five measures from the Varieties of Democracy Project. These data are collected both globally and annually and they cover unequal treatment of the law according to social group identification (i.e., ethnic groups), subnational region, religion, socioeconomic status, and gender. Note that this is a measure of equal treatment under the law, and not the absolute provision of liberal and transparent governance. Non-democratic states can score well if the law is equally applied across all five of these social divisions.'
      ]
    }
  ]
}
