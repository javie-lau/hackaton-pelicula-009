const filterType = (data, condition) => {
    let filterResult = data.filter(element => {
      return element.Type.includes(condition);
    })
    return filterResult;
  };
  window.filterType = filterType;