<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="ibox">
                <div class="ibox-content">
                    <span class="text-muted small pull-right">Last modification: <i class="fa fa-clock-o"></i> 2:10 pm - 12.06.2014</span>
                    <h2>Customers</h2>
                    <div class="input-group">
                        <input type="text" v-model="contentSearch" placeholder="Search customer " class="input form-control">
                        <span class="input-group-btn">
                            <button type="button" class="btn btn btn-primary"> <i class="fa fa-search"></i> Search</button>
                        </span>
                    </div>
                    <div class="clients-list">
                        <div class="input-group navigate">
                            <span class="small text-muted">{{count}} Elements</span>
                            <span class="small text-muted">&ensp; | &ensp;</span>
                            <a href="#" class="small"><i class="fa fa-plus"></i> New</a>
                        </div>
                        <div class="full-height-scroll">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <tbody>
                                        <tr v-for="(customer, index) in customers" @click="selectCustomer(customer)">
                                            <td class="col-md-2">{{(index + 1) * page}}</td>
                                            <td class="col-md-4">{{customer.name}}</td>
                                            <td class="col-md-3"><i class="fa fa-phone"></i>&ensp;{{customer.phone}}</td>
                                            <td class="col-md-3 text-right"><nuxt-link to="/customer/1/promotions" class="small">Promotion</nuxt-link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="ibox">
                <div v-if="customerSelected" class="ibox-content">
                    <div class="row m-b-lg">
                        <div class="col-md-12 text-center name">
                            <p><h3>{{customerSelected.name}}</h3></p>
                        </div>
                        <div class="col-md-12 phone">
                            <p><i class="fa fa-phone"></i>&ensp;{{customerSelected.phone}}</p>
                        </div>
                        <div class="col-md-12 address">
                            <p><i class="fa fa-address-book-o"></i>&ensp;{{customerSelected.address}}</p>
                        </div>
                        <div class="col-md-12 note">
                            <strong>Notes</strong>
                            <p>{{customerSelected.note}}</p>
                            <button type="button" class="btn btn-primary btn-sm btn-block">
                                <i class="fa fa-envelope"></i> Send Message
                            </button>
                        </div>
                        <div v-if="customerSelected.location" class="col-md-12 map">
                            <gmap-map :center="{lat: customerSelected.location.latitude, lng: customerSelected.location.longitude}" :zoom="17" style="width: 100%; height: 200px;">
                                <gmap-marker :position="{lat: customerSelected.location.latitude, lng: customerSelected.location.longitude}"></gmap-marker>
                            </gmap-map>
                        </div>
                    </div>
                    <div v-if="false" class="row ibox-content inspinia-timeline">
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-user-md"></i>
                                    6:00 am
                                    <br/>
                                    <small class="text-navy">2 hour ago</small>
                                </div>
                                <div class="col-xs-7 content no-top-border">
                                    <p class="m-b-xs"><strong>Meeting</strong></p>

                                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the
                                        sale.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-file-text"></i>
                                    7:00 am
                                    <br/>
                                    <small class="text-navy">3 hour ago</small>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Send documents to Mike</strong></p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-coffee"></i>
                                    8:00 am
                                    <br/>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Coffee Break</strong></p>
                                    <p>
                                    Go to shop and find some products.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-phone"></i>
                                    11:00 am
                                    <br/>
                                    <small class="text-navy">21 hour ago</small>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Phone with Jeronimo</strong></p>
                                    <p>
                                    Lorem Ipsum has been the industry's standard dummy text ever since.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-user-md"></i>
                                    09:00 pm
                                    <br/>
                                    <small>21 hour ago</small>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Go to the doctor dr Smith</strong></p>
                                    <p>
                                        Find some issue and go to doctor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-user-md"></i>
                                    11:10 pm
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Chat with Sandra</strong></p>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-comments"></i>
                                    12:50 pm
                                    <br/>
                                    <small class="text-navy">48 hour ago</small>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Chat with Monica and Sandra</strong></p>
                                    <p>
                                        Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-phone"></i>
                                    08:50 pm
                                    <br/>
                                    <small class="text-navy">68 hour ago</small>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Phone to James</strong></p>
                                    <p>
                                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="row">
                                <div class="col-xs-3 date">
                                    <i class="fa fa-file-text"></i>
                                    7:00 am
                                    <br/>
                                    <small class="text-navy">3 hour ago</small>
                                </div>
                                <div class="col-xs-7 content">
                                    <p class="m-b-xs"><strong>Send documents to Mike</strong></p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div v-else class="ibox-content">
                    <div class="row m-b-lg text-center">
                        <p><h3>PLEASE SELECT THE CUSTOMER</h3></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomerGateway from '~/gateways/CustomerGateway';

export default {
    data () {
        return {
            contentSearch: null,
            customerSelected: null,
            customers: [],
            count: 0,
            pageTotal: 0,
            page: 1,
            limit: 10
        };
    },
    mounted: function () {
        this.$nextTick(async function () {
            await this.searchCustomers();
        });
    },
    methods: {
        searchCustomers: async function () {
            let { data } = await CustomerGateway.getCountSearchCustomers(this.contentSearch);
            this.count = data;
            this.pageTotal = Math.ceil(this.count / this.limit);

            if (this.count)
                this.changePage(1);
            else
                this.customers = [];
        },
        changePage: async function (page) {
            if (page < 1)
                this.page = 1;
            else if (page > this.pageTotal)
                this.page = this.pageTotal;

            let { data, error } = await CustomerGateway.searchCustomers(this.contentSearch, this.page, this.limit);
            if (error)
                return this.$nuxt.error({ statusCode: 400, message: error.message });

            this.customers = data;
            if (this.customers && this.customers.length)
                this.selectCustomer(this.customers[0]);
        },
        selectCustomer: function (customer) {
            this.customerSelected = customer;
        }
    }
};
</script>

<style>
.clients-list .navigate {
    margin-bottom: 10px;
}
.ibox-content .name {
    margin-bottom: 8px;
}
.ibox-content .note {
    margin-top: 8px;
}
.ibox-content .map {
    margin-top: 20px;
}
</style>