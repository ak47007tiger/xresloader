(function(){
  var role_cfg_header = {
    xres_ver : "1.0.6.0",
    hash_code : "no hash code",
    data_ver : "1.0.6.0",
    count : 7
  };
  var extend = function (dst, src) {
    for (var k in src) {
      var v = src[k];
      if (undefined === dst[k] || 'object' != typeof(v)) {
        dst[k] = v;
      } else {
        if ('object' != typeof(dst[k])) {
          dst[k] = {};
        }
        extend(dst[k], v)
      }
    }
  };
  try { extend(window, { "sample" : { role_cfg_header : role_cfg_header } }); }
  catch(e) { extend(global, { "sample" : { role_cfg_header : role_cfg_header } }); }
})();
(function(){
  var role_cfg = [
    {
      test_array : [
        "lalal",
        "欧若拉",
        "小魔女"
      ],
      name : "欧若拉",
      dep_test : {
        name : "123.0",
        id : 51,
        dep2 : {
          level : "2014-10-13",
          id : 101
        }
      },
      cost_value : 1,
      id : 10001
    },
    {
      unlock_level : 39,
      test_array : [
        "blebleble",
        "杰克",
        "海盗王子"
      ],
      name : "杰克",
      dep_test : {
        name : "654.0",
        id : 61,
        dep2 : {
          level : "2014-10-14",
          id : 201
        }
      },
      cost_value : 2,
      id : 10002
    },
    {
      unlock_level : 85,
      test_array : [
        "hahaha",
        "库拉",
        "喵少年"
      ],
      name : "库拉",
      dep_test : {
        name : "sdadasd",
        id : 71,
        dep2 : {
          level : "2014-10-15",
          id : 301
        }
      },
      cost_value : 4,
      id : 10003
    },
    {
      unlock_level : 122,
      test_array : [
        "angel",
        "莫瑞茨"
      ],
      name : "莫瑞茨",
      dep_test : {
        name : "ffff",
        id : 81,
        dep2 : {
          level : "19:10:50",
          id : 401
        }
      },
      cost_value : 8,
      id : 10004
    },
    {
      unlock_level : 183,
      cost_type : 10001,
      test_array : [
        "laopo",
        "爱丽丝"
      ],
      name : "爱丽丝",
      dep_test : {
        name : "gggg",
        id : 91,
        dep2 : {
          level : "09:10:50",
          id : 501
        }
      },
      cost_value : 99999,
      id : 10005
    },
    {
      unlock_level : 274,
      cost_type : 10101,
      test_array : [
        "keai",
        "都玛西亚"
      ],
      name : "都玛西亚",
      dep_test : {
        name : "hhhhh",
        id : 101,
        dep2 : {
          level : "2014-50-20 07:50:50",
          id : 601
        }
      },
      cost_value : 999,
      id : 10006
    }
  ];
  var extend = function (dst, src) {
    for (var k in src) {
      var v = src[k];
      if (undefined === dst[k] || 'object' != typeof(v)) {
        dst[k] = v;
      } else {
        if ('object' != typeof(dst[k])) {
          dst[k] = {};
        }
        extend(dst[k], v)
      }
    }
  };
  try { extend(window, { "sample" : { role_cfg : role_cfg } }); }
  catch(e) { extend(global, { "sample" : { role_cfg : role_cfg } }); }
})();
