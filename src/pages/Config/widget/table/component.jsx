import React from 'react';
import { FlexboxGrid, Panel } from 'rsuite';

import { Button, Divider, Table } from '../../../../components';

const Component = ({ tableProps, openCreateModal }) => {
	return (
		<Panel bordered>
			<FlexboxGrid justify="end" align="middle">
				<Button onClick={openCreateModal}>追加する</Button>
			</FlexboxGrid>
			<Divider height="10" />
			<Table {...tableProps} />
		</Panel>
	);
};

export default Component;
