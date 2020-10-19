'use strict';

module.exports = {
  description: 'Add an shared component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What the shared component should be called?',
      default: 'Default'
    }
  ],
  actions: data => {
    let actions = [];

    actions = actions.concat([
      // component
      {
        type: 'add',
        path: `../../src/shared/components/{{properCase name}}/index.tsx`,
        templateFile: `../generators/sharedComponent/functional/index.js.hbs`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/shared/components/{{properCase name}}/index.spec.tsx`,
        templateFile: `../generators/sharedComponent/functional/index.spec.js.hbs`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/shared/components/{{properCase name}}/styles.scss`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/shared/components/{{properCase name}}/index.stories.tsx`,
        templateFile: `../generators/sharedComponent/functional/index.stories.js.hbs`,
        abortOnFail: true
      },
      // imports index
      {
        type: 'append',
        path: '../../src/shared/components/index.ts',
        pattern: '// import',
        template: `import {{properCase name}} from './{{properCase name}}';`
      },
      {
        type: 'append',
        path: '../../src/shared/components/index.ts',
        pattern: '// exports',
        template: `  {{properCase name}},`
      }
      // {
      //   type: 'append',
      //   path: `../../src/routers/index.tsx`,
      //   pattern: '// Imports',
      //   template: `const {{pascalCase name}}Module = lazy(() => import('./{{camelCase name}}'));`
      // },
    ]);

    return actions;
  }
};
