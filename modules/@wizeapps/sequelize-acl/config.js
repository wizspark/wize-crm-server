const config = { get() { return {
      ADMIN_ROLE: 'Administrator',
      ADMIN_USER: "anjani@wizni.com",
      DEFAULT_ORG_UNIT: {
        "name": "WIZNI",
        description: "WIZNI Inc.",
        domain: "wizni.com",
        isDefault: true,
        metadata: {
          "logoUrl": "https://www.wizni.com/assets/images/wizni-logo.png",
          "footer": "© 2016 Wizni, Inc. All Rights Reserved."
        }
      },
      AUTH0: {
        CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'jNn1V2ORu1rN1TzgEv1SvDldgnz18W0Y',
        SECRET_KEY: process.env.AUTH0_SECRET_KEY || 'iBOHiMSwvP36S7KwejB6i1-Bz-xCMYj_u3n7CfC1mj_8FFHDDkR8-io495iIi-kp',
        DOMAIN: process.env.AUTH0_DOMAIN || 'anjanikumar2109.auth0.com',
        CONNECTION: process.env.AUTH0_CONNECTION || 'Username-Password-Authentication'
      },
      AUTH0_API: {
        CLIENT_ID: process.env.AUTH0_API_CLIENT_ID || 'Js6nmoLRad7CD0K22aH0bcaz38DijsLK',
        SECRET_KEY: process.env.AUTH0_API_SECRET_KEY || 'QOpwB7RSspeW4FnswR2eWa60AZb986-MqkD8rEdNM3shFuLUs3hPDNCl2ZVmVlJY'
      },
      MAIL_CONFIG: {
        service: process.env.MAIL_SERVICE || '_SERVICE_PROVIDER_',
        auth: {
          api_key: process.env.MAIL_API_KEY || '_AUTH_API_KEY_',
          user: process.env.MAIL_USER || '_AUTH_ACCOUNT_',
          pass: process.env.MAIL_PASSWORD || '_AUTH_CREDENTIALS_'
        }
      },
      pathsToIgnore: [
        '/api/metadata/pages',
        /^\/portal/,
        /^\/(?!api)(.*)$/
      ]
    }; } }; export default config;