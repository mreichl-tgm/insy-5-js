## Witzeclient in Vue.js
### Angabe
Entwickle eine kleine Webanwendung mittels vue.js, welche dazu dient eine bestimmte Anzahl an Chuck-Norris-Witzen anzuzeigen bestehend aus Folgendem:

* Ein Eingabefeld für die Anzahl der Witze:
    * Falls in diesem Feld kein numerischer Wert angegeben ist (Funktion isNaN()), soll die Meldung "Bitte Zahl angeben!" aufscheinen.
    * Falls in diesem Feld ein Wert > 100 angegeben ist, soll die Meldung "Bitte kleineren Wert angeben!" aufscheinen.
* Ein Button:
    * Bei Click (Attribut v-on:click) soll per Ajax-Request die entsprechende Anzahl an Witzen geladen und sinnvoll formatiert angezeigt werden.
* Chuck Norris Witze API:
    * Ist unter "http://api.icndb.com/jokes/random/<Anzahl Witze>" abrufbar.
    * liefert Daten als JSON zurück.
    * Ajax-Requests lassen sich zB mittels der Library axios sehr einfach bewerkstelligen:
* Abzugeben ist der relevante sourcecode (samt kurzen Erklaerungen) als PDF.

### Lösung
~~~ js
<script>
    /**
     * Requests a given number of jokes and returns the resulting strings as a list
     *
     * @param n Number of jokes to request
     * @returns {Array} List of strings containing hilarious Chuck Norris jokes
     */
    function getJokes(n) {
        let jokes = []
        axios   // Request a given number of jokes and add the results to the jokes list
            .get("http://api.icndb.com/jokes/random/" + n)
            .then(function (res) { for (let obj of res.data.value) jokes.push(obj["joke"]) })
        return jokes
    }

    const app = new Vue({
        el: "#app",
        data: {
            numberOfJokes: 3,   // Create a model for the number of jokes
            jokes: []           // Create a model for the joke list itself
        },
        methods: {
            // Call getJokes and set the jokes list so the model can adjust
            getJokes: function () { this.jokes = getJokes(this.numberOfJokes) }
        }
    })
    // Add jokes by default
    app.getJokes()
</script>
~~~