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

import React from 'react'
import {
  Button,
  DialogContent,
  DialogManager,
  DialogHeader,
  DialogFooter,
  ButtonTransparent,
  DialogManagerProps,
} from '@looker/components'
import { Story } from '@storybook/react/types-6-0'

const Template: Story<DialogManagerProps> = (args) => (
  <DialogManager
    {...args}
    content={
      <>
        <DialogHeader>My Awesome Dialog</DialogHeader>
        <DialogContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et eros
          sed nisi pellentesque vulputate ac eu augue. Sed commodo sagittis
          neque, vel vulputate massa. Sed a velit nec ligula maximus lacinia.
          Morbi congue imperdiet sem, rhoncus convallis enim bibendum et. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </DialogContent>
        <DialogFooter>
          <Button>Button!</Button>
          <ButtonTransparent>Other Button</ButtonTransparent>
        </DialogFooter>
      </>
    }
  >
    <Button>Open Dialog</Button>
  </DialogManager>
)

export const Primary = Template.bind({})

Primary.args = {
  drawer: true,
  // maxWidth: ['90vw', '50vw', '500px'],
}

export default {
  component: DialogManager,
  title: 'DialogManager',
}
