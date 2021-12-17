const baseurl = "https://www.7timer.info/bin/civillight.php?lon=12.1&lat=55.6&ac=0&unit=metric&output=json&tzshift=0"

Vue.createApp({
    data() {
        return {
            weather: null
        }
    },
    async created() {
        try {
            const response = await axios.get(baseurl)
            this.weather = await response.data
        } catch (ex) {
            alert(ex.message) 
        }
    },
    methods: {
        formatter(datenumber) {
            let datestr = datenumber.toString()
            return datestr.slice(0,4) + "-" + datestr.slice(4,6) + "-" + datestr.slice(6)
        }
    }
}).mount("#app")