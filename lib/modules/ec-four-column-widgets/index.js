module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Four Column',
  addFields: [
    {
      name: 'one',
      type: 'area',
      contextual: true
    },
    {
      name: 'two',
      type: 'area',
      contextual: true
    },
    {
      name: 'three',
      type: 'area',
      contextual: true
    },
    {
      name: 'four',
      type: 'area',
      contextual: true
    },
    {
      name: 'layoutWidth',
      label: 'Layout Width',
      type: 'select',
      def: 'narrow',
      choices: [
        {
          label: 'Full Width',
          value: 'full'
        },
        {
          label: 'Narrow Width',
          value: 'narrow'
        }
      ]
    },
    {
      name: 'columnOneWidth',
      label: 'Column 1 Width',
      type: 'select',
      def: 'pure-u-1',
      choices: [
        {
          label: '100%',
          value: 'pure-u-1',
        },
        {
          label: '75%',
          value: 'pure-u-md-3-4',
        },
        {
          label: '70%',
          value: 'pure-u-17-24',
        },
        {
          label: '50%',
          value: 'pure-u-md-1-2',
        },
        {
          label: '33%',
          value: 'pure-u-md-8-24',
        },
        {
          label: '25%',
          value: 'pure-u-md-1-4',
        }
      ]
    },
    {
      name: 'columnTwoWidth',
      label: 'Column 2 Width',
      type: 'select',
      def: 'pure-u-1',
      choices: [
        {
          label: '100%',
          value: 'pure-u-1',
        },
        {
          label: '75%',
          value: 'pure-u-md-3-4',
        },
        {
          label: '70%',
          value: 'pure-u-17-24',
        },
        {
          label: '50%',
          value: 'pure-u-md-1-2',
        },
        {
          label: '33%',
          value: 'pure-u-md-8-24',
        },
        {
          label: '25%',
          value: 'pure-u-md-1-4',
        }
      ]
    },
    {
      name: 'columnThreeWidth',
      label: 'Column 3 Width',
      type: 'select',
      def: 'pure-u-1',
      choices: [
        {
          label: '100%',
          value: 'pure-u-1',
        },
        {
          label: '75%',
          value: 'pure-u-md-3-4',
        },
        {
          label: '70%',
          value: 'pure-u-17-24',
        },
        {
          label: '50%',
          value: 'pure-u-md-1-2',
        },
        {
          label: '33%',
          value: 'pure-u-md-8-24',
        },
        {
          label: '25%',
          value: 'pure-u-md-1-4',
        }
      ]
    },
    {
      name: 'columnFourWidth',
      label: 'Column 4 Width',
      type: 'select',
      def: 'pure-u-1',
      choices: [
        {
          label: '100%',
          value: 'pure-u-1',
        },
        {
          label: '75%',
          value: 'pure-u-md-3-4',
        },
        {
          label: '70%',
          value: 'pure-u-17-24',
        },
        {
          label: '50%',
          value: 'pure-u-md-1-2',
        },
        {
          label: '33%',
          value: 'pure-u-md-8-24',
        },
        {
          label: '25%',
          value: 'pure-u-md-1-4',
        }
      ]
    }
  ]
};
