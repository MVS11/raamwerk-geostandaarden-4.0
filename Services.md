# Application Programming Interfaces (API’s)

**Voor het kunnen vinden, raadplegen, en downloaden van geo-informatie op het
Internet zijn Application Programming Interfaces (API’s) in gebruik. API’s
(Application Programming Interfaces) spelen een belangrijke rol op het Internet.
Een API dient als interface tussen verschillende softwareprogramma's. Het zorgt
ervoor dat een applicatie automatisch toegang krijgt tot bepaalde data en/of
functionaliteiten.**

## Transitie naar nieuwe generatie API's

<aside class="issue">Voorstel: paragraaf toevoegen waarin kort wordt ingegaan op de transitie van oude naar nieuwe generatie standaarden (xml-based services > REST API's). Hieronder staat al een tekstvoorstel dat nog bijgeschaaft kan worden.</aside>

De internationale standaarden voor API's komen veelal bij de OGC vandaan. Deze standaardenorganisatie bestaat al sinds 1994. De eerste generatie API standaarden, toen nog services genaamd, zijn gebaseerd op XML en SOAP. Deze standaarden zijn nog steeds geldig en in gebruik, maar worden gaandeweg vervangen door de nieuwe generatie, die is gebaseerd op algemene Web architectuur, i.e. REST. Het voordeel van deze nieuwe API's is dat ze geo-informatie onderdeel maken van het ecosysteem van het Web en zo voor een veel breder publiek toegankelijk.

OGC is voornemens de oude generatie services langzaam uit te faseren. De nieuwe API standaarden zijn in ontwikkeling en komen één voor één gereed. Op moment van schrijven zijn er al een paar goedgekeurd. Het is aan te raden om in nieuwe voorzieningen zoveel mogelijk de nieuwe API standaarden toe te passen - voor zover deze al gereed zijn. Bestaande voorzieningen die op de oude standaarden zijn gebaseerd kunnen nog langere tijd in de lucht gehouden worden. Nieuwe API's kunnen daarnaast gezet worden. Het is ook mogelijk om OGC API's beschikbaar te stellen als laag bovenop oude generatie services. Hiervoor is software beschikbaar.

In onderstaand overzicht zijn de nieuwe generatie API standaarden opgenomen die zijn goedgekeurd, maar ook diegenen die nog in ontwikkeling zijn. Dit is bij elke standaard duidelijk aangegeven.

## Overzicht geo-standaarden API’s

In het overzicht van geo-standaarden voor API’s zijn de onderwerpen
onderscheiden en in onderstaande tabellen opgenomen:

-   API standaarden voor het opvragen van webmaps: OGC WMS (tabel 1);
-   API standaarden voor het bevragen (downloaden) van vectordata: OGC WFS, OGC
    API – Features en ATOM (tabel 2);
-   API standaarden en specificaties voor het opvragen (downloaden) van
    rasterdata: OGC WCS (tabel 3);
-   API Standaarden en specificaties voor het opvragen (downloaden) van
    sensordata: OGC SOS, SensorThings API en Environmental Data Retrieval API (tabel 4);
-   API Standaarden en specificaties voor bevragen van metadata catalogi: OGC
    CSW en OGC API- Records (tabel 5);
-   API standaarden en specificaties voor opvragen van kaarttegels: OGC WMTS,
    OGC API Tiles (tabel 6);
-   API standaarden en specificaties voor linked data: GeoSPARQL Tabel 7).

*Tabel 1 - API standaarden en specificaties voor web mapping: WMS*

| **Internationale standaarden/specificaties**                                | **Europese profielen**                                                           | **Nederlandse profielen**                                                                                |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Web Map Server (WMS) Implementation Specification, version 1.3.0 [[WMS]]     | Technical Guidance for the implementation of Inspire View Service. [[INSTGVS]] | Nederlands profiel op ISO 19128 Geographic information — Web Map Server Interface versie 1.0 [[NLWMS]] |
| ISO 19128 Geographic Information – Web Map Service (WMS) [[iso-19128-2005]] | | |

## 

*Tabel 2 – API standaarden en specificaties voor vectordata: WFS, OGC API – Features en ATOM*

| **Internationale standaarden/specificaties**                                               | **Europese profielen**                                                                | **Nederlandse profielen**                                |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------|
| Web Feature Service (WFS) Implementation Specification, version 1.1.0 **[WFS]**            | Technical Guidance for the implementation of Inspire Download Services. **[INSTGDS]** | Nederlands WFS Profiel 1.0 op OGC WFS 1.1.0 **[NLWFS]**  |
| ISO 19142, Geographic information - Web Feature Service (= WFS version 2.0) **[ISO19142]** | OGC API – Features as an INSPIRE download service **[INSGPOAPIF]**                    |                                                          |
| OpenGIS Filter Encoding Implementation Specification, version 1.1 **[FE]**                 |                                                                                       |                                                          |
| ISO 19143, Geographic information – Filter encoding **[ISO19143]**                         |                                                                                       |                                                          |
| OGC API – Features Part 1, Part 2, Part 3 **[OAPIF1], [OAPIF2, [OAPIF3]**                  |                                                                                       |                                                          |
| ATOM **[ATOM]**                                                                            |                                                                                       |                                                          |

*Tabel 3 – API standaarden en specificaties voor rasterdata: WCS*

| **Internationale standaarden/specificaties**            | **Europese profielen**                                                                                                     | **Nederlandse profielen**           |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| OGC Web Coverage Service (WCS)*,* version 2.0 **[WCS]** | Technical Guidance for the implementation of Inspire Download Services using Web Coverage Services (WCS). **[INSTGDSWCS]** | Hetzelfde als het Europese profiel. |

## 

*Tabel 4 – API Standaarden en specificaties voor sensordata: SOS en SensorThings
API*

| **Internationale standaarden/specificaties**                            | **Europese profielen**                                                                                                                        | **Nederlandse profielen**            |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| OGC Sensor Observation Service Interface Standard version 2.0 **[SOS]** | Technical Guidance for implementing download services using the OGC Sensor Observation Service and ISO 19143 Filter Encoding **[INSTGDSSOS]** | Hetzelfde als het Europese profiel.  |
| OGC SensorThings API version 1.1 **[STA]**                              | OGC SensorThings API as an INSPIRE download service (good practice) **[INSGPSTA]**                                                            |                                      |

## 

*Tabel 5 – API Standaarden en specificaties voor metadata: CSW en OGC API-
Records*

| **Internationale standaarden/specificaties**                                                                          | **Europese profielen**                                                                  | **Nederlandse profielen**           |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------|
| OGC Catalogue Service for the Web (CSW) Implementation Specification, version 2.0.2 **[CSW]**                         | Technical Guidance for the implementation of Inspire Discovery Services. **[INSTGDiS]** | Hetzelfde als het Europese profiel. |
| CSW2 AP ISO, Catalogue Services Specification 2.0.2 - ISO Metadata Application Profile, Version 1.0.0, **[CSWISOAP]** |                                                                                         |                                     |
| OGC API - Records - Part 1: Core **[OAPREC]**                                                                         |                                                                                         |                                     |

*Tabel 6 – API standaarden en specificaties voor map tiles: Web Map Tile Service
(WMTS) en OGC API Tiles*

| **Internationale standaarden/specificaties**                          | **Europese profielen**                                                          | **Nederlandse profielen**            |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------|
| Web Map Tile Service Implementation Standard (WMTS) v1.0.0 **[WMTS]** | Technical Guidance for the implementation of Inspire View Service **[INSTGVS]** | Hetzelfde als het Europese profiel.  |
| OGC API Tiles **[OATIL]**                                             |                                                                                 |                                      |

Handreikingen voor implementatie:

-   [Praktijkrichtlijn Vector Tiling
    (2021)](https://docs.geostandaarden.nl/serv/vt/)
-   [Handreiking Best practices Vector Tiling
    (2021)](https://geonovum.github.io/vector-tiling-best-practices/)

Tabel 7 – API standaarden en specificaties voor linked data: GeoSPARQL

| **Internationale standaarden/specificaties**                                                                               | **Europese profielen** | **Nederlandse profielen** |
|----------------------------------------------------------------------------------------------------------------------------|------------------------|---------------------------|
| [GeoSPARQL - A Geographic Query Language for RDF Data](http://www.opengeospatial.org/standards/geosparql). **[GeoSPARQL]** |                        |                           |

## 

## Kwaliteit van API’s

**API Strategie overheid (beleid) en REST Design Rules (standaard PTOLU)**

De kwaliteit van services kan op verschillende manieren worden uitgedrukt. Om de
kwaliteit van een service uit te drukken zijn door Inspire de volgende
gedefinieerd.

-   Reliability

    Reliability verwijst naar de hoeveelheid gefaalde requests die een systeem
    mag teruggeven in een afgesproken tijd.

    Bijvoorbeeld 10 \* een gefaalde request voor een geo-service per week.

-   Beschikbaarheid

    Beschikbaarheid meet het percentage van beschikbaarheid (uptime). Het uptime
    percentage = uptime / (uptime + downtime).

    Bijvoorbeeld de geo-service dient in 98% van de requests beschikbaar te
    zijn.

-   Performance / response tijd

    De performance uitgedrukt in response tijd.

    Bijvoorbeeld een 800\*600 pixels image met 8bit kleuren dient een response
    tijd te hebben van maximaal 5 seconden.

Het is van belang om als service provider hier afspraken over te maken met de
afnemers.

Deze kwaliteit komt terug in de conformiteittoetsing uit 4.16.

Voor implementatie ondersteuning van services zijn de volgende hulpmiddelen
ingericht:

-   Validator

    Voor het valideren van WMS en WFS zijn validators beschikbaar. Deze zijn te
    vinden op <http://www.geonovum.nl/wegwijzer/validatie>

    Met de ETF validator kan de kwaliteit van de services zoals in 4.14 benoemd
    voor het grootste deel getoetst worden.

-   Conformiteittoetsing

    Met een conformiteittoets controleert u of standaarden technisch correct
    zijn toegepast. Voor de toetsen zie:
    <http://www.geonovum.nl/wegwijzer/validatie>

## Verkenning

n.v.t.
