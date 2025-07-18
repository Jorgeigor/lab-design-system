import './styles/global.css'
export function App(){
  return(
    <div className='flex gap-3'>
      <h1 className='font-bold text-2xl text-violet-500'>Hello World!</h1>
      <button className='bg-cyan-500 font-medium px-4 py2 rounded text-white hover:bg-cyan-300'>
        enviar
      </button>
      <input type="radio" className='bg-gray-500 w-5 h-5'/>
    </div>
    
  )
}