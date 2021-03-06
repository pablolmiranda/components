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

import { reset, space, SpaceProps } from '@looker/design-tokens'
import pick from 'lodash/pick'
import { rem, rgba } from 'polished'
import React, { forwardRef, Ref } from 'react'
import styled from 'styled-components'
import { InputProps, inputPropKeys } from '../InputProps'
import { KnobContainer, KnobProps } from './Knob'

export interface ToggleSwitchProps
  extends SpaceProps,
    Omit<InputProps, 'type'>,
    Omit<KnobProps, 'size'> {
  size?: number
}

const DisabledKnob = styled.div<{ size: number }>`
  ${reset}

  background: ${({ theme }) => theme.colors.ui3};
  border-radius: ${({ size }) => rem(size)};
  bottom: 0;
  left: 0;
  opacity: 0.4;
  position: absolute;
  right: 0;
  top: 0;
`

export const ToggleSwitchLayout = forwardRef(
  (
    {
      className,
      disabled,
      on,
      size = 20,
      validationType,
      ...props
    }: ToggleSwitchProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        <input
          type="checkbox"
          checked={on}
          disabled={disabled}
          role="switch"
          aria-checked={on}
          aria-invalid={validationType === 'error' ? 'true' : undefined}
          ref={ref}
          {...pick(props, inputPropKeys)}
        />
        <KnobContainer size={size} on={on} disabled={disabled} />
        {disabled && <DisabledKnob size={size} />}
      </div>
    )
  }
)

ToggleSwitchLayout.displayName = 'ToggleSwitchLayout'

export const ToggleSwitch = styled(ToggleSwitchLayout)`
  ${reset}
  ${space}

  display: inline-block;
  height: ${(props) => rem(props.size || 20)};
  position: relative;
  vertical-align: middle;
  width: ${(props) => rem((props.size || 20) * 1.75)};

  input {
    cursor: ${({ disabled }) => (disabled ? undefined : 'pointer')};
    height: 100%;
    left: 0;
    margin: 0; /* Suppress browser default styling */
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &:focus + div {
      box-shadow: 0 0 0 0.2rem
        ${({ theme }) => rgba(theme.colors.keyInteractive, 0.4)};
    }
  }
`
