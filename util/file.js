const fs = require('fs');

const file = {
  /**
   * read data from database
   * @param path database's path
   * @returns {Promise<unknown>}
   */
  read(path) {
    return new Promise((resolve, reject) => {
      // 异步Promise的经典操作，异步操作不能return
      fs.readFile(path, {encoding: 'UTF-8', flag: 'a+'}, (error, contents) => {
        if (error) return reject(error);
        let data;
        try {
          data = JSON.parse(contents.toString());
        } catch (err) {
          data = [];
        }
        return resolve(data);
      });
    });
  },
  /**
   * write data to database
   * @param data
   * @param path database's path
   * @returns {Promise<unknown>}
   */
  write(data, path) {
    return new Promise((resolve, reject) => {
      const str = JSON.stringify(data);
      fs.writeFile(path, str, (err) => {
        if (err) return reject(err);
        return resolve();
      });
    });
  },
};

module.exports = file;
