import React from 'react';
import { createRoot } from 'react-dom/client';

import Dashboard from './contents/dashboard';

// styling
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<Dashboard />);