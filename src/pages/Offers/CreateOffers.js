import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Card,
  CardBody,
  Col,
  Row,
  Form,
  CardTitle,
  Button,
  Container,
  Label,
  Input,
} from "reactstrap"
import Dropzone from "react-dropzone"
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Select from "react-select"

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

 

const AddDeliveryPerson = () => {
//   const [customchk, setcustomchk] = useState(true)
//   const [customchkPrimary, setcustomchkPrimary] = useState(true)
//   const [customchkSuccess, setcustomchkSuccess] = useState(true)
//   const [customchkInfo, setcustomchkInfo] = useState(true)
//   const [customchkWarning, setcustomchkWarning] = useState(true)
//   const [customchkDanger, setcustomchkDanger] = useState(true)
//   const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true)
//   const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true)
//   const [customOutlineInfo, setcustomOutlineInfo] = useState(true)
//   const [customOutlineWarning, setcustomOutlineWarning] = useState(true)
//   const [customOutlineDanger, setcustomOutlineDanger] = useState(true)
//   const [toggleSwitch, settoggleSwitch] = useState(true)
//   const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

//   const [selectedFiles, setselectedFiles] = useState([])

//   function handleAcceptedFiles(files) {
//     files.map(file =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//         formattedSize: formatBytes(file.size),
//       })
//     )
//     setselectedFiles(files)
//   }

  /**
   * Formats the size
   */
  

  const [selectedGroup, setselectedGroup] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Form Elements | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title=" Offers" breadcrumbItem="Add Offers" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4"> Add Offers</CardTitle>
                  <Row>
                    <Col md={8}>

                    <div className=" input_box_subxp mb-3">
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
                      <div className="restaurant_form">
                        <label>Offer Title</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Offer Title"
                          />
                        </div>
                      </div>

                      {/* <div className="restaurant_form">
                        <label>Email Address</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                   */}

                      <div className="restaurant_form">
                        <Label>Offer Description</Label>
                        <Input
                          type="textarea"
                          id="formmessage"
                          className="form-control"
                          rows="3"
                          placeholder="Offer Description"
                        />
                      </div>

                      <div className="input_box_sub">
                      <label>Validity</label>
                        <div className="text_fl">
                      
                          <div className="restaurant_form2p ">
                            <span>Valid From</span>
                            <input type="date" placeholder="dd M,yyyy" />
                          </div>

                          <div className="restaurant_form2p ">
                            <span>Valid Until</span>
                            <input type="date" placeholder="dd M,yyyy" />
                          </div>
                        </div>
                      </div>

                      <div className="input_box_sub">
                        <label>Offer Code</label>
                        <div className="boxv_add_input">
                          <Input
                            type="text"
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder="Offer Code"
                          />
                          <Input
                            type="text"
                            name="text"
                            id="placement"
                            className="vc_input"
                            placeholder="%"
                          />
                        </div>
                      </div>
                      

                     
                       
                      <div className="boxv_add_input22 d-flex">
                        <div className="input_box_sub input_boxxp">
                        <label>Minimum Purchase Value</label>
                          <Input
                            type="Number"
                            name="placement"
                            id="placement"
                            className="vc_input"
                            placeholder=" Rs. 300/-"
                          />
                          </div>
                          <div className="input_box_sub input_boxxp">
                          <label>Maximum Discount</label>
                          <Input
                            type="text"
                            name="text"
                            id="placement"
                            className="vc_input"
                            placeholder=" Rs. 100/-"
                          />
                        </div>
                      </div>


                      <div className="restaurant_form mt-3">
                        <label>Offer Valid for All Orders </label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Mutton Biryani"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                        <Button type="submit" color="primary" className="">
                        Create Offer
                        </Button>{" "}
                        <Button type="reset" color="secondary" className="">
                          Cancel
                        </Button>
                      </div>
                    </Col>
                    
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AddDeliveryPerson
