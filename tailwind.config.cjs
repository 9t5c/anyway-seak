const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			transitionTimingFunction: {
        'any-hey': 'cubic-bezier(0.95, 0.05, 0.8, 0.04)',
      },
			transformOrigin: {
				'hey': '50% 50%'
			}
		}
	},

	plugins: []
};

module.exports = config;
