export default function groupBy(arr, groupKey) {
  return arr.reduce((groupedEls, el) => {
    // Group initialization
    if (!groupedEls[el[groupKey]]) {
      groupedEls[el[groupKey]] = [];
    }

    // Grouping
    groupedEls[el[groupKey]].push(el);

    return groupedEls;
  }, {});
}
