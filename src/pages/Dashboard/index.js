import PropTypes from 'prop-types'
import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Link } from "react-router-dom";
//Import Breadcrumb



// Custom Scrollbar
import SimpleBar from "simplebar-react";

// import images

import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";
import servicesIcon4 from "../../assets/images/services-icon/04.png";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import smimg1 from "../../assets/images/small/img-1.jpg";
import smimg2 from "../../assets/images/small/img-2.jpg";

// Charts
import LineAreaChart from "../AllCharts/apex/lineareachart";
import RadialChart from "../AllCharts/apex/apexdonut";
import Apexdonut from "../AllCharts/apex/apexdonut1";
import SparkLine from "../AllCharts/sparkline/sparkline";
import SparkLine1 from "../AllCharts/sparkline/sparkline1";
import Salesdonut from "../AllCharts/apex/salesdonut";

import "chartist/dist/scss/chartist.scss";

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  // const [menu, setMenu] = useState(false)
  // const toggle = () => {
  //   setMenu(!menu)
  // }

  const [singlebtn, setSinglebtn] = useState(false);
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Veltrix Dashboard</li>
                </ol>
              </Col>

              {/* <Col md="4">
                <div className="float-end d-none d-md-block">
                  <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle color="primary" className="btn btn-primary dropdown-toggle waves-effect waves-light">
                      <i className="mdi mdi-cog me-2"></i> Settings
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a" href="#">Action</DropdownItem>
                      <DropdownItem tag="a" href="#">Another action</DropdownItem>
                      <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col> */}
            </Row>
          </div>
          <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="vc">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon1} alt="" />
                    </div>
                    <h5 className="font-size-12 text-uppercase mt-0 text-white-50">
                    Orders Received
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    
                  </div>
                  
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="vc">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon2} alt="" />
                    </div>
                    <h5 className="font-size-12 text-uppercase mt-0 text-white-50">
                    Orders Delivered
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      52,368{" "}
                      <i className="mdi mdi-arrow-down text-danger ms-2"></i>
                    </h4>
                  
                  </div>
                  
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="vc">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon3} alt="" />
                    </div>
                    <h5 className="font-size-12 text-uppercase mt-0 text-white-50">
                    Todays Earnings
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      15.8{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                  
                  </div>
                  
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="vc">
                    <div className="float-start mini-stat-img me-4">
                      <img src={servicesIcon4} alt="" />
                    </div>
                    <h5 className="font-size-12 text-uppercase mt-0 text-white-50">
                    Monthly Earnings  
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      2436{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                   
                  </div>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>

         <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Monthly Earning</h4>
                  <Row>
                    <Col lg={7}>
                      <div>
                        <LineAreaChart />
                      </div>
                    </Col>
                    <Col lg={5}>
                      <Row>
                        <Col md={6}>
                          <div className="text-center">
                            <p className="text-muted mb-4">This month</p>
                            <h3>$34,252</h3>
                            <p className="text-muted mb-5">
                              It will be as simple as in fact it will be
                              occidental.
                            </p>
                            <RadialChart />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="text-center">
                            <p className="text-muted mb-4">Last month</p>
                            <h3>$36,253</h3>
                            <p className="text-muted mb-5">
                              It will be as simple as in fact it will be
                              occidental.
                            </p>
                            <Apexdonut />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
  {/*
            <Col xl={3}>
              <Card>
                <CardBody>
                  <div>
                    <h4 className="card-title mb-4">Sales Analytics</h4>
                  </div>
                  <div className="wid-peity mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Online</p>
                          <h5 className="mb-4">1,542</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="vc">
                          <SparkLine />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wid-peity mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Offline</p>
                          <h5 className="mb-4">6,451</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="vc">
                          <SparkLine1 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Marketing</p>
                          <h5>84,574</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
           */}</Row>

          {/* <Row>
            <Col xl={3}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Sales Report</h4>
                  <div className="cleafix">
                    <p className="float-start">
                      <i className="mdi mdi-calendar me-1 text-primary"></i> Jan
                      01 - Jan 31
                    </p>
                    <h5 className="font-18 text-end">$4230</h5>
                  </div>
                  <div id="ct-donut" className="ct-chart wid pt-4">
                    <Salesdonut />
                  </div>
                  <div className="mt-4">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <span className="badge bg-primary">Desk</span>
                          </td>
                          <td>Desktop</td>
                          <td className="text-end">54.5%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge bg-success">Mob</span>
                          </td>
                          <td>Mobile</td>
                          <td className="text-end">28.0%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge bg-warning">Tab</span>
                          </td>
                          <td>Tablets</td>
                          <td className="text-end">17.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Activity</h4>
                  <ol className="activity-feed">
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 22</span>
                        <span className="activity-text">
                          Responded to need “Volunteer Activities”
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 20</span>
                        <span className="activity-text">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui deleniti atque...
                          <Link to="#" className="text-success">
                            Read more
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 19</span>
                        <span className="activity-text">
                          Joined the group “Boardsmanship Forum”
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 17</span>
                        <span className="activity-text">
                          Responded to need “In-Kind Opportunity”
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Jan 16</span>
                        <span className="activity-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          rem.
                        </span>
                      </div>
                    </li>
                  </ol>
                  <div className="text-center">
                    <Link to="#" className="btn btn-primary">
                      Load More
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={5}>
              <Row>
                <Col md={6}>
                  <Card className="text-center">
                    <CardBody>
                      <div className="py-4">
                        <i className="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>

                        <h5 className="text-primary mt-4">Order Successful</h5>
                        <p className="text-muted">
                          Thanks you so much for your order.
                        </p>
                        <div className="mt-4">
                          <Link to="" className="btn btn-primary btn-sm">
                            Chack Status
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="bg-primary">
                    <CardBody>
                      <div className="text-center text-white py-4">
                        <h5 className="mt-0 mb-4 text-white-50 font-size-12">
                          Top Product Sale
                        </h5>
                        <h1>1452</h1>
                        <p className="font-size-14 pt-1">Computer</p>
                        <p className="text-white-50 mb-0">
                          At solmen va esser necessi far uniform myth...{" "}
                          <Link to="#" className="text-white">
                            View more
                          </Link>
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Card>
                    <CardBody>
                      <h4 className="card-title mb-4">Client Reviews</h4>
                      <p className="text-muted mb-3 pb-4">
                        " Everyone realizes why a new common language would be
                        desirable one could refuse to pay expensive translators
                        it would be necessary. "
                      </p>
                      <div className="float-end mt-2">
                        <Link to="#" className="text-primary">
                          <i className="mdi mdi-arrow-right h5"></i>
                        </Link>
                      </div>
                      <h6 className="mb-0">
                        {" "}
                        <img
                          src={user3}
                          alt=""
                          className="avatar-sm rounded-circle me-2"
                        />{" "}
                        James Athey
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row> */}
<Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Recent Orders</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                         
                          <th scope="col"> Orders</th>
                         
                          <th scope="col" >
                            Status
                          </th>

                          <th scope="col">
                          <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle className="btn btn-secondary" caret>
                        Show All{" "}
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                      
                          <td>
                            <div className="d-flex">
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs avatar-xs_custom me-2"
                              />{" "}
                              <div className="bot_v_oder_re">
                                <h4>#12345 - Food Item One to Mr. Customer Name</h4>
                                <span>Order Placed - 18: 34, 19 Jun 2020, Address with Door Number</span>
                              </div>
                            </div>
                          </td>
                          
                          <td>
                            <span className="btn btn-primary btn-sm">
                            Accept Order
                            </span>
                          </td>

                          <td>
                            <span className="btn btn-success btn-sm">
                            New Order
                            </span>
                          </td>
                          
                        </tr>



                        <tr>
                      
                          <td>
                            <div className="d-flex">
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs avatar-xs_custom me-2"
                              />{" "}
                              <div className="bot_v_oder_re">
                                <h4>#12345 - Food Item One to Mr. Customer Name</h4>
                                <span>Order Placed - 18: 34, 19 Jun 2020, Address with Door Number</span>
                              </div>
                            </div>
                          </td>
                          
                          <td>
                            <span className="btn  btn-sm">
                            Processed
                            </span>
                          </td>
                          <td>
                            <span className="btn btn-primary btn-sm">
                            Processed
                            </span>
                          </td>
                          
                          
                        </tr>


                        <tr>
                      
                          <td>
                            <div className="d-flex">
                              <img
                                src={user2}
                                alt=""
                                className="avatar-xs avatar-xs_custom me-2"
                              />{" "}
                              <div className="bot_v_oder_re">
                                <h4>#12345 - Food Item One to Mr. Customer Name</h4>
                                <span>Order Placed - 18: 34, 19 Jun 2020, Address with Door Number</span>
                              </div>
                            </div>
                          </td>
                          
                          <td>
                            <span className="btn  btn-sm">
                            Delivered
                            </span>
                          </td>
                          <td>
                            <span className="btn btn-warning btn-sm">
                            Delivered
                            </span>
                          </td>
                        </tr>


                        <tr>
                      
                      <td>
                        <div className="d-flex">
                          <img
                            src={user2}
                            alt=""
                            className="avatar-xs avatar-xs_custom me-2"
                          />{" "}
                          <div className="bot_v_oder_re">
                            <h4>#12345 - Food Item One to Mr. Customer Name</h4>
                            <span>Order Placed - 18: 34, 19 Jun 2020, Address with Door Number</span>
                          </div>
                        </div>
                      </td>
                      
                      <td>
                        <span className="btn  btn-sm">
                        Processed
                        </span>
                      </td>

                      <td>
                            <span className="btn btn-primary btn-sm">
                            Processed
                            </span>
                          </td>
                      
                    </tr>


                        
                        
                     
                        
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
           
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Recent Deliveries</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Order No.</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Address</th>
                          <th scope="col">Date</th>
                          <th scope="col" >
                            Status
                          </th>

                          <th scope="col" >
                          Order Type
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              
                            Customer Name A
                            </div>
                          </td>
                          <td>123, Road, Building, Village, City</td>
                          <td>10:25 - 18/04/2020</td>
                          <td>
                            <span className="  btn-success btn-sm">paid</span>
                          </td>
                          <td>
                          Subscription
                          </td>
                        </tr>


                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              
                            Customer Name A
                            </div>
                          </td>
                          <td>123, Road, Building, Village, City</td>
                          <td>10:25 - 18/04/2020</td>
                          <td>
                            <span className="  btn-warning btn-sm">Order Cancelled</span>
                          </td>
                          <td>
                          Regular Order
                          </td>
                        </tr>


                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              
                            Customer Name A
                            </div>
                          </td>
                          <td>123, Road, Building, Village, City</td>
                          <td>10:25 - 18/04/2020</td>
                          <td>
                            <span className="  btn-danger btn-sm">Payment Failed</span>
                          </td>
                          <td>
                          Regular Order
                          </td>
                        </tr>



                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              
                            Customer Name A
                            </div>
                          </td>
                          <td>123, Road, Building, Village, City</td>
                          <td>10:25 - 18/04/2020</td>
                          <td>
                            <span className="  btn-success btn-sm">paid</span>
                          </td>
                          <td>
                          Regular Order
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* <Col xl={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Chat</h4>
                  <div className="chat-conversation">
                    <SimpleBar style={{ height: "365px" }}>
                      <ul
                        className="conversation-list"
                        data-simplebar
                        style={{ maxHeight: "367px" }}
                      >
                        <li className="clearfix">
                          <div className="chat-avatar">
                            <img
                              src={user2}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:00</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">John Deo</span>
                              <p>Hello!</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="Female"
                            />
                            <span className="time">10:01</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">Smith</span>
                              <p>
                                Hi, How are you? What about our next meeting?
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <div className="chat-avatar">
                            <img
                              src={user2}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:04</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">John Deo</span>
                              <p>Yeah everything is fine</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:05</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name">Smith</span>
                              <p>Wow that's great</p>
                            </div>
                          </div>
                        </li>
                        <li className="clearfix odd">
                          <div className="chat-avatar">
                            <img
                              src={user3}
                              className="avatar-xs rounded-circle"
                              alt="male"
                            />
                            <span className="time">10:08</span>
                          </div>
                          <div className="conversation-text">
                            <div className="ctext-wrap">
                              <span className="user-name mb-2">Smith</span>

                              <img
                                src={smimg1}
                                alt=""
                                height="48"
                                className="rounded me-2"
                              />
                              <img
                                src={smimg2}
                                alt=""
                                height="48"
                                className="rounded"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </SimpleBar>

                    <Row className="mt-3 pt-1">
                      <Col md="9" className="chat-inputbar col-8">
                        <Input
                          type="text"
                          className="chat-input"
                          placeholder="Enter your text"
                        />
                      </Col>
                      <Col md="3" className="chat-send col-4">
                        <div className="d-grid">
                          <Button
                            type="submit"
                            color="success"
                            className="btn-block"
                          >
                            Send
                        </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Dashboard)
