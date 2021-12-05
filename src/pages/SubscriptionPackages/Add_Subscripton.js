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


// Add list 1
  const [sub_add, sub_addfun] = useState([])
 
 
  function cred_sub() {
    const item1 = { name1: "" }
    sub_addfun([...sub_add, item1])
  }

  

  const deleteSub =(ids)=> {
    const updateditem = sub_add.filter((elem, ind) => {
      return ind !== ids
    })
    sub_addfun(updateditem)
  }


  // Add list 2
  const [sub_add2, sub_addfun2] = useState([])
 
 
  function cred_sub2() {
    const item1 = { name1: "" }
    sub_addfun2([...sub_add2, item1])
  }

  

  const deleteSub2 =(ids)=> {
    const updateditem = sub_add2.filter((elem, ind) => {
      return ind !== ids
    })
    sub_addfun2(updateditem)
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
                       
                         <div className="ev_flex">
                         <label>Total No. of Orders Per Day</label>
                          <span
                            class=" plus_ser_addxd"
                            onClick={cred_sub2}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>
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
                           {sub_add2.map((item2, idx) => (
                        

                        <div className="boxv_add_input input_resaurant_box mb-3  mt-3" id={"nested" + idx}
                            key={idx}>
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
                          <div className="btn_vx_vxd">
                              <i
                                className="fas fa-times"
                                onClick={() => deleteSub2(idx)}
                              ></i>
                          </div>
                        </div>
                          
                            
                         
                        ))}


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
                        <div className="ev_flex">
                        <label>Meal Package Subscription Variants</label>
                          <span
                            class=" plus_ser_addxd"
                            onClick={cred_sub}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>


                          <div className="boxv_add_input mb-3">
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


                          {sub_add.map((item2, idx) => (
                        

                        <div className="boxv_add_input input_resaurant_box mb-3" id={"nested" + idx}
                            key={idx}>
                           <Input
                            type="text"
                          
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder="Duration in Days"
                          />
                          <Input
                            type="text"
                           
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder="Price"
                          />

                          <div className="btn_vx_vxd">
                              <i
                                className="fas fa-times"
                                onClick={() => deleteSub(idx)}
                              ></i>
                          </div>
                        </div>
                          
                            
                         
                        ))}




                        </div>
                        <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                      <Button
                        type="submit"
                       
                        className="btn_custom_from_add"
                      >
                       Add Subscription
                          </Button>{" "}
                      <Button type="reset"  className="btn_custom_from_yellow">
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
