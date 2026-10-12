import Container from './UI/Container.js';
import { useTimersContext, type Timer as TimerProps } from '../store/timer-context.js';
import { useEffect, useRef, useState } from 'react';


export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null)
  const [remainTime, setRemainTime] = useState(duration * 1000)
  const { isRunning } = useTimersContext()

  if (remainTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }
  useEffect(() => {
    let timer: number
    if (isRunning) {

      timer = window.setInterval(() => {
        setRemainTime((prev) => prev - 50)
      }, 50)
      interval.current = timer
    } else if (interval.current) {
      clearInterval(interval.current)
    }

    return ()=>clearInterval(timer)
  }, [isRunning])

  const formatRemainingTime = (remainTime / 1000).toFixed(2)

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainTime} /></p>
      <p>{formatRemainingTime}</p>
    </Container>
  );
}
