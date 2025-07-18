import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, type CheckboxProps } from './Checkbox';
import { Text } from './Text'

export default{
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
           return( 
           <div className='flex items-center gap-2 '>
                {Story()}
                <Text size="sm" children={"Receber atualizações por e-mail"}></Text>
            </div>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

