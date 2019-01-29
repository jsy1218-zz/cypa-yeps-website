import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppRouter } from './AppRouter';
import {DesktopAppRouter} from './DesktopAppRouter';

import './index.css';

function isDesktopDevice() {
  return (typeof window.orientation == "undefined") && (navigator.userAgent.indexOf('IEMobile') == -1);
};

if (isDesktopDevice())
{
  ReactDOM.render(
    <DesktopAppRouter />,
    document.getElementById('root') as HTMLElement
  );
} else {
  ReactDOM.render(
    <AppRouter />,
    document.getElementById('root') as HTMLElement
  );
}
