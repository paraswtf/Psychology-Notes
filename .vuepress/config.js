module.exports = {
    title: 'Psych',
    description: 'Psych XII',
    theme: 'yuu',
    markdown: {
        extractHeaders: [ 'h2', 'h3', 'h4' ]
    },
    themeConfig: {
		yuu: {
			defaultDarkTheme: true,
			disableThemeIgnore: true,
		},
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Topics', link: '/topics/' },
            { text: 'About me', link: 'https://styxo.codes/' },
        ],
        searchPlaceholder: 'Search...',
        sidebar: [
            {
                title: 'Topics',
                path: '/topics/',
                collapsable: false,
                sidebarDepth: 10,
                children: [
                    '/topics/ch1/',
                    '/topics/ch2/',
                    '/topics/ch3/',
                    '/topics/ch4/',
                    '/topics/ch5/',
                    '/topics/ch6/',
                    '/topics/ch7/',
                    '/topics/ch8/',
                    '/topics/misc/',
                ]
            }
        ]
    }
}
