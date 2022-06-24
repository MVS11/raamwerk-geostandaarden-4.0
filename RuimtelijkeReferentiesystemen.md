# Ruimtelijke referentiesystemen

**Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat
gebeurt wordt beschreven in het ruimtelijk-referentie systeem. Er zijn meerdere
methoden om de locatie van objecten vast te leggen. De meest bekende methode is
coördinaat referentie waarbij coördinaten van een locatie worden vastgelegd. Een
alternatieve methode is het lineair referentie systeem. Maar ook kan de locatie
van een object indirect beschreven zijn. Er zijn meerdere standaard
referentiesystemen beschikbaar.**

## Wat is een ruimtelijk referentiesysteem?

Geo-informatie is direct gekoppeld aan locaties op aarde. Er zijn meerdere
methoden om de locatie van objecten vast te leggen. De meest bekende methode is
coördinaat referentie waarbij coördinaten van een locatie worden vastgelegd,
Daarnaast is er een methode die lineair referentie systeem heet.

### Meetkundige referentie: coördinaat referentiesystemen 

Coördinaatsystemen nemen de vorm van de aarde als uitgangspunt om de locaties
vast te leggen. Maar niets is zo ingewikkeld als meten op een bol met de
bedoeling dit in een plat vlak (kaart) weer te geven. Zeker niet als die bol
niet een exacte bol is.

**Ellipsoïdes: Het benaderen van de aardbol**

Bij een grove benadering is de aarde een bol. Maar de aarde is bij de polen
afgeplat, en een driedimensionale ellips, een zogenaamde ellipsoïde, is een
betere benadering. Maar ook dan is de vorm van het aardoppervlak, met al zijn
bergen en dalen, onmogelijk perfect wiskundig te beschrijven.

Een ellipsoïde voor wereldwijd gebruik heeft tot doel het gehele aardoppervlak
zo goed mogelijk te beschrijven. Er kunnen echter ook ellipsoïdes gedefinieerd
worden met een iets ander middelpunt, een iets andere oriëntatie en een iets
andere vorm, die zo goed mogelijk bij een bepaald gedeelte van het aardoppervlak
passen. Zo is voor Nederland is in de negentiende eeuw de Bessel-ellipsoïde
gedefinieerd. Een voorbeeld van een wereldwijde ellipsoïde is de
WGS84-ellipsoïde, van het GPS-systeem (satellietnavigatie).

Coördinaten op zo’n wiskundig lichaam (de benadering van de aardbol) zijn
geografische coördinaten. Een punt op aarde wordt daarbij beschreven door een
lengtegraad en een breedtegraad ten opzichte van de nulmeridiaan door Greenwich
respectievelijk de evenaar.

Het omrekenen tussen verschillende ellipsoïdes heet datumtransformatie.

**Kaartprojecties: De aarde plat slaan**

CRS-en nemen vaak de vorm van de aarde als uitgangspunt om locaties vast te
leggen. Maar het is ingewikkeld om de vorm van de aarde exact te beschrijven en
om de werkelijkheid van het gekromde aardoppervlak in een plat vlak (kaart) weer
te geven. Voor het weergeven van geo-informatie in een plat vlak worden
kaartprojecties gebruikt. De weergave in het platte vlak is niet mogelijk zonder
vervormingen, die afhankelijk zijn van de keuze van de kaartprojectie. Een
kaartprojectie kan hoekgetrouw, afstandsgetrouw en/of oppervlakte getrouw zijn,
maar niet alle drie eigenschappen tegelijk hebben. Een kaartprojectie bevat dus
altijd minimaal een vervorming in hoeken, afstanden of oppervlakten. Dat wil
zeggen dat gelijke hoeken, afstanden of oppervlakten in werkelijkheid op de
kaart niet allemaal gelijk aan elkaar zijn.

Hoe beeld je de bolle aarde af op een plat vlak zoals een kaart of een
beeldscherm? De bolle aarde volledig correct verbeelden in een platte kaart is
onmogelijk. Welke projectiemethode er ook gebruikt wordt, de werkelijkheid wordt
altijd geweld aangedaan. In een kaart kunnen niet tegelijkertijd met de
werkelijkheid overeenkomende maten voor hoeken, afstanden en oppervlaktes worden
gemeten. Hoe groter het gebied is dat wordt afgebeeld, hoe groter de
vervormingen in het kaartvlak zijn. Een bekend voorbeeld is de vroeger populaire
kaart en nog steeds bekende Mercator-projectie van de wereld. Daarbij wordt
Groenland als een enorm eiland afgebeeld, terwijl het in het echt qua
oppervlakte overeenkomt met het Arabische schiereiland. Maar de vorm van de
landen is wel correct.

In de loop der tijd zijn er diverse methodes bedacht om geografische coördinaten
(van de ellipsoïde) naar coördinaten in een plat vlak om te rekenen. Doel was
steeds om de vervormingen zo klein mogelijk te maken. Deze rekenkundige methodes
worden kaartprojecties genoemd. Welke kaartprojectie het meest geschikt is,
hangt af van de toepassing en van de grootte, de vorm en de positie op aarde van
het af te beelden gebied. Maar kaartprojecties zonder enige vervorming bestaan
niet.

De vraag welke projectie het meest geschikt is, hangt af van de beoogde
toepassing. Meer achtergrondinformatie is te vinden in 'Een kleine introductie
in GIS', onderdeel van de documentatie van het Open Source GIS programma QGIS,
o.a. dit stuk over kaartprojecties.

**Nederlandse kaartprojecties en ellipsoïdes**

In de Nederlandse situatie wordt veel gebruik gemaakt van het stelsel van de
Rijksdriehoeksmeting (RD) en de bijbehorende stereografische projecties. Het RD
is in principe alleen geschikt voor Nederland. De Universal Transverse Mercator
(UTM) kaartprojectie en coördinatensysteem is voor plaatsbepaling op de
Noordzee. Met de komst van INSPIRE en andere grensoverschrijdende samenwerkingen
krijgen we in Nederland ook te maken met andere kaartprojecties.

Daarnaast wordt er in Nederland gebruik gemaakt van WGS84 (World Geodetic System
1984). Voor precisie plaatsbepaling in Europa wordt het ETRS89 gebruikt. De
continenten van de aarde zijn niet star. A.g.v. de platentektoniek schuiven de
aardschollen over de aarde. Europa (en Azie) verschuift zo’n 2 centimeter per
jaar. Daardoor verschuiven in Europa de coördinaten van een bepaald punt op het
werkelijke aardoppervlak in het WGS84 systeem elk jaar. Bij het centimeter
nauwkeurig meten gebruikt men dan ook het Europese ETRS89, dat meebeweegt met de
Euraziatische plaat.

**Transformeren**

Een van de speciale eigenschappen van GIS- en CAD-systemen is het goed kunnen
omgaan met de verschillende kaartprojecties. Daarbij is het mogelijk
geo-informatie te transformeren van en naar verschillende kaartprojecties (via
de noodzakelijke datumtransformaties) in statische vorm of ‘on the fly’.

Het populaire gebruik van Google Maps en Bing Maps in mashup webapplicaties
maakt het verschil tussen kaartprojecties duidelijk. Google en Microsoft werken
globaal en hanteren niet de lokale gedetailleerde kaartprojecties. Daardoor zijn
er verschillen van enkele meters tussen de positie van objecten als huizen en
straten in Nederland en de officiële kaarten (geo-informatie bestanden) van
overheidsorganisaties.

Meetkundige referentie: Lineaire referentie

Bij een lineair referentie systeem (ISO 19148) wordt de afstand tot een bekend
punt in een netwerk vastgelegd.

Bijvoorbeeld een netwerk dat bestaat uit alle wegonderdelen. Elk wegonderdeel
heeft een unieke codering en een lengte. Van objecten die een deel van het
wegonderdeel betreft (bijvoorbeeld een weglaagvak) hoeft alleen maar het begin-,
eindpunt en de code van het betreffende wegonderdeel geadministreerd te worden.
Van puntobjecten, zoals verkeersborden, hoeft alleen maar het punt en de code
van het betreffende wegonderdeel vastgelegd te worden. Uiteraard worden van de
wegonderdelen wel de X- en Y-coördinaten van begin-, eindpunt en knikpunten
vastgelegd. Het is van belang te realiseren dat van objecten die gelokaliseerd
worden met een lineaire referentie niet de absolute positie wordt weergegeven.
De relatieve positie is bekend t.o.v. de wegonderdelen, maar niet de absolute
positie t.o.v. de aarde.

### Indirect ruimtelijke referenties

Naast het gebruik van een directe ruimtelijke referentie met coördinaten zoals
hiervoor beschreven kan de locatie van een object ook indirect beschreven zijn.
Voor het gebruik van indirecte ruimtelijke referenties of geografische
identificaties zijn veel mogelijkheden. De basisregistratie adressen (als
onderdeel van de BAG) zal hierin een belangrijke functie gaan vervullen. Immers
daarin zijn de adressen (straatnamen en huisnummers) opgenomen en hun locatie.
Daardoor kan er eenvoudig verwezen worden naar een BAG-adres of een BAG-straat
vanuit een ander informatieobject, om zodoende toch de locatie te weten van het
informatieobject.

Er bestaan ook een hele groep geografische namen die niet expliciet geduid zijn.
Zo kent de ‘Utrechte Heuvelrug’ geen formele begrenzing, maar weet iedereen wel
ongeveer waar het ligt. Die worden als toponiemen weergegeven op de
topografische kaarten van Nederland.

Bij het georefereren naar geografische identificaties, is de context weer van
belang. Als van een informatieobject de locatie indirect wordt vastgelegd moet
ook gekeken worden wat er gebeurt als de geometrie van de gegeorefereerde
geografische identificatie verandert. Zo kan een bodemvervuilinglocatie
vastgelegd worden op basis van het kadastrale perceel, maar dat kadastrale
perceel kan later gescheiden worden. De wijk de Berggierslanden in Meppel ligt
in een voormalig stuk van de gemeente Staphorst en provincie Overijssel.
Hierdoor zijn de algemene bepalingen van de gemeente Staphorst niet meer van
kracht op dit gebied. Maar verleende vergunningen voor bedrijfsactiviteiten
binnen dit gebied vallen nu wel onder de gemeente en woonplaats Meppel. Indien
bij het georefereren geen rekening gehouden is met het effect van dergelijke
wijzigingen, dan kan een verleende vergunning voor een bedrijfspand in principe
niet meer gevonden worden.

Geografische identificaties kunnen ook opgenomen worden bij de metadata van
ongestructureerde informatieobjecten zoals documenten. In de Dublin Core
standaard is daartoe dc.Spatial opgenomen.

## Gebruik van coördinaat-referentiesystemen

De standaarden gaan over de coördinaatreferentiesystemen. Deze standaarden zijn
hier van belang te benoemen vanwege hun relatie met de andere aspecten van de
geo-informatie infrastructuur. De belangrijkste CRS-en, die worden gebruikt in
geo-informatie en GIS, zijn opgenomen in de handreiking “Gebruik
coördinaatreferentiesystemen bij uitwisseling en visualisatie van
geo-informatie”.

De handreiking gaat hierbij onder andere in op aandachtspunt bij:

\- CRS-keuze voor informatiemodellen zoals:

\- het meegeven van informatie over CRS-en in informatiemodellen en metadata;

\- eenduidige naamgeving van CRS-en;

\- eenduidige coördinaattransformaties;

\- ondersteuning van CRS-en in uitwisselingsformaten en software(bibliotheken).

## Standaarden voor coördinaatreferentiesystemen

Geo-informatie is direct gekoppeld aan een locatie op aarde. De wijze waarop die
koppeling wordt gelegd, wordt beschreven in het coördinaatreferentiesysteem
(CRS) waarin coördinaten van een locatie worden vastgelegd. RD, ETRS89 en WGS84
zijn bekende voorbeelden van CRS-en.

Het is in GML verplicht iedere geometrie te voorzien van een verwijzing naar het
coördinaat referentiesysteem waarin de coördinaten van de geometrie beschreven
zijn. Coördinaat referentiesystemen moeten voldoen aan ISO 19111 en bestaan uit
een horizontaal en verticaal coördinaat referentiesysteem. Een coördinaat
referentiesysteem is op zijn beurt weer opgebouwd uit een datum (horizontaal /
verticaal) en een coördinaatsysteem.

Voor INSPIRE geldt dat coördinaten herleidbaar moeten zijn tot het European
Terrestrial Reference System 1989 (ETRS89)[^11]. De dagelijkse praktijk is dat
coördinaten veelal worden gemeten en opgeslagen in andere coördinaat
referentiesystemen.

[^11]: Geonovum is als procesbegeleider samen met de voor de Nederlandse
geodetische infrastructuur op land en zee verantwoordelijke overheidspartijen
(het Kadaster, Rijkswaterstaat en de Dienst der Hydrografie) een verkenning
gestart rond een mogelijke overstap van het RD-stelsel (Rijksdriehoeksmeting)
naar European Terrestrial Reference System 1989 (ETRS89).

Binnen de Nederlandse kustlijnen wordt vrijwel altijd gebruik gemaakt van het RD
(Rijksdriehoeks) coördinaat referentiesysteem. Hiervoor geldt dat de gebruikte
horizontale datum Bessel 1841 is met de stereografische projectie. Als verticaal
datum wordt het NAP vlak gebruikt. Hoewel toepassing van andere coördinaat
referentiesystemen dan ETRS89 niet wordt uitgesloten is het belangrijk steeds
aan te geven welke coördinaat conversie en coördinaat transformatie noodzakelijk
zijn om van de in de GML gehanteerde coördinaten te komen tot coördinaten in het
ETRS89.

ISO 19111 geeft een uitgebreide beschrijving welke parameters in bovenstaande
gevallen uitgewisseld moeten worden. Hiervoor kunnen de zogenaamde EPSG[^12]
codes gebruikt worden. Veel gebruikte stelsels binnen Nederland en hun
bijbehorende EPSG code zijn:

[^12]: <http://www.epsg.org/>

Tabel 6 - EPSG codes coordinaat referentiesystemen voor Nederland

| **Stelsel**                       | **EPSG**  **code** | **Coördinaat systeem**                                      |
|-----------------------------------|--------------------|-------------------------------------------------------------|
| *Binnen de kustlijnen (onshore)*  |                    |                                                             |
| RD                                | 28992              | x, y in meters volgens RDNAPTransTM                         |
| RD + NAP                          | 7415               | x, y, H in meters tov NAP volgens RDNAPTransTM              |
| NAP                               | 5709               | H in meters tov NAP                                         |
| *Buiten de kustlijnen (offshore)* |                    |                                                             |
| ED50                              | 4230               | Lengte, breedte in °                                        |
| UTM 31N (ED50)                    | 23031              | E, N in meters met UTM projectie, zone 31                   |
| UTM 32N (ED50)                    | 23032              | E, N in meters met UTM projectie, zone 32                   |
| *Europees*                        |                    |                                                             |
| ETRS89 (2D)                       | 4258               | Lengte, breedte in °                                        |
| ETRS89 (3D)                       | 4937               | Lengte, breedte in °, hoogte in meters tov ellipsoide       |
| ETRS89 + EVRF2000                 | 7409               | Lengte, breedte in °, hoogte in meters tov EVRF2000 (≈ NAP) |
| LCC (ETRS89)                      | 3034               | E, N in meters met Lambert projectie                        |
| LAEA (ETRS89)                     | 3035               | E, N in meters met Equal Area projectie                     |
| TMzn (ETRS89)                     | xxxx               | E, N in meters met Transverse Mercator Projection           |
| *Wereldwijd en voor GPS gebruik*  |                    |                                                             |
| WGS84 (2D)                        | 4326[^13]          | Lengte, breedte in °                                        |
| WGS84 (3D)                        | 4979               | Lengte, breedte in °, hoogte in meters tov ellipsoide       |
| UTM 31N (WGS84)                   | 32631              | E, N in meters met UTM projectie, zone 31                   |
| UTM 32N (WGS84)                   | 32632              | E, N in meters met UTM projectie, zone 32                   |

[^13]: Dit is ook de EPSG code die Google gebruikt voor 2D, zie OGC KML, version
2.2.0

### Relatie referentiesysteem – hoogte / dieptemetingen

Vaak worden geografische informatie systemen ontwikkeld als ‘2.5D’ systeem.
Hierbij wordt de geometrie in een tweedimensionaal (vlak) coördinaatsysteem
vastgelegd in bijvoorbeeld X en Y coördinaten en wordt diepte / hoogte
informatie los toegevoegd als eigenschap van een object.

Een andere vorm van beperkte 3D toepassing is die waarin 2D objecten
gerepresenteerd worden in een 3D ruimte. In dat geval kan een coördinaatsysteem
uit de EPSG lijst (zie hiervoor) worden geselecteerd dat 3 dimensies beschrijft
zoals bijvoorbeeld EPSG 7415 (RD + NAP).

Volledige 3D toepassingen onderscheiden ook volume of volvlaks objecten. Dit
heeft echter geen effect op gekozen 3D referentiesystemen.

Bij het uitwisselen van hoogte / diepten die als eigenschap (attribuut) worden
uitgewisseld zoals bijvoorbeeld metingen gelden andere oplossingen. Er kan
worden gekozen om bijvoorbeeld de diepte weer te geven ten opzichte van een
waterspiegel of sensor waarvan de coördinaten in 3 dimensies zijn bepaald. In
dit geval ontstaat dus een meetpunt of plaatswaarde met een 3 dimensionale
positie volgens het coördinaat referentiesysteem waaraan een specifieke
meetwaarde zoals bijvoorbeeld diepte is gekoppeld.

Tabel 7 - Veelgebruikte referentievlakken voor diepten / hoogten

| **Code** | **Omschrijving**                              |
|----------|-----------------------------------------------|
| EVRF2000 | hoogte in meters tov EVRF2000 (≈ NAP)         |
| OLA      | t.o.v. Overeengekomen Lage Afvoer             |
| ASTNMH   | t.o.v. astronomisch getij                     |
| BODM     | t.o.v. de bodem                               |
| LLWS1980 | t.o.v. Laag Laag Water Spring 1980.0          |
| LLWS1985 | t.o.v. Laag Laag Water Spring 1985.0          |
| LLWS1992 | t.o.v. Laag Laag Water Spring 1992.0          |
| MAAIVD   | t.o.v. maaiveld                               |
| HAT      | t.o.v. Highest Astronomical Tide              |
| LAT      | t.o.v. Lowest Astronomical Tide               |
| MSL      | t.o.v. Mean Sea Level                         |
| NAP      | t.o.v. Normaal Amsterdams Peil                |
| OLR1982  | t.o.v. Overeengekomen Lage Rivierstand 1982.0 |
| OLW1972  | t.o.v. Overeengekomen Lage Waterstand 1972.0  |
| OLW1982  | t.o.v. Overeengekomen Lage Waterstand 1982.0  |
| OLW1991  | t.o.v. Overeengekomen Lage Waterstand 1991.0  |
| WATSGL   | t.o.v. waterspiegel                           |

Met behulp van het coördinaat referentiesysteem kan worden aangegeven ten
opzichte van welk referentievlak de positie van de sensor / het meetpunt is
bepaald.

### Te gebruiken standaarden voor Nederland

In de volgende tabel zijn de standaarden en specificaties benoemd die van
toepassing zijn op de geo-referentie systemen voor Nederland.

Tabel 8 - Standaarden en specificaties met betrekking geo-referentie systemen

| **Internationale standaarden/specificaties**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Europese profielen**                                                                                       | **Nederlandse profielen**                                                                                                                                                                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ISO 3166 Countries and subdivisions ISO 6709 Standard representation of geographic location by coordinates ISO 19111 Geographic Information – Spatial Referencing by Coordinates (Coordinaten) ISO 19112 Geographic Information – Spatial Referencing by Geographic Identifiers (plaatsnamen en locatieaanduidingen) ISO/TS 19127 Geographic Information – Geodetic codes and parameters ISO 19148 Geographic Information - Linear Referencing EPSG database & CRS Ids Beschikbaar als online repository ([www.epsg-registry.org](http://www.epsg-registry.org)) and relationele database ([www.epsg.org](http://www.epsg.org)) | zie [www.ec-gis.org/inspire](http://www.ec-gis.org/inspire) onder data specifications voor de laatste versie | Tabel 6 - EPSG codes coordinaat referentiesystemen voor Nederland Tabel 7 - Veelgebruikte referentievlakken voor diepten / hoogten Grondslagen BAG ([www.kadaster.nl/bag](http://www.kadaster.nl/bag)) |

![](media/03dbe4bc67f3209f8f17c1deaef99947.jpg)

INSPIRE specification on Geographical Grid Systems – Guidelines

![](media/03dbe4bc67f3209f8f17c1deaef99947.jpg)

INSPIRE specification on Coordinate Reference Systems – Guidelines

## Kwaliteit en transformeren van coordinaat ….

Pm

## Verkenning

N.v.t.
