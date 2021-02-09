"use strict";

module.exports = {
  description: "Add an page",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What the page should be called?",
      default: "Default",
    },
    {
      type: "input",
      name: "router",
      message: "Which route is this page?",
      default: "Default",
    },
  ],
  actions: () => {
    let actions = [
      {
        type: "add",
        path: `../../src/routers/{{lowerCase router}}/pages/{{properCase name}}/index.tsx`,
        templateFile: `./page/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/routers/{{lowerCase router}}/pages/{{properCase name}}/index.spec.tsx`,
        templateFile: `./page/index.spec.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/routers/{{lowerCase router}}/pages/{{properCase name}}/styles.scss`,
        abortOnFail: true,
      },
      {
        type: "append",
        path: `../../src/routers/{{lowerCase router}}/index.tsx`,
        pattern: "} />",
        template: `        <Route exact path="/{{dashCase name}}" component={ {{properCase name}} } />`,
      },
      {
        type: "append",
        path: `../../src/routers/{{router}}/index.tsx`,
        pattern: "// Routes",
        template: `import {{properCase name}} from './pages/{{properCase name}}';`,
      },
    ];
    return actions;
  },
};
