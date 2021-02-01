var demo = new Vue({
    el: '#main',
    data: {
        events: []
    },
    beforeCreate() {
        axios
            .get('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&rows=5&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier')
            .then(res => {
                this.events = res.data.records
            })
    }
});