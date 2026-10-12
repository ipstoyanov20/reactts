// import { useRef } from 'react';
// import Form, { type FormHandle } from '../components/UI/Form'
import Header from '../components/Header'
import AddTimer from '../components/AddTimer'
import Timers from '../components/Timers'
import TimerContextProvider from '../store/timer-context'
export default function App() {

  // const customForm = useRef<FormHandle>(null)
  // const input = useRef<HTMLInputElement>(null);

  // const handleSaveData = (data: unknown) => {
  //   const extractedData = data as { name: string, age: string }
  //   console.log(extractedData)
  //   customForm.current?.clear()
  // }

  return <TimerContextProvider>
    <Header />
    <main>
      <AddTimer />
      <Timers />


      {/* <Input id='name' label='Your name' type='text'/>
    <Input id='age' label='Your age' type='number'/> */}

      {/* <p>
      <Button href="https://google.com">A link</Button>
      </p>
      <p>
      <Button>A button</Button>
      </p> */}
      {/* <Container as={Button}>Click me</Container> */}
      {/* <Input label="Test" id="test" ref={input} />*/}

      {/* <Form OnSave={handleSaveData} ref={customForm}>
      <Input type='text' label='Name' id='name' />
      <Input type='number' label='Age' id='age' />
      <p>
      <Button>Save</Button>
      
      </p>
      </Form> */}
    </main>
  </TimerContextProvider>
}
