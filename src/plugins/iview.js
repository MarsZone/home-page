import Vue from 'vue'
import {
    Button,
    Table,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Icon,
    Row,
    Col,
    Message,
    Modal
} from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);
Vue.component('Dropdown', Dropdown);
Vue.component('Icon', Icon);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.prototype.$Message = Message;
Vue.component('Modal', Modal);


// iView
import 'view-design/dist/styles/iview.css';