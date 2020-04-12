import React, { useState } from 'react';

import { Container, Image, Menu, Icon, Segment, Sidebar  } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  const [visible, setVisible] = useState(false)

  return (
    <React.Fragment>

    <Menu>
        <Container>

          <Menu.Item  header>
            <Image size="mini" src={require("../assests/logo/gptw_logo.png")} href="/" />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item name="attendance">
              <Icon name='list' onClick={()=>{setVisible(true)}} ></Icon>
            </Menu.Item>

          </Menu.Menu>
        </Container>
      </Menu>

    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
        direction='left'
      >
        <Menu.Item  header>
          <Image size="mini" src={require("../assests/logo/gptw_logo.png")} href="/" />
       </Menu.Item>

        <Menu.Item name="culturebook">
        <Link to="/login" onClick={()=>{setVisible(false)}}><Icon name='users' ></Icon></Link>
        </Menu.Item>

        <Menu.Item name="attendance">
          <Link to="/attendance" onClick={()=>{setVisible(false)}}><Icon name='check'></Icon> Status</Link>
        </Menu.Item>

        <Menu.Item name="taskmanager">
          <Link to="/taskmanager" onClick={()=>{setVisible(false)}}><Icon name='comment'></Icon>Tasks Manager</Link>
        </Menu.Item>

      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          {props.children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>

    </React.Fragment>
    
  )
}


export default Navbar;