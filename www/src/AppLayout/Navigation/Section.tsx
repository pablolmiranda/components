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

import React, { FC } from 'react'
import { useLocation } from '@reach/router'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  List,
  Heading,
} from '@looker/components'
import styled from 'styled-components'
import { NavigationSection } from './types'
import { Page, pathToUri } from './Page'

interface SectionProps {
  section: NavigationSection
  path?: string[]
}

export const Section: FC<SectionProps> = ({ path = [], section }) => {
  const location = useLocation()
  const currentPath = location.pathname
  const sectionPath = [...path, section.path]

  const navigationItems = section.children.map((child) => {
    const uri = pathToUri([...sectionPath, child.path])

    if ((child as NavigationSection).children) {
      return (
        <Accordion
          key={uri}
          indicatorColor="text1"
          indicatorIcons={{ close: 'CaretUp', open: 'CaretDown' }}
          isOpen={currentPath.startsWith(uri)}
        >
          <AccordionDisclosure>
            <Heading variant="secondary" as="h4" fontFamily="body">
              {child.title}
            </Heading>
          </AccordionDisclosure>
          <AccordionContent>
            <PageList pl="xxsmall">
              <Section
                path={sectionPath}
                section={child as NavigationSection}
              />
            </PageList>
          </AccordionContent>
        </Accordion>
      )
    } else {
      return <Page key={uri} path={sectionPath} page={child} />
    }
  })

  return <PageList>{navigationItems}</PageList>
}

const PageList = styled(List)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: ${({ theme }) => theme.space.small};

  li {
    line-height: 1.75;
  }
`