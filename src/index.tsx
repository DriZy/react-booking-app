import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'config/config';
import {Provider} from 'react-redux';
import {store} from '@app/store/store';
import {createRoot} from 'react-dom/client';
import React from 'react';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@app/dev";

interface EventTarget {
    state?: 'activated';
}

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </Provider>
    </React.StrictMode>,
);

serviceWorkerRegistration.register({
    onUpdate: (registration) => {
        const waitingServiceWorker = registration.waiting;

        if (waitingServiceWorker) {
            waitingServiceWorker.addEventListener('statechange', (event) => {
                if ((event.target as EventTarget).state === 'activated') window.location.reload();
            });
            waitingServiceWorker.postMessage({type: 'SKIP_WAITING'});
        }
    },
}); // app will reload if new version of app is available

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();