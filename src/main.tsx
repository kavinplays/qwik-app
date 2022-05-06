import { useStore, component$, Host } from '@builder.io/qwik';

import './global.css';

export const Main = component$(() => {
  const state = useStore({ name: 'World' });
  return (
    <Host class="my-app p-20">
      <div class="text-gray-500 h-screen justify-center overflow-hidden">
      <center class="mt-64 m-auto">

      <div class="tracking-widest"><br></br>
      <span class="text-gray-500 text-6xl block"><span>Not Ready Yet!</span></span><br></br>
      <span class="text-gray-500 text-xl block">Sorry, the site currently isn't ready for production</span>
      <span class="text-gray-500 text-xl block">You can still use the public api and checkout the docs</span>
      </div>
      </center>
      <center class="py-6">
      <div class="flex h-1/6 justify-center text-gray-500">
      <a href="https://www.kavinplays.ml/api" class="mx-4 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md hover:scale-125">API</a>
      <a href="https://www.kavinplays.ml/docs" class="mx-4 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md hover:scale-125">DOCS</a>
      </div>
      </center>
      </div>
    </Host>
  );
});
