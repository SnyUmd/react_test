import express from 'express';

const app = express();

//GET���N�G�X�g�Ń��[�g�ɃA�N�Z�X����������̓���
app.get('/', (req, res)=>{
  res.send('Hello express');
});

//3000�ԃ|�[�g���g���ăT�[�o�[�𗧂��グ
app.listen(3000, ()=>{
  console.log('app listening on 3000');
});