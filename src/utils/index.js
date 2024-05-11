const buildDataUtil = (list) => {
  const result = [];
  list.sort().map((item) =>
    item.lines.map((line) => {
      result.push({
        name: item.file,
        text: line.text,
        number: line.number,
        hex: line.hex,
      });
    })
  );

  return result;
};

const getUrlService = ( fileName ) => {
  const urlService = "http://localhost:3000/files/data";
  if (fileName) return `${urlService}?fileName=${fileName}`;
  return urlService;
};

export { getUrlService, buildDataUtil };
