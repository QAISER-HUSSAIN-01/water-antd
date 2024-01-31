import React from 'react';
import { Dropdown, Space } from 'antd';
export default function DropdownComponent({list,icon:Icon,text}) {
  return (
    <Dropdown menu={{items:list}} trigger={['click']} className='pointer'>
        <Space>
          {text && text}
          {Icon && Icon}
        </Space>
    </Dropdown>
  )
}
