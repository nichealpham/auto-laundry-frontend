const webpack = require('webpack');

module.exports = {
    env: {
        baseApi: process.env.BASE_API || 'http://localhost:3002'
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'Auto Laundry',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Auto Laundry' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    css: [
        '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
        '~/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css',
        '~/node_modules/summernote/dist/summernote.css',
        '~/node_modules/font-awesome/css/font-awesome.min.css',
        '~/node_modules/animate.css/animate.min.css',
        '~/node_modules/toastr/build/toastr.min.css',
        '~/node_modules/footable/css/footable.core.min.css',
        '~/assets/css/site.css'
    ],
    plugins: [
        { src: '~/plugins/libs.js', ssr: false },
        { src: '~/plugins/vue-google-maps.js', ssr: false }
    ],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
        vendor: [
            'axios',
            'jquery',
            'bootstrap',
            'bootstrap-datepicker',
            'summernote',
            'jquery-slimscroll',
            'metisMenu',
            'pace',
            'footable',
            '~/assets/js/site.js'
        ],
        plugins: [
            // set shortcuts as global for bootstrap
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ],
        /*
        ** Run ESLINT on save
        */
        extend (config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
