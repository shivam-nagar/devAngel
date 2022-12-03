// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const questions = {
    id: 'group-dashboard',
    title: 'Questions',
    type: 'group',
    children: [
        {
            id: 'ask-question',
            title: 'Ask Question',
            type: 'item',
            url: '/ask-question',
            icon: icons.DashboardOutlined,
            breadcrumbs: true
        },
        {
            id: 'my-questions',
            title: 'My Questions',
            type: 'item',
            url: '/my-questions',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default questions;
