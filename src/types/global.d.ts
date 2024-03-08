/* eslint-disable @typescript-eslint/no-empty-interface */
type Messages = typeof import('@/locales/en-US.json')

declare interface IntlMessages extends Messages {}
