import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormFieldUsingHooks } from './components/FormFieldUsingHook'

function App() {
  const [value, setValue] = useState("")

  const onUpdateCallback = (name, value) => {
    console.log(`onUpdateCallback: ${name} = ${value}`);
    setValue(value);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <FormFieldUsingHooks  name="name" label="label" value={value}  onUpdate={onUpdateCallback} />
    </>
  )
}

export default App
