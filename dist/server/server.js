/**
 * Created by Nelson on 2016/11/28.
 */
import path from 'path';
import express from 'express';

const app = new express();
const port = 3001;

import index from '../../router/units/index';

app.use('/',index);

app.use(express.static(path.join(path.resolve(path.resolve(__dirname, '..')),'..'), ''));

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});