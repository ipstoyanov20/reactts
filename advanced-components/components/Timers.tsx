import { useTimersContext } from "../store/timer-context.js";
import Timer from "./Timer.js";

export default function Timers() {
  const{timers} = useTimersContext()
  return <ul>{
    timers.map(timer=><li key={timer.name}>
      <Timer {...timer} />
    </li>)}</ul>;
}
