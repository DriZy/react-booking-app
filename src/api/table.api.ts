import { Priority } from '../constants/enums/priorities';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  name: string;
  code: string;
  age: number;
  address: string;
  phone?: string;
  status?: string;
  tags?: Tag[];
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            code: 'A01021022',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Architect', priority: Priority.LOW },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 2,
            name: 'Jim Green',
            code: 'A02021022',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: [{ value: 'Doctor', priority: Priority.HIGH }],
          },
          {
            key: 3,
            name: 'Joe Black',
            code: 'A03021022',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: [
              { value: 'Professor', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 4,
            name: 'Pavel Green',
            code: 'A41021022',
            age: 30,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 5,
            name: 'Alex Brown',
            code: 'A05021022',
            age: 26,
            address: 'Minsk',
            tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          },
          {
            key: 6,
            name: 'Josh Black',
            code: 'A06021022',
            age: 21,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 7,
            name: 'Cris Green',
            code: 'A07021022',
            age: 22,
            address: 'Sidney No. 1 Lake Park',
            tags: [{ value: 'Architect', priority: Priority.LOW }],
          },
          {
            key: 8,
            name: 'Jaime Black',
            code: 'A08021022',
            age: 23,
            address: 'New York No. 1 Lake Park',
            tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          },
          {
            key: 9,
            name: 'Alina Brown',
            code: 'A09021022',
            age: 19,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 10,
            name: 'Cris Brown',
            code: 'A10021022',
            age: 25,
            address: 'London',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 11,
            name: 'Alina Fens',
            code: 'A10121022',
            age: 19,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 12,
            name: 'Alex Snak',
            code: 'A10221022',
            age: 28,
            address: 'Brest',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 13,
            name: 'Pavel Dubrouski',
            code: 'A10321022',
            age: 26,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 14,
            name: 'Jack Donald',
            code: 'A10421022',
            age: 24,
            address: 'New York',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
          {
            key: 15,
            name: 'Nik Nest',
            code: 'A10521022',
            age: 34,
            address: 'London',
            tags: [
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 16,
            name: 'Zak Nikls',
            code: 'A10621022',
            age: 32,
            address: 'Minsk',
            tags: [
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 17,
            name: 'Petr Dan',
            code: 'A10721022',
            age: 29,
            address: 'Gomel',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 18,
            name: 'Alexa Pirs',
            code: 'A10821022',
            age: 19,
            address: 'Moscow',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 19,
            name: 'Mark Brown',
            code: 'A10921022',
            age: 25,
            address: 'London',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 20,
            name: 'Alex Brons',
            code: 'A11021022',
            age: 45,
            address: 'Bronx',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown sr.',
            code: 'A10121022',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [
              {
                key: 11,
                name: 'John Brown',
                code: 'A10121022',
                age: 42,
                address: 'New York No. 2 Lake Park',
              },
              {
                key: 12,
                name: 'John Brown jr.',
                code: 'A10121022',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [
                  {
                    key: 121,
                    name: 'Jimmy Brown',
                    code: 'A10121022',
                    age: 16,
                    address: 'New York No. 3 Lake Park',
                  },
                ],
              },
              {
                key: 13,
                name: 'Jim Green sr.',
                code: 'A10121022',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [
                  {
                    key: 131,
                    name: 'Jim Green',
                    code: 'A10121022',
                    age: 42,
                    address: 'London No. 2 Lake Park',
                    children: [
                      {
                        key: 1311,
                        name: 'Jim Green jr.',
                        code: 'A10121022',
                        age: 25,
                        address: 'London No. 3 Lake Park',
                      },
                      {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        code: 'A10121022',
                        age: 18,
                        address: 'London No. 4 Lake Park',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 200,
            name: 'Joe Black',
            code: 'A10121022',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            children: [
              {
                key: 201,
                name: 'Joe Green',
                code: 'A10121022',
                age: 42,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 202,
                    name: 'Joe Green jr.',
                    code: 'A10121022',
                    age: 25,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 203,
                    name: 'Joe Green sr.',
                    code: 'A10121022',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 300,
            name: 'Jaime Black',
            code: 'A10121022',
            age: 22,
            address: 'Sidney No. 1 Lake Park',
            children: [
              {
                key: 301,
                name: 'Jaime Green',
                code: 'A10121022',
                age: 52,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 302,
                    name: 'Jaime Green jr.',
                    code: 'A10121022',
                    age: 21,
                    address: 'London No. 3 Lake Park',
                  },
                  {
                    key: 303,
                    name: 'Jaime Green sr.',
                    code: 'A10121022',
                    age: 18,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 400,
            name: 'Pavel Brown',
            code: 'A10121022',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 401,
                name: 'Pavel Brown',
                code: 'A10121022',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 402,
                    name: 'Pavel Brown jr.',
                    code: 'A10121022',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 403,
                    name: 'Pavel Brown sr.',
                    code: 'A10121022',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 500,
            name: 'Alex Nickls',
            code: 'A10121022',
            age: 45,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 501,
                name: 'Marta Nickls',
                code: 'A10121022',
                age: 25,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 502,
                    name: 'Pavel Nickls jr.',
                    code: 'A10121022',
                    age: 12,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 503,
                    name: 'Alina Nickls sr.',
                    code: 'A10121022',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 600,
            name: 'Nick Donald',
            code: 'A10121022',
            age: 45,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 601,
                name: 'Alexsa Donald',
                code: 'A10121022',
                age: 34,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 602,
                    name: 'Marta Donald jr.',
                    code: 'A10121022',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 603,
                    name: 'Alex Donald sr.',
                    code: 'A10121022',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 700,
            name: 'Jo Snider',
            code: 'A10121022',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 701,
                name: 'Jo Snider',
                code: 'A10121022',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 702,
                    name: 'Jaems Snider jr.',
                    code: 'A10121022',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 703,
                    name: 'Jin Snider sr.',
                    code: 'A10121022',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
          {
            key: 800,
            name: 'Jon Brown',
            code: 'A10121022',
            age: 26,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 801,
                name: 'Kitana Brown',
                code: 'A10121022',
                age: 22,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 802,
                    name: 'Cris Brown jr.',
                    code: 'A10121022',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                  },
                  {
                    key: 803,
                    name: 'Jon Brown sr.',
                    code: 'A10121022',
                    age: 19,
                    address: 'London No. 4 Lake Park',
                  },
                ],
              },
            ],
          },
        ],
        pagination: { ...pagination, total: 8 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `Edward`,
            code: 'A10121022',
            age: 32,
            address: `London Park no.1`,
          },
          {
            key: 2,
            name: `Alex`,
            code: 'A10121022',
            age: 45,
            address: `London Park no.2`,
          },
          {
            key: 3,
            name: `Niko`,
            code: 'A10121022',
            age: 21,
            address: `London Park no.3`,
          },
          {
            key: 4,
            name: `Josh`,
            code: 'A10121022',
            age: 18,
            address: `London Park no.4`,
          },
          {
            key: 5,
            name: `Jo`,
            code: 'A10121022',
            age: 15,
            address: `Minsk Park no.1`,
          },
          {
            key: 6,
            name: `Jaimi`,
            code: 'A10121022',
            age: 18,
            address: `London Park no.2`,
          },
          {
            key: 7,
            name: `Alexa`,
            code: 'A10121022',
            age: 24,
            address: `London Park no.6`,
          },
          {
            key: 8,
            name: `Donald`,
            code: 'A10121022',
            age: 27,
            address: `London Park no.7`,
          },
          {
            key: 9,
            name: `Pavel`,
            code: 'A10121022',
            age: 17,
            address: `London Park no.9`,
          },
          {
            key: 10,
            name: `Nick`,
            code: 'A10121022',
            age: 18,
            address: `London Park no.1`,
          },
          {
            key: 11,
            name: `Dasha`,
            code: 'A10121022',
            age: 25,
            address: `London Park no.2`,
          },
          {
            key: 12,
            name: `Alex`,
            code: 'A10121022',
            age: 27,
            address: `London Park no.3`,
          },
          {
            key: 13,
            name: `Vic`,
            code: 'A10121022',
            age: 29,
            address: `London Park no.2`,
          },
          {
            key: 14,
            name: `Natalia`,
            code: 'A10121022',
            age: 25,
            address: `London Park no.4`,
          },
          {
            key: 15,
            name: `Zack`,
            code: 'A10121022',
            age: 27,
            address: `London Park no.1`,
          },
          {
            key: 16,
            name: `Jack`,
            code: 'A10121022',
            age: 31,
            address: `London Park no.4`,
          },
        ],
        pagination: { ...pagination, total: 16 },
      });
    }, 1000);
  });
};