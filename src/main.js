import { createApp, provide } from 'vue'
import App from './App.vue';
import diy from './diy';
import MISAEnum from './js/enum';
import MISAResource from './js/resource';
import MISACommon from './js/common';
import MButton from './components/button/MButton.vue';
import MCombobox from './components/combobox/MCombobox.vue';
import MDropdown from "./components/combobox/MDropdown.vue";
import MDialog from "./components/dialog/MDialog.vue";
import MInputText from "./components/input/MInputText.vue";
import MInputMoney from "./components/input/MInputMoney.vue";
import MCheckbox from "./components/input/MCheckbox.vue";
import MDatepicker from "./components/datepicker/MDatepicker.vue";
import MNotify from "./components/notify/MNotify.vue";
import vueClickOutsideElement from 'vue-click-outside-element';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import router from './router/router';
import TheNavVue from './views/TheNav.vue';
import TheFooterVue from './views/TheFooter.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const app = createApp(App);
app.component("TheNav",TheNavVue);
app.component("TheFooter",TheFooterVue);
app.component("MNotifyVue",MNotify);
app.component("MButtonVue",MButton);
app.component("MComboboxVue",MCombobox);
app.component("MDropdownVue",MDropdown);
app.component("MDialogVue",MDialog);
app.component("MInputTextVue",MInputText);
app.component("MInputMoneyVue",MInputMoney);
app.component("MCheckboxVue",MCheckbox);
app.component("MDatepicker",MDatepicker);
app.component('font-awesome-icon', FontAwesomeIcon);
app.provide("diy",diy);
app.use(vueClickOutsideElement)
app.use(router);
app.mount('#app');

app.config.productionTip = false;
app.config.globalProperties.$MISAEnum = MISAEnum;
app.config.globalProperties.$MISACommon = MISACommon;
app.config.globalProperties.$MISAResource = MISAResource;

