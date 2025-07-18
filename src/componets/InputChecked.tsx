import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface InputCheckedProps{
}

export function InputChecked({ }: InputCheckedProps){
    return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[5px] bg-gray-800 rounded-full focus-within:ring-1 ring-cyan-300">
        <CheckboxPrimitive.Indicator asChild>
            <div className='h-[14px] w-[14px] bg-cyan-500 rounded-full' />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>

)
}