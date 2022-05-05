
import {notification} from 'antd'

export const openNoti = (type,data,message)=>{ 
    return notification[type]({
        message,
        description:data,
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
}