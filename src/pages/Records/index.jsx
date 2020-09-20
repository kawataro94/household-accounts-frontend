import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import Divider from '../../components/Divider';
import RecordTable from './widget/RecordTable';
import { Provider } from './hoc/index';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getRecords();
    getMembers();
  }, []);

  const getRecords = () => {
    axios
      .get('http://127.0.0.1:8000/member/records')
      .then(({ data }) => {
        setRecords(data);
      })
      .catch((e) => {
        console.log(e, 'get error');
      });
  };

  const getMembers = () => {
    axios
      .get('http://127.0.0.1:8000/member/members')
      .then(({ data }) => {
        setMembers(data);
      })
      .catch((e) => {
        console.log(e, 'get members error');
      });
  };

  const createRecord = record => {
    const params = {
      ...record,
      date: moment(record.date).format('YYYY-MM-DD'),
      member_id: record.paidBy,
      create_by: 2,
      description: "TEST DESCRIPTION",
      fixed: false,
    };

    axios
      .post(`http://127.0.0.1:8000/member/records`, params)
      .then(({ data }) => {
        setRecords([...records, data]);
      })
      .catch((e) => {
        console.log(e, 'post error');
      });
  };
  const editRecord = (record, idx) => {
    const params = {
      ...record,
      date: moment(record.date).format('YYYY-MM-DD')
    };

    axios
      .patch(`http://127.0.0.1:8000/member/records/${record.id}`, params)
      .then(({ data }) => {
        const clone = Array.from(records);
        clone.splice(idx, 1, data);
        setRecords(clone);
      })
      .catch((e) => {
        console.log(e, 'patch error');
      });
  };

  const deleteRecord = index => {
    const { id } = records[index];

    axios
      .delete(`http://127.0.0.1:8000/member/records/${id}`)
      .then(() => {
        const clone = Array.from(records);
        clone.splice(index, 1);
        setRecords(clone);
      })
      .catch((e) => {
        console.log(e, 'delete error');
      });

  };

  const providerData = {
    records,
    members,
    createRecord,
    editRecord,
    deleteRecord
  };

  return (
    <div className='wrap'>
      <Provider value={providerData}>
        <h2 >Records</h2>
        <Divider height='20' />
        <RecordTable />
        <Divider height='20' />
      </Provider>
    </div>
  );
};

export default Records;