var maritimeMixedMigrationData = {
  // not prepped?
  metadata: { // Independent data source for each page
    version: '0.0.2',
    name: 'Mixed Migration',
    updates: true,
    /*
         here is where you write updates
         do one line per update, like
         added legend to card 3
         added citations to card 5
         input thumbnail path to card 4
         loaded point data

         */
    index: 10,
    code: 'maritimeMixedMigration',
    path: 'maritime-mixed-migration',
    countryData: {},
    csv: '../../data/maritime-mixed-migration/maritimeMixedMigration.csv',
    color: '#896F33',
    order: -1,
    description: 'Migrants hoping for better economic opportunities are susceptible to being victims of crimes such as human trafficking, slavery, and the illicit sex trade.'
  },
  load: function(csv, callback) {
    loadIAcsv(csv, callback);
  },
  cards: [
    { // Card 0
      title: 'Maritime Mixed Migration',
      menu: 'Maritime Mixed Migration',
      metadata: {
        owner: 'Curtis Bell',
        description: 'Card will introduce the section, define smuggling and trafficking.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Maritime Mixed Migration Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['MMM_FINAL'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Maritime Mixed Migration:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {

          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {

          choropleth(index, 1, 'MMM_FINAL');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Maritime Mixed Migration',
        },
        {
          tag: 'caption',
          text: 'Trafficking and smuggling in persons'
        },
        {
          tag: 'p',
          html: 'Experts in human security have long realized the complex nature of activities like human smuggling, human trafficking, slavery, economic migration, asylum-seeking, and the global illicit sex trade. Individual migrants who leave their home countries for economic opportunities elsewhere may find themselves both voluntarily paying smugglers and involuntarily paying bribes and ransoms before they reach their destinations. Others will never arrive, and will instead endure long periods of forced labor or subjugation to sex traffickers. Some will see their families divided among transnational criminal networks that exploit vulnerable migrants.'
        },
        {
          tag: 'p',
          html: 'Following the lead of the International Organization for Migration, we describe these activities as mixed migration, and further describe the presence of these activities at sea and in ports as maritime mixed migration.'
        },
        {
          tag: 'img',
          src: '../../assets/maritime-mixed-migration/mixed-migration-coin-cloud.png',
          alt: 'International Cooperation and related issues.'
        },
        {
          tag: 'p',
          html: 'Low levels of maritime mixed migration are linked to a well-developed Blue Economy, strong Rule of Law, and a high level of Coastal Welfare. Countries with well-developed Blue Economies and high Coastal Welfare are more likely to provide the kind of economic opportunities that dissuade migration while strong Rule of Law implies greater obstacles to illicit activities like the illicit sex trade and child labor.'
        },
        {
          tag: 'p',
          html: 'This section has five parts. The first four each discuss a different sub-component of the maritime mixed migration score. The first is Maritime Trafficking, followed by Maritime Transit, then Legal Protections, and concluding with Socioeconomic Vulnerability. The section ends with a discussion of methods.'
        },
      ]
    },
    { // Card 1
      title: "Maritime Trafficking",
      menu: "Maritime Trafficking",
      metadata: {
        "owner": "Alex Amling",
        "description": "Forced labor / fishing, Gulf of Guinea."
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: "",
        translate: [],
        legend: 'Measure of maritime trafficking',
        tooltip: true,
        //    "highlights": ['AGO', 'ZAF', 'COG'],
        tooltipHTML: function(iso) {
          var val = issueAreaData[issueArea].metadata.countryData[iso]['MMM_MAP_ACTIVITY'];

        },
        load: function (index, csv) {
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function (index) {
          choropleth(index, 1, 'MMM_MAP_ACTIVITY');
        }
      },
      "els": [{
          "tag": "h1",
          "text": "Maritime Trafficking"
        },
        {
          "tag": "caption",
          "text": "Forced labor in marine fisheries"
        },
        {
          "tag": "p",
          "html": "Maritime trafficking in the form of forced labor is a significant problem in the fishing industry in the Gulf of Guinea, where both adults and children can suffer severe physical abuse, starvation, and sickness due to labor exploitation.<sup>24</sup>  At the time of writing, there are no legal instruments in place that regulate living and working conditions on fishing vessels, making the fishing sector “particularly susceptible to human trafficking.”<sup>25</sup>"
        },
        {
          "tag": "p",
          "html": "In many cases, fishing vessels are registered in states that do not enforce international protocols and treaties on human smuggling and trafficking.<sup>26</sup>  Trafficking victims have no access to legal recourse, are stripped of identification documents, and are often stuck on fishing vessels against their will for prolonged periods of time.<sup>27</sup>"
        },
        {
          "tag": "p",
          "html": "The U.S. State Department’s 2017 <em>Trafficking in Persons Report</em> lists several countries where human trafficking is directly linked to the fishing industry. Among the listed countries, South Africa and Ghana stand out for different reasons.<sup>28</sup>"
        },
        {
          "tag": "p",
          "html": "In South Africa, young, mostly South and Southeast Asian men<sup>29</sup> are deceived by recruitment agencies specializing in the fishing industry.<sup>30</sup>  Once on board the fishing vessels, these men suffer from beatings and verbal abuse they cannot escape due to their isolation at sea.<sup>31</sup>"
        },
        {
          "tag": "p",
          "html": "In Ghana, traffickers exploit the traditional practice of leasing young boys to fishing boats, beating and denying food and education to children as young as six who have been knowingly turned over by their parents due to extreme poverty.<sup>32</sup>  The violence these boys are subjected to is especially heinous “because trafficked children [are] considered dispensable due to the poverty of their families and the ease of acquiring more children” to work.<sup>33</sup>  While pressure from the international community has led to significant changes in other industries that have relied predominantly on child labor and child trafficking (e.g., cocoa), legislation is non-existent for boys in the artisanal fishing industry on Lake Volta.<sup>34</sup>"
        },
        {
          "tag": "img",
          "src": "../assets/maritime-mixed-migration/fishing_vessel_illegal_ghana.jpg",
          "alt": "U.S. and Ghanaian law enforcement inspect a fishing vessel suspected of illicit activity. U.S. Navy photo by Kwabena Akuamoah-Boateng.",
          "caption": "U.S. and Ghanaian law enforcement inspect a fishing vessel suspected of illicit activity. U.S. Navy photo by Kwabena Akuamoah-Boateng."
        },
        {
          "tag": "p",
          "html": "In both artisanal inland and sea-based fishing, it remains unclear to what extent human trafficking for forced labor as a cost-saving feature influences the pricing of fish.<sup>35</sup>  What is clear, however, is the fact that human trafficking networks thrive where there is high demand for cheap labor and poor enforcement of labor protections.<sup>36</sup> "
        },
        {
          "tag": "links",
          "items": [{
              "org": "<sup>24</sup> International Labour Organization, <em>Caught at Sea: Forced Labour and Trafficking in Fisheries</em> (Geneva, Switzerland: ILO, 2013),",
              "url": "http://www.ilo.org/wcmsp5/groups/public/---ed_norm/---declaration/documents/publication/wcms_214472.pdf"
            },
            {
              "org": "<sup>25</sup> Interpol, <em>Study on Fisheries Crime in the West African Coastal Region</em> (Lyon, France: Interpol Environmental Security Sub-Directorate, 2014),",
              "url": "http://globalinitiative.net/wp-content/uploads/2017/01/interpol-illegal-fishing-study.pdf"
            },
            {
              "org": "<sup>26</sup> United Nations Office on Drugs and Crime, <em>Transnational Organized Crime in the Fishing Industry – Focus on: Trafficking in Persons, Smuggling of Migrants, Illicit Drugs Trafficking</em> (Vienna, Austria: United Nations, 2011),",
              "url": "https://www.unodc.org/documents/human-trafficking/Issue_Paper_-_TOC_in_the_Fishing_Industry.pdf"
            },
            {
              "org": "<sup>27</sup> Ibid."
            },
            {
              "org": "<sup>28</sup> U.S. Department of State, <em>Trafficking in Persons Report</em> (Washington, D.C.: U.S Department of State, June 2017),",
              "url": "https://www.state.gov/documents/organization/271339.pdf"
            },
            {
              "org": "<sup>29</sup> Melanie Gosling, “’Slave Ships’ Seized off Cape Coast,” <em>Independent Online</em>, 24 January 2014,",
              "url": "https://www.iol.co.za/news/south-africa/western-cape/slave-ships-seized-off-cape-coast-1636266"
            },
            {
              "org": "<sup>30</sup> Seafish, <em>Seafish Ethics Profile: South Africa</em> (Grimsby, UK: Seafish Industry Authority, 2015),",
              "url": "http://www.seafish.org/media/publications/SouthAfricaEthicsProfile_201509.pdf"
            },
            {
              "org": "<sup>31</sup> Rebecca Surtees, <em>In African Waters: The Trafficking of Cambodian Fishers in South Africa</em> (Geneva, Switzerland and Washington, D.C.: IOM and Nexus Institute, 2014),",
              "url": "http://un-act.org/publication/view/in-african-waters-the-trafficking-of-cambodian-fishers-in-south-africa/"
            },
            {
              "org": "<sup>32</sup> Sharon LaFraniere, “Africa’s World of Forced Labor, in a 6-Year-Old’s Eyes,” <em>The New York Times</em>, 29 October 2006,",
              "url": " http://www.nytimes.com/2006/10/29/world/africa/29ghana.html"
            },
            {
              "org": "<sup>33</sup> Kirsten Singleton, Katrina B. Stone, and Julie Stricker, <em>Child Trafficking into Forced Labor on Lake Volta, Ghana: A Mixed Methods Assessment</em> (Washington, D.C.: International Justice Mission, 2016),",
              "url": "https://www.ijm.org/sites/default/files/resources/ijm-ghana-report.pdf"
            },
            {
              "org": "<sup>34</sup> Ibid."
            },
            {
              "org": "<sup>35</sup> International Labour Organization, <em>Caught at Sea</em>; Singleton, Stone, and Stricker, <em>Child Trafficking into Forced Labor on Lake Volta, Ghana</em>."
            },
            {
              "org": "<sup>36</sup> Christopher Horwood, <em>In Pursuit of the Southern Dream: Victims of Necessity: Assessment of the Irregular Movement of Men from East Africa and the Horn to South Africa</em> (Geneva, Switzerland: International Organization for Migration, 2009),",
              "url": "http://publications.iom.int/system/files/pdf/iomresearchassessment.pdf"
            }
          ]
        }
      ]
    },
    { // Card 2
      title: 'Maritime Transit',
      menu: 'Maritime Transit',
      metadata: {
        owner: 'Emina Sadic',
        description: 'Overview of routes outside the Med.'
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: '',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Measure of transit ???###',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['MMM_MAP_TRANSIT'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of transit??####:<br />" + tooltipVal + " / 100";

        },
        load: function(index, file) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
          var labels = [
            [-15.5, 29.2],
            [8.2, 4.88],
            [47.8, 12.6],
            [39, -18],
            [45, -9]
          ];

          var labelg = mapg.append('g')
            .classed('card-layer invisible ' + layer, true);

          labels.forEach(function(label, i) {
            labelg.append('rect')
              .attr('x', function() {
                return projection(label)[0];
              })
              .attr('y', function() {
                return projection(label)[1];
              })
              .classed('migration-label', true)
              .style('fill', function() {
                return colorBrew[(i * 2) + 1];
              })
              .style('cursor', 'pointer')
              .attr('data-num', (i + 1))
              .on('click', function() {
                var id = '.migration-route-' + d3.select(this).attr('data-num');
                var dist = $(id).offset().top;
                $(window).scrollTop(dist - 80);

                var header = d3.select(id);

                header.transition()
                  .duration(800)
                  .style('background-color', function() {
                    return colorBrew[(i * 2)];
                  });

                header.transition()
                  .duration(500)
                  .delay(800)
                  .style('background-color', function() {
                    return colorBrew[((i + 1) * 2) - 1];
                  });
              });

            labelg.append('text')
              .attr('x', function() {
                return projection(label)[0] + 14;
              })
              .attr('y', function() {
                return projection(label)[1] + 29;
              })
              .style('fill', function() {
                return colorBrew[i][1];
              })
              .classed('migration-label-text', true)
              .text(i + 1)
              .style('pointer-events', 'none');
          });

        },
        switch: function(index) {
          d3.selectAll('.card' + index + '-layer')
            .classed('invisible', false);

          for (var i = 0; i < 5; i++) {
            var select = '.migration-route-' + (i + 1);
            d3.select(select)
              .style('background-color', function() {
                return colorBrew[(i * 2) + 1];
              });
          }

          choropleth(index, 1, 'MMM_MAP_TRANSIT');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Maritime Transit',
        },
        {
          tag: 'caption',
          text: 'Maritime economic migration occurs in every part of sub-Saharan Africa'
        },
        // {
        //   tag: 'legend',
        //   text: 'Map Legend',
        //   legendContent: '<em>Number squares correspond with the route descriptions offered below</em>'
        // },
        {
          tag: 'p',
          html: 'The surge in migrants leaving Africa for Europe has garnered global attention, but significant migration routes also surround sub-Saharan Africa, and these routes receive far less attention. This section highlights some of the major African maritime transit routes beyond the Mediterranean Basin.'
        },


        {
          tag: 'h3',
          classes: 'migration-heading migration-route-1',
          text: '1 To the Canary Islands',
        },
        {
          tag: 'p',
          html: 'Nearly a decade ago, the West African route that links Senegal and Mauritania to the Spanish Canary Islands was frequently utilized for migrants smuggled in small wooden fishing boats. When its popularity peaked in 2006, nearly 32,000 migrants made the journey and an estimated 20 percent died in the attempt.<sup>1</sup> Increased patrolling efforts by Spain, Senegal, and Mauritania over the last decade have reduced the popularity of this route by 98 percent; in 2016, these countries identified just 671 known travelers.<sup>2</sup>'
        },
        {
          tag: 'h3',
          classes: 'migration-heading migration-route-2',
          text: '2 West Africa to Gabon',
        },
        {
          tag: 'p',
          html: 'While the majority of West African migrants travel north to the Mediterranean Sea, some turn south to seek work in oil-rich Gabon and Equatorial Guinea. Calabar, a port city in southeastern Nigeria, is a known launching point for those heading south to find work in oil hubs. As West African members of ECOWAS permit free movement between member states, an unknown number of economic migrants take this route from Benin, Burkina Faso, Mali, Nigeria, and elsewhere.'
        },
        {
          tag: 'h3',
          classes: 'migration-heading migration-route-3',
          text: '3 Somalia to Yemen, and Back',
        },
        {
          tag: 'p',
          html: 'Over 200,000 migrants from the Horn of Africa crossed the Red Sea or Gulf of Aden to reach Yemen over the last decade, but ongoing conflict and increasing travel costs have caused a sharp drop in the popularity of this route. The severity of Yemen’s ongoing humanitarian disaster and stronger labor laws around the Arabian Peninsula have instead generated a growing reverse flow back to the Horn of Africa. Since 2015, nearly 100,000 people are believed to have migrated to Africa from this war zone.'
        },
        {
          tag: 'h3',
          classes: 'migration-heading migration-route-4',
          text: '4 East Africa to South Africa',
        },
        {
          tag: 'p',
          html: 'South Africa receives around 15,000 migrants per year from the Horn of Africa.<sup>3</sup> They travel a maritime route that transits Kenya and Tanzania to arrive in Mozambique. From there, migrants travel over land to South Africa. Approximately 97 percent of the migrants on this route use smuggling networks.<sup>4</sup>'
        },
        {
          tag: 'h3',
          classes: 'migration-heading migration-route-5',
          text: '5 Comoros and Madagascar to Mayotte',
        },
        {
          tag: 'p',
          html: 'Each year, the French territorial island of Mayotte draws migrants from neighboring countries including Comoros and Madagascar. This draw increased when Mayotte became France’s 101<sup>st</sup> department in 2011. This new political status brought higher wages, higher standards of health and education, and the practice of birthright citizenship, which allows non-French citizens born in Mayotte to apply for citizenship upon attaining adulthood.<sup>5</sup> Migrants often travel by night in small overcrowded boats called <em>kwassa-kwassa</em>; this makes the risky journey even more perilous by increasing the risk of capsizing.'
        },
        {
          tag: 'img',
          src: '../../assets/maritime-mixed-migration/beyond_the_med_routes-01.png', // This should be on the Stable Seas Deck - comments
        },
        {
          tag: 'links',
          items: [{
              org: '<sup>1</sup> Walter Kemp, “Learning from the Canaries: Lessons from the ‘Cayucos’ Crisis,” New York: International Peace Institute, May 2016, 3.'
            },
            {
              org: '<sup>2</sup> Jorgen Carling and Maria Hernandez-Carretero. “Protecting Europe and Protecting Migrants? Strategies for Managing Unauthorised Migration from Africa,” <em>British Journal of Politics and International Relations</em> 13 (2011): 43, doi:10.1111/j.1467-856X.2010.00438.x.'
            },
            {
              org: '<sup>3</sup> Bram Frouws and Christopher Horwood, “Smuggled South,” Regional Mixed Migration Secretariat, March 2017,2,',
              url: 'http://regionalmms.org/images/briefing/Smuggled_South.pdf'
            },
            {
              org: '<sup>4</sup> Frouws and Horwood, “Smuggled South,” 15.'
            },
            {
              org: '<sup>5</sup> Simon Massey, “A Hidden Catastrophe: Irregular Migration within the Comoros Archipelago,” in <em>Eurafrican Migration: Legal, Economic and Social Responses to Irregular Migration</em>, eds. Simon Massey and Rino Coluccello (London: Palgrave Pivot, 2015), 109.'
            }
          ]
        }
        //(http://www.aljazeera.com/programmes/aljazeeraworld/2016/02/island-death-160203115053532.html, documentary, boat scenes starting 22:42, 30:30)
      ] // end of els array
    },
    { // Card 3
      title: 'Legal Protections',
      menu: 'Legal Protections',
      metadata: {
        owner: '',
        description: ''
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Measure of Legal Protections',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['MMM_MAP_LEGAL'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of Legal Protections:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {

          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {

          choropleth(index, 1, 'MMM_MAP_LEGAL');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Legal Protections',
        },
        {
          tag: 'caption',
          text: '???'
        },
        {
          tag: 'p',
          html: 'As maritime mixed migration routes and networks shift with political and economic conditions, combatting this challenge requires both international cooperation and strong domestic legal response structures.'
        },
        {
          tag: 'p',
          html: 'At the international level, there are numerous agreements designed to combat various forms of human trafficking and smuggling. Many of these agreements have been widely adopted, including the International Labor Organization Forced Labor Convention of 1930, the International Labor Organization Abolition of Forced Labor Convention of 1957, and the International Labor Organization Worst Forms of Child Labor Convention of 1999. Each of these agreements have been signed and ratified by every state included in this analysis, but there are remaining agreements that have yet to be accepted by a majority of states,  including the International Labor Organization Domestic Workers Convention of 2011 and the International Labor Organization Work in Fishing Convention of 2007. Considering the high levels of human trafficking in the fishing sector, it is imperative that states continue to adopt international agreements designed to combat such activities.'
        },
        {
          tag: 'p',
          html: 'At the country level, states are responsible for prosecuting criminals involved in human trafficking as well as protecting potential victims and preventing the development and evolution of trafficking networks. For many states, the greatest challenges is prosecution. As with other maritime crimes, including the illicit trades and piracy and armed robbery, the lack of a legal finish allows human trafficking to flourish.'
        }
      ]
    },
    { // Card 4
      title: 'Socioeconomic Vulnerability',
      menu: 'Socioeconomic Vulnerability',
      metadata: {
        owner: '',
        description: ''
      },
      map: {
        type: 'continuous',
        scale: [],
        classes: 'card-eez-layer',
        translate: [],
        highlights: [],
        tooltip: true,
        legend: 'Measure of Vulnerability',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['MMM_MAP_VULNERABLE'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Measure of Vulnerability:<br />" + tooltipVal + " / 100";

        },
        load: function(index, csv) {

          var layer = 'card-' + index + '-layer';
          classEEZ(layer);
        },
        switch: function(index) {

          choropleth(index, 1, 'MMM_MAP_VULNERABLE');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Socioeconomic Vulnerability',
        },
        {
          tag: 'caption',
          text: '???'
        },
        {
          tag: 'p',
          html: 'Conditions within a country can make a certain population particularly vulnerable to human trafficking. Children in countries with low completion rates for primary school and poor socioeconomic conditions are one example of a vulnerable population. UNICEF estimates that 24 percent of global trafficking victims are children, but for sub-Saharan Africa this estimate rises to 64 percent. Children are often vulnerable following negotiations to transport them for work, education, or formal training in another city or country. Their parents are sometimes aware of the circumstances involved. Additionally, porous borders and lax regulatory environments allow for trafficking of children to flourish.'
        },
        {
          tag: 'p',
          html: 'In oil-rich Gabon and Equatorial Guinea, children are trafficked into the oil industry, domestic servitude, or the commercial sex trade.18 Many of these victims arrive by cramped boat from southern Nigeria. These migrations take several days and there is a high risk of boats capsizing.19 Due to limited monitoring services, few statistics are available to prove exactly how many children begin and complete this journey.'
        },
        {
          tag: 'p',
          html: 'In Gabon, girls are trafficked through middlepersons, including women called “aunties,” who facilitate opportunities for girls to work for wealthy African or European families.20 The risks of sexual abuse and forced child labor are severe. Often, girls fleeing situations of forced domestic labor fall into prostitution and pedophilia networks. Young girls from neighboring countries also run the risk of becoming child brides in Gabon. Boys who come to Gabon seeking work can be lured into unpaid and unsafe jobs, or forced into street begging. Others are trafficked in the fishing sector, forced into dangerous jobs on the open sea.'
        }
      ]
    },
    { // Card 5
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
        legend: 'Maritime Mixed Migration Score',
        tooltipHTML: function(iso) {

          var tooltipVal = issueAreaData[issueArea].metadata.countryData[iso]['MMM_FINAL'];
          tooltipVal = Math.round(tooltipVal * 100);
          updatePointer(tooltipVal);
          return "Maritime Mixed Migration:<br />" + tooltipVal + " / 100";

        },
        load: function(index, file) { // ### *** This only should be for the first card ...
          var layer = 'card-' + index + '-layer';

          d3.selectAll('.card-eez-layer')
            .classed(layer, true);

        },
        switch: function(index) {
          choropleth(index, 1, 'MMM_FINAL');
        }
      },
      els: [{
          tag: 'h1',
          text: 'Data and Methods',
        },
        {
          tag: 'caption',
          text: 'How we created the Maritime Mixed Migration score'
        },
        {
          tag: 'p',
          html: 'The complexity of maritime mixed migration complicates efforts to measure it even where some data on migration, trafficking, and human smuggling are available. Our effort to measure mixed migration focuses less on raw numbers of people involved in some aspect of mixed migration and more on the variety of activities known to occur in each country, the role of the sea in these activities, each country’s international and domestic legal effort, and a population’s baseline vulnerability to exploitation based on relevant socioeconomic factors. We adopt a definition of mixed migration from the International Organization for Migration, which uses the following:'
        },
        {
          tag: 'blockquote',
          html: '“The principal characteristics of mixed migration flows include the irregular nature of and the multiplicity of factors driving such movements, and the differentiated needs and profiles of the persons involved. Mixed flows have been defined as ‘complex population movements including refugees, asylum seekers, economic migrants and other migrants’. Unaccompanied minors, environmental migrants, smuggled persons, victims of trafficking and stranded migrants, among others, may also form part of a mixed flow.”'
        },
        {
          tag: 'p',
          html: 'We measure the Mixed Maritime Migration Score with four equally weighted components:'
        },
        {
          tag: 'h4',
          html: 'Maritime Trafficking'
        },
        {
          tag: 'p',
          html: 'Using sources like the US State Department Trafficking in Persons report, we score the severity and breadth of forced labor and sex trafficking across men, women, boys, and girls. We also identify countries used as major international “transit hubs” for smuggled and trafficked persons, and we then weight these scores according to whether such activities occur exclusively, predominantly, or rarely at sea.'
        },
        {
          tag: 'h4',
          html: 'Maritime Transit'
        },
        {
          tag: 'p',
          html: 'Whereas the Maritime Trafficking Score aims to capture the extent of trafficking at sea, the Maritime Transit Component focuses on the movement of people in the maritime space, rather than their exploitation. Many persons who are not being trafficked transit by sea as they pay smugglers to take them to their destinations. We approximate the extent of this kind of maritime transit by considering a country’s refugee rate, calculated from data from the United Nations High Commissioner on Refugees, and the relative prevalence of maritime routes vis-a-vis routes by land or air.'
        },

        {
          tag: 'h4',
          text: 'Legal Protections'
        },
        {
          tag: 'p',
          text: 'The legal protections portion of the score is comprised of an international agreements indicator and a domestic legislation indicator. The international portion of the score measures participation in seven agreements that are directly relevant to protecting migrants, children, and laborers from various forms of involuntary trafficking:'
        },
        {
          tag: 'ul',
          rows: ['Optional Protocol to the Convention on the Rights of the Child on the Sale of Children, Child Prostitution, and Child Pornography', 'Optional Protocol to the Convention on the Rights of the Child on the Involvement of Children in Armed Conflict', 'International Labor Organization Forced Labor Convention of 1930', 'International Labor Organization Abolition of Forced Labor Convention of 1957', 'International Labor Organization Worst Forms of Child Labor Convention of 1999', 'International Labor Organization Domestic Workers Convention of 2011', 'International Labor Organization Work in Fishing Convention of 2007'] // HTML or text?
        },
        {
          tag: 'p',
          text: 'The domestic portion of the score is adapted from the “3P Anti-trafficking Policy Index” by Seo-Young Cho. This index uses the Trafficking in Persons report to annually score a state’s legal efforts in the areas of prosecuting traffickers, protecting potential victims, and preventing trafficking networks.'
        },
        {
          tag: 'h4',
          text: 'Socioeconomic Vulnerability'
        },
        {
          tag: 'p',
          text: 'Finally, populations are more vulnerable to trafficking where political systems are ineffective, human capital is low, and socioeconomic conditions are poor. We operationalize a population’s vulnerability with two indicators: the primary-school completion rate as recorded by the World Bank, and the Vulnerability to Slavery score calculated by the Walk Free Foundation as part of its Global Slavery Index.'
        },

      ] // end of els array
    }
  ] // end of cards array
};
