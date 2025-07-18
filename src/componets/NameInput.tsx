import { Slot } from '@radix-ui/react-slot';
import type { InputHTMLAttributes, ReactNode } from 'react';

export interface NameInputRootProps{
    children: ReactNode
}

function NameInputRoot(props: NameInputRootProps){
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )

}

NameInputRoot.displayName = 'NameInput.Root'

export interface NameInputIconProps{
    children: ReactNode;
}
function NameInputIcon(props: NameInputIconProps){
    return (
        <Slot className="w-6 h-6 text-gray-400" > 
            {props.children}
        </Slot>
    )
}

NameInputIcon.displayName = 'NameInput.Icon'

export interface NameInputInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

function NameInputInput( props : NameInputInputProps){
    return (
            <input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
            />

    )
}

NameInputInput.displayName = 'NameInput.Input'

export const NameInput = {
    Root: NameInputRoot,
    Input: NameInputInput,
    Icon: NameInputIcon
}