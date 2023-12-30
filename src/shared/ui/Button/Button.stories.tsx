import React from 'react';
import type { ComponentMeta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

type Story = StoryObj<typeof Button>;

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};
