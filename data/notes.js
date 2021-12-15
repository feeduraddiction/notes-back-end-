/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable arrow-parens */
/* eslint-disable no-param-reassign */

const userRoutes = (app, fs) => {
  const dataPath = './data/notes.json';

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = 'utf8',
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = 'utf8',
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  // READ
  app.get('/notes', (req, res) => {
    readFile((data) => {
      res.send(JSON.stringify(data));
    }, true);
  });
  // ADD
  app.post('/notes', (req, res) => {
    readFile((data) => {
      data[req.body.id] = req.body;
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(JSON.stringify(data));
      });
    }, true);
  });

  // UPDATE
  app.put('/notes/:id', (req, res) => {
    readFile((data) => {
      data[req.params.id].note = req.body.note;
      data[req.params.id].hashtag = req.body.hashtag;
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(JSON.stringify(data));
      });
    }, true);
  });
  // DELETE
  app.delete('/notes/:id', (req, res) => {
    readFile(data => {
      delete data[req.params.id];
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(JSON.stringify(data));
      });
    }, true);
  });
};

module.exports = userRoutes;
