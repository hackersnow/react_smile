import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap"

import { SketchPicker } from "react-color"
import ColorPicker from "@vtaits/react-color-picker"
import "@vtaits/react-color-picker/dist/index.css"
import "react-datepicker/dist/react-datepicker.css"
import Switch from "react-switch"
import Select from "react-select"
import makeAnimated from "react-select/animated"
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom"

const animatedComponents = makeAnimated()

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
        paddingRight: 2,
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
        paddingRight: 2,
      }}
    >
      {" "}
      Yes
    </div>
  )
}

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

const optionGroup1 = [
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

const optionGroup2 = [
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

const Add_Subscripton = () => {
 

    //** Datepicker Method */
   
    

    
    const [placementbadge, setplacementbadge] = useState(false)
    
    const [placementcount, setplacementcount] = useState(0)
    
    
    const max_len = 25

  const [selectedGroup, setselectedGroup] = useState(null)
  


  function placementchange(event) {
    const count = event.target.value.length
    if (count > 0) {
      setplacementbadge(true)
    } else {
      setplacementbadge(false)
    }
    setplacementcount(event.target.value.length)
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Advanced | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
          
            title="SubscriptionPackages"
            breadcrumbItem="Add_Subscripton"
          />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">
                    Add New Subscription Meal Package
                  </h4>

                  <form>
                    <Row>
                      <Col lg="8">

                      <div className="input_box_sub">
                      <label>Subscription Meal Package Name</label>
                          <Input
                            type="text"
                            onChange={e => {
                              placementchange(e)
                            }}
                            name="placement"
                            id="placement"
                            placeholder="Add Meal Package Name"
                          />
                        </div>


                        <div className="input_box_sub input_box_subxp" >
                          <label>Add Items List</label>
                          <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup()
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection "
                           
                          />
                        </div>

                        <div className="input_box_sub">
                         <label>Total No. of Orders Per Day</label>
                          <Input
                            type="text"
                            onChange={e => {
                              placementchange(e)
                            }}
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder="Breakfast/Lunch/Dinner"
                          />
                        </div>

                        <div className="input_box_sub input_box_subxp">
                          <label>Total No. of Orders in the Package</label>
                          <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup()
                            }}
                            options={optionGroup}
                            classNamePrefix="select2-selection"
                          />
                        </div>

                        <div className="input_box_sub">
                        <label>Meal Package Subscription Variants</label>
                          <div className="boxv_add_input">
                          <Input
                            type="text"
                            onChange={e => {
                              placementchange(e)
                            }}
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder="Duration in Days"
                          />
                          <Input
                            type="text"
                            onChange={e => {
                              placementchange(e)
                            }}
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder="Price"
                          />
                          </div>
                        </div>
                        <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                      <Button
                        type="submit"
                        color="primary"
                        className=""
                      >
                       Add Subscription
                          </Button>{" "}
                      <Button type="reset" color="secondary" className="">
                        Cancel
                          </Button>
                    </div>
                        
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>

         
         
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Add_Subscripton
