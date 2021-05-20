<?php

namespace app\controller;

require "../vendor/PHPGangsta/GoogleAuthenticator.php";

use app\BaseController;
use PHPGangsta_GoogleAuthenticator;

class Index extends BaseController
{
    public function index()
    {
        $obj = new PHPGangsta_GoogleAuthenticator();
        $sec = $obj->createSecret();
        var_dump($sec);
        $url = $obj->getQRCodeGoogleUrl('littlefly', $sec);
        echo ('<img src="' . $url . '">');
    }
    public function check()
    {
        $sec = '37FSDIXOIQFUGL65';
        $obj = new PHPGangsta_GoogleAuthenticator();
        $dyncCode = '944403';
        //对用户输入的6位动态码进行校验，参数$sec是与此用户关联的秘钥
        $ret = $obj->verifyCode($sec, $dyncCode);
        if ($ret) {
            echo "login success\n";
        } else {
            echo "login fail\n";
        }
    }
}
