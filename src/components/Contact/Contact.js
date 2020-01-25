import React from 'react';
import {NavLink} from 'react-router-dom';
import './Contact.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPencilAlt, faPhoneAlt, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="avatar">
        <img src={props.avatar} alt=""/>
      </div>
      <div className="contact-info">
        <p className='nameContact'><span>{props.username}</span></p>
        <p className='phoneContact'><FontAwesomeIcon className='font-awesome' icon={faPhoneAlt}/>
          <span>{props.phone}</span></p>
        <p className='emailContact'><FontAwesomeIcon className='font-awesome' icon={faEnvelope}/>
          <span>{props.email}</span></p>
      </div>
      <div className='modalBtn'>
        <NavLink className="btn" to="/edit_contact" exact>
          <FontAwesomeIcon className='font-awesome' icon={faPencilAlt}/>
          Edit</NavLink>
        <button className="btn" onClick={props.delete}>
          <FontAwesomeIcon className='font-awesome' icon={faTrashAlt}/>
          Delete
        </button>
      </div>
    </div>
  )
};

export default Contact;