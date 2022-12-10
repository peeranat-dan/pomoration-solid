import { Component, Match, Switch } from 'solid-js';
import { createEffect, createSignal, onCleanup } from 'solid-js';

import { toMMSS } from '@/utils/useGetTimeFormat';

import Button from './base/Button';

enum PomodoroTitle {
  POMODORO = 'Pomodoro',
  SHORT_BREAK = 'Short break',
  LONG_BREAK = 'Long break',
}

const POMODORO_CONFIG = {
  [PomodoroTitle.POMODORO]: {
    duration: 1500,
    title: PomodoroTitle.POMODORO,
    color: 'text-red-500',
  },
  [PomodoroTitle.SHORT_BREAK]: {
    duration: 300,
    title: PomodoroTitle.SHORT_BREAK,
    color: 'text-cyan-500',
  },
  [PomodoroTitle.LONG_BREAK]: {
    duration: 900,
    title: PomodoroTitle.LONG_BREAK,
    color: 'text-blue-500',
  },
};

const pomodoroLoop = [
  PomodoroTitle.POMODORO,
  PomodoroTitle.SHORT_BREAK,
  PomodoroTitle.POMODORO,
  PomodoroTitle.SHORT_BREAK,
  PomodoroTitle.POMODORO,
  PomodoroTitle.SHORT_BREAK,
  PomodoroTitle.POMODORO,
  PomodoroTitle.LONG_BREAK,
];

const PomodoroCard: Component = () => {
  const [round, setRound] = createSignal<number>(0);
  let [time, setTime] = createSignal<number>(POMODORO_CONFIG[pomodoroLoop[round()]].duration);
  const [timer, setTimer] = createSignal<NodeJS.Timer>();
  onCleanup(() => clearInterval(timer()));
  const [isRunning, setIsRunning] = createSignal(false);

  const startTimer = () => {
    setIsRunning(true);
    setTimer(setInterval(() => setTime(time() - 1), 1000));
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timer());
  };

  createEffect(() => {
    if (time() === 0) {
      setRound(round() + 1);
      setTime(POMODORO_CONFIG[pomodoroLoop[round()]].duration);
      clearInterval(timer());
      setIsRunning(false);
    }
    if (round() === 8) {
      setRound(0);
    }
  });

  // const textStyle = [
  //   'text-lg',
  //   pomodoroLoop[round()] === PomodoroTitle.POMODORO &&
  //     POMODORO_CONFIG[PomodoroTitle.POMODORO].color,
  //   pomodoroLoop[round()] === PomodoroTitle.SHORT_BREAK &&
  //     POMODORO_CONFIG[PomodoroTitle.SHORT_BREAK].color,
  //   pomodoroLoop[round()] === PomodoroTitle.LONG_BREAK &&
  //     POMODORO_CONFIG[PomodoroTitle.LONG_BREAK].color,
  // ];

  return (
    <div class="w-full flex flex-col items-center justify-center p-8 rounded-2xl gap-3">
      <p>{`${POMODORO_CONFIG[pomodoroLoop[round()]].title}`}</p>
      <h1 class="text-6xl">{toMMSS(time())}</h1>
      <div class="flex gap-2">
        <Switch>
          <Match when={!isRunning()}>
            <Button onClick={startTimer} type="primary">
              Start
            </Button>
          </Match>
          <Match when={isRunning()}>
            <Button onClick={stopTimer} type="secondary">
              Stop
            </Button>
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default PomodoroCard;
