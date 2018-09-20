const exampleTableData = [
  {
    Height: '488236',
    Age: '2m',
    '# of Tx': '2464',
    'BTC Sent': '18',
    'Size (kB)': '1,311',
    Weight: '1311',
    'Avg Fee': '$1.52',
    Miner: 'bcoin'
  },
  {
    Height: '488236',
    Age: '14m',
    '# of Tx': '2464',
    'BTC Sent': '18',
    'Size (kB)': '1,912',
    Weight: '1912',
    'Avg Fee': '$1.35',
    Miner: 'bcoin'
  },
  {
    Height: '488236',
    Age: '2m',
    '# of Tx': '2464',
    'BTC Sent': '42',
    'Size (kB)': '1,018',
    Weight: '1018',
    'Avg Fee': '$7.48',
    Miner: 'bcoin'
  },
  {
    Height: '488236',
    Age: '14m',
    '# of Tx': '2464',
    'BTC Sent': '41',
    'Size (kB)': '1,710',
    Weight: '1710',
    'Avg Fee': '$1.57',
    Miner: 'bcoin'
  },
  {
    Height: '488236',
    Age: '2m',
    '# of Tx': '2011',
    'BTC Sent': '118',
    'Size (kB)': '1,018',
    Weight: '1018',
    'Avg Fee': '$1.28',
    Miner: 'bcoin'
  },
  {
    Height: '488236',
    Age: '14m',
    '# of Tx': '1269',
    'BTC Sent': '388',
    'Size (kB)': '1,928',
    Weight: '1928',
    'Avg Fee': '$4.58',
    Miner: 'bcoin'
  }
];

const tableProps = {
  onRowClick: ({ rowData }) => console.log(rowData), // eslint-disable-line no-console
  tableData: exampleTableData
};

export default tableProps;
