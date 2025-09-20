// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components.json"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'primary-500': 'var(--primary-500)',
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			'navbar-color': '#FAFBFC',
  			'blue-600': 'var(--blue-600)',
  			'blue-500': 'var(--blue-500)',
  			'blue-400': 'var(--blue-400)',
  			'blue-300': 'var(--blue-300)',
  			'blue-200': 'var(--blue-200)',
  			'green-600': 'var(--green-600)',
  			'green-500': 'var(--green-500)',
  			'green-400': 'var(--green-400)',
  			'green-300': 'var(--green-300)',
  			'green-200': 'var(--green-200)',
  			'org-600': 'var(--org-600)',
  			'org-500': 'var(--org-500)',
  			'org-400': 'var(--org-400)',
  			'org-300': 'var(--org-300)',
  			'org-200': 'var(--org-200)',
  			'parpal-500': 'var(--parpal-500)',
  			'parpal-400': 'var(--parpal-400)',
  			'parpal-300': 'var(--parpal-300)',
  			'btn-footer-500': 'var(--btn-footer-500)',
  			'btn-footer-400': 'var(--btn-footer-400)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'btn-linier': 'var(--btn-linier)',
  			'blue-linier': 'var(--blue-linier)',
  			'green-linier': 'var(--green-linier)',
  			'org-linier': 'var(--org-linier)',
  			'parpal-linier': 'var(--parpal-linier)',
  			'services-blue-linier': 'var(--services-blue-linier)',
  			'services-green-linier': 'var(--services-green-linier)',
  			'services-org-linier': 'var(--services-org-linier)',
  			'services-perpal-linier': 'var(--services-perpal-linier)',
  			ourservices: 'var(--our)',
  			'footer-linier': 'var(--footer-linier)',
  			'mission-linier': 'var(--mission-linier)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
