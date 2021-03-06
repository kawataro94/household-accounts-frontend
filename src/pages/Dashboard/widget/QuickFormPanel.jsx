import React, { useState, useContext } from 'react';
import { Row, Col, Panel, Button, FlexboxGrid } from 'rsuite';

import Divider from '../../../components/Divider';
import QuickFormModal from './QuickFormModal';
import { gridItem } from '../style';
import { DashboardContext } from '../context';

const QuickFormPanel = () => {
	const { categories, places, members, templates } = useContext(DashboardContext);
	const [isOpen, setIsOpen] = useState(false);
	const [template, setTemplate] = useState({});

	const openCreateModal = (content) => {
		setIsOpen(true);
		setTemplate(content);
	};

	const closeCreateModal = () => {
		setIsOpen(false);
		setTemplate({});
	};

	const createModalProps = {
		categories,
		places,
		members,
		isOpen,
		template,
		closeCreateModal,
	};

	return (
		<Row>
			<Col>
				<h5>クイック入力</h5>
			</Col>
			<Divider height="10" />
			<Col>
				<Panel bordered>
					<FlexboxGrid>
						{templates.map((template, index) => {
							const { title } = template;
							return (
								<FlexboxGrid.Item key={index} css={gridItem}>
									<Button onClick={() => openCreateModal(template)} appearance="primary">
										{title}
									</Button>
								</FlexboxGrid.Item>
							);
						})}
					</FlexboxGrid>
				</Panel>
			</Col>
			<QuickFormModal {...createModalProps} />
		</Row>
	);
};

export default QuickFormPanel;
