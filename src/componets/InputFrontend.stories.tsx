import type { Meta, StoryObj } from '@storybook/react';
import { InputChecked, type InputCheckedProps } from './InputChecked';
import { Text } from './Text'

export default{
    title: 'Components/InputChecked',
    component: InputChecked,
    args: {},
    argTypes: {},
    decorators: [],
} as Meta<InputCheckedProps>

export const Frontend: StoryObj<InputCheckedProps> = {
    decorators: [
        (Story) => {
           return( 
           <div className='flex items-center gap-2 '>
                {Story()}
                <Text size="sm" children={"Frontend com React"}></Text>
            </div>
            )
        }
    ]
}
export const Backend: StoryObj<InputCheckedProps> = {
    decorators: [
        (Story) => {
           return( 
           <div className='flex items-center gap-2 '>
                {Story()}
                <Text size="sm" children={"Backend com node.js"}></Text>
            </div>
            )
        }
    ]
}

export const Fullstack: StoryObj<InputCheckedProps> = {
    decorators: [
        (Story) => {
           return( 
           <div className='flex items-center gap-2 '>
                {Story()}
                <Text size="sm" children={"Fullstack"}></Text>
            </div>
            )
        }
    ]
}

