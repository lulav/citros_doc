/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   gettingStartedSidebar: [{type: 'autogenerated', dirName: '.'}],
// };

module.exports = {
  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Quick Start',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'TBD',
          id: 'quickstart/quick_tbd',
        },
      ],
    },

    // CITROS CLI
    {
      type: 'category',
      label: 'CITROS CLI',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'cli/cli_overview',
        },
        {
          type: 'doc',
          label: 'Installation',
          id: 'cli/cli_install',
        },
        {
          type: 'category',
          label: 'Commands',
          items: [
            {
              type: 'doc',
              label: 'Init',
              id: 'cli/cli_commands/cli_init',
            },
            {
              type: 'doc',
              label: 'Authentication',
              id: 'cli/cli_commands/cli_auth',
            },
            {
              type: 'doc',
              label: 'Sync',//sync
              id: 'cli/cli_commands/cli_sync',
            },
            {
              type: 'doc',
              label: 'Runs',
              id: 'cli/cli_commands/cli_run',
            },
          ]
        },
        {
          type: 'category',
          label: 'Tutorials',//how tos - start newe, init new, cooaboration, troubleshooting
          items: [
            {
              type: 'doc',
              label: 'Start New Repository',
              id: 'cli/cli_tutorials/cli_tut_newproj',
            },
            {
              type: 'doc',
              label: 'Init New Simulation',
              id: 'cli/cli_tutorials/cli_tut_newrun',
            },
            {
              type: 'doc',
              label: 'Collaborate with Team',
              id: 'cli/cli_tutorials/cli_tut_collab',
            },
          ]
        },
        {
          type: 'category',
          label: 'Troubleshooting',//how tos - start newe, init new, cooaboration, troubleshooting
          items: [
            {
              type: 'doc',
              label: 'TBD',
              id: 'cli/cli_troubelshooting/cli_ts_tbd',
            },
          ]
        },
      ],
    },


    //Authentication
    {
      type: 'category',
      label: 'Authentication',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Account',
          items: [
            {
              type: 'doc',
              label: 'Registraion Login',
              id: 'authentication/account/account_login',
            },
            {
              type: 'doc',
              label: 'Change Password',
              id: 'authentication/account/account_password',
            },
            {
              type: 'category',
              label: 'Profile Settings',
              items: [

                {
                  type: 'doc',
                  label: 'Notification Settings',
                  id: 'authentication/profile/notification_settings',
                },
                {
                  type: 'doc',
                  label: 'SSH Keys',
                  id: 'authentication/profile/ssh',
                },
                {
                  type: 'doc',
                  label: 'Quota',
                  id: 'authentication/profile/quota',
                },




              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'SSH Keys',
          items: [
            {
              type: 'category',
              label: 'Connect with SSH',
              items: [
                {
                  type: 'doc',
                  label: 'Overview',
                  id: 'authentication/ssh/ssh_overview',
                },
                {
                  type: 'doc',
                  label: 'SSH Agent Forwarding',
                  id: 'authentication/ssh/ssh_agent_forwarding',
                },
                {
                  type: 'doc',
                  label: 'Generate new SSH Key',
                  id: 'authentication/ssh/ssh_generate_key',
                },
                {
                  type: 'doc',
                  label: 'Test your SSH connection',
                  id: 'authentication/ssh/ssh_test_connection',
                },
                {
                  type: 'doc',
                  label: 'SSH key passphrases',
                  id: 'authentication/ssh/ssh_passphrases',
                }
              ]
            },
            {
              type: 'category',
              label: 'Troubleshooting',
              items: [
                {
                  type: 'doc',
                  label: 'SSH key passphrases',
                  id: 'authentication/troubleshooting/ts_passphrases',
                },
                {
                  type: 'doc',
                  label: 'Deleted or Missing SSH Keys',
                  id: 'authentication/troubleshooting/ts_missing_key',
                },
                {
                  type: 'doc',
                  label: 'Errors',
                  id: 'authentication/troubleshooting/ts_error',
                },
                {
                  type: 'doc',
                  label: 'Permission Denied',
                  id: 'authentication/troubleshooting/ts_permissions',
                }
              ]
            },
          ]
        },
      ],
    },


    //Simulations
    {
      type: 'category',
      label: 'Simulations',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'simulations/sim_overview',
        },
        {
          type: 'category',
          label: 'Batch Simulations',
          items: [
            {
              type: 'doc',
              label: 'Breadcrumbs',
              id: 'simulations_batch/sim_batch_breadcrumbs',
            },
            {
              type: 'doc',
              label: 'Run New Batch Simulations',
              id: 'simulations_batch/sim_batch_run',
            },
            {
              type: 'doc',
              label: 'Batch Simulations Screen',
              id: 'simulations_batch/sim_batch_screen',
            },
          ]
        },
        {
          type: 'category',
          label: 'Simulation Screen',
          items: [
            {
              type: 'doc',
              label: 'Breadcrumbs',
              id: 'simulation_screen/sim_breadcrumbs',
            },
            {
              type: 'doc',
              label: 'Possible Runs',
              id: 'simulation_screen/sim_possible_runs',
            },
            {
              type: 'doc',
              label: 'Logs',
              id: 'simulation_screen/sim_logs',
            },
          ]
        },
      ],
    },

    //Repositories
    {
      type: 'category',
      label: 'Repositories',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'repos/repos_overview',
        },
        {
          type: 'doc',
          label: 'Add Repository',
          id: 'repos/repos_add',
        },
        {
          type: 'doc',
          label: 'Repository Template',
          id: 'repos/repos_template',
        },
        {
          type: 'category',
          label: 'Repository File Structure',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'repos_file_structure/repos_fs_overview',
            },
            {
              type: 'doc',
              label: 'citros_repo_id',
              id: 'repos_file_structure/repos_fs_repo_id',
            },
            {
              type: 'doc',
              label: 'notebooks',
              id: 'repos_file_structure/repos_fs_notebooks',
            },
            {
              type: 'doc',
              label: 'parameter_setup',
              id: 'repos_file_structure/repos_fs_param_setup',
            },
            {
              type: 'doc',
              label: 'project.json',
              id: 'repos_file_structure/repos_fs_project_json',
            },
            {
              type: 'doc',
              label: 'readme',
              id: 'repos_file_structure/repos_fs_readme',
            },
            {
              type: 'doc',
              label: 'reports',
              id: 'repos_file_structure/repos_fs_reports',
            },
            {
              type: 'doc',
              label: 'settings.json',
              id: 'repos_file_structure/repos_fs_settings_json',
            },
            {
              type: 'doc',
              label: 'simulations',
              id: 'repos_file_structure/repos_fs_simulations',
            },
            {
              type: 'doc',
              label: 'user_commit',
              id: 'repos_file_structure/repos_fs_user_commit',
            },
            {
              type: 'doc',
              label: 'workflows',
              id: 'repos_file_structure/repos_fs_workflows',
            },
          ]
        },
      ],
    },




    //Data Analysis
    //
    {
      type: 'category',
      label: 'Data Analysis',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'data_analysis/data_analysis_overview',
        },
        {
          type: 'category',
          label: 'Data Access',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'data_analysis/data_access/access_overview',
              // id: 'dummy',

            },
            {
              type: 'doc',
              label: 'Examples',
              // id: 'dummy',
              id: 'data_analysis/data_access/access_examples',
            },
            {
              type: 'doc',
              label: 'Data Structure',
              id: 'data_analysis/data_access/access_ds',
              // id: 'dummy',

            },
          ]
        },
        {
          type: 'category',
          label: 'Data Validation',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'data_analysis/data_validation/validation_overview',
            },
            {
              type: 'doc',
              label: 'Examples',
              id: 'data_analysis/data_validation/validation_example',
            },
            {
              type: 'doc',
              label: 'Data Structure',
              id: 'data_analysis/data_validation/validation_ds',
            },

          ]
        },
        {
          type: 'category',
          label: 'Error Analysis',
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'data_analysis/data_error/error_overview',
            },
            {
              type: 'doc',
              label: 'Examples',
              id: 'data_analysis/data_error/error_examples',
            },
            {
              type: 'doc',
              label: 'Data Structure',
              id: 'data_analysis/data_error/error_ds',
            },

          ]
        }
      ]
    },



    //Billing
    {
      type: 'category',
      label: 'Billing',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Payment Method',
          id: 'billing/billing_pm',
        },
        {
          type: 'doc',
          label: 'Billing Address',
          id: 'billing/billing_address',
        },
        {
          type: 'doc',
          label: 'Invoices',
          id: 'billing/billing_invoices',
        },
        {
          type: 'doc',
          label: 'Plans',
          id: 'billing/billing_plans',
        },
      ],
    },


    //Notifications
    {
      type: 'category',
      label: 'Notifications',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Notification Template',
          id: 'notifications/notifications_template',
        },
        {
          type: 'doc',
          label: 'Notifications Settings',
          id: 'notifications/notifications_settings',
        },
      ],
    },

    //Organization
    {
      type: 'category',
      label: 'Organization',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'TBD',
          id: 'organization/organization_tbd',
        },
      ],
    },

    //CI/CD and DevOps
    {
      type: 'category',
      label: 'CI/CD and DevOps',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'TBD',
          id: 'cicd/cicd_tbd',
        },
      ],
    }
  ]
};