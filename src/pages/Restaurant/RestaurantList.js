
import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
import { Link } from "react-router-dom"

const RestaurantList = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs  title="Restaurant" breadcrumbItem="Restaurant List" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                    <div className=" sub_btn_box">
                    <CardTitle className="h4">Restaurant List </CardTitle>
                    <Button
                      color="success"
                      className="btn_custom_from_x  "
                    >
                       <Link to="/RestaurantAddition"> Restaurant Addition</Link>
                    
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
                            <Th >Res. Na</Th>
                           

                            <Th>Email Address</Th>
                            <Th >Logo</Th>
                            <Th >Address</Th>

                            <Th>Contact Details</Th>
                            <Th >Rating</Th>
                            <Th >Action</Th>
                            
                            
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             1
                            </Th>
                            <Td>Thaamboolam</Td>
                            <Td> restaurant@gmail.com</Td>

                            <Td></Td>

                            <Td>Address of Res</Td>

                            <Td>9536533653</Td>
                            <Td>45*</Td>
                            <Td>
                            <Button className="btn_self" >
                             Edit 
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

export default RestaurantList
