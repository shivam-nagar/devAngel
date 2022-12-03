// assets
import { QuestionOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// icons
const icons = {
    QuestionOutlined,
    QuestionCircleOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const questions = {
    id: 'group-questions',
    title: 'Questions',
    type: 'group',
    children: [
        {
            id: 'ask-question',
            title: 'Ask Question',
            type: 'item',
            url: '/ask-question',
            icon: icons.QuestionOutlined,
            breadcrumbs: true
        },
        {
            id: 'my-questions',
            title: 'My Questions',
            type: 'item',
            url: '/my-questions',
            icon: icons.QuestionCircleOutlined,
            breadcrumbs: true
        }
    ]
};

export default questions;
