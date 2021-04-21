function appendRowIndices(rowIndex, columns) {
  return columns.map((columnIndex) => [rowIndex, columnIndex]);
}

function appendColumnIndices(columnIndex, rows) {
  return rows.map((rowIndex) => [rowIndex, columnIndex]);
}

module.exports = {
  appendRowIndices: appendRowIndices,
  appendColumnIndices: appendColumnIndices,
};
