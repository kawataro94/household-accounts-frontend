import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal, Alert } from 'rsuite';

import { useCreateRecord, useFetchRecords } from '../../../hooks';
import { DashboardContext } from '../context';
import QuickForm from './QuickForm';

const { Header, Title, Body, Footer } = Modal;
const QuickFormModal = (props) => {
	const { categories, places, members, isOpen, template, closeCreateModal } = props;
	const {
		myProfile: { account, id },
		updateRecords,
	} = useContext(DashboardContext);
	const { create: createRecord } = useCreateRecord({ me: id, categories, places, members });
	const [formValue, setFormValue] = useState({});
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		const { title, category, place } = template;
		setFormValue({
			title: title || '',
			category,
			place,
			date: new Date(),
			paidBy: account,
			cost: '',
		});
	}, [template, id]);

	useEffect(() => {
		const inputValue = Object.values(formValue || {});
		setDisabled(inputValue.length < 3 || !Object.values(formValue || {}).every((v) => v !== undefined));
	}, [formValue]);

	const onOk = () => {
		createRecord(formValue)
			.then(() => {
				Alert.config({ top: 80 });
				Alert.success('新しいレコードを追加しました');
				useFetchRecords().then(({ data }) => updateRecords(data));
			})
			.catch((e) => {
				console.log(e, 'post error');
			});
		closeCreateModal();
	};
	const onCancel = () => {
		closeCreateModal();
	};

	const createFormProps = {
		formValue,
		setFormValue,
	};
	const okButtonProps = {
		onClick: () => onOk(),
		appearance: 'primary',
		disabled,
	};
	const cancelButtonProps = {
		onClick: () => onCancel(),
		appearance: 'subtle',
	};

	return (
		<Modal show={isOpen} onHide={closeCreateModal} size="xs">
			<Header>
				<Title>Form</Title>
			</Header>
			<Body>
				<QuickForm {...createFormProps} />
			</Body>
			<Footer>
				<Button {...okButtonProps}>Ok</Button>
				<Button {...cancelButtonProps}>Cancel</Button>
			</Footer>
		</Modal>
	);
};

export default QuickFormModal;
