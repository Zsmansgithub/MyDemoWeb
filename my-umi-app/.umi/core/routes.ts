// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/zs/.config/yarn/global/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/home",
    "exact": true,
    "component": require('@/pages/home.js').default
  },
  {
    "path": "/list",
    "exact": true,
    "component": require('@/pages/list.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
