import './utils/imask';
import './modules/accordion/accordion';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {showDescription} from './modules/showdescription/showDescription';
import {scrollBlock} from './modules/scrollblock/scrollblock';
import {maskPhone} from './modules/mask/mask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  showDescription();
  scrollBlock();
  maskPhone();

  window.addEventListener('load', () => {
    initModals();
  });
});
