## Übungen zu node.js
Löse die folgenden Aufgaben:

1. Schreibe ein Programm, das zu Domains mittels eines DNS lookups die ip-Adresse(n) ermitteln und ausgeben kann. Die Domains (beliebig viele) sollen dabei als Kommandozeilenargument angegeben werden können. (Hint: Den Inhalt von process.argv anschauen).
2. Schreibe zwei Programme die alle Dateien in einem gegebenen Verzeichnis synchron bzw. asychron auslesen und ausgeben (siehe fs.readdir()).
Im ersten Fall sollen mit dem Einlesen einer Datei erst begonnen werden, wenn die Ausgabe der vorigen Datei fertig ist, im zweiten Fall soll dies parallel geschehen. Welches der beiden Programme ist performanter?
3. Entwickle einen Webserver in node.js, der die zur im request angefragten URL gehörende Datei sucht und an den Browser zurückgibt ohne die Verwendung von express oder dergleichen.

Abzugeben ist eine PDF-Datei, die die geschriebenen Sourcecodes samt Erläuterungen enthält.

## Übungen zu MongoDB
Löse die folgenden Aufgaben:

4. Erstelle ein nodejs -  Programm, das sich zur mlab-Datenbank aus dem Unterricht (mongodb://5ahit:5ahit@ds149535.mlab.com:49535/5ahit) verbindet und drei neue Schueler in die students-Collection im richtigen Format hinzufuegt. (Dokumentation zu inserts: https://docs.mongodb.com/manual/tutorial/insert-documents/)

Führe folgende Abfragen durch:

- Alle Schueler
- Alle Schueler, die 2000 gebohren sind
- Alle Schueler, die 2000 geboren sind und in die Klasse 5ahit gehen
- Alle Schueler, die in die Klasse 5ahit gehen und in AM eine rote Ampel haben

Fuehre folgende Abfragen mittels MapReduce durch:

- Gib fuer jede Klasse die durchschnittliche Anzahl an roten Ampeln in AM aus
- Gib fuer jede Ampelfarbe an, wie oft sie in der Klasse 5ahit aufgetreten ist (Hinweise: man kann die emit()-Methode auch mehrfach in einem reduce-Vorgang aufrufen)

5. Recherchiere: Wie konfiguriert man MongoDB zum Betrieb in einem Cluster 
	1. als Master/Slave
	2. als Replication Set. Gib die noetigen Konfigurationsoptionen an sowie, wie man sich von einer Anwendung zum Cluster verbindet.
