<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>
                             </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a href="#">Logout</a></li>
                            </ul>
                    </div>
                    <div class="logo-element">
                        IN+
                    </div>
                </li>
                <li class="active">
                    <nuxt-link to="/"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboard</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/order"><i class="fa fa-edit"></i> <span class="nav-label">Order</span> </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/customer"><i class="fa fa-male"></i> <span class="nav-label">Customer</span> </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/product"><i class="fa fa-archive"></i> <span class="nav-label">Product</span> </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/user"><i class="fa fa-user"></i> <span class="nav-label">User</span> </nuxt-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    mounted: function () {
    }
};
</script>