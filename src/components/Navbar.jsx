import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  if (props.user === "customer") {
    return (
      <header className="header">
        <nav className="nav container">
          <div className={"nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  <i class="fa fa-user"></i>Customer
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/addReq" className="nav__link">
                  <i class="fa fa-plus"></i>Add a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/seeReq" className="nav__link">
                  <i class="fa fa-search"></i>See Requirements
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else if (props.user === "engineer") {
    console.log(props.user);
    return (
      <header className="header">
        <nav className="nav container">
          <div className={"nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  <i class="fa fa-user"></i>Requirement Engineer
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/addReq" className="nav__link">
                  <i class="fa fa-plus"></i>Add a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/refineReq" className="nav__link">
                  <i class="fa fa-pencil-square-o"></i>Refine a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/seeReq" className="nav__link">
                  <i class="fa fa-search"></i>See Requirements
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else if (props.user === "analyst") {
    return (
      <header className="header">
        <nav className="nav--container">
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  <i class="fa fa-user"></i>Requirement Analyst
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/addReq" className="nav__link">
                  <i class="fa fa-plus"></i>Add a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/validateReq" className="nav__link">
                  <i class="fa fa-cogs"></i>Validate a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/verifyReq" className="nav__link">
                  <i class="fa fa-check-square-o"></i>Verify a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/seeReq" className="nav__link">
                  <i class="fa fa-search"></i>See Requirements
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else if (props.user === "manager") {
    return (
      <header className="header">
        <nav className="nav container">
          <div className={"nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  <i class="fa fa-user"></i>Manager
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/addReqEngineer" className="nav__link">
                  <i class="fa fa-plus"></i>Add a Requirement Engineer
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/addReqAnalyst" className="nav__link">
                  <i class="fa fa-plus"></i>Add a Requirement Analyst
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/removeReq" className="nav__link">
                  <i class="fa fa-trash"></i>Remove a Requirement
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/seeReq" className="nav__link">
                  <i class="fa fa-search"></i>See Requirements
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return <></>;
  }
}
