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

import { Flex, IconButton, Space, Grid } from '@looker/components'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'
import sitemap from '../../documentation/sitemap'
import { Search } from '../Search'
import { AppLogo } from './AppLogo'

interface HeaderProps {
  className?: string
  toggleNavigation: () => void
}

export const HeaderContentLayout: FC<HeaderProps> = ({
  className,
  toggleNavigation,
}) => (
  <Grid
    alignItems="center"
    columns={3}
    className={className}
    pl="small"
    width="100%"
    height="100%"
    pr="xlarge"
  >
    <Space>
      <IconButton
        icon="Hamburger"
        size="small"
        label="Toggle navigation"
        onClick={toggleNavigation}
      />
      <AppLogo />
    </Space>
    <Search />
    <Flex as="nav" alignItems="center" ml="auto">
      <Space as="ul" gap="xlarge">
        {sitemap.map((section) => (
          <li key={section.path}>
            <Link
              partiallyActive
              activeClassName="active"
              to={`/${section.path}`}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </Space>
    </Flex>
  </Grid>
)

export const HeaderContent = styled(HeaderContentLayout)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.keyAccent};

  nav {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    ul {
      height: 100%;
    }
    li {
      height: 100%;
    }
    a {
      align-items: center;
      border-bottom: 4px solid transparent;
      border-top: 4px solid transparent;
      color: ${({ theme }) => theme.colors.text4};
      display: flex;
      height: 100%;
      text-decoration: none;

      &.active {
        border-bottom-color: currentColor;
        color: ${({ theme }) => theme.colors.link};
      }

      &:hover {
        border-bottom-color: currentColor;
        color: ${({ theme }) => theme.colors.linkInteractive};
      }
    }
  }
`