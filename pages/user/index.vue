<template>
    <div class="row">
        <div class="col-sm-8">
            <div class="ibox">
                <div class="ibox-content">
                    <span class="text-muted small pull-right">Last modification: <i class="fa fa-clock-o"></i> 2:10 pm - 12.06.2014</span>
                    <h2>Customers</h2>
                    <div class="input-group">
                        <input type="text" placeholder="Search customer " class="input form-control">
                        <span class="input-group-btn">
                            <button type="button" class="btn btn btn-primary"> <i class="fa fa-search"></i> Search</button>
                        </span>
                    </div>
                    <div class="clients-list">
                        <ul class="nav nav-tabs">
                            <span class="pull-right small text-muted">1406 Elements</span>
                            <nuxt-link to="/customer/1" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i> New
                            </nuxt-link>
                        </ul>
                        <div class="full-height-scroll">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <tbody>
                                    <tr>
                                        <td class="client-avatar"><img alt="image" src="img/a2.jpg"> </td>
                                        <td><a data-toggle="tab" href="#contact-1" class="client-link">Anthony Jackson</a></td>
                                        <td> Tellus Institute</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> gravida@rbisit.com</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><img alt="image" src="img/a3.jpg"> </td>
                                        <td><a data-toggle="tab" href="#contact-2" class="client-link">Rooney Lindsay</a></td>
                                        <td>Proin Limited</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> rooney@proin.com</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><img alt="image" src="img/a4.jpg"> </td>
                                        <td><a data-toggle="tab" href="#contact-3" class="client-link">Lionel Mcmillan</a></td>
                                        <td>Et Industries</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +432 955 908</td>
                                        <td class="client-status"></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-4" class="client-link">Edan Randall</a></td>
                                        <td>Integer Sem Corp.</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +422 600 213</td>
                                        <td class="client-status"><span class="label label-warning">Waiting</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a6.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-2" class="client-link">Jasper Carson</a></td>
                                        <td>Mone Industries</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +400 468 921</td>
                                        <td class="client-status"></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-3" class="client-link">Reuben Pacheco</a></td>
                                        <td>Magna Associates</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> pacheco@manga.com</td>
                                        <td class="client-status"><span class="label label-info">Phoned</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a1.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-1" class="client-link">Simon Carson</a></td>
                                        <td>Erat Corp.</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> Simon@erta.com</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a3.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-2" class="client-link">Rooney Lindsay</a></td>
                                        <td>Proin Limited</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> rooney@proin.com</td>
                                        <td class="client-status"><span class="label label-warning">Waiting</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a4.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-3" class="client-link">Lionel Mcmillan</a></td>
                                        <td>Et Industries</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +432 955 908</td>
                                        <td class="client-status"></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-4" class="client-link">Edan Randall</a></td>
                                        <td>Integer Sem Corp.</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +422 600 213</td>
                                        <td class="client-status"></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a2.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-1" class="client-link">Anthony Jackson</a></td>
                                        <td> Tellus Institute</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> gravida@rbisit.com</td>
                                        <td class="client-status"><span class="label label-danger">Deleted</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-2" class="client-link">Reuben Pacheco</a></td>
                                        <td>Magna Associates</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> pacheco@manga.com</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-3"class="client-link">Edan Randall</a></td>
                                        <td>Integer Sem Corp.</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +422 600 213</td>
                                        <td class="client-status"><span class="label label-info">Phoned</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a6.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-4" class="client-link">Jasper Carson</a></td>
                                        <td>Mone Industries</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +400 468 921</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-2" class="client-link">Reuben Pacheco</a></td>
                                        <td>Magna Associates</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> pacheco@manga.com</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a1.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-1" class="client-link">Simon Carson</a></td>
                                        <td>Erat Corp.</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> Simon@erta.com</td>
                                        <td class="client-status"></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a3.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-3" class="client-link">Rooney Lindsay</a></td>
                                        <td>Proin Limited</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> rooney@proin.com</td>
                                        <td class="client-status"></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a4.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-4" class="client-link">Lionel Mcmillan</a></td>
                                        <td>Et Industries</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +432 955 908</td>
                                        <td class="client-status"><span class="label label-primary">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a5.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-1" class="client-link">Edan Randall</a></td>
                                        <td>Integer Sem Corp.</td>
                                        <td class="contact-type"><i class="fa fa-phone"> </i></td>
                                        <td> +422 600 213</td>
                                        <td class="client-status"><span class="label label-info">Phoned</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a2.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-2" class="client-link">Anthony Jackson</a></td>
                                        <td> Tellus Institute</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> gravida@rbisit.com</td>
                                        <td class="client-status"><span class="label label-warning">Waiting</span></td>
                                    </tr>
                                    <tr>
                                        <td class="client-avatar"><a href=""><img alt="image" src="img/a7.jpg"></a> </td>
                                        <td><a data-toggle="tab" href="#contact-4" class="client-link">Reuben Pacheco</a></td>
                                        <td>Magna Associates</td>
                                        <td class="contact-type"><i class="fa fa-envelope"> </i></td>
                                        <td> pacheco@manga.com</td>
                                        <td class="client-status"></td>
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
                <div class="ibox-content">
                    <div id="contact-1" class="tab-pane active">
                        <div class="row m-b-lg">
                            <div class="col-lg-4 text-center">
                                <h2>Nicki Smith</h2>
                            </div>
                            <div class="col-lg-8">
                                <strong>
                                    Notes
                                </strong>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <button type="button" class="btn btn-primary btn-sm btn-block"><i
                                        class="fa fa-envelope"></i> Send Message
                                </button>
                            </div>
                        </div>
                        <div class="row ibox-content inspinia-timeline">
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
                </div>
            </div>
        </div>
    </div>
</template>