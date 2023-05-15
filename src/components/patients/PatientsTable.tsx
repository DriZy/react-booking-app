import React, { useEffect, useState, useCallback } from 'react';
import { BasicTableRow, getBasicTableData, Pagination, Tag } from 'api/table.api';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { ColumnsType } from 'antd/es/table';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { notificationController } from 'controllers/notificationController';
import { useMounted } from '@app/hooks/useMounted';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

export const PatientsTable: React.FC = () => {
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination: Pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      getBasicTableData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false });
        }
      });
    },
    [isMounted],
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination: Pagination) => {
    fetch(pagination);
  };

  const handleDeleteRow = (rowId: number) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter((item) => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
      },
    });
  };

  const columns: ColumnsType<BasicTableRow> = [
    {
      title: t('patients.table.header.name'),
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text: string) => <span>{text}</span>,
      filterMode: 'tree',
      filterSearch: true,
      filters: [
        {
          text: t('common.firstName'),
          value: 'firstName',
          children: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Pavel',
              value: 'Pavel',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Josh',
              value: 'Josh',
            },
          ],
        },
        {
          text: t('common.lastName'),
          value: 'lastName',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
            {
              text: 'Brown',
              value: 'Brown',
            },
          ],
        },
      ],
      onFilter: (value: string | number | boolean, record: BasicTableRow) => record.name.includes(value.toString()),
    },
    {
      title: t('patients.table.header.code'),
      dataIndex: 'code',
      // sorter: (a: BasicTableRow, b: BasicTableRow) => a.code.length - b.code.length,
      sorter: (a, b) => a.code.localeCompare(b.code),
      showSorterTooltip: false,
    },
    {
      title: t('patients.table.header.age'),
      dataIndex: 'age',
      sorter: (a: BasicTableRow, b: BasicTableRow) => a.age - b.age,
      showSorterTooltip: false,
    },
    {
      title: t('patients.table.header.address'),
      dataIndex: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: t('patients.table.header.phone'),
      dataIndex: 'phone',
      // sorter: (a, b) => a.phone.localeCompare(b.phone),
      width: '15%',
      render: (text: string, record: { name: string; key: number }) => {
        return (
          <BaseSpace>
            <BaseButton
              type="ghost"
              onClick={() => {
                notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            >
              {t('tables.invite')}
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
    {
      title: t('patients.table.header.status'),
      dataIndex: 'status',
      // sorter: (a, b) => a?.status.localeCompare(b?.status),
      width: '15%',
      render: (text: string, record: { name: string; key: number }) => {
        return (
          <BaseSpace>
            <BaseButton
              type="ghost"
              onClick={() => {
                notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            >
              {t('tables.invite')}
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  return (
    <BaseTable
      columns={columns}
      dataSource={tableData.data}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
      bordered
    />
  );
};