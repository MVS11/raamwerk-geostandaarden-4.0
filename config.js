//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20181015 - JvG - Initiele versie 
//-- Log . . . :  20191022 - GRK - Handreiking Archiveren ruimtelijke plannen v2.0      
//-------------------------------------------------------------------------------------

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)  
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++) 
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  } 
}

//-------------------------------------------------------------------------------------
var respecConfig = 
{
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  //specStatus: "GN-BASIS",             // Basis Document
  specStatus: "GN-WV",                  // Werk Versie
  //specStatus: "GN-CV",                // Consultatie Versie
  //specStatus: "GN-VV",                // Vaststellings Versie
  //specStatus: "GN-DEF",               // Definitieve Versie
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                   // Norm
  specType: "ST",                       // Standaard
  //specType: "IM",                   // Informatie Model
  //specType: "PR",                   // Praktijkrichtlijn
  //specType: "HR",                   // HandReiking
  //specType: "WA",                   // Werkafspraak
  //specType: "BD",                   // Beheer Documentatie
  //-- format is verplicht! -----------------------------------------------------------
  format: "markdown",                 // altijd "markdown" - JvG W3C aangepast, op 1 plek markdown aangeven    
  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2019-10-08",  	    // Format is "YYYY-MM-DD"
  //-- Repositorynaam op GitHub -------------------------------------------------------
  github: "https://github.com/geonovum//raamwerk-geostandaarden-4.0",
  //-- Repositorynaam/issues op GitHub ------------------------------------------------
  issueBase: "https://github.com/geonovum//raamwerk-geostandaarden-4.0/issues",
  //-- edDraftURI: de URI van de werkversie van het document
  edDraftURI: "https://github/geonovum//raamwerk-geostandaarden-4.0",
  //-- de namen van de Editor(s) ------------------------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors: 
 [
    {
      name:       "Jan van Gelder",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Michel Grothe",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
  ],
  //-- de namen van de Author(s) ------------------------------------------------------
  //-- vul in: per Author: name:, company:, companyURL: -------------------------------
  authors: 
  [
    {
      name:       "Michel Grothe",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
      name:       "Yvonne Verdonk ",
      company:    "Geonovum",
      companyURL: "https://www.geonovum.nl"
    }, 
    {
     name:       "Tanne Nouwens ",
     company:    "Geonovum",
     companyURL: "https://www.geonovum.nl"
   }, 
 ],
  //-- shortName is verplicht! (komt in de URL: kies logische naam) --------------------
  shortName: "rw",  	              // Wordt gebruikt in de document URL
  //-- pubDomain is verplicht! (komt in de URL: Activeer 1 van de volgende) ------------
  //pubDomain: "et", 	              // Energie transitie
  //pubDomain: "mim", 	            // Metamodel Informatie Modellering
  //pubDomain: "bor", 	            // Beheer Openbare Ruimte
  //pubDomain: "bro", 	            // Basisregistratie Ondergrond
  //pubDomain: "imgeo", 	          // IMGeo / BGT
  //pubDomain: "kl", 	              // Kabels en Leidingen
  //pubDomain: "liv", 	            // Landelijke Informatievoorziening Vastgoedgebruik
  //pubDomain: "md", 	              // Metadata
  pubDomain: "nen3610", 	        // Basismodel NEN3610
  //pubDomain: "oov", 	            // Openbare Orde en Veiligheid
  //pubDomain: "ro", 	              // Ruimtelijke Ordening
  //pubDomain: "serv", 	            // Services
  //pubDomain: "visu", 	            // Visualisatie
  //pubDomain: "wp", 	              // White Paper
  //-- license: voor de geldende gebruiksvoorwaarden
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  
  //-- localBiblio: lokale bibliografie, voor verwijzigingen
  //-- NB: kijk eesrt naar de beschikbare www.specref.org voor verwijziging 
  localBiblio: 
  {
    "SLD11":
      {
        title:      "OGC 05-078r4: Styled Layer Descriptor profile of the Web Map Service Implementation Specification, Version 1.1",
        href:       "http://portal.opengeospatial.org/files/?artifact_id=22364",
        status:     "Final version",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["M. Lupp"],
        date:       "2007-06-29",
    },
    "SE11":
      {
        title:      "OGC 05-077r4: OpenGIS Symbology Encoding Implementation Specification, version 1.1",
        href:       "https://portal.ogc.org/files/?artifact_id=16700",
        status:     "Final version",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["M. Müller"],
        date:       "2006-07-21",
    },
    "ISO19117":
      {
        title:      "Geographic Information - Portrayal (ISO 19117)",
        href:       "https://www.iso.org/standard/46226.html",
        status:     "Published",
        publisher:  "ISO",
        date:       "2012-12"
    },   
    "WMC11":
      {
        title:      "OpenGIS 05-005: Web Map Context Documents Implementation Specification, version 1.1",
        href:       "https://portal.ogc.org/files/?artifact_id=8618",
        status:     "Adopted specification",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "J. Sonnet",
        date:       "2005-01-19",
    },
    "WMCC11":
      {
        title:      "OpenGIS 08-050: Corrigendum for OpenGIS Implementation Standard Web Map Context Documents - Corrigendum 1",
        href:       "https://portal.ogc.org/files/?artifact_id=27286",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "T. Kralidis",
        date:       "2008-03-14",
    },
    "MBS":
      {
        title:      "Mapbox GL JS Style Specification",
        href:       "https://docs.mapbox.com/mapbox-gl-js/style-spec/",
        status:     "Unofficial",
        publisher:  "Mapbox",
    },
    "OGCAPISTYLES":
      {
        title:      "OGC 20-009: OGC API Styles",
        href:       "http://docs.opengeospatial.org/DRAFTS/20-009.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "C. Portele",
    },
    "3DTILES":
      {
        title:      "3D Tiles Specification 1.0",
        href:       "http://docs.opengeospatial.org/cs/18-053r2/18-053r2.html",
        status:     "Approved for pubic release",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Patrick Cozzi", "Sean Lilley", "Gabby Getz"],
        date:       "2019-01-31",
    },
    "HRTOEG":
      {
        title:      "Handreiking digitaal toegankelijk locatiedata",
        href:       "https://docs.geostandaarden.nl/visu/toeg/",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        editors:    ["Edward Mac Gillavry", "Sjors Slaats", "Theo OVerduin", "Thijs Brentjens", "Victor Zuydweg"],
        date:       "2021-08-02",
    },
    "HRWC":
      {
        title:      "Handreiking webcartografie",
        href:       "https://www.geonovum.nl/uploads/standards/downloads/handreiking%20webcartografie%201.0.1_0.pdf",
        status:     "Definitief",
        publisher:  "Geonovum",
        date:       "2010-11-18",
    },
    "INSTGVS":
      {
        title:      "Technical Guidance for the implementation of Inspire View Service",
        href:       "https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-view-services-1",
        status:     "Definitief",
        publisher:  "IOC TF",
        date:       "2022-08-01",
    },
    "NLWMS":
      {
        title:      "Nederlands profiel op ISO 19128 Geographic information — Web Map Server Interface",
        href:       "https://www.geonovum.nl/uploads/documents/nederlands_profiel_op_iso_19128_wms_1.3_-_versie_1.0.pdf",
        status:     "Vastgesteld",
        publisher:  "Geonovum",
        date:       "2015-04-24",
    }, 
    "OGCAPIMAPS":
      {
        title:      "OGC 20-058: OGC API - Maps - Part 1: Core, Version 0.1.0",
        href:       "http://docs.ogc.org/DRAFTS/20-058.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "Joan Masó",
        date:       "2022-06-06",
    },
    "WFS11":
      {
        title:      "Web Feature Service Implementation Specification with Corrigendum, Version 1.1.3",
        href:       "http://docs.opengeospatial.org/is/04-094r1/04-094r1.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "Panagiotis A. Vretanos",
        date:       "2016-10-26",
    },
    "INSTGDS":
      {
        title:      "Technical Guidance for the implementation of Inspire Download Services",
        href:       "https://inspire.ec.europa.eu/documents/technical-guidance-implementation-inspire-download-services",
        status:     "Approved",
        publisher:  "IOC TF",
        //editors:    "",
        date:       "2013-08-09",
    },
    "NLWFS":
      {
        title:      "Nederlands profiel op ISO 19142 Geographic information — Web Feature Service",
        href:       "https://www.geonovum.nl/geo-standaarden/services/nederlands-wfs-profiel-11-op-iso-19142-voor-web-feature-services-20, Versie 1.1",
        status:     "Definitief",
        publisher:  "Geonovum",
        //editors:    "",
        date:       "2015-04-24",
    },
    "INSGPOAPIF":
      {
        title:      "OGC API - Features as an INSPIRE download service",
        href:       "https://inspire.ec.europa.eu/good-practice/ogc-api-–-features-inspire-download-service",
        status:     "Endorsed Good Practice",
        publisher:  "IOC TF",
        //editors:    "",
        //date:       "2015-04-24",
    },
    "FE20":
      {
        title:      "OGC 09-026r2: OGC Filter Encoding 2.0 Encoding Standard - With Corrigendum, Version 2.0.3",
        href:       "http://docs.opengeospatial.org/is/09-026r2/09-026r2.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    "Panagiotis (Peter) A. Vretanos",
        date:       "2014-08-18",
    },
    "OAPIF1":
      {
        title:      "OGC 17-069r4: OGC API - Features - Part 1: Core corrigendum, Version 1.0.1",
        href:       "https://docs.opengeospatial.org/is/17-069r4/17-069r4.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele","Charles Heazel"],
        date:       "2022-05-11",
    },
    "OAPIF2":
      {
        title:      "OGC 18-058: OGC API - Features - Part 2: Coordinate Reference Systems by Reference, Version 1.0",
        href:       "https://docs.opengeospatial.org/is/18-058r1/18-058r1.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele"],
        date:       "2020-11-02",
    },
    "OAPIF3":
      {
        title:      "OGC 19-079r1: OGC API - Features - Part 3: Filtering, Version 1.0.0-rc1",
        href:       "http://docs.ogc.org/DRAFTS/19-079r1.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele"],
        //date:       "2022-05-11",
    },
    "OAPIF4":
      {
        title:      "OGC 20-002: OGC API - Features - Part 4: Create, Replace, Update and Delete, Version 1.0.0 snapshot (editor's draft",
        href:       "http://docs.ogc.org/DRAFTS/20-002.html",
        status:     "Draft",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Panagiotis (Peter) A. Vretanos","Clemens Portele"],
        //date:       "2022-05-11",
    },
    "adr-mod-geo":
      {
        title:      "API Design rules Module: Geospatial",
        href:       "https://docs.geostandaarden.nl/api/API-Strategie-mod-geo/",
        status:     "Consultatieversie",
        publisher:  "Geonovum",
        editors:    ["Linda van den Brink"],
        authors:    ["Pieter Bresters", "Linda van den Brink", "Paul van Genuchten", "George Mathijssen", "Mark Strijker"],
        date:       "2022-09-30",
    },
  },
  postProcess:[custGHPG],   //-- Optioneel voor een multi document repository

  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2018-09-18",  	    // Format is "YYY-MM-DD"
  //previousMaturity: "CV",                   // kies 1 van deze 2 regels  	  
  //previousMaturity: "VV",  	                // kies 1 van deze 2 regels

  //-- Optionele parameters:
  //emailComments: "mim@geonovum.nl",         // reactie mailadres, alleen bij CV!
  //subtitle: "iets",                         // Subtitel van het document
  //maxTocLevel: 3,                           // Aantal niveau's ToC, default is 0
  //-- LOGO: Hier kan je een ander logo opgeven indien nodig
  //logos: [{
  //  src: "https://tools.geostandaarden.nl/respec/style/logos/OmgevingswetLogo.svg",
  //  alt: "Standaarden Omgevingswet",
  //  id: "TopLogo",
  //  height: 67,
  //  width: 300,
  //  url: "https://www.geonovum.nl/geo-standaarden/omgevingswet/STOPTPOD"
  // }],
};
