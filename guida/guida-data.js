/* =========================================================
   CONTENUTO DELLA GUIDA PAGHEPRO  (testi in italiano semplice)
   Condiviso tra index.html (guida animata) e
   guida-stampabile.html (versione PDF). Modifica QUI i testi.
   ========================================================= */
const SLIDES = [
  {
    tipo:"hero", menu:"Benvenuto", icona:"👋",
    titolo:"Benvenuto in PaghePro",
    intro:"Lo studio digitale per buste paga, adempimenti, fatture e contabilità — tutto in un posto solo.",
    pills:["Buste paga","F24 e adempimenti","Fatturazione","Bilancio","Firma digitale","Scadenze automatiche"],
    narr:"Benvenuto in PaghePro, lo studio digitale tutto in uno. In questa guida ti mostro, passo dopo passo, come usare il software: dall'inserimento delle aziende clienti fino alle buste paga, agli F24 e alla firma digitale. Premi Avanti, oppure il tasto Riproduci per farti accompagnare con la voce."
  },
  {
    tipo:"feature", menu:"Come muoversi", icona:"🧭",
    titolo:"Come ci si muove",
    tagline:"L'interfaccia è sempre uguale: a sinistra il menu, in alto la ricerca e l'azienda su cui stai lavorando.",
    img:"img/v-dip-final.png", hotspot:{x:7,y:24},
    passi:[
      "A <b>sinistra</b> c'è il menu con tutte le sezioni: dipendenti, cedolini, adempimenti, fatture e così via. Ci clicchi e cambi schermata.",
      "In <b>alto a sinistra</b> scegli <b>l'azienda</b> su cui stai lavorando (qui “Rossi S.r.l.”). Tutto quello che vedi riguarda quell'azienda.",
      "La <b>barra di ricerca</b> in alto trova al volo un dipendente, un cedolino o un documento.",
      "I pulsanti <b>blu</b> in alto a destra sono sempre l'azione principale della pagina (es. “Nuovo dipendente”, “Calcola”, “Genera PDF”)."
    ],
    tip:"Regola d'oro: se cerchi il pulsante per “fare” qualcosa, guarda in alto a destra. È quasi sempre lì, in blu.",
    narr:"Prima di tutto, come ci si muove. L'interfaccia è sempre uguale. A sinistra trovi il menu con tutte le sezioni. In alto scegli l'azienda su cui stai lavorando e usi la ricerca. I pulsanti blu, in alto a destra, sono sempre l'azione principale della pagina. Se cerchi il pulsante per fare qualcosa, guarda in alto a destra."
  },
  {
    tipo:"feature", menu:"Aziende clienti", icona:"🏢",
    titolo:"1 · Aggiungi le aziende clienti",
    tagline:"Il primo passo: inserire le aziende per cui lavori. Sono la base di tutto il resto.",
    img:"img/v-aziende.png", hotspot:{x:48,y:74},
    passi:[
      "Apri <b>Aziende clienti</b> dal menu. Vedi l'elenco delle aziende già inserite e il loro stato.",
      "Compila i campi: <b>Nome azienda</b>, <b>Partita IVA</b>, indirizzo, comune, CAP e provincia.",
      "Premi <b>“Aggiungi azienda”</b>: l'azienda entra nell'archivio ed è pronta per dipendenti, paghe e fatture.",
      "Il riquadro <b>“Stato anagrafiche”</b> a destra ti dice quante aziende sono attive e se qualche scheda è incompleta."
    ],
    tip:"Inserisci almeno la Partita IVA: serve per F24, fatture elettroniche e adempimenti telematici.",
    narr:"Il primo passo è aggiungere le aziende clienti, cioè le aziende per cui lavori. Apri la sezione Aziende, compila nome, partita IVA e indirizzo, e premi Aggiungi azienda. Da quel momento l'azienda è pronta per ricevere dipendenti, buste paga e fatture. Il riquadro a destra ti avvisa se qualche scheda è ancora incompleta."
  },
  {
    tipo:"feature", menu:"Dipendenti", icona:"👥",
    titolo:"2 · Inserisci i dipendenti",
    tagline:"Per ogni azienda registri i lavoratori: nome, matricola, qualifica, livello e CCNL.",
    img:"img/v-dip-final.png", hotspot:{x:88,y:18},
    passi:[
      "Vai su <b>Dipendenti</b>: vedi l'archivio dei lavoratori dell'azienda selezionata.",
      "Premi <b>“+ Nuovo dipendente”</b> in alto a destra e inserisci i dati anagrafici e contrattuali.",
      "Indica <b>qualifica</b> (es. Impiegato), <b>livello</b> e <b>CCNL</b> (es. Commercio): servono al calcolo corretto della busta paga.",
      "Usa <b>“Apri”</b> sulla riga per rivedere o modificare la scheda di un dipendente."
    ],
    tip:"Hai la comunicazione UNILAV? Il software può creare il dipendente in automatico leggendo il file XML. Niente reinserimento a mano.",
    narr:"Secondo passo: i dipendenti. Per ogni azienda registri i lavoratori, premendo Nuovo dipendente. Inserisci nome, matricola, qualifica, livello e contratto collettivo: sono i dati che permettono di calcolare bene la busta paga. Se hai la comunicazione UNILAV, il software può creare il dipendente da solo leggendo il file."
  },
  {
    tipo:"feature", menu:"Cedolini", icona:"🧾",
    titolo:"3 · Calcola i cedolini (buste paga)",
    tagline:"Il cuore del software: selezioni i dipendenti e calcoli le buste paga del mese in un colpo solo.",
    img:"img/v-elaborazioni.png", hotspot:{x:90,y:9},
    passi:[
      "Apri <b>Elaborazioni</b> e scegli il <b>mese</b> (qui “Giugno 2026”).",
      "Per ogni dipendente vedi il <b>cartellino</b> (presenze) e lo stato del cedolino: <b>Aperto</b>, Bozza o Calcolato.",
      "<b>Spunta</b> i dipendenti da elaborare e premi <b>“Calcola selezionati”</b>: il software calcola lordo, netto e contributi.",
      "Le colonne <b>Lordo</b> e <b>Netto</b> si riempiono e la spunta verde ✓ conferma il cedolino calcolato."
    ],
    tip:"L'avviso in basso ti ricorda che un cartellino ancora “Aperto” calcola su dati non definitivi: chiudi le presenze prima di stampare i cedolini ufficiali.",
    narr:"Arriviamo al cuore del software: le buste paga. Nella sezione Elaborazioni scegli il mese, spunti i dipendenti e premi Calcola selezionati. Il software calcola lordo, netto e contributi per tutti insieme. La spunta verde conferma che il cedolino è pronto. Attenzione ai cartellini ancora aperti: chiudi prima le presenze per avere importi definitivi."
  },
  {
    tipo:"feature", menu:"Adempimenti", icona:"📋",
    titolo:"4 · Tieni d'occhio gli adempimenti",
    tagline:"Tutte le scadenze fiscali, previdenziali e gli invii telematici in un'unica lista con lo stato.",
    img:"img/v-adempimenti.png", hotspot:{x:64,y:18},
    passi:[
      "La sezione <b>Adempimenti</b> mostra i quadri in alto: <b>In scadenza</b>, <b>Bloccati</b>, <b>In lavorazione</b>, <b>Completati</b>.",
      "La tabella elenca ogni adempimento (F24, UniEmens, Libro Unico…) con <b>scadenza</b>, <b>responsabile</b> e <b>stato</b>.",
      "La <b>Timeline del mese</b> a destra ti mette in fila le prossime cose da fare giorno per giorno.",
      "Con <b>“Prepara F24”</b> generi il modello direttamente da qui."
    ],
    tip:"Questa è la tua “torre di controllo”: aprila ogni mattina per sapere subito cosa scade e cosa è bloccato.",
    narr:"La sezione Adempimenti è la tua torre di controllo. Raccoglie tutte le scadenze fiscali e previdenziali, gli invii telematici come F24 e UniEmens, ognuno con la sua data e il suo stato: in scadenza, bloccato, in lavorazione o completato. La timeline a destra ti elenca le cose da fare giorno per giorno. Aprila ogni mattina e sai subito cosa ti aspetta."
  },
  {
    tipo:"feature", menu:"F24", icona:"💶",
    titolo:"5 · Genera l'F24 da versare",
    tagline:"Il software costruisce l'F24 dai cedolini: ritenute, addizionali e contributi INPS, già compilati.",
    img:"img/v-f24.png", hotspot:{x:62,y:18},
    passi:[
      "Apri <b>F24</b>: vedi il <b>riepilogo dei versamenti</b> e la scadenza del periodo.",
      "Ogni riga è un <b>codice tributo</b> con descrizione (es. 1001 ritenute, 3802 addizionale regionale, DM10 contributi INPS).",
      "L'<b>anteprima</b> a destra mostra l'importo totale da versare (qui 43.840,40 €) e l'azienda.",
      "Premi <b>“Genera PDF”</b> per ottenere il modello pronto; lo stato <b>“Da firmare”</b> ti ricorda il passo successivo."
    ],
    tip:"Gli importi arrivano in automatico dai cedolini calcolati: niente somme a mano, meno errori.",
    narr:"Dopo i cedolini, l'F24. Il software lo costruisce da solo prendendo gli importi dalle buste paga: ritenute, addizionali e contributi INPS, ognuno con il suo codice tributo. Vedi subito il totale da versare e premi Genera PDF per avere il modello pronto. Niente somme a mano, quindi molti meno errori."
  },
  {
    tipo:"feature", menu:"Scadenzario", icona:"⏰",
    titolo:"6 · Scadenzario e promemoria automatici",
    tagline:"DURC e versamenti F24 generano da soli i promemoria, con il messaggio già pronto da inviare.",
    img:"img/v-scadenzario.png", hotspot:{x:68,y:14},
    passi:[
      "I contatori in alto riassumono tutto: <b>Scaduti</b>, <b>Scade oggi</b>, <b>In scadenza</b>, <b>Attivi</b>.",
      "Registra un <b>DURC</b> nel riquadro a destra (protocollo e data): la scadenza a 120 giorni viene calcolata da sola.",
      "Premi <b>“Rigenera”</b>: il software crea i promemoria da DURC e F24, con <b>oggetto e testo già scritti</b>.",
      "Per ogni promemoria puoi segnare lo stato: Aperto → Inviato → Completato."
    ],
    tip:"I promemoria si possono inviare via Email, SMS o WhatsApp. Il testo è già pronto: tu controlli e mandi.",
    narr:"Lo Scadenzario lavora per te. Registri un DURC e il software calcola da solo la scadenza. Premendo Rigenera crea i promemoria a partire dalle scadenze, già con oggetto e testo pronti da inviare via email, SMS o WhatsApp. Tu controlli il messaggio, lo mandi, e segni lo stato. Niente più scadenze dimenticate."
  },
  {
    tipo:"feature", menu:"Contabilità", icona:"📊",
    titolo:"7 · Contabilità e quadratura costi",
    tagline:"Il costo del lavoro del mese, controllato e quadrato, pronto da esportare in prima nota.",
    img:"img/v-contabilita.png", hotspot:{x:64,y:17},
    passi:[
      "La sezione <b>Contabilità</b> mostra il <b>costo azienda stimato</b> del mese in grande, ben visibile.",
      "Le card riassumono <b>stipendi lordi</b>, <b>contributi</b>, <b>TFR</b> e <b>ritenute fiscali</b>, con etichette tipo “Quadrato” o “Da versare”.",
      "I <b>Controlli audit</b> a destra verificano la coerenza: cedolini = prima nota, F24 coerente con le trattenute, movimenti senza centro di costo.",
      "Premi <b>“Esporta prima nota”</b> per portare i dati nella contabilità."
    ],
    tip:"I “Controlli audit” verdi sono la tua tranquillità: se è tutto OK, i numeri tornano tra loro.",
    narr:"La Contabilità ti dà il costo del lavoro del mese, già quadrato. Vedi in grande il costo dell'azienda, e sotto stipendi, contributi, TFR e ritenute. A destra i controlli audit verificano che tutto sia coerente: i cedolini con la prima nota, l'F24 con le trattenute. Quando è tutto verde, premi Esporta prima nota e i dati passano alla contabilità."
  },
  {
    tipo:"feature", menu:"Bilancio", icona:"📈",
    titolo:"8 · Bilancio d'esercizio",
    tagline:"Stato Patrimoniale e Conto Economico secondo lo schema CEE, precompilati dai tuoi dati.",
    img:"img/v-bilancio.png", hotspot:{x:33,y:34},
    passi:[
      "Apri <b>Bilancio</b> e scegli l'<b>anno</b>.",
      "Con <b>“Precompila da contabilità”</b> ricavi e costi vengono pescati da fatture, spese e cedolini.",
      "Premi <b>“Bilancio d'esempio”</b> per vedere subito un modello già quadrato e capire come funziona.",
      "Il bilancio segue gli stati <b>Bozza → Approvato → Depositato</b>, così sai sempre a che punto sei."
    ],
    tip:"Lo schema segue gli articoli 2424/2425 del Codice Civile. Il deposito ufficiale XBRL non è ancora generato: per ora è uno strumento di lavoro e controllo.",
    narr:"Il software prepara anche il Bilancio d'esercizio: Stato Patrimoniale e Conto Economico secondo lo schema del Codice Civile. Scegli l'anno e premi Precompila: ricavi e costi vengono presi da fatture, spese e cedolini già inseriti. Puoi anche caricare un bilancio d'esempio già quadrato per capire come funziona."
  },
  {
    tipo:"feature", menu:"Pagamenti clienti", icona:"💳",
    titolo:"9 · Pagamenti e solleciti ai clienti",
    tagline:"Crei avvisi di pagamento e solleciti per i tuoi clienti, seguendo una procedura guidata.",
    img:"img/v-pagamenti.png", hotspot:{x:33,y:62},
    passi:[
      "Crea un <b>nuovo avviso mensile</b> indicando il cliente, il periodo e l'importo.",
      "Segui la <b>procedura guidata</b> a destra: <b>Crea avviso → Invia avviso → Verifica incasso → Sollecita</b>.",
      "Nella tabella <b>Debiti clienti</b> tieni sott'occhio chi ha pagato e chi no.",
      "Quando serve, parte il <b>sollecito</b> con il messaggio già pronto."
    ],
    tip:"È pensato per i tuoi incassi come studio: ti aiuta a non dimenticare di farti pagare.",
    narr:"Questa sezione serve a farti pagare. Crei un avviso di pagamento per il cliente, indicando periodo e importo, e segui la procedura guidata: crea l'avviso, lo invii, verifichi l'incasso e, se serve, mandi il sollecito già pronto. Nella tabella tieni sotto controllo chi ha pagato e chi no."
  },
  {
    tipo:"feature", menu:"Firma digitale", icona:"✒️",
    titolo:"10 · Firma digitale dei documenti",
    tagline:"Firmi fatture e documenti in CAdES (.p7m) o XAdES, con certificato o smart card / CNS.",
    img:"img/v-firma.png", hotspot:{x:30,y:35},
    passi:[
      "<b>1. Carica il documento</b> da firmare (es. la fattura elettronica XML o un PDF).",
      "<b>2. Scegli il tipo di firma</b>: <b>CAdES</b> (file .p7m) o <b>XAdES</b> (XML), entrambe con SHA-256.",
      "Scegli il <b>dispositivo</b>: certificato software (file PFX) oppure <b>smart card / CNS</b> con PIN.",
      "Firmi e scarichi il documento firmato; con <b>“Verifica”</b> controlli firmatario e validità."
    ],
    tip:"Con la smart card / CNS la chiave resta sulla carta: vanno installati il lettore e il middleware sul computer che firma.",
    narr:"Il software firma digitalmente i tuoi documenti. Carichi la fattura o il PDF, scegli il formato di firma — CAdES o XAdES — e il dispositivo: un certificato in un file, oppure la smart card o tessera sanitaria CNS con il suo PIN. Firmi, scarichi il file firmato e puoi anche verificarne la validità e il firmatario."
  },
  {
    tipo:"feature", menu:"Documenti", icona:"📁",
    titolo:"11 · Archivio documenti",
    tagline:"Tutti i file prodotti dal software in un posto: cedolini, F24, CU, UniEmens, fatture e ricevute.",
    img:"img/v-documenti.png", hotspot:{x:88,y:17},
    passi:[
      "L'<b>Archivio documenti</b> raccoglie ogni file generato, con tipo (PDF / XML) ed etichetta di stato.",
      "Ogni scheda mostra <b>a chi si riferisce</b> e il <b>periodo</b> (es. Busta paga Giugno 2026).",
      "Le etichette ti dicono a che punto è: <b>Generato</b>, <b>Da firmare</b>, <b>In bozza</b>, <b>In lavorazione</b>.",
      "Con <b>“Genera cedolino”</b> crei un nuovo documento direttamente da qui."
    ],
    tip:"È la tua cartella ordinata: invece di cercare i file sul computer, li trovi tutti qui, già etichettati.",
    narr:"Tutti i documenti che il software produce finiscono nell'Archivio documenti: cedolini, F24, Certificazione Unica, UniEmens, fatture e ricevute. Ogni scheda dice a chi si riferisce, di che periodo è e a che punto è la lavorazione. È la tua cartella ordinata: non devi più cercare i file in giro per il computer."
  },
  {
    tipo:"feature", menu:"Impostazioni", icona:"⚙️",
    titolo:"12 · Impostazioni dello studio",
    tagline:"Parametri fiscali, contratto CCNL, intestazione dei PDF e notifiche: si configurano una volta sola.",
    img:"img/v-impostazioni.png", hotspot:{x:88,y:17},
    passi:[
      "<b>Parametri fiscali</b>: aliquote IRPEF e addizionali aggiornate per l'anno in corso.",
      "<b>CCNL</b>: il contratto collettivo con livelli e minimi tabellari (es. Commercio).",
      "<b>Brand documenti</b>: logo, colori e intestazioni che appariranno sui PDF dello studio.",
      "<b>Notifiche scadenze</b>: attivi i promemoria automatici per F24, CU e UniEmens. Ricordati di premere <b>“Salva modifiche”</b>."
    ],
    tip:"Configura queste cose una volta all'inizio: poi il software lavora con i tuoi parametri senza chiederteli ogni volta.",
    narr:"Nelle Impostazioni configuri lo studio una volta sola: i parametri fiscali con le aliquote dell'anno, il contratto collettivo di riferimento, il logo e i colori che appariranno sui tuoi PDF, e le notifiche automatiche delle scadenze. Imposti tutto all'inizio e poi il software lavora con i tuoi parametri. Ricordati solo di salvare le modifiche."
  },
  {
    tipo:"feature", menu:"Utenti e permessi", icona:"🔐",
    titolo:"13 · Utenti e permessi",
    tagline:"Inviti i collaboratori dello studio e decidi cosa può fare ciascuno.",
    img:"img/v-utenti.png", hotspot:{x:88,y:17},
    passi:[
      "Vedi l'elenco degli <b>utenti</b> con email, <b>ruolo</b> e <b>stato</b> (Attivo o Invito pendente).",
      "Premi <b>“Invita utente”</b> e inserisci l'email del collaboratore.",
      "Assegna il <b>ruolo</b>: <b>Admin</b> (tutto), <b>Operatore</b> (lavora), <b>Lettura</b> (vede soltanto).",
      "Chi è invitato riceve l'invito e compare come <b>“Invito pendente”</b> finché non accetta."
    ],
    tip:"Il ruolo “Lettura” è perfetto per un revisore o un cliente che deve solo guardare, senza poter modificare nulla.",
    narr:"Se nello studio siete in più persone, in Utenti e permessi inviti i collaboratori e decidi cosa può fare ciascuno. Un Admin può fare tutto, un Operatore lavora sulle pratiche, chi ha il ruolo Lettura può solo guardare. È utile per dare accesso in sola lettura a un revisore o a un cliente, senza rischiare modifiche."
  },
  {
    tipo:"outro", menu:"Riepilogo", icona:"✅",
    titolo:"Hai visto tutto. Ora tocca a te.",
    tagline:"Il percorso tipico, dall'inizio alla fine, in poche mosse:",
    cards:[
      ["🏢","Aziende","Inserisci le aziende clienti"],
      ["👥","Dipendenti","Aggiungi i lavoratori"],
      ["🧾","Cedolini","Calcola le buste paga del mese"],
      ["💶","F24","Genera il modello da versare"],
      ["⏰","Scadenzario","Lascia che i promemoria lavorino per te"],
      ["📊","Contabilità","Quadra i costi ed esporta"],
      ["✒️","Firma","Firma e archivia i documenti"],
      ["📁","Documenti","Ritrova tutto, sempre ordinato"]
    ],
    nota:"Suggerimento: parti sempre da <b>Aziende</b> e <b>Dipendenti</b>. Tutto il resto si basa su quei dati.",
    narr:"E con questo hai visto tutto il software. Il percorso tipico è semplice: inserisci le aziende e i dipendenti, calcoli le buste paga, generi l'F24, lasci lavorare lo scadenzario, quadri la contabilità e firmi i documenti. Parti sempre dalle aziende e dai dipendenti: tutto il resto si basa su quei dati. Buon lavoro con PaghePro."
  }
];
if (typeof window !== "undefined") window.SLIDES = SLIDES;
