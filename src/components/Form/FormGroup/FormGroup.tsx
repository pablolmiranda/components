// Typescript component boilerplate for generating meaningful declaration files.
import * as React from 'react'
import styled, { StyledComponentClass } from '../../../styled_components'
export { StyledComponentClass }
import { ThemeInterface } from '../../../themes'
export { ThemeInterface }
import { themeSpacing } from '../../../themes/theme_spacing'
// End Typescript component boilerplate

export const FormGroup = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: ${themeSpacing.s};
`
