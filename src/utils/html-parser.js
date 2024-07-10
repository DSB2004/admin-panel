// used for parsing data from react-quill text editor

import { parse } from 'node-html-parser';

const parseHtml = (html) => {
    // Parse the HTML string into a DOM structure
    const root = parse(html);

    // Define mappings of element tags to Tailwind classes
    const classMap = {
        'p': 'text-sm m-0',
        'h1': 'text-xl m-0',
        'h2': 'text-lg m-0',
        'h3': 'text-md ',
        'ul': 'text-sm',
        'ol': 'text-sm',
        'a': 'text-sm text-blue',
        'li': 'text-sm'
        // Add more mappings as needed
    };

    // Traverse through the DOM and add Tailwind classes
    root.querySelectorAll('*').forEach((element) => {
        const tag = element.tagName.toLowerCase();
        const styleClass = classMap[tag];
        if (styleClass) {
            const existingClass = element.getAttribute('class');
            const updatedClass = existingClass ? `${existingClass} ${styleClass}` : styleClass;
            element.setAttribute('class', updatedClass);
        }
    });

    // Serialize the DOM back to HTML
    return root.toString();
}

export default parseHtml;

