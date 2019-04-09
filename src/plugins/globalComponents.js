// import { BaseInput, Card, BaseDropdown, BaseButton, BaseCheckbox } from "../components/black";
import {BCard} from "../components/black/index";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    // Vue.component(BaseInput.name, BaseInput);
    Vue.component(BCard.name, BCard);
    // Vue.component(BaseDropdown.name, BaseDropdown);
    // Vue.component(BaseButton.name, BaseButton);
    // Vue.component(BaseCheckbox.name, BaseCheckbox);
  }
};

export default GlobalComponents;
