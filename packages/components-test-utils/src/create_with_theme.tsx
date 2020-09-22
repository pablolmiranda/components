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

import { ComponentsProvider } from '@looker/components-providers'
import { render, RenderOptions } from '@testing-library/react'
import { mount, shallow } from 'enzyme'
import 'jest-styled-components'
import React, { ReactElement } from 'react'
import { create } from 'react-test-renderer'

export const withThemeProvider = (Component: ReactElement<any>) => (
  <ComponentsProvider globalStyle={false}>{Component}</ComponentsProvider>
)

export const createWithTheme = (Component: ReactElement<any>) =>
  create(withThemeProvider(Component))

export const mountWithTheme = (Component: ReactElement<any>) =>
  mount(withThemeProvider(Component))

export const shallowWithTheme = (Component: ReactElement<any>) =>
  shallow(withThemeProvider(Component))

export const renderWithTheme = (
  Component: ReactElement<any>,
  options?: Omit<RenderOptions, 'queries'>
) => render(withThemeProvider(Component), options)
