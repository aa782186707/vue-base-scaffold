export default {
    getUrl(VUE_APP_ENV) {
        let url = '';
        switch (VUE_APP_ENV) {
            case 'development':
                url = '';
                break;
            case 'test':
                // url = 'http://127.0.0.1:7001';
                break;
            case 'production':
                url = 'http://127.0.0.1:9078';
                break;
        }
        return url;
    }
};
