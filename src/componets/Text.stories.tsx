import type { Meta, StoryObj } from '@storybook/react';
import { Text, type TextProps } from './Text';


export default{
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
        asChild: {
            table: {
                disable: true,
            },
        }
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Text with P tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        }
    }
}
