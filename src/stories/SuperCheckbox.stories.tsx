import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SuperCheckbox  from './../p2-homeworks/h4/common/c3-SuperCheckbox/SuperCheckbox';


export default {

    title: 'hw4 /SuperCheckbox',
    component: SuperCheckbox,
} as ComponentMeta<typeof SuperCheckbox>;

const Template: ComponentStory<typeof SuperCheckbox> = (args) => <SuperCheckbox {...args} />;

export const SCheckbox = Template.bind({});
SCheckbox.args = {
checked:true
};
