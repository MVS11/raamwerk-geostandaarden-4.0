# Coordinaat referentiesystemen

**Geo-informatie is direct gekoppeld aan een locatie op aarde. De wijze waarop die
koppeling wordt gelegd, wordt beschreven met het coördinaatreferentiesysteem (CRS) 
waarin coördinaten van een locatie worden vastgelegd. Voor Nederland zijn meerdere cooordinaat 
referentiesystemen beschikbaar. RD, ETRS89 en WGS84 zijn bekende voorbeelden van CRS-en.**

## Overzicht standaarden voor coördinaatreferentiesystemen

Coördinaat referentiesystemen moeten voldoen aan ISO 19111 en bestaan uit
een horizontaal en verticaal coördinaat referentiesysteem. Een coördinaat
referentiesysteem is op zijn beurt weer opgebouwd uit een datum (horizontaal /
verticaal) en een coördinaatsysteem.

CRS-en die gebruikt worden in het Nederlandse domein van geo-informatie, 
kunnen ook worden ingedeeld naar hun geografische toepassingsgebied:

Een wereldwijd CRS is een CRS dat gemiddeld zo goed mogelijk bij de gehele aarde aansluit. Wereldwijde CRS-en zijn bedoeld voor kleinschalige of wereldwijde toepassingen, 
bijvoorbeeld wereldkaarten, satellietnavigatie en het beschrijven processen zoals zeestromingen en platentektoniek. Wereldwijde CRS-en zijn minder geschikt voor het nauwkeurig 
vastleggen van geo-informatie, doordat in een wereldwijd CRS de coördinaten tijdsafhankelijk zijn als gevolg van platentektoniek. Voorbeelden van wereldwijde CRS-en zijn het ITRS en
 WGS84.
 
Een continentaal of regionaal CRS is gekoppeld aan een tektonische plaat; hierdoor bewegen coördinaten in het CRS mee met de tektonische plaat. De Euraziatische plaat beweegt met 
enkele centimeters per jaar naar het noordoosten. Het Europese CRS ETRS89 is gekoppeld aan deze Euraziatische plaat en beweegt dus mee. In een regionaal CRS zoals ETRS89 zijn 
coördinaten stabiel, behalve bij lokale bodembeweging bijvoorbeeld in berggebieden of als gevolg van de post-glacial rebound in Scandinavië. Voor de coördinaten van een punt in 
Nederland is na 10 jaar het coördinaatverschil van hetzelfde punt in ETRS89 verwaarloosbaar, terwijl in een wereldwijd CRS zoals WGS84 het coördinaatverschil enkele decimeters is. 
In Nederland wordt tevens gebruik gemaaakt van de INSPIRE profielen. 

Een landelijk CRS is vaak een geprojecteerd CRS dat zo is gekozen dat de vervormingen in het platte vlak minimaal zijn. Nauwkeurige landelijke CRS-en dateren vaak uit de 20e eeuw, 
toen hoge nauwkeurigheid alleen op landelijk niveau kon worden gerealiseerd. Nauwkeurige wereldwijde en regionale CRS-en zijn mogelijk geworden door 
satellietplaatsbepalingstechnieken. Het verschil in oorsprong, schaal en oriëntatie van landelijke CRS-en kan honderden meters verschillen met de regionale en wereldwijde CRS-en. 
Het stelsel van de Rijksdriehoeksmeting (RD) is het landelijke CRS voor Nederland.

In de onderstaande tabel zijn de standaarden en specificaties benoemd, die van
toepassing zijn op de coordinaat referentie systemen voor Nederland.

Tabel ? - Standaarden en specificaties met betrekking coordinaat referentiesystemen

| **Internationale standaarden/specificaties**                                            | **Europese profielen**                                                          | **Nederlandse profielen**                                                      |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| ISO 3166 Countries and subdivisions **[[ISO3166]]**                                       | INSPIRE specification on Geographical Grid Systems – Guidelines **[INSGGS]**    | Tabel 6 - EPSG codes coordinaat referentiesystemen voor Nederland **[HGCRS]**  |
| ISO 6709 Standard representation of geographic location by coordinates **[[ISO 6709]]**   | INSPIRE specification on Coordinate Reference Systems – Guidelines **[INSCRS]** | Tabel 7 - Veelgebruikte referentievlakken voor diepten / hoogten **[HGCRS]**   |
| ISO 19111 Geographic Information – Spatial Referencing by Coordinates **[ISO 19111]**   |                                                                                 |                                                                                |
| ISO/TS 19127 Geographic Information – Geodetic codes and parameters **[ISO/TS 19127]**  |                                                                                 |                                                                                |
| EPSG codes database & CRS Ids **[EPSG]**                                                |                                                                                 |                                                                                |


De ISO 19111 standaard geeft een uitgebreide beschrijving welke parameters in bovenstaande
gevallen uitgewisseld moeten worden. Hiervoor kunnen de zogenaamde EPSG codes
gebruikt worden. De gebruikte stelsels binnen Nederland en hun bijbehorende
EPSG code zijn in onderstaande tabel opgenomen.

Tabel - EPSG codes coördinaat referentiesystemen voor Nederland

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

[^1]: Dit is ook de EPSG code die Google gebruikt voor 2D, zie OGC KML, version 2.2.0


## Kwaliteit en ruimtelijke referentiesystemen

In de [Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en
visualisatie van geo-informatie (2022)](https://docs.geostandaarden.nl/crs/crs/) worden achtergronden bij CRS-en en 
diverse aaandachtspunten besproken bij het omgaan met CRS-en, zoals: 

\- CRS-keuze voor informatiemodellen;

\- het meegeven van informatie over CRS-en in informatiemodellen en metadata;

\- eenduidige naamgeving van CRS-en;

\- eenduidige coördinaattransformaties;

\- ondersteuning van CRS-en in uitwisselingsformaten en software(bibliotheken).
