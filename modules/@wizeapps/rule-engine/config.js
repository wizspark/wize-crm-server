const config = {
    get() {
        return {
            MAIL_CONFIG: {
                service: process.env.MAIL_SERVICE || '_SERVICE_PROVIDER_',
                auth: {
                    api_key: process.env.MAIL_API_KEY || '_AUTH_API_KEY_',
                    user: process.env.MAIL_USER || '_AUTH_ACCOUNT_',
                    pass: process.env.MAIL_PASSWORD || '_AUTH_CREDENTIALS_'
                }
            }
        }
            ;
    }
};
export default config;