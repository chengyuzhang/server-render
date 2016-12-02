/**
 * Created by Nelson on 2016/11/29.
 */
const express = require('express');
const router = express.Router();



router.post('/',handleRender);

function handleRender(req, res) {
    console.log('post1');
    res.send({msg:'这是一个测试请求'});

}

export default router;