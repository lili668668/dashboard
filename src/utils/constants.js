const axises = [
  { value: 'cpc', label: 'CPC' },
  { value: 'cpm', label: 'CPM' },
  { value: 'cost', label: 'Cost' }
]

const columns = [
  { name: 'id', title: 'ID' },
  { name: 'score', title: 'Score' },
  { name: 'gender', title: 'Gender' },
  { name: 'age_range', title: 'Age Range' },
  { name: 'countries', title: 'Countries' },
  { name: 'languages', title: 'Languages' },
  { name: 'devices', title: 'Devices' }
]

const extensions = [
  { columnName: 'score', wordWrapEnabled: true },
  { columnName: 'gender', wordWrapEnabled: true },
  { columnName: 'age_range', wordWrapEnabled: true },
  { columnName: 'countries', wordWrapEnabled: true },
  { columnName: 'languages', wordWrapEnabled: true },
  { columnName: 'devices', wordWrapEnabled: true }
]

export {
  axises,
  columns,
  extensions
}
