

// title max 60 chars
//const fabio = [
//  {
//  	nr: "3/26",
//  	season: "2025-2026",
//  	date:   "08/08/2025",
//  	object: "OGGETTO: Orari provvisori gare nazionali periodo 01/10/2025 – 30/11/2025",
//    event: [
//  	  "01": {
//              month: "October",
//              date: "18-19 ottobre 2025",
//              location: "Ciserano (BG)",
//    	        title:  "1° Prova di Qualificazione Assoluti Zona 1 di FIO-SC – Ciserano (BG) 18-19 ottobre 2025",
//              schedule: { day: "sabato",   date: "18/10/2025", dis: "Fioretto Maschile",  calltime: "09:00" },
//              schedule: { day: "sabato",   date: "18/10/2025", dis: "Sciabola Femminile", calltime: "11:00" },
//              schedule: { day: "Domenica", date: "19/10/2025", dis: "Fioretto Femminile", calltime: "09:00" },
//              schedule: { day: "Domenica", date: "19/10/2025", dis: "Sciabola Maschile",  calltime: "12:00" }
//  	  	      streep:"24",
//    },
//  	  "02": {
//              month: "October",
//              date: "18-19 ottobre 2025",
//              location: "Terni (TR)",
//    	        title:  "1° Prova di Qualificazione Assoluti Zona 2 di FIO-SC",
//              schedule: { day: "sabato",   date: "18/10/2025", dis: "Fioretto Maschile",  calltime: "09:00" },
//              schedule: { day: "sabato",   date: "18/10/2025", dis: "Sciabola Femminile", calltime: "13:00" },
//              schedule: { day: "Domenica", date: "19/10/2025", dis: "Fioretto Femminile", calltime: "10:00" },
//              schedule: { day: "Domenica", date: "19/10/2025", dis: "Sciabola Maschile",  calltime: "10:00" }
//              streep:"20",
//    },
//  	  "03": {
//              month: "October",
//              date: "31 Ottobre – 2 Novembre 2025",
//              location: "Carrara (MS)",
//    	        title:  "1° Prova di Qualificazione Assoluti Zona 2 di FIO-SC",
//              schedule: { day: "Venerdì",  date: "31/10/2025", dis: "Cadetti Sciabola Maschile",   calltime: "11:00" },
//              schedule: { day: "Venerdì",  date: "31/10/2025", dis: "Cadette Sciabola Femminile",  calltime: "13:30" },
//              schedule: { day: "Sabato",   date: "01/11/2025", dis: "Giovani Sciabola Maschile",   calltime: "11:00" },
//              schedule: { day: "Sabato",   date: "01/11/2025", dis: "Giovani Sciabola Femminile",  calltime: "13:30" },
//              schedule: { day: "Domenica", date: "02/11/2025", dis: "Assoluti Sciabola Maschile",  calltime: "10:00" },
//              schedule: { day: "Domenica", date: "02/11/2025", dis: "Assoluti Sciabola Maschile",  calltime: "10:00" },
//              streep:"20",
//    },
// 	  "04": {
//              month: "November",
//              date: "8-9 novembre 2025",
//              location: " Brescia 8 (BS)",
//    	        title:  "1° prova Gran Prix Kinder Joy of Moving -14 di Fioretto – Brescia 8-9 novembre 2025",
//              schedule: { day: "Sabato",   date: "08/11/2025", dis: "Allievi Fioretto Maschile",       calltime: "08:30" },
//              schedule: { day: "Sabato",   date: "08/10/2025", dis: "Giovanissime Fioretto Femminile", calltime: "08:30" },
//              schedule: { day: "Sabato",   date: "08/11/2025", dis: "Giovanissimi Fioretto Maschile",  calltime: "12:00" },
//              schedule: { day: "Sabato",   date: "08/11/2025", dis: "Allieve Fioretto Femminile",      calltime: "13:30" },
//              schedule: { day: "Domenica", date: "09/11/2025", dis: "Maschietti Fioretto Maschile",    calltime: "08:00" },
//              schedule: { day: "Domenica", date: "09/11/2025", dis: "Ragazzi Fioretto Maschile",       calltime: "08:00" },
//              schedule: { day: "Domenica", date: "09/11/2025", dis: "Ragazze Fioretto Femminile",      calltime: "12:00" },
//              schedule: { day: "Domenica", date: "09/11/2025", dis: "Bambine Fioretto Femminile",      calltime: "14:00" }
//              streep:"20",
//    }
//  ]};



const eventlistb = [
  { id:  1,
  	nr: "3/26",
    season: "2025-2026",
    date:   "08-08-2025",
    object: "Orari provvisori gare nazionali periodo 01/10/2025 - 30/11/2025",
    event:[
     { id:  "2.1", location: "Busto Arsizio (VA)", title: "Memorial Cesare Vago- 2<sup>a</sup> Edzione",              date: "27-09-2025", category: "GPG", weapon: "Fioretto", season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.1", location: "Ciserano (BG)", title: "1<sup>a</sup> Prova di Qualificazione Assoluti - Zona 1",              date: "18-10-2025", category: "Assoluti", weapon: "Fioretto e Spada", season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.2", location: "Terni (TR)",    title: "1<sup>a</sup> Prova di Qualificazione Assoluti - Zona 2",              date: "18-10-2025", category: "Assoluti", weapon: "Fioretto e Spada", season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.3", location: "Carrara (MS)",  title: "1<sup>a</sup> Prova Nazionale Cadetti, Giovani ed Assoluti",           date: "18-10-2025", category: "Assoluti", weapon: "Fioretto e Spada", season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.4", location: "Brescia (BS)",  title: "1<sup>a</sup> Prova Gran Prix Kinder Joy of Moving - U14", date: "08-11-2025", category: "GPG", weapon: "Fioretto", season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.5", location: "Ravenna (RA)",  title: "1<sup>a</sup> Prova Gran Prix Kinder Joy of Moving - U14", date: "14-11-2025", category: "GPG", weapon: "Spada",   season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.6", location: "Terni (TR)",    title: "1<sup>a</sup> Prova Gran Prix Kinder Joy of Moving - U14", date: "14-11-2025", category: "GPG", weapon: "Sciabola",   season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.7", location: "Foggia (RA)",   title: "1<sup>a</sup> Prova Nazionale Cadetti, Giovani ed Assoluti", date: "21-11-2025", category: "GPG", weapon: "Fioretto",   season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"},
     { id:  "1.8", location: "Roma (RA)",     title: "1<sup>a</sup> Prova Nazionale Cadetti, Giovani ed Assoluti", date: "21-11-2025", category: "GPG", weapon: "Spada",   season: "2025-2026", description: "descrizione aggiuntiva", team:false, live:false, imgSx:"images/cn-fis.png"}               
    ]
  }
];





