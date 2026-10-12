import { useRef } from 'react';

import Button from './UI/Button.js';
import Form, { type FormHandle } from './UI/Form.js';
import Input from './UI/Input.js';
import { useTimersContext } from '../store/timer-context.js';

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const {addTimers} = useTimersContext()
  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimers({name:extractedData.name, duration: +extractedData.duration});
    form.current?.clear();
  }

  return (
    <Form ref={form} OnSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
