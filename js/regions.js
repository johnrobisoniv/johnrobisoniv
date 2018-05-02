// STABLE Seas
// ONE EARTH FUTURE
// v0.0.6

// Define global variables
// Issue Area
var regionsIndex = regionsData[region].metadata.index;

// Card
var cIndex;
// Included Countries
var includedCountries = ['AGO', 'BEN', 'CMR', 'CPV', 'COM', 'COG', 'DJI', 'COD', 'GNQ', 'GAB', 'GMB', 'GHA', 'GIN', 'GNB', 'CIV', 'KEN', 'LBR', 'MDG', 'MUS', 'MOZ', 'NAM', 'NGA', 'STP', 'SEN', 'SYC', 'SLE', 'SOM', 'ZAF', 'TZA', 'TGO'];
// Regional Card Path Mappings
var countryPaths = {
  "AGO": {
    "region": "southernCoast",
    "index": 1
  },
  "BEN": {
    "region": "northernGulf",
    "index": 4
  },
  "CMR": {
    "region": "southernGulf",
    "index": 2
  },
  "CPV": {
    "region": "westernCoast",
    "index": 1
  },
  "COM": {
    "region": "westIndianOcean",
    "index": 4
  },
  "COG": {
    "region": "southernGulf",
    "index": 5
  },
  "DJI": {
    "region": "easternCoast",
    "index": 5
  },
  "COD": {
    "region": "southernGulf",
    "index": 6
  },
  "GNQ": {
    "region": "southernGulf",
    "index": 3
  },
  "GAB": {
    "region": "southernGulf",
    "index": 4
  },
  "GMB": {
    "region": "westernCoast",
    "index": 3
  },
  "GHA": {
    "region": "northernGulf",
    "index": 2
  },
  "GIN": {
    "region": "westernCoast",
    "index": 5
  },
  "GNB": {
    "region": "westernCoast",
    "index": 4
  },
  "CIV": {
    "region": "northernGulf",
    "index": 1
  },
  "KEN": {
    "region": "easternCoast",
    "index": 3
  },
  "LBR": {
    "region": "westernCoast",
    "index": 7
  },
  "MDG": {
    "region": "westIndianOcean",
    "index": 1
  },
  "MUS": {
    "region": "westIndianOcean",
    "index": 2
  },
  "MOZ": {
    "region": "easternCoast",
    "index": 1
  },
  "NAM": {
    "region": "southernCoast",
    "index": 2
  },
  "NGA": {
    "region": "northernGulf",
    "index": 5
  },
  "STP": {
    "region": "southernGulf",
    "index": 1
  },
  "SEN": {
    "region": "westernCoast",
    "index": 2
  },
  "SYC": {
    "region": "westIndianOcean",
    "index": 3
  },
  "SLE": {
    "region": "westernCoast",
    "index": 6
  },
  "SOM": {
    "region": "easternCoast",
    "index": 4
  },
  "ZAF": {
    "region": "southernCoast",
    "index": 3
  },
  "TZA": {
    "region": "easternCoast",
    "index": 2
  },
  "TGO": {
    "region": "northernGulf",
    "index": 3
  }
}

// Color variables
// var colorBrew = d3.scaleOrdinal(d3.schemeCategory20);// I don't think we need this any more...
var colorBrew = [
  ['#a6cee3', '#1f78b4'],
  ['#b2df8a', '#33a02c'],
  ['#fb9a99', '#e31a1c'],
  ['#fdbf6f', '#ff7f00'],
  ['#cab2d6', '#6a3d9a']
];
var regionsColor = [];
for (key in regionsData) {
  regionsColor.push(regionsData[key].metadata.color);
}
var regionsColorSelection = regionsColor[regionsIndex];
var rampColor = d3.interpolateLab('white', regionsColorSelection);

// Map variables
var width = $(window).width(),
  height = $(window).height(),
  margins = {
    top: 50,
    bottom: 40,
    left: 0,
    right: 0
  },
  w = width - margins.left - margins.right,
  h = height - margins.top - margins.bottom;

var pi = Math.PI,
  tau = 2 * pi;

var projection = d3.geoMercator()
  .translate([width / 5.5, height / 2.3])
  .scale([w / 4]);

var path = d3.geoPath()
  .projection(projection);

// Set up #map-svg with scalability
var map = d3.select('#map-svg')
  .attr('viewBox', function() {
    return '0 0 ' + w + ' ' + h
  });

// Set <pattern> element at top:
map.append('defs')
  .append('pattern')
  .attr('id', 'pattern-stripe')
  .attr('patternUnits', 'userSpaceOnUse')
  .attr('width', '10')
  .attr('height', '10')
  .attr('patternTransform', 'rotate(45)');
map.append('mask')
  .attr('id', 'mask-stripe')
  .append('rect')
  .attr('x', '0')
  .attr('y', '0')
  .attr('width', '100%')
  .attr('fill', 'url(#pattern-stripe)');

// Set background rect, include callback to reset zoom
map.append('rect')
  .attr('class', 'background')
  .attr('height', '100%')
  .attr('width', '100%')
  .on('click', reset);

// Add svg group to map variable - everything will go inside this.
map = map.append('g')
  .classed('map-g', true);

var mapg = d3.select('.map-g');

// Set up the tooltip:
var tooltip = d3.select('body').append('div')
  .attr('class', 'hidden tooltip col-xs-2');

tooltip.append('h1');
var tooltipRow = tooltip.append('div')
  .classed('row', true);

tooltipRow.append('div')
  .classed('col-xs-6 left', true);
tooltipRow.append('div')
  .classed('col-xs-6 right', true);
// tooltip.append('svg')
//   .classed('tool', true);


// ... and the modals
$('#resizeModal').modal({
  show: false
});

// Active card handler:
var activeCard = 0;



// 1 Load page

// Promises, I hope I never break em

// Add a few sheets and js files
$('head').append('<link href="../../css/fancybox.css" rel="stylesheet">');
$('body').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.25/jquery.fancybox.min.js"></script>');

if (width > 1199 || window.navigator.userAgent.indexOf('MSIE') != -1) {

  buildMap('../../data/map-layer.js')
    .then(function(resolution) {
      // console.log(resolution);
      // If buildMap() resolves, execute:
      return loadRegions(regionsData, activeCard); // returns loadRegions promise
    }).then(function(resolution) {
      console.log(resolution);
      setTimeout(switchCard(activeCard), 1000);
    })
    .catch(function(error) {
      console.log('error', error);
    });

} else { // redirect to PDF if on a small screen !
  window.location.href = "../stable-seas-executive-brief.html";
}


// 2 Tutorial ? (if never loaded ??) Will we implement this? Not MVP ...

// Small divs pop up on 3-step walkthrough
// 1 Issue Area menu
// 2 Card menu
// 3 Map & card interactivity


// Ad hoc elements - ### Add these to templates !

$('#resources-menu').prepend('<li><a href="../stable-seas-executive-brief.pdf" target="_blank">Executive Summary</a></li>');


// 3 Event listeners

$('#content-holder').on('click', '.js-video-button', function() {
  var videoChannel = this.getAttribute('data-channel');
  $('.js-video-button').modalVideo({
    object: videoChannel
  });
});

$('#content-holder').on('click', '.internal-ref', function(e) {
  e.preventDefault();
  var target = this.getAttribute('data-link');
  switchCard(parseInt(target));
});

$('#map-svg').on('mouseenter', '.stableseas', function(e) {
  //var iso3 = e.getAttribute('data-iso3');
  var iso3 = d3.select(this).attr('data-iso3');
  pulse(iso3);
});

$('#map-svg').on('mouseleave', '.stableseas', function() {
  var iso3 = d3.select(this).attr('data-iso3');
  unpulse(iso3);
});

// Window Resize:
$(window).resize(function() {
  if ($(window).width() < 1200) {
    //  console.log('what!?');
    $('#resizeModal').modal('show');
  }
});

d3.selectAll('.stableseas')
  .on('mouseenter', pulse)
  .on('mousemove', function(d) {
    var mouse = d3.mouse(map.node()).map(function(d) { // map. ???
      return parseInt(d);
    })
  })
  .on('mouseout', function() {
    unpulse();
  });

// d3.selectAll('.label')
//   .on('mouseenter', function () {
//     d3.select(this)
//       .classed('invisible', false);
//   })

$('#content-holder').on('click', '.table-expand', function() {
  // e.preventDefault();
  if ($('.ranked-list').hasClass('collapsed')) {

    $('.hid').show();

    d3.select('.table-expand p')
      .text('Collapse...');

    d3.select('.ranked-list')
      .classed('collapsed', false)
      .classed('expanded', true);


  } else if ($('.ranked-list').hasClass('expanded')) {
    $('.hid').hide();

    d3.select('.table-expand p')
      .text('Expand to see more...');

    d3.select('.ranked-list')
      .classed('collapsed', true)
      .classed('expanded', false);

  } // this will break if we use more than one ranked list

});


// 4 Functions
// Master Regions load function
function loadRegions(data, card) { // where data = data.js format ... so it's an object set as a variable? Or array of objects?
  return new Promise(function(resolve, reject) {

    // Set title
    d3.select('title')
      .text(function() {
        return regionsData[region].metadata.name + ' | Stable Seas Africa'
      })

    d3.select('head')
      .append('meta')
      .attr('name', 'description')
      .attr('content', regionsData[region].metadata.description);

    d3.select('.navbar-brand')
      .attr('href', '../overview');
    // Color main ia nav ribbon:
    // console.log(regionsNav);

    // d3.select('.nav-toggle')
    //   .style('background', function () {
    //     return d3.interpolateLab('white', '#0c3b58')(0.2);
    //   });

    $('head').append('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-107179985-1"></script>');

    d3.select('head')
      .append('script')
      .html("window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config', 'UA-107179985-1');");

    $('footer .container').empty();
    $('footer .container').append("<p class=\"text-muted\">Stable Seas is a project of <a target='_blank' href='http://oneearthfuture.org/'>One Earth Future</a>.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To learn more contact Curtis Bell, project lead, at <a href=\"mailto:info@oneearthfuture.org\" target=\"_blank\">info@oneearthfuture.org</a>.<span id='social'><a href='https://www.facebook.com/oneearthfuture/' target=\"+_blank\"><i class='fa fa-facebook'></i></a>&nbsp;&nbsp;<a href='https://twitter.com/oeforg' target=\"_blank\"><i class='fa fa-twitter'></i></a>&nbsp;&nbsp;<a href='https://www.youtube.com/user/OEFResearch'><i class='fa fa-youtube'></i></a>&nbsp;&nbsp;<a href='https://twitter.com/hashtag/StableSeas' target=\"_blank\"><i class='fa fa-hashtag'></i></a></span> </p>");

    var regionsNav = $('.regions-btn');
    $('.menu-navigation-p').remove();

    var regionsMainNav = d3.select('#regions-main-nav');

    regionsMainNav.append('div')
      .classed('regions regions-buffer col-lg-1', true);

    var counter = 0;
    for (regionTmp in regionsData) {
      if (regionTmp != 'radarData') {
        var metadata = regionsData[regionTmp].metadata;
        var index = metadata.index;
        //  console.log(index);
        var regionsPath = metadata.path;
        var regionsCode = metadata.code;

        // #### not sure why this isn't working

        //          var regionsColor = metadata.color;
        var regionsText = metadata.name;

        var regionsLink = regionsMainNav.append('a')
          .attr('href', function() {
            return '../' + regionsPath;
          });

        var regionsDiv = regionsLink.append('div')
          .attr('id', function() {
            return 'regions-' + regionsCode;
          })
          .classed('regions regions-btn col-lg-2-ss', true)
          .style('background-color', regionsColor[index]);

        regionsDiv.append('p')
          .text(regionsText);
      }


    }

    regionsMainNav.append('div')
      .classed('regions regions-buffer col-lg-1', true);

    var regionIABtn = d3.select('#regions-' + region);

    regionIABtn.style('background-color', function() {
        return rampColor(0.6);
      })
      //.style('margin-bottom', 5)
      .style('border-bottom', function() {
        return "5px solid black";
      });

    // Pull target card index from URL anchor:
    var hash = window.location.hash;
    if (hash) {
      hash = parseInt(hash.substring(1));
      if (Math.floor(hash) == hash && $.isNumeric(hash) && hash < regionsData[region].cards.length) {
        activeCard = hash;
      }
    }

    // Load page-level data:
    regionsData[region].load(regionsData[region].metadata.csv, function(result) {

      // Loop through cards:
      var metadata = regionsData[region].metadata;
      var index = metadata.index;
      var regionalCountries = metadata.regionalCountries;

      regionalCountries.forEach(function(iso3) {
        d3.selectAll('.country.' + iso3)
          .style('fill', function() {
            return rampColor(0.5);
          })
          .style('stroke', function() {
            return rampColor(1);
          });

        d3.selectAll('.eez.' + iso3)
          .style('stroke', function() {
            return regionsColor[index];
          });
      });

      var cards = regionsData[region].cards; // Array of card objects
      cards.forEach(function(card, cardIndex) { // don't use single letter variables!!!!
        cIndex = cardIndex;
        // Set up for selector
        var constructionCard = 'card' + cardIndex;
        if (region != 'overview') {
          d3.select('#map-menu')
            .append('div')
            .attr('id', function() {
              return 'card-' + cardIndex + '-menu'
            })
            .attr('data-card', cardIndex)
            .attr('class', 'switch')
            .text(function() {
              return card.menu;
            })
            .on('click', function() {
              switchCard(parseInt(this.getAttribute('data-card')));
            }); // ### click handler menu item ...
        }
        // console.log(card);
        // Load map data...
        var mapDataPath = card.map.path;
        if (card.map.load) {
          card.map.load(cardIndex, mapDataPath);
        }

        // Add card to #content-holder
        var cardUnderConstruction = d3.select('#content-holder')
          .append('div')
          .attr('id', constructionCard)
          .classed('card col-lg-4 col-sm-12 invisible', true)
          .style('border-left', function() {
            return '5px solid ' + rampColor(1);
          });

        if (cardIndex != 0) {
          cardUnderConstruction
            .append('h4')
            .text(regionsData[region].metadata.name)
            .classed('card-header', true);
        }

        // Now for the els array: loop through els array, build each element in order
        var els = card.els;

        els.forEach(function(el, elIndex) {
          buildEl(el, constructionCard, cardIndex, elIndex);
        }); // End els loop

        for (regions in regionsData) {
          d3.selectAll('.inline.' + regionsData[regions].metadata.path)
            .style('background-color', function() {
              return d3.interpolateLab('white', regionsData[regions].metadata.color)(0.2);
            });
        }

      });

      // Build overview menu with direct links to Regions pages
      if (region == 'overview') {
        for (key in regionsData) {
          var md = regionsData[key].metadata;
          d3.select('#map-menu')
            .append('a')
            .attr('href', function() {
              return '../' + md.path;
            })
            .classed(key, true)
            .on('mouseenter', function() {

              pulseRegion(this.getAttribute('class'));
            })
            .on('mouseleave', function() {
              unpulseRegion(this.getAttribute('class'));
            })
            .append('div')
            .classed('switch ' + key, true)
            .classed('active', function() {
              if (key == 'overview') {
                return true;
              } else {
                return false;
              }
            })
            .text(md.name);
          //.append('div')
        }


      }

      buildModals();

      setTimeout(function() {
        resolve('loadRegions resolved');
      }, 0);
    });
  }); // end of Promise
}


// Build Modals:
function buildModals() {
  var resizeModalHTML = '<div class="modal fade" id="resizeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Under Construction</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">Thanks so much for exploring our interface.<br><br>This beta version of the site does not support dynamic resizing. If you\'d like to view our Issue Area summary paper for mobile, click <a href="../maritime-enforcement/m/stable-seas-maritime-enforcement-summary.pdf">here</a>.<br><br>If you\'d like to use the interactive desktop version of the site maximize your browser window and reload.<br><br>If you have any feedback please email info@stableseas.org.<br><br>Thank you!</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';

  $('body').prepend(resizeModalHTML);


}

// Card element Functions
function buildEl(obj, container, cardIndex, elIndex) { // Function to build element from issueArea.cards[i]. object
  switch (obj.tag) {
    case 'p':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
      buildSimple(obj, container, cardIndex, elIndex)
      break;
    case 'ol':
    case 'ul':
      buildList(obj, container, cardIndex, elIndex)
      break;
    case 'legend':
      buildLegend(obj, container, cardIndex, elIndex)
      break;
    case 'links':
      buildLinks(obj, container, cardIndex, elIndex)
      break;
    case 'blockquote':
      buildBlockquote(obj, container, cardIndex, elIndex)
      break;
    case 'bigtext':
      buildBigText(obj, container, cardIndex, elIndex)
      break;
    case 'table':
      buildTable(obj, container, cardIndex, elIndex)
      break;
    case 'img':
      buildImg(obj, container, cardIndex, elIndex)
      break;
    case 'caption':
      buildCaption(obj, container, cardIndex, elIndex)
      break;
    case 'hr':
      d3.select('#' + container)
        .append('hr');
      break;
      // case 'radar' :
      //   buildRadar(obj, container, cardIndex, elIndex);
    case 'indexTable':
      buildIndexTable(obj, container, cardIndex, elIndex)
      break;
    case 'overviewIndexTable':
      buildOverviewIndexTable(obj, container, cardIndex, elIndex)
      break;
    case 'video':
      buildVideo(obj, container, cardIndex, elIndex)
      break;
    case 'd3':
      break;
    case 'radar':
      buildRadar(obj, container, cardIndex, elIndex);
      break;
    default:
      console.log('One of the els objects did not match our switch statement in the buildEl() function.', obj.tag)
  }
}

// and all the buildEl callbacks:
function buildSimple(obj, container, cardIndex, elIndex) {

  var selector = '#' + container;
  var s = d3.select(selector)
    .append(obj.tag);

  if (obj.classes) {
    s.classed(obj.classes, true);
  }
  obj.html ? s.html(obj.html) : s.text(obj.text);

  if (obj.execute) {
    obj.execute();
  };
}


function buildLinks(obj, container, cardIndex, elIndex) {
  var selector = '#' + container;
  var linksDiv = d3.select(selector)
    .append('div')
    .classed('links', true);

  linksDiv.append('h3')
    .text('Notes');

  var links = obj.items;
  links.forEach(function(link) {
    var a = linksDiv.append('a')
      .attr('href', link.url)
      .attr('target', '_blank')
      .append('div')
      .classed('link', true)
      .style('background-color', function() {
        return rampColor(0.3);
      })
      .style('border-right', function() {
        return '5px solid ' + rampColor(1);
      });

    a.append('p')
      .classed('title', true)
      .text(link.title);

    a.append('p')
      .classed('source', true)
      .html(link.org);
  })
}

function buildLegend(obj, container, cardIndex, elIndex) {

  var selector = '#' + container;
  var id = container + '-legend';
  var contDiv = id + '-div';
  var legendDiv = d3.select(selector)
    .append('div')
    .attr('id', id)
    .attr('class', 'panel-group legend')
    .attr('role', 'tablist')
    .attr('aria-multiselectable', 'true')
    .style('background-color', function() {
      return rampColor(0.2);
    })
    .style('border-left', function() {
      return '5px solid ' + rampColor(1);
    });

  var a = legendDiv.append('a')
    .attr('role', 'button')
    .attr('data-toggle', 'collapse')
    .attr('data-parent', function() {
      return '#' + id
    })
    .attr('href', function() {
      return '#' + contDiv
    })
    .attr('aria-expanded', 'true')
    .attr('aria-controls', contDiv);

  a.append('div')
    .attr('class', 'panel-heading')
    .attr('role', 'tab')
    .attr('id', function() {
      return id + '-heading';
    })
    .append('h3').attr('class', 'legend-title')
    .text(obj.text)
    .append('span')
    .attr('class', 'glyphicon glyphicon-info-sign')
    .attr('aria-hidden', 'true');

  var legendContent = legendDiv.append('div')
    .attr('id', contDiv)
    .attr('class', 'panel-collapse collapse in')
    .attr('role', 'tabpanel')
    .attr('aria-labelledby', function() {
      return id + '-heading';
    })
    .append('div')
    .classed('legend-body', true);

  legendContent.html(obj.legendContent);
}

function buildBlockquote(obj, container, cardIndex, elIndex) {
  var selector = '#' + container;
  var bqDiv = d3.select(selector)
    .append('div')
    .attr('class', 'block col-lg-12')
    .style('background-color', function() {
      return rampColor(0.2);
    })
    .style('border-left', function() {
      return '5px solid ' + rampColor(1);
    });

  bqDiv.append('p')
    .html(obj.html);

  bqDiv.append('span')
    .classed('attribution', true)
    .append('a')
    .attr('href', obj.link)
    .attr('target', '_blank')
    .html(obj.source);
}

function buildBigText(obj, container, cardIndex, elIndex) {
  var selector = '#' + container;
  var bigText = d3.select(selector)
    .append('div')
    .attr('class', 'big-text col-lg-12');


  bigText.append('p')
    .html(obj.html)
    .style('border-top', function() {
      return '2px solid ' + rampColor(0.3);
    })
    .style('border-bottom', function() {
      return '2px solid ' + rampColor(0.3);
    });;

}

function buildTable(obj, container, cardIndex, elIndex) {
  var selector = '#' + container;
  var table = d3.select(selector)
    .append('table')
    .classed('ranked-list', true);

  var trs = obj.rows;

  trs.forEach(function(row) {
    var tr = table.append('tr');

    row.forEach(function(cell) {
      tr.append('td')
        .text(cell);
    })
  })
}

function buildList(obj, container, cardIndex, elIndex) {

  if (obj.build) {
    obj.build(container);
  }

  var list = d3.select('#' + container)
    .append(obj.tag);
  var items = obj.rows;
  items.forEach(function(item) {
    list.append('li')
      .html(item);
  })
}

function buildVideo(obj, container, elIndex) {

  var videoThumb = d3.select('#' + container)
    .append('div')
    .classed('video-thumb js-video-button col-lg-12', true)
    .attr('data-video-id', obj.videoId)
    .attr('data-channel', obj.channel ? obj.channel : 'youtube');

  if (obj.gif) {

    videoThumb.append('img')
      .attr('src', obj.thumb)
      .classed('video-gif', true);

  } else {

    videoThumb.append('img')
      .attr('src', obj.thumb)
      .classed('background-video-image', true);
    //
    // videoThumb.append('img')
    //   .classed('inner-thumb', true)
    //   .attr('src', '../assets/play-icon.png');
  }

}

function buildImg(obj, container, cardIndex, elIndex) {

  var selector = '#' + container;
  var img;

  if (obj.link) {
    img = d3.select(selector)
      .append('a')
      .attr('href', obj.link)
      .attr('target', '_blank');
  } else {
    img = d3.select(selector)
      .append('a')
      .attr('data-fancybox', 'gallery')
      .attr('href', obj.src);
  }

  img.append('img')
    .classed('img-responsive', true)
    .attr('src', obj.src)
    .attr('alt', obj.alt);

  d3.select(selector)
    .append('div')
    .classed('caption', true)
    .append('p')
    .html(obj.caption);
}

function buildCaption(obj, container, cardIndex, elIndex) {

  var selector = '#' + container;

  var p = d3.select(selector)
    .append('div')
    .classed('caption', true)
    .append('p');

  p.html(obj.text);
}

// the rest is going to be custom - right?

function buildIndexTable(obj, container, cardIndex, elIndex) {
  // Set variable equal to data pulled in from CSV in regionsData[region].load();
  var metadata = regionsData[region].metadata;
  var order = metadata.order;
  var tableData = metadata.countryData;
  var csvSelector = 'regions' + metadata.index + 'c' + cardIndex;

  tableData = tableData.sort(function(x, y) {
    return d3.descending(x[csvSelector], y[csvSelector]); // ### This needs to be refactored as x[cardCol], y[cardCol]
  });

  var listLength = tableData.length;
  var tableArray = [];

  tableData.forEach(function(row) {
    tableArray.push(row[csvSelector]);
  });
  var tableMax = d3.max(tableArray),
    tableMin = d3.min(tableArray);

  var table = d3.select('#' + container)
    .append('table')
    .attr('id', function() {
      return container + '-list';
    })
    .classed('ranked-list collapsed', true)
    .selectAll('tr')
    .data(tableData)
    .enter();

  var trow = table.append('tr')
    .attr('data-iso3', function(d) {
      return d.iso3
    })
    .attr('class', function(d, i) {
      if (i < 5) {
        return d.iso3
      } else {
        return d.iso3 + ' hid'
      };
    })
    .classed('country-rank', true)
    .on('mouseenter', function() {
      var iso3 = d3.select(this).attr('data-iso3');
      pulse(iso3);
    })
    .on('mouseleave', unpulse);
  // ^ from https://bl.ocks.org/lhoworko/7753a11efc189a936371


  trow.append('td')
    .text(function(d, i) {
      return i + 1;
    });

  trow.append('td')
    .classed('country-name', true)
    //  .classed('')  // This is where we put in the 3-digit ISO codes
    .text(function(d) {
      return d.country
    })
    .style('border-left', function(d, i) {
      if (metadata.order == -1) {
        return '30px solid ' + rampColor(1 - ((d[csvSelector] - tableMin) / (tableMax - tableMin)));
      } else {
        return '30px solid ' + rampColor(((d[csvSelector] - tableMin) / (tableMax - tableMin)));
      }


    });

  trow.append('td')
    .text(function(d) {
      return Math.floor(d[csvSelector] * 100);
    });

  d3.selectAll('.hid')
    .style('display', 'none');

  d3.select('#' + container).append('div')
    .classed('table-expand', true)
    .style('background-color', function() {
      return rampColor(0.2);
    })
    .append('p')
    .text('Expand to see more...');
}

function buildOverviewIndexTable(obj, container, cardIndex, elIndex) {
  // Set variable equal to data pulled in from CSV in regionsData[region].load();
  var metadata = regionsData[region].metadata;
  var order = metadata.order;
  var tableData = metadata.countryData;

  tableData = tableData.sort(function(x, y) {
    return d3.ascending(x['country'], y['country']); // ### This needs to be refactored as x[cardCol], y[cardCol]
  });

  var col = obj.col;

  var listLength = tableData.length;
  var tableArray = [];

  // tableData.forEach(function (row) {
  //   tableArray.push(row[csvSelector]);
  // });
  // var tableMax = d3.max(tableArray),
  //   tableMin = d3.min(tableArray);

  var table = d3.select('#' + container)
    .append('table')
    .attr('id', 'overview-list')
    .classed('ranked-list collapsed', true)
    .selectAll('tr')
    .data(tableData)
    .enter();

  var trow = table.append('tr')
    .attr('data-iso3', function(d) {
      return d.iso3
    })
    .attr('class', function(d, i) {
      if (i < 5) {
        return d.iso3
      } else {
        return d.iso3 + ' hid'
      };
    })
    .classed('country-' + col, true)
    .on('mouseenter', function() {
      var iso3 = d3.select(this).attr('data-iso3');
      pulse(iso3);
    })
    .on('mouseleave', unpulse);
  // ^ from https://bl.ocks.org/lhoworko/7753a11efc189a936371


  // trow.append('td')
  //   .text(function (d, i) { return i + 1;});

  trow.append('td')
    .classed('country-name', true)
    //  .classed('')  // This is where we put in the 3-digit ISO codes
    .text(function(d) {
      return d.country
    })
    .style('border-left', function(d, i) {
      return '25px solid ' + regionsData[d[col]].metadata.color;
      // if (metadata.order == -1) {
      //   return '30px solid ' + rampColor( 1 - ( ( d[csvSelector] - tableMin ) / ( tableMax - tableMin ) ) );
      // } else {
      //   return '30px solid ' + rampColor( ( ( d[csvSelector] - tableMin ) / ( tableMax - tableMin ) ) );
      // }


    });

  trow.append('td')
    .text(function(d) {
      return regionsData[d[col]].metadata.name;
    });

  d3.selectAll('.hid')
    .style('display', 'none');

  d3.select('#' + container).append('div')
    .classed('table-expand', true)
    .style('background-color', function() {
      return rampColor(0.2);
    })
    .append('p')
    .text('Expand to see more...');
}



var cardRadarData = [];

function buildRadar(obj, container, cardIndex, elIndex) {
  //console.log('obj', obj);
  //console.log(container);
  //console.log('card', cardIndex);
  //console.log('el', elIndex);
  var iso3 = regionsData[region].cards[cardIndex].map.highlights;

  // Lex - this is how you access the radar data


  if (region == 'overview') {
    cardRadarData = [
      // africa average data
      radarData.africa
    ];
    var color = regionsData[region].metadata.color;
  } else if (cardIndex == 0 && region != 'overview') {
    cardRadarData = [
      // >>>>>>> radar-lex
      // region average data
      radarData[region],
      // africa average data
      radarData.africa
    ];

    var color = [regionsData[region].metadata.color, '#0d3a58']

  } else {
    cardRadarData = [
      // region average data
      radarData[iso3],
      // africa average data
      radarData[region]
    ];

    color = ['pink', regionsData[region].metadata.color];
  }
  //<<<<<<< HEAD

  // console.log(cardRadarData);
  //=======
  //  console.log(cardRadarData, 'hi there you');


  {
    // setup a div with class called "radarChart" so that we can put chart to this div.
    var chartIndex = Math.random().toString(36).substring(5); // random chart index so that it won't add 2 charts into 1 div.
    d3.select('#card' + cardIndex).append('div')
      .classed('radarChart radarChart-' + chartIndex, true);
    // setup all need for chart
    var margin = {
        top: 50,
        right: 80,
        bottom: 50,
        left: 80
      },
      // We should get width of "card" div
      cardWidth = 470;
    width = Math.min(700, cardWidth - 10) - margin.left - margin.right,
      height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
    // var color = d3.scaleOrdinal() // setup color for lines
    //     .range(["#EDC951", "#CC333F", "#00A0B0"]);
    // console.log(color);
    var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 99, // max value in data
      wrapWidth: 8,
      levels: 4, // number of circles in chart
      dotRadius: 3,
      roundStrokes: true,
      color: color,
      formatValue: '.2', // value will be displayed as: xx
    };
    //Call function to draw the Radar chart
    // console.log('hiiiiiiii', chartIndex, cardRadarData, radarChartOptions);
    RadarChart(".radarChart-" + chartIndex, cardRadarData, radarChartOptions);

    var aspect = width / height,
      chart = d3.select('.radarChart');
    d3.select(window)
      .on("resize", function() {
        var targetWidth = chart.node().getBoundingClientRect().width;
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
      });
  }

  //console.log(cardRadarData);
  //>>>>>>> radar-lex

}


// Highlighting functions for table x map
function pulse(iso3) {
  var a;
  //console.log(d3.select(this).attr('data-iso3'));
  if (iso3) {
    a = '.' + iso3;
  } else {
    a = '.' + d3.select(this).attr('data-iso3');
  }

  d3.selectAll(a)
    .classed('pulse', true);
}

function pulseRegion(classed) {
  //console.log(classed);
  var md = regionsData[classed].metadata;
  d3.selectAll('.country.' + classed)
    .style('fill', function() {
      return d3.interpolateLab('white', regionsColor[md.index])(1);
    });
  d3.selectAll('.eez.' + classed)
    .style('fill', function() {
      return d3.interpolateLab('white', regionsColor[md.index])(0.2);
    });

}

function unpulseRegion(classed) {
  var md = regionsData[classed].metadata;

  d3.selectAll('.country.' + classed)
    .style('fill', function() {
      return d3.interpolateLab('white', regionsColor[md.index])(0.6);
    });

  d3.selectAll('.eez.' + classed)
    .style('stroke', regionsColor[md.index])
    .style('fill', null);
}

function unpulse() {
  d3.selectAll('.pulse')
    .classed('pulse', false);
}

// Map functions
function floor(k) {
  return Math.pow(2, Math.floor(Math.log(k) / Math.LN2));
}

function buildMap(json) { // ### Need some way to attach EEZ layer to specific cards for display ...
  return new Promise(function(resolve, reject) {
    d3.json(json, function(error, geoData) {
      if (error) {
        reject(error);
      }

      // First, EEZ:
      var eezg = mapg.append('g')
        .classed('card-layer card-eez-layer', true); // These become dynamic

      eezg.selectAll('.eez')
        .data(topojson.feature(geoData, geoData.objects.eez).features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', function(d) {
          var classlist = 'eez ';
          //      console.log(d.properties);
          if (d.properties.Pol_type === 'Disputed' && includedCountries.contains(d.properties.ISO_Ter1)) {
            classlist += ' disputed included';
          } else if (includedCountries.contains(d.properties.ISO_Ter1)) {
            classlist += d.properties.ISO_Ter1 + ' stableseas';
          } else {
            classlist += d.properties.ISO_Ter1;
          }
          //console.log(classlist);
          return classlist;
        })
        .attr('data-iso3', function(d) {

          if (d.properties.Pol_type === 'Disputed') {
            return null;
          } else {
            return d.properties.ISO_Ter1;
          }
        })
        .on('mouseenter', function(d) {
          //  console.log(d);
          if (d.properties.Pol_type != 'Disputed') {
            d3.select('.label.' + d.properties.ISO_Ter1)
              .classed('invisible', false);
          }
        })
        .on('mouseout', function(d) {
          d3.select('.label.' + d.properties.ISO_Ter1)
            .classed('invisible', true);
        })
        .on('click', function(d) {
          loadCountryCard(d3.select(this).attr('data-iso3'))
        });

      // Countries

      var countries = topojson.feature(geoData, geoData.objects.countries).features,
        neighbors = topojson.neighbors(geoData.objects.countries.geometries);

      var g = mapg.append('g')
        .attr('class', 'countries');

      var labels = mapg.append('g').attr('class', 'labels');

      g.selectAll(".country")
        .data(countries)
        .enter().insert("path", ".graticule")
        .attr('class', function(d) {
          //    if (d.properties.NAME == 'France') {console.log(d);}
          if ($.inArray(d.properties.ISO_A3_EH, includedCountries) != -1) {
            return d.properties.ISO_A3_EH + ' country in stableseas';
          } else if (d.properties.ISO_A3_EH == 'ATA') {
            return d.properties.ISO_A3_EH + ' country out invisible';

          } else {
            return d.properties.ISO_A3_EH + ' country out';

          }
        }) // This is where we could add a class to included countries...
        .attr("d", path)
        .attr('title', function(d) {
          return d.properties.SOVEREIGNT;
        })
        .attr('data-iso3', function(d) {
          return d.properties.ISO_A3_EH;
        })
        .on('mouseenter', function(d) {
          //console.log(d);
          d3.select('.label.' + d.properties.ISO_A3_EH)
            .classed('invisible', false);
          if ($.inArray(d.properties.ISO_A3_EH, includedCountries) != -1) {
            pulse(d.properties.ISO_A3_EH);
          }
        })
        .on('mouseout', function(d) {
          d3.select('.label.' + d.properties.ISO_A3_EH)
            .classed('invisible', true);
          unpulse(d.properties.ISO_A3_EH);

        })
        .on('click', function(d) {
          loadCountryCard(d3.select(this).attr('data-iso3'));
        });

      var wSaharaCoords = [
        [-8.67, 27.67],
        [-13.17, 27.67]
      ];
      g.append('line')
        .attr('x1', function() {
          return projection(wSaharaCoords[0])[0];
        })
        .attr('y1', function() {
          return projection(wSaharaCoords[0])[1];
        })
        .attr('x2', function() {
          return projection(wSaharaCoords[1])[0];
        })
        .attr('y2', function() {
          return projection(wSaharaCoords[1])[1];
        })
        .attr('stroke-dasharray', '2,2')
        .classed('w-sahara-line', true);

      labels.selectAll('.label')
        .data(countries).enter()
        .append('text')
        .attr("class", function(d) {
          //      console.log(includedCountries.contains(d.properties.ISO_A3_EH));
          if ($.inArray(d.properties.ISO_A3_EH, includedCountries) != -1) {
            return "invisible label " + d.properties.ISO_A3_EH;
          } else {
            return "invisible label out " + d.properties.ISO_A3_EH;
          }
        })
        .attr('x', function(d) {
          return path.centroid(d)[0]; // We can do custom label placement ... as a separate script ... ###
        })
        .attr('y', function(d) {
          return path.centroid(d)[1];
        })
        .style('text-anchor', 'middle')
        .text(function(d) {
          // console.log(d);
          if (d.properties.NAME != 'W. Sahara') {
            return d.properties.NAME;

          }
        });

      resolve('finished buildMap');
    });
  }) // end of Promise
}

// Interactivity functions
function loadCountryCard(iso3) {
  if (includedCountries.includes(iso3)) {
    var country = countryPaths[iso3];
    //console.log(countryPaths[iso3]);
    if (region == country.region) {
      switchCard(country.index);
    } else {
      var path = regionsData[country.region].metadata.path;
      var href = '../../regions/' + path + '#' + country.index;
      // console.log(href);
      window.location.href = href;
    }

  }


}


function switchCard(target) {
  // First, remove highlighted menu item

  d3.selectAll('.active')
    .attr('style', null) // what did this just break??
    .classed('active', false);

  d3.selectAll('.included')
    .transition()
    .attr('style', null)

  clearBGImg();

  var targetCard = '#card' + target;


  d3.selectAll('.card')
    .classed('invisible', true);

  d3.select('.card.active')
    .classed('active', false);

  // And the active geographic layers (fade out)
  d3.selectAll('.card-layer')
    .classed('invisible', true);

  // Now make target card visible
  d3.select(targetCard)
    .classed('invisible', false)
    .classed('active', true);

  window.scrollTo(0, 0); // do we want the toolbar to expand if they haven't hovered on it or scrolled up? Kinda no...

  var mapObj = regionsData[region].cards[target].map;

  d3.selectAll('.card-' + target + '-layer')
    .classed('invisible', false);

  // console.log('t', target);
  if (mapObj.switch) {
    mapObj.switch(target);
  } // ### This has to be on every card - no 'if' statement needed??

  // And turn on target card's data layers


  // And highlight the relevant countries:
  d3.selectAll('.on').classed('on', false);
  // ### Then loop through cards[i].map.highlights,

  var metadata = regionsData[region].metadata;
  var index = metadata.index;
  var regionalCountries = metadata.regionalCountries;

  regionalCountries.forEach(function(iso3) {
    d3.selectAll('.country.' + iso3)
      .style('fill', function() {
        return rampColor(0.5);
      })
      .style('stroke', function() {
        return rampColor(1);
      });

    d3.selectAll('.eez.' + iso3)
      .style('stroke', function() {
        return regionsColor[index];
      });
  });

  var highlights = regionsData[region].cards[target].map.highlights;
  if (highlights) {
    highlights.forEach(function(highlight, i) {
      d3.selectAll('.country.' + highlight)
        .classed('active', true)
        .transition().delay(10 * i)
        .style('fill', function() {
          return rampColor(1);
        })
        .style('stroke', 'grey');
      //.classed('on', true);

      d3.selectAll('.eez.' + highlight)
        .classed('active', true)
        .transition().delay(10 * i)
        .style('opacity', 0.4)
        .style('fill', function() {
          return rampColor(0.2);
        })
        .style('stroke', 'grey');


    })
  }

  d3.select('#card-' + target + '-menu')
    .classed('active', true)
    .style('background-color', function() {
      return rampColor(0.3);
    })
    .style('border-left', function() {
      return '5px solid ' + rampColor(1);
    });

  var cardMapObj = regionsData[region].cards[target].map;
  cardMapObj.extent ? zoom(cardMapObj.extent) : reset();

  activeCard = target;
}

// Arrow buttons to step up or down a card.
// Add keystroke event listener! : leftarrow (stepCardDown()), rightarrow (stepCardUp());
function stepCardUp() {
  switchCard(activeCard + 1);
}

function stepCardDown() {
  switchCard(activeCard - 1);
}


// Check if value is in array:
Array.prototype.contains = function(needle) {
  for (i in this) {
    if (this[i] == needle) return true;
  }
  return false;
}


function switchMainIndex(cardIndex) {
  if (!cardIndex) {
    cardIndex = 0;
  }

  var target = 'card-' + cardIndex + '-layer';
  var metadata = regionsData[region].metadata;
  var vals = metadata.countryData;
  var valsArr = []
  var csvSelector = 'regions' + metadata.index + 'c' + cardIndex;
  vals.forEach(function(d) {
    valsArr.push(d[csvSelector]); // again, must use regionsIndex and index
  })

  var max = d3.max(valsArr);
  var min = d3.min(valsArr);
  var range = max - min;

  vals.forEach(function(d, i) { // ### this is a misuse of D3! or is it?!
    var highlightedCountry = d3.selectAll('.eez.' + d.iso3);

    // highlightedCountry.classed('highlighted', true);
    highlightedCountry.transition()
      .delay(i * 10)
      .style('fill', function() {
        return rampColor((d[csvSelector] - min) / (max - min));
      });
  });

  d3.select('.' + target)
    .classed('invisible', false);
}

function switchMainIndexInverse(cardIndex) {
  var target = 'card-' + cardIndex + '-layer';
  var metadata = regionsData[region].metadata;
  var vals = metadata.countryData;
  var valsArr = []
  var csvSelector = 'regions' + metadata.index + 'c' + cardIndex;

  vals.forEach(function(d) {
    valsArr.push(d[csvSelector]);
  })

  var max = d3.max(valsArr);
  var min = d3.min(valsArr);
  var range = max - min;

  vals.forEach(function(d, i) { // ### this is a misuse of D3! or is it?!
    var highlightedCountry = d3.selectAll('.eez.' + d.iso3);

    highlightedCountry.classed('included', true);
    highlightedCountry.transition()
      .delay(i * 10)
      .style('fill', function() {
        return rampColor(1 - ((d[csvSelector] - min) / (max - min)));
      });
  });

  d3.select('.' + target)
    .classed('invisible', false);
}

function setBGImg(imagePath) {
  d3.select('.bgimg img')
    .attr('src', imagePath);

  d3.select('.bgimg')
    .classed('invisible', false);
}

function clearBGImg() {
  d3.select('.bgimg')
    .classed('invisible', true);
}

function zoom(coordinates) { // Where coordinates is 2D array of UR and LL coords. Work on variable names with this.

  var coords = [projection(coordinates[0]), projection(coordinates[1])];
  var bounds = coords,
    dx = bounds[1][0] - bounds[0][0],
    dy = bounds[1][1] - bounds[0][1],
    x = (bounds[0][0] + bounds[1][0]) / 2,
    y = (bounds[0][1] + bounds[1][1]) / 2,
    scale = .9 / Math.max(dx / width, dy / height),
    translate = [width / 2 - scale * x, height / 2 - scale * y];
  //  console.log(scale);
  //  console.log(translate);

  mapg.transition()
    .duration(750)
    .style("stroke-width", 1.5 / scale + "px")
    .attr("transform", "translate(" + translate + ")scale(" + scale + ")");

  d3.selectAll('.label')
    .style('font-size', scale);
}

function reset() {
  mapg.transition()
    .duration(750)
    .style("stroke-width", null)
    .attr("transform", "");

  d3.selectAll('.label')
    .style('font-size', '18px');
}


// Load functions

function init() {
  window.addEventListener('scroll', function(e) {
    var regions = d3.selectAll('.regions'),
      distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 30;

    if (distanceY > shrinkOn) {
      regions.selectAll('p')
        .classed('invisible', true);
      regions.classed('small', true);
      d3.select('#map-menu')
        .transition()
        .style('margin-top', '30px');
    } else {
      d3.select('#map-menu')
        .transition()
        .style('margin-top', '70px');

      regions.classed('small', false);
      regions.selectAll('p').classed('invisible', false);
    }
  });
}

window.onload = init();

// Landing screen
function openNav() {
  document.getElementById("landing-screen").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("landing-screen").style.height = "0%";
}

d3.select('nav').on('mouseenter', function() {
  var regions = d3.selectAll('.regions'),
    distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 30;

  d3.select('#map-menu')
    .transition()
    .style('margin-top', '70px');

  regions.selectAll('p')
    .classed('invisible', false);

  regions.classed('small', false);
});
