import React from 'react';
import ReactDOM from 'react-dom/client';
import JsonParser from './JsonParser';

const STORAGE_KEY = 'pendingJson';

async function loadPendingJson() {
    const stored = await chrome.storage.session.get(STORAGE_KEY);
    await chrome.storage.session.remove(STORAGE_KEY);
    return stored[STORAGE_KEY] || '';
}

loadPendingJson().then((initialInput) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <JsonParser initialInput={initialInput} />
    );
});
