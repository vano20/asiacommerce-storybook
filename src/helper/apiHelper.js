function getArray(data) {
  if (Array.isArray(data)) {
    return data;
  }

  return [data];
}

function getEntities(data, included) {
  const returned = {};

  getArray(data).forEach(value => {
    returned[value.type] = returned[value.type] || {};
    returned[value.type][value.id] = returned[value.type][value.id] || {};
    returned[value.type][value.id] = value.attributes;

    if (included) {
      Object.keys(value.relationships).forEach(relation => {
        if (!Array.isArray(value.relationships[relation])) {
          const arr = [];
          for (let index in value.relationships[relation]) {
            arr[index] = value.relationships[relation][index]
          }
          value.relationships[relation] = arr;
        }
        value.relationships[relation].forEach(relationships => {
          returned[value.type][value.id][relation] =
            returned[value.type][value.id][relation] || {};
          returned[value.type][value.id][relation][relationships.id] =
            returned[value.type][value.id][relation][relationships.id] || {};
          returned[value.type][value.id][relation][relationships.id] =
            included[relation][relationships.id].attributes;
        });
      });
    }
  });

  return returned;
}

export const apiHelper = {
  normalized(data) {
    console.log(data);
    const returned = {};
    if (data.data) {
      return Object.assign(returned, getEntities(data.data, data.included));
    }
    return {};
  }
};
