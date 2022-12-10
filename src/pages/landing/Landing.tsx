import { Component, Match } from 'solid-js';
import { createSignal, onCleanup, Switch } from 'solid-js';
import { Icon } from 'solid-heroicons';
import { faceFrown } from 'solid-heroicons/outline';

import { Button } from '@/components/base';
import PomodoroCard from '@/components/PomodoroCard';
import TodoCard from '@/components/TodoCard';

const todolists = [];

const Landing: Component = () => {
  return (
    <div class="flex mt-28 px-6 flex-col space-y-8 max-w-screen-sm m-auto sm:items-center justify-center sm:justify-between">
      <PomodoroCard />
      <div class="flex flex-col w-full md:w-2/3 items-center">
        <Switch>
          <Match when={todolists.length === 0}>
            <div class="flex flex-col items-center w-full justify-center p-8 bg-primary-50 rounded-2xl gap-1">
              <Icon path={faceFrown} class="w-6 h-6 md:w-7 md:h-7" />
              <p>Nothing here</p>
            </div>
            {/* <Button class="mt-2">Add todo</Button> */}
          </Match>
          <Match when={todolists.length > 0}>
            <TodoCard />
          </Match>
        </Switch>
      </div>
    </div>
  );
};

export default Landing;
