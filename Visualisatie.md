# Visualisatie

**Om de geo-informatie visueel te presenteren op een kaart worden er
visualisatieregels opgesteld. Denk hierbij bijvoorbeeld aan vlakvullingen,
lijnstijlen, symbologie, etc. Veel inhoudelijke domeinen hebben een standaard
visualisatie gedefinieerd voor hun informatiemodel. Deze visualisatieregels
moeten worden vastgelegd en kunnen dan bijvoorbeeld worden toegepast in een digitale kaart.**

## Overzicht geostandaarden visualisatie

Het standaardiseren van visualisatie (vlakvullingen, lijnstijlen, symbologie,
etc.) wordt steeds belangrijker. Veel inhoudelijke domeinen overwegen het
formeel vastleggen van een standaard visualisatie voor hun informatiemodel en
zoeken een geschikte standaard om dit vast te leggen. OGC biedt een 4-tal
specificaties, die geen van alle direct toepasbaar zijn:

-   Styled Layer Descriptor (SLD) en Symbology Encoding (SE): Deze standaarden
    beschrijven samen de specificatie voor het beschrijven van visualisaties
    voor OGC services.
-   Web Map Context Documents (XML syntax) geeft de mogelijkheid om de status
    van een WMS client (viewer) vast te leggen. Denk aan een combinatie van een
    aantal WMS services, (subset) van een legenda, layers (styles, formats),
    inzoom schaal, etc. Deze situatie kan op een client worden opgeslagen en
    worden uitgewisseld naar andere WMS clients zodat deze dezelfde Web Map
    Context hebben.

<aside class="issue">Er is vooralsnog bij de OGC geen opvolger voorzien van WMC als REST API. WMC handhaven of verwijderen?</aside>

-   3D visualisatie wordt steeds belangrijker. Hiervoor zijn verschillende
    desktop-applicaties beschikbaar die bijvoorbeeld CityGML, Google SketchUp en
    andere formaten veelal gecombineerd kunnen gebruiken voor visualisaties. OGC
    services hiervoor zijn nog niet als standaard(en) uitgekristalliseerd, hier
    wordt momenteel aan gewerkt. Intussen worden meestal de-facto standaarden
    toegepast. Interessante ontwikkelingen vanuit W3C zijn: XML3D en X3D die
    beiden als doel hebben 3D services op het web zonder plug-ins voor browsers
    (op basis van HTML5). Beiden komen vanuit W3C en het is nog onduidelijk
    welke richting het precies op gaat. KML en Collada zijn tevens prima
    geschikt voor 3D visualisatie.
- 3D Tiles is een goedgekeurde OGC community standaard voor het publiceren van 3D geo-informatie als tiles. Deze standaard bevat ook **3D Tiles Styles**, een manier om declaratieve visualisatiespecificaties te beschrijven die je op tilesets kunt toepassen.
-   Mapbox Styles is een de-facto standaard uit de markt voor webvisualisatie van geo-informatie. Het versiebeheer van deze specificatie is niet beschreven en het Raamwerk verwijst daarom niet naar een specifieke versie maar naar de meest actuele. 
-   OGC API Styles [nog in draft] is een nieuwe OGC standaard om stijlen en hun metadata (visualisatieregels) op te vragen, te bewerken en te valideren via een API. De stijlen zelf kunnen in SLD 1.0, SLD 1.1 of Mapbox Styles zijn uitgedrukt.

Diverse Europese en Nederlandse profielen voor visualisatie zijn beschikbaar in
de vorm van visualisatieregels voor dataproducten en informatiemodellen. Deze
zijn beschreven in SLD en SE voor de Europese profielen; in de hoofdstukken 11
van de INSPIRE data specificaties is portrayal gedefinieerd volgens SLD en SE.

In [Visualisatieregels van de BGT](#bgtvoorbeeld) is een voorbeeld opgenomen over hoe visualisatieregels In de
Nederlandse profielen toegepast zijn voor het dataproduct BGT/IMgeo.

Tabel 16 - Standaarden en specificaties voor visualisatie

| **Internationale standaarden/specificaties**                                                                | **Europese profielen**                              | **Nederlandse profielen**                  |
|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------------------------|
| ISO 19117 Geographic Information – Portrayal [[ISO19117]]                                                   | Visualisatieregels voor INSPIRE data specificaties. | Visualisatieregels voor informatiemodellen |
| OGC Styled Layer Descriptor Implementation Specification, version 1.1.0 [[SLD11]]                           |                                                     |                                            |
| OGC Symbology Encoding Implementation Specification, version 1.1.0 [[SE11]]                                 |                                                     |                                            |
| OGC Web Map Context Documents Implementation Specification, version 1.1 [[WMC11]]                           |                                                     |                                            |
| Corrigendum for Implementation Standard Web Map Context Documents – Corrigendum 1, version 1.1.0 [[WMCC11]] |                                                     |                                            |
| Mapbox Styles [[MBS]]                                                                                       |                                                     |                                            |
| OGC API Styles 1.0.0 **Draft** [[OGCAPISTYLES]]                                                                 |                                                     |                                            |
| 3D Tiles 1.0 [[3DTILES]] chapter 11, Declarative styling specification                                      |                                                     |                                            |

<aside class="issue">Moeten we X3D, Collada ook opnemen? </aside>

## 

## Kwaliteit en visualisatie

### Visualisatieregels data producten en informatiemodellen

Om data op een eenduidige manier te presenteren aan gebruikers, kunnen voor data
producten (en informatiemodellen) visualisatieregels gedefinieerd worden. Denk
hierbij bijvoorbeeld aan (kleuren van) vlakvullingen, lijnstijlen, symbologie,
etc. Deze visualisatieregels worden vastgelegd in handreikingen en
implementatiebestanden, en kunnen worden toegepast in een view API.

De visualisatie is geen onderdeel van een informatiemodel, maar is een apart
aspect. De gegevenscatalogus bevat de objectdefinities; de visualisatie van deze
objecten wordt buiten de gegevenscatalogus beschreven in visualisatieregels, die
zijn vastgelegd in de bijlagen. In elke visualisatieregel is ook vastgelegd van
welke selectie van objecten dit de visualisatie is. Alleen met betrekking tot de visualisatie van teksten wordt indien nodig in de gegevenscatalogus iets gezegd. 

<aside class="example" title="Visualisatieregels van de BGT" id="bgtvoorbeeld">

Afhankelijk van het type data product kunnen verschillende visualisatieregels
worden opgesteld. In een handreiking visualisatieregels worden de verschillende
visualisatieregels beschreven voor de presentaties van het data product, elk met
hun eigen doel en gebruik. Bijvoorbeeld voor het data product BGT\|IMGeo zijn
zeven presentaties beschikbaar. Deze zijn beschreven in de [Handreiking BGT\|IMGeo Visualisatieregels 2.3
(2018)](https://docs.geostandaarden.nl/bgt/def-hr-visualisatie-20181015/):


-   Standaardvisualisatie: een visualisatie voor het gebruik van de
    BGT/IMGeo-inhoud als hoofdthema, die aansluit bij de visualisatie van de
    Basisregistratie Topografie (BRT). In de standaardvisualisatie worden alleen
    de puntsymbolen voor CADO, verkeersdrempel en kering toegepast. Omwille van
    de visuele hiërarchie wordt met klem geadviseerd om de icoonvisualisatie van
    IMGeo puntobjecten NIET af te beelden in combinatie met de
    standaardvisualisatie.
-   Achtergrondvisualisatie: een visualisatie voor het gebruik van de
    BGT/IMGeo-inhoud als achtergrondkaart, die aansluit bij de visualisatie van
    de BRT-Achtergrondkaart zoals die is gerealiseerd voor Publieke
    Dienstverlening op de Kaart (PDOK).
-   Icoonvisualisatie: een visualisatie van de puntsymbolen voor het gebruik van
    de IMGeo-inhoud, die aansluit bij de hiervoor genoemde
    achtergrondvisualisatie. Omwille van de visuele hiërarchie wordt met klem
    geadviseerd om de icoonvisualisatie NIET af te beelden in combinatie met de
    standaardvisualisatie.
-   Lijngerichte visualisatie: een visualisatie voor het gebruik van de
    BGT/IMGeo-inhoud als hoofdthema, die aansluit bij de visualisatie van de
    Grootschalige Basiskaart Nederland (GBKN). Alle individuele objecten met
    dezelfde eigenschappen die aan elkaar grenzen worden aaneengesloten
    gevisualiseerd. De begrenzingen tussen de individuele objecten vallen
    hierbij weg om zo een rustiger kaartbeeld te realiseren. Hiervoor wordt wel
    een witte vlakvulling meegegeven aan de objecten.
-   Omtrekgerichte visualisatie: een visualisatie voor het gebruik van de
    BGT/IMGeo-inhoud als hoofdthema, die aansluit bij de visualisatie van de
    Grootschalige Basiskaart Nederland (GBKN). Alle individuele objecten worden
    apart gevisualiseerd. De begrenzingen tussen de individuele objecten blijven
    gehandhaafd.
-   Pastelvisualisatie: een visualisatie voor het gebruik van de
    BGT/IMGeo-inhoud als achtergrondkaart, die aansluit bij de behoefte van
    civiel-technische ingenieursbureaus en de kabels- en leidingenketen om
    informatie over haar bouwwerken, kunstwerken en infrastructuur af te beelden
    op de BGT/IMGeo-inhoud.
-   Planvisualisatie: een visualisatie voor het gebruik van de
    planinformatie-inhoud.

</aside>

### Kaartvisualisatie voor webapplicaties

Voor ontwikkelaars van geografische webapplicaties, is in 2010 de handreiking
webcartografie ontwikkeld. In de handreiking webcartografie [[HRWC]] vind je praktische
tips over hoe je geo-informatie - waar mogelijk - wel binnen de bedoelingen van
de toegankelijkheidseisen kunt aanbieden.

### Toegankelijkheid & geo-informatie

Per 1 juli 2018 geldt het [Tijdelijk besluit ‘Digitale toegankelijkheid
overheid’](https://zoek.officielebekendmakingen.nl/stb-2018-141.html). Websites
van de overheid moeten vanaf die datum verplicht voldoen aan de
toegankelijkheidseisen voor mensen met een beperking. Dit besluit stelt echter
in artikel 2.2.d expliciet (en volgt daarmee de [Europese
richtlijn](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016L2102&qid=1481290140258&from=en)
inzake de toegankelijkheid van de websites en mobiele applicaties van
overheidsinstanties) dat het besluit niet van toepassing is op onlinekaarten.
Enige uitzondering is dat in het geval van kaarten voor navigatietoepassingen de
essentiële informatie ook op andere wijze (lees: routebeschrijving in tekst)
toegankelijk gemaakt moet worden. In de handreikingen digitaal toegankelijke locatiedata [[HRTOEG]] en
de handreiking webcartografie vind je praktische tips over hoe je geo-informatie
\- waar mogelijk - wel binnen de bedoelingen van de toegankelijkheidseisen kunt
aanbieden.

[Handreiking digitaal toegankelijke locatiedata
(2021)](https://docs.geostandaarden.nl/visu/toeg/)

<aside class="note">Dit document is de webversie van oorspronkelijk in januari 2015 gepubliceerde PDF document. Het is gebaseerd op Web Content Accessibility Guidelines (WCAG) 2.0 [[WCAG20]]. Er zijn al enige tijd vernieuwde toegankelijkheidseisen en wetgeving over digitale toegankelijkheid, gebaseerd op WCAG versie 2.1 [[WCAG21]]. Dit document is hier nog niet op aangepast.</aside>