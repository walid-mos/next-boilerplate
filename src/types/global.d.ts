/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import('@/locales/en-US.json')

declare interface IntlMessages extends Messages {}
