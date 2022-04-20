
import React, { useState} from 'react';

import './App.css';
import { FaBars, FaDollarSign } from "react-icons/fa"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
import { Link } from 'react-router-dom';


const Main = () => {
 
  const [msg, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [contMenu, setcontMenu] = useState(false)
  const date = new Date()


  const sendMsg = () => {
    setEmail("");
    setMessage("")
  }
  return (
    <div className='home_landing'>
      {contMenu && (
        <div className='menu_'>
          <a className='menu_link' href="https://t.me/martin_jeff" rel='noreferrer' target="_blank">Telegram</a>
          <a className='menu_link' href="https://www.instagram.com/ivan.prohacks" rel='noreferrer' target="_blank">Instagram</a>
          <button className='menu_link' onClick={()=>setcontMenu(!contMenu)}>Cancel</button>
        </div>
      )}
      <div className="iner_home_div">
        <div className="header_">
          <div className="header_brand">HACKMAN</div>
        </div>

        <div className='total-cont'>
        <div className="top_sec">
          <br/>
          <div className="top_content">
            lets help you hack
          </div>
          <div className='top_cont_big'>
            fast service and easy custommer reach out
          </div>

          <button onClick={()=>setcontMenu(!contMenu)} to="/contact" className='CONTACT_btn'>CONTACT US</button>

          <img src='hack.jpg' alt="" className='simp_img'/>
        </div>

        <div className="top_sec1">
          <br />
          <br/>
          <div className="top_content1">
           our services
          </div>
          
          <p className='top_content1_text'>
            We help our clients with 
            account recovery from the following list:
            <br />
            
            <div className='list_service'>
              <div className='list_item'>
                <div className='list_item_top'>Facebook</div>
                <div className='list_item_text'>Facebook recovery</div>
                <div className='list_item_text'><FaDollarSign/>50</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/fb`} className="enter_hack">Hack</button>
              </div>
              <div className='list_item_black'>
                <div className='list_item_top'>twitter</div>
                <div className='list_item_text'>Twitter recovery and account verification</div>
                <div className='list_item_text'><FaDollarSign/>75</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/twt`} className="enter_hack_w">Hack</button>
              </div>
              <div className='list_item'>
                <div className='list_item_top'>instagram</div>
                <div className='list_item_text'>Instagram recovery and account verification</div>
                <div className='list_item_text'><FaDollarSign/>75</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/inst`} className="enter_hack">Hack</button>
              </div>
              <div className='list_item_black'>
                <div className='list_item_top'>whatsapp</div>
                <div className='list_item_text'>Whatsapp recovery</div>
                <div className='list_item_text'><FaDollarSign/>75</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/what`} className="enter_hack_w">Hack</button>
              </div>
              <div className='list_item'>
                <div className='list_item_top'>Paypal</div>
                <div className='list_item_text'>Paypal recovery</div>
                <div className='list_item_text'><FaDollarSign/>50</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/pyp`} className="enter_hack">Hack</button>
              </div>
              <div className='list_item_black'>
                <div className='list_item_top'>gmail</div>
                <div className='list_item_text'>Gmail recovery</div>
                <div className='list_item_text'><FaDollarSign/>50</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/gmail`} className="enter_hack_w">Hack</button>
              </div>

              <div className='list_item'>
                <div className='list_item_top'>Hangout</div>
                <div className='list_item_text'>Hangout recovery</div>
                <div className='list_item_text'><FaDollarSign/>50</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/hangout`} className="enter_hack">Hack</button>
              </div>
              <div className='list_item_black'>
                <div className='list_item_top'>snapchat</div>
                <div className='list_item_text'>Snapchat recovery</div>
                <div className='list_item_text'><FaDollarSign/>45</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/snapchat`} className="enter_hack_w">Hack</button>
              </div>
              <div className='list_item'>
                <div className='list_item_top'>Cashapp</div>
                <div className='list_item_text'>cashapp recovery</div>
                <div className='list_item_text'><FaDollarSign/>100</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/cashapp`} className="enter_hack">Contact</button>
              </div>

              <div className='list_item_black'>
                <div className='list_item_top'>crypto wallet</div>
                <div className='list_item_text'>crypto wallet recovery</div>
                <div className='list_item_text'><FaDollarSign/>150</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/cryptoapp`} className="enter_hack_w">Contact</button>
              </div>
              <div className='list_item'>
                <div className='list_item_top'>Fiverr</div>
                <div className='list_item_text'>Fiverr account setup</div>
                <div className='list_item_text'><FaDollarSign/>50</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/fiverr`} className="enter_hack">Contact</button>
              </div>
              <div className='list_item_black'>
                <div className='list_item_top'>Macbook unlock</div>
                <div className='list_item_text'>Macbook unlock and recovery</div>
                <div className='list_item_text'><FaDollarSign/>100</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/fiverr`} className="enter_hack_w">Contact</button>
              </div>
              <div className='list_item'>
                <div className='list_item_top'>I-cloud unlock</div>
                <div className='list_item_text'>I-cloud unlock and recovery</div>
                <div className='list_item_text'><FaDollarSign/>100</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/fiverr`} className="enter_hack">Contact</button>
              </div>
              <div className='list_item_black'>
                <div className='list_item_top'>Device tracking</div>
                <div className='list_item_text'>Device tracking and spying</div>
                <div className='list_item_text'><FaDollarSign/>300</div>
                <button onClick={()=>setcontMenu(!contMenu)} to={`/media/fiverr`} className="enter_hack_w">Contact</button>
              </div>
              <br />
              <br/>
            </div>
            </p>
         
          
        </div>

        <div className="top_sec">
          <br/>
          <div className="top_content">
            LEARN HACKING
          </div>
          <div className='top_cont_big'>
            GET PROFESSIONAL TOOLS FOR HACKING.
          </div>

          <a href="https://somewere.com" rel='noreferrer' target="_blank" className='CONTACT_btn'>GET TOOLS</a>

          <img src='hack22.png' alt="" className='simp_img'/>
        </div>
        </div>

      </div>
     { /*<div className='footer'>
        <div className='enter-mail'>Contact</div>

        <input onChange={(e)=>setEmail(e.target.value)} placeholder="whatsapp number"  className='enter-message' value={email} type="text"/>
        <textarea  onChange={(e)=>setMessage(e.target.value)}  placeholder="Message" className='enter-message-text' value={msg} type="text" />
        <button onClick={sendMsg} className='send_btn'>SEND</button>
      </div>*/}

      <div className='footer-last '>

        <div className='footer-text'>
          <div>Copyright </div> &nbsp;<AiOutlineCopyrightCircle color='white' />&nbsp;<div>{date.getFullYear()} </div> <div> &nbsp; Hackman</div>
        </div>

      </div>
    </div>

  );
};


export default Main