# Tasks Frontend Development Prüfungstraining

## M1: HTML auf Validität prüfen

Prüfen Sie mit dem [W3C Validator](https://validator.w3.org/nu/#textarea) ob die *index.html* valide ist. Falls nicht, passen Sie bitte die Datei, bzw. die notwendigen Templates entsprechend an. Achtung: nutzen Sie dafür die generierte Datei im *docs* Folder.

**10min / HTML**

## M2: Gestaltung der Kacheln anpassen

Die Kacheln der *index.html* sollen in ein neues Design gebracht werden (siehe Abbildung). Dafür müssen Sie neben Anpassungen in den SCSS Files ggf. einige Klassen in der *index.html* entfernen. Nutzen Sie dazu die **Suchen & Ersetzen** Funktion Ihres Editors. Versuchen Sie das neue Design möglichst genau umzusetzen.
Das gewünschte Layout finden Sie unter *_stuff/m2-kachel.png*.

**15min / CSS & HTML**

## M3: Responsive Design

Die Übersichts- und Detailseite sollen mit einem reaktionsfähigen Layout ausgestattet werden. Nutzen Sie die definierten *Breakpoints* aus der *_variables.scss*, Abschnitt *Viewports*.  Das Layout soll die Geräteklassen «Smartphone», «Tablet» und «Desktop» unterstützen. 
Das gewünschte Layout finden Sie unter *_stuff/m3-responsive.png*.

**20min / CSS**

## M4: Formular zur Eingabe von Metadaten zum Bild

Das Frontend soll später auch zur Eingabe von Metadaten zu den Gemälden durch die Redakteure des Cranach Archivs verwendet werden. Implementieren am Beispiel vom *Bildnis Anna Buchner, geborene Lindacker* ein entsprechendes Formular mit folgenden Feldern:

* Dateiart: Kurztext
* Beschreibung: Langtext
* Datum: Zahl
* Abbildung Rechte: Kurztext
* Abbildung Quelle: Kurztext

Das gewünschte Layout finden Sie unter *_stuff/m4-form.png*.

**30min / HTML & CSS**

## M5: Integration von Stylelint

Integrieren Sie *stylelint* via `package.json` in Ihre Prozesskette. Folgende Funktionen sollten integriert werden:

```
`npm run lint:css` startet stylelint.

`npm run lint:css:fix` startet stylelint und korrigiert die Fehler, sofern möglich.

``` 


**10min / Buildchain**
## M6: Formularvalidierung der Metadateneingabe

Da alle Felder Pflichtfelder sind, soll vor dem Abschicken des Formulars überprüft werden, ob alle Felder gefüllt sind, falls nicht: geben Sie dem Nutzer eine entsprechende Rückmeldung. Eine CSS-Klasse *ut-has-error* finden Sie in der *_utilities.scss*. In der *main.js* ist bereits eine rudimentäre Funktion angelegt. Bitte entwickeln Sie diese weiter, um die gewünschte Funktionalität zu erzielen.

**30min / Javascript, CSS & HTML**


## O1: Gleiche Höhe der Zelleninhalte

Falls die einzelnen Kacheln auf der *index.html* in unterschiedlicher Höhe dargestellt werden, korrigieren Sie dies bitte, so dass die *figure*-Elemente immer die komplette Höhe der Zelle einnehmen.

**5min / CSS**

## O2: Anpassung Typographie für kleine Screens

Passen Sie bitte die Schriftgröße und Durchschuss von *.header > h1* und *.herotext* so an, dass bei kleinen Viewports die Schrift etwa 20% kleiner dargestellt wird. 

**15min / CSS**

## O3: Breite des Herotextes

Bei kleinen Viewports soll *.herotext* über die komplette Breite gehen. Bei größeren Screens soll er nur die Hälfte der zur Verfügung stehenden Breite einnehmen. 
Das gewünschte Layout finden Sie unter *_stuff/O3-herotext.png*.

**15min / CSS**

## O4: View Switcher Übersichtsseite

Die Übersichtsseite *index.html* soll in zwei Views darstellbar sein: dem bereits implementierten Card-View und einem List-View. Dabei soll der Nutzer die Darstellung umschalten können. Dafür wurde bereits ein entsprechendes Interaktionselement rechts oben platziert und eine grundlegende Funktionalität in der *main.js* angelegt. Das Layout für den List-View ist auch schon in der *_blocks.scss* vorbereitet. Bitte schreiben Sie das zugehörige Javascript.

**30min / Javascript, CSS & HTML**

## O5: Zuschreibung als Subtitle

Die Zuschreibung eines Bildes soll nicht mehr in der Definitionsliste, sondern als Subtitle dargestellt werden. Bitte implementieren Sie dies am Beispiel des *Bildnis Anna Buchner, geborene Lindacker*.  Es gibt zwei Layoutvarianten, die unterschiedlich komplex zu implementieren sind:
Das gewünschte Layout finden Sie unter *_stuff/05-zuschreibung-a.png*.

**10min / CSS & HTML**

Für die Profis gibt es noch ein zweites Layout: *_stuff/05-zuschreibung-b.png*. Kleiner Tipp: hier empfiehlt es sich die Pseudoelemente *::before* oder *::after* zu verwenden.

**15min / CSS & HTML**

## O6: Akkordion bei den Bildinformationen

Außer *Inventarnummer*, *Datum* und *Klassifikation* sollen die Bildinformationen über ein [Akkordion](https://kulturbanause.de/faq/accordion/) ein- und ausgeklappt werden können. Im initialen Zustand sollten alle Elemente eingeklappt sein. Schreiben Sie das notwendige Javascript dazu in der *main.js*. 

Das Navigationselement sollte im Idealfall auch via Javascript [createElement](https://developer.mozilla.org/de/docs/Web/API/Document/createElement) erzeugt werden. Ein entsprechendes CSS ist bereits in der *_icons.scss* vorhanden. Das HTML des Navigationselements muss wie folgt aussehen:

```html
<button class="cda-btn is-right icon-arrow-down"></button>
```

**45min / Javascript & HTML**

## O7: Navigation zum nächsten oder vorherigen Bild

In den Seiten der einzelnen Gemälde ist jeweils ein JSON Datensatz mit Daten zum vorherigen und nachfolgenden Bild (sofern vorhanden) integriert. Erzeugen Sie damit via Javascript eine Hyperlink inkl. Vorschaubild, damit die User darüber schnell zum nächsten, bzw. vorherigen Gemälde navigieren können.
Dazu ist in der Datei *scss/components/footer.scss* bereits das CSS definiert. Es benötigt folgende HTML Struktur:

```html
<div class="cda-nav-wrap">
  <div class="cda-nav-item previous">
    <a href="{{url-zum-vorherigen-item}}">
      <img src="{{img-src-des-vorherigen-items}}">
      <span>{{title-des-vorherigen-items}}</span>
    </a>
  </div>
  <div class="cda-nav-item next" id="nav-item-next">
    <a href="{{url-zum-naechsten-item}}">
      <img src="{{img-src-des-naechsten-items}}">
      <span>{{title-des-naechsten-items}}</span>
    </a>
  </div>
</div>
```

Verwenden Sie als src bitte das Feld *bildurl* im jeweiligen JSON. Das gewünschte Layout finden Sie unter *_stuff/07-navigation.png*.

**45min / Javascript & HTML**