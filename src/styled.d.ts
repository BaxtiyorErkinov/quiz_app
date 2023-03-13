import { Theme } from './theme/default';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
