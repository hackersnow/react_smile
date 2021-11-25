
import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
import Switch from "react-switch"
import { Link } from "react-router-dom"
import user2 from "../../assets/images/users/user-2.jpg";


const Offsymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2
        }}
      >
        {" "}
        No
      </div>
    )
  }
  
  const OnSymbol = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 12,
          color: "#fff",
          paddingRight: 2
        }}
      >
        {" "}
        Yes
      </div>
    )
  }

const NotificationHistory = () => {


    const [switch1, setswitch1] = useState(true)
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs  title="Promotions" breadcrumbItem="Notification History" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                    <div className=" sub_btn_box">
                    <CardTitle className="h4">Notification History </CardTitle>
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >
                      <Link to="/SendNotification">  Send Notification</Link>
               
                    </Button>{" "}
                    </div>
                
                 

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th>S.No</Th>
                            <Th >Notification</Th>
                           

                            <Th>Image</Th>
                            <Th >Sent Time</Th>
                            <Th >Action</Th>

                         
                            
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             1
                            </Th>
                            <Td>Notification Text</Td>
                            <Td> 
                                <div className="imag_u_pro">
                                <img src={user2} alt="" />
                                </div>
                            </Td>
                            <Td>
                            12:40PM on 23/12/2020
                            </Td>
                            <Td>
                            <Button className="btn_self" >
                             Edit 
                            </Button>{" "}|
                            <Button className="btn_self" >
                             Delete 
                            </Button>{" "}</Td>
                            
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                         
                          
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NotificationHistory
