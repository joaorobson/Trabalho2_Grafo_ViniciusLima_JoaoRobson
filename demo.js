// Initialize the chart
var chart = Highcharts.mapChart('container', {
		chart: {height: 1000},
    title: {
        text: 'Highmaps simple flight routes demo'
    },

    legend: {
        align: 'left',
        layout: 'vertical',
        floating: true
    },

    mapNavigation: {
        enabled: true
    },

    tooltip: {
        formatter: function () {
            return this.point.id + (
                this.point.lat ?
                    '<br>Lat: ' + this.point.lat + ' Lon: ' + this.point.lon : ''
            );
        }
    },

    plotOptions: {
        series: {
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[1]
            },
turboThreshold: 0
        }
    },

    series: [{
        // Use the gb-all map with no data as a basemap
        mapData: Highcharts.maps['countries/br/br-all'],
        name: 'Basemap',
        borderColor: '#707070',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
    }, {
        name: 'Separators',
        type: 'mapline',
        data: Highcharts.geojson(Highcharts.maps['countries/br/br-all'], 'mapline'),
        color: '#707070',
        showInLegend: false,
        enableMouseTracking: false
    }, {
        // Specify cities using lat/lon
        type: 'mappoint',
        name: 'Cities',
        dataLabels: {
            format: '{point.id}'
        },
        // Use id instead of name to allow for referencing points later using
        // chart.get
        data: 

[
  {
    "lon": -48.651402000000004,
    "id": "Ministro Victor Konder International Airport",
    "lat": -26.879998999999998
  },
  {
    "lon": -51.1422233581543,
    "id": "Vila Rica Airport",
    "lat": -9.979443550109863
  },
  {
    "lon": -43.38679885864258,
    "id": "Francisco de Assis Airport",
    "lat": -21.791500091552734
  },
  {
    "lon": -60.69222259520001,
    "id": "Atlas Brasil Cantanhede Airport",
    "lat": 2.8413889408099995
  },
  {
    "lon": -61.4508,
    "id": "Cacoal Airport",
    "lat": -11.495999999999999
  },
  {
    "lon": -50.4247016907,
    "id": "Araçatuba Airport",
    "lat": -21.1413002014
  },
  {
    "lon": -43.07730102539063,
    "id": "Cangapara Airport",
    "lat": -6.8463897705078125
  },
  {
    "lon": -41.52370071411133,
    "id": "Picos Airport",
    "lat": -7.0620598793029785
  },
  {
    "lon": -37.3642997742,
    "id": "Dix-Sept Rosado Airport",
    "lat": -5.2019200325
  },
  {
    "lon": -56.452498999999996,
    "id": "Bonito Airport",
    "lat": -21.247298999999998
  },
  {
    "lon": -42.644444,
    "id": "Serra da Capivara Airport",
    "lat": -9.082778
  },
  {
    "lon": -64.9923,
    "id": "Tapuruquara Airport",
    "lat": -0.3786
  },
  {
    "lon": -65.28479766845703,
    "id": "Guajará-Mirim Airport",
    "lat": -10.786399841308594
  },
  {
    "lon": -38.9990005493,
    "id": "Hotel Transamérica Airport",
    "lat": -15.3551998138
  },
  {
    "lon": -48.40510177612305,
    "id": "EMBRAER - Unidade Gavião Peixoto Airport",
    "lat": -21.773700714111328
  },
  {
    "lon": -52.327702,
    "id": "João Simões Lopes Neto International Airport",
    "lat": -31.718398999999998
  },
  {
    "lon": -59.839599609375,
    "id": "Prainha Airport",
    "lat": -7.17287015914917
  },
  {
    "lon": -55.672341,
    "id": "Adolino Bedin Regional Airport",
    "lat": -12.479177
  },
  {
    "lon": -69.87979888916016,
    "id": "Eirunepé Airport",
    "lat": -6.6395301818847665
  },
  {
    "lon": -56.000701904296996,
    "id": "Itaituba Airport",
    "lat": -4.2423400878906
  },
  {
    "lon": -43.650398254399995,
    "id": "Diamantina Airport",
    "lat": -18.232000351
  },
  {
    "lon": -54.39805603027344,
    "id": "Helisul IV Heliport",
    "lat": -25.613056182861328
  },
  {
    "lon": -65.3554000854,
    "id": "Urucu Airport",
    "lat": -4.8842201232899995
  },
  {
    "lon": -39.033199310303004,
    "id": "Bahia - Jorge Amado Airport",
    "lat": -14.815999984741001
  },
  {
    "lon": -46.6377983093,
    "id": "Campo de Marte Airport",
    "lat": -23.509099960300002
  },
  {
    "lon": -51.0499000549,
    "id": "Ourilândia do Norte Airport",
    "lat": -6.763100147250001
  },
  {
    "lon": -59.9458,
    "id": "Vila Bela da Santíssima Trindade Airport",
    "lat": -14.9942
  },
  {
    "lon": -40.286388,
    "id": "Eurico de Aguiar Salles Airport",
    "lat": -20.258057
  },
  {
    "lon": -64.76950073242189,
    "id": "Lábrea Airport",
    "lat": -7.278969764709473
  },
  {
    "lon": -46.567901611328004,
    "id": "Poços de Caldas - Embaixador Walther Moreira Salles Airport",
    "lat": -21.843000411987
  },
  {
    "lon": -34.9486122131,
    "id": "Presidente Castro Pinto International Airport",
    "lat": -7.145833015440002
  },
  {
    "lon": -61.6866683959961,
    "id": "Fazenda Kajussol Airport",
    "lat": -11.9647216796875
  },
  {
    "lon": -52.6022,
    "id": "Monte Dourado Airport",
    "lat": -0.8898389999999999
  },
  {
    "lon": -52.152221999999995,
    "id": "Olhos D`água Airport",
    "lat": -14.019444
  },
  {
    "lon": -52.254001617432,
    "id": "Altamira Airport",
    "lat": -3.2539100646973
  },
  {
    "lon": -39.270099639899996,
    "id": "Orlando Bezerra de Menezes Airport",
    "lat": -7.21895980835
  },
  {
    "lon": -57.7248,
    "id": "Maués Airport",
    "lat": -3.3721699999999997
  },
  {
    "lon": -46.299720764160156,
    "id": "Base Aérea de Santos Airport",
    "lat": -23.928056716918945
  },
  {
    "lon": -49.72029876709001,
    "id": "Tucuruí Airport",
    "lat": -3.7860100269317996
  },
  {
    "lon": -55.400833,
    "id": "Novo Progresso Airport",
    "lat": -7.125833
  },
  {
    "lon": -57.77690124511719,
    "id": "Jacareacanga Airport",
    "lat": -6.2331600189208975
  },
  {
    "lon": -53.38166809082031,
    "id": "Posto Leonardo Vilas Boas Airport",
    "lat": -12.19833278656006
  },
  {
    "lon": -45.20479965209961,
    "id": "Guaratinguetá Airport",
    "lat": -22.79159927368164
  },
  {
    "lon": -42.8235015869,
    "id": "Senador Petrônio Portela Airport",
    "lat": -5.0599398613
  },
  {
    "lon": -41.7659988403,
    "id": "Macaé Airport",
    "lat": -22.343000412
  },
  {
    "lon": -50.95611190795898,
    "id": "General Leite de Castro Airport",
    "lat": -17.8347225189209
  },
  {
    "lon": -64.7240982056,
    "id": "Tefé Airport",
    "lat": -3.38294005394
  },
  {
    "lon": -49.30149841308594,
    "id": "Conceição do Araguaia Airport",
    "lat": -8.348349571228027
  },
  {
    "lon": -45.86149978637695,
    "id": "Professor Urbano Ernesto Stumpf Airport",
    "lat": -23.22920036315918
  },
  {
    "lon": -46.4911994934082,
    "id": "Patos de Minas Airport",
    "lat": -18.672800064086914
  },
  {
    "lon": -50.8582,
    "id": "Amapá Airport",
    "lat": 2.0775099999999997
  },
  {
    "lon": -46.944408,
    "id": "Comte. Rolim Adolfo Amaro–Jundiaí State Airport",
    "lat": -23.180369
  },
  {
    "lon": -38.250598907471,
    "id": "Paulo Afonso Airport",
    "lat": -9.4008798599243
  },
  {
    "lon": -49.13219833374024,
    "id": "Gurupi Airport",
    "lat": -11.73960018157959
  },
  {
    "lon": -47.903703,
    "id": "Mário Pereira Lopes–São Carlos Airport",
    "lat": -21.875401
  },
  {
    "lon": -54.9654006958,
    "id": "Cachimbo Airport",
    "lat": -9.333939552310001
  },
  {
    "lon": -47.10820007324219,
    "id": "Amarais Airport",
    "lat": -22.85919952392578
  },
  {
    "lon": -72.7695007324,
    "id": "Cruzeiro do Sul Airport",
    "lat": -7.59990978241
  },
  {
    "lon": -58.48944473266602,
    "id": "Juruena Airport",
    "lat": -10.305832862854004
  },
  {
    "lon": -42.830898,
    "id": "Maricá Airport",
    "lat": -22.9195
  },
  {
    "lon": -48.607498168945,
    "id": "Nelson Ribeiro Guimarães Airport",
    "lat": -17.725299835205
  },
  {
    "lon": -46.960399627686,
    "id": "Romeu Zema Airport",
    "lat": -19.563199996948
  },
  {
    "lon": -51.144413,
    "id": "Canoas Air Force Base",
    "lat": -29.945928000000002
  },
  {
    "lon": -41.73199844359999,
    "id": "Prefeito Doutor João Silva Filho Airport",
    "lat": -2.89374995232
  },
  {
    "lon": -46.47305679321289,
    "id": "Guarulhos - Governador André Franco Montoro International Airport",
    "lat": -23.435556411743164
  },
  {
    "lon": -53.688202000000004,
    "id": "Santa Maria Airport",
    "lat": -29.711399
  },
  {
    "lon": -49.926399231000005,
    "id": "Frank Miloye Milenkowichi–Marília State Airport",
    "lat": -22.1968994141
  },
  {
    "lon": -49.09030151367188,
    "id": "Blumenau Airport",
    "lat": -26.83060073852539
  },
  {
    "lon": -39.293800354003906,
    "id": "Iguatu Airport",
    "lat": -6.346640110015869
  },
  {
    "lon": -39.253101348877,
    "id": "Caravelas Airport",
    "lat": -17.652299880981
  },
  {
    "lon": -55.58610916137695,
    "id": "Presidente João Batista Figueiredo Airport",
    "lat": -11.885000228881836
  },
  {
    "lon": -50.9398002625,
    "id": "Caçador Airport",
    "lat": -26.78840065
  },
  {
    "lon": -43.323102,
    "id": "Janaúba Airport",
    "lat": -15.7320
  },
  {
    "lon": -39.66849899292,
    "id": "9 de Maio - Teixeira de Freitas Airport",
    "lat": -17.524499893188
  },
  {
    "lon": -35.8964,
    "id": "Presidente João Suassuna Airport",
    "lat": -7.26992
  },
  {
    "lon": -51.5635986328125,
    "id": "Confresa Airport",
    "lat": -10.634400367736816
  },
  {
    "lon": -43.896400451660156,
    "id": "Lagoa Santa Airport",
    "lat": -19.66160011291504
  },
  {
    "lon": -48.39970016479492,
    "id": "Porto Nacional Airport",
    "lat": -10.719400405883787
  },
  {
    "lon": -43.797444,
    "id": "Das Bandeirinhas Airport",
    "lat": -20.738585
  },
  {
    "lon": -54.7248,
    "id": "Maestro Marinho Franco Airport",
    "lat": -16.586
  },
  {
    "lon": -39.080898,
    "id": "Porto Seguro Airport",
    "lat": -16.438601000000002
  },
  {
    "lon": -44.396400451660156,
    "id": "Centro de Lançamento de Alcântara Airport",
    "lat": -2.372999906539917
  },
  {
    "lon": -38.90999984741211,
    "id": "Lorenzo Airport",
    "lat": -13.389444351196287
  },
  {
    "lon": -69.93579864502,
    "id": "Tabatinga Airport",
    "lat": -4.2556700706482
  },
  {
    "lon": -52.656600952148,
    "id": "Serafin Enoss Bertaso Airport",
    "lat": -27.134199142456
  },
  {
    "lon": -38.992401,
    "id": "Valença Airport",
    "lat": -13.2965
  },
  {
    "lon": -43.761101000000004,
    "id": "Major Brigadeiro Doorgal Borges Airport",
    "lat": -21.2672
  },
  {
    "lon": -40.8630981445,
    "id": "Vitória da Conquista Airport",
    "lat": -14.8627996445
  },
  {
    "lon": -57.62990188598633,
    "id": "Cáceres Airport",
    "lat": -16.04360008239746
  },
  {
    "lon": -53.697497999999996,
    "id": "Toledo Airport",
    "lat": -24.6863
  },
  {
    "lon": -58.701668000000005,
    "id": "Juína Airport",
    "lat": -11.419444
  },
  {
    "lon": -49.0596,
    "id": "Humberto Ghizzo Bortoluzzi Regional Airport",
    "lat": -28.6753
  },
  {
    "lon": -40.49190139770001,
    "id": "Guarapari Airport",
    "lat": -20.646499633800005
  },
  {
    "lon": -53.68579864501953,
    "id": "Itapiranga Airport",
    "lat": -27.14249992370605
  },
  {
    "lon": -57.0382003784,
    "id": "Rubem Berta Airport",
    "lat": -29.782199859600002
  },
  {
    "lon": -41.8759002686,
    "id": "Itaperuna Airport",
    "lat": -21.2192993164
  },
  {
    "lon": -56.104999542200005,
    "id": "Piloto Osvaldo Marques Dias Airport",
    "lat": -9.866389274600001
  },
  {
    "lon": -44.870899200439,
    "id": "Brigadeiro Cabral Airport",
    "lat": -20.180700302124
  },
  {
    "lon": -43.97194290161133,
    "id": "Tancredo Neves International Airport",
    "lat": -19.62444305419922
  },
  {
    "lon": -49.2134017944,
    "id": "Francisco Vilela do Amaral Airport",
    "lat": -18.444700241099998
  },
  {
    "lon": -48.476299285900005,
    "id": "Val de Cans/Júlio Cezar Ribeiro International Airport",
    "lat": -1.3792500495900002
  },
  {
    "lon": -54.78583145141602,
    "id": "Maestro Wilson Fonseca Airport",
    "lat": -2.424721956253052
  },
  {
    "lon": -66.0831985474,
    "id": "Fonte Boa Airport",
    "lat": -2.5326099395800004
  },
  {
    "lon": -50.51861190795898,
    "id": "Santa Terezinha Airport",
    "lat": -10.4647216796875
  },
  {
    "lon": -63.13259887695313,
    "id": "Coari Airport",
    "lat": -4.1340599060058585
  },
  {
    "lon": -49.22069931030274,
    "id": "Santa Genoveva Airport",
    "lat": -16.631999969482422
  },
  {
    "lon": -43.1730575562,
    "id": "Zona da Mata Regional Airport",
    "lat": -21.5130558014
  },
  {
    "lon": -49.730499267578004,
    "id": "Lins Airport",
    "lat": -21.663999557494996
  },
  {
    "lon": -54.6725006104,
    "id": "Campo Grande Airport",
    "lat": -20.468700408900002
  },
  {
    "lon": -55.53333282470703,
    "id": "Fazenda Jatobasso Airport",
    "lat": -22.42916679382324
  },
  {
    "lon": -45.51599884033203,
    "id": "Base de Aviação de Taubaté Airport",
    "lat": -23.04010009765625
  },
  {
    "lon": -42.39440155029297,
    "id": "Cristiano Ferreira Varella Airport",
    "lat": -21.126100540161133
  },
  {
    "lon": -54.926601,
    "id": "Dourados Airport",
    "lat": -22.2019
  },
  {
    "lon": -46.88309860229492,
    "id": "Paracatu Airport",
    "lat": -17.242599487304688
  },
  {
    "lon": -44.23410034179688,
    "id": "Marechal Cunha Machado International Airport",
    "lat": -2.585360050201416
  },
  {
    "lon": -54.112201690674,
    "id": "Comandante Gustavo Kraemer Airport",
    "lat": -31.39049911499
  },
  {
    "lon": -56.11277770996094,
    "id": "Fazenda Colen Airport",
    "lat": -13.314443588256836
  },
  {
    "lon": -41.96289825439453,
    "id": "Umberto Modiano Airport",
    "lat": -22.770999908447266
  },
  {
    "lon": -46.65638732910156,
    "id": "Congonhas Airport",
    "lat": -23.626110076904297
  },
  {
    "lon": -49.053798675500005,
    "id": "Bauru Airport",
    "lat": -22.344999313400002
  },
  {
    "lon": -56.1166992188,
    "id": "Marechal Rondon Airport",
    "lat": -15.6528997421
  },
  {
    "lon": -32.423302,
    "id": "Fernando de Noronha Airport",
    "lat": -3.8549300000000004
  },
  {
    "lon": -48.797401428222656,
    "id": "Lauro Carneiro de Loyola Airport",
    "lat": -26.22450065612793
  },
  {
    "lon": -47.77666854858398,
    "id": "Leite Lopes Airport",
    "lat": -21.136388778686523
  },
  {
    "lon": -36.01350021362305,
    "id": "Caruaru Airport",
    "lat": -8.282389640808105
  },
  {
    "lon": -42.0742988586,
    "id": "Cabo Frio Airport",
    "lat": -22.921699523900003
  },
  {
    "lon": -43.950599670410156,
    "id": "Pampulha - Carlos Drummond de Andrade Airport",
    "lat": -19.851200103759766
  },
  {
    "lon": -47.26940155029297,
    "id": "Americana Airport",
    "lat": -22.755800247192386
  },
  {
    "lon": -44.72029876710001,
    "id": "Parati Airport",
    "lat": -23.2243995667
  },
  {
    "lon": -52.05270004272461,
    "id": "Concórdia Airport",
    "lat": -27.180599212646484
  },
  {
    "lon": -53.503501892089844,
    "id": "São Miguel do Oeste Airport",
    "lat": -26.78160095214844
  },
  {
    "lon": -49.4213905334,
    "id": "Diomício Freitas Airport",
    "lat": -28.724443435700003
  },
  {
    "lon": -54.48500061035156,
    "id": "Cataratas International Airport",
    "lat": -25.60027885437012
  },
  {
    "lon": -48.594100952148,
    "id": "Chafei Amsei Airport",
    "lat": -20.584499359131
  },
  {
    "lon": -50.44359970092773,
    "id": "Breves Airport",
    "lat": -1.6365300416946411
  },
  {
    "lon": -51.4245986938,
    "id": "Presidente Prudente Airport",
    "lat": -22.1751003265
  },
  {
    "lon": -59.457273,
    "id": "Aripuanã Airport",
    "lat": -10.188278
  },
  {
    "lon": -47.14110946655274,
    "id": "FIC Heliport",
    "lat": -22.711389541625977
  },
  {
    "lon": -60.36489868164063,
    "id": "Novo Aripuanã Airport",
    "lat": -5.118030071258545
  },
  {
    "lon": -56.777198791503906,
    "id": "Parintins Airport",
    "lat": -2.6730198860168457
  },
  {
    "lon": -48.5525016784668,
    "id": "Hercílio Luz International Airport",
    "lat": -27.670278549194336
  },
  {
    "lon": -35.376111,
    "id": "Governador Aluízio Alves International Airport",
    "lat": -5.768056
  },
  {
    "lon": -52.388900756800005,
    "id": "Barra do Garças Airport",
    "lat": -15.8613004684
  },
  {
    "lon": -39.864200592041016,
    "id": "Mucuri Airport",
    "lat": -18.048900604248047
  },
  {
    "lon": -40.56909942626953,
    "id": "Senador Nilo Coelho Airport",
    "lat": -9.362409591674805
  },
  {
    "lon": -54.33777618408203,
    "id": "Primavera do Leste Airport",
    "lat": -15.565555572509766
  },
  {
    "lon": -61.8465003967,
    "id": "Ji-Paraná Airport",
    "lat": -10.870800018299999
  },
  {
    "lon": -43.2505569458,
    "id": "Rio Galeão – Tom Jobim International Airport",
    "lat": -22.809999465900002
  },
  {
    "lon": -52.2682991027832,
    "id": "Erechim Airport",
    "lat": -27.66189956665039
  },
  {
    "lon": -62.25749969482422,
    "id": "Fazenda Mequens Airport",
    "lat": -13.061944007873535
  },
  {
    "lon": -66.89749908447266,
    "id": "Carauari Airport",
    "lat": -4.871520042419434
  },
  {
    "lon": -43.384701,
    "id": "Campo Délio Jardim de Mattos Airport",
    "lat": -22.875099
  },
  {
    "lon": -58.229167938232,
    "id": "Fazenda São Nicolau Airport",
    "lat": -9.8644437789917
  },
  {
    "lon": -49.1380004883,
    "id": "João Correa da Rocha Airport",
    "lat": -5.36858987808
  },
  {
    "lon": -60.02111053466797,
    "id": "Flores Airport",
    "lat": -3.0727779865264893
  },
  {
    "lon": -56.002220153808594,
    "id": "Fazenda Uiapuru Airport",
    "lat": -13.663888931274414
  },
  {
    "lon": -52.27055740356445,
    "id": "Canarana Airport",
    "lat": -13.574443817138672
  },
  {
    "lon": -53.5008010864,
    "id": "Cascavel Airport",
    "lat": -25.0002994537
  },
  {
    "lon": -49.2319984436,
    "id": "Bacacheri Airport",
    "lat": -25.4050998688
  },
  {
    "lon": -55.83620071411133,
    "id": "Oriximiná Airport",
    "lat": -1.714079976081848
  },
  {
    "lon": -69.18579864502,
    "id": "Iauaretê Airport",
    "lat": 0.6075000166893
  },
  {
    "lon": -53.31380081176758,
    "id": "Umuarama Airport",
    "lat": -23.7987003326416
  },
  {
    "lon": -54.520401,
    "id": "Santa Rosa Airport",
    "lat": -27.9067
  },
  {
    "lon": -48.60833358764648,
    "id": "Fazenda Spartacus Airport",
    "lat": -24.0
  },
  {
    "lon": -56.40039825439453,
    "id": "Diamantino Airport",
    "lat": -14.37689971923828
  },
  {
    "lon": -49.175800323500006,
    "id": "Afonso Pena Airport",
    "lat": -25.5284996033
  },
  {
    "lon": -43.4081001282,
    "id": "Bom Jesus da Lapa Airport",
    "lat": -13.2621002197
  },
  {
    "lon": -47.45869827270508,
    "id": "Brig. Lysias Augusto Rodrigues Airport",
    "lat": -7.32043981552124
  },
  {
    "lon": -56.396800994873,
    "id": "Trombetas Airport",
    "lat": -1.489599943161
  },
  {
    "lon": -48.964298,
    "id": "Base Aérea Airport",
    "lat": -16.2292
  },
  {
    "lon": -59.60240173339844,
    "id": "Borba Airport",
    "lat": -4.4063401222229
  },
  {
    "lon": -42.74610137939453,
    "id": "Guanambi Airport",
    "lat": -14.208200454711914
  },
  {
    "lon": -48.240501,
    "id": "Araguaína Airport",
    "lat": -7.227869999999999
  },
  {
    "lon": -43.818901061999995,
    "id": "Mário Ribeiro Airport",
    "lat": -16.706899642899998
  },
  {
    "lon": -60.098300933838,
    "id": "Brigadeiro Camarão Airport",
    "lat": -12.694399833678998
  },
  {
    "lon": -55.702598571777344,
    "id": "Ponta Porã Airport",
    "lat": -22.54960060119629
  },
  {
    "lon": -59.98630142211914,
    "id": "Ponta Pelada Airport",
    "lat": -3.1460399627685547
  },
  {
    "lon": -49.97990036010742,
    "id": "Redenção Airport",
    "lat": -8.033289909362793
  },
  {
    "lon": -51.1875,
    "id": "Hugo Cantergiani Regional Airport",
    "lat": -29.197099685700003
  },
  {
    "lon": -45.00899887084961,
    "id": "Barreiras Airport",
    "lat": -12.078900337219238
  },
  {
    "lon": -45.91910171508789,
    "id": "Pouso Alegre Airport",
    "lat": -22.28919982910156
  },
  {
    "lon": -43.719101,
    "id": "Santa Cruz Air Force Base",
    "lat": -22.9324
  },
  {
    "lon": -47.1344985962,
    "id": "Viracopos International Airport",
    "lat": -23.0074005127
  },
  {
    "lon": -52.01222229,
    "id": "Regional de Maringá - Sílvio Nane Junior Airport",
    "lat": -23.4794445038
  },
  {
    "lon": -51.1713981628418,
    "id": "Salgado Filho Airport",
    "lat": -29.994400024414066
  },
  {
    "lon": -36.62919998168945,
    "id": "Arapiraca Airport",
    "lat": -9.775360107421877
  },
  {
    "lon": -43.16583251953125,
    "id": "Morro da Urca Heliport",
    "lat": -22.95166778564453
  },
  {
    "lon": -45.473300933800004,
    "id": "Major Brigadeiro Trompowsky Airport",
    "lat": -21.5900993347
  },
  {
    "lon": -37.0703010559,
    "id": "Santa Maria Airport",
    "lat": -10.984000206
  },
  {
    "lon": -50.32849884033203,
    "id": "Santana do Araguaia Airport",
    "lat": -9.31997013092041
  },
  {
    "lon": -47.3829,
    "id": "Tenente Lund Pressoto Airport",
    "lat": -20.592199
  },
  {
    "lon": -43.369999,
    "id": "Jacarepaguá - Roberto Marinho Airport",
    "lat": -22.987499
  },
  {
    "lon": -46.537508,
    "id": "Estadual Arthur Siqueira Airport",
    "lat": -22.979162
  },
  {
    "lon": -49.40650177,
    "id": "Prof. Eribelto Manoel Reino State Airport",
    "lat": -20.8166007996
  },
  {
    "lon": -49.0502866745,
    "id": "Bauru - Arealva Airport",
    "lat": -22.1668591409
  },
  {
    "lon": -47.966110229491996,
    "id": "Mário de Almeida Franco Airport",
    "lat": -19.764722824097
  },
  {
    "lon": -61.179100036621094,
    "id": "Pimenta Bueno Airport",
    "lat": -11.641599655151367
  },
  {
    "lon": -48.225277,
    "id": "Ten. Cel. Aviador César Bombonato Airport",
    "lat": -18.883612
  },
  {
    "lon": -70.783302307129,
    "id": "Tarauacá Airport",
    "lat": -8.1552600860596
  },
  {
    "lon": -51.1301002502,
    "id": "Governador José Richa Airport",
    "lat": -23.3335990906
  },
  {
    "lon": -63.072101593,
    "id": "Humaitá Airport",
    "lat": -7.532120227810001
  },
  {
    "lon": -54.49361038208008,
    "id": "Helisul I Heliport",
    "lat": -25.604167938232425
  },
  {
    "lon": -66.11509704589844,
    "id": "Maturacá Airport",
    "lat": 0.6282690167427063
  },
  {
    "lon": -48.3569984436,
    "id": "Brigadeiro Lysias Rodrigues Airport",
    "lat": -10.2915000916
  },
  {
    "lon": -48.467999,
    "id": "Botucatu - Tancredo de Almeida Neves Airport",
    "lat": -22.939501
  },
  {
    "lon": -57.73222351074219,
    "id": "Fazenda Várzea Funda Airport",
    "lat": -16.583610534667972
  },
  {
    "lon": -48.52099990844727,
    "id": "Soure Airport",
    "lat": -0.6994310021400452
  },
  {
    "lon": -38.53260040283203,
    "id": "Pinto Martins International Airport",
    "lat": -3.776279926300049
  },
  {
    "lon": -50.9103012084961,
    "id": "Mostardas Airport",
    "lat": -31.103599548339844
  },
  {
    "lon": -44.4803009033,
    "id": "Resende Airport",
    "lat": -22.4785003662
  },
  {
    "lon": -66.9855,
    "id": "São Gabriel da Cachoeira Airport",
    "lat": -0.14835
  },
  {
    "lon": -57.4435005188,
    "id": "Tangará da Serra Airport",
    "lat": -14.6619997025
  },
  {
    "lon": -58.481201171875,
    "id": "Itacoatiara Airport",
    "lat": -3.127259969711304
  },
  {
    "lon": -52.326599,
    "id": "Lauro Kurtz Airport",
    "lat": -28.243999
  },
  {
    "lon": -68.9204120636,
    "id": "Senadora Eunice Micheles Airport",
    "lat": -3.46792950765
  },
  {
    "lon": -60.04970169067383,
    "id": "Eduardo Gomes International Airport",
    "lat": -3.038609981536865
  },
  {
    "lon": -35.2476997375,
    "id": "Augusto Severo Airport",
    "lat": -5.91141986847
  },
  {
    "lon": -51.520198822,
    "id": "Tancredo Thomas de Faria Airport",
    "lat": -25.3875007629
  },
  {
    "lon": -63.90230178833008,
    "id": "Governador Jorge Teixeira de Oliveira Airport",
    "lat": -8.70928955078125
  },
  {
    "lon": -41.51359939575195,
    "id": "Juscelino Kubitscheck Airport",
    "lat": -17.89229965209961
  },
  {
    "lon": -45.075599670410156,
    "id": "Ubatuba Airport",
    "lat": -23.44109916687012
  },
  {
    "lon": -42.487598419189,
    "id": "Usiminas Airport",
    "lat": -19.470699310302997
  },
  {
    "lon": -55.946098,
    "id": "Tiriós Airport",
    "lat": 2.2234700000000003
  },
  {
    "lon": -54.169102,
    "id": "Santo Ângelo Airport",
    "lat": -28.2817
  },
  {
    "lon": -40.336802,
    "id": "Sobral Airport",
    "lat": -3.67889
  },
  {
    "lon": -47.490002000000004,
    "id": "Sorocaba Airport",
    "lat": -23.478001000000003
  },
  {
    "lon": -44.30709838867188,
    "id": "Angra dos Reis Airport",
    "lat": -22.975299835205078
  },
  {
    "lon": -43.46030044555664,
    "id": "Aeroclube Airport",
    "lat": -22.74530029296875
  },
  {
    "lon": -47.92083358764648,
    "id": "Presidente Juscelino Kubistschek International Airport",
    "lat": -15.86916732788086
  },
  {
    "lon": -50.1441,
    "id": "Ponta Grossa Airport - Comandante Antonio Amilton Beraldo",
    "lat": -25.1847
  },
  {
    "lon": -43.1631011963,
    "id": "Santos Dumont Airport",
    "lat": -22.910499572800003
  },
  {
    "lon": -46.33530044555664,
    "id": "Furnas Airport",
    "lat": -20.702800750732425
  },
  {
    "lon": -51.0722007751,
    "id": "Alberto Alcolumbre Airport",
    "lat": 0.0506640002131
  },
  {
    "lon": -56.11861,
    "id": "Fazenda Vaticano Airport",
    "lat": -21.294442999999998
  },
  {
    "lon": -57.6713905334,
    "id": "Corumbá International Airport",
    "lat": -19.0119438171
  },
  {
    "lon": -50.68960189819336,
    "id": "São Félix do Araguaia Airport",
    "lat": -11.632399559020994
  },
  {
    "lon": -35.79169845581055,
    "id": "Zumbi dos Palmares Airport",
    "lat": -9.510809898376463
  },
  {
    "lon": -48.4607009888,
    "id": "Belém/Brigadeiro Protásio de Oliveira Airport",
    "lat": -1.4141600131999998
  },
  {
    "lon": -50.6515998840332,
    "id": "Telêmaco Borba Airport",
    "lat": -24.317800521850586
  },
  {
    "lon": -38.3224983215,
    "id": "Deputado Luiz Eduardo Magalhães International Airport",
    "lat": -12.9086112976
  },
  {
    "lon": -34.923599243164055,
    "id": "Guararapes - Gilberto Freyre International Airport",
    "lat": -8.126489639282228
  },
  {
    "lon": -48.13299942020001,
    "id": "Araraquara Airport",
    "lat": -21.812000274699997
  },
  {
    "lon": -51.9523,
    "id": "São Félix do Xingu Airport",
    "lat": -6.6413
  },
  {
    "lon": -62.919601,
    "id": "Barcelos Airport",
    "lat": -0.981292
  },
  {
    "lon": -57.5495,
    "id": "Inácio Luís do Nascimento Airport",
    "lat": -11.2966
  },
  {
    "lon": -53.0634994506836,
    "id": "Francisco Beltrão Airport",
    "lat": -26.059200286865234
  },
  {
    "lon": -50.0013885498,
    "id": "Carajás Airport",
    "lat": -6.11527776718
  },
  {
    "lon": -64.25160217285156,
    "id": "Costa Marques Airport",
    "lat": -12.421099662780762
  },
  {
    "lon": -67.89805603027344,
    "id": "Plácido de Castro Airport",
    "lat": -9.868888854980467
  },
  {
    "lon": -41.2770004272,
    "id": "Coronel Horácio de Mattos Airport",
    "lat": -12.4822998047
  },
  {
    "lon": -61.278301239014,
    "id": "Manicoré Airport",
    "lat": -5.8113799095153995
  },
  {
    "lon": -51.68420028686499,
    "id": "Plínio Alarcom Airport",
    "lat": -20.754199981689
  },
  {
    "lon": -41.982200622559,
    "id": "Coronel Altino Machado de Oliveira Airport",
    "lat": -18.89520072937
  },
  {
    "lon": -47.459998999999996,
    "id": "Prefeito Renato Moreira Airport",
    "lat": -5.53129
  },
  {
    "lon": -51.79690170288086,
    "id": "Oiapoque Airport",
    "lat": 3.85548996925354
  },
  {
    "lon": -42.09260177612305,
    "id": "São Pedro da Aldeia Airport",
    "lat": -22.81290054321289
  },
  {
    "lon": -47.33480072021485,
    "id": "Campo Fontenelle Airport",
    "lat": -21.984600067138672
  },
  {
    "lon": -63.04888916015625,
    "id": "Ariquemes Airport",
    "lat": -9.884721755981444
  },
  {
    "lon": -50.28150177,
    "id": "Lages Airport",
    "lat": -27.7821006775
  },
  {
    "lon": -48.195301,
    "id": "Minaçu Airport",
    "lat": -13.5491
  },
  {
    "lon": -51.5532989502,
    "id": "Santa Terezinha Airport",
    "lat": -27.1714000702
  },
  {
    "lon": -41.301700591999996,
    "id": "Bartolomeu Lisandro Airport",
    "lat": -21.698299408
  },
  {
    "lon": -42.50694274902344,
    "id": "Saquarema Airport",
    "lat": -22.92972183227539
  }
] 
    }]
});

// Function to return an SVG path between two points, with an arc
console.log('iojanjv')
function pointsToPath(from, to, invertArc) {
console.log(from, to)
    var arcPointX = (from.x + to.x) / (invertArc ? 2.4 : 1.6),
        arcPointY = (from.y + to.y) / (invertArc ? 2.4 : 1.6);
    return 'M' + from.x + ',' + from.y + 'Q' + arcPointX + ' ' + arcPointY +
            ',' + to.x + ' ' + to.y;
}

var londonPoint = chart.get("Presidente Juscelino Kubistschek International Airport"),
    lerwickPoint = chart.get("Guarulhos - Governador André Franco Montoro International Airport");
// Add a series of lines for London
console.log(londonPoint)
chart.addSeries({
    name: 'London flight routes',
    type: 'mapline',
    lineWidth: 2,
    color: Highcharts.getOptions().colors[3],
    data: [{
        id: 'London - Glasgow',
        path: pointsToPath(londonPoint, chart.get("Santos Dumont Airport"))
    }, ]
});

// Add a series of lines for Lerwick
chart.addSeries({
    name: 'Lerwick flight routes',
    type: 'mapline',
    lineWidth: 2,
    color: Highcharts.getOptions().colors[5],
    data: [{
        id: 'Lerwick - Glasgow',
        path: pointsToPath(lerwickPoint, chart.get('Patos de Minas Airport'))
    }, ]
});
