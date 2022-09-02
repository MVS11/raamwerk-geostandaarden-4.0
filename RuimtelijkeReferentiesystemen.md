# Ruimtelijke referentiesystemen

**Geo-informatie is direct gekoppeld aan locaties op aarde. De wijze waarop dat
gebeurt wordt beschreven in het ruimtelijk-referentie systeem. Er zijn meerdere
methoden om de locatie van objecten vast te leggen. De meest bekende methode is
coördinaat referentie waarbij coördinaten van een locatie worden vastgelegd. Een
alternatieve methode is het lineair referentie systeem. Maar ook kan de locatie
van een object indirect beschreven zijn. Er zijn meerdere standaard
referentiesystemen beschikbaar.**

## Overzicht standaarden voor coördinaatreferentiesystemen

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
Terrestrial Reference System 1989 (ETRS89). De dagelijkse praktijk is dat
coördinaten veelal worden gemeten en opgeslagen in andere coördinaat
referentiesystemen.

Binnen de Nederlandse kustlijnen wordt vrijwel altijd gebruik gemaakt van het RD
(Rijksdriehoeks) coördinaat referentiesysteem. Hiervoor geldt dat de gebruikte
horizontale datum Bessel 1841 is met de stereografische projectie. Als verticaal
datum wordt het NAP vlak gebruikt. Hoewel toepassing van andere coördinaat
referentiesystemen dan ETRS89 niet wordt uitgesloten is het belangrijk steeds
aan te geven welke coördinaat conversie en coördinaat transformatie noodzakelijk
zijn om van de in de GML gehanteerde coördinaten te komen tot coördinaten in het
ETRS89.

ISO 19111 geeft een uitgebreide beschrijving welke parameters in bovenstaande
gevallen uitgewisseld moeten worden. Hiervoor kunnen de zogenaamde EPSG codes
gebruikt worden. Veel gebruikte stelsels binnen Nederland en hun bijbehorende
EPSG code zijn:

Tabel 6 - EPSG codes coördinaat referentiesystemen voor Nederland

| **Stelsel**                       | **EPSG** **code** | **Coördinaat systeem**                                     |
|-----------------------------------|-------------------|------------------------------------------------------------|
| *Binnen de kustlijnen (onshore)*  |                   |                                                            |
| RD                                | 28992             | x, y in meters volgens RDNAPTransTM                        |
| RD + NAP                          | 7415              | x, y, H in meters tov NAP volgens RDNAPTransTM             |
| NAP                               | 5709              | H in meters tov NAP                                        |
| *Buiten de kustlijnen (offshore)* |                   |                                                            |
| ED50                              | 4230              | Lengte, breedte in °                                       |
| UTM 31N (ED50)                    | 23031             | E, N in meters met UTM projectie, zone 31                  |
| UTM 32N (ED50)                    | 23032             | E, N in meters met UTM projectie, zone 32                  |
| *Europees*                        |                   |                                                            |
| ETRS89 (2D)                       | 4258              | Lengte, breedte in °                                       |
| ETRS89 (3D)                       | 4937              | Lengte, breedte in °, hoogte in meters tov ellipsoide      |
| ETRS89 + EVRF2000                 | 7409              | Lengte, breedte in °, hoogte in meters tov EVRF2000 ( NAP) |
| LCC (ETRS89)                      | 3034              | E, N in meters met Lambert projectie                       |
| LAEA (ETRS89)                     | 3035              | E, N in meters met Equal Area projectie                    |
| TMzn (ETRS89)                     | xxxx              | E, N in meters met Transverse Mercator Projection          |
| *Wereldwijd en voor GPS gebruik*  |                   |                                                            |
| WGS84 (2D)                        | 4326[^1]          | Lengte, breedte in °                                       |
| WGS84 (3D)                        | 4979              | Lengte, breedte in °, hoogte in meters tov ellipsoide      |
| UTM 31N (WGS84)                   | 32631             | E, N in meters met UTM projectie, zone 31                  |
| UTM 32N (WGS84)                   | 32632             | E, N in meters met UTM projectie, zone 32                  |

[^1]: Dit is ook de EPSG code die Google gebruikt voor 2D, zie OGC KML, version
    2.2.0

### 

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
| EVRF2000 | hoogte in meters tov EVRF2000 ( NAP)          |
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

In de volgende tabel zijn de standaarden en specificaties benoemd, die van
toepassing zijn op de geo-referentie systemen voor Nederland.

Tabel 8 - Standaarden en specificaties met betrekking geo-referentiesystemen

| **Internationale standaarden/specificaties**                                            | **Europese profielen**                                                          | **Nederlandse profielen**                                                      |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| ISO 3166 Countries and subdivisions **[ISO3166]**                                       | INSPIRE specification on Geographical Grid Systems – Guidelines **[INSGGS]**    | Tabel 6 - EPSG codes coordinaat referentiesystemen voor Nederland **[HGCRS]**  |
| ISO 6709 Standard representation of geographic location by coordinates **[ISO 6709]**   | INSPIRE specification on Coordinate Reference Systems – Guidelines **[INSCRS]** | Tabel 7 - Veelgebruikte referentievlakken voor diepten / hoogten **[HGCRS]**   |
| ISO 19111 Geographic Information – Spatial Referencing by Coordinates **[ISO 19111]**   |                                                                                 |                                                                                |
| ISO/TS 19127 Geographic Information – Geodetic codes and parameters **[ISO/TS 19127]**  |                                                                                 |                                                                                |
| EPSG codes database & CRS Ids **[EPSG]**                                                |                                                                                 |                                                                                |

## 

## Kwaliteit en ruimtelijke referentiesystemen

[Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en
visualisatie van geo-informatie (2022)](https://docs.geostandaarden.nl/crs/crs/)

De handreiking gaat hierbij onder andere in op aandachtspunt bij:

\- CRS-keuze voor informatiemodellen zoals:

\- het meegeven van informatie over CRS-en in informatiemodellen en metadata;

\- eenduidige naamgeving van CRS-en;

\- eenduidige coördinaattransformaties;

\- ondersteuning van CRS-en in uitwisselingsformaten en software(bibliotheken).
