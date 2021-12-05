
import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
import { Link } from "react-router-dom"

const CategoryList = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs  title="Categories Manager" breadcrumbItem="Categories List" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                    <div className=" sub_btn_box">
                    <CardTitle className="h4">Categories List</CardTitle>
                    <Button
                      
                      className="btn_custom_from_x"
                    >
                        <Link to="/CategoryAddition">Add Category </Link>
                    
                    
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
                            <Th data-priority="1">Name</Th>
                            <Th data-priority="3">Action</Th>
                            
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                             1
                            </Th>
                            <Td>Category Name</Td>
                            <Td>
                            <Button className="btn_self" >
                             Edit 
                            </Button>{" "} |  <Button className="btn_self" >
                            Delete 
                            </Button>{" "}</Td>
                            
                          </Tr>


                          <Tr>
                            <Th>
                             2
                            </Th>
                            <Td>Category Name</Td>
                            <Td>
                            <Button className="btn_self" >
                             Edit 
                            </Button>{" "} |  <Button className="btn_self" >
                            Delete 
                            </Button>{" "}</Td>
                            
                          </Tr>

                          <Tr>
                            <Th>
                             3
                            </Th>
                            <Td>Category Name</Td>
                            <Td>
                            <Button className="btn_self" >
                             Edit 
                            </Button>{" "} |  <Button className="btn_self" >
                            Delete 
                            </Button>{" "}</Td>
                            
                          </Tr>


                          <Tr>
                            <Th>
                             4
                            </Th>
                            <Td>Category Name</Td>
                            <Td>
                            <Button className="btn_self" >
                             Edit 
                            </Button>{" "} |  <Button className="btn_self" >
                            Delete 
                            </Button>{" "}</Td>
                            
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

export default CategoryList
