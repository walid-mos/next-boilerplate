/* eslint-disable @typescript-eslint/no-empty-interface */
type Messages = typeof import('@/lib/locales/en-US.json')

declare interface IntlMessages extends Messages {}
