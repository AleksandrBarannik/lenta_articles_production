import { ComponentMeta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

type Story = StoryObj<typeof Modal>;

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Text for screenshotTests',
    },
};

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children: 'Text for screenshotTests',

    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
