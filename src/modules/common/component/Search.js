import React , { useState }  from 'react';
import { Input } from 'antd';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const effects = {
  transition:'7s'
};

function Search(props) {
  const [open, setOpen] = useState(false);
  const inputEvent = props.inputEvent;
  const prod = props.prod;
  return (  
    <div className='search'>
      {open ? <Input 
            input="text"
            style={{ ...effects, marginRight:'40px', }} 
            placeholder="Search Product" 
            Value={prod}
            onChange={( event ) => inputEvent (event)}
            /> : null}
     
       <a style={{transition:'1s'}} onClick={() => {  setOpen(!open); }}><FontAwesomeIcon icon={faSearch} /></a>  
      
    </div>
  );
}

export default Search;
