import React from 'react';
import { FlexboxGrid } from 'rsuite';

import Divider from '../../components/Divider';
import { Provider } from './hoc/index';
import GroupPanel from './widget/GroupPanel';
// import UserPanel from './widget/UserPanel';
import QuickFormPanel from './widget/QuickFormPanel';
import RecordTable from './widget/RecordTable';

const Dashboard = () => {
  return (
    <div className='wrap'>
      <Provider>
        <h2 >Dashboard</h2>
        <Divider height='20' />
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item className='da-group-info'>
            <GroupPanel />
          </FlexboxGrid.Item>
          {/* <FlexboxGrid.Item className='da-member-info'>
            <UserPanel />
          </FlexboxGrid.Item> */}
          <FlexboxGrid.Item className='da-template-form'>
            <QuickFormPanel />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <div className='da-record-table'>
          <RecordTable />
        </div>
      </Provider>
    </div>
  );
};

export default Dashboard;