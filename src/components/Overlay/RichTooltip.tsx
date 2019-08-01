import * as React from 'react'
import { fadeIn, palette, shadows } from '../../style'
import { CustomizableAttributes } from '../../types/attributes'
import { ModalSurfaceStyleProps } from '../Modal'
import {
  OverlayChildrenProps,
  OverlayHover,
  OverlayHoverManager,
  OverlayHoverManagerProps,
  OverlayHoverProps,
  OverlaySurface,
} from './'

// Remove when we upgrade to TypeScript 3.5
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface RichTooltipInternalProps extends Omit<OverlayHoverProps, 'children'> {
  children: React.ReactNode
}

const RichTooltipInternal: React.FC<RichTooltipInternalProps> = ({
  children,
  ...overlayProps
}) => (
  <OverlayHover {...overlayProps}>
    {(props: OverlayChildrenProps) => (
      <OverlaySurface {...props} {...CustomizableRichTooltipAttributes.surface}>
        {children}
      </OverlaySurface>
    )}
  </OverlayHover>
)

export interface RichTooltipProps
  extends Omit<OverlayHoverManagerProps, 'children' | 'wrappedComponent'> {
  children: OverlayHoverManagerProps['wrappedComponent']
  content: React.ReactNode
}

export const RichTooltip: React.FC<RichTooltipProps> = ({
  children,
  content,
  ...overlayHoverManagerProps
}) => (
  <OverlayHoverManager
    wrappedComponent={children}
    {...overlayHoverManagerProps}
  >
    {managedHoverOverlayProps =>
      managedHoverOverlayProps.triggerRef ? (
        <RichTooltipInternal {...managedHoverOverlayProps}>
          {content}
        </RichTooltipInternal>
      ) : null
    }
  </OverlayHoverManager>
)

export interface CustomizableRichTooltipAttributes
  extends CustomizableAttributes {
  surface: ModalSurfaceStyleProps
}

export const CustomizableRichTooltipAttributes: CustomizableRichTooltipAttributes = {
  surface: {
    animation: `${fadeIn} 0.2s linear`,
    backgroundColor: palette.white,
    border: '1px solid',
    borderColor: palette.charcoal200,
    borderRadius: 'medium',
    boxShadow: shadows[3],
    color: palette.charcoal900,
  },
}
