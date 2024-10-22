const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"房间类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryFangjian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"反馈类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryFankui"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"老人身体状态管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryLaoren"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"物资类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWuzi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"房间信息管理",
                        "menuJump":"列表",
                        "tableName":"fangjian"
                    }
                ],
                "menu":"房间信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"房间入住信息管理",
                        "menuJump":"列表",
                        "tableName":"fangjianruzhu"
                    }
                ],
                "menu":"房间入住信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"反馈信息管理",
                        "menuJump":"列表",
                        "tableName":"fankui"
                    }
                ],
                "menu":"反馈信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"后勤人员管理",
                        "menuJump":"列表",
                        "tableName":"houqinrenyuan"
                    }
                ],
                "menu":"后勤人员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"护工管理",
                        "menuJump":"列表",
                        "tableName":"hugong"
                    }
                ],
                "menu":"护工管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"老人信息管理",
                        "menuJump":"列表",
                        "tableName":"laoren"
                    }
                ],
                "menu":"老人信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"留言管理",
                        "menuJump":"列表",
                        "tableName":"liuyan"
                    }
                ],
                "menu":"留言管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"体检员管理",
                        "menuJump":"列表",
                        "tableName":"tijianyuan"
                    }
                ],
                "menu":"体检员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资申请管理",
                        "menuJump":"列表",
                        "tableName":"wuzi"
                    }
                ],
                "menu":"物资申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjian"
	                }
	            ],
	            "menu":"房间信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间入住信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjianruzhu"
	                }
	            ],
	            "menu":"房间入住信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改"
	                    ],
	                    "menu":"反馈信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fankui"
	                }
	            ],
	            "menu":"反馈信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增"
	                    ],
	                    "menu":"留言管理",
	                    "menuJump":"列表",
	                    "tableName":"liuyan"
	                }
	            ],
	            "menu":"留言管理"
	        }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"老人信息管理",
                        "menuJump":"列表",
                        "tableName":"laoren"
                    }
                ],
                "menu":"老人信息管理"
            }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"物资申请管理",
	                    "menuJump":"列表",
	                    "tableName":"wuzi"
	                }
	            ],
	            "menu":"物资申请管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjian"
	                }
	            ],
	            "menu":"房间信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间入住信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjianruzhu"
	                }
	            ],
	            "menu":"房间入住信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"反馈信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fankui"
	                }
	            ],
	            "menu":"反馈信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"老人信息管理",
	                    "menuJump":"列表",
	                    "tableName":"laoren"
	                }
	            ],
	            "menu":"老人信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"留言管理",
	                    "menuJump":"列表",
	                    "tableName":"liuyan"
	                }
	            ],
	            "menu":"留言管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"物资申请管理",
	                    "menuJump":"列表",
	                    "tableName":"wuzi"
	                }
	            ],
	            "menu":"物资申请管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"体检员",
	    "tableName":"tijianyuan"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjian"
	                }
	            ],
	            "menu":"房间信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间入住信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjianruzhu"
	                }
	            ],
	            "menu":"房间入住信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"反馈信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fankui"
	                }
	            ],
	            "menu":"反馈信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"老人信息管理",
	                    "menuJump":"列表",
	                    "tableName":"laoren"
	                }
	            ],
	            "menu":"老人信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"留言管理",
	                    "menuJump":"列表",
	                    "tableName":"liuyan"
	                }
	            ],
	            "menu":"留言管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"物资申请管理",
	                    "menuJump":"列表",
	                    "tableName":"wuzi"
	                }
	            ],
	            "menu":"物资申请管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"后勤人员",
	    "tableName":"houqinrenyuan"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjian"
	                }
	            ],
	            "menu":"房间信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"房间入住信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fangjianruzhu"
	                }
	            ],
	            "menu":"房间入住信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"反馈信息管理",
	                    "menuJump":"列表",
	                    "tableName":"fankui"
	                }
	            ],
	            "menu":"反馈信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"老人信息管理",
	                    "menuJump":"列表",
	                    "tableName":"laoren"
	                }
	            ],
	            "menu":"老人信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"留言管理",
	                    "menuJump":"列表",
	                    "tableName":"liuyan"
	                }
	            ],
	            "menu":"留言管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"物资申请管理",
	                    "menuJump":"列表",
	                    "tableName":"wuzi"
	                }
	            ],
	            "menu":"物资申请管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"护工",
	    "tableName":"hugong"
	}
]
    }
}
export default menu;
