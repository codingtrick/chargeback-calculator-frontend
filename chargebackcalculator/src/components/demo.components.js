import React from "react";
import { Link } from "react-router-dom";
import "./css/lavi.css";
const DemoComponents = () => {
  return (
    <>
      <div className="app-wrapper">
        <div className="about">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-12">
                <div className="Main">
                  <h2 className="d-flex justify-content-center">
                    Customer Details
                  </h2>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <table className="justify-content-center table table-striped align-middle">
                        <tbody>
                          <tr>
                            <td colSpan={2}>Customer Id</td>
                            <td colSpan={2}>7275101</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Customer Name</td>
                            <td colSpan={2}>Rahul Tewatia</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Account Balance</td>
                            <td colSpan={2}>XXX25</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Account Number</td>
                            <td colSpan={2}>727510222XXXX</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Address</td>
                            <td colSpan={2}>xyz,mumbai,222222</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Mobile</td>
                            <td colSpan={2}>9876543210</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*<div className="col-md-5 col-sm-5 col-lg-5">
             <div className="sidebar">
               Search Customer Id<br></br>
               <form><input type="text" placeholder='Type to search'></input></form>
               <div className='SideLinks'>
               <a href="./Custdet">Chareback Details</a><br></br>
               <a href="./Custdet">Generate Report</a>
               </div>
             </div>
  </div>*/}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <h1 className="font-weight-light">CustomerDetails</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-wrapper">
        <div className="contact">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-12">
                <div className="Main">
                  <h2 className="d-flex justify-content-center">
                    Report Generation
                  </h2>
                  <div className="row">
                    <div className="col-md-5 col-sm-5 col-lg-5">
                      <div className="sidebar">
                        <div className="SideLeft">
                          <a href="./Custdet">Number of Complaints</a>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-lg-7">
                      <div className="sideRight">
                        <table className="justify-content-center table table-striped align-middle">
                          <tbody>
                            <tr>
                              <td colSpan={2}>From Date</td>
                              <td colSpan={2}>
                                <input type="date"></input>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>To Date</td>
                              <td colSpan={2}>
                                <input type="date"></input>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>Total Complaints</td>
                              <td colSpan={2}></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 col-sm-5 col-lg-5">
                      <div className="sidebar">
                        <div className="SideLeft">
                          <a href="./Custdet">Status of Complaints</a>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <h1 className="font-weight-light">Home page</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-wrapper">
        <div className="contact">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-12">
                <div className="Main">
                  <h2 className="d-flex justify-content-center">
                    All Chargeback Details
                  </h2>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                      <table className="justify-content-center table table-striped align-middle">
                        <thead>
                          <tr>
                            <th colSpan={2}>Customer Id</th>
                            <th colSpan={2}>Chargeback Amount</th>
                            <th colSpan={2}>Date</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td colSpan={2}>7275101</td>
                            <td colSpan={2}>XXX25</td>
                            <td colSpan={2}>DD/MM/YYYY</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>7275101</td>
                            <td colSpan={2}>XX925</td>
                            <td colSpan={2}>DD/MM/YYYY</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>7275101</td>
                            <td colSpan={2}>XX40</td>
                            <td colSpan={2}>DD/MM/YYYY</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>7275101</td>
                            <td colSpan={2}>X33</td>
                            <td colSpan={2}>DD/MM/YYYY</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>7275101</td>
                            <td colSpan={2}>XXX95</td>
                            <td colSpan={2}>DD/MM/YYYY</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>7275101</td>
                            <td colSpan={2}>X595</td>
                            <td colSpan={2}>DD/MM/YYYY</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*<div className="col-md-5 col-sm-5 col-lg-5">
             <div className="sidebar">
               Search Customer Id<br></br>
               <form><input type="text" placeholder='Type to search'></input></form>
               <div className='SideLinks'>
               <a href="./Custdet">Chareback Details</a><br></br>
               <a href="./Custdet">Generate Report</a>
               </div>
             </div>
  </div>*/}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <h1 className="font-weight-light">ChargebackDetails</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app-wrapper">
        <div className="home">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-12">
                <div className="Main">
                  <h2 className="d-flex justify-content-center">
                    Chargeback Details
                  </h2>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-6">
                      <ul className="list-group justify-content-center">
                        <li className="list-group-item text-center d-inline-block">
                          Customer Name
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          Account Number
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          Chargeback Amount
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          Transaction Date
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          Reason
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                      <ul className="list-group justify-content-center">
                        <li className="list-group-item text-center d-inline-block">
                          Rahul Kangaal
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          7285858828001
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          ₹ 250
                        </li>
                        <li className="list-group-item text-center d-inline-block">
                          22/01/2022
                        </li>
                        <textarea></textarea>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <h1 className="font-weight-light">Chargebackreportdet page</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app-wrapper">
        <div className="home">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-12">
                <div className="Main">
                  <h2 className="d-flex justify-content-center">
                    Employee Dashboard
                  </h2>
                  <div className="row">
                    <div className="col-md-7 col-sm-7 col-lg-7">
                      <table className="table table-striped align-middle">
                        <thead>
                          <tr>
                            <th colSpan={2}>Customer Id</th>
                            <th colSpan={2}>Customer Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={2}>Customer 1</td>
                            <td colSpan={2}>ABC11</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Customer 2</td>
                            <td colSpan={2}>ABC12</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Customer 3</td>
                            <td colSpan={2}>ABC13</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>Customer 4</td>
                            <td colSpan={2}>ABC14</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-5 col-sm-5 col-lg-5">
                      <div className="sidebar">
                        Search Customer Id<br></br>
                        <form>
                          <input
                            type="text"
                            placeholder="Type to search"
                          ></input>
                        </form>
                        <div className="SideLinks">
                          <Link to="/chargebackreportdet">
                            Chargeback Details
                          </Link>
                          <br></br>
                          <Link to="/chargebackreportg">Generate Report</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <h1 className="font-weight-light">Home page</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoComponents;
