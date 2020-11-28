"use strict";

module.exports = {
  description: "Add an router",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What the route should be called?",
      default: "Default",
    },
  ],
  actions: () => {
    let actions = [
      // router module
      {
        type: "add",
        path: `../../src/routers/{{camelCase name}}/index.tsx`,
        templateFile: `./router/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "append",
        path: `../../src/routers/index.tsx`,
        pattern: "// Imports",
        template: `const {{pascalCase name}}Module = lazy(() => import('./{{camelCase name}}'));`,
      },
      {
        type: "append",
        path: `../../src/routers/index.tsx`,
        pattern: "} />",
        template: `      <Route path="/{{dashCase name}}" component={ {{pascalCase name}}Module } />`,
      },
      // router page
      {
        type: "add",
        path: `../../src/routers/{{camelCase name}}/pages/{{properCase name}}/index.tsx`,
        templateFile: `../generators/page/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/routers/{{camelCase name}}/pages/{{properCase name}}/index.spec.tsx`,
        templateFile: `../generators/page/index.spec.js.hbs`,
        abortOnFail: true,
      },
      // i18n
      {
        type: "add",
        path: `../../src/translations/en/{{dashCase name}}.json`,
        templateFile: `./router/index.json.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/translations/pt/{{dashCase name}}.json`,
        templateFile: `./router/index.json.hbs`,
        abortOnFail: true,
      },
      {
        type: "append",
        path: `../../src/translations/translation.ts`,
        pattern: "// imports",
        template: `import {{camelCase name}}Pt from './pt/{{dashCase name}}.json';`,
      },
      {
        type: "append",
        path: `../../src/translations/translation.ts`,
        pattern: "// imports",
        template: `import {{camelCase name}}En from './en/{{dashCase name}}.json';`,
      },
      {
        type: "append",
        path: `../../src/translations/translation.ts`,
        pattern: "// exports",
        template: `  {{camelCase name}}Pt,`,
      },
      {
        type: "append",
        path: `../../src/translations/translation.ts`,
        pattern: "// exports",
        template: `  {{camelCase name}}En,`,
      },
      {
        type: "append",
        path: `../../src/i18n.ts`,
        pattern: "// imports",
        template: `  {{camelCase name}}Pt,`,
      },
      {
        type: "append",
        path: `../../src/i18n.ts`,
        pattern: "// imports",
        template: `  {{camelCase name}}En,`,
      },
      {
        type: "append",
        path: `../../src/i18n.ts`,
        pattern: "// exports pt",
        template: `      {{camelCase name}}:{{camelCase name}}Pt,`,
      },
      {
        type: "append",
        path: `../../src/i18n.ts`,
        pattern: "// exports en",
        template: `      {{camelCase name}}:{{camelCase name}}En,`,
      },
    ];

    return actions;
  },
};
