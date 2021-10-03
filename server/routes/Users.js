const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');
// password를 암호화 하기 위한 모듈 호출

const { sign } = require('jsonwebtoken');
// jwt를 사용하기 위한 모듈
const { Users } = require('../models');
// models이라는 폴더를 User로 불러옴
const { validateToken } = require('../middlewares/AuthMiddleware');
// accessToken을 사용하기 위해서 AuthMiddleware를 불러다 씀

router.post('/', async (req, res) => {
  const { username, identifyString, password } = req.body;
  console.log(
    'username: ',
    username,
    'identifyString: ',
    identifyString,
    'password: ',
    password,
  ); // header에 적으면 전부 undefined이 뜨네...
  bcrypt.hash(password, 10).then(async hash => {
    Users.create({
      username,
      identifyString,
      password: hash,
    });
    res.json('SUCCESS, NOW YOU GET YOUR ID');
  });
});
// server 파일에 변수 설정 한거와 같이 "/user" 이 기본인 url에서 볼수있으며, 3가지를 작성해야 하고 password눈 bcrypt.hash로 암호화가 되며, 10은 암호를
// 복잡하게 해준다고 해서 숫자가 높았을때 더 복잡하지만 10만으로도 충분히 된다고 하여 대체적으로 10만 쓴다함.

// password, id로 로그인 하는거
router.post('/login', async (req, res) => {
  const { identifyString, password } = req.body;
  console.log(req.body);

  const user = await Users.findOne({
    where: { identifyString },
  });

  if (!user) res.json({ error: "User Doesn't Exist" });

  bcrypt.compare(password, user.password).then(async match => {
    if (!match) res.json({ error: 'Wrong Username And Password Combination' });

    const accessToken = sign(
      { identifyString: user.identifyString, id: user.id },
      'importantsecret',
    );
    res.json({
      token: accessToken,
      identifyString: user.identifyString,
      username: user.username,
      id: user.id,
    });
  });
});
// req.body로 우리가 비교할 id, password값을 가져오며, user라고 해서 id값을 찾아와서 값을 지정해준다.
// user의 값이 없으면 error 메세지를 띄우고, 그 후에 password비교를 통해서 로그인을 확인하며, sign 즉 jwt를 이용해 accessToken을 생성한다.

// if 문으로 username이 중복되지 않게 한다음에 id 체크하고 비번 체크해야함.
// 여기부분 postman에서 보려면 /user/user로 들어가야 함
router.get('/user', validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
