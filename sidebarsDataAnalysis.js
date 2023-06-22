/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// module.exports = {
//   dataAnalysisSidebar: [
//       {
//         type: 'autogenerated',
//         dirName: '.',
//       },
//     ],
//   };

module.exports = {
  dataAnalysisSidebar: [
    {
      type: 'category',
      label: 'Docs',
      link: {
        type: 'doc',
        id: "index",
      },
      items: [
        {
          type: 'category',
          label: 'Data access',
          items: [
            {
              type: 'doc',
              id: 'data_access_examples',
              // label: 'Examples',
            },
            {
              type: 'doc',
              id: 'documentation/data_access',
              // label: 'Examples',
            },
          ]
        },
        {
          type: 'category',
          label: 'Error analysis',
          items: [
            {
              type: 'doc',
              id: 'error_analysis_examples',
              // label: 'Documentation',
            },
            {
              type: 'doc',
              id: 'documentation/error_analysis',
              // label: 'Examples',
            },
          ],
        },
        {
          type: 'category',
          label: 'Validation',
          items: [
            {
              type: 'doc',
              id: 'validation_examples',
              // label: 'Documentation',
            },
            {
              type: 'doc',
              id: 'documentation/validation',
              // label: 'Documentation',
            }
          ],
        },
      ]
    }
  ],
};