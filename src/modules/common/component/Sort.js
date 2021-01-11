import React from 'react';
import {Breadcrumb} from 'antd';



function Sort( props ) {
  
  const sort = props.sort;
  return (  
    <Breadcrumb className='breadcrum'>
    <Breadcrumb.Item className='breadcrumheading'>Sort By</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#" style={{fontWeight:'600'}} onClick={() => sort('pricehigh')}>Price--High </a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#" style={{fontWeight:'600'}} onClick={() => sort('pricelow')}>Price--Low High</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="#" style={{fontWeight:'600'}} onClick={() => sort('discounthigh')}>Discount</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="" style={{fontWeight:'600'}}></a>
    </Breadcrumb.Item>
  </Breadcrumb>

  );
}
export default Sort;
