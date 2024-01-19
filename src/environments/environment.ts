// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  protocol: 'http',
  domain: 'localhost',
  app: '',
  urlWebDemo: 'https://restaurante.fernandezlucena.es'
};


export const environment = {
  production: false,

  urlWebDemo: `${env.urlWebDemo}`,
  urlWebDemoServices: `${env.urlWebDemo}:8084`,
  carpetaVideos: 'assets/videos/guias',

  serverSsrPort: 8075,
  domain: `${env.domain}`,
  domainUrl: `${env.protocol}://${env.app}${env.domain}`,

  googleAnalyticsId: 'C0JMPBWNPM'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
