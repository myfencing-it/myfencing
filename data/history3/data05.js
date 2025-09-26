//---------------------------------------------------
// Created by getDatafromWebFence.pl at 2025-09-17 17:55:39
//---------------------------------------------------
// Title
const datiTT = {category: "Fioretto Maschile",title: "Rovigo 2 prova Gran Prix Kinder Joy of Moving fior",date:"12 Apr 25"};

// Gironi
const dati = {
// Girone 1
"01": {
  pool: [
    { atleta: "TARDELLI Gabriele",                flag: "it", rank: "128",  value: [NN;V5;V5;D0;V5;V5;V5  ], club: "PISCH" country:"ITA" },
    { atleta: "SILIOTTO Pietro",                  flag: "it", rank: "33",   value: [D4;NN;V5;D3;V5;D3;V5  ], club: "PICIO" country:"ITA" },
    { atleta: "TRAVERSA Leonardo",                flag: "it", rank: "77",   value: [D4;D2;NN;D2;V5;V5;V5  ], club: "LTGGS" country:"ITA" },
    { atleta: "SARTOGO Tiziano",                  flag: "it", rank: "1",    value: [V5;V5;V5;NN;V5;V5;V5  ], club: "UDASU" country:"ITA" },
    { atleta: "MUCO Kiren",                       flag: "it", rank: "126",  value: [D2;D1;D0;D1;NN;D3;D3  ], club: "TVCS"  country:"ITA" },
    { atleta: "GHEORGHIU Francesco",              flag: "it", rank: "76",   value: [D2;V5;D1;D2;V5;NN;V5  ], club: "MICRI" country:"ITA" },
    { atleta: "SACCHETTA Andrea",                 flag: "it", rank: "34",   value: [D1;D1;D4;D2;V5;D3;NN  ], club: "SSSAS" country:"ITA" }
  ],

// Girone 2
"02": {
  pool: [
    { atleta: "CENCI Matteo",                     flag: "it", rank: "75",   value: [NN;V5;D2;V5;D1;V5;V5  ], club: "LICS"  country:"ITA" },
    { atleta: "BALZIA Jan",                       flag: "it", rank: "80",   value: [D1;NN;D0;D2;D0;V5;V5  ], club: "TSSG"  country:"ITA" },
    { atleta: "BARBANTI Filippo",                 flag: "it", rank: "35",   value: [V5;V5;NN;D1;D1;V5;V5  ], club: "SPCS"  country:"ITA" },
    { atleta: "ALTOBELLI Lorenzo",                flag: "it", rank: "32",   value: [D2;V5;V5;NN;D0;V5;V5  ], club: "RMFRC" country:"ITA" },
    { atleta: "FELICI Evan",                      flag: "it", rank: "2",    value: [V5;V5;V5;V5;NN;V5;V5  ], club: "ANJES" country:"ITA" },
    { atleta: "HLEBOWICZ Iacopo",                 flag: "it", rank: "129",  value: [D4;D1;D4;D4;D0;NN;D3  ], club: "FIRAG" country:"ITA" },
    { atleta: "SABRIE Adriano",                   flag: "it", rank: "124",  value: [D0;D2;D1;D1;D1;V5;NN  ], club: "RMVER" country:"ITA" }
  ],

// Girone 3
"03": {
  pool: [
    { atleta: "GROPOSILA Gabriel",                flag: "it", rank: "119",  value: [NN;D1;D0;D1;D1;V5;D1  ], club: "MNMAN" country:"ITA" },
    { atleta: "SALVATORE Mattia",                 flag: "it", rank: "3",    value: [V5;NN;V5;V5;V5;V5;V5  ], club: "BSSAL" country:"ITA" },
    { atleta: "MARTINAZZO Giulio",                flag: "it", rank: "81",   value: [V5;D1;NN;V5;V3;D0;D2  ], club: "TVMON" country:"ITA" },
    { atleta: "RIZZOLO Enea Celio",               flag: "it", rank: "130",  value: [V5;D0;D3;NN;D2;D4;D0  ], club: "TVCAS" country:"ITA" },
    { atleta: "BIANCHI Sebastian",                flag: "it", rank: "74",   value: [V5;D3;D2;V5;NN;V5;D1  ], club: "LUTBB" country:"ITA" },
    { atleta: "CAMPANALE Alessandro",             flag: "it", rank: "36",   value: [D3;D4;V5;V5;D1;NN;D0  ], club: "MBMOZ" country:"ITA" },
    { atleta: "BRUNO Andrea",                     flag: "it", rank: "30",   value: [V5;D2;V5;V5;V5;V5;NN  ], club: "BOZIN" country:"ITA" }
  ],

// Girone 4
"04": {
  pool: [
    { atleta: "RAPPAZZO Giulio",                  flag: "it", rank: "72",   value: [NN;V5;D1;V5;;D4;V5    ], club: "TVMOG" country:"ITA" },
    { atleta: "MANENTI Edoardo",                  flag: "it", rank: "37",   value: [D4;NN;D4;D4;;D4;V5    ], club: "MOPEN" country:"ITA" },
    { atleta: "FERRARI Riccardo",                 flag: "it", rank: "83",   value: [V5;V5;NN;D3;;D2;V5    ], club: "VRBEN" country:"ITA" },
    { atleta: "COPPOLA Martin",                   flag: "it", rank: "29",   value: [D3;V5;V5;NN;;D1;V5    ], club: "SACS"  country:"ITA" },
    { atleta: "MARTUCCI Nicolo'",                 flag: "it", rank: "118",  value: [A;A;A;A;NN;A;A        ], club: "MICRI" country:"ITA" },
    { atleta: "CATARZI Neri",                     flag: "it", rank: "4",    value: [V5;V5;V5;V5;;NN;V5    ], club: "FIRAG" country:"ITA" },
    { atleta: "INVERARDI Luca",                   flag: "it", rank: "131",  value: [D0;D0;D4;D3;;D0;NN    ], club: "BSSEB" country:"ITA" }
  ],

// Girone 5
"05": {
  pool: [
    { atleta: "MAZZUCATO MEZZ Ettore",            flag: "it", rank: "28",   value: [NN;V4;V5;V5;V5;V5;V5  ], club: "PDCOM" country:"ITA" },
    { atleta: "DE PELLEGRINI Simone",             flag: "it", rank: "133",  value: [D3;NN;V5;V5;V5;D2;D2  ], club: "TVCON" country:"ITA" },
    { atleta: "GRANATA Helmut",                   flag: "it", rank: "117",  value: [D1;D0;NN;D1;D1;D0;D1  ], club: "MIMAN" country:"ITA" },
    { atleta: "D'ACRI Alessandro",                flag: "it", rank: "85",   value: [D3;D3;V5;NN;V5;D4;D1  ], club: "VAPPR" country:"ITA" },
    { atleta: "IMBRICI Nicolo'",                  flag: "it", rank: "70",   value: [D1;D4;V5;D2;NN;D1;D0  ], club: "CODOC" country:"ITA" },
    { atleta: "GUERRINI Pietro",                  flag: "it", rank: "38",   value: [D4;V5;V5;V5;V5;NN;D0  ], club: "UDASU" country:"ITA" },
    { atleta: "BOZZOLAN Antonio",                 flag: "it", rank: "5",    value: [D4;V5;V5;V5;V5;V5;NN  ], club: "TVMOG" country:"ITA" }
  ],

// Girone 6
"06": {
  pool: [
    { atleta: "CASTAGNINI Alessandro",            flag: "it", rank: "39",   value: [NN;V5;D3;V5;D4;V5;D4  ], club: "SICUS" country:"ITA" },
    { atleta: "CARLONI Giovanni",                 flag: "it", rank: "136",  value: [D0;NN;D3;D1;D0;D0;D2  ], club: "ANCSM" country:"ITA" },
    { atleta: "VECE Ludovico",                    flag: "it", rank: "66",   value: [V5;V5;NN;D0;D1;D3;V5  ], club: "MIDIF" country:"ITA" },
    { atleta: "DE PAOLIS Federico",               flag: "it", rank: "27",   value: [D4;V5;V5;NN;V5;V5;V5  ], club: "PICIO" country:"ITA" },
    { atleta: "CAFIERO Giorgio",                  flag: "it", rank: "6",    value: [V5;V5;V5;D3;NN;V5;V5  ], club: "MIBRE" country:"ITA" },
    { atleta: "VETTORETTO Niccolo'",              flag: "it", rank: "115",  value: [D3;V5;V5;D0;D2;NN;V5  ], club: "TVMON" country:"ITA" },
    { atleta: "DICIOCIA Riccardo",                flag: "it", rank: "87",   value: [V5;V5;D3;D1;D1;D0;NN  ], club: "MOPEN" country:"ITA" }
  ],

// Girone 7
"07": {
  pool: [
    { atleta: "TOGNON Riccardo",                  flag: "it", rank: "116",  value: [NN;D4;D1;D4;D0;;D1    ], club: "PDCOM" country:"ITA" },
    { atleta: "GROSSI Leonardo",                  flag: "it", rank: "136",  value: [V5;NN;V5;D0;D0;;D0    ], club: "ANJES" country:"ITA" },
    { atleta: "CHIUCCHI Simone",                  flag: "it", rank: "88",   value: [V5;D3;NN;D0;D1;;D0    ], club: "ANFAB" country:"ITA" },
    { atleta: "CAMURRI Andrea",                   flag: "it", rank: "65",   value: [V5;V5;V5;NN;V5;;D0    ], club: "MNMAN" country:"ITA" },
    { atleta: "BANCHINI Dario",                   flag: "it", rank: "41",   value: [V5;V5;V5;D4;NN;;D3    ], club: "PINAV" country:"ITA" },
    { atleta: "MATTIUZZO Giacinto",               flag: "it", rank: "26",   value: [A;A;A;A;A;NN;A        ], club: "TVMON" country:"ITA" },
    { atleta: "IAQUINTA Davide Rocco",            flag: "it", rank: "7",    value: [V5;V5;V5;V5;V5;;NN    ], club: "RMFRC" country:"ITA" }
  ],

// Girone 8
"08": {
  pool: [
    { atleta: "ARCECI Matteo",                    flag: "it", rank: "90",   value: [NN;V5;D3;D2;D2;D2;D0  ], club: "PSUNU" country:"ITA" },
    { atleta: "MAFFEI Alessandro",                flag: "it", rank: "111",  value: [D2;NN;D2;D3;D1;D0;D0  ], club: "MOPEN" country:"ITA" },
    { atleta: "PETRACCHINI Alessandro",           flag: "it", rank: "63",   value: [V5;V5;NN;D3;D1;D2;D1  ], club: "TOCH4" country:"ITA" },
    { atleta: "D'ASSIE ROBSON Filho",             flag: "it", rank: "135",  value: [V5;V5;V5;NN;D1;D3;D1  ], club: "TVMON" country:"ITA" },
    { atleta: "CHETTA Matteo",                    flag: "it", rank: "42",   value: [V5;V5;V5;V5;NN;V5;V5  ], club: "UDASU" country:"ITA" },
    { atleta: "COBUZIO Simone",                   flag: "it", rank: "25",   value: [V5;V5;V5;V5;D4;NN;D3  ], club: "SRCS"  country:"ITA" },
    { atleta: "BURZI Alberto",                    flag: "it", rank: "8",    value: [V5;V5;V5;V5;D4;V5;NN  ], club: "ARCS"  country:"ITA" }
  ],

// Girone 9
"09": {
  pool: [
    { atleta: "MARIO Nicolo'",                    flag: "it", rank: "91",   value: [NN;D3;D2;D0;V5;D2;V5  ], club: "PDANT" country:"ITA" },
    { atleta: "DONNA Giordano",                   flag: "it", rank: "43",   value: [V5;NN;D2;D1;V5;D3;V5  ], club: "BSSEB" country:"ITA" },
    { atleta: "MAUTONE Mattia",                   flag: "it", rank: "61",   value: [V5;V5;NN;D3;V5;D0;V5  ], club: "TORAM" country:"ITA" },
    { atleta: "JOVON Luciano",                    flag: "it", rank: "24",   value: [V5;V5;V5;NN;V5;V5;V5  ], club: "VEMES" country:"ITA" },
    { atleta: "ASCENZI Davide",                   flag: "it", rank: "109",  value: [D1;D0;D2;D0;NN;D1;V5  ], club: "PINAV" country:"ITA" },
    { atleta: "MATOLA Niccolo'",                  flag: "it", rank: "9",    value: [V5;V5;V5;D1;V5;NN;V5  ], club: "RMFRC" country:"ITA" },
    { atleta: "D'ERRICO Edoardo Adrian",          flag: "it", rank: "168",  value: [D4;D3;D4;D1;D4;D2;NN  ], club: "FIACC" country:"ITA" }
  ],

// Girone 10
"10": {
  pool: [
    { atleta: "ROLLA Edoardo",                    flag: "it", rank: "92",   value: [NN;D4;D2;D0;D1;V5;V5  ], club: "TOCH4" country:"ITA" },
    { atleta: "ROMANO Lorenzo",                   flag: "it", rank: "45",   value: [V5;NN;D4;D0;D0;V5;D4  ], club: "MIPIT" country:"ITA" },
    { atleta: "DESOGUS Matteo",                   flag: "it", rank: "23",   value: [V5;V5;NN;D4;D2;V5;V5  ], club: "MOPEN" country:"ITA" },
    { atleta: "DIGIACOMANTONIO Daniel",           flag: "it", rank: "10",   value: [V5;V5;V5;NN;V5;V5;V5  ], club: "RMVER" country:"ITA" },
    { atleta: "CALVO Theodor",                    flag: "it", rank: "60",   value: [V5;V5;V5;D0;NN;V5;V5  ], club: "MIMAN" country:"ITA" },
    { atleta: "GOMARASCA Federico",               flag: "it", rank: "108",  value: [D3;D0;D1;D0;D2;NN;V5  ], club: "MIAMB" country:"ITA" },
    { atleta: "CHEN Shengrui Luca",               flag: "it", rank: "171",  value: [D4;V5;D1;D0;D0;D2;NN  ], club: "TVCS"  country:"ITA" }
  ],

// Girone 11
"11": {
  pool: [
    { atleta: "PIRAS Giorgio",                    flag: "it", rank: "107",  value: [NN;D2;D0;D2;D2;V5;V5  ], club: "RMFRC" country:"ITA" },
    { atleta: "BERTELLONI Pietro",                flag: "it", rank: "46",   value: [V5;NN;D1;D0;V5;D1;V5  ], club: "MSMAL" country:"ITA" },
    { atleta: "ZANATTA Leonardo",                 flag: "it", rank: "21",   value: [V5;V5;NN;V5;V5;V5;V5  ], club: "TVCS"  country:"ITA" },
    { atleta: "PANICHI Gherardo",                 flag: "it", rank: "11",   value: [V5;V5;D4;NN;V5;V5;V5  ], club: "FIACC" country:"ITA" },
    { atleta: "VENTURINI Francesco",              flag: "it", rank: "94",   value: [V5;D2;D0;D1;NN;D0;V5  ], club: "VAPPR" country:"ITA" },
    { atleta: "NARDI Gabriele",                   flag: "it", rank: "59",   value: [D2;V5;D2;D3;V5;NN;V5  ], club: "TVCON" country:"ITA" },
    { atleta: "ADDOLORI Marco",                   flag: "it", rank: "148",  value: [D4;D2;D0;D2;D2;D1;NN  ], club: "VEMES" country:"ITA" }
  ],

// Girone 12
"12": {
  pool: [
    { atleta: "RAZZAUTI Alessandro",              flag: "it", rank: "12",   value: [NN;V5;V5;V5;V5;V5;V5  ], club: "RMFRC" country:"ITA" },
    { atleta: "FERONE Pietro",                    flag: "it", rank: "106",  value: [D1;NN;V5;D3;D1;D2;V5  ], club: "RMCS"  country:"ITA" },
    { atleta: "PESCE Leonardo Giulio",            flag: "it", rank: "47",   value: [D1;D4;NN;V5;V5;D2;V5  ], club: "UDASU" country:"ITA" },
    { atleta: "SCALCO Arturo Giovanni",           flag: "it", rank: "95",   value: [D1;V5;D0;NN;D2;D0;D3  ], club: "TVCS"  country:"ITA" },
    { atleta: "PAGNAN Giovanni",                  flag: "it", rank: "58",   value: [D2;V5;D2;V5;NN;D2;V5  ], club: "PDCOM" country:"ITA" },
    { atleta: "CURCI Gian Marco",                 flag: "it", rank: "20",   value: [D3;V5;V5;V5;V5;NN;V5  ], club: "FIRAG" country:"ITA" },
    { atleta: "FORTUNA Filippo",                  flag: "it", rank: "152",  value: [D2;D2;D0;V5;D0;D0;NN  ], club: "VICS"  country:"ITA" }
  ],

// Girone 13
"13": {
  pool: [
    { atleta: "FILIPPONE Francesco Karol",        flag: "it", rank: "18",   value: [NN;D3;V5;V5;V5;D1     ], club: "RMFRC" country:"ITA" },
    { atleta: "FORNERIS Francesco Louis",         flag: "it", rank: "13",   value: [V5;NN;V5;V5;V5;V5     ], club: "TOCHI" country:"ITA" },
    { atleta: "MAROTTA Davide",                   flag: "it", rank: "48",   value: [D2;D2;NN;V5;V5;D3     ], club: "MIDIF" country:"ITA" },
    { atleta: "GENTILINI Tommaso",                flag: "it", rank: "105",  value: [D0;D0;D4;NN;V5;D1     ], club: "SICUS" country:"ITA" },
    { atleta: "CHIARAMONTI Lorenzo",              flag: "it", rank: "96",   value: [D1;D3;D4;D4;NN;D4     ], club: "ANJES" country:"ITA" },
    { atleta: "BALLARINI Mauro",                  flag: "it", rank: "56",   value: [V5;D4;V5;V5;V5;NN     ], club: "RMCAP" country:"ITA" }
  ],

// Girone 14
"14": {
  pool: [
    { atleta: "AMADIO Adriano",                   flag: "it", rank: "14",   value: [NN;V5;V5;V4;V3;V5     ], club: "RMFRC" country:"ITA" },
    { atleta: "VITELLI Sergio",                   flag: "it", rank: "55",   value: [D1;NN;V5;V5;D3;V5     ], club: "LTGGS" country:"ITA" },
    { atleta: "GENITONI Alessandro",              flag: "it", rank: "97",   value: [D2;D1;NN;V5;D1;D3     ], club: "MIBRE" country:"ITA" },
    { atleta: "DI GIOIA Simone",                  flag: "it", rank: "49",   value: [D2;D3;D2;NN;D2;V5     ], club: "CNACC" country:"ITA" },
    { atleta: "MORETTO Nicolo'",                  flag: "it", rank: "19",   value: [D2;V5;V5;V5;NN;D2     ], club: "TVMOG" country:"ITA" },
    { atleta: "D'AMICO Vittorio",                 flag: "it", rank: "102",  value: [D1;D0;V5;D2;V5;NN     ], club: "RMCS"  country:"ITA" }
  ],

// Girone 15
"15": {
  pool: [
    { atleta: "TELLAROLI Fabio",                  flag: "it", rank: "99",   value: [NN;D4;V5;V5;D0;D0     ], club: "BSLEO" country:"ITA" },
    { atleta: "CUZZIOL Nicolo'",                  flag: "it", rank: "53",   value: [V5;NN;V5;D3;D2;D0     ], club: "TVCON" country:"ITA" },
    { atleta: "CAIONE Michele",                   flag: "it", rank: "98",   value: [D4;D2;NN;D1;D2;D2     ], club: "MNMAN" country:"ITA" },
    { atleta: "RECALCATI Enrico",                 flag: "it", rank: "54",   value: [D4;V5;V5;NN;V5;D4     ], club: "MICRI" country:"ITA" },
    { atleta: "MIGDA Matteo Gabriel",             flag: "it", rank: "17",   value: [V5;V5;V4;D4;NN;V5     ], club: "TVMOG" country:"ITA" },
    { atleta: "ORAZI Valerio",                    flag: "it", rank: "15",   value: [V5;V5;V5;V5;D3;NN     ], club: "RMFRC" country:"ITA" }
  ],

