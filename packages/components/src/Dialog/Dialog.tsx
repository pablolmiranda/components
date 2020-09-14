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

import React, { CSSProperties, FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSObject } from 'styled-components'
import { ResponsiveValue } from 'styled-system'
import { Portal } from '../Portal'
import { useFocusTrap, useScrollLock } from '../utils'
import { Backdrop } from './Backdrop'
import { DialogContext } from './DialogContext'
import { Surface } from './Surface'

/**
 *
 * Surface style usage
 *
 *
 *     width={['360px', '560px', '660px', '760px', '760px']}
    maxWidth={['360px', '560px', '660px', '760px', '760px']}
 *

                 surfaceStyles={{ width: '580px' }}

 *         width: '463px',
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'absolute',

        width: '600px'
        width: '500px'
        width: '500px'

        position: 'absolute', top: '5vh'

                    bottom: '40px',
            left: '40px',
            maxHeight: '100%',
            overflowX: 'hidden',
            overflowY: 'hidden',
            position: 'absolute',
            right: '40px',
            top: '40px',

                      bottom: '100px',
          maxHeight: '100%',
          overflowX: 'auto',
          overflowY: 'auto',
          position: 'absolute',
          top: '100px',

        width: '600px',
        maxHeight: '80%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'relative',

      width: '700px',
      minHeight: '250px',
      maxHeight: '80%',
      overflowX: 'hidden',
      overflowY: 'hidden',
      position: 'relative',

              width: '600px',
        height: '500px',
        maxHeight: '80%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        position: 'relative',

              surfaceStyles={{ height: '740px', width: '800px' }}

                minHeight: '250px',
  maxHeight: '80%',
  width: '600px',


                  surfaceStyles={{ width: '580px' }}

                          surfaceStyles={{ position: 'absolute', top: '5rem' }}

                                  surfaceStyles={{ height: '550px' }}


          */

export interface DialogProps {
  /**
   * When true, renders the Backdrop, Surface and it's contained content.
   * @default false
   */
  isOpen?: boolean

  /**
   * Specify a callback to be called each time this Dialog is closed
   */
  onClose?: () => void

  /**
   * Optional surface styles to merge with the Surface implementation. These
   * must be a CSSProperty compatible key / value paired object.
   */
  surfaceStyles?: CSSProperties

  /**
   * Explicitly specifying a width will set the Surface to be the lesser of the specified width or the viewport width.
   * You can also specify `auto` if you want the Surface to auto-size to its content.
   * @default auto
   */
  width?: ResponsiveValue<string>

  maxWidth?: ResponsiveValue<string>

  height?: ResponsiveValue<string>

  /**
   * Specify where the Dialog should be placed
   * @default 'center'
   */
  position?: 'center' | 'top'

  drawer?: boolean

  /**
   *
   */
}

export const Dialog: FC<DialogProps> = ({
  // backdrop,
  drawer,
  position,
  children,
  isOpen,
  onClose,
  maxWidth,
  surfaceStyles,
  width,
}) => {
  const {
    callbackRef: focusRef,
    disable: disableFocusTrap,
    enable: enableFocusTrap,
    isEnabled: focusTrapEnabled,
    trapRef: focusTrapRef,
  } = useFocusTrap(isOpen)
  const {
    callbackRef: scrollRef,
    disable: disableScrollLock,
    enable: enableScrollLock,
    isEnabled: scrollLockEnabled,
  } = useScrollLock(isOpen, false)

  const handleClose = () => {
    onClose && onClose()
  }

  return (
    <DialogContext.Provider
      value={{
        closeModal: handleClose,
        disableFocusTrap,
        disableScrollLock,
        enableFocusTrap,
        enableScrollLock,
        focusTrapEnabled,
        focusTrapRef,
        scrollLockEnabled,
      }}
    >
      {(state: string) => (
        <Portal
          ref={(node) => {
            focusRef(node)
            scrollRef(node)
          }}
        >
          <Backdrop
            className={state}
            onClick={onClose}
            // visible={backdrop === undefined ? true : !!backdrop}
            // style={
            //   !!backdrop && backdrop !== true
            //     ? (backdrop as CSSObject)
            //     : undefined
            // }
          />
          <Surface
            style={surfaceStyles}
            className={state}
            width={width}
            maxWidth={maxWidth}
            drawer={drawer}
            position={position}
          >
            {children}
          </Surface>
        </Portal>
      )}
    </DialogContext.Provider>
  )
}
