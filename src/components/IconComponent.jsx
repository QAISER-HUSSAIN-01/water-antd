import React from 'react';
import * as Icon from '@ant-design/icons';
export default function IconComponent({name}) {
    const RenderIcon = Icon[name || 'WarningOutlined'];
    if(!name){ 
        return <RenderIcon style={{color:'red'}} />
    }
  return (<RenderIcon />);
}
