// this file is generated by xresloader, please don't edit it.

exports.files = [
  {
    path : "dependency.proto",
    enum_type : {
      game_const_config : {
        options : {
          allow_alias : true
        },
        name : "game_const_config"
      },
      cost_type : {
        name : "cost_type",
        value : {
          EN_CT_DIAMOND : {
            number : 10101,
            options : {
              enum_alias : "钻石"
            },
            name : "EN_CT_DIAMOND"
          },
          EN_CT_MONEY : {
            number : 10001,
            options : {
              enum_alias : "金币"
            },
            name : "EN_CT_MONEY"
          }
        }
      }
    },
    package : "",
    name : "dependency.proto"
  },
  {
    path : "xresloader_ue.proto",
    package : "org.xresloader.ue",
    options : {
      optimize_for : "SPEED"
    },
    name : "xresloader_ue.proto"
  },
  {
    path : "kind.proto",
    package : "",
    name : "kind.proto",
    message_type : {
      role_upgrade_cfg : {
        field : {
          CostType : {
            number : 3,
            type_name : "UINT32",
            options : {
              field_description : "Refer to cost_type",
              verifier : "cost_type"
            },
            name : "CostType"
          }
        },
        name : "role_upgrade_cfg"
      },
      arr_in_arr_cfg : {
        field : {
          id : {
            number : 1,
            type_name : "UINT32",
            options : {
              key_tag : 1,
              field_description : "This is a Key"
            },
            name : "id"
          }
        },
        options : {
          helper : "helper",
          msg_description : "Test arr_in_arr_cfg"
        },
        name : "arr_in_arr_cfg"
      },
      test_msg_verifier : {
        field : {
          test_id_2 : {
            number : 10002,
            type_name : "UINT32",
            options : {
              field_alias : "测试ID别名2"
            },
            name : "test_id_2"
          }
        },
        name : "test_msg_verifier"
      },
      arr_in_arr : {
        field : {
          int_arr : {
            number : 2,
            type_name : "INT32",
            options : {
              packed : true
            },
            name : "int_arr"
          },
          name : {
            number : 1,
            type_name : "STRING",
            options : {
              field_description : "This is a test name in array"
            },
            name : "name"
          }
        },
        options : {
          helper : "helper",
          not_data_table : true
        },
        name : "arr_in_arr"
      }
    }
  },
  {
    path : "xresloader.proto",
    package : "org.xresloader",
    options : {
      optimize_for : "SPEED"
    },
    name : "xresloader.proto"
  }
];

