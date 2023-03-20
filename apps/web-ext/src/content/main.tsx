import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/content/App';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('content');

const root = document.createElement('div');
root.id = 'chrome-extension-boilerplate-react-vite-content-view-root';
document.body.append(root);

createRoot(root).render(<App />);
