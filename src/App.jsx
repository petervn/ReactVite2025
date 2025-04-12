import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormFieldUsingHooks } from './components/FormFieldUsingHook'
import FormField from './components/FormField'
import { withFieldValidation } from './components/HOC/withFieldValidation'



const ValidatedField = withFieldValidation(FormField);

function App() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("1")

  const onUpdateCallback = (name, value) => {
    console.log(`onUpdateCallback: ${name} = ${value}`);
    setValue(value);
  }
  const onUpdateCallback1 = (name, value) => {
    console.log(`onUpdateCallback1: ${name} = ${value}`);
    setValue1(value);
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
      <ValidatedField name="name1" label="label1" value={value1}  onUpdate={onUpdateCallback1}/>
    </>
  )
}

export default App
