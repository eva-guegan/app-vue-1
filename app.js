var demo = new Vue({
    el: '#main',
    data: {
        searchEvent: "",
        events: []
    },
    beforeCreate() {
        axios
            .get('https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&rows=10')
            .then(res => {
                this.events = res.data.records
                console.log(res.data.records)
            })
    },
    computed: {
        eventSearch: function () {
            var events_array = this.events,
                searchEvent = this.searchEvent;

            if(!searchEvent){
                return events_array;
            }

            searchEvent = searchEvent.trim().toLowerCase();

            events_array = events_array.filter(function(item){
                if(item.fields.nom.toLowerCase().indexOf(searchEvent) !== -1){
                    return item;
                }
            })

            return events_array;
        }
    }
});