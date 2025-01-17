// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: '',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Volunteers',
            type: 'item',
            url: '/volunteers',
            icon: icons.ChromeOutlined
        },
        // {
        //     id: 'documentation',
        //     title: 'Documentation',
        //     type: 'item',
        //     url: 'https://codedthemes.gitbook.io/mantis-react/',
        //     icon: icons.QuestionOutlined,
        //     external: true,
        //     target: true
        // }
    ]
};

export default support;
