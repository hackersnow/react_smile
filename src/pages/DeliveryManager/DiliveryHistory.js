import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
  InputGroup,

} from "reactstrap"
import Select from "react-select"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../assets/scss/custom/pages/_all_pages.scss"
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"
import { Link } from "react-router-dom"


const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" },
      ],
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" },
      ],
    },
  ]

 

const DiliveryHistory = () => {


    const [selectedGroup, setselectedGroup] = useState(null)

    function handleSelectGroup(selectedGroup) {
      setselectedGroup(selectedGroup)
    }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Responsive Tables | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            title="Delivery Manager"
            breadcrumbItem="Dilivery History"
          />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div className=" sub_btn_box">
                    <CardTitle className="h4">Shift Details </CardTitle>
                    <Button
                      className="btn_custom_from_x"
                    >
                     <Link to="/AddDeliveryPerson"> Add Delivery Person</Link>
                    </Button>{" "}
                  </div>
                  <div className="row ">
                      <div className="col-md-5 mb-4">
                      <div className=" input_box_subxp">
                        <label>Delivery Person Name</label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup()
                          }}
                          options={optionGroup}
                          classNamePrefix="select2-selection "
                        />
                      </div>
                      </div>
                      <div className="col-md-3 dve_auto mb-4" >
                      <div className="restaurant_form restaurant_form4dd">
                      <label>Choose Orders made on</label>
                      <input
                          type="date"
                          placeholder="dd M,yyyy"
                        />
                      
                    </div>
                      </div>
                  </div>
                  <div className="top_id">
                      <h4>Total Orders Delivered : 15</h4>
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
                            <Th>Time</Th>

                            <Th>Customer Name</Th>
                            <Th>Restaurant </Th>
                            <Th>Address</Th>

                            <Th>Cost </Th>
                            <Th>Status </Th>
                            <Th>Rating</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>1</Th>
                            <Td>02:00PM </Td>
                            <Td> Customer Name</Td>

                            <Td>Thaamboolam      </Td>
                           <Td>Address of Res. </Td>

                            <Td>999    </Td>

                            <Td>Order Delivered</Td>
                            <Td>4.5*</Td>
                           
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

export default DiliveryHistory
