# Visualisatie

Om de geo-informatie visueel te presenteren op een kaart worden er
visualisatieregels opgesteld. Denk hierbij bijvoorbeeld aan vlakvullingen,
lijnstijlen, symbologie, etc. Veel inhoudelijke domeinen hebben een standaard
visualisatie gedefinieerd voor hun informatiemodel. Deze visualisatieregels
moeten worden vastgelegd en kunnen dan bijvoorbeeld worden toegepast in een view
service.

## Wat is visualisatie?

pm

## Overzicht visualisatie standaarden

Het standaardiseren van visualisatie (vlakvullingen, lijnstijlen, symbologie,
etc.) wordt steeds belangrijker. Veel inhoudelijke domeinen overwegen het
formeel vastleggen van een standaard visualisatie voor hun informatiemodel en
zoeken een geschikte standaard om dit vast te leggen. OGC biedt een 4-tal
specificities die geen van alle direct toepasbaar zijn.

-   Styled Layer Descriptor (SLD) en Symbology Encoding (SE): Deze standaarden
    beschrijven samen de specificatie voor het beschrijven van visualisaties
    voor OGC services.

-   Web Map Context Documents (XML syntax) geeft de mogelijkheid om de status
    van een WMS client (viewer) vast te leggen. Denk aan een combinatie van een
    aantal WMS services, (subset) van een leganda, layers (styles, formats),
    inzoom schaal, etc. Deze situatie kan op een client worden opgeslagen en
    worden uitgewisseld naar andere WMS clients zodat deze dezelfde Web Map
    Context hebben.

-   KML is een XML toepassing die zich richt op geo-infomatie visualisatie,
    inclusief annotatie van kaarten en images. OGC en Google zijn overeengekomen
    om KML met GML te harmoniseren, hetzelfde geldt voor KML en SLD/SE.

-   3D visualisatie wordt steeds belangrijker. Hiervoor zijn verschillende
    desktop-applicaties beschikbaar die bijvoorbeeld CityGML, Google SketchUp en
    andere formaten veelal gecombineerd kunnen gebruiken voor visualisaties. OGC
    services hiervoor zijn nog niet als standaard(en) uitgekristalliseerd, hier
    wordt momenteel aan gewerkt. Intussen worden meestal de-facto standaarden
    toegepast. Interessante ontwikkelingen vanuit W3C zijn: XML3D[^5] en X3D[^6]
    die beiden als doel hebben 3D services op het web zonder plug-ins voor
    browsers (op basis van HTML5). Beiden komen vanuit W3C en het is nog
    onduidelijk welke richting het precies op gaat.

    [^5]: http://www.xml3d.org/

    [^6]: http://www.web3d.org/

>   KML en Collade zijn tevens prima geschikt voor 3D visualisatie.

In de onderstaande uitwerking wordt ingegaan op SLD en SE.

Styled Layer Descriptor (SLD) is een extensie op de WMS-standaard. SLD verzorgt
gecontroleerde cartografie in een WMS request. Symbology Encoding (SE) bevat
mechanismen voor legenda’s en symbolen. De standaard is vrij generiek en
daardoor deels afhankelijk van de software/provider.

Figuur 13 - SLD en SE

De layer en style kunnen van te voren gedefinieerd zijn (respectievelijk
NamedLayer en NamedStyle) of zijn door de gebruiker te definiëren
(respectievelijk UserLayer of UserStyle). Hierdoor kan de kaart vanaf de server
bestuurd worden of heeft de gebruiker cartografische mogelijkheden. De
FeatureTypeStyle geeft de mogelijkheid om de style te definiëren (bijvoorbeeld
stippellijn). Met rules kunnen objecten gegroepeerd worden of zijn bijvoorbeeld
meerdere presentaties van een object(groep) mogelijk. De filter bevat een query.
Symbology Encoding (SE) bevat de mogelijkheid om met symbolizers de
cartografische presentatie van een object(groep) te definiëren. Vijf typen
symbolisers worden onderscheiden, namelijk: PointSymbolizer, LineSymbolizer,
PolygonSymbolizer, TextSymbolizer en RasterSymbolizer.

Tabel 16 - Standaarden en specificaties voor visualisatie

| **Internationale standaarden/specificaties**                                                                                                                                                                                                                                                                                                                                               | **Europese profielen**                                                                                                                                                                                                                               | **Nederlandse profielen**                                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| ISO 19117 Geographic Information – Portrayal OpenGIS Styled Layer Descriptor Implementation Specification, version 1.1.0 OpenGIS Symbology Encoding Implementation Specification, version 1.1.0 Implementation Specification, Web Map Context Documents version 1.1 Corrigendum for OpenGIS Implementation Standard Web Map Context Documents – Corrigendum 1, version 1.1.0 OGC KML 2.2.0 | [./media/image8.jpeg](./media/image8.jpeg) zie [www.ec-gis.org/inspire](http://www.ec-gis.org/inspire) onder data specifications voor de laatste versie In de hoofdstukken 11 van de data specificaties is portrayal gedefinieerd volgens SLD en SE. | Handreiking webcartografie deel 1, 2 & 3: <http://www.geonovum.nl/onderwerpen/visualisatie?tab=standaarden> |

## Mijn data in kaartvorm eenduidig interpreteerbaar maken

pm

## Handreiking webcartografie?

## Toegankelijkheid & geo
