/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import {
  CompatibleHTMLProps,
  reset,
  theme,
  omitStyledProps,
} from '@looker/design-tokens'
import React, { FC, useContext, useEffect, useRef } from 'react'
import styled, { CSSObject, css } from 'styled-components'
import { LayoutProps, layout } from 'styled-system'
import { useGlobalHotkeys } from '../utils'
import { DialogContext } from './DialogContext'

interface SurfaceProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    LayoutProps {
  surfaceStyles?: CSSObject
  // animationState?: string

  drawer?: boolean
}

const SurfaceLayout: FC<SurfaceProps> = ({
  surfaceStyles,
  className,
  ...props
}) => {
  const { closeModal, enableFocusTrap, enableScrollLock } = useContext(
    DialogContext
  )

  const wrapperRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    enableScrollLock && enableScrollLock()
    const t = window.setTimeout(() => {
      enableFocusTrap && enableFocusTrap()
    }, theme.transitions.durationModerate)
    return () => {
      window.clearTimeout(t)
    }
  }, [enableFocusTrap, enableScrollLock])

  useGlobalHotkeys('esc', closeModal, wrapperRef)

  return (
    <div
      className={`surface-overflow ${className}`}
      style={surfaceStyles as CSSObject}
      ref={wrapperRef}
      {...omitStyledProps(props)}
    />
  )
}

const surfaceTransition = () => css`
  ${(props) =>
    `${props.theme.transitions.durationModerate} ${props.theme.easings.ease}`}
`

const drawerCSS = css`
  height: 100%;
`

const notDrawerCSS = css`
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  max-height: 90vh;
`

export const Surface = styled(SurfaceLayout)`
  ${reset}
  ${layout}

  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  position: relative;
  /* transition: transform ${surfaceTransition}, opacity ${surfaceTransition}; */

  ${({ drawer }) => (drawer ? drawerCSS : notDrawerCSS)}

  &:focus {
    outline: none;
  }

  &.entering,
  &.exiting {
    opacity: 0.01;
    transform: translateY(100%);
  }

  &.exited {
    opacity: 1;
    transform: translateY(0%);
  }
`

Surface.defaultProps = {
  maxWidth: ['90vw', '90vw', '600px'],
}
