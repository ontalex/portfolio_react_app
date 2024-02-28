import ReactDOM from 'react-dom/client';
import { Skills } from './components/Skills/Skills';
import { Works } from './components/Works/Works';

ReactDOM.createRoot(document.getElementById('skills_list')).render(
    <Skills />
);

ReactDOM.createRoot(document.getElementById('projects_list')).render(
    <Works/>
);