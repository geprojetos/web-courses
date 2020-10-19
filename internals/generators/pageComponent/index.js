'use strict';

module.exports = {
  description: 'Add an page component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What the page component should be called?',
      default: 'Default'
    },
    {
      type: 'input',
      name: 'router',
      message: 'Which route is this page component?',
      default: 'none'
    },
    {
      type: 'input',
      name: 'page',
      message: 'Which page is this page component?',
      default: 'none'
    }
    // {
    //   type: 'list',
    //   name: 'componentType',
    //   message: 'What is the type of the component?',
    //   default: 'none',
    //   choices: [
    //     { name: 'Functional Component', value: 'functional' },
    //     { name: 'Styled Component', value: 'styled' }
    //   ]
    // }
  ],
  actions: data => {
    let actions = [];

    actions = actions.concat([
      {
        type: 'add',
        path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/index.tsx`,
        templateFile: `../generators/pageComponent/functional/index.js.hbs`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/index.spec.tsx`,
        templateFile: `../generators/pageComponent/functional/index.spec.js.hbs`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/styles.scss`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/index.stories.tsx`,
        templateFile: `../generators/pageComponent/functional/index.stories.js.hbs`,
        abortOnFail: true
      }
    ]);

    // if (data.componentType === 'styled') {
    //   actions = actions.concat([
    //     {
    //       type: 'add',
    //       path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/index.tsx`,
    //       templateFile: `../generators/pageComponent/styled/index.js.hbs`,
    //       abortOnFail: true
    //     },
    //     {
    //       type: 'add',
    //       path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/index.spec.tsx`,
    //       templateFile: `../generators/pageComponent/styled/index.spec.js.hbs`,
    //       abortOnFail: true
    //     },
    //     {
    //       type: 'add',
    //       path: `../../src/routers/{{camelCase router}}/pages/{{properCase page}}/components/{{properCase name}}/index.stories.tsx`,
    //       templateFile: `../generators/pageComponent/styled/index.stories.js.hbs`,
    //       abortOnFail: true
    //     }
    //   ]);
    // }

    return actions;
  }
};
