# Informatiemodellen

**Een informatiemodel, ook wel dataspecificatie genoemd, zet schematisch de
afspraken over begrippen en definities van gegevens binnen een bepaald domein op
een rij. Dit vereenvoudigt de uitwisseling en hergebruik van informatie. In dit hoofdstuk
beschrijven we de geostandaarden die de basis vormen van de modellen en
beschrijvingen van geo-informatie.**

## NEN 3610 - Stelsel van informatiemodellen

Informatiemodellen specificeren de informatieinhoud van dataproducten die middels de NGII worden gepubliceerd. Dataproducten zijn daarbij de datasets of dataservices die binnen de context van sectorale domeinen worden aangeboden. Het informatiemodel en de daarop gebaseerde data zijn altijd een representatie van de werkelijkheid. De data of de registraties daarvan hebben als doel die werkelijkheid beter te kunnen begrijpen te beheren en of te sturen. Het is voor de semantische - en technische interoperabiliteit van belang dat informatiemodellen wat betreft methode en inhoud op elkaar zijn afgestemd. Het NEN 3610 - Stelsel van informatiemodellen heeft dat als doel. NEN 3610:2022 is de basisstandaard voor het opstellen van informatiemodellen en geeft regels voor het eenduidig beschrijven, uitwisselen en op het web publiceren van geo-informatie binnen de NGII. NEN 3610 bekijkt deze infrastructuur vanuit het informatieperspectief door middel van informatiemodellen.

De focus ligt op semantische interoperabiliteit. Semantische interoperabiliteit wordt gerealiseerd door het harmoniseren van termen en definities gehanteerd door verschillende sectoren en door een gemeenschappelijke reeks van regels, concepten en modelleerpatronen voor het modelleren van de geografische werkelijkheid. NEN 3610 biedt een basis voor verdere uitwerking in sectorale modellen waardoor interoperabiliteit mogelijk wordt voor uitwisseling van geo-informatie binnen en tussen sectoren.

NEN 3610 positioneert informatiemodellen in het bredere kader van een open en toegankelijke semantische architectuur bestaande uit begrippenkaders, informatiemodellen, ontologieën en daarvoor ontworpen registers.

De gebruiker is de informatiearchitect en informatiemodelleur die georegistraties en bijbehorende informatiemodellen ontwerpen.

NEN 3610 is afgestemd met internationale standaarden en gebruikt als metamodel de de Nederlandse kader standaard voor
de meta-informatiemodelering gebruikt, de MetaMetamodel Informatiemodellering
kortweg MIM [MIM]. Tussen de NEN 2660:2022 - Regels voor informatiemodellering van de gebouwde omgeving en NEN 3610 is er afstemming. 

<figure id="Figuur_x">
<img src="media/NEN3610StandaardenPackageDiagram.png" alt="">
<figcaption>UML Packagediagram van relatie tussen nationale normen – internationale normen – NEN 3610 – sectorale modellen</figcaption>
</figure>

<figure id="Figuur_x">
<img src="media/Basisprogramma_Infomodel_NEN_3610_stelsel_logo_Groot.png" alt="">
<figcaption>Vorige figuur weergegeven in de 'NEN 3610 - piramide'</figcaption>
</figure>

## Overzicht standaarden informatiemodellen voor Nederland


NEN 3610 heeft zijn toepassing in een groeiende aantal sectorale informatiemodellen en omvat
circa 25 Nederlandse informatiemodellen, zoals voor de toepassingsdomeinen water
(IMWA), openbare ruimte (IMBOR, IMSW), milieu (IMGeluid, IMAER), natuurbeheer
(IMNA), verkeer en vervoer (IMWV,) kabels en leidingen (IMKL) en openbare orde
en veiligheid (IMOOV, IMDBK, IMEV). Ook maken enkele basisregistraties voor de
e-overheid deel uit in de NEN 3610 familie, zoals de basisregistraties adressen
en gebouwen (BAG/IMBAG), grootschalige topografie (BGT/IMGEO), topografie
(TOP10NL/IMTOP), kadastrale percelen, (BRK/IMKAD) en ondergrond (BRO/IMBRO). Elk van deze informatiemodellen fungeert als een informatiestandaard voor het uitwisseln van geo-informatie binnen die sector of domein.

<aside class="issue">Kan denk ik weg. Mogelijk wel iets opnemen over vergelijkbaarheid met INSPIRE methode voor dataspecs en 34 themas.</aside>

Ook de Europese standaarden – vnl. afkomstig uit de INSPIRE Richtlijn – zijn ook
grotendeels afgeleid en een toepassing van de ISO 19100 serie van semantische
standaarden. De Europese standaarden zijn geïmplementeerd aan de aan hand 34
inhoudelijke thema’s, waarvoor data specificaties zijn opgesteld. Nederlandse
datasets worden conform deze Europese data specificaties in de Europese
geo-informatie infrastructuur beschikbaar gesteld.

<aside class="issue">Kan denk ik weg. NEN 3610 heeft de nodige referenties</aside>

*Tabel 1 - Standaarden en specificaties met betrekking tot informatiemodellen*

| **Internationale standaarden/specificaties**                                                                                                     | **Europese profielen**                                                   | **Nederlandse profielen**                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|-------------------------------------------------------|
| ISO 19101 Geographic Information – Reference model **[ISO19101]**                                                                                | INSPIRE: Generic Conceptual Model **[INSGCM]**                           | MIM - Metamodel Informatie Modellering **[MIM]**      |
| ISO/TS 19103 Geographic Information - Conceptual schema language **[ISO19103]** ISO 19108 Geographic information -Temporal Schema **[ISO19108]** | INSPIRE: Methodology for the development of data specifications [INSMDS] | NEN3610:2011 Basismodel Geo-informatie. **[NEN3610]** |
| ISO 19109 Geographic information - Rules for application schema **[ISO19109]**                                                                   | INSPIRE: Guidelines for the encoding of spatial data **[INSGEN]**        | Nederlandse profielen op NEN3610.                     |
| ISO 19110 Geographic information - Methodology for feature cataloguing **[ISO19110]**                                                            | INSPIRE Feature Concept Dictionary **[INSFCD]**                          |                                                       |
| ISO 19118 Geographic Information – Encoding **[ISO19118]**                                                                                       | INSPIRE glossary **[INSG]**                                              |                                                       |
| ISO 19131 Geographic Information - Data product specification **[ISO19131]**                                                                     | INSPIRE Data specifications **[INSDS]**                                  |                                                       |
| ISO 19136 Geographic Information - Geography Markup Language (GML) **[ISO19136]**                                                                |                                                                          |                                                       |
| Observations and Measurements - Part 1 - Observation Schema 1.0.0 **[OaM1]**                                                                     |                                                                          |                                                       |
| Observations and Measurements - Part 2 - Sampling Features 1.0.0 **[OaM1]**                                                                      |                                                                          |                                                       |
| OpenGIS City Geography Markup Language (CityGML) Encoding Standard, version 2.0 **[CityGML]**                                                    |                                                                          |                                                       |

## 

## Semantische samenhang

pm

<aside class="issue">Overkoeplend semantische model, semantische registers, datafundament.....</aside>

## Kwaliteit van informatiemodellen


<aside class="issue">Noem NEN 3610 conformiteit, template, IMVertor</aside>

Voor ondersteuning van de toepassing en gebruik van informatiemodellen zijn de
volgende hulpmiddelen ingericht:

-   [Handreiking Geometrie in model en
    GML](https://docs.geostandaarden.nl/nen3610/gimeg/)

    Er is een handreiking [Geometrie in model en
    GML](https://docs.geostandaarden.nl/nen3610/gimeg/) beschikbaar. Deze
    handreiking beschrijft de toepassing van geometrie in informatiemodellering
    en de implementatie daarvan in GML. Het is daarmee een ondersteuning voor de
    toepassing van het basismodel geo-informatie (NEN3610) en GML. De
    handreiking geeft onder meer uitleg over welke geometrieën er zijn, Simple
    feature profielen en transformatieregels voor het kunnen genereren van GML
    uit UML.

-   Validator

    Voor het valideren van GML databestanden aan standaarden voor
    informatiemodellen is de generieke validator beschikbaar. Deze is te vinden
    op <http://www.geonovum.nl/wegwijzer/validatie>.

-   Conformiteittoetsing

    Met een conformiteittoets kan men controleren of standaarden technisch
    correct zijn toegepast. Voor de toetsen zie:
    <http://www.geonovum.nl/wegwijzer/validatie>.
