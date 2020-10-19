'use strict';

const fs = require('fs');
const camelCase = require('lodash.camelcase');

module.exports = {
  description: 'Add a Service',
  prompts: [
    {
      type: 'input',
      name: 'domain',
      message: 'What is the domain?',
      default: 'Default'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Default'
    },
    {
      type: 'input',
      name: 'url',
      message: 'What is the endpoint url?',
      default: '/default'
    },
    {
      type: 'list',
      name: 'method',
      message: 'What is the endpoint method?',
      choices: [
        { name: 'Get', value: 'GET', short: 'GET method' },
        { name: 'Post', value: 'POST', short: 'POST method' },
        { name: 'Put', value: 'PUT', short: 'PUT method' },
        { name: 'Delete', value: 'DELETE', short: 'DELETE method' }
      ],
      default: 'GET'
    }
  ],
  actions: data => {
    let actions = [];

    actions.push(
      {
        type: 'add',
        path: `../../src/common/services/{{camelCase domain}}/{{pascalCase name}}Service/interfaces/response.ts`,
        templateFile: `./service/response.ts.hbs`,
        abortOnFail: true
      },
      {
        type: 'add',
        path: `../../src/common/services/{{camelCase domain}}/{{pascalCase name}}Service/index.spec.ts`,
        templateFile: `./service/index.spec.ts.hbs`,
        abortOnFail: true
      }
    );

    if (data.method === 'GET') {
      actions.push({
        type: 'add',
        path: `../../src/common/services/{{camelCase domain}}/{{pascalCase name}}Service/index.ts`,
        templateFile: `./service/index.get.ts.hbs`,
        abortOnFail: true
      });
    } else {
      actions.push(
        {
          type: 'add',
          path: `../../src/common/services/{{camelCase domain}}/{{pascalCase name}}Service/index.ts`,
          templateFile: `./service/index.post.ts.hbs`,
          abortOnFail: true
        },
        {
          type: 'add',
          path: `../../src/common/services/{{camelCase domain}}/{{pascalCase name}}Service/interfaces/request.ts`,
          templateFile: `./service/request.ts.hbs`,
          abortOnFail: true
        }
      );
    }

    if (!fs.existsSync(`./src/common/services/${data.domain}/index.ts`)) {
      actions.push(
        {
          type: 'add',
          path: `../../src/common/services/{{camelCase domain}}/index.ts`,
          templateFile: `./service/index.domain.ts.hbs`,
          abortOnFail: true
        },
        {
          type: 'append',
          path: `../../src/common/jest/safrapay-common-mock.ts`,
          pattern: `/* Services */`,
          template: `  {{camelCase domain}}: {\n    /* {{camelCase domain}} */\n    {{pascalCase name}}Service: jest.fn(() => ({ ...serviceDefaultFunctions })),\n  },`,
          abortOnFail: true
        },
        {
          type: 'append',
          path: '../../src/common/services/index.ts',
          pattern: '/* Imports */',
          template: `import * as {{lowerCase domain}} from './{{lowerCase domain}}';`
        },
        {
          type: 'append',
          path: '../../src/common/services/index.ts',
          pattern: '/* Exports */',
          template: `  {{lowerCase domain}},`
        }
      );
    } else {
      actions.push(
        {
          type: 'append',
          path: `../../src/common/services/{{camelCase domain}}/index.ts`,
          pattern: '/* Imports */',
          template: `import {{pascalCase name}}Service from './{{pascalCase name}}Service';`
        },
        {
          type: 'append',
          path: `../../src/common/services/{{camelCase domain}}/index.ts`,
          pattern: '/* Exports */',
          template: `\t{{pascalCase name}}Service,`
        },
        {
          type: 'append',
          path: `../../src/common/jest/safrapay-common-mock.ts`,
          pattern: `/* ${camelCase(data.domain)} */`,
          template: `    {{pascalCase name}}Service: jest.fn(() => ({ ...serviceDefaultFunctions })),`,
          abortOnFail: true
        }
      );
    }

    return actions;
  }
};
