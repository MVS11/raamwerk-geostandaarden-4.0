# Informatiemodellen

**In dit hoofdstuk beschrijven we de standaarden die de basis vormen van de
modellen en beschrijvingen van geo-informatie. Dit is een benadering vanuit de
geo-informatie (de data) zelf.**

**De individuele informatie-objecten in een dataset worden beschreven met behulp
van een informatiemodel. De semantiek (betekenis) en de structuur van de
informatie moet bekend zijn zodat gebruikers de informatie optimaal kunnen
benutten. Een informatiemodel, ook wel dataspecificatie genoemd, zet schematisch
de afspraken over begrippen en definities van gegevens binnen een bepaald domein
op een rij. Dit vereenvoudigt de uitwisseling van informatie.**

## Wat is een informatiemodel?

ISO 19101 is de basale standaard waarin de concepten van geo-informatie zijn
vastgelegd. ISO 19101 hanteert de volgende definitie voor een informatiemodel
(conceptual model): een formele definitie van objecten, attributen, regels in
een bepaald domein. De kern van een informatiemodel is dat het een abstractie
(het model) vormt van de werkelijkheid zoals beschreven binnen een bepaald
domein. Semantiek, of betekenis van data in het model vormt de link met de
werkelijkheid.

In een informatie-infrastructuur gaat het primair om het betekenisvol
uitwisselen van data. Om dit gestructureerd te kunnen doen is het aanbrengen van
semantiek vereist. Door het aanbrengen van semantiek ontstaat ook behoefte aan
afstemming en harmonisatie. Informatiemodellen ondersteunen daarmee een proces
van semantische harmonisatie in Nederland en over de grenzen.

**Wat is semantiek?**

Semantiek is het vastleggen van de betekenis van de in een model onderscheiden
elementen of objecten. Het is duidelijk dat als gegevens van organisatie A naar
organisatie B gestuurd worden, deze gegevens alleen goed geïnterpreteerd kunnen
worden als definities van elementen bekend zijn. Neem een informatie-element
*weg* met een attribuut ‘*wegbreedte’*. Als organisatie A een weg definieert
inclusief fiets- en voetpaden en organisatie B alleen de rijstroken tot de weg
rekent, ontstaat er een verkeerd beeld bij uitwisseling als deze betekenis
informatie, de semantiek, niet bekend is. De semantiek moet daarom mee
uitgewisseld worden, of bekend zijn.

Semantiek omvat niet alleen de definitie van objecten maar ook het gedrag,
eigenschappen en relaties tussen objecten dragen bij aan de betekenis. Semantiek
is daarmee ook een onderdeel van een informatiemodel. Dat een pand altijd een
adres hoort te hebben, dat een kruispunt van wegen gevormd wordt door minstens
twee wegen, water bergaf stroomt, etc. zijn hier voorbeelden van.

**Behoefte aan semantiek**

Voor eenduidige uitwisselingen van geo-informatie, organisatie B begrijpt wat
organisatie A bedoelt, moet de semantiek van de gegevens bekend zijn. Wordt op
dit moment nog de meeste geo-informatie vrij direct gebruikt door de mens, in de
toekomst zal ook een groot deel van de data (eerst) door machines
geïnterpreteerd en gebruikt worden alvorens met de mens te communiceren. De mens
is (meestal) nog in staat om de verschillende begrippen juist te interpreteren
door impliciet gebruik te maken van enige context informatie (welk domein
betreft het, welke leveranciers). Voor de machine is het noodzakelijk deze
kennis expliciet te maken. Zeker onze netwerk (informatie)-maatschappij, met
Internet als belangrijk communicatiemedium, zorgt ervoor dat in toenemende mate
zelfverklarende informatie noodzakelijk is. Semantiek is daarom niet alleen van
belang voor het begrijpen van informatie door mensen maar ook steeds meer voor
machines.

**Wat is een informatiemodel?**

![](media/ac4c63a4344e9713066d393d6e612755.png)

### NEN3610 als basismodel 

Door stapeling van standaarden: NEN3610 piramide – domeinmodel wordt gemaakt
door aanscherping en uitbreiding van algemenere regels

Met het oog op semantische afstemming in Nederland en aansluiting op
internationale standaarden is het Basismodel Geo-informatie (NEN 3610)
ontwikkeld. Het Basismodel vormt het centrum van een stelsel van
geo-informatiemodellen. Als beeld gebruiken we hiervoor het piramidemodel
(Figuur 4).

![](media/28ba4c79344b89c7139968a2c43aed30.png)

*Figuur 4 - Relatie Basismodel Geo-informatie en domeinen*

In de piramide is er een gelaagdheid van generiek naar sectorspecifiek naar
organisatiespecifiek, terwijl dwars daarop de sectoren zijn onderscheiden. Het
Basismodel is in technische zin de toepassing van internationale standaarden in
de Nederlandse setting. Er zijn daarin regels vastgelegd over de methode van
modelleren en presenteren. Semantisch bevat het Basismodel de overlap tussen
meerdere of alle sectoren en vormt daarmee de gemeenschappelijke basis. Met het
Basismodel is het detailniveau te modelleren dat voor alle sectoren van belang
is. Binnen de sectormodellen is het detail uitgewerkt dat voor uitwisseling van
informatie binnen een sector van belang is.

In het onderste deel van de piramide, het hoogste detailniveau, is er alleen nog
maar sprake van uitwisseling binnen een organisatie. Standaardisatie is in dat
geval de verantwoordelijkheid van een organisatie zelf. Tussen de niveaus, van
organisatie naar sector en andersom, wordt ook informatie overgedragen. Ook in
deze uitwisseling is het van belang dat informatie eenduidig wordt overgebracht.

Het semantische domein van het Basismodel Geo-informatie wordt gevormd door het
gemeenschappelijke begrippenkader van de sectormodellen. Dit gemeenschappelijke
gebied is dynamisch en verandert onder invloed van maatschappelijke processen.
Dit is van invloed op de inhoud van de sectormodellen en op de inhoud van het
gezamenlijke Basismodel Geo-informatie. Sector- en Basismodel zullen daarom in
een voortdurend harmonisatieproces op elkaar afgestemd moeten worden. Een actief
beheer van het stelsel van informatiemodellen is daarom noodzakelijk.

Semantische harmonisatieprocessen vinden ook plaats op regionaal (cross border
projecten), Europees (INSPIRE, Eurogeographics) en mondiaal niveau (Land
Administration Domain Model, ISO 19152). Het Basismodel Geo-informatie zorgt
voor de aansluiting van nationale modellen op deze internationale
ontwikkelingen. De piramide steekt als het ware met de punt in de wolk van
internationale geo-standaarden. Internationale / Europese context

Naast de algemene internationale normen en specificaties wordt binnen Europa
hard gewerkt om te komen tot semantische afspraken. O.a gebeurt dat in het
INSPIRE-programma dat een Europese SDI neerlegt waarbij de aandacht vooral ligt
op harmonisatie van in totaal 34 thema’s. Het Drafting Team data specifications
and harmonisation stelt hier algemene standaarden/guidelines/specificaties voor
vast.

Binnen Nederland wordt door participatie van Nederland in INSPIRE geborgd dat
deze initiatieven naar de Nederlandse situatie vertaald worden (en andersom). De
NEN3610 aanpak die in Nederland al wordt gevolgd is in lijn met INSPIRE en biedt
de semantische invulling die van toepassing is op Nederland.

### Objectgericht

Het Basismodel Geo-informatie is objectgericht, dat wil zeggen dat het
informatie geeft over individueel te onderscheiden objecten binnen de beschreven
werkelijkheid. Het object is de eenheid van informatie. In het Basismodel wordt
hiervoor het begrip geo-object geïntroduceerd. De definitie hiervan is:

abstractie van een fenomeen in de werkelijkheid dat direct of indirect
geassocieerd is met een locatie relatief ten opzichte van de aarde (bijvoorbeeld
ten opzichte van het aardoppervlak)

De volgende drie termen zijn hierin belangrijk:

-   Fenomeen: Een beschrijfbaar verschijnsel.

-   Object: Een object is een abstractie van een fenomeen in de werkelijkheid.

-   Geo-object: Is een object dat direct of indirect geassocieerd is met een
    locatie relatief ten opzichte van de aarde.

Een geo-object heeft een directe associatie met een locatie door middel van
coördinaten en of een indirecte associatie door middel van een verwijzing naar
een adres, een postcode etc.

### Model beschrijving

Het Basismodel beschrijft de werkelijkheid aan de hand van een vijftiental
geo-object klassen. De hoofdklasse is de objectklasse GeoObject. In deze klasse
zijn de basiseigenschappen van een object met geo-informatie vastgelegd. Alle
andere objectklassen zijn hiervan afgeleid en erven deze basiseigenschappen. De
onderscheiden objectklassen zijn:

-   Geo-Object

-   Terrein

-   Water

-   Weg

-   Spoorbaan

-   Gebouw

-   Kunstwerk

-   Leiding

-   Inrichtingselement

-   Registratief gebied

-   Geografisch gebied

-   Functioneel gebied

-   Planologische gebied

### NEN3610 en de basisregistraties e-overheid

Naast het gebruik van de standaarden binnen het geo-domein is aansluiting op de
e-overheid van wezenlijk belang. Voor NEN3610 geldt dit vooral in relatie tot
het gebruik binnen het stelsel van basisregistraties.

In het stelsel van basisregistraties zijn meerdere standaarden van toepassing.
Voor de basisregistraties waar het aspect geo-informatie in voorkomt worden twee
standaarden voor de uitwisseling gehanteerd, namelijk StUF en NEN 3610. Door
verdere ontwikkeling van de basisregistraties als samenhangend stelsel wordt ook
de behoefte van harmonisatie van beide standaarden groter.

![](media/5a8ef423e0f1014eec3477dd1ea6fc0c.jpg)

In Figuur 5 zijn de verschillende standaarden aangeven en in rood zijn de
relaties aangeven waarbij geometrie wordt uitgewisseld. In Figuur 5 is dit in
detail zichtbaar gemaakt door de wereldbol te hanteren waar geometrie wordt
gebruikt.

Gerealiseerd:

-   BGR Basis Gebouwen Registratie (StUF, BAG)

-   BRA Basis Registratie Adressen (StUF, BAG)

-   BRK Basisregistratie Kadaster (NEN 3610, IMKAD)

-   BRT Basisregistratie Topografie (NEN 3610, TOP10NL)

In uitvoering:

-   BGT Basisregistratie Grootschalige Topografie (NEN 3610 en StUF, IMGeo)

-   BRO Nederlandse ondergrond (NEN 3610, IMBRO)

-   WOZ Basisregistratie WOZ (StUF, WOZ)

KING en Geonovum hebben besloten om deze standaarden families van StUF en NEN
3610 te harmoniseren. Hiervoor is een uitgebreid rapport gemaakt waar ongeveer
40 harmonisatievoorstellen zijn verwoord. Deze harmonisatievoorstellen richten
zich op 2 aspecten namelijk:

1.  Informatieharmonisatie; en

2.  Harmonisatie van berichtmodellen en functionaliteit.

Uitkomst is dat de gegevensuitwisseling van administratieve en geografische
informatie in gemengde vorm kan plaatsvinden en door services een combinatie van
beide kan worden aangeboden.

Voor deze harmonisatie zijn drie plateaus van harmonisatie benoemd die de
komende jaren worden gerealiseerd. De wijzigingen uit deze harmonisatie komen
terug in het normale releasebeleid van beide standaarden families. Dit rapport
is te downloaden[^3].

[^3]: Rapport is te downloaden via
<http://www.geonovum.nl/onderwerpen/berichtenverkeer/documenten/rapport-harmonisatie-stuf-en-nen-3610>

Voor de WOZ worden de uitkomsten van de harmonisatie momenteel doorgevoerd. Voor
de BGT is dit al het geval. Het resultaat is de StUF-Geo IMGeo
berichtenstandaard die wordt gebruikt in de uitwisseling van bronhouder tot en
met landelijk distributiepunt. Via de website van Geonovum blijft u op de hoogte
van de actuele ontwikkelingen.

### NEN3610 en de linked data pyramide

Door hergebruik van referenties: Linked Data piramide – domeinmodel wordt
gemaakt door hergebruik en verwijzing naar algemenere kaders

(<https://docs.geostandaarden.nl/nen3610/nldp/media/UML-OO-en-LD.png>)

![](media/3787c7dc956f284dd63a50675843d6c0.png)

## Hoe betekenis van mijn data inzichtelijk maken voor verschillende typen betrokkenen?

**Inzichtelijk voor de business: model van begrippen**

**Inzichtelijk voor raakvlak business en ICT: conceptueel informatiemodel**

**Inzichtelijk voor ICT-ers (implementatie-onafhankelijk): logisch model**

**Inzichtelijk voor ICT-ers en machines: fysiek / technisch model**

## Hoe vastlegging van informatiemodellen inzichtelijk maken?

### Overkoepelend voor mens, zowel business als ICT: in standaarden op docs.geostandaarden.nl

Pm

### Formele vastlegging voor mens en machine van begrippen: Conceptenbibliotheek

pm

### Formele vastlegging voor ICT-er en machine: technisch register

Pm

### Hoe leg ik betekenis zo eenduidig mogelijk vast?

Informatie is een motor onder het functioneren van de overheid in Nederland. In
het kader van onderlinge samenwerking, wisselen overheidsorganisaties veel
informatie uit. Daarbij is het van groot belang dat we hetzelfde verstaan onder
de gegevens die we gebruiken en dat we gemeenschappelijke afspraken maken over
hoe we gegevens beschrijven en uitwisselen. Om alle informatiemodellen in
Nederland nog beter op elkaar aan te laten sluiten is een metamodel ontwikkeld
voor informatiemodellering; het MIM. Met het metamodel voor informatiemodellen
(MIM) hebben we een gemeenschappelijk vertrekpunt opgesteld voor het maken van
informatiemodellen. Het model bevat duidelijke afspraken over het vastleggen van
gegevensspecificaties en biedt tegelijkertijd ruimte aan de verschillende
niveaus van modellering. Bijzonder aan het model is dat de afspraken over
meerdere bestuurslagen heen gaan.

MIM is bestemd voor informatiearchitecten, die informatiemodellen maken,
informatieanalisten die willen weten wat de betekenis en definitie van
informatieobjecten is en mensen die implementaties maken op basis van het model.
Voor het werken met dit model is kennis van informatiemodellering een vereiste.
Enige kennis van UML is een pré. MIM richt zich op registraties binnen het
overheidsdomein, maar is in bredere context inzetbaar.

Het metamodel voor informatiemodellen is te vinden in het document “[MIM -
Metamodel Informatie
Modellering](https://docs.geostandaarden.nl/mim/mim/#inleiding)”.

Ook voor het beheer van MIM zijn afspraken gemaakt in het document “[MIM
beheerplan](https://geonovum.github.io/MIM-Beheerplan/)”.

## Overzicht standaarden informatiemodellen voor Nederland

![](media/3588cad4a96dd2d828f6df2d35d0bd6c.png)

Tabel 10 - Standaarden en specificaties met betrekking tot geo-objecten
(features)

| **Internationale standaarden/specificaties**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Europese profielen**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | **Nederlandse profielen**                                                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| ISO 19101 Geographic Information – Reference model ISO/TS 19103 Geographic Information - Conceptual schema language ISO 19108 Geographic information -Temporal Schema ISO 19109 Geographic information - Rules for application schema ISO 19110 Geographic information - Methodology for feature cataloguing ISO 19118 Geographic Information – Encoding ISO 19131 Geographic Information - Data product specification ISO 19136 Geographic Information - Geography Markup Language (GML) Observations and Measurements - Part 1 - Observation Schema 1.0.0 Observations and Measurements - Part 2 - Sampling Features 1.0.0 OpenGIS City Geography Markup Language (CityGML) Encoding Standard, version 2.0 | [./media/image8.jpeg](./media/image8.jpeg) zie [www.ec-gis.org/inspire](http://www.ec-gis.org/inspire) onder data specifications voor de laatste versie INSPIRE: Generic Conceptual Model INSPIRE: Methodology for the development of data specifications INSPIRE: Guidelines for the encoding of spatial data INSPIRE Feature Concept Dictionary INSPIRE glossary De data specificaties voor de Annex I thema’s zijn beschikbaar (protected sites, transport networks, cadastral parcels, geographical names, geographical grid systems, coordinate reference systems, administrative units, addresses en hydrography) De data specificities voor Annex II en III zijn in draft beschikbaar[^4] | [./media/image8.jpeg](./media/image8.jpeg) De norm NEN3610:2011 Basismodel Geo-informatie. Termen, definities, relaties en  |

[^4]: <http://inspire.jrc.ec.europa.eu/index.cfm/pageid/2> oetsenrden toegevoegd
(aan 3.4)en?mentation Standard 1.0.0ijs vragen.uit 2001. tistellen? en. Hierbij
hanteer ik de einddatum di

![](media/efbeb6ab2cf90da2c00b333536bcf12c.png)

algemene regels voor de uitwisseling van informatie over aan het aardoppervlak
gerelateerde ruimtelijke objecten. NEN3610 is een toepassing van de set aan
conceptuele standaarden uit de ISO 19100 serie.

Profielen op NEN3610 zijn:

-   IMRO (planologie)

-   IMWA / (UM) Aquo (water)

-   IMKICH (cultuurhistorie)

-   IMKL (kabels en leidingen)

-   IMGeo (grootschalige topografie)

-   IMTOP (topografie: TOP10NL, TOP50NL, TOP100NL, TOP250NL en TOP1000NL)

-   IMWE (welstand, wordt onderdeel IMRO)

-   IMKAD (kadastrale percelen)

-   IMNAB (Natuurbeheer)

-   IMMetingen (Metingen)

-   IMLG (Landelijk gebied)

-   IMOOV (Openbare Orde en Veiligheid)

-   0101 (bodembeheer)

-   IMBRO (ondergrond), in ontwikkeling

-   IMSW (stedelijk water, riolering), in ontwikkeling

-   IMBOR (Beheer Openbare Ruimte), in ontwikkeling

## Kwaliteit van informatiemodellen 

Voor implementatie ondersteuning zijn de volgende hulpmiddelen ingericht:

-   Validator

>   Voor het valideren van GML databestanden aan standaarden voor sectorale
>   informatiemodellen is de generieke validator beschikbaar. Deze is te vinden
>   op <http://www.geonovum.nl/wegwijzer/validatie>

-   Conformiteittoetsing

>   Met een conformiteittoets kan men controleren of sectorale standaarden
>   technisch correct zijn toegepast. Voor de toetsen zie:
>   <http://www.geonovum.nl/wegwijzer/validatie>
