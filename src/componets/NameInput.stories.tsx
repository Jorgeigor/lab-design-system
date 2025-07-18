import type { Meta, StoryObj } from '@storybook/react';
import { User } from 'phosphor-react'
import { NameInput, type NameInputRootProps} from './NameInput';


export default{
    title: 'Components/NameInput',
    component: NameInput.Root,
    args: {
        children: [
            <NameInput.Icon>
                <User/>
            </NameInput.Icon>,
            <NameInput.Input placeholder='type your name'/>
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    },
} as Meta<NameInputRootProps>

export const Default: StoryObj<NameInputRootProps> = {}
export const WithoutIcon: StoryObj<NameInputRootProps> = {
    args: {
        children: <NameInput.Input placeholder='type your name'/>
    }
}
