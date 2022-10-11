# Uitwisselformaten

**Op basis van de informatiemodellen worden uitwisselformaten gedefinieerd. Waar
een informatiemodel de semantiek bepaalt, beschrijft een uitwisselformaat de
vorm of syntax waarin geo-informatie op basis van een bepaald informatiemodel
wordt uitgewisseld. Er zijn verschillende manieren om geo-informatie te
representeren en uit te wisselen.**

## Overzicht geostandaarden uitwisselformaten

### Vectordata uitwisselstandaarden

De vectorrepresentatie wordt gebruikt voor het vastleggen van discrete fenomenen
waarin de geometrie van een object wordt beschreven met behulp van primitieven
zoals: punt, lijn en vlak (2D) of met volvlakken (3D). De geometrische
basistypes voor vectorgegevens worden gedefinieerd in ISO 19107 middels een
geometrie model. In deze standaard worden ook primitieven gedefinieerd voor
topologisch modelleren waarbij de onderlinge relaties tussen geografische
objecten expliciet worden vastgelegd. ISO 19107 bevat een uitgebreid scala aan
geometrische types terwijl er in de praktijk doorgaans een zeer beperkte subset
gebruikt wordt. OGC heeft een subset, simple features profile, van ISO 19107
gedefinieerd die voor vrijwel alle toepassingen voldoende is. Ook binnen
Nederland is het simple features profile een zinnige inperking van ISO 19107.
Een uitzondering moet gemaakt worden voor cirkelbogen. Historisch worden veel
geo-objecten in Nederland met cirkelbogen beschreven terwijl cirkelbogen geen
deel uitmaken van het simple feature profile 3.1.1. Voor ISO 19136:2007 (GML
3.2.1) is er een simple features profile (OGC 10-100r3, 2011-05-24, version 2.0)
beschikbaar dat wel voldoet aan de eisen en wensen van Nederland (inclusief
bogen).

Tabel 3 – Uitwisselformaten standaarden en specificaties met betrekking tot
vectordata

| **Internationale standaarden/specificaties**                                                            | **Europese profielen**                                                                | **Nederlandse profielen**    |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|------------------------------|
| ISO 19107 Geographic information - Spatial Schema [[ISO-19107-2003]]                                    | INSPIRE Guidelines for the encoding of spatial data [[INSGEN]]                        |                              |
| OGC Geography Markup Language (GML) Encoding Specification, version 3.1.1. [[GML31]]                    |                                                                                       |                              |
| OGC Geography Markup Language (GML) Encoding standard, version 3.2.1 (=ISO 19136) [[iso-19136-2007]]    |                                                                                       |                              |
| OGC Geography Markup Language (GML) Encoding standard, version 3.3  [[GML33]]                           |                                                                                       |                              |
| Simple Features profile (OGC 10-100r3, version 2.0) op ISO 19136:2007 (GML 3.2.1)  [[GMLSF]]            |                                                                                       |                              |
| OGC GeoPackage Encoding Standard, version 1.3.1 [[GeoPackage]]                                          | GeoPackage encoding of INSPIRE datasets. Inspire good practise. [[INSGPGeopackage]]   |                              |
| The GeoJSON Format [[rfc7946]]                                                                          |                                                                                       |                              |
| OGC JSON Features and Geometries **draft** [[JSON-FG]]                                                  |                                                                                       |                              |
| HTML5 [[html5]]                                                                                         |                                                                                       |                              |
| Resource Description Framework (RDF): Concepts and Abstract Syntax. [[rdf11-concepts]]                  |                                                                                       |                              |

Handreikingen:
- Er zijn veel uitwisselformaten om uit te kiezen. Daarom is er voor vectorformaten een **Keuzehulp** gemaakt: de handreiking [Geometrie in uitwisselingsformaten](https://docs.geostandaarden.nl/g4w/geox/). Deze legt ook de toepassing uit van de verschillende versies van GML. 
- De handreiking [Geometrie in model en GML](https://docs.geostandaarden.nl/nen3610/gimeg/) geeft uitleg over het ruimtelijk schema van ISO 19107 en beschrijft het Nederlands profiel op GML.

### Rasterdata uitwisselstandaarden

<aside class="issue">Moeten we  in het raamwerk geostandaarden ook geen aandacht gaan besteden aan uitwisselformaten voor:
-	Reality data en mesh file formats: Pointclouds, Reality mesh, Photos (zie bijv,. https://communities.bentley.com/products/3d_imaging_and_point_cloud_software/w/wiki/59030/reality-data-formats-best-practices); vangen we dit domein helemaal af met Coverages en geotiff/NETCDF/…
-	M.bt. datacubes (voor science-achtige toepassingen); zie de sheet van Peter Bauman; ISO standaard voor SQL voor data arrays en update ISO standaard 19123-3? 
-	Cloudnative formats; geoparquet, STAC, … https://www.ogc.org/ogcevents/cloud-native-geospatial-outreach-event

Deze uitwisselformaten passen mogelijk bij de categorie Rasterdata. Dan is het niet nodig om er een nieuwe paragraaf voor te introduceren. Misschien wel om de titel aan te passen.

Zie deze tekst op de [ogc coverages DWG wiki](https://external.ogc.org/twiki_public/CoveragesDWG/WebHome):

> digital representations of space/time varying phenomena, concretely: spatio-temporal regular and irregular grids, point clouds, and general meshes. In particular, multi-dimensional datacubes fall under this category, such as 1-D sensor time series, 2-D satellite imagery, 3-D x/y/t image time series and x/y/z geoscientific models, 4-D x/y/z/t climate and ocean data sets, and more.

Op basis van die tekst zouden we onderstaande kunnen herschrijven als: 

De raster representatie wordt gebruik voor het vastleggen van fenomenen waarbij
aan ieder punt op het aardoppervlak een waarde uit een continu domein wordt
toegekend. *Het gaat daarbij over het algemeen om ruimtelijk-temporele gegevens, i.e. ieder punt heeft naast een waarde ook een tijdstip. Allerlei soorten bestanden vallen hieronder, bijvoorbeeld naast gewone rasterdata ook point clouds, meshes, en data cubes.*

In dat geval zouden we in deze paragraaf ook opnemen: 
- [Geoparquet](https://github.com/opengeospatial/geoparquet) (of is dit vector data?)
- [QB4ST: RDF Data Cube extensions for spatio-temporal components](https://www.w3.org/TR/qb4st/)
- [lAS](https://www.ogc.org/standards/LAS)
- ...?

</aside>

De raster representatie wordt gebruik voor het vastleggen van fenomenen waarbij
aan ieder punt op het aardoppervlak een waarde uit een continu domein wordt
toegekend. Voorbeelden zijn de luchtdruk boven Nederland, waardes van een
schadelijke stof, temperatuurswaarden of – zoals bij een foto reflectiewaarden.
In OGC en ISO/TC 211 termen heet dit een coverage. Zo’n coverage wordt vaak
geïmplementeerd door over het terrein een regelmatig grid van punten te leggen
(het raster) en voor ieder punt een waarde op te nemen. Deze waarde is
bijvoorbeeld een hoogteaanduiding bepaald middels laser altimetrie of de
numerieke codering van een kleurenwaarde opgenomen in een satellietbeeld.

Er zijn verschillende geostandaarden voor rasterdata opgenomen in het raamwerk,
zoals NETCDF en HDF5. Ook GeoTIFF (Geo Tagged Image File Format), waarbij
georeferentie als tags in de file is opgenomen. Daarnaast webstandaarden als JPEG2000 en PNG. De
laatste wordt vooral toegepast in WMS.

Tabel 4 - Uitwisselformaten standaarden en specificaties met betrekking tot
rasterdata

| **Internationale standaarden/specificaties**                                         | **Europese profielen**                                          | **Nederlandse profielen** |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------|---------------------------|
| OGC Network Common Data Form (NetCDF) Core Encoding Standard version 1.0. [[NETCDF]] | INSPIRE Guidelines for the encoding of spatial data [[INSGEN]]  |                           |
| Hierarchical Data Format 1.0 [[HDF5]]                                                |                                                                 |                           |
| HDF-EOS5 Data Model, File Format and Library (v1.1)        [[HDFEOS]]                |                                                                 |                           |
| OGC GeoTIFF Standard, version 1.1 [[GeoTIFF]]                                        |                                                                 |                           |
| ISO/IEC 15444-1:2019 - JPEG 2000 image coding system [[JPEG2000]]                    |                                                                 |                           |
| ISO 19123-1: Coverage Fundamentals [[iso-19123-2005]]                                |                                                                 |                           |
| ISO 19123-2: Coverage Implementation Schema (CIS 1.0) [[CIS10]]                      |                                                                 |                           |
| GML for JPEG 2000  [[GMLJPEG2000]]                                                   |                                                                 |                           |
| ISO/IEC 15948:2004 - Portable Network Graphics [[PNG]]                               |                                                                 |                           |
| CoverageJSON 1.0 **Draft** [[COVJSON]]                                               |                                                                 |                           |

### Sensordata uitwisselstandaarden

Met sensoren worden apparaten bedoeld voor het meten van stoffen in water,
grondsamenstellingen, grondwater, luchtverontreiniging, etc. Deze sensoren
hebben ook een positie en de resultaten van de metingen dienen uitgewisseld te
kunnen worden. Voor deze uitwisseling van observations en measurements bestaat
de volgende standaard (tabel ?).

Tabel ? – Uitwisselformaten standaarden en specificaties met betrekking tot
sensordata

| **Internationale standaarden/specificaties**                                  | **Europese profielen**                                            | **Nederlandse profielen** |
|-------------------------------------------------------------------------------|-------------------------------------------------------------------|---------------------------|
| OGC Observations & Measurement - XML implementation version 2.0 [[OaM XML]] | INSPIRE Guidelines for the encoding of spatial data. [[INSGEN]] |                           |

### 3D data uitwisselstandaarden

Tabel 5 – Uitwisselformaten standaarden en specificaties met betrekking tot 3D
data

| **Internationale standaarden/specificaties**                                     | **Europese profielen** | **Nederlandse profielen** |
|----------------------------------------------------------------------------------|------------------------|---------------------------|
| City Geography Markup Language Encoding Standard, version 3.0. [[CityGML]]     |                        |                           |
| CityJSON, A JSON-based encoding for 3D city models. version 1.1.2 [[CityJSON]] |                        |                           |

## 

## Kwaliteit en uitwisselformaten

GML Validators pm

Handreiking [Geometrie in
uitwisselingsformaten](https://geonovum.github.io/geox/) (Geonovum 2022).

## 

## Verkenning

n.v.t.
