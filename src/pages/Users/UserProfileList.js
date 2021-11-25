
import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
import user2 from "../../assets/images/users/user-2.jpg";
import { Link } from "react-router-dom"

const UserProfileList = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs  title="Users" breadcrumbItem="User Profile List" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                    <div className=" sub_btn_box">
                    <CardTitle className="h4">User Profile List</CardTitle>
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >

<Link to="/AddUserProfile"> Add User Profile</Link>
                   
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
                            <Th>Sl. No</Th>
                            <Th >Name</Th>
                           

                            <Th>Email </Th>
                            <Th >Phone</Th>
                            <Th >Photo</Th>

                            <Th>Accout Creation</Th>
                           
                            <Th >Action</Th>
                            
                            
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             1
                            </Th>
                            <Td>Customer Name </Td>
                            <Td>Exam@gmail.com	</Td>

                            <Td>+91 9876543210</Td>

                            

                            <Td><div className="imag_u_pro">
                                <img src={user2} alt="" />
                                </div></Td>
                            <Td>10/10/2020</Td>
                          
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
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                          </Tr>

                          <Tr>
                            <Th></Th>                         
                            <Td></Td>
                            <Td> </Td>
                            <Td></Td>
                            <Td></Td>
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

export default UserProfileList
