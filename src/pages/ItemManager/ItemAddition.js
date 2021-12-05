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
import Select from "react-select"
import Dropzone from "react-dropzone"
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ItemAddition = () => {
  const [customchk, setcustomchk] = useState(true)
  const [customchkPrimary, setcustomchkPrimary] = useState(true)
  const [customchkSuccess, setcustomchkSuccess] = useState(true)
  const [customchkInfo, setcustomchkInfo] = useState(true)
  const [customchkWarning, setcustomchkWarning] = useState(true)
  const [customchkDanger, setcustomchkDanger] = useState(true)
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true)
  const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true)
  const [customOutlineInfo, setcustomOutlineInfo] = useState(true)
  const [customOutlineWarning, setcustomOutlineWarning] = useState(true)
  const [customOutlineDanger, setcustomOutlineDanger] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

  const [selectedFiles, setselectedFiles] = useState([])

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
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

  const [selectedGroup, setselectedGroup] = useState(null)

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  const [rows1, setrows1] = useState([])
  const [rows2, setrows2] = useState([])

  function handleAddRowNested() {
    const item1 = { name1: "" }
    setrows1([...rows1, item1])
  }

  function handleAddRowNested2() {
    const item2 = { name1: "" }
    setrows2([...rows2, item2])
  }

  const deletehandle = id => {
    const updateditem = rows1.filter((elem, ind) => {
      return ind !== id
    })
    setrows1(updateditem)
  }

  const deletehandle2 = id => {
    const updateditem = rows2.filter((elem, ind) => {
      return ind !== id
    })
    setrows2(updateditem)
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
          <Breadcrumbs title="Item Manager" breadcrumbItem="Item Addition" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-4">Item Addition</CardTitle>
                  <Row>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>Item Name</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Item Name"
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
                      </div> */}
                      <div className="restaurant_form">
                        <Label>Item Description </Label>

                        <Input
                          type="textarea"
                          id="formmessage"
                          className="form-control"
                          rows="2"
                          placeholder="Item Description"
                        />
                      </div>
                      {/* item 1*/}
                      <div className="input_box_sub input_box_subxp">
                        <label>Category</label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup()
                          }}
                          options={optionGroup}
                          classNamePrefix="select2-selection "
                        />
                      </div>

                      {/* item 2*/}

                      <div className="input_box_sub input_box_subxp">
                        <label>Cuisine</label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup()
                          }}
                          options={optionGroup}
                          classNamePrefix="select2-selection "
                        />
                      </div>
                      {/* item 3*/}

                      <div className="input_box_sub input_box_subxp">
                        <label>Product Order</label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup()
                          }}
                          options={optionGroup}
                          classNamePrefix="select2-selection "
                        />
                      </div>

                      {/* <div className="restaurant_form">
                        <label>Location</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Latitude, Longitude"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <label>Status</label>
                        <div className="input_resaurant_box">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Active, Stopped, Banned"
                          />
                        </div>
                      </div> */}

                      <div className="restaurant_form mt-3">
                        <label>Product Image</label>
                        <Form>
                          <Dropzone
                            onDrop={acceptedFiles => {
                              handleAcceptedFiles(acceptedFiles)
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div className="dropzone ">
                                <div
                                  className="dz-message needsclick"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  <div className="mb-3">
                                    <i className="mdi mdi-cloud-upload display-4 text-muted"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            )}
                          </Dropzone>
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          >
                            {selectedFiles.map((f, i) => {
                              return (
                                <Card
                                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                  key={i + "-file"}
                                >
                                  <div className="p-2">
                                    <Row className="align-items-center">
                                      <Col className="col-auto">
                                        <img
                                          data-dz-thumbnail=""
                                          height="80"
                                          className="avatar-sm rounded bg-light"
                                          alt={f.name}
                                          src={f.preview}
                                        />
                                      </Col>
                                      <Col>
                                        <Link
                                          to="#"
                                          className="text-muted font-weight-bold"
                                        >
                                          {f.name}
                                        </Link>
                                        <p className="mb-0">
                                          <strong>{f.formattedSize}</strong>
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card>
                              )
                            })}
                          </div>
                        </Form>

                        <div className="vd_chek vd_box_inP">
                          <span>Feature this Product</span>
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id="invalidCheck"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form mt-3">
                        <label>Featured Product</label>
                        <Form>
                          <Dropzone
                            onDrop={acceptedFiles => {
                              handleAcceptedFiles(acceptedFiles)
                            }}
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div className="dropzone ">
                                <div
                                  className="dz-message needsclick"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  <div className="mb-3">
                                    <i className="mdi mdi-cloud-upload display-4 text-muted"></i>
                                  </div>
                                  <h4>Drop files here or click to upload.</h4>
                                </div>
                              </div>
                            )}
                          </Dropzone>

                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          >
                            {selectedFiles.map((f, i) => {
                              return (
                                <Card
                                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                  key={i + "-file"}
                                >
                                  <div className="p-2">
                                    <Row className="align-items-center">
                                      <Col className="col-auto">
                                        <img
                                          data-dz-thumbnail=""
                                          height="80"
                                          className="avatar-sm rounded bg-light"
                                          alt={f.name}
                                          src={f.preview}
                                        />
                                      </Col>
                                      <Col>
                                        <Link
                                          to="#"
                                          className="text-muted font-weight-bold"
                                        >
                                          {f.name}
                                        </Link>
                                        <p className="mb-0">
                                          <strong>{f.formattedSize}</strong>
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card>
                              )
                            })}
                          </div>
                        </Form>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="restaurant_form">
                        <label>Item Price</label>
                        <div className="input_resaurant_box input_resaurant_box_item">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Price of Item"
                            id="example-number-input"
                          />
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Price of Add-on"
                            id="example-number-input"
                          />
                        </div>
                      </div>

                      <div className="restaurant_form">
                        <div className="ev_flex">
                          <label>Variant List</label>
                          <span
                            class=" plus_ser_addxd"
                            onClick={handleAddRowNested}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>

                        <div className="input_resaurant_box input_box_item_adit">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Item Name"
                          />
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Price of Variant"
                            id="example-number-input"
                          />
                        </div>
                        {rows1.map((item1, idx) => (
                          <div
                            className="input_resaurant_box input_box_item_adit"
                            id={"nested" + idx}
                            key={idx}
                          >
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Item Name"
                            />
                            <input
                              className="form-control"
                              type="number"
                              placeholder="Price of Variant"
                              id="example-number-input"
                            />
                            <div className="btn_vx_vxd">
                              <i
                                className="fas fa-times"
                                onClick={() => deletehandle(idx)}
                              ></i>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="restaurant_form ">
                        <label>Show Nutritional Info of this Item</label>
                        <div className="boxvd_check">
                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Protein</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>

                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Sugars</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>

                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Fiber</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>

                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Fat</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>

                          <div className="che_boxd">
                            <div className="vd_chek vd_box_inP">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="invalidCheck"
                              />
                              <span>Calories</span>
                            </div>

                            <span class="vte_v">In gms</span>
                          </div>
                        </div>
                      </div>

                      <div className="restaurant_form ">
                        <Label>Ingredients </Label>
                        <Input
                          type="textarea"
                          id="formmessage"
                          className="form-control"
                          rows="4"
                          placeholder="Separate the Ingredients with Comma"
                        />
                      </div>

                      <div className="restaurant_form">
                        <div className="ev_flex">
                          <label>Featured Products</label>
                          <span
                            class=" plus_ser_addxd"
                            onClick={handleAddRowNested2}
                          >
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>
                        <div className="input_resaurant_box input_box_item_adit">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Item Name"
                          />
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Price of Add-on"
                            id="example-number-input"
                          />
                        </div>

                        {rows2.map((item2, idx) => (
                          <div
                            className="input_resaurant_box input_box_item_adit"
                            id={"nested" + idx}
                            key={idx}
                          >
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Item Name"
                            />
                            <input
                              className="form-control"
                              type="number"
                              placeholder="Price of Add-on"
                              id="example-number-input"
                            />
                            <div className="btn_vx_vxd">
                              <i
                                className="fas fa-times"
                                onClick={() => deletehandle2(idx)}
                              ></i>
                            </div>
                          </div>
                        ))}

                       
                      </div>

                      <div className="restaurant_form">
                        <label>Discount </label>
                        <div className="input_resaurant_box ">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Percentage of Discount"
                            id="example-number-input"
                          />
                        </div>
                      </div>

                      <div className="input_box_sub input_box_subxp">
                        <label>Item Kind</label>
                        <Select
                          value={selectedGroup}
                          onChange={() => {
                            handleSelectGroup()
                          }}
                          options={optionGroup}
                          classNamePrefix="select2-selection "
                        />
                      </div>

                      <div className="d-flex flex-wrap gap-2 input_box_sub mt-4">
                        <Button type="submit" className="btn_custom_from_add">
                          Create New Item
                        </Button>{" "}
                        <Button type="reset" className="btn_custom_from_yellow">
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

export default ItemAddition
