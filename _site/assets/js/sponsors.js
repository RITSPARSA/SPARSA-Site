//sponsors.js
// Handles the swapping of sponsor images on the homepage

$(document).ready(function(){
    var images = [
        ['assets/images/sponsorLogos/ritLarge.png', "http://rit.edu"],
        ['assets/images/sponsorLogos/symantec.png', "http://symantec.com" ],
        ['assets/images/sponsorLogos/att.png', "http://att.com" ],
        ['assets/images/sponsorLogos/datto.png', "http://datto.com" ],
        ['assets/images/sponsorLogos/UofR.png', "http://rochester.edu" ],
        ['assets/images/sponsorLogos/linkedin.png', "http://linkedin.com" ],
        ['assets/images/sponsorLogos/microsoft.png', "http://microsoft.com" ],
        ['assets/images/sponsorLogos/cisco.png', "http://cicso.com" ],
        ['assets/images/sponsorLogos/google.png', "http://google.com" ],
        ['assets/images/sponsorLogos/hp.png', "http://hp.com" ],
        ['assets/images/sponsorLogos/johnsonjohnson.png', "http://jnj.com" ],
        ['assets/images/sponsorLogos/lourdesindustries.png', "http://lourdesinc.com" ],
        ['assets/images/sponsorLogos/mooreresearchcenter.png', "http://mrci.com" ],
        ['assets/images/sponsorLogos/intergraph.png', "http://intergraph.com" ],
        ['assets/images/sponsorLogos/nortel.png', "http://nortel-us.com" ],
        ['assets/images/sponsorLogos/janestreet.png', "http://janestreet.com" ],
        ['assets/images/sponsorLogos/northropgrumman.png', "http://northropgrumman.com" ],
        ['assets/images/sponsorLogos/sonus.png', "http://sonus.net" ],
        ['assets/images/sponsorLogos/oracle.png', "http://oracle.com" ],
        ['assets/images/sponsorLogos/perforce.png', "http://perforce.com" ],
        ['assets/images/sponsorLogos/cadence.png', "http://cadence.com" ],
        ['assets/images/sponsorLogos/podi.png', "http://podi.com" ],
        ['assets/images/sponsorLogos/dupont.png', "http://dupont.com" ],
        ['assets/images/sponsorLogos/amdex.png', "http://amdexcorp.com" ],
        ['assets/images/sponsorLogos/ti.png', "http://ti.com" ],
        ['assets/images/sponsorLogos/xerox.png', "http://xerox.com" ],
        ['assets/images/sponsorLogos/citrix.png', "http://citrix.com" ],
        ['assets/images/sponsorLogos/fxcm.png', "http://fxcm.com" ],
        ['assets/images/sponsorLogos/pdhi.png', "http://pdhi.com" ],
        ['assets/images/sponsorLogos/datadog.png', "http://www.datadoghq.com/" ],
        ['assets/images/sponsorLogos/dmarcian.svg', "http://dmarcian.com/" ],
        ['assets/images/sponsorLogos/pritunl.png', "https://pritunl.com/" ],
        ['assets/images/sponsorLogos/sentry.svg', "https://sentry.io/" ],
    ];

    for(i=0;i<29;i++){
        var index = Math.floor(Math.random()*images.length)
        var item = images[index];
        $('#sponsor'+i).attr("src", item[0]);
        $('#sponsor'+i).parent("a").attr("href", item[1]);
        images.splice(index,1);

    }



});
