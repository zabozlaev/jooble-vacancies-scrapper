const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const JoobleApiClient = require('./jooble');
const creds = require('../creds.json');
const { execDate } = require('./util');

module.exports = class TableService {
  constructor() {
    this._doc = new GoogleSpreadsheet(process.env.DOC);
    this._apiClient = new JoobleApiClient(process.env.API_KEY);
  }

  async fillTable() {
    await promisify(this._doc.useServiceAccountAuth)(creds);

    const { worksheets } = await promisify(this._doc.getInfo)();
    console.log(Object.keys(worksheets[0]));
    const [sheet] = worksheets.filter(
      ({ title }) => title === process.env.KEYWORD
    );

    for (let idx = 0; idx < 100; idx++) {
      const { jobs } = await this._apiClient.fetchJob(idx);

      for (const job of jobs) {
        const dataToInsert = {
          ...job,
          'job title': job.title,
          updated: execDate(job.updated)
        };

        console.log(job.title);
        await promisify(sheet.addRow)(dataToInsert);
      }
    }
  }
};
