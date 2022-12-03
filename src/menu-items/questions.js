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
