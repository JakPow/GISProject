/*
	Go over tutorials to add more stuff (icons etc)
*/

//function to draw all maps
function call_maps(){
	draw_map();
	draw_map2();
}

//PROPREITY 3





//TASK 5 - KML 2
function draw_map(){
	
	var map = new google.maps.Map(document.getElementById("map_space"),{
		center: new google.maps.LatLng(52.791402, -1.255423),
		zoom:6,
		mapTypeId: 'terrain'
	});	
	
	var infoWin = new google.maps.InfoWindow();

	var locations = [
		{lat: 51.444861, lng: -0.471619,info: 'Ashford Hospital'},
		{lat: 50.830848, lng: -0.114151,info: 'Brighton General Hospital'},
		{lat: 51.369128, lng: -0.77872,info: 'Broadmoor Hospital'},
		{lat: 50.885305, lng: 0.567737,info: 'Conquest Hospital'},
		{lat: 51.116537, lng: -0.197559,info: 'Crawley Hospital'},
		{lat: 51.435004, lng: 0.258188,info: 'Darent Valley Hospital'},
		{lat: 50.786204, lng: 0.270243,info: 'Eastbourne District General Hospital'},
		{lat: 51.218548, lng: -0.161271,info: 'East Surrey Hospital'},
		{lat: 51.317643, lng: -0.743138,info: 'Frimley Park Hospital'},
		{lat: 51.136772, lng: 0.259031,info: 'Kent & Sussex Hospital, Tunbridge Wells'},
		{lat: 51.378922, lng: 0.544387,info: 'Medway Maritime Hospital'},
		{lat: 50.83522, lng: -0.08282,info: 'Woodingdean, Nuffield Hospital (W-bound)'},
		{lat: 50.991133, lng: -0.091059,info: 'Princess Royal Hospital'},
		{lat: 51.375922, lng: 1.386985,info: 'Queen Elizabeth The Queen Mother Hospital'},
		{lat: 50.8194, lng: -0.118161,info: 'Royal Sussex County Hospital'},
		{lat: 50.8194, lng: -0.118161,info: 'Royal Alexandra Childrens Hospital'},
		{lat: 51.24044, lng: -0.60888,info: 'Royal Surrey County Hospital'},
		{lat: 50.84077, lng: -0.25547,info: 'Shoreham-by-Sea, Southlands Hospital (S-bound)'},
		{lat: 51.375179, lng: -0.5265,info: 'St Peters Hospital'},
		{lat: 50.843496, lng: -0.768023,info: 'St Richards Hospital'},
		{lat: 51.141425, lng: 0.916246,info: 'William Harvey Hospital, Ashford'},
		{lat: 50.81669, lng: -0.36431,info: 'Worthing Hospital'},
		{lat: 50.875526, lng: -1.283796,info: 'Coldeast Hospital, Hampshire'},
		{lat: 50.79248, lng: -1.14764,info: 'Alverstoke, War Memorial Hospital (N-bound)'},
		{lat: 50.854447, lng: -0.987503,info: 'Havant War Memorial Hospital'},
		{lat: 51.410835, lng: -0.687331,info: 'Heatherwood Hospital, Ascot'},
		{lat: 52.054075, lng: -1.335454,info: 'Horton General Hospital, Banbury Oxon'},
		{lat: 51.763172, lng: -1.217126,info: 'John Radcliffe Hospital'},
		{lat: 50.760698, lng: -1.550488,info: 'Lymington Hospital'},
		{lat: 50.76942, lng: -1.54622,info: 'Lower Buckland, Lymington New Forest Hospital'},
		{lat: 50.9279, lng: -1.32798,info: 'Moorgreen, Moorgreen Hospital (N-bound)'},
		{lat: 52.02465, lng: -0.73424,info: 'Milton Keynes General Hospital'},
		{lat: 51.034431, lng: -1.764651,info: 'Capio New Hall Hospital'},
		{lat: 51.278913, lng: -1.111098,info: 'North Hampshire Hospital, Basingstoke'},
		{lat: 51.753649, lng: -1.210797,info: 'Nuffield Orthopaedic Centre, Oxford'},
		{lat: 51.753649, lng: -1.210797,info: 'Oxford Clinic for Specialist Surgery'},
		{lat: 51.004289, lng: -0.94022,info: 'Petersfield Hospital'},
		{lat: 50.850209, lng: -1.07201,info: 'Queen Alexandra Hospital, Portsmouth'},
		{lat: 51.759961, lng: -1.262419,info: 'Radcliffe Infirmary'},
		{lat: 50.992004, lng: -1.482002,info: 'Romsey Hospital'},
		{lat: 51.450648, lng: -0.958922,info: 'Royal Berkshire Hospital'},
		{lat: 51.82041, lng: -0.81656,info: 'Aylesbury, Royal Bucks Hospital (opp)'},
		{lat: 51.06212, lng: -1.32935,info: 'Royal Hampshire County Hospital'},
		{lat: 50.785588, lng: -1.124104,info: 'Royal Hospital Haslar, Gosport'},
		{lat: 50.903564, lng: -1.396932,info: 'Southampton, Royal South Hants Hospital'},
		{lat: 50.934269, lng: -1.433051,info: 'Southampton General Hospital'},
		{lat: 51.800473, lng: -0.803289,info: 'Stoke Mandeville Hospital'},
		{lat: 50.8595, lng: -1.17777,info: 'Fareham, St Christophers Hospital (N-bound)'},
		{lat: 50.797006, lng: -1.050133,info: 'St James Hospital'},
		{lat: 50.711034, lng: -1.300895,info: 'St Marys Hospital'},
		{lat: 50.800306, lng: -1.063603,info: 'St Marys Hospital'},
		{lat: 50.930603, lng: -1.52885,info: 'Hampshire Partnership NHS Trust'},
		{lat: 51.750794, lng: -1.222319,info: 'Warneford Hospital'},
		{lat: 50.925186, lng: -1.446049,info: 'Western Communtiy Hospital'},
		{lat: 51.532187, lng: -0.575387,info: 'Wexham Park Hospital'},
		{lat: 50.468099, lng: -4.747449,info: 'Bodmin NHS Treatment Centre'},
		{lat: 50.74565, lng: -1.82089,info: 'Royal Bournemouth General Hospital'},
		{lat: 51.457988, lng: -2.597171,info: 'Bristol Royal Hospital For Children'},
		{lat: 51.446423, lng: -2.593613,info: 'Bristol General Hospital'},
		{lat: 51.45848, lng: -2.596164,info: 'Bristol Royal Infirmary'},
		{lat: 50.229424, lng: -5.24524,info: 'Cambourne Redruth Community Hospital'},
		{lat: 51.892078, lng: -2.071899,info: 'Cheltenham General Hospital'},
		{lat: 50.74424, lng: -1.78737,info: 'Fairmile, Christchurch Hospital (NW-bound)'},
		{lat: 51.468891, lng: -2.516091,info: 'Cossham'},
		{lat: 50.407154, lng: -4.128495,info: 'Derriford Hospital'},
		{lat: 50.713396, lng: -2.447155,info: 'The Dorset County Hospital'},
		{lat: 50.207616, lng: -5.479138,info: 'Edward Hain Memorial Hospital, Saint Ives, Cornwall TR26 2BS'},
		{lat: 51.496413, lng: -2.52889,info: 'Frenchay Hospital'},
		{lat: 51.866283, lng: -2.232048,info: 'Gloucestershire Royal Hospital, Gloucester'},
		{lat: 51.536716, lng: -1.727279,info: 'Great Western Hospital, Swindon'},
		{lat: 50.09233, lng: -5.2646,info: 'Helston, Cottage Hospital (opp)'},
		{lat: 51.887025, lng: 0.889177,info: 'Essex County Hospital'},
		{lat: 51.011912, lng: -3.119819,info: 'Musgrove Park Hospital'},
		{lat: 51.091219, lng: -4.051464,info: 'North Devon District Hospital'},
		{lat: 51.29926, lng: -2.49443,info: 'Paulton Memorial Hospital'},
		{lat: 50.129852, lng: -5.560543,info: 'Poltair Hospital'},
		{lat: 50.72189, lng: -1.97378,info: 'Poole General Hospital'},
		{lat: 50.265992, lng: -5.09418,info: 'Royal Cornwall Hospital'},
		{lat: 50.716345, lng: -3.509767,info: 'Royal Devon and Exeter Hospital'},
		{lat: 51.382553, lng: -2.361011,info: 'Royal National Hospital For Rheumatic Diseases'},
		{lat: 51.37833, lng: -2.36257,info: 'Royal United Hospital'},
		{lat: 50.698556, lng: -1.927939,info: 'St Anns Hospital'},
		{lat: 51.459972, lng: -2.599258,info: 'St Michaels Hospital'},
		{lat: 50.178229, lng: -5.425444,info: 'St Michaels Hospital'},
		{lat: 51.046253, lng: -1.790797,info: 'Salisbury District Hospital, Salisbury'},
		{lat: 51.497221, lng: -2.59299,info: 'Southmead Hospital, Bristol'},
		{lat: 51.07306, lng: -1.80925,info: 'Salisbury, Old Manor Hospital (E-bound)'},
		{lat: 50.482736, lng: -3.550966,info: 'Torbay District General Hospital'},
		{lat: 50.122186, lng: -5.542433,info: 'West Cornwall Hospital'},
		{lat: 51.004661, lng: -2.200173,info: 'Westminster Memorial'},
		{lat: 51.321151, lng: -2.971394,info: 'Weston General Hospital'},
		{lat: 52.176175, lng: 0.144475,info: 'Addenbrookes Hospital'},
		{lat: 52.141993, lng: -0.459666,info: 'Bedford Hospital (North Wing)'},
		{lat: 51.774535, lng: 0.465457,info: 'Broomfield Hospital A & E'},
		{lat: 51.910417, lng: 0.899645,info: 'Colchester General Hospital'},
		{lat: 52.584794, lng: -0.27847,info: 'Edith Cavell Hospital, Peterborough'},
		{lat: 52.058759, lng: 1.198153,info: 'Ipswich Hospital'},
		{lat: 52.561705, lng: 1.720026,info: 'Gorleston, James Paget Hospital B (N-bound)'},
		{lat: 51.924194, lng: -0.211891,info: 'Lister Hospital'},
		{lat: 51.893663, lng: -0.475115,info: 'Luton & Dunstable Hospital, Luton'},
		{lat: 52.616566, lng: 1.22119,info: 'Norfolk and Norwich University Hospital'},
		{lat: 52.633532, lng: 1.264498,info: 'Norwich Community Hospital'},
		{lat: 52.24799, lng: -0.11662,info: 'Papworth Everard, Papworth Hospital (o/s)'},
		{lat: 51.771567, lng: 0.086645,info: 'Princess Alexandra Hospital, Harlow'},
		{lat: 52.756944, lng: 0.445847,info: 'The Queen Elizabeth Hospital Kings Lynn NHS Trust'},
		{lat: 51.782985, lng: -0.187283,info: 'Queen Elizabeth II Hospital'},
		{lat: 52.040977, lng: 0.749265,info: 'St Leonards Hospital'},
		{lat: 52.039773, lng: 0.725069,info: 'Walnuttree Hospital'},
		{lat: 52.231621, lng: 0.709216,info: 'West Suffolk Hospital'},
		{lat: 53.236034, lng: -1.397817,info: 'Chesterfield & North Derbyshire Royal Hospital'},
		{lat: 52.911551, lng: -1.514268,info: 'Derby City General Hospital'},
		{lat: 52.90977, lng: -1.51273,info: 'Mickleover, Childrens Hospital (adj)'},
		{lat: 52.914234, lng: -1.468573,info: 'Derbyshire Royal Infirmary'},
		{lat: 52.653655, lng: -1.1793,info: 'Glenfield General Hospital, Leicester'},
		{lat: 52.921829, lng: -0.641241,info: 'Grantham & District Hospital'},
		{lat: 52.402078, lng: -0.741147,info: 'Kettering General Hospital'},
		{lat: 52.627788, lng: -1.134796,info: 'Leicester Royal Infirmary'},
		{lat: 53.234091, lng: -0.514655,info: 'Lincoln County Hospital'},
		{lat: 53.369759, lng: -0.008583,info: 'County Hospital Louth'},
		{lat: 52.990964, lng: -1.157456,info: 'Nottingham City Hospital'},
		{lat: 53.466524, lng: -2.930983,info: 'the walton centre for neurology and neurosurgery'},
		{lat: 52.94287, lng: -1.18296,info: 'Queens Medical Centre, South Road (SW-bound)'},
		{lat: 52.232198, lng: -0.872592,info: 'St Andrews Hospital'},
		{lat: 52.236192, lng: -0.882639,info: 'Northampton General Hospital'},
		{lat: 52.231621, lng: 0.709216,info: 'West Suffolk Hospital'},
		{lat: 54.655824, lng: -1.680243,info: 'Bishop Auckland General Hospital'},
		{lat: 54.654853, lng: -1.680856,info: 'Auckland Park Hospital'},
		{lat: 54.86473, lng: -1.57453,info: 'Chester-le-Street, Highfield Hospital (N-bound)'},
		{lat: 54.778781, lng: -1.585603,info: 'County Hospital'},
		{lat: 54.594, lng: -1.332034,info: 'Cleveland Nuffield Hospital'},
		{lat: 54.798518, lng: -1.6134,info: 'Earls House Hospital'},
		{lat: 54.529631, lng: -1.564372,info: 'Darlington Memorial Hospital'},
		{lat: 54.998383, lng: -1.593855,info: 'Freeman Hospital'},
		{lat: 54.969581, lng: -2.09295,info: 'Hexham General Hospital'},
		{lat: 54.556338, lng: -1.217081,info: 'The James Cook University Hospital'},
		{lat: 54.516997, lng: -1.431911,info: 'Middleton St George Hospital'},
		{lat: 54.974386, lng: -1.64302,info: 'Newcastle General Hospital, Weston Court'},
		{lat: 55.025744, lng: -1.466333,info: 'North Tyneside General Hospital'},
		{lat: 54.93863, lng: -1.58357,info: 'Queen Elizabeth Hospital, Gateshead'},
		{lat: 54.97858, lng: -1.618437,info: 'Royal Victoria Infirmary'},
		{lat: 54.556103, lng: -1.215462,info: 'St Lukes Hospital'},
		{lat: 55.006344, lng: -1.634747,info: 'St Nicholas Hospital'},
		{lat: 54.86797, lng: -1.84499,info: 'Shotley Bridge, Hospital (north) (NE-bound)'},
		{lat: 54.971818, lng: -1.429214,info: 'South Tyneside District Hospital'},
		{lat: 54.788916, lng: -1.592917,info: 'University Hospital Of North Durham'},
		{lat: 54.702396, lng: -1.227989,info: 'University Hospital Of Hartlepool'},
		{lat: 54.582936, lng: -1.346766,info: 'North Tees University Hospital'},
		{lat: 55.184311, lng: -1.546597,info: 'Wansbeck General Hospital'},
		{lat: 54.548675, lng: -1.252187,info: 'West Lane Hospital'},
		{lat: 54.5466, lng: -1.5865,info: 'West Park Hospital'},
		{lat: 52.991266, lng: -0.009613,info: 'Pilgrim Hospital'},
		{lat: 53.715427, lng: -0.8745,info: 'Goole & District Hospital'},
		{lat: 53.993695, lng: -1.5163,info: 'Harrogate District Hospital'},
		{lat: 53.915273, lng: -0.168214,info: 'Hornsea Cottage Hospital'},
		{lat: 53.739374, lng: -0.43507,info: 'Hull and East Riding Hospital'},
		{lat: 53.779085, lng: -0.436886,info: 'Nuffield Hospital Hull'},
		{lat: 53.743916, lng: -0.358321,info: 'Hull Royal Infirmary'},
		{lat: 54.137148, lng: -0.806526,info: 'Malton Norton & District'},
		{lat: 54.135422, lng: -1.527186,info: 'Ripon Community Hospital'},
		{lat: 53.554993, lng: -0.071411,info: 'St Hughs Hospital'},
		{lat: 54.281711, lng: -0.434675,info: 'Scarborough General Hospital'},
		{lat: 54.483883, lng: -0.616521,info: 'Whitby Community Hospital'},
		{lat: 53.728938, lng: 0.033602,info: 'Withernsea Hospital'},
		{lat: 53.970561, lng: -1.083643,info: 'Clifton, York District Hospital (N-bound)'},
		{lat: 53.370273, lng: -3.096771,info: 'Arrowe Park Hospital'},
		{lat: 53.519035, lng: -2.916055,info: 'Ashworth Hospital'},
		{lat: 53.410119, lng: -2.964326,info: 'Royal Liverpool University Hospital'},
		{lat: 53.421239, lng: -2.89782,info: 'Alder Hey Childrens Hospital'},
		{lat: 53.387752, lng: -2.352051,info: 'Altrincham General Hospital'},
		{lat: 53.520552, lng: -2.71328,info: 'Billinge Hospital'},
		{lat: 53.642077, lng: -2.124932,info: 'Birch Hill Hospital'},
		{lat: 53.82123, lng: -3.01662,info: 'Blackpool Victoria Hospital (To Blackpool) (E-bound)'},
		{lat: 53.524428, lng: -2.204281,info: 'Booth Hall Childrens Hospital'},
		{lat: 53.409784, lng: -2.897664,info: 'Broadgreen Hospital'},
		{lat: 53.809829, lng: -2.228173,info: 'Burnley General Hospital'},
		{lat: 54.89607, lng: -2.9584,info: 'Cumberland Infirmary, Carlisle'},
		{lat: 53.208375, lng: -2.898417,info: 'Countess of Chester Hospital'},
		{lat: 53.600499, lng: -2.255346,info: 'Fairfield General Hospital'},
		{lat: 53.467911, lng: -2.935155,info: 'Fazakerley Hospital'},
		{lat: 54.136698, lng: -3.209102,info: 'Furness General Hospital'},
		{lat: 53.487537, lng: -2.323437,info: 'Salford Royal'},
		{lat: 53.503387, lng: -2.512635,info: 'Leigh Infirmary'},
		{lat: 53.262245, lng: -2.141594,info: 'Macclesfield District Hospital'},
		{lat: 53.462308, lng: -2.228926,info: 'Manchester Royal Eye Hospital'},
		{lat: 53.462427, lng: -2.227721,info: 'Manchester Royal Infirmary'},
		{lat: 53.33746, lng: -2.576348,info: 'Cheshire Hospital'},
		{lat: 53.373001, lng: -2.266062,info: 'Manchester (North Manchester General Hospital)'},
		{lat: 53.62386, lng: -2.15867,info: 'Rochdale Infirmary'},
		{lat: 53.557368, lng: -2.628666,info: 'Royal Albert Edward Infirmary, Wigan'},
		{lat: 53.737848, lng: -2.472509,info: 'Royal Blackburn Hospital'},
		{lat: 53.55436, lng: -2.425,info: 'Royal Bolton Hospital, Bolton'},
		{lat: 53.553436, lng: -2.121134,info: 'The Royal Oldham Hospital'},
		{lat: 53.790872, lng: -2.704504,info: 'Co-Operative Bank Plc (Royal Preston Hospital)'},
		{lat: 53.3852, lng: -2.13163,info: 'Stepping Hill Hospital'},
		{lat: 53.49359, lng: -2.069893,info: 'Tameside General Hospital'},
		{lat: 53.454051, lng: -2.370694,info: 'Trafford General Hospital'},
		{lat: 53.394263, lng: -2.610261,info: 'Warrington Hospital'},
		{lat: 54.306107, lng: -2.732613,info: 'Kendal, Westmorland General Hospital (S-bound)'},
		{lat: 53.420312, lng: -2.784648,info: 'Whiston Hospital'},
		{lat: 53.476463, lng: -2.22603,info: 'Withington (Hospital)'},
		{lat: 53.38834, lng: -2.292752,info: 'Wythenshawe Hospital'},
		{lat: 53.507335, lng: -2.318325,info: 'Royal Manchester Childrens Hospital'},
		{lat: 53.55917, lng: -1.497434,info: 'Barnsley Hospital NHS Foundation Trust'},
		{lat: 53.345084, lng: -1.350511,info: 'Beighton Community Hospital'},
		{lat: 53.366559, lng: -1.502209,info: 'community paediatrics centenary house'},
		{lat: 53.37578, lng: -1.53516,info: 'Claremont Hospital'},
		{lat: 53.430425, lng: -1.352147,info: 'Doncaster Gate Hospital'},
		{lat: 53.530758, lng: -1.109249,info: 'Doncaster Royal Infirmary'},
		{lat: 53.379383, lng: -1.49391,info: 'The Jessop Wing'},
		{lat: 53.499804, lng: -1.284937,info: 'Montagu Hospital'},
		{lat: 53.36073, lng: -1.49247,info: 'Nether Edge, Union Road/Nether Edge Hospital (N-bound)'},
		{lat: 53.410221, lng: -1.468745,info: 'Northern General Hospital'},
		{lat: 53.537201, lng: -1.100827,info: 'Capio Park Hill Hospital'},
		{lat: 53.37846, lng: -1.493461,info: 'Royal Hallamshire Hospital'},
		{lat: 53.380536, lng: -1.49123,info: 'Sheffield Childrens Hospital, Sheffield'},
		{lat: 53.363155, lng: -1.492064,info: 'Shirle Hill Hospital School'},
		{lat: 53.494802, lng: -1.145963,info: 'St Catherines Hospital'},
		{lat: 53.383715, lng: -1.488542,info: 'St Georges Community Health Centre'},
		{lat: 53.374335, lng: -1.517514,info: 'Thornbury Hospital'},
		{lat: 53.378678, lng: -1.498396,info: 'Weston Park Hospital'},
		{lat: 53.898015, lng: -1.962697,info: 'Airedale General Hospital'},
		{lat: 52.48498, lng: -1.894521,info: 'Birmingham Childrens Hospital'},
		{lat: 52.458092, lng: -1.932239,info: 'Nuffield Hospital Birmingham'},
		{lat: 52.453155, lng: -1.942253,info: 'Birmingham Womens Hospital'},
		{lat: 52.489792, lng: -1.929437,info: 'City Hospital'},
		{lat: 52.067213, lng: -1.622543,info: 'Ellen Badger Hospital'},
		{lat: 52.56807, lng: -1.80888,info: 'Whitehouse Common, Good Hope Hospital (opp)'},
		{lat: 52.477847, lng: -1.827538,info: 'Heartlands Hospital'},
		{lat: 52.445892, lng: -1.892901,info: 'Moseley Hall Hospital'},
		{lat: 52.59853, lng: -2.09309,info: 'New Cross, New Cross Hospital (S-Bound)'},
		{lat: 52.712429, lng: -2.510555,info: 'The Princess Royal Hospital'},
		{lat: 52.89464, lng: -3.037396,info: 'Robert Jones and Agnes Hunt Orthopaedic and District Hospital NHS Trust'},
		{lat: 52.456723, lng: -1.911374,info: 'The Priory Hospital'},
		{lat: 52.421104, lng: -1.960838,info: 'The Royal Orthopaedic Hospital'},
		{lat: 52.472054, lng: -1.956941,info: 'Woodbourne Priory Hospital'},
		{lat: 52.70766, lng: -2.792459,info: 'Royal Shrewsbury Hospital, Shrewsbury'},
		{lat: 52.523079, lng: -1.977042,info: 'Sandwell General Hospital'},
		{lat: 52.436049, lng: -1.933465,info: 'Selly Oak Hospital'},
		{lat: 52.420456, lng: -1.761817,info: 'Spire Parkway Hospital'},
		{lat: 52.288545, lng: -1.594098,info: 'St Michaels Hospital'},
		{lat: 52.417084, lng: -1.774806,info: 'Solihull Hospital'},
		{lat: 52.811296, lng: -2.097752,info: 'Staffordshire General Hospital'},
		{lat: 52.194762, lng: -1.712218,info: 'Stratford Upon Avon Hospital'},
		{lat: 52.421436, lng: -1.44181,info: 'University Hospital Coventry'},
		{lat: 53.00427, lng: -2.21537,info: 'University Hospital Of North Staffordshire NHS Trust'},
		{lat: 53.00788, lng: -2.20004,info: 'North Staffordshire Royal Infirmary'},
		{lat: 52.289964, lng: -1.583221,info: 'Warwick Hospital'},
		{lat: 52.308909, lng: -1.543365,info: 'The Warwickshire Nuffield Hospital'},
		{lat: 52.398322, lng: -1.952667,info: 'West Heath Hospital'},
		{lat: 52.190539, lng: -2.179312,info: 'Worcestershire Royal Hospital'},
		{lat: 51.649, lng: -0.404457,info: 'Watford General Hospital'},
		{lat: 53.807293, lng: -1.519072,info: 'St James University Hospital'},
		{lat: 51.390527, lng: -2.391563,info: 'Royal United Hospital, Bath'},
		{lat: 51.018014, lng: -4.21386,info: 'Bideford and District Hospital'},
		{lat: 54.01226, lng: -0.423091,info: 'Alfred Bean Hospital'},
		{lat: 53.841646, lng: -0.440089,info: 'Westwood Hospital'},
		{lat: 54.085874, lng: -0.217181,info: 'Bridlington & District Hospital'},
		{lat: 53.777833, lng: -0.438769,info: 'Castle Hill Hospital'},
		{lat: 53.544854, lng: -0.096179,info: 'The Diana Princess Of Wales Hospital'},
		{lat: 53.805885, lng: -1.797016,info: 'Bradford Royal Infirmary'},
		{lat: 53.704891, lng: -1.856664,info: 'The Calderdale Royal Hospital'},
		{lat: 53.719059, lng: -1.369901,info: 'Castleford, Normanton & District Hospital'},
		{lat: 53.8226, lng: -1.5298,info: 'Chapel Allerton Hospital'},
		{lat: 53.688438, lng: -1.502998,info: 'Clayton Hospital'},
		{lat: 53.701143, lng: -1.651583,info: 'Dewsbury and District Hospital'},
		{lat: 53.698027, lng: -1.491828,info: 'Fieldhead Hospital'},
		{lat: 53.800966, lng: -1.551021,info: 'Leeds General Infirmary'},
		{lat: 53.809726, lng: -1.805353,info: 'District Trust'},
		{lat: 53.655292, lng: -1.814513,info: 'Huddersfield Royal Infirmary'},
		{lat: 53.740438, lng: -1.423317,info: 'Methley Park Hospital'},
		{lat: 53.695474, lng: -1.485566,info: 'Pinderfields General Hospital'},
		{lat: 53.689735, lng: -1.309587,info: 'Pontefract General Infirmary'},
		{lat: 53.784492, lng: -1.761525,info: 'St Lukes Hospital'},
		{lat: 53.634644, lng: -1.810137,info: 'St Lukes Hospital'},
		{lat: 53.8049, lng: -1.471586,info: 'Seacroft Hospital'}
	]
	
	var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
	  icon: '../Images/hospital.png'
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
		return marker;
	});
	
	var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	
}





//TASK 4 - KML 2
function draw_map2(){
	
	var map = new google.maps.Map(document.getElementById("map_space2"),{
		center: new google.maps.LatLng(51.480355, -1.642440),
		zoom:7,
		//mapTypeId: 'terrain',
		mapTypeControl: false,
		styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#e05aa4"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "weight": 2.5
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 8
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      {
        "color": "#3ffc4d"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "stylers": [
      {
        "color": "#41fa4f"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e4a7e4"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
	});	
	

	function CenterControlCar(controlDiv, map, btnTitle) {

		// Set CSS for the control border.
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#fff';
		controlUI.style.border = '2px solid #fff';
		controlUI.style.borderRadius = '3px';
		controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
		controlUI.style.cursor = 'pointer';
		controlUI.style.marginBottom = '22px';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to add Car route';
		controlDiv.appendChild(controlUI);
		  
		// Set CSS for the control interior.
		var controlText = document.createElement('div');
		controlText.style.color = 'rgb(25,25,25)';
		controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
		controlText.style.fontSize = '16px';
		controlText.style.lineHeight = '38px';
		controlText.style.paddingLeft = '5px';
		controlText.style.paddingRight = '5px';
		controlText.innerHTML = btnTitle;
		controlUI.appendChild(controlText);

		// Setup the click event listeners: show the car map
		controlUI.addEventListener('click', function() {
			var srcCar = "https://ces-web2.southwales.ac.uk/students/15581802/KML/newRouteCardiffToLondon.kml";
			var kmlLayer = new google.maps.KmlLayer(srcCar,{
					preserveViewport: true,
					map: map
			})	
		});
	}
	
	function CenterControlTrain(controlDiv, map, btnTitle) {

		// Set CSS for the control border.
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#fff';
		controlUI.style.border = '2px solid #fff';
		controlUI.style.borderRadius = '3px';
		controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
		controlUI.style.cursor = 'pointer';
		controlUI.style.marginBottom = '22px';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to add Train route';
		controlDiv.appendChild(controlUI);
		  
		// Set CSS for the control interior.
		var controlText = document.createElement('div');
		controlText.style.color = 'rgb(25,25,25)';
		controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
		controlText.style.fontSize = '16px';
		controlText.style.lineHeight = '38px';
		controlText.style.paddingLeft = '5px';
		controlText.style.paddingRight = '5px';
		controlText.innerHTML = btnTitle;
		controlUI.appendChild(controlText);

		// Setup the click event listeners: show the car map
		controlUI.addEventListener('click', function() {
			var srcTrain = "https://ces-web2.southwales.ac.uk/students/15581802/KML/newDifftoLondonTrain.kml";
			var kmlLayer = new google.maps.KmlLayer(srcTrain,{
					preserveViewport: true,
					map: map
			})	
		});
	}
	
	function CenterControlCycle(controlDiv, map, btnTitle) {

		// Set CSS for the control border.
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#fff';
		controlUI.style.border = '2px solid #fff';
		controlUI.style.borderRadius = '3px';
		controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
		controlUI.style.cursor = 'pointer';
		controlUI.style.marginBottom = '22px';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to add Cycle route';
		controlDiv.appendChild(controlUI);
		  
		// Set CSS for the control interior.
		var controlText = document.createElement('div');
		controlText.style.color = 'rgb(25,25,25)';
		controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
		controlText.style.fontSize = '16px';
		controlText.style.lineHeight = '38px';
		controlText.style.paddingLeft = '5px';
		controlText.style.paddingRight = '5px';
		controlText.innerHTML = btnTitle;
		controlUI.appendChild(controlText);

		// Setup the click event listeners: show the car map
		controlUI.addEventListener('click', function() {
			var srcTrain = "https://ces-web2.southwales.ac.uk/students/15581802/KML/cyclingToLondon.kml";
			var kmlLayer = new google.maps.KmlLayer(srcTrain,{
					preserveViewport: true,
					map: map
			})	
		});
	}

  var centerControlDiv = document.createElement('div');
  var centerControl = new CenterControlCar(centerControlDiv, map, "By Car");
  
  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);  
  
  
  var centerControlDiv2 = document.createElement('div');
  var centerControl2 = new CenterControlTrain(centerControlDiv2, map, "By Train");
  
  centerControlDiv2.index = 2;
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv2);
  
  var centerControlDiv3 = document.createElement('div');
  var centerControl3 = new CenterControlCycle(centerControlDiv3, map, "By Cycling");
  
  centerControlDiv3.index = 3;
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv3);


}


//TASK 5 - KML 2
function draw_map3(){
	

	  
	var cardiff = [
          new Microsoft.Maps.Location(51.5196113,-3.2941367),
          new Microsoft.Maps.Location(51.4551363,-3.2811697),
          new Microsoft.Maps.Location(51.4582583,-3.1318347),
          new Microsoft.Maps.Location(51.4978043,-3.1343127)	  
      ];
	  
	var london = [
	      new Microsoft.Maps.Location(51.6774873,-0.6126137),
          new Microsoft.Maps.Location(51.2540243,-0.6046147),
          new Microsoft.Maps.Location(51.2803823,0.3388903),
          new Microsoft.Maps.Location(51.7043603,0.2878083)
    ];
	
	var edinburgh = [
	      new Microsoft.Maps.Location(56.012825,-3.4562787),
          new Microsoft.Maps.Location(55.859441,-3.4264717),
          new Microsoft.Maps.Location(55.879608,-3.0268007),
          new Microsoft.Maps.Location(55.99176,-3.0608787)
    ];
	
	var belfast = [
	      new Microsoft.Maps.Location(54.6356091,-6.0297967),
          new Microsoft.Maps.Location(54.5301081,-6.0232737),
          new Microsoft.Maps.Location(54.5433041,-5.8344457),
          new Microsoft.Maps.Location(54.5676159,-6.1825512)
    ];

    var locationCardiff = Microsoft.Maps.LocationRect.fromLocations(cardiff);
	var locationLondon = Microsoft.Maps.LocationRect.fromLocations(london);
	var locationEdinburgh = Microsoft.Maps.LocationRect.fromLocations(edinburgh);
	var locationBelfast = Microsoft.Maps.LocationRect.fromLocations(belfast);

	var map = new Microsoft.Maps.Map('#map_space3', {
        credentials: 'Aln-fyk_wB3McoozAuiwWLboymQsXGPD9HfFZ0323CsY7I2Bh3WTXUWF6LAKgb4x',
        center: new Microsoft.Maps.Location(54.064564,-3.609052),
		mapTypeId: Microsoft.Maps.MapTypeId.aerial,
		zoom: 6
    });

		//Load the Clustering module.
    Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function () {

        //Generate 1,000 random pushpins in the map view.
        var pinsWales = Microsoft.Maps.TestDataGenerator.getPushpins(335, locationCardiff);
		var pinsEngland = Microsoft.Maps.TestDataGenerator.getPushpins(8900, locationLondon);
		var pinsScotland = Microsoft.Maps.TestDataGenerator.getPushpins(482, locationEdinburgh);
		var pinsIreland = Microsoft.Maps.TestDataGenerator.getPushpins(280, locationBelfast);
        //Create a ClusterLayer and add it to the map.
		
        var clusterLayerWales = new Microsoft.Maps.ClusterLayer(pinsWales,{
				clusteredPinCallback: function(clusterPin){
					clusterPin.setOptions({ color: 'red' });
			}			
		});
		
		var clusterLayerEngland = new Microsoft.Maps.ClusterLayer(pinsEngland,{
				clusteredPinCallback: function(clusterPin){
					clusterPin.setOptions({ color: 'black' });
			}	
		});
		
		var clusterLayerScotland = new Microsoft.Maps.ClusterLayer(pinsScotland,{
				clusteredPinCallback: function(clusterPin){
					clusterPin.setOptions({ color: 'blue' });
			}	
		});
		
		var clusterLayerIreland = new Microsoft.Maps.ClusterLayer(pinsIreland,{
				clusteredPinCallback: function(clusterPin){
					clusterPin.setOptions({ color: 'green' });
			}	
		});
		
        map.layers.insert(clusterLayerWales);
		map.layers.insert(clusterLayerEngland);
		map.layers.insert(clusterLayerScotland);
		map.layers.insert(clusterLayerIreland);

    });
	
	var polgonCDF = new Microsoft.Maps.Polygon(cardiff, {
            fillColor: new Microsoft.Maps.Color(150, 0, 255, 0),
            strokeColor: new Microsoft.Maps.Color(150, 0, 0, 255)
        });
	map.entities.push(polgonCDF);

	var polgonLDN = new Microsoft.Maps.Polygon(london, {
            fillColor: new Microsoft.Maps.Color(150, 0, 255, 0),
            strokeColor: new Microsoft.Maps.Color(150, 0, 0, 255)
        });
	map.entities.push(polgonLDN);
	
	var polgonBFT = new Microsoft.Maps.Polygon(belfast, {
            fillColor: new Microsoft.Maps.Color(150, 0, 255, 0),
            strokeColor: new Microsoft.Maps.Color(150, 0, 0, 255)
        });
	map.entities.push(polgonBFT);

	var polgonEDN = new Microsoft.Maps.Polygon(edinburgh, {
            fillColor: new Microsoft.Maps.Color(150, 0, 255, 0),
            strokeColor: new Microsoft.Maps.Color(150, 0, 0, 255)
        });
	map.entities.push(polgonEDN);
	
	
	//Cardiff infobox
	infoboxDiff = new Microsoft.Maps.Infobox([51.478492, -3.174152], {
		title: 'Cardiff',
		description: 'Population: 335,145',
		visible: false
	});
	infoboxDiff.setMap(map);
	Microsoft.Maps.Events.addHandler(polgonCDF, 'click', polygonClickedCDF);
	function polygonClickedCDF(e) {
		infoboxDiff.setOptions({
			//Use the location of where the mouse was clicked to position the infobox.
			location: e.location,
			visible: true
		});
	}
	
	
	//Lodon infobox
	infoboxLDN = new Microsoft.Maps.Infobox([51.501211, -0.132503], {
		title: 'London',
		description: 'Population:  8,908,081',
		visible: false
	});
	infoboxLDN.setMap(map);
	Microsoft.Maps.Events.addHandler(polgonLDN, 'click', polygonClickedLDN);
	function polygonClickedLDN(e) {
		infoboxLDN.setOptions({
			//Use the location of where the mouse was clicked to position the infobox.
			location: e.location,
			visible: true
		});
	}
	
	//Edinburgh infobox
	infoboxEDN = new Microsoft.Maps.Infobox([555.952022, -3.187278], {
		title: 'Edinburgh',
		description: 'Population:  482,005',
		visible: false
	});
	infoboxEDN.setMap(map);
	Microsoft.Maps.Events.addHandler(polgonEDN, 'click', polygonClickedEDN);
	function polygonClickedEDN(e) {
		infoboxEDN.setOptions({
			//Use the location of where the mouse was clicked to position the infobox.
			location: e.location,
			visible: true
		});
	}
	
	
	
	//Belfact infobox
	infoboxBFT = new Microsoft.Maps.Infobox([54.594585, -5.92436], {
		title: 'Belfast',
		description: 'Population:  280,211',
		visible: false
	});
	infoboxBFT.setMap(map);
	Microsoft.Maps.Events.addHandler(polgonBFT, 'click', polygonClickedBFT);
	function polygonClickedBFT(e) {
		infoboxBFT.setOptions({
			//Use the location of where the mouse was clicked to position the infobox.
			location: e.location,
			visible: true
		});
	}
	
	newButtons.prototype = new Microsoft.Maps.CustomOverlay({ beneathLabels : false });
	
	function newButtons() {
            this.cardiffBTN = document.createElement('input');
            this.cardiffBTN.type = 'button';
            this.cardiffBTN.value = 'Cardiff';
            this.cardiffBTN.onclick = function () {
                map.setView({
					mapTypeId: Microsoft.Maps.MapTypeId.aerial,
					center: new Microsoft.Maps.Location(51.478492, -3.174152),
					zoom: 12,
				});
            };

            this.londonBTN = document.createElement('input');
            this.londonBTN.type = 'button';
            this.londonBTN.value = 'London';
            this.londonBTN.onclick = function () {
                map.setView({
					mapTypeId: Microsoft.Maps.MapTypeId.aerial,
					center: new Microsoft.Maps.Location(51.501211, -0.132503),
					zoom: 10
				});
            };

            this.edinBTN = document.createElement('input');
            this.edinBTN.type = 'button';
            this.edinBTN.value = 'Edinburgh';
            this.edinBTN.onclick = function () {
                map.setView({
					mapTypeId: Microsoft.Maps.MapTypeId.aerial,
					center: new Microsoft.Maps.Location(55.952022, -3.187278),
					zoom: 10
				});
            };

            this.belfastBTN = document.createElement('input');
            this.belfastBTN.type = 'button';
            this.belfastBTN.value = 'Belfast';
            this.belfastBTN.onclick = function () {
                map.setView({
					mapTypeId: Microsoft.Maps.MapTypeId.aerial,
					center: new Microsoft.Maps.Location(54.594585, -5.92436),
					zoom: 10
				}); 			
            };
        }
		
		newButtons.prototype.onAdd = function () {
            //Create a div that will hold pan buttons.
            var container = document.createElement('div');
            container.appendChild(this.cardiffBTN);
            container.appendChild(this.londonBTN);
            container.appendChild(this.edinBTN);
            container.appendChild(this.belfastBTN);
            container.style.position = 'absolute';
            container.style.top = '10px';
            container.style.left = '10px';
            this.setHtmlElement(container);
        };

        //Implement the new custom overlay class.
        var overlay = new newButtons();

        //Add the custom overlay to the map.
        map.layers.insert(overlay);
}



