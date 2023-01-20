import React from 'react';
import { Story, Meta } from '@storybook/react';
import Image from './Image';
import { ImageProps } from "./Image.types"
const {img} = require('./../../assets/images/img.png');

export default {
  title: 'Web Component Library/Image',
  component: Image,
  argTypes: {
  },
} as Meta<typeof Image>;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  src: {img},
  alt: 'Default Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  src: {img},
  alt: 'Disabled Image',
};