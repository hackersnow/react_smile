
import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
import Switch from "react-switch"

import user2 from "../../assets/images/users/user-2.jpg";

import { Link } from "react-router-dom"


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

const OfferList = () => {


    const [switch1, setswitch1] = useState(true)
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs  title="Offers" breadcrumbItem="Offers List" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                    <div className=" sub_btn_box">
                    <CardTitle className="h4">Offers List</CardTitle>
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                    >

<Link to="/CreateOffers">  Add  Offers</Link>
            
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
                            <Th >Offer Title</Th>
                           

                            <Th>Validity</Th>
                            <Th >Created Time</Th>
                            <Th >Action</Th>

                         
                            
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             1
                            </Th>
                            <Td>Welcome Offer</Td>
                            <Td> 
                            20/10/2020 to 23/12/2020
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

export default OfferList
