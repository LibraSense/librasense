import axios from 'axios';

export default {
    data() {
        return {
            text: 'No Info',
        };
    },
    methods: {
        handleClick() {
            axios
                .get('https://www.googleapis.com/civicinfo/v2/elections', { params: { key: '<API_KEY>' } })
                .then((response) => {
                    this.text = response;
                });
        },
    },
};