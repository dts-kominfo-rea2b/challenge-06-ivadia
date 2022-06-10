// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const readData = [];
  const sumberData = [file1, file2, file3];

  for (const sumber of sumberData) {
    fs.readFile(sumber, function read(err, data) {
      if (err) {
        return console.log(err);
      } else {
        const file = JSON.parse(data);

        if (file?.message !== undefined) {
          readData.push(file.message.split(" ")[1]);
        }

        if (file?.length) {
          file?.forEach((item) => {
            if (item?.message !== undefined) {
              readData.push(item.message.split(" ")[1]);
            }
            if (item?.data?.message !== undefined) {
              readData.push(item.data.message.split(" ")[1]);
              fnCallback(null, readData);
            }
          });
        }
      }
    });
  }
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
