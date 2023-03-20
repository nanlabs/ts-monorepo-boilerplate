import Browser from 'webextension-polyfill';
import initReloadClient from '../initReloadClient';

export default function addHmrIntoScript(watchPath: string) {
  initReloadClient({
    watchPath,
    onUpdate: () => {
      Browser.runtime.reload();
    },
  });
}
