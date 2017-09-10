<template>
    <div id="wrapper">
        <site-menu/>
        <div id="page-wrapper" class="gray-bg">
            <site-header/>
            <div class="wrapper wrapper-content animated fadeInRight">
                <nuxt/>
            </div>
            <site-footer/>
        </div>
    </div>
</template>

<script>
import SiteMenu from '~/components/Menu.vue';
import SiteHeader from '~/components/Header.vue';
import SiteFooter from '~/components/Footer.vue';

export default {
    components: {
        SiteMenu,
        SiteHeader,
        SiteFooter
    },
    mounted: function () {
        // loadScript(); // eslint-disable-line
    }
};
</script>
