import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from './Button';


export default{
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {
        asChild: {
            table: {
                disable: true,
            },
        }
    },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

