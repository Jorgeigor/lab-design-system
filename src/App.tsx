import { EnvelopeSimple, User } from 'phosphor-react'
import { Heading } from './componets/Heading'
import { NameInput } from './componets/NameInput'
import { Text } from './componets/Text'
import { Logo } from './Logo'
import './styles/global.css'
import { TextInput } from './componets/TextInput'
import { InputChecked } from './componets/InputChecked'
import { Checkbox } from './componets/Checkbox'
import { Button } from './componets/Button'
export function App(){
  return(
    <div className="w-screen h-screen bg-gray-900 bg-fixed flex flex-col items-center justify-center text-gray- overflow-auto">
      <header className='flex flex-col items-center mt-20'>
        <Logo/>

        <Heading size="lg" className='mt-4'>Lab design</Heading>

        <Text size="lg" className='text-gray-400 mt-1'>Garanta seu passe</Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="name" className='flex flex-col gap-2'>
          <Text className='font-semibold'>Nome completo</Text>
          <NameInput.Root>
            <NameInput.Icon>
              <User/>
            </NameInput.Icon>
            <NameInput.Input id='name' placeholder='Nome completo'/>
          </NameInput.Root>
        </label>

        <label htmlFor="check" className='flex flex-col gap-3 mt-4'>
          <Text className='font-semibold text-gray-400'>Qual sua trilha do conhecimento?</Text>
          <div className='flex items-center gap-2'>
            <InputChecked />
            <Text size="sm" className='text-gray-400'>Frontend com React</Text>
          </div>

          <div className='flex items-center gap-2'>
            <InputChecked />
            <Text size="sm" className='text-gray-400'>Bakcend com Node</Text>
          </div>

          <div className='flex items-center gap-2'>
            <InputChecked />
            <Text size="sm" className='text-gray-400'>Fullstack</Text>
          </div>
        </label>

        <label htmlFor="email" className='flex flex-col gap-2 mt-4'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple/>
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='Digite seu e-mail'/>
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2 mt-4'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Receber notificações por email</Text>
        </label>

        <Button type='submit' className='mt-4'>Confirmar inscrição</Button>
      </form>

      <footer className='mt-2'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Acompanhar nosso portal</a>
        </Text>
      </footer>
    </div>
  )
}