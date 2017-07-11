const config = {
    get() {
        return {
            "ADMIN_ROLE": "<ex. Administrator>",
            "ADMIN_USER": "<ex. user@wizni.com>",
            "DEFAULT_ORG_UNIT": {
                "name": "<ex. WIZNI>",
                "description": "<ex. WIZNI Inc.>",
                "domain": "<ex. wizni.com>",
                "isDefault": true,
                "metadata": {
                    "logoUrl": "<ex. https://www.wizni.com/assets/images/wizni-logo.png>",
                    "footer": "<ex. © 2017 Wizni, Inc. All Rights Reserved.>"
                }
            },
            "AUTH0": {
                "CLIENT_ID": "<Auth0 Client ID>",
                "SECRET_KEY": "<Auth0 Secret Key>",
                "DOMAIN": "<Auth0 Domain Name>",
                "CONNECTION": "<Auth0 Auth Type>"
            },
            "AUTH0_API": {
                "CLIENT_ID": "<Auth0 API Client ID>",
                "SECRET_KEY": "<Auth0 API Secret Key>"
            },
            "MAIL_CONFIG": {
                "service": "<ex. _SERVICE_PROVIDER_>",
                "auth": {
                    "api_key": "<ex. _AUTH_API_KEY_>",
                    "user": "<ex. _AUTH_ACCOUNT_>",
                    "pass": "<ex. _AUTH_CREDENTIALS_>"
                }
            }
        };
    }
};
export default config;