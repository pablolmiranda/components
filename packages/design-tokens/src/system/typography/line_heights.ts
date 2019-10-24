import { ResponsiveValue } from 'styled-system'
import { FontSizes } from './font_sizes'

export type LineHeights = FontSizes
export type LineHeightRamp = Record<LineHeights, string>

export interface LineHeightProps {
  /**
   * Use a looker-components LineHeights (xxsmall - xxxxlarge) to set line height
   */
  lineHeight?: ResponsiveValue<LineHeights>
}
