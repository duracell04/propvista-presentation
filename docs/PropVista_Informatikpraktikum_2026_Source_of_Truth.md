---
title: "PropVista – Informatikpraktikum 2026: kanonischer Kontext und Präsentationsbrief"
description: "Selbstständige Referenz für die Erstellung und Überarbeitung der UZH-Schlusspräsentation"
language: "de-CH"
date: "2026-10-12"
status: "Überarbeitetes, beleggestütztes Präsentationsbriefing"
revision: "2 – Auditkorrekturen vom 12.10.2026"
canonical_final_report: "Schlussbericht_Informatikpraktikum_Enrique_Georg_Zbinden.pdf, 30.09.2026, 3 Seiten"
project: "Informatikpraktikum bei LTD Tatsson.com / PropVista"
---

# PropVista – Mein Informatikpraktikum bei Tatsson.com
## Quellenbasis und überarbeitetes Briefing für die Schlusspräsentation

> **Wofür dieses Dokument da ist:** Ein Präsentations-Agent soll damit eine visuell überzeugende, fachlich präzise und persönlich erzählte PowerPoint entwickeln können, ohne die Praktikumsgeschichte aus alten Chatverläufen zu rekonstruieren. Dieses Dokument hält den genehmigten Auftrag, den dokumentierten Zwischenstand, den abschliessenden Bericht, den technischen Projektstand und die Erwartungen der Universität Zürich zusammen. **Die Präsentation erzählt das Praktikum – nicht dieses Dossier und nicht den UZH-Prüfprozess.**
>
> **Quellenstand dieser Überarbeitung:** Der vom Nutzer nachgereichte dreiseitige **PDF-Schlussbericht vom 30.09.2026** wurde vollständig gelesen und ist die massgebliche Schlussberichtfassung für dieses Briefing. Er ersetzt die bisherige Vermischung von DOCX29 und MD30. Die technische Zeitachse, Paketprüfung, Architektur, relevanten PHP-/JavaScript-Dateien, Grenzen und Aufnahmebedingungen wurden an den unten festgehaltenen Repository-Ständen geprüft. PB und ZB werden aus dem ursprünglichen Briefing sowie den Verweisen im PDF übernommen; ihre privaten Originaldateien wurden hier nicht erneut eingesehen. Persönliche Vortragsbeispiele sind Vorschläge, keine Originalzitate.
>
> **Gewünschtes Ergebnis:** Eine klare, chronologische, screenshotreiche und bei stillem Durchklicken verständliche Darstellung der zwölf Wochen: Wie kam ich zum Projekt? Was musste ich lernen? Wie habe ich recherchiert und Lösungen verglichen? Wie ist PropVista entstanden? Was gelang, wo wurde es schwierig und was habe ich daraus gelernt? Der Vortrag ist auf **7–8 Minuten** ausgelegt, gefolgt von **2–3 Minuten Diskussion**.

## 0. Arbeitsauftrag für eine spätere Überarbeitung der Präsentation

1. **Erzähle meine tatsächliche Praktikumserfahrung** in natürlichem Schweizer Hochdeutsch. Auftrag, technische Lösung und Ergebnis stehen im Mittelpunkt; persönliche Erfahrungen erklären Entscheidungen und Schwierigkeiten. Keine erfundenen Dialoge, Gefühle, Arbeitsstunden oder Erfolge.
2. **Halte die Quellenhierarchie ein:** PB definiert den genehmigten Auftrag; ZB beschreibt den damaligen Zwischenstand; **SB-PDF vom 30.09.2026** bestimmt die Schlussberichtdarstellung. DOCX29 und MD30 sind ergänzende Quellen und dürfen den PDF-Bericht nicht stillschweigend ersetzen (Abschnitt 2.1).
3. **Verwende den Praktikumsprototyp 0.1.0** und seine festgehaltenen Quellenstände. Spätere Produktarbeit gehört in den Ausblick. Bestehende Folien sind Gestaltungsmaterial, keine eigenständigen Tatsachenbelege.
4. **Zeige sinnvolle Originalartefakte:** lesbare Codeausschnitte, relevante Screenshots und konkrete Tests. Keine Screenshot-Quote. Bildbeschriftungen nennen Herkunft und tatsächliches Aufnahmedatum; Rekonstruktionen werden bezeichnet.
5. **Erhalte alle zwölf Planwochen als Orientierung**, ohne wöchentlich abgeschlossene Implementierungen zu behaupten. Der Bericht beschreibt frühe Vorbereitung; datierte technische Umsetzungs-/Prüfnachweise konzentrieren sich auf **12./13. September**. Ein Sprintordner beweist keinen Arbeitszeitpunkt im Juli oder August.
6. **Plane 17 Hauptfolien und Reservefolien.** Zwei Vertiefungen erhalten **50 bzw. 60 Sekunden**: Mockup/Scope und der vollständige Datenweg. Der Speichertest bleibt eine kurze Diagnosegeschichte.
7. **Verankere drei persönliche Erfahrungen:** PHP/WordPress-Einarbeitung; zusätzliche Ideen und Tatos Hilfe beim Priorisieren; der fehlgeschlagene Speichertest. Verbinde die frühe Scope-Beobachtung mit der späteren Integrationsverzögerung. Formulierungsbeispiele sind kein auswendig zu lernendes Manuskript.
8. **Mache Eigenleistung und KI-Unterstützung konkret:** welches Prüfkriterium ich festlegte, welche Lösung ich beurteilte, wobei ChatGPT/Codex halfen und was ich tatsächlich selbst nachvollzog oder überprüfte. Automatisierte/unterstützte Tests nicht pauschal als eigenhändig ausgeführte manuelle Tests bezeichnen. Keine erfundene Quote selbst geschriebenen Codes.
9. **Prüfe Verständlichkeit und Redezeit:** Mitstudierende müssen Auftrag, Datenweg, Entscheidungen und Grenzen nachvollziehen können. **455 Sekunden Inhalt** lassen 25 Sekunden bis zur Acht-Minuten-Grenze; mit Übergängen etwa **7:45–7:50** anstreben. Die gesprochene Probe entscheidet über Kürzungen. Technische Rückfragen anhand Abschnitt 9 üben.

Diese Regeln betreffen eine spätere Folienüberarbeitung. Das Hinzufügen dieses Briefings allein ändert die bestehende Browserpräsentation nicht.

---

# 1. Das Projekt in 90 Sekunden verstehen

**Student und Praktikum:** Enrique Georg Zbinden; Informatikpraktikum vom **29. Juni bis 18. September 2026** bei **LTD Tatsson.com** in Georgien, **100 %**, remote/in einer internen WordPress-Testumgebung. Betreuer und fachlicher Gesprächspartner: **Tato-Shalva Makhashvili**. Der offizielle Projektauftrag lautet **„Konzeption und prototypische Entwicklung eines WordPress-Plugins zur Darstellung interaktiver Gebäudepläne“**. [PB, S. 1, 4; ANM]

**Ausgangsproblem:** In Immobilien- und Bauprojekten sollen Gebäude-, Grundriss- und Flächenpläne oft mit Informationen zu einzelnen Einheiten verbunden werden. Individuell oder manuell umgesetzte Lösungen sind schwerer wiederzuverwenden und zu pflegen. Tatsson wollte untersuchen, wie sich die Kernfunktion als **kleines WordPress-Plugin** technisch realisieren lässt. Das reale Umfeld wurde unter anderem anhand von **Impel Verde** aus dem Kontaktkreis von Solo Studio anschaulich. [PB, S. 1; SB-PDF § 1]

**Kernfunktion:** Eine berechtigte Person pflegt einen Plan und Angaben zu Einheiten im WordPress-Backend. Der Plan wird über **`[propvista_plan]`** in eine WordPress-Seite eingebunden. Besuchende wählen im Plan einen Marker aus und erhalten die Informationen der zugehörigen Einheit. Ein **technischer Prototyp in einer Testumgebung** ist das Ergebnis; ein Produktivbetrieb, ein komplexer Editor und eine WordPress.org-Veröffentlichung gehörten nicht zum Praktikumsauftrag. [PB, S. 1–3; SB; TECH]

**Was an diesem Praktikum besonders lehrreich war:** Im Studium kannte ich **Python, C und Java**. Während des Praktikums konnte ich mich über mehrere Wochen mit **PHP, WordPress, der Plugin API, Hooks, Datenhaltung, Web-Frontend und Tests** beschäftigen. Die Herausforderung war nicht bloss, eine neue Syntax zu lernen, sondern den eigenen Code im Zusammenspiel mit einem bestehenden System zu verstehen. [Persönliche Nutzerangaben; ZB, S. 1; SB-PDF § 2]

**Was tatsächlich herauskam:** Ein installierbares Plugin **PropVista 0.1.0** für einen Plan mit drei vorhandenen Einheiten/Markern, klassischer WordPress-Administration, Speicherung via Options API, Shortcode-Ausgabe, relativer Markerpositionierung, JavaScript-Auswahl, grundlegenden Schutz- und Tastaturmechanismen, dokumentierten Tests und einer Übergabe. Bekannte Grenzen betreffen insbesondere deckungsgleiche Marker, eingeschränkte Datenpflege und nur begrenzt geprüfte Kompatibilität. [SB; TECH; LIMIT; PACKAGE]

**Der wichtigste Lernbogen:** Im Zwischenbericht erkannte ich, dass Recherche und Mockups Anforderungen verändern können und dass zusätzliche Ideen den Umfang ausweiten. Der Schlussbericht zeigt, welche Konsequenzen die tatsächlich späte Integration hatte. Mein Rückblick: **Früher einen kleinen vollständigen Ablauf von der Dateneingabe bis zur interaktiven Ausgabe realisieren, prüfen, dokumentieren und erst anschliessend erweitern.** [ZB, S. 1–2; SB-PDF § 5]

## 1.1 Persönlicher Kontext für den Einstieg

Vor dem Praktikum bestanden bereits persönliche Kontakte zum Umfeld von **Tato und Solo Studio**. Wir hatten uns auch mit Webprojekten und möglichen Kundenbeziehungen in der Schweiz beschäftigt. Dadurch war mir das Tätigkeitsfeld nicht völlig fremd. Das Praktikum bot die Gelegenheit, den technischen Teil dieser Arbeit intensiver kennenzulernen und dafür Zeit und Freiraum zu erhalten. [Persönliche Nutzerangaben im Präsentationsgespräch]

**Geeigneter mündlicher Einstieg:** „Ich kannte Tato und das Umfeld seiner Webentwicklungsprojekte bereits etwas. Als ich die Gelegenheit bekam, mein Informatikpraktikum dort zu machen, fand ich gerade die technische Seite spannend: Im Studium hatten wir Python, C und Java behandelt, und jetzt konnte ich mich einmal intensiv mit PHP, WordPress und einem konkreten Webprojekt beschäftigen.“

Die private Beziehungsgeschichte dient nur dazu, den Praktikumsweg verständlich zu machen. Im ersten halben Vortragsminute führt sie zum **konkreten Auftrag**. Einzelne familiäre Beziehungen oder Einladungsformulierungen werden nicht ausgeschmückt, wenn sie für das Verständnis nichts beitragen.

---

# 2. Die Praktikumsdokumente: Inhalt, Herkunft und Verbindung

## 2.1 Dokumentenfunktion und Quellenrang

| Quelle | Identität | Rolle und Belegstatus |
|---|---|---|
| **PB – Projektbeschreibung** | `Projektbeschreibung_Informatikpraktikum_final_unterzeichnet.pdf`, vier Seiten, laut ursprünglichem Briefing unterschrieben **12.06.2026** | Genehmigter Auftrag, Scope, Lernziele, zwölf Soll-Meilensteine. Privates Original hier nicht erneut eingesehen. |
| **ZB – Zwischenbericht** | `Zwischenbericht_Informatikpraktikum_Enrique_Georg_Zbinden(1).pdf`, zwei Seiten, **20.08.2026**, Stand Ende Woche 7 | Zeitgenössische Perspektive auf Recherche, Mockup, Einarbeitung und Datenkonzept. Datum und Stand werden im SB-PDF § 3 bestätigt. Der Versandtag liegt im Plan in Woche 8. |
| **SB / SB-PDF – massgeblicher Schlussbericht** | `Schlussbericht_Informatikpraktikum_Enrique_Georg_Zbinden.pdf`, **30.09.2026**, drei Seiten | Vom Nutzer als Antwort auf die Frage nach dem eingereichten Bericht bereitgestellt; vollständig gelesen. Massgebliche Ergebnisdarstellung für dieses Briefing. Einreichungs-E-Mail nicht separat geprüft. |
| **SB29 – frühere Fassung** | `Schlussbericht_Informatikpraktikum_Enrique_Georg_Zbinden.docx`, **29.09.2026**, laut altem Briefing drei Seiten | Ergänzende frühere Fassung; nicht automatisch als eingereichte oder massgebliche Darstellung behandeln. |
| **SB30 – weiterer Text** | `Schlussbericht_Informatikpraktikum_Enrique_Georg_Zbinden.md`, **30.09.2026**, laut altem Briefing ausführlicher | Ergänzende Detailquelle; nicht mit dem gleich datierten dreiseitigen PDF gleichsetzen. |
| **ANM – Anmeldung** | `Anmeldung-Informatikpraktikum-RVO22_de-220323.pdf` | Administrative Eckdaten. Private Kontakt-/Adressdaten nicht veröffentlichen. |
| **Technische Primärbelege** | Festgehaltener Dokumentations- und Runtime-Stand in Abschnitt 8 | Konkrete Implementierung, Prüfungen und Grenzen. Keine Belege für frühe Arbeitsstunden oder spätere tatsächliche Übergabe. |
| **Persönliche Angaben** | Im ursprünglichen Briefing vermerkte Nutzerangaben | Vorkenntnisse und Praktikumsweg; nicht als Aussage des PDF-Berichts kennzeichnen. |

**Verbindliche Hierarchie:** PB bestimmt das Soll, ZB den berichteten Zwischenstand, SB-PDF das Ergebnis und die Schlussreflexion. Code und datierte Tests bestimmen, welches Verhalten am festgehaltenen technischen Stand tatsächlich belegt ist. Andere Berichtsfassungen dürfen Details ergänzen, aber widersprüchliche Aussagen werden nicht zu einer scheinbar harmonischen Geschichte verschmolzen.

**Quellenkürzel:** **[SB]** und **[SB-PDF]** meinen ab dieser Revision ausschliesslich das gelesene PDF vom 30.09.2026. Es enthält bereits den Speichertest, KI-Zusammenfassungsfehler, Tatos Priorisierungshilfe und den Eigenanteil beim Prüfkriterium unabhängiger Shortcode-Auswahl (§ 5). Diese Geschichten sind deshalb in der massgeblichen Fassung verankert; die Annahme des Audits, sie stünden nur im ausführlichen Markdown, trifft auf dieses PDF nicht zu.

**Zwei Abgrenzungen für Rückfragen:**

- Das PDF berichtet Übergabe am **17.09.** und Nachbesprechung am **18.09.** (§ 6). Der festgehaltene Repository-Stand vom **13.09.** meldet noch **HANDOVER READY**. Das sind verschiedene Zeitstände: technische Vorbereitung und später berichtete Übergabe.
- Das PDF erwähnt **Informationsdialoge, Öffnen/Schliessen und Fokusrückgabe** (§ 5). Der geprüfte Runtime-Stand verwendet dagegen einen Informationsbereich innerhalb der Planansicht. Die Hauptpräsentation erklärt diese nachgewiesene Ausgabe. Den Dialogabschnitt ohne weitere Zuordnung nicht als Eigenschaft des installierten Pakets oder als erfundene Entwicklungsphase darstellen.

Für das Publikum genügt eine klare Arbeitsgeschichte. Die genaue Quellenunterscheidung bleibt in Notizen und Reservefolien nachvollziehbar.

## 2.2 Projektbeschreibung: Der ursprünglich genehmigte Auftrag (PB)

### Praktikumsrahmen und Problemstellung — PB, S. 1

Tatsson wird in der genehmigten Beschreibung als georgischer Anbieter von Webdesign, Webentwicklung und digitalen Projekten dargestellt. In Kundenprojekten entstehen wiederholt Anforderungen, Gebäudestrukturen, Grundrisse und Flächen interaktiv anzuzeigen, insbesondere im Immobilien- und Baubereich. Die gängige individuelle bzw. manuelle Umsetzung erschwert Wiederverwendung und Wartung. Das Praktikum sollte die technische Machbarkeit einer kleineren, wiederverwendbaren WordPress-Lösung untersuchen und beispielhaft umsetzen.

Der Projektumfang war **bewusst klein**: Ein einfacher Plan, einzelne Einheiten mit Basisinformationen, minimaler WordPress-Administrationsbereich und anklickbare Marker/Hotspots im Frontend. **Vollständige Marktreife, komplexer visueller Editor, Produktivinstallation und Veröffentlichung im WordPress-Plugin-Verzeichnis** gehörten ausdrücklich zu möglichen späteren Arbeiten, nicht zum genehmigten Praktikum. [PB, S. 1]

### Die acht vereinbarten Ergebnisse — PB, S. 2

1. Ein **lauffähiger WordPress-Plugin-Prototyp** in der internen Testumgebung.
2. Eine einfache technische Struktur für **Gebäudeplan, Einheiten und Basisinformationen**.
3. Eine **minimale Administrationsmöglichkeit** im WordPress-Backend.
4. Eine **Frontend-Darstellung** über Shortcode oder vergleichbare WordPress-Integration.
5. Einfache **anklickbare Marker/Hotspots** mit Informationsanzeige.
6. **Manuelle Testfälle** und kurze Testdokumentation.
7. **Kurze technische Dokumentation** mit Installations- und Nutzungshinweisen.
8. **Übergabe des Prototyps** an den Praktikumsgeber.

Diese acht Punkte beschreiben das ursprünglich vereinbarte **Ergebnis**, nicht acht unabhängig zu präsentierende Formalitäten. Die Präsentation soll sie durch Screenshots und eine verständliche technische Erklärung zusammenführen.

### Vorgehen, Werkzeuge, Betreuung und Lernziele — PB, S. 2–4

Die geplante Arbeitsweise ging von einer Orientierungs- und Einarbeitungsphase über das technische Kurzkonzept zur schrittweisen Implementierung und abschliessenden Prüfung. Als Technologien waren **WordPress, PHP, HTML, CSS, JavaScript, WordPress Plugin API, Shortcodes, interne Testumgebung und Git/Versionsverwaltung** vorgesehen. Hinzu kamen manuelle Tests, Dokumentation und regelmässige kurze Abstimmungen mit Tato.

Die genehmigte Projektbeschreibung benannte bereits Risiken, die später tatsächlich wichtig wurden: **Einarbeitungsaufwand in WordPress/PHP**, Struktur und Speicherung der Daten, Frontend-Interaktion, Eingabevalidierung, realistische Priorisierung und Einhaltung des Zeitrahmens. Ein zentrales Lernziel war, eine praktische, wiederkehrende Anforderung in **einen kleinen, technisch abgegrenzten und realistisch umsetzbaren Software-Prototyp** zu übersetzen. [PB, S. 2–4]

### Die zwölf genehmigten Soll-Meilensteine — PB, S. 3

| Woche | Geplanter Zeitraum | Thema | Erwartetes Ergebnis |
|---|---|---|---|
| **1** | 29.06.–03.07. | Projektstart und Orientierung | Projektumfang abgestimmt, kurze Anforderungsnotiz. |
| **2** | 06.07.–10.07. | WordPress-Grundlagen | Grundverständnis von Struktur, Themes, Plugins, Hooks. |
| **3** | 13.07.–17.07. | PHP- und Plugin-Einarbeitung | Übungen, Verständnis der Plugin-Basis. |
| **4** | 20.07.–24.07. | Testumgebung | Interne WordPress-Entwicklungsumgebung lauffähig. |
| **5** | 27.07.–31.07. | Technisches Kurzkonzept | Struktur, Datenfluss und Kernfunktion festgelegt. |
| **6** | 03.08.–07.08. | Plugin-Grundgerüst | Plugin-Skelett wird von WordPress erkannt. |
| **7** | 10.08.–14.08. | Datenstruktur und Backend | Plan- und Einheitsdaten vorbereitet/erfasst. |
| **8** | 17.08.–21.08. | Admin-Bereich | Basisinformationen im Backend verwaltbar. |
| **9** | 24.08.–28.08. | Frontend-Integration | Plan über Shortcode/Testseite sichtbar. |
| **10** | 31.08.–04.09. | Interaktion | Marker/Hotspots zeigen zugehörige Informationen. |
| **11** | 07.09.–11.09. | Tests und Stabilisierung | Manuelle Tests, Korrekturen, stabilisierter Prototyp. |
| **12** | 14.09.–18.09. | Dokumentation und Übergabe | Installations-/Nutzungshinweise, Demo, Code-Übergabe. |

## 2.3 Zwischenbericht vom 20. August: Die Sicht während des Projekts (ZB)

Der Zwischenbericht umfasst **fünf Abschnitte**. Diese bilden den ersten Teil der persönlichen Erzählung und sollten beim Präsentieren **nicht durch eine perfekte Rückschau ersetzt** werden.

### ZB § 1 – Ausgangslage und Vorgehensweise, S. 1

Die Produktidee war rasch verständlich, die konkrete Umsetzung aber zunächst offen. Statt unmittelbar alle Funktionen zu programmieren, habe ich **bestehende Gebäudeplan-/Immobilienlösungen verglichen, Interaktionsmuster untersucht und einen ersten Mockup erarbeitet**. Im Mockup fiel auf, dass manche zunächst plausiblen Ideen zu viele Informationen gleichzeitig sichtbar machten oder die Informationshierarchie verkomplizierten. Der Entwurf wurde dadurch zu einem **frühen Test der Anforderungen**, nicht bloss zu einer grafischen Skizze.

Parallel dazu vertiefte ich **WordPress, PHP und Plugin-Architektur**. Ich musste lernen, wie bestehende Strukturen, Hooks, Administrationsseiten und Shortcodes zusammenspielen. **Das Lesen und Verstehen einer bestehenden Plattform** wurde zu einer eigenen fachlichen Herausforderung.

**Originalgedanke aus dem Zwischenbericht:** „Zu Beginn war die Produktidee schnell verständlich, die konkrete Umsetzung aber weniger eindeutig.“ [ZB, § 1]

### ZB § 2 – Zwischenstand und Soll–Ist, S. 1

Der Zwischenbericht hält ausdrücklich fest, dass die vorgesehenen Wochenblöcke in der Praxis **teilweise überlappten**. Recherche, Mockup, technische Einarbeitung und Konzeption beeinflussten sich gegenseitig. Die Tabelle im Zwischenbericht beschreibt nach den ersten sieben Wochen diesen Stand:

| Woche | Im Zwischenbericht beschriebene Arbeit / Erkenntnis |
|---|---|
| **1** | Umfang und Kernanforderungen strukturiert, bestehende Lösungen recherchiert. |
| **2** | WordPress-Architektur, Plugins, Hooks und Shortcodes erarbeitet; erste UX-/Mockup-Überlegungen. |
| **3** | PHP-Grundlagen vertieft und mit Plugin-Aufbau verknüpft. |
| **4** | Interne WordPress-Testumgebung und Aktivierungsablauf eingerichtet; Mockup weiter geprüft. |
| **5** | Datenmodell, Plugin-Struktur und Frontend-Konzept konkretisiert; Annahmen aus dem Entwurf vereinfacht. |
| **6** | Plugin-Grundgerüst und Ansatzpunkte für Backend/Frontend vorbereitet. |
| **7** | Plan-/Einheiten-/Markerstruktur weiterentwickelt; **relative Prozentkoordinaten** für die Marker als Grundlage festgelegt. |

Für die Präsentation bedeutet das: Diese Phasen sind **tatsächlich Teil des berichteten Lernwegs**. Die späteren datierten Verifikationsläufe ergänzen die Chronologie, statt die Aussagen des Zwischenberichts zu ersetzen.

### ZB § 3 – Herausforderungen und wichtigste Lernerfahrungen, S. 2

**Priorisieren statt endlos ausbauen:** Beim Vergleich bestehender Lösungen entstanden rasch Ideen für mehrere Pläne, Statusfilter oder eine komfortablere Administration. Ich beobachtete an mir, dass ich bei technischen Projekten früh über mögliche spätere Ausbaustufen nachdenke. Für einen Prototyp kann diese Perspektive produktiv sein, sie kann aber den Umfang vergrössern. **Tatos Rückmeldungen** halfen mir, zur nächsten überprüfbaren Kernfunktion zurückzukehren.

**Gestaltung ist eine technische Entscheidung:** Ein überladener Grundriss ist nicht nur eine Frage des Aussehens. Wird Information erst nach einem Klick angezeigt, ändern sich auch **Datenmodell, Interaktion und Ausgabe**. Der Entwurf und die technische Struktur korrigierten sich gegenseitig.

**Markerkoordinaten:** Feste Pixelkoordinaten sind an bestimmte Bilddimensionen gebunden. Ein proportional skalierender Grundriss braucht Marker, die ihre Lage **relativ zur Bildfläche** behalten. Deshalb wurden X- und Y-Positionen in Prozent vorgesehen. Gerade diese kleine Detailfrage machte die Verbindung von UX, Datenmodell, Formular und Frontend konkret.

### ZB § 4 und § 5 – Damaliger Ausblick und Zwischenfazit, S. 2

Für die verbleibende Zeit waren nach dem Zwischenbericht vorgesehen: **WordPress-Administration**, danach **Frontend-Ausgabe über Shortcode**, anschliessend **Markerinteraktion**, zuletzt **Tests, Korrekturen, Dokumentation und Übergabe**. Die wichtigste damalige Erkenntnis: Softwareentwicklung verläuft nicht streng linear. Recherche, Mockup, technische Einarbeitung und Umsetzung **beeinflussen und korrigieren einander**. Gute Priorisierung unterscheidet zwischen möglichen Erweiterungen und der Funktion, die für den Prototyp jetzt tatsächlich gebraucht wird.

## 2.4 Schlussbericht: Was umgesetzt wurde und was ich rückblickend gelernt habe (SB)

Die folgende Darstellung stützt sich auf den **dreiseitigen PDF-Schlussbericht vom 30.09.2026**, nicht auf eine Verdichtung der früheren Fassungen. § 1–2 beschreiben Auftrag und Umsetzung, § 3 Soll–Ist, § 4 Prüfungen, § 5 persönliche Reflexion und KI-Unterstützung, § 6 Betreuung, Übergabe und Ausblick.

### SB – Auftrag und Vorgehensweise

Als Praxisreferenz diente unter anderem **Impel Verde**, dessen Gebäude-/Wohnungsübersichten die Verknüpfung von Plan und Einheitsinformationen anschaulich machten. Formal war **Tatsson.com** Praktikumsgeber; der Austausch fand mit **Tato und dem Solo-Studio-Umfeld** statt. Der Auftrag war der **kleine wiederverwendbare Prototyp in einer internen Testumgebung**, einschliesslich Administration, Interaktion, Tests, Dokumentation und Übergabe. Die Recherche und die frühen Mockups führten zur vereinfachten Kerninteraktion:

**Plan betrachten → Einheit auswählen → Informationen zur Einheit erhalten.**

### SB – Fachliche Einarbeitung und technische Umsetzung

Der Schlussbericht erklärt das Lernen am konkreten Ablauf. In PHP und WordPress galt es, **Funktionen, Datenverarbeitung, Plugin-Erkennung und vor allem den Zeitpunkt von WordPress-Hooks** zu verstehen. Die Trennung zwischen **serverseitiger PHP-Verarbeitung** und **Browserinteraktion in JavaScript** wurde an einem realen Projekt greifbar.

Die Anforderungen lassen sich aus zwei Perspektiven erklären: Die zuständige Person im Backend will Plandaten zuverlässig **erfassen, speichern und wieder laden**; Besuchende wollen über einen Marker die **richtigen Einheitsinformationen** erhalten. Daraus entstanden prüfbare Kriterien, unter anderem korrekte Datenpersistenz und die Zuordnung von Marker und Einheit.

Der realisierte Praktikumsprototyp unterstützt **einen Plan**, dessen Bildreferenz, Titel sowie **drei bestehende Einheiten** und zugehörige Marker bearbeitet werden können. Die Anzahl der Einheiten ist in der einfachen Administration fest vorgegeben. Die **WordPress Options API** speichert den Datensatz. `[propvista_plan]` liefert die Planansicht innerhalb einer WordPress-Seite; HTML/CSS und JavaScript übernehmen Ausgabe und Auswahl. Jeder Shortcode-Einbindung gehört ihr **eigener Auswahlzustand**, auch wenn mehrere Einbindungen denselben gespeicherten Plan verwenden. Die **Prozentkoordinaten** erhalten die Position relativ zum skalierenden Bild.

Die Architektur blieb bewusst klein. Für den vereinbarten Umfang waren eine zusätzliche Datenbankstruktur, ein externer Server und ein umfangreiches Frontend-Framework nicht erforderlich.

### SB – Soll–Ist, Umsetzungszeitpunkt und Auswirkungen

Der Schlussbericht beschreibt die Arbeitsschritte als fachlich zusammenhängend, aber zeitlich nicht vollständig entlang des ursprünglichen Plans abgeschlossen. Die **frühen Lern- und Konzeptionsarbeiten** waren Gegenstand des Zwischenberichts. Zusätzliche Komfortfunktionen und Probleme mit Bedienabläufen und mehreren Einbindungen erhöhten den Aufwand. Die integrierte Implementation und entscheidende Überprüfungen konzentrierten sich auf **12./13. September**. Die Kernfunktion und das installierbare Paket sind am Septemberstand technisch belegt. Die spätere Übergabe berichtet SB-PDF § 6. TIMELINE/PACKAGE vom 13.09. belegen nur deren Vorbereitung, noch keine tatsächliche Lieferung.

### SB – Tests, Ergebnisbeurteilung und Grenzen

Prüfungen betrafen **Plugin-Aktivierung, Backend-Speichern und Wiederladen, Shortcode-Ausgabe, richtige Markerzuordnung, schmale Ansichten, Tastaturbedienung, ungültige Eingaben und abgewiesene Schreibzugriffe**. Zugriffs-/Nonce-Prüfungen, Eingabebereinigung und kontextbezogene Ausgabekodierung waren Teil der technischen Umsetzung. Fehlerkorrekturen und bekannte Grenzen sind dokumentiert.

Wichtigste klar beschriebene Grenze: **Zwei exakt übereinanderliegende Marker können sich bei Mausbedienung verdecken.** Der Prototyp wurde in einer **begrenzten Testumgebung** geprüft; daraus folgt kein Anspruch auf umfassende Browser-/Theme-Kompatibilität oder einen produktionsreifen Kundenbetrieb. Weitere Anwender- und Kompatibilitätsprüfungen bleiben sinnvolle nächste Schritte.

### SB – Was gut ging, was schwierig war und was ich verbessern würde

**Gelungen:** Die Verbindung von Recherche/Mockup mit der technischen Modellierung; eine lauffähige Kernfunktion über Backend, Speicherung, Shortcode und JavaScript; ein überprüfbarer Lernfortschritt zu PHP, WordPress und Browserlogik; dokumentierte technische Entscheidungen und Tests.

**Schwierig:** Die frühe Neigung, spätere Ausbauten mitzudenken, führte zu zusätzlichen Funktionen und Aufwand. Die Kernintegration wurde später als ursprünglich geplant fertig bzw. abschliessend geprüft. Die Test- und Nachweisdokumentation wurde gegen Ende verdichtet. Mehrere Shortcode-Instanzen, längere Bedienabläufe und Tastaturfokus erforderten genauere Prüfung.

**Lernfortschritt:** Künftig den **kleinsten vollständig funktionsfähigen Ablauf früher realisieren**, ihn anhand prüfbarer Kriterien testen, den Stand zeitnah dokumentieren und zusätzliche Funktionen erst danach ausbauen. Bei einem Fehler zuerst die **Ursache** diagnostizieren, statt reflexhaft den Produktcode zu ändern.

### SB – KI als Teil des realen Arbeitsprozesses

**ChatGPT und Codex** unterstützten bei Implementierung, Tests und Dokumentation. Der Schlussbericht beschreibt die eigene Verantwortung ausdrücklich in **Anforderungsklärung, Priorisierung, Steuerung, technischem Verständnis und Prüfung der Ergebnisse**. Eine KI-Zusammenfassung vermischte bereits implementierte Funktionen mit zuvor diskutierten Ideen. Der Text musste mit Code und Übergabepaket abgeglichen werden.

Das ist eine konkrete, fachlich interessante Erfahrung: KI kann die Erstellung von Code und Text unterstützen; **entscheidend bleibt, ob der tatsächliche Systemzustand verstanden und unabhängig überprüft wird**. Die Präsentation darf dies als persönliche Arbeitsweise erläutern, sollte aber weder die gesamte Arbeit auf KI reduzieren noch technische Eigenleistungen überzeichnen.

### SB – Abschluss und Ausblick

Am **17.09.2026** wurden laut Schlussbericht **Code, Installationspaket und Dokumentation** an den Praktikumsgeber übergeben. Die Nachbesprechung mit Tato und dem Solo-Studio-Team fand am **18.09.2026** statt. Dabei wurden der technische Abschlussstand und Überlegungen zur späteren Weiterentwicklung besprochen. Der massgebliche PDF-Bericht nennt keine pauschale Zustimmung des Teams zu einem Abschlussaudit. Eine solche zusätzliche Aussage aus einer früheren Fassung gehört ohne eigenen Nachweis nicht in die Hauptpräsentation. [SB-PDF § 6]

Für eine spätere Produktentwicklung wären insbesondere **flexiblere Datenpflege, weitere Anwender- und Kompatibilitätstests, robuste Behandlung übereinanderliegender Marker** sowie zusätzliche Komfortfunktionen sinnvoll. Das sind **Ausblicksthemen nach dem Praktikum**, nicht heimlich nachträglich hinzugefügte Praktikumsziele.

---

# 3. Die zwölf Wochen als zusammenhängende Geschichte

Der Projektplan definiert die zwölf Themenblöcke. Der Zwischenbericht erklärt den Weg durch die erste Hälfte; der Schlussbericht und datierte Repository-Belege zeigen die Ergebnisse und den realen Abschluss. Die folgende Tabelle ist ein **Materialpool**, keine Pflicht zu einer Folie pro Woche. Die 17 Hauptfolien in Abschnitt 6 führen einzelne frühe Themen zusammen:

| Woche | Erzählthema für die Folie | Was ich dabei gelernt / erfahren habe | Geeigneter sichtbarer Beleg | Quellenschlüssel |
|---|---|---|---|---|
| **1** | **Ausgangslage und Auftrag** | Ein praktisches Problem in einen klar begrenzten Softwareauftrag übersetzen. | Impel-Verde-Screenshot, Projekt-Scope-Skizze. | PB S. 1; ZB § 2; SB Auftrag |
| **2** | **WordPress als System kennenlernen** | Core, Themes, Plugins und Hooks unterscheiden und innerhalb der bestehenden Architektur arbeiten. | WordPress-Oberfläche und kleines echtes Code-/Dateibeispiel. | PB S. 3; ZB § 1–2; TECH |
| **3** | **PHP und Webprogrammierung** | Vorwissen aus Python/C/Java mit PHP, serverseitiger Verarbeitung und JavaScript im Browser verbinden. | Kleines echtes PHP-Beispiel; Server–Browser-Weg. | ZB § 1–2; SB Einarbeitung; TECH |
| **4** | **Entwicklungsumgebung und Experimente** | Code lokal laden, Plugin aktivieren, Änderungen sichtbar überprüfen. | Screenshot der tatsächlichen WP-Testumgebung/Pluginliste. | ZB § 2; Repository Sprint 4/6 |
| **5** | **Recherche, Mockup, technische Konzeption** | Bestehende Lösungen vergleichen; erkennen, dass zu viele Informationen die Benutzerführung überladen. | Praxisreferenzen, echter Mockup falls vorhanden, sonst klar bezeichnete Rekonstruktion. | ZB § 1 und § 3; SB Auftrag |
| **6** | **Plugin-Grundgerüst** | Plugin-Erkennung und Hooks; Bedeutung des Aufrufzeitpunkts innerhalb des WordPress-Ablaufs. | Originaldatei, `add_action`-Ausschnitt, Aktivierung. | ZB § 2; TECH |
| **7** | **Datenmodell: Plan, Einheiten, Marker** | Datenbeziehungen, Markerzuordnung und Prozentkoordinaten als responsive Lösung. | Datenstruktur und annotierter Gebäudeplan. | ZB § 2–3; SB Technik; TECH |
| **8** | **WordPress-Administration** | Eingabe, Berechtigungen, sicherer Speicherpfad, Begrenzung auf vorhandene Einheiten; zusätzliche Komfortideen steigerten den Aufwand. | Echter Admin-Screenshot mit Plan-/Einheiten-/Markerfeldern. | SB Technik/Reflexion; TECH; PACKAGE |
| **9** | **Frontend und Shortcode** | Gespeicherte Daten über PHP/Shortcode in HTML bringen; JavaScript als Browserinteraktion verstehen. | Originale Shortcode-Einbindung und Frontend-Seite. | SB Technik; TECH; DEMO |
| **10** | **Interaktion und Ergebnis** | Zuordnung von Marker und Einheit; unabhängiger Zustand, wenn zwei Shortcodes auf einer Seite stehen. | Vorher-/Nachher-Bildpaar; bei Bedarf Testbild zu zwei Instanzen. | SB Technik/Reflexion; TECH; DEMO |
| **11** | **Testen, Stabilisieren, Fehler verstehen** | Tests richtig interpretieren; tatsächliche Produktgrenzen dokumentieren; Testtreiber-Fehlversuch ursächlich lösen. | Originale Testprotokolle, Resultate, ggf. Screenshot eines beschriebenen Fehlerfalls. | SB Tests/Reflexion; PACKAGE; LIMIT |
| **12** | **Dokumentation, Übergabe und Rückblick** | Ein überprüfbares Ergebnis verständlich übergeben; Priorisierungs- und Zeitfehler für nächste Projekte auswerten. | README, Installationspaket, Dokumentationsausschnitt, Soll–Ist-Zeitachse. | SB Abschluss/Reflexion; DEMO; PACKAGE |

## 3.1 So hängt die Mitte der Geschichte mit dem Schluss zusammen

**Anfang:** Die Aufgabe klang zunächst einfach: ein Bild zeigen und anklickbare Informationen ergänzen. Tatsächlich verlangte sie die Einarbeitung in eine vollständige Softwareumgebung.

**Erste Schwierigkeit:** Bei der Recherche und im Mockup zeigten sich mehrere denkbare Varianten. Zu viele Informationen und Funktionen machten das Produkt komplizierter. Tatos Feedback half, den Kern wieder zu fokussieren.

**Technischer Fortschritt:** WordPress-Plugin, PHP-Verarbeitung, Datenhaltung und Browserinteraktion wurden Schritt für Schritt zu einem vollständigen Ablauf verbunden. Einige zunächst kleinen Entscheidungen – etwa **relative Koordinaten** oder der **Auswahlzustand je Einbindung** – berührten mehrere technische Schichten.

**Zweite Schwierigkeit:** Zusätzliche Komfortideen und Integrationsfragen erhöhten den Aufwand. Der funktionierende Kernablauf und seine systematischen Prüfungen wurden vor allem **gegen Ende** abgeschlossen. Tests zeigten ausserdem, dass auch die Prüfwerkzeuge Fehler verursachen können.

**Auflösung:** Ein dokumentierter Prototyp konnte übergeben werden. Die wichtigste Lernerfahrung ist die Verbindung aus **technischem Verständnis, engerem Scope, früher End-to-End-Integration und überprüfbarer Dokumentation**.

## 3.2 Chronologische Tatsachen, die in der Endfassung zusammenpassen müssen

| Datum / Phase | Bedeutung |
|---|---|
| **12.06.2026** | Genehmigungsunterlage: unterzeichnete Projektbeschreibung. |
| **29.06.–18.09.2026** | Zwölf Wochen, genehmigter Praktikumszeitraum. |
| **20.08.2026** | Versandtag laut SB-PDF, im Plan in Woche 8; beschriebener Stand Ende Woche 7. Vorbereitung und Grundgerüst sind berichtet, nicht durch spätere Screenshots rückwirkend datiert. |
| **12.09.2026** | Übungen, Umgebungsprüfung, Grundgerüst, Datenhaltung und Admin-Funktion technisch nachgewiesen. Teile der Dokumentation wurden rekonstruiert/abgeschlossen. TIMELINE nennt bei Sprint 6–8 auch spätere Implementierung, nicht bloss erneute Prüfung. |
| **13.09.2026** | Datierte Frontend-, Marker-, Integrations-, Test- und Paketverifikationen. |
| **17.09.2026** | Übergabe laut SB-PDF § 6; vom früheren Repository-Stand vom 13.09. noch nicht bestätigt. |
| **18.09.2026** | Abschlussbesprechung laut SB-PDF § 6; keine unabhängige Bestätigung durch die hier geprüften technischen Quellen. |
| **30.09.2026** | Massgeblicher dreiseitiger PDF-Schlussbericht mit Ergebnisbeurteilung, Soll–Ist, Reflexion und berichteter Übergabe. Die früher zusammengeführten Fassungen bleiben separate Quellen. |

**Erläuterung für den Vortrag, als Vorschlag:** „Recherche, Mockup und Einarbeitung liefen teilweise parallel. Im Zwischenbericht hatte ich schon beschrieben, dass ich schnell zusätzliche Möglichkeiten mitdenke. Die vollständige Integration kam dann später als geplant. Die datierten Umsetzungs- und Prüfbelege liegen vor allem im September. Heute würde ich früher einen kleinen Ablauf von der Eingabe bis zur Anzeige fertigstellen.“

**Was die ersten Wochen konkret ergaben:** Laut ZB und SB-PDF waren das abgegrenzte Anforderungen, ein Vergleich von Interaktionsmöglichkeiten, ein Mockup mit reduzierter Informationsanzeige, Einarbeitung in Plugins/Hooks/Shortcodes und ein Datenkonzept. Diese Ergebnisse erklären die Vorbereitung. Fehlende Originaldateien nicht durch neue historische „Beweise“ ersetzen. Der erste Funktionszeitpunkt jeder Komponente wurde laut SB-PDF § 3 nicht lückenlos festgehalten; TIMELINE nennt die Konzeptabstimmung nur rückblickend berichtet. Weder Planwochen noch Sprintordner belegen Arbeitsstunden.

**Sachliche Differenz beibehalten:** SB-PDF beschreibt das Grundgerüst als früh aufgebaut und am 12.09. abschliessend geprüft; TIMELINE beschreibt auch eine spätere Fertigstellung/Implementierung. Die Folien dürfen frühen berichteten Stand und späteren nachgewiesenen Stand zeigen. Ohne zusätzliche zeitgenössische Belege nicht behaupten, die spätere Ausführung sei ausschliesslich Wiederverifikation gewesen.

---

# 4. Technische Substanz: Was der Prototyp tatsächlich kann und warum es relevant ist

## 4.1 Architektur auf einen Blick

```text
WordPress-Administrator
   │  Planbild, Titel, vorhandene Einheiten und Marker bearbeiten
   ▼
Classic wp-admin form  ── Prüfen/Bereinigen/Berechtigung ──► WordPress Options API
                                                        option: propvista_plan
                                                              │
WordPress-Seite mit [propvista_plan] ◄── PHP liest Plandaten ───┘
   │
   ▼
HTML/CSS: Planbild und Markerebene
JavaScript: Marker aufbauen, Auswahl lokal ändern, Einheitsdetails anzeigen
   │
   ▼
Besucher wählt A / B / C → Informationen der verknüpften Einheit erscheinen
```

**Der begrenzte und sinnvolle Stack:** PHP + WordPress Plugin/Options API für Backend und Einbindung; HTML/CSS + Vanilla JavaScript für Darstellung und Browserinteraktion; ein WordPress-Options-Datensatz für Plan/Einheiten/Marker. Keine zusätzliche Datenbanktabelle, keine REST-Applikation, kein React-Frontend und kein externer Backend-Dienst waren für den genehmigten Kernumfang erforderlich. [TECH]

## 4.2 Die konkreten Implementierungsbausteine

| Bestandteil | Technische Realität | Warum im Vortrag interessant |
|---|---|---|
| **Plugin-Erkennung** | `propvista-plugin.php` enthält den WordPress-Plugin-Header und Bootstrap. | Einstieg in das WordPress-Erweiterungsmodell. |
| **Hooks** | Unter anderem `admin_menu`, `admin_post_propvista_save_plan`, `init`. | Eine Funktion muss **zur richtigen Zeit** im bestehenden System registriert/ausgeführt werden. |
| **Persistenz** | Ganze Struktur unter Options-Key `propvista_plan`. | Für einen Plan reicht einfache WordPress-native Speicherung. |
| **Einheiten und Marker** | Drei vorhandene Einheiten `unit-1` bis `unit-3`, Marker A/B/C mit `unit_id`, `x`, `y`, `label`. | Zuordnung von interaktiver Grafik zu Datenmodell. |
| **Admin** | Vorhandene Datensätze bearbeiten; Planbild, Titel, Einheitentitel, Status, Beschreibung und Markerkoordinaten. | Benutzerfreundliche Eingabe und Sicherheits-/Validierungsfragen. |
| **Shortcode** | `[propvista_plan]` rendert die Planansicht auf einer WordPress-Seite. | Kompletter Datenweg vom Backend zur Website. |
| **Browser** | Marker sind Buttons; Klick/Enter/Space ändert Auswahl und Informationsbereich. | Serverseitige Ausgabe und clientseitiger Zustand sind unterschiedliche Aufgaben. |
| **Mehrere Instanzen** | Gleicher gespeicherter Plan, unabhängiger Auswahlzustand pro Shortcode. | Kleine Architekturdetails verhindern unerwünschte gegenseitige Beeinflussung. |
| **Grenzen** | Keine Einheiten-/Marker-Erzeugung im Admin, kein visueller Editor, ein gespeicherter Plan; bei deckungsgleichen Markern Mauskonflikt. | Ein Prototyp ist ein überprüfbares Ergebnis mit bewussten Grenzen. |

Quelle für diese Matrix: [TECH] und [LIMIT]; bestätigt durch die technische Ergebnisdarstellung im Schlussbericht.

## 4.3 Zwei technische Entscheidungen mit wirklichem Erklärwert

### Beispiel A — Prozentkoordinaten statt Pixelkoordinaten

**Ausgangspunkt:** Ein Marker muss dieselbe Wohnung markieren, auch wenn das Grundrissbild auf dem Smartphone schmaler dargestellt wird. Bei starren Pixelkoordinaten wäre die Position an eine konkrete Darstellungsgrösse gebunden.

**Lösung:** Positionen als Prozentwerte relativ zur Bildfläche speichern und auf der skalierenden Ausgabe anwenden. Beispiel: `x = 21 %`, `y = 45 %`. Der technische Zusammenhang zieht sich **vom Datenmodell über die Admin-Eingabe bis ins CSS/JavaScript**. Im Endprodukt werden Marker an Rändern bei Bedarf visuell eingerückt, damit die Bedienelemente erreichbar bleiben. [ZB, S. 2; SB; TECH]

**Erklärung am Beispiel:** „Wenn der Plan schmaler wird, soll der Marker dieselbe Stelle treffen. Deshalb steht im Datensatz etwa 21 Prozent statt einer festen Pixelzahl. Diesen Wert muss ich im Formular eingeben und im Frontend auf dieselbe Bildfläche beziehen.“ Das Beispiel trägt die Erkenntnis; ein allgemeiner Lernsatz ist nicht nötig.

### Beispiel B — Auswahlzustand pro Shortcode-Instanz

**Ausgangspunkt:** Wird derselbe Shortcode zweimal verwendet, sollen zwei Planansichten einander nicht unbeabsichtigt beeinflussen.

**Prüfkriterium:** Wähle in Ansicht A einen Marker; die Auswahl in Ansicht B soll unverändert bleiben.

**Umsetzung:** JavaScript arbeitet für jede `.propvista-plan`-Einbindung mit einem **eigenen Auswahlzustand**, während die Quelle des Plans weiterhin derselbe WordPress-Options-Datensatz ist. Das ist **geteilte Datenquelle, unabhängiger UI-Zustand** – keine Implementierung verschiedener speicherbarer Pläne. [SB-PDF § 5; TECH]

**Erklärung am Beispiel:** „Beide Ansichten lesen denselben gespeicherten Plan. Wenn ich oben A auswähle, soll unten trotzdem die bisherige Auswahl stehen bleiben. Deshalb wird die Auswahl innerhalb jeder einzelnen Ansicht verwaltet.“ Das eigene Prüfkriterium und die Beurteilung anhand dieses Ablaufs stehen in SB-PDF § 5.

## 4.4 Tests und Debugging – konkrete, erzählenswerte Fälle

### Fall 1 — Ein scheinbar fehlgeschlagener Speichervorgang

In der technischen Paketprüfung konnte ein automatisierter Klick die **ausserhalb des sichtbaren Ausschnitts gelegene Speichern-Schaltfläche** zunächst nicht wirksam betätigen. Die erwartete Speicherbestätigung erschien nicht. Nach **gezieltem Scrollen, erneutem Klick und unabhängigem Wiederladen** bestätigte sich die Speicherung. Für diese Korrektur musste der **Testablauf** angepasst werden; eine Änderung am Plugin-Code war für diesen Fehlerfall nicht nötig. [SB-PDF, § 5; PACKAGE, „Retained qualifications“]

**Kurze Erzählung, kein Originalzitat:** „Bei einer Speicherprüfung fehlte zuerst die Bestätigung. Im Testablauf wurde der Speichern-Button nicht wirksam ausgelöst. Nach dem Scrollen und einem erneuten Klick waren die Werte auch beim unabhängigen Wiederladen vorhanden. Für diesen Fall mussten wir den Testablauf korrigieren.“

Der Nachweis beschreibt eine unterstützte Browser-/PHP-/HTTP-Prüfung. Den eigenen Anteil anhand dessen erklären, was ich tatsächlich beobachtet, nachgelesen oder überprüft habe; nicht behaupten, alle automatisierten Schritte eigenhändig ausgeführt oder die Ursache allein entdeckt zu haben. [SB-PDF § 5; PACKAGE]

### Fall 2 — Überlappende Marker

Der Test mit **zwei exakt deckungsgleichen Markern** zeigte eine echte Grenze: Ein Bedienelement konnte das andere für die Maus verdecken. Im Regressionsergebnis wurden **sechs entsprechende Pointer-Assertions als FAIL** erhalten. Das ist **ein dokumentierter Problemfall**, nicht sechs unabhängig erfundene Produktionsfehler. Tastaturzugriff blieb in der geprüften Situation möglich. Im Prototyp wird die Kollision durch verschieden gewählte Koordinaten vermieden; eine allgemeine Kollisionsauflösung gehört zu späterer Arbeit. [LIMIT; Sprint-11-Coverage]

**Lerneffekt:** Ein funktionierender Normalfall ist wertvoll, aber Grenzfälle zeigen die Grenzen einer Lösung. Gutes Ergebnismanagement heisst, diese Grenzen klar zu benennen.

### Fall 3 — KI-Zusammenfassung versus tatsächlicher Projektstand

Im Schlussbericht wird beschrieben, dass eine durch KI erzeugte Zusammenfassung bereits implementierte Funktionen und zuvor diskutierte Erweiterungen vermischte. Durch Abgleich mit **Code, Teststand und Übergabepaket** wurde der Text korrigiert. Das ist ein konkretes Beispiel dafür, dass **plausibel formulierte Dokumentation** mit dem tatsächlichen Produktzustand verwechselt werden kann. [SB-PDF, § 5]

**Lerneffekt:** Anforderung, implementierte Funktion, getestetes Verhalten und mögliche Weiterentwicklung sind vier verschiedene Zustände. KI-Unterstützung ist nützlich; **Verantwortung für technische Richtigkeit** bleibt Teil der eigenen Arbeit.

## 4.5 Ergebnisbeurteilung mit angemessener Genauigkeit

**Erreicht:** Kernablauf in geprüfter WordPress-Testumgebung, dokumentierte Admin-Persistenz, shortcodebasierte Ausgabe, A/B/C-Interaktion, grundlegende Tastaturbedienung, Rechte-/Nonce-/Eingabekontrollen, reproduzierbar geprüftes Installationspaket, Dokumentation und die berichtete Übergabe. [SB; TECH; PACKAGE]

**Bedingungen und Grenzen:** Ein gespeicherter Plan, drei vorhandene Einheiten/Marker, manuelle Zahlenwerte statt visueller Bearbeitung; genau deckungsgleiche Marker können sich gegenseitig verdecken. Tests erfolgten in konkret benannten Umgebungen; sie belegen **den getesteten Prototyp**, nicht beliebige WordPress-Installationen oder einen produktiven Kundeneinsatz. [LIMIT; PACKAGE]

**Technischer Nachweis zum Stand 13.09.2026:** Die Sprint-11-Regression verzeichnet **38 abgedeckte Testfall-IDs**, **1'448 PASS** und **sechs erhaltene Kollisions-FAIL-Assertions**, daneben **38 PASS** für separate problematische Formulareingaben. Die gesonderte Paketprüfung dokumentiert **149 Browser-Assertions: 147 PASS und zwei ursprüngliche testhelferbedingte FAIL**, zusätzlich eine fehlgeschlagene Locator-Aktion. Erfolgreiche Folgeversuche klärten die betroffenen Abläufe; ursprüngliche Fehlschläge bleiben erhalten. Das sind Prüfbehauptungen über mehrere Versuche, keine Anzahl verschiedener manueller Testfälle. Auf der Hauptfolie genügen geprüfte Abläufe und bekannte Grenzen. [TECH; EVMAP; PACKAGE]

**Was man auf einer Folie sagen sollte:** „Die Kernfunktion ist im geprüften Rahmen funktionsfähig. Wir haben Speicherung, Anzeige, Markerzuordnung und grundlegende Sicherheits-/Bedienfälle geprüft; insbesondere deckungsgleiche Marker bleiben eine bekannte Grenze.“ Technische Zahlen gehören bei Bedarf in die Sprechernotizen.

---

# 5. Bildmaterial: bevorzugte echte Quellen und Verwendung

## 5.1 Wichtigste Regel

Die Präsentation braucht **mehr Bilder aus der tatsächlichen Arbeit**, nicht mehr dekorative Diagramme. Ein echtes Bild kann eine ganze Folie tragen, wenn es gross genug ist, um den relevanten Teil zu erkennen. **Bildbeschriftungen benennen jeweils klar: Praxisreferenz, eigener Entwurf/Rekonstruktion, Originalaufnahme aus dem Praktikumsprototyp oder Testprotokoll.** Vermeide generische Stockbilder und Screenshots der späteren Produktphase.

## 5.2 Direkt nutzbare Praxis- und Praktikumsquellen

| Motiv | Konkrete Quelle | Ideal für |
|---|---|---|
| **Impel Verde, Praxisreferenz** | https://impel.ge/portfolio/buildings/?id=5 | Problemstellung, Branchenkontext. Dieses Bild **zeigt nicht PropVista**. |
| **WordPress-Plugin aktiv** | [Originalaufnahme nach verbessertem Bild-Audit](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/evidence-review-2026-09-13/captures/01-plugin-active.png) | Plugin-Erkennung/Entwicklungsumgebung. |
| **PropVista-Admin** | [Originalaufnahme – Plan und Einheiten](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/evidence-review-2026-09-13/captures/02-admin.png) | Backend-Eingabe. Für unterhalb liegende Markerfelder andere Originalaufnahme/gezielten Ausschnitt verwenden. |
| **Plan vor der Auswahl** | [Originalaufnahme – A/B/C](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/evidence-review-2026-09-13/captures/03-plan-markers.png) | Frontend, Interaktionsausgangszustand. |
| **Plan nach Klick auf C** | [Originalaufnahme – Unit 3 sichtbar](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/evidence-review-2026-09-13/captures/04-marker-selected.png) | Vorher/Nachher-Paar mit identischem Ausschnitt. |
| **PHP-/Plugin-Dateien** | [`includes/plugin.php`](https://github.com/duracell04/propvista_plugin/blob/0b87f9834a8ed0c655bd009a39f368a1547eaa1a/includes/plugin.php), [`includes/data-store.php`](https://github.com/duracell04/propvista_plugin/blob/0b87f9834a8ed0c655bd009a39f368a1547eaa1a/includes/data-store.php) | Codeausschnitt zur Einarbeitung, Hooks und Speicherung. |
| **Shortcode/Browserlogik** | [`includes/shortcode.php`](https://github.com/duracell04/propvista_plugin/blob/0b87f9834a8ed0c655bd009a39f368a1547eaa1a/includes/shortcode.php), [`assets/js/propvista-frontend.js`](https://github.com/duracell04/propvista_plugin/blob/0b87f9834a8ed0c655bd009a39f368a1547eaa1a/assets/js/propvista-frontend.js) | Datenweg und Marker-Auswahl. |
| **Testprotokoll Speichern** | [Paketverifikation](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/package-verification.md), [Rohprotokoll](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/raw/browser-workflow-resume.json) | Fehlerdiagnose und erfolgreicher zweiter Versuch. |
| **Testübersicht und bekannte Grenze** | [38-Testfall-Abdeckung](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-11/technical_artifacts/case-coverage.md), [Prototyp-Grenzen](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/prototype-limitations.md) | Tests und ehrliche Ergebnisbeurteilung. |
| **Dokumentation und Übergabe** | [README](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/README.md), [Technische Struktur](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/technical-structure.md), [Übergabenotiz](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/handover-note.md) | Abschluss und Nachvollziehbarkeit. |
| **Soll–Ist-Übersicht** | [Projektzeitachse](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/project-timeline.md) | Knappe Gegenüberstellung von Planung und realer Verifikation. |

**Zum Mockup und Softwarevergleich:** Der Zwischenbericht beschreibt die Recherche und den ersten Mockup. Die bestehende PowerPoint nutzt hierzu eine **schematische Rekonstruktion**. Ist die ursprüngliche Datei im Präsentations-Repository vorhanden, verwende diese. Andernfalls zeige ein **als Rekonstruktion gekennzeichnetes** einfaches Vorher/Nachher-Bild und ergänze mit den tatsächlich betrachteten Praxisreferenzen. An dieser Stelle ist eine erklärende Visualisierung legitim; sie darf nur nicht als historischer Screenshot etikettiert werden.

**Zu den vier präsentationstauglichen Originalbildern:** Der datierte [Demo-Guide](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/demo-guide.md) dokumentiert ihre Aufnahmebedingungen und die überprüfte Marker-Konfiguration **A=(21,45), B=(50,45), C=(79,45)**. Sie ist ein **gespeicherter Demonstrationszustand**; die unveränderten ZIP-Defaults verwenden andere Prozentwerte. Halte das Vorher/Nachher-Paar hinsichtlich Bildausschnitt und Zoom identisch.

**Bildumfang als Designziel:** Möglichst viele **sinnvolle, gut lesbare Originalartefakte**, ohne Mindestquote. Ein echter Codeausschnitt oder nachvollziehbarer Test kann mehr erklären als ein weiteres Dashboardbild. Jeder Beleg muss die Aussage der Folie tragen. Redundante Bilder und unlesbare Protokolle weglassen; Diagramme ergänzen den Datenweg oder einen Zusammenhang.

---

## 5.3 Aufnahmezeitpunkt und Bildbeschriftung

| Material | Beschriftung und Behandlung |
|---|---|
| Vier bevorzugte native Aufnahmen aus `evidence-review-2026-09-13/captures/` | „Praktikumsprototyp 0.1.0 · Aufnahme 13.09.2026 · gespeicherter Demozustand“. Das Adminbild belegt nur den sichtbaren Formularausschnitt. |
| WordPress-/PHP-/Aktivierungsbelege in frühen Sprintordnern | Tatsächliches Datum aus Protokoll/Datei angeben, z. B. „Nachweis vom 12.09.2026 zum Thema Planwoche 3“. Nicht „Screenshot aus Woche 3“. |
| Früher Mockup | Historisches Original nur mit nachvollziehbarer Herkunft. Neue Illustration: „Schematische Rekonstruktion des beschriebenen Mockups, erstellt für die Präsentation“. |
| Impel Verde / Rechercheansicht | Externe Praxisreferenz mit Quelle; heutiges Aufnahmedatum und damaligen Recherchezeitraum unterscheiden. Kein PropVista-Kundeneinsatz daraus ableiten. |
| Vollständige ursprüngliche Sprint-12-Formularbilder | Als technische Belege erhalten; für Hauptfolien ggf. zu lang. Die bevorzugten engeren Aufnahmen stammen aus dem separaten Review. |
| Schmale Demoansichten | 390px nur ergänzend; bei 320px dokumentierte Enge der Fokusringe und Bildbeschriftung. Erfolgreiche Bedienprüfungen beweisen keine perfekte Gestaltung jeder Ansicht. |

Beschnitte und Markierungen sind als Bearbeitungen eines datierten Originals nachvollziehbar. Neu erstellte Aufnahmen tragen ihr neues Datum. Septemberbilder dürfen frühe berichtete Tätigkeiten illustrieren, aber keine zeitgenössische Fertigstellung vortäuschen. [DEMO; LIMIT]

---

# 6. Empfohlenes Storyboard für die endgültige PowerPoint

## 6.1 Titel und Ton

**Titelfolie, bevorzugte Fassung**

> **Mein Informatikpraktikum bei Tatsson.com**  
> *PropVista – Entwicklung eines WordPress-Plugins, Herausforderungen und Lernerfahrungen*  
> Enrique Georg Zbinden · 29. Juni bis 18. September 2026

Der Titel ist bewusst unaufgeregt. Er legt die Aufmerksamkeit auf das Praktikum, das konkrete Produkt und die persönliche Lernerfahrung. Die Vortragsstimme ist **natürlich, eigenständig, fachlich interessiert und selbstkritisch**. Keine Marketing-Slogans, kein künstlicher Heldenbogen und kein betontes „alles war perfekt“.

## 6.2 Hauptvortrag: 17 Folien mit Sprechzeiten

Alle zwölf Planwochen bleiben als Orientierung erkennbar. Die frühen WordPress-/PHP-Themen werden zusammengeführt, Zusatzdetails in Reservefolien verlagert. Zeitplan: **455 Sekunden = 7:35 Minuten Inhalt**; 25 Sekunden verbleiben bis 8:00 für Übergänge und kurze Pausen. Ziel nach gesprochener Probe: etwa **7:45–7:50**. Das ist ein Plan, keine gemessene Redezeit.

| Nr. | Bezug | Natürlicher Titel | Aussage und Beleg | Redezeit |
|---:|---|---|---|---:|
| 1 | Einstieg | **Mein Informatikpraktikum bei Tatsson.com** | Ergebnisbild, Zeitraum und Projektbezeichnung. | 0:10 |
| 2 | W1 | **Wie ich zum Projekt kam – und was gebraucht wurde** | Tato/Tatsson, Praxisreferenz und begrenzter Auftrag: Plan, Marker, Einheitsinformationen. | 0:30 |
| 3 | W2–3 | **PHP innerhalb von WordPress verstehen** | Vorkenntnisse; echter Hook-Ausschnitt; Registrierung und Ausführungszeitpunkt. | 0:40 |
| 4 | W4 | **Ausprobieren in der Testumgebung** | Aktivierung und sichtbare Rückmeldung; Aufnahme als späteren Septembernachweis datieren. | 0:15 |
| 5 | W5 | **Welche Interaktion zum Auftrag passte** | Recherche: hilfreiche Muster und zusätzliche Ideen; keine unbelegten Marktbehauptungen. | 0:20 |
| 6 | W5 | **Was der Mockup an den Anforderungen änderte** | **Vertiefung 1:** Informationsüberladung, Details nach Auswahl, Einfluss auf Datenmodell; Tatos Priorisierungshilfe. | 0:50 |
| 7 | W6 | **Ein kleines Plugin mit klaren Aufgaben** | Dateien für Datenhaltung, Administration und Shortcode; Aktivierung als nachgewiesener Septemberstand. | 0:10 |
| 8 | W7 | **Einheiten, Marker und Prozentkoordinaten** | `unit_id` verbindet Marker mit Einheitsdaten; relative Lage bei proportionaler Skalierung. | 0:35 |
| 9 | W8 | **Daten im Backend pflegen und wieder laden** | Formular für einen Plan und drei bestehende Einheiten; Speichern und Zugriffsschutz. | 0:20 |
| 10 | W9 | **Vom Formular bis zur Markerauswahl** | **Vertiefung 2:** Options API → Shortcode/PHP → JSON/HTML → JavaScript. Speicherung und Browserauswahl unterscheiden. | 1:00 |
| 11 | W10 | **Ein Klick zeigt die richtige Einheit** | Grosses Vorher/Nachher-Paar vom 13.09.; A/B/C als Kernfunktion. | 0:25 |
| 12 | W10 | **Zwei Ansichten, unabhängige Auswahl** | Dasselbe gespeicherte Planobjekt, eigener Auswahlzustand; eigenes Prüfkriterium aus SB-PDF § 5. | 0:20 |
| 13 | W11 | **Was geprüft wurde – und welche Grenze bleibt** | Speichern, Markerzuordnung, Tastatur, abgewiesene Eingaben; deckungsgleiche Marker als erhaltene Fehlerfälle. | 0:25 |
| 14 | W11 | **Als der Speichern-Klick nicht ankam** | Kurze Testgeschichte: fehlende Bestätigung, Scrollen/Klick, unabhängiges Rücklesen. | 0:20 |
| 15 | Arbeitsweise | **Meine Rolle bei der Arbeit mit ChatGPT und Codex** | Prüfkriterien/Priorisierung/Beurteilung; Unterstützung und korrigierte KI-Zusammenfassung. | 0:20 |
| 16 | W12 / Verlauf | **Später integriert, im Planzeitraum übergeben** | Früher berichteter Stand vs. 12./13.09.-Nachweise; Übergabe 17.09. und Gespräch 18.09. laut SB-PDF. | 0:30 |
| 17 | Schluss | **Was ich heute früher machen würde** | Funktionierender Prototyp; früher vollständiger kleiner Ablauf; flexiblere Datenpflege und Anwender-/Kompatibilitätstests als Ausblick. | 0:25 |

**Reservefolien ausserhalb der Redezeit:** vollständige Soll–Ist-Tabelle; detaillierter Speicherpfad und Nonce; zwei Instanzen mit Code; Regression/Paketprüfung mit verschiedenen PASS/FAIL-Zahlen; weitere Originalbilder und Quellenregister. Die Schlussfolie bleibt während der Diskussion stehen.

**Bei zu langer Probe:** zuerst Kontext/Recherche kürzen oder reine Bildfolien zusammenführen. Auftrag, technische Erklärung, ehrliche Ergebnisbeurteilung und Schluss nicht streichen. Die Reserve wird nicht im Hauptvortrag „schnell noch“ durchgeklickt.

**Bezug zur aktuellen Website:** Bei der Überarbeitung dieses Briefings listet das Präsentations-Repository **24 Folien**. Der neue Plan ist eine Empfehlung für deren spätere Kürzung und keine Behauptung, die Website sei bereits angepasst oder die Redezeit gemessen.

## 6.3 Was die zwei Vertiefungen erklären sollen

**Vertiefung 1 – Mockup und Scope, 50 Sekunden:** Eine echte oder klar als Rekonstruktion bezeichnete Darstellung zeigen. Erklären, was gleichzeitig sichtbar sein sollte, weshalb die Planansicht dadurch überladen wurde und wie die Auswahl mit nachgelagerten Details den Kern vereinfachte. Den Zusammenhang zur Datenstruktur nennen: Ein Marker verweist auf eine Einheit; deren Informationen müssen nicht dauerhaft im Bild stehen. Tatos Feedback als Hilfe bei der Priorisierung beschreiben, ohne Dialoge oder konkrete Meetings zu erfinden. [SB-PDF § 1, 5; ZB]

**Vertiefung 2 – durchgängiger Datenweg, 60 Sekunden:**

1. Eine berechtigte Person ändert einen Einheitentitel und speichert das Formular. Der PHP-Handler prüft Methode, Berechtigung, Nonce und Daten.
2. Der zusammengehörige Plan wird unter `propvista_plan` mit der Options API gespeichert. Wiederladen prüft die tatsächlich gespeicherten Werte.
3. Beim Seitenaufruf verarbeitet WordPress `[propvista_plan]`. PHP liest den Plan, liefert HTML und die zugehörigen Marker-/Einheitsinformationen als JSON im `data-markers`-Attribut.
4. Im Browser erzeugt JavaScript die Markerbuttons. Ein Klick aktualisiert den Informationsbereich **dieser Ansicht**. Dafür gibt es keinen neuen Schreibzugriff auf die Options und keinen zusätzlichen Anwendungsrequest.

Die Hauptfolie zeigt den kurzen Ablauf und einen lesbaren Originalausschnitt. Die genaue Validierung bleibt in der Reserve. PHP erzeugt hier nicht die Markerbuttons; JavaScript baut sie aus den übergebenen Daten. [TECH; Runtime `includes/admin-page.php`, `includes/shortcode.php`, `assets/js/propvista-frontend.js`]

**Stummtest:** Jede Folie hat einen verständlichen Titel, einen gut lesbaren Beleg und einen kurzen erklärenden Satz. Der Screenshot zeigt das Ergebnis; die mündliche Erklärung verbindet es mit dem Arbeitsprozess. Auf technischen Folien genügt die Hauptaussage, nicht jedes Detail einer vollständigen Implementierung.

## 6.4 Drei persönliche Erfahrungen und die konkrete Eigenleistung

Die folgenden Texte sind **Formulierungsvorschläge auf Basis des Berichts**, keine Originalzitate. Zum Üben reichen die Stichwörter; die Sätze nicht auswendig lernen.

### A. PHP/WordPress-Einarbeitung

„Aus dem Studium kannte ich Python, C und Java. Bei WordPress war für mich das Umfeld neu: Wie wird ein Plugin geladen, und wann wird mein Code aufgerufen? Bei den Hooks musste ich die Funktion und ihren Aufrufzeitpunkt zusammen verstehen.“

Echter Ausschnitt aus dem Paketstand:

```php
add_action( 'admin_menu', 'propvista_register_admin_page' );
add_action( 'admin_post_propvista_save_plan', 'propvista_handle_save_plan' );
add_action( 'init', 'propvista_register_shortcode' );
```

`add_action` registriert jeweils einen Callback. Es führt die registrierte Funktion an dieser Stelle nicht sofort aus. WordPress ruft sie beim entsprechenden Hook auf: Adminmenü ergänzen, Formular verarbeiten oder Shortcode registrieren. Die im Menü hinterlegte Renderfunktion wird wiederum beim Aufruf der PropVista-Adminseite verwendet. Das Beispiel stammt aus `includes/plugin.php` am Runtime-Stand in Abschnitt 8; nicht als angeblich allein handgeschriebenen Code präsentieren. [SB-PDF § 2; TECH; persönliche Angaben zu Vorkenntnissen]

**Sprechstütze:** bekannte Programmierkonzepte → neues Plattformumfeld → Hook und Zeitpunkt.

### B. Umfang, Tato und die Verbindung der Berichte

„Im Zwischenbericht hatte ich schon geschrieben, dass ich schnell über zusätzliche Funktionen nachdenke. Tatos Rückmeldungen halfen mir, wieder die nächste überprüfbare Kernfunktion zu wählen. Am Ende merkte ich aber, dass der zusätzliche Umfang trotzdem Zeit für die Integration gekostet hatte. Heute würde ich erst den kleinen vollständigen Ablauf fertigstellen.“

Die Berichte zeigen denselben Arbeitsprozess aus zwei Zeitpunkten. Die frühe Beobachtung nicht in eine perfekte Erfolgsgeschichte umdeuten: Die Priorisierung half, und die Integration kam dennoch spät. Der Bericht nennt zusätzliche Komfortfunktionen als Belastung; für jedes behauptete konkrete Zusatzfeature muss dessen Stand belegbar sein. [ZB § 3 laut Briefing; SB-PDF § 3, 5]

**Sprechstütze:** viele Möglichkeiten → Rückmeldung/Priorisierung → spätere Integration → nächstes Mal früherer Kernablauf.

### C. Testdiagnose

„Bei einer Speicherprüfung fehlte zuerst die Bestätigung. Der Testtreiber hatte den Button ausserhalb des sichtbaren Bereichs nicht richtig ausgelöst. Nach dem Scrollen und dem erneuten Klick konnten die gespeicherten Werte auch unabhängig wieder geladen werden.“

Nur den eigenen tatsächlich zutreffenden Beobachtungs-/Prüfanteil ergänzen. Die Episode erklärt, weshalb die Ursache vor einer Codeänderung untersucht wurde. Der separate echte Produktgrenzfall bleibt die Markerüberlappung. [SB-PDF § 5; PACKAGE]

**Sprechstütze:** Bestätigung fehlt → Klick prüfen → erneut auslösen → gespeicherte Werte nachlesen.

### Eigenleistung, Unterstützung und Beleg

| Konkretes Beispiel | Meine im Bericht beschriebene Arbeit | Rolle der Tools und überprüfbarer Bezug |
|---|---|---|
| Zwei Shortcode-Einbindungen | Unabhängige Auswahl zum Prüfkriterium machen und die Lösung anhand dieses Ablaufs beurteilen. | KI unterstützt Umsetzung/Tests; im Code ist `selectedButton` lokal in `initializePlan(plan)`. Beide Ansichten lesen denselben Plan. [SB-PDF § 5; Runtime-JS] |
| Mindestumfang | Anforderungen klären, zusätzliche Ideen priorisieren, Tatos Rückmeldungen aufnehmen. | Tools unterstützen Umsetzung; Soll und tatsächlich vorhandene Funktionen mit PB, Bericht und Paket abgleichen. [SB-PDF § 1, 5] |
| Dokumentation | Eine Zusammenfassung mit Code und Übergabepaket vergleichen und falsch zugeordnete Erweiterungen berichtigen. | ChatGPT/Codex erzeugen Unterstützung, aber die Zusammenfassung ist kein Beleg für implementiertes Verhalten. [SB-PDF § 5] |
| Tests | Prüfkriterien formulieren, Ergebnisse verstehen und beurteilen; konkrete selbst ausgeführte Schritte wahrheitsgemäss benennen. | Paketnachweis nennt unterstützte Browser-/PHP-/HTTP-Prüfung, keine unassistierte Empfängerprüfung. PASS/FAIL und Folgeversuche unterscheiden. [SB-PDF § 4–5; PACKAGE] |

**Kurze mündliche Einordnung:** „ChatGPT und Codex haben mich beim Implementieren, Testen und Dokumentieren unterstützt. Mein Anteil war zum Beispiel, die unabhängige Auswahl bei zwei Ansichten als Prüfkriterium festzulegen und die Lösung daran zu beurteilen. Bei einer Zusammenfassung musste ich ausserdem umgesetzte Funktionen wieder von Erweiterungsideen trennen.“

Keinen Anteil handgeschriebenen Codes erfinden. Technische Begriffe nur verwenden, wenn ich sie am Datenweg erklären kann. Persönliche Kontakte knapp halten: Tatsson ist formeller Praktikumsgeber; Tato ist Betreuer; Solo Studio beschreibt das Umfeld und Impel Verde die Praxisreferenz.

---



# 7. UZH-Compliance: die überprüfbaren Kriterien

Die UZH-Kriterien sind **Abnahmetests für die Präsentation**, nicht deren Hauptgeschichte. Die verlinkten Quellen sind offizielle Dokumente des Instituts für Informatik.

## 7.1 Verbindlicher Präsentationsrahmen

| Anforderung | Wie die Präsentation sie erfüllt | Offizielle Grundlage |
|---|---|---|
| **7–8 Minuten Vortrag** | 455 Sekunden Hauptinhalt planen; mit Pausen und Übergängen etwa **7:45–7:50** gesprochen prüfen. | [UZH-Merkblatt, § 2.6, S. 4](https://www.ifi.uzh.ch/dam/jcr:6bf63227-071b-4c3c-993f-9b8962773f30/Merkblatt-Informatikpraktikum-SO26-DE-20260702.pdf) |
| **2–3 Minuten Diskussion** | Schlussfolie 17 bleibt stehen; technische Reservefolien und Abschnitt 9 bereiten Rückfragen vor. | [UZH-Merkblatt, § 2.6](https://www.ifi.uzh.ch/dam/jcr:6bf63227-071b-4c3c-993f-9b8962773f30/Merkblatt-Informatikpraktikum-SO26-DE-20260702.pdf) |
| **Aufgabenstellung** | Folie 2 zeigt Praktikumsgeber, tatsächlichen Kontext und begrenzten Projektauftrag. | Merkblatt § 2.6; [Infofolien 2026, Folie 9](https://www.ifi.uzh.ch/dam/jcr:8d3a89af-2a35-4d9c-84ac-6e38ae90547c/Informatikpraktikum%202026.pdf) |
| **Gewählte Lösung** | Backend, Options-Daten, Shortcode, Markerinteraktion. | Merkblatt § 2.6; Infofolien, Folie 9 |
| **Technische Ansätze** | Einarbeitung/WordPress-Hooks, Prozentkoordinaten, Zustandsmodell, Validierung/Tests. | Infofolien, Folie 9 |
| **Beurteilung des Erreichten** | Bildschirmbelege, ausgewählte Tests, bekannte Grenze und geplante vs. erreichte Ergebnisse. | Merkblatt § 2.6 |
| **Schlussfolgerungen** | Eigene Erfahrungen mit Scope, später Integration, Testdiagnose, KI-Verifikation. | Merkblatt § 2.6 |
| **Ausblick** | Weitere Datenpflege, Kollisionsbehandlung, Benutzer-/Kompatibilitätstests; separate Produktentwicklung. | Merkblatt § 2.6 |
| **Zugewiesene Session** | Teilnahme während der vollständigen Session gehört zum organisatorischen Ablauf. | Merkblatt § 2.6 |

Die Universität legt **keine bestimmte Anzahl Folien und keine Folie pro Woche** fest. Laut offiziellen Infofolien kann eine **Live-Demonstration freiwillig** eingebaut werden; echte Screenshots plus technische Ergebnisdarstellung sind für diesen Vortrag eine geeignete Alternative. Die Infofolien betonen ausdrücklich die Verständlichkeit für **Mitstudierende**, die den Projektauftrag noch nicht kennen. [Infofolien 2026, Folie 9]

**Wichtige Abgrenzung:** Anforderungen an den **Schlussbericht** sind verwandte, aber eigene Vorgaben: maximal drei Seiten, Arbeitsablauf/Beurteilung, Reflexion über Gelungenes und Schwierigkeiten, **Soll–Ist** anhand der Meilensteine und Einreichung zusammen mit Arbeitszeugnis-Kopie. Für die Präsentation heisst das: **diese Inhalte sinnvoll erklären**, nicht den Bericht seitenweise wiederholen. [UZH-Merkblatt, § 2.5, S. 3]

## 7.2 Abschlusscheck vor Freigabe der PowerPoint

- [ ] Die **Aufgabenstellung** ist schon zu Beginn für Mitstudierende verständlich.
- [ ] Die **technischen Ansätze** sind an konkretem Plugin-Code und Bildern erklärt.
- [ ] Die **gewählte Lösung** ist als durchgängiger Datenweg nachvollziehbar.
- [ ] Die **Original-Screenshots** zeigen das Praktikumsprojekt, nicht die spätere Produktversion.
- [ ] Die **Ergebnisbeurteilung** unterscheidet tatsächlich geprüfte Funktionen und dokumentierte Grenzen.
- [ ] **Zwischenbericht und Schlussbericht** bilden eine konsequente Lernentwicklung; frühe Sicht und spätere Reflexion passen zusammen.
- [ ] **Plangegebenes Wochenlabel und echter Abschlusszeitpunkt** sind klar auseinandergehalten; 12./13.09. sowie 17./18.09. stehen richtig.
- [ ] Die **zwei Vertiefungen** erklären Mockup/Scope und den Datenweg mit genügend Redezeit; die Testdiagnose bleibt eine kurze konkrete Erfahrung.
- [ ] Originalartefakte sind sinnvoll und lesbar; es gibt keine Screenshot-Quote. Aufnahmedatum, Rekonstruktionen und Septembernachweise sind bezeichnet.
- [ ] Die Folien bestehen den **Stummtest**; Sprechernotizen bieten zusätzlich einen persönlichen, lebendigen Vortrag.
- [ ] Die Redezeit liegt in **7–8 Minuten**; die Schlussfolie deckt Ergebnis, Fazit und Ausblick ab.
- [ ] Externe Praxisreferenzen und Screenshots sind korrekt zugeordnet; persönliche Daten bleiben ausserhalb der Folien.

---

# 8. Quellenregister: direkte Dateien und Primärnachweise

Die folgenden Links dienen als **Nachschlageziele**. Private Berichte bleiben private Originale; dieses öffentliche Briefing veröffentlicht weder den Bericht noch Matrikelnummer, Adressen oder Kontaktangaben. Die technischen Quellen werden auf die genannten Commit-Stände festgelegt.

### A. Dokumente des Praktikums

- **PB:** `Projektbeschreibung_Informatikpraktikum_final_unterzeichnet.pdf`, vier Seiten, unterschrieben am 12.06.2026 (privates Original, nicht im öffentlichen Präsentationspaket reproduzieren).
- **ZB:** `Zwischenbericht_Informatikpraktikum_Enrique_Georg_Zbinden(1).pdf`, zwei Seiten, 20.08.2026 (privates Original).
- **SB / SB-PDF – massgeblich:** `Schlussbericht_Informatikpraktikum_Enrique_Georg_Zbinden.pdf`, drei Seiten, **Berichtsdatum 30.09.2026**, vom Nutzer am 12.10. als Antwort auf die Quellenfrage bereitgestellt; alle drei Seiten gelesen. § 1–2: Auftrag/Technik; § 3: Soll–Ist; § 4: Tests/Grenzen; § 5: Einarbeitung, Scope, eigene Prüfkriterien, Testdiagnose, KI; § 6: Übergabe/Ausblick. Privates Original nicht in das öffentliche Repository kopieren.
- **SB29 / SB30 – ergänzend:** frühere `.docx`-Fassung vom 29.09. und weiterer `.md`-Text vom 30.09. Keine Zusammenführung als offizieller Bericht; direkte Zuschreibungen richten sich nach SB-PDF.
- **ANM:** `Anmeldung-Informatikpraktikum-RVO22_de-220323.pdf`, genehmigte Anmeldung; Kontakt-/Adressdaten nicht auf die Folien übertragen.
- **Vorheriges Deck:** `PropVista-Visuelle-Geschichte-final.pptx` (16 Folien, teils passende Sprecherhinweise und Originalbilder, aber zu wenig Bildmaterial/Prozessvertiefung). Dieses Deck darf gestalterisch weiterverwendet werden.

### B. Offizielle UZH-Quellen

- **Merkblatt Informatikpraktikum**, Dokumentkopf **02.07.2026**, insbesondere **§ 2.5 (Bericht), § 2.6 (Präsentation)**: https://www.ifi.uzh.ch/dam/jcr:6bf63227-071b-4c3c-993f-9b8962773f30/Merkblatt-Informatikpraktikum-SO26-DE-20260702.pdf
- **Infofolien Informatikpraktikum 2026**, Folie 9 (PDF-Seite 9), **„Die Schlusspräsentation“**: https://www.ifi.uzh.ch/dam/jcr:8d3a89af-2a35-4d9c-84ac-6e38ae90547c/Informatikpraktikum%202026.pdf
- **IfI-Übersichtsseite:** https://www.ifi.uzh.ch/de/studies/bsc-info/internship.html

### C. Technisches Praktikumsrepository – festgehaltener Stand

**Repository:** https://github.com/duracell04/propvista_plugin  
**Dokumentations-/Evidenzstand für diese Quellensammlung:** `dae9c627d35fb1ee3c75c2f0a397b2da54cef291`  
**Verifiziertes Runtime-Paket:** Quelle `0b87f9834a8ed0c655bd009a39f368a1547eaa1a`, Plugin **0.1.0**.

| Kürzel | Konkrete Quelle | Relevant für |
|---|---|---|
| `TIMELINE` | [docs/project-timeline.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/project-timeline.md) | Soll–Ist, echte technische Daten. |
| `TECH` | [docs/technical-structure.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/technical-structure.md) | Datenmodell, Dateien, Hooks, Speicherung, Shortcode und JavaScript. |
| `LIMIT` | [docs/prototype-limitations.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/prototype-limitations.md) | Tatsächlicher Produktumfang und bekannte Grenzen. |
| `EVMAP` | [docs/report-presentation-evidence-map.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/report-presentation-evidence-map.md) | Welche technische Aussage hat welchen Nachweis? |
| `PACKAGE` | [evidence/sprint-12/technical_artifacts/package-verification.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/evidence/sprint-12/technical_artifacts/package-verification.md) | Installation, UI-Abläufe, Tests, Testtreiber-Anekdote. |
| `DEMO` | [docs/demo-guide.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/demo-guide.md) | Echte Vorher-/Nachher-Screenshots und ihre Einstellungen. |
| `README` | [README.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/README.md) | Installation und tatsächliche Benutzung. |
| `HANDOVER` | [docs/handover-note.md](https://github.com/duracell04/propvista_plugin/blob/dae9c627d35fb1ee3c75c2f0a397b2da54cef291/docs/handover-note.md) | Stand der technisch vorbereiteten Übergabe am 13.09.; die tatsächliche Übergabe 17.09. steht im Schlussbericht. |

### D. Technische Primärdokumentation

- WordPress Plugin Handbook – Grundlagen: https://developer.wordpress.org/plugins/plugin-basics/
- WordPress Plugin Handbook – Hooks: https://developer.wordpress.org/plugins/hooks/
- WordPress Plugin Handbook – Shortcodes: https://developer.wordpress.org/plugins/shortcodes/
- PHP-Handbuch – PHP im Webkontext: https://www.php.net/manual/en/intro-whatis.php

Diese technischen Handbücher dienen **kurzen Begriffserklärungen**. Die Fakten über *mein Praktikum und meinen konkreten Code* stammen aus PB/ZB/SB und dem festgehaltenen Praktikumsrepository.

---

# 9. Vorbereitung auf technische Rückfragen

Die Antworten sind **Sprechstützen**, kein auswendig zu lernender Text. Jede Antwort am echten Artefakt erklären können. Wenn ein Detail nicht selbst bekannt ist, offen sagen, was der Nachweis zeigt und was noch nachgelesen werden müsste.

| Mögliche Frage | Kern einer nachvollziehbaren Antwort | Beleg / Detail bei Nachfrage |
|---|---|---|
| **Was war Ihre eigene Leistung mit KI-Unterstützung?** | Anforderungen klären, priorisieren, Umsetzung steuern und Ergebnisse beurteilen. Konkretes Beispiel: unabhängige Auswahl zweier Ansichten als Prüfkriterium festlegen und die Lösung daran prüfen. | SB-PDF § 5; Rollenmatrix 6.4. Keine erfundene Codequote oder Behauptung, jede automatisierte Aktion selbst ausgeführt zu haben. |
| **Wie funktioniert der Shortcode?** | Beim `init`-Hook wird `propvista_plan` registriert. Bei der Inhaltsverarbeitung ruft WordPress `propvista_render_plan()` auf. PHP liest den Plan und liefert HTML sowie JSON; JavaScript erzeugt Buttons und aktualisiert die Informationen im Browser. | `includes/plugin.php`, `includes/shortcode.php`, Runtime-JS. Ein Klick speichert nichts und braucht keinen neuen Anwendungsrequest. |
| **Warum die Options API?** | Für einen zusammengehörigen Plan mit wenigen Einheiten reichte die vorhandene WordPress-Speicherung. Eine eigene Tabelle hätte für diesen Umfang zusätzliche Struktur erfordert. | Option `propvista_plan`; `get_option()` / `update_option()`. Kein allgemeines Versprechen, dass dieses Modell für beliebig viele Pläne skaliert. |
| **Wie wissen Sie, dass Speichern funktioniert hat?** | Nach dem Formular-POST nicht nur auf eine Meldung vertrauen: die gespeicherten Werte wieder lesen und mit dem Kandidaten vergleichen. | PHP-Handler liest `get_option()` zurück. `update_option()` liefert auch bei unveränderten Daten `false`; daher reicht der Rückgabewert allein nicht. |
| **Warum Prozentkoordinaten?** | Damit ein Marker bei proportionaler Bildskalierung dieselbe relative Position behält. X ist der Anteil der Breite, Y der Anteil der Höhe. | ZB/SB-PDF; Adminfelder und JS. Beispiel: 21 % von 1'000 px sind 210 px, von 500 px 105 px. Visuelle Randeinrückung kann die Buttonmitte leicht verschieben, ohne die gespeicherten Werte zu ändern. |
| **Was passiert bei zwei Shortcodes?** | Beide verwenden denselben gespeicherten Plan, aber jede Ansicht hat ihren eigenen Auswahlzustand und Informationsbereich. | `initializePlan(plan)` und lokales `selectedButton`. Prüfkriterium: Auswahl oben ändert unten nichts. Es sind keine zwei unabhängig gespeicherten Pläne. |
| **Was geschah in den ersten zehn Wochen?** | Berichtete Recherche, Mockup, Plattformlernen, Umfangsklärung und Datenkonzept konkret benennen; danach die verspätete vollständige Integration erklären. Die frühen berichteten Arbeiten und die datierten Septemberbelege unterscheiden. | SB-PDF § 1–3, ZB laut Briefing, TIMELINE. Die ersten Funktionszeitpunkte sind nicht lückenlos belegt; keine Arbeitsstunden oder Juli-Ausführung aus Septemberdateien ableiten. |
| **Welche Tests und Ergebnisse?** | Beispiele nennen: speichern/wieder laden; A/B/C zeigt richtige Einheit; Tastaturauswahl; ungültige Eingaben bzw. unerlaubte Schreibzugriffe. Bekannte Grenze und Fehler im Testablauf getrennt erläutern. | Regression: sechs erhaltene Kollisions-FAIL-Assertions. Paketprüfung: ursprüngliche Helferfehler und erfolgreiche Folgeversuche. Assertionzahlen sind keine unterschiedlichen manuellen Testfälle. |
| **Was schützt den Speicherpfad?** | Berechtigung `manage_options`, POST-Prüfung, Nonce und Datenvalidierung; normalisierte Eingaben und kontextgerechte Ausgabe. | `includes/admin-page.php`. Der Nonce ersetzt die Berechtigungsprüfung nicht; geprüfte Schutzmechanismen sind keine umfassende Sicherheitszertifizierung. |
| **Was müsste vor produktivem Einsatz verbessert werden?** | Flexiblere Datenpflege, Kollisionsbehandlung, weitere Kompatibilitäts- und Anwenderprüfungen; nur geprüften Prototyp beanspruchen. | SB-PDF § 4, 6; LIMIT. Ein Plan, bestehende Datensätze, Zahlenkoordinaten; keine Produktivfreigabe. |
| **Ihr Bericht nennt Dialoge; die Demo zeigt einen Informationsbereich?** | Der hier gezeigte Paketstand aktualisiert einen Bereich innerhalb der Planansicht. Den Dialogabschnitt des Berichts nur mit tatsächlichem Kontext erläutern; ohne weitere Belege keine Dialogfunktion im Paket behaupten. | SB-PDF § 5 gegenüber Runtime-JS. Offene Zuordnung aus Abschnitt 2.1. |

## 9.1 Einmal vollständig ohne Manuskript üben

Mit den echten Folien in eigenen Worten sprechen, Zeit messen und bei jeder Hauptstation nur die Stichwörter aus Abschnitt 6 verwenden. Wenn die Erklärung stockt, die konkrete technische Verbindung nachlesen oder die Folie vereinfachen. Danach besonders Shortcode, Speicherung, Prozentkoordinaten und zwei Instanzen frei erklären.

Vor dem Vortrag prüfen:

- [ ] Ich kann Aufgabe, Kernfunktion und Ergebnis in zwei Sätzen erklären.
- [ ] Ich kann die drei persönlichen Erfahrungen anhand konkreter Quellen erzählen.
- [ ] Ich kann bei zwei Planansichten meinen eigenen Prüfentscheid und die technische Lösung erklären.
- [ ] Ich unterscheide Berichtsaussagen, datierte technische Belege und spätere Produktideen.
- [ ] Der Hauptvortrag bleibt mit Übergängen unter acht Minuten; Reservefolien stehen für Fragen bereit.

---

## Abschlussregel für den Agenten

**Baue eine präsentationsreife Geschichte aus echten Quellen, nicht eine Inszenierung von formaler Compliance.**

Die fertige PowerPoint soll in normaler Sprache zeigen, wie ich durch das Praktikum ein neues Webentwicklungs-Ökosystem kennengelernt, einen kleinen WordPress-Prototyp geplant und umgesetzt, Probleme diagnostiziert und meinen eigenen Entwicklungsprozess kritisch verbessert habe. **Die Bilder beweisen den Arbeits- und Produktkontext; die Erklärungen verbinden sie; die Lernpunkte geben der Geschichte Bedeutung.**

Das Ziel ist eine verständliche, belegbare Darstellung, deren technische Entscheidungen ich selbst erklären kann. Die Erfüllung der Inhalts- und Zeitvorgaben unterstützt einen erfolgreichen Leistungsnachweis; dieses Briefing verspricht keine Note oder Bestehensgarantie.
