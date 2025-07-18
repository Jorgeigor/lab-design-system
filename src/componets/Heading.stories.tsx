import type { Meta, StoryObj } from '@storybook/react';
import { Heading, type HeadingProps } from './Heading';


export default{
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Text with h1 tag</h1>
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
