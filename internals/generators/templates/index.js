"use strict";

module.exports = {
  description: "Add an temaplte component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What the template component should be called?",
      default: "Default",
    },
  ],
  actions: (data) => {
    let actions = [];

    actions = actions.concat([
      // component
      {
        type: "add",
        path: `../../src/shared/templates/{{properCase name}}/index.tsx`,
        templateFile: `../generators/templates/index.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/shared/templates/{{properCase name}}/index.spec.tsx`,
        templateFile: `../generators/templates/index.spec.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/shared/templates/{{properCase name}}/styles.scss`,
        templateFile: `../generators/templates/styles.js.hbs`,
        abortOnFail: true,
      },
      {
        type: "add",
        path: `../../src/shared/templates/{{properCase name}}/index.stories.tsx`,
        templateFile: `../generators/templates/index.stories.js.hbs`,
        abortOnFail: true,
      },
      // imports index
      {
        type: "append",
        path: "../../src/shared/templates/index.ts",
        pattern: "// import",
        template: `import {{properCase name}} from './{{properCase name}}';`,
      },
      {
        type: "append",
        path: "../../src/shared/templates/index.ts",
        pattern: "// exports",
        template: `  {{properCase name}},`,
      },
    ]);

    return actions;
  },
};
