﻿//0杭州数据
function getHangZhouData(){
    var hangZhou = {
        "site":
            {
                "logo":"杭州logo.png",
                "poem":"杭州诗.png",
                "eat":["食在杭州名.png","食在杭州文字.png"],
                "play":["游在杭州名.png","游在杭州文字.png"]
            },
        "atrBanner":"atr_banner.png",
        "intro": "杭州，简称“杭”，古称临安、钱塘，是浙江省省会、副省级市、杭州都市圈核心城市，国务院批复确定的中国浙江省省会和全省经济、文化、科教中心、长江三角洲中心城市之一。地处中国华东地区、钱塘江下游、东南沿海、浙江北部、京杭大运河南端，是环杭州湾大湾区核心城市、沪嘉杭G60科创走廊中心城市 、国际重要的电子商务中心 。杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹，具代表性的有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说",
        "attractions":[
            {
                "name" :"西湖",
                "intro":" 西湖，位于浙江省杭州市西湖区龙井路1号，杭州市区西部，景区总面积49平方千米，汇水面积为21.22平方千米，湖面面积为6.38平方千米。西湖南、西、北三面环山，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面。</br>西湖的湖体轮廓呈近椭圆形，湖底部较为平坦，湖泊平均水深为2.27米，最深约5米，最浅不到1米。湖泊天然地表水源是金沙涧、龙泓涧、赤山涧（慧因涧）、长桥溪四条溪流。西湖地处中国东南丘陵边缘和中亚热带北缘，年均太阳总辐射量在100—110千卡/平方厘米之间，日照时数1800—2100小时。</br>西湖有100多处公园景点，有“西湖十景”、“新西湖十景”、“三评西湖十景”之说，有60多处国家、省、市级重点文物保护单位和20多座博物馆，有断桥、雷峰塔、钱王祠、净慈寺、苏小小墓等景点。2007年，杭州市西湖风景名胜区被评为“国家AAAAA级旅游景区”。2011年6月24日，“杭州西湖文化景观”正式被列入《世界遗产名录》。 ",
                "img":["西湖0.jpg","西湖1.jpg"]
            },
            {
                "name" :"六和塔",
                "intro":"六和塔，取佛教“六和敬”之义，命名为六和塔；又名六合塔，取“天地四方”之意；位于浙江省杭州市西湖区之江路16号。始建于宋开宝三年（970年），塔基原址系吴越王钱弘俶的南果园。钱弘俶舍园建塔原为镇压江潮 。</br>六和塔占地890平方米（约1.3亩），塔外各层檐角挂有104只铁铃。六和塔塔高59.89米，内部塔芯为砖石结构分七层，外部木结构楼阁式檐廊为八面十三层，每级廊道两侧有壶门，塔内由螺旋阶梯相连，第三级须弥座上雕刻有花卉、飞禽、走兽、仙子等各式图案。清朝乾隆皇帝曾为六和塔每层题字，分别为：初地坚固，二谛俱融、三明净域、四天宝纲、五云覆盖、六鳖负载、七宝庄严。</br>1961年3月4日，六和塔被中华人民共和国国务院公布为第一批全国重点文物保护单位。 ",
                "img":["六和塔0.jpg","六和塔1.jpg"]
            },
            {
                "name" :"灵隐寺",
                "intro":"灵隐寺，又名云林寺，位于浙江省杭州市，背靠北高峰，面朝飞来峰，始建于东晋咸和元年（326年），占地面积约87000平方米。灵隐寺开山祖师为西印度僧人慧理和尚。南朝梁武帝赐田并扩建。五代吴越王钱镠命请永明延寿大师重兴开拓，并赐名灵隐新寺。宋宁宗嘉定年间，灵隐寺被誉为江南禅宗“五山”之一。清顺治年间，禅宗巨匠具德和尚住持灵隐，筹资重建，仅建殿堂时间就前后历十八年之久，其规模之宏伟跃居“东南之冠“。清康熙二十八年（1689年），康熙帝南巡时，赐名 “云林禅寺”。现灵隐寺为全国重点文物保护单位。  ",
                "img":["灵隐寺0.jpg","灵隐寺1.jpg"]

            }],
        "foodBanner":"food_banner.png",
        "foods":[
            {
                "title":"龙井虾仁标题.png",
                "img":"龙井虾仁.jpg",
                "content":"茶叶入馔，古已有之。据唐《茶赋》载，茶乃“滋饭蔬之精素，攻肉食之膻腻”。</br>相传，清末安徽的厨师就已在用“雀舌”、“鹰爪”等茶叶去炒河虾仁了。美食家高阳在《古今食事》里曾提及：“翁同龢创制了一道龙井虾仁，即西湖龙井茶叶炒虾仁，真堪与蓬房鱼匹配。”</br>相传，杭州厨师受苏东坡词《望江南》“且将新火试新茶，诗酒趁年华”的启发，选用“色绿、香郁、味甘、形美”的明前龙井新茶和鲜河虾仁烹制而成20世纪20年代起，龙井虾仁流行于杭州百姓家庭中；30年代时，常熟厨师将其列入菜谱中；1956年，龙井虾仁名列杭州名菜中；1972年美国总统尼克松访华时，周恩来总理在杭州设宴招待，菜单上就有此菜。"
            },
            {
                "title":"西湖醋鱼标题.png",
                "img":"西湖醋鱼.jpg",
                "content":"西湖醋鱼（West Lake Fish in Vinegar Gravy），别名为叔嫂传珍，宋嫂鱼，是浙江省杭州市的一道传统地方风味名菜，属于浙菜系。西湖醋鱼选材精细，通常选用一斤半左右的草鱼。烹制时，火候要求严，仅能用三四分钟烧得恰到好处。盛菜时，浇上一层糖醋。成菜色泽红亮，吃起来，鱼肉嫩美，带有蟹味，酸甜可口，别具特色。2018年9月10日，“中国菜”正式发布，“西湖醋鱼“被评为浙江十大经典名菜。"
            },{
                "title":"片儿川标题.png",
                "img":"片儿川.jpg",
                "content":"片儿川是浙江省杭州市的一道传统特色名菜，也是杭州奎元馆的名点，该菜品的浇头主要由雪菜、笋片、瘦肉片组成，鲜美可口。已有百余年历史，最早由杭州老店奎元馆首创，其特色在于倒笃菜和笋片的鲜美，让食客吃后回味无穷。片儿川的价格适中，是杭州市民最喜爱的日常小吃之一。</br>南宋以来，杭州话多带“儿”音，如“筷子”则念做“筷儿”，且“儿”音较之现在的北方音更为厚重，又因“氽”与“川”同音，本是菜料皆成“片儿状”，于是 “片儿氽”就叫成了“片儿川”。另有一说法：传说苏东坡在杭州当官的时候说过这样一句话：“无竹令人俗，无肉令人瘦”。倒笃菜、冬笋、肉丝，片儿川选用的这几样配料据说也是有讲究的。将这三样材料切成片，然后在沸水中氽一下，据说这便是“片儿川”名字的由来。"
            }
        ]
    }
    return hangZhou;
}
//1金华数据
function getJinHuaData(){
    var JinHua = {
        "site":
            {
                "logo":"金华+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在金华+箭头.png","食在金华文字.png"],
                "play":["游在金华+箭头.png","游在金华文字.png"]
            },
        "atrBanner":"忆金华.png",
        "intro": "金华，古称婺州，浙江省地级市，长江三角洲中心区27城之一 [1]  ，自秦王政二十五年（前222年）建县，因其“地处金星与婺女两星争华之处”得名金华，简称金，古称婺州；金华地处金衢盆地东段，为浙中丘陵盆地地区，地势南北高、中部低。“三面环山夹一川，盆地错落涵三江”是金华地貌的基本特征。",
        "attractions":[
            {
                "name" :"盘龙谷",
                "intro":"别致典雅的茶楼、山居、木屋点缀湖光山色之间，随处可见的小桥流水，不啻现代版的世外桃源。盘龙谷藏于历山山脉之中，山势蜿蜒起伏，犹如一条巨龙似隐似现，俯卧在盘龙湖畔。盘龙谷远离尘世，拥山抱水。山林茂盛，水波碧蓝，可说是得天独厚。",
                "img":["盘龙谷1.jpg","盘龙谷2.jpg"]
            },
            {
                "name" :"社姆山",
                "intro":"以“东城社姆双并肩，景色奇秀赛方岩，禅寺古幽渊源深，人文史话灿若星”闻名遐迩。雄奇的狮子山和白象山对峙扼守为门户，清澈的盘溪水为腰带，山势蟠龙伏虎，重峦叠嶂，林海吟涛声，花树吐芬芳。寺院殿宇飞檐翘角，泛金流丹。海拔720余米的天鹅峰如翡翠屏耸立于寺院之后。其中，源于天鹅峰的社姆坑水斗蛇行如银练，穿云破雾飘飘悠悠而下，蜿蜒向东注入斤丝龙潭中，再流入盘溪。　境内岩石千姿百态，山间松树迎风，谷旁藤蔓摇曳，游人目及之物，皆独具风姿和神韵。 ",
                "img":["社姆山1.jpg","社姆山2.jpg"]
            },
            {
                "name" :"双龙洞",
                "intro":"金华双龙洞距金华市区约8公里，坐落在海拔350-450多米的北山南坡，除底层的双龙洞之外，还有中层的冰壶洞和最高的朝真洞。双龙洞分内、外两洞，内洞与外洞仅相隔5米，有一块巨大石屏相隔，仅留长10米，宽3米多的地下河水道。水道水面离地下河顶灰岩仅有0.30米左右的间隙，进内洞须仰卧小舟而入。外洞高大明亮，洞高66余米，长、深各33余米，面积1200多平方米。洞内陈放着一排排石桌、石椅，可容千人品茶避暑。从这里可以知道，双龙洞的景色是无比的美。双龙洞是国家重点风景名胜区，位于浙江省金华市北郊的金华山西南山麓。林海莽莽，水流潺潺，年平均气温比城区低 6 ℃。是一处以山岳森林为背景。地下悬河、岩溶奇观、赤松祖庭为特色。观光旅游、康体休闲、避暑纳凉、海外朝圣为主要功能。 ",
                "img":["双龙洞1.jpg","双龙洞2.jpg"]

            }],
        "foodBanner":"食在金华.png",
        "foods":[
            {
                "title":"金华火腿.png",
                "img":"金华火腿.jpg",
                "content":"金华火腿，浙江省金华市特产，中国国家地理标志产品。金华火腿色泽鲜艳，红白分明，瘦肉香咸带甜，肥肉香而不腻，美味可口；内含丰富的蛋白质和脂肪，多种维生素和矿物质，制作经冬历夏，经过发酵分解，营养成分更易被人体所吸收，具有养胃生津、益肾壮阳、固骨髓、健足力、愈创口等作用。其外形皮薄爪细，皮色黄亮、形似琵琶、肉色红润、香气浓郁，以色、香、味、形“四绝”闻名于世。"
            },
            {
                "title":"金华酥饼.png",
                "img":"金华酥饼.jpg",
                "content":"金华酥饼历史悠久，相传唐代开国名臣程咬金曾在金华开过酥饼店，是酥饼行业的祖师。以后代代相传，名气越来越大，成为闻名遐迩的传统特产。金华酥饼以白面粉、雪里蕻干菜、肥肉以及芝麻、菜油、饴糖等作原料，经过擀面做坯，裹馅和烘烤，制成蟹壳那么大一只酥饼，两面金黄，上面满布芝麻，中间以干菜肉为馅，上下各有10余层，每层薄如纸。香松酥饼，味道极佳。进口酥碎，遇湿消融，即使牙齿脱尽的人也有门福品尝其味；酥饼还以浓烈的陈香和鲜咸的回味显示其特有的魅力，强烈地吸引着顾客，民间有李白“闻香下马”的传说。"
            },{
                "title":"肉麦饼.png",
                "img":"肉麦饼.jpg",
                "content":"永康肉麦饼又称永康肉饼，外省称永康食果。是浙江省金华市永康市的一种传统特色小吃。永康农家在丰收喜庆季节向有制作肉麦饼作为佐餐的传统。“永康肉麦饼”厚实而粗糙，虽然相貌不佳。但大家常说：“人不可相貌”，它与平时小吃店常见的面饼还是有区别的，馅更厚实，皮更有韧劲，一咬，就能觉出差别来：永康肉饼内的鲜汁顺口流出，干菜肉香扑鼻而来。永康肉麦饼以制作简便，配料讲究，做工考究，价廉物美，别具风味而闻名。因价廉物美，经济实惠甚得人们所喜爱，凡是到过永康的人，总不免要品尝几个。"
            }
        ]
    }
    return JinHua;
}
//2衢州数据
function getQuZhouData(){
    var quZhou = {
        "site":
            {
                "logo":"衢州+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在衢州+箭头.png","食在衢州文字.png"],
                "play":["游在衢州州+箭头.png","游在衢州文字.png"]
            },
        "atrBanner":"忆衢州.png",
        "intro": "衢州南接福建南平，西连江西上饶、景德镇，北邻安徽黄山，东与省内金华、丽水、杭州三市相交，有“四省通衢，五路总头”之称。衢州是一座历史文化名城。始建于东汉初平三年（192），有六千多年的文明史、一千八百多年的建城史，1994年被命名为国家历史文化名城，文脉绵延流长，有江南地区保存最好的古代州级城池衢州府城、全国重点文物保护单位衢州府城墙，复建的天王塔院、文昌阁等历史文化古迹。衢州是圣人孔子后裔的世居地和第二故乡，是儒学文化在江南的传播中心，历史上儒风浩荡、人才辈出，素有“东南阙里、南孔圣地”的美誉。",
        "attractions":[
            {
                "name" :"九华山",
                "intro":"九华山风景区西北隔长江与天柱山相望，东南越太平湖与黄山同辉。是安徽省“两山一湖”（九华山、太平湖、黄山）旅游开发战略的主景区，由11大景区组成。南望黄山，北瞰长江，东监太平湖，方圆120公里，保护范围174平方公里，中心位置（九华街）地理坐标为东经一百一十七度八分，北纬三十度五分。九华山风景区是首批国家重点风景名胜区，国家5A级旅游区、全国文明风景旅游区示范点，国家首批自然与文化双遗产地，其山峰九华山与山西五台山、浙江普陀山、四川峨眉山并称为中国佛教四大名山。",
                "img":["九华山1.jpg","九华山2.jpg"]
            },
            {
                "name" :"龙游石窟",
                "intro":"龙游石窟是我国古代最高水平的地下人工建筑群之一，也是世界地下空间开发利用的一大奇观。龙游石窟集人文、艺术、文化、工程技术于一体，是中华民族博大精深的体现。龙游石窟可以追溯到公元前212年甚至更加久远，建造的年代仍然不明，是至今被发现的世界上最大的古代地底人造建筑。1992年，世人传说中的“无底塘”，在四个当地的农民的隆隆水泵声中“水落石出”，展示在人们面前的一个个石窟，便是龙游石窟。不仅建造的年代不明，这些石窟的成因和用途更是众说纷坛，成为难以破解的千古之谜，也被当地人称之为“世界第九大奇迹”，是国家AAAA级景区。 ",
                "img":["龙游石窟1.jpg","龙游石窟2.jpg"]
            },
            {
                "name" :"衢州城墙",
                "intro":"衢州城墙始建于东汉初平三年（192年），原为土墙，大约在唐以后才开始以砖石筑墙。北宋宣和三年（1121年）郡守高至临重修旧城，奠定了后世的规模，当时的城墙“周回四千五十步”，建有六门：东曰迎和、南曰礼贤、西曰航远、北曰永清、小南曰清将、小西曰和丰，城外建有濠沟。此后于南宋绍兴、嘉定、元至正、明弘治、嘉靖、万历、天启、崇祯年间多次重修。清顺治至民国五年也曾维修20余次。2006年6月，衢州府城正式被国务院核定公布为第六批全国重点文物保护单位，衢州府城是我国东南重镇的实物依据，是研究府城一级城池格局、规模等方面的实物标本。此外，衢州府城在选址和城台形制等方面皆有独到之处，具有很高的历史、艺术、科学价值。",
                "img":["衢州城墙1.jpg","衢州城墙2.jpg"]

            }],
        "foodBanner":"食在衢州.png",
        "foods":[
            {
                "title":"龙游发糕.png",
                "img":"龙游发糕.jpg",
                "content":"龙游发糕，浙江省龙游县是特产，中国国家地理标志产品。龙游发糕制作工艺独特，配料考究，成品色泽洁白如玉、孔细似针、闻之鲜香扑鼻、食之甜而不腻、糯而不粘。其最大的特色是在制作过程中加入适量糯米酒发酵而成，营养丰富，尤其适合老年人、儿童食用。因“发糕”为“福高”之谐音，寓“年年发、步步高”之吉祥涵意，成为当地百姓逢年过节必备名点。2007年01月12日，原国家质检总局批准对“龙游发糕”实施地理标志产品保护。"
            },
            {
                "title":"衢州麻饼.png",
                "img":"衢州麻饼.jpg",
                "content":"衢式月饼，是浙江省衢州市的地方特色中秋节食品，是浙江省衢州市的特产。其特点是以芝麻为重要原料，所以衢式月饼也被称为“衢州麻饼”。其主要代表有“杜泽桂花月饼”和“邵永丰麻饼”。据《衢州府志》、《柯城区志》记载：贞元四年间年仅17岁的白居易随父白季庚到衢任别驾时，白居易对衢州麻饼赞赏的诗在衢州麻饼店业广为流传。当时的衢州也盛行吃胡饼，后来“胡饼”又改称“麻饼”，中秋节时饼店业推出各种不同的麻饼，成为人们赏月时品尝的佳品。从此，麻饼成为在衢州这座古老城市食文化中的首推点心。"
            },{
                "title":"三头一掌.png",
                "img":"三头一掌.jpg",
                "content":"三头一掌（兔头、鸭头、鱼头、鸭掌）是浙江衢州传统的地方风味小吃，其中最具代表性的是兔头，其肉质细腻、疏松，具有高蛋白，低脂肪，低胆固醇，同时还有磷、钙、维生素及卵磷脂等有效成份，有利于皮肤粘膜的健康和代谢，故有美容肉、健康肉之称。三头一掌起源上世纪80年代。衢州“三头”中，面市最早的是兔头，名气最大的也是兔头，其肉质细腻、疏松，有“美容肉”、“健康肉”之称。。"
            }
        ]
    }
    return quZhou;
}
//3丽水数据
function getLiShuiData(){
    var liShui = {
        "site":
            {
                "logo":"丽水+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在丽水+箭头.png","食在丽水文字.png"],
                "play":["游在丽水+箭头.png","游在丽水文字.png"]
            },
        "atrBanner":"忆丽水.png",
        "intro": "丽水，古称处州，浙江省辖陆地面积最大的地级市；水被誉为“浙江绿谷”。2005年1月，丽水市被命名为第三批国家级生态示范区；2009年12月，相继被命名为“中国优秀旅游城市”、“中国优秀生态旅游城市”。2010年12月23日，浙江省关注森林组委会正式发文授予丽水“浙江省森林城市”称号。丽水获评首批国家级生态保护与建设示范区。丽水人属江浙民系使用吴语，丽水文化属吴越文化。",
        "attractions":[
            {
                "name" :"古堰画乡",
                "intro":"古堰画乡位于莲都区碧湖镇和大港头镇，距市区仅 20 公里，包含通济堰和瓯江莲都段两大国家 5 级旅游单体，即“古堰”和“画乡”两部分。“古堰”指的是通济堰，通济堰建于公元505年，至今仍然发挥着巨大的灌溉效能，还在为碧湖平原的百姓造福。古镇古街，古亭古埠头、青瓷古窑址、大大小小的古村落和古樟树群无不展示的江南水乡的古镇风貌。“画乡”指的便是大港头镇这边的古街。八百里瓯江，数不尽的碧水白帆，每一幕都是一幅画。这里诞生了著名的\"丽水巴比松画派\"，早已成为中国美术写生、艺术创作、油画生产基地和摄影创作基地。",
                "img":["古堰画乡1.jpg","古堰画乡2.jpg"]
            },
            {
                "name" :"蛟龙大峡谷",
                "intro":"蛟龙谷美在山高沟深：东面是海拔高度1216米高大雄伟古方山，由花岗岩岩体构成，抬头仰望，都是陡峭险峻的岩壁；西面是海拔高度1182米挺拔俊秀的石牛山。站在幽深峡谷的谷底，仿佛到了一个与世隔绝的清净世界，只是听到潺潺流水声。清晨的时候，整个峡谷聚起层层薄雾，随着湿润的清风飘进四周的山岚，形成了光波浩渺。既可以凭山远眺，也可登高俯览，多样景观层层递进，是观奇岩怪石与云海日出的绝佳位置。",
                "img":["蛟龙大峡谷1.jpg","蛟龙大峡谷2.jpg"]
            },
            {
                "name" :"缙云仙都",
                "intro":"在缙云，民间流传着这样一句话：“黄帝缙云·人间仙都”。仙都这个名字听着就给人一种仙风道骨的感觉，仙都的景色更是缥缈若仙，完全配得上这个名字。缙云境内九曲练溪，十里画廊，山水飘逸，云雾缭绕。 相传“仙都” 二字由玄宗钦点，盛名一直传到今天。仙都景色美在天然，奇峰异石，千姿百态，兼有“桂林之秀、黄山之奇、华山之险”。仙都景区包括仙都、黄龙、岩门、大洋山四大景区和鼎湖峰、倪翁洞、小赤壁、芙蓉峡等300多个景点。鼎湖峰是整个仙都风景名胜区的核心，状如春笋，直刺云天，被誉为 “天下第一峰”、“天下第一笋” 。峰巅苍松翠柏间蓄水成池，据说轩辕黄帝在峰顶用鼎炼丹，把峰压成了凹形，形成鼎湖。",
                "img":["缙云仙都1.jpg","缙云仙都2.jpg"]

            }],
        "foodBanner":"食在丽水.png",
        "foods":[
            {
                "title":"缙云烧饼.png",
                "img":"缙云烧饼.jpg",
                "content":"缙云烧饼也称桶饼，是浙江省丽水市缙云县的一种传统小吃，属于浙菜系；据说该小吃有650余年的历史。传说，轩辕帝曾在缙云山鼎湖峰架炉炼丹，非常专注，饿了就抓一块面团贴在丹炉壁上烤着吃。轩辕黄帝驭龙升天后，当地百姓就用陶土，模仿黄帝的丹炉，制造陶炉，烧烤面团食用。后来，这种在陶制炉膛内贴上饼坯，以炭火烧烤成熟饼的制作技艺，是缙云，金华等地的特有传统技艺。缙云烧饼广为流传，最为正宗非缙云本地不可。"
            },
            {
                "title":"豆腐娘.png",
                "img":"豆腐娘.jpg",
                "content":"豆腐娘这个名字，其实就是豆腐之母的意思，磨好的豆腐娘过滤后，煮好，下卤水卤过，用滤布和豆腐架过好，就是豆腐。豆腐娘名字好听而古怪，然而制作简便，经济实惠，营养丰富，味道鲜美，是浙南独有的特产。制作上，当年的嫩豆是首选，味道特别鲜美，上年的老豆子次之，陈年的豆子就略差些。但是比较起来，陈年的豆子做豆腐娘也好过做豆腐。因为，豆是自己种的，家中又备手磨，随时可以制作，简便便利。山区人民好客，不论平时是否来往，只要你到了山村，“进门便是客”，主人都会热情接待。“山头地方”除山蔬野菜外，高级食品——当家菜豆腐娘请客，已是传统美俗。。"
            },{
                "title":"缙云土面.png",
                "img":"缙云土面.jpg",
                "content":"缙云土面也称爽面、索面卵。是浙江丽水市缙云县的的一种特色传统美食。烧制时可拌、可炒、可烧汤。因其细长、柔韧、滑软而成为缙云民间节庆和待客的传统佳肴。与缙云烧饼、红烧溪鱼合称缙云三大美食。1300多年前，勤劳智慧的缙云人创造了缙云土面。1300多年来，缙云土面与缙云人的生活紧密联系，已经成为缙云人记忆中的一部分，并在缙云的民俗史上留下了属于自己的特殊印记。时至今日，它随着市场经济的发展，已经进入到上海、杭州、宁波等地的超市，成为普通市民的餐桌上的一道美味食品，其爽滑的口味、纯粹的面香，受到了越来越多人的欢迎。"
            }
        ]
    }
    return liShui;
}
//4绍兴数据
function getShaoXingData(){

    var shaoXing = {
        "site":
            {
                "logo":"绍兴+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在绍兴+箭头.png","食在绍兴文字.png"],
                "play":["游在绍兴+箭头.png","游在绍兴文字.png"]
            },
        "atrBanner":"忆绍兴.png",
        "intro": "绍兴，简称“越”，古称越州，地处中国华东地区、浙江省中北部、杭州湾南岸，东连宁波市，南临台州市和金华市，西接杭州市，北隔钱塘江与嘉兴市相望，是长三角城市群重要城市，也是著名的水乡、桥乡、酒乡、书法之乡、名士之乡。绍兴素称“文物之邦、鱼米之乡”。著名的文化古迹有兰亭、禹陵、鲁迅故里、沈园、柯岩、蔡元培故居、周恩来祖居、秋瑾故居、马寅初故居、王羲之故居、贺知章故居等。",
        "attractions":[
            {
                "name" :"兰亭",
                "intro":"兰亭，位于浙江省绍兴市西南13公里的兰渚山麓，是东晋著名书法家，书圣王羲之的园林住所，是一座晋代园林。相传春秋时期越王勾践曾在此植兰，汉时设驿亭，故名兰亭。现址为明嘉靖二十七年（公元1548年）时任郡守沈启重建，而后几经改建，于1980年修复成明清园林的风格。兰亭里还有曲水流觞亭、右军祠等建筑。流觞亭面阔三间，四面有围廊。亭前有一弯弯曲曲的水沟，水在曲沟里缓缓的流过，这就是有名的曲水。当年王羲之等人就是列坐在曲水岸边，有人在曲水的上游，放上一只盛酒的杯子，酒杯由荷叶托着顺水流漂行，到谁处停下，谁就赋诗一首，作不出者罚酒一杯。现在兰亭景点有“曲水宴”的表演节目，参与的游客，可以效仿古人，焚香礼乐、曲水流觞，体味当年曲水邀欢的情趣。",
                "img":["兰亭1.jpg","兰亭2.jpg"]
            },
            {
                "name" :"鲁迅故里",
                "intro":"绍兴鲁迅故里位于浙江省绍兴市越城区鲁迅中路241号，是鲁迅诞生和青少年时期生活过的故土，修缮、保护于1953年，占地面积50公顷。绍兴鲁迅故里有鲁迅故居、百草园、三味书屋、鲁迅祖居、土谷祠、长庆寺、鲁迅笔下风情园、绍兴鲁迅纪念馆等一大批与鲁迅有关的人文古迹。绍兴鲁迅故里保护和延续绍兴古城的传统风貌的典型，打造成生态型的“文物森林”，体现了绍兴古城保护的完整性，被誉为中国名人故居保护的范例。1988年1月13日，绍兴鲁迅故居被国务院公布为第三批全国重点文物保护单位。",
                "img":["鲁迅故里1.jpg","鲁迅故里2.jpg"]
            },
            {
                "name" :"越王台",
                "intro":"越王台位于浙江省绍兴市区卧龙山东南麓，系后人为缅怀越王勾践卧薪尝胆复国雪耻而建，据《越绝书》记载：“越王台规模宏大，周六百二十步，柱长三丈五尺三寸，溜高丈六尺。宫有百户，高丈二尺五寸。”后屡建屡毁。1939年，日军军机轰炸荣，越王台被义务劳动参加炸毁。1980年根据南宋嘉定十五年绍兴知府汪纲所建越王台遗址重建越王台城楼。现今的越王台下部分为砖砌结构的越王台基座，系宋代建筑遗址，基座中间有一高7米的拱形大门；上部分为宫殿式建筑，现为“越国史迹陈列”厅，以图片和实物将二千五百年前的越国历史展示给大家。",
                "img":["越王台1.jpg","越王台2.jpg"]

            }],
        "foodBanner":"食在绍兴.png",
        "foods":[
            {
                "title":"柯桥豆腐干.png",
                "img":"柯桥豆腐干.jpg",
                "content":"柯桥豆腐干是浙江绍兴传统的地方名吃之一，以其历史悠久、制作精细、风味独特而驰名省内外。柯桥豆腐干原名“五香茶干”。辅料特多，做工考究。它选用优质黄豆为主要原料，配以大茴、小茴、桂皮、丁香、山萘、黄酒、甜面酱、冰糖等十几种辅料精制而成。用柯桥豆腐干下酒，不仅味美，而且经济实惠，所以一些夜航船的老大与伙伴们每次途经柯桥时，总要上去买几封豆腐干，喝酒品尝后继续航行。由此，柯桥豆腐干的声誉随航船所到之处广为流传，风行于杭嘉湖、浙东一带及江苏、上海等地。"
            },
            {
                "title":"霉干菜.png",
                "img":"霉干菜.jpg",
                "content":"霉干菜又称乌干菜，是浙江绍兴一种价廉物美的传统名菜，也是绍兴的著名特产。生产历史悠久，主产于浙江绍兴、台州、慈溪、余姚、萧山、桐乡等地和广东惠阳一带。乌干莱早在《越中便览》中就有记述：“乌干菜有芥菜干、油菜干、白菜干之别。芥菜味鲜，油菜性平，白菜质嫩，用以烹鸭、烧肉别有风味，绍兴居民十九自制。”可见那时绍兴乌干莱的制作已极为普遍了。浙江产者以细叶、阔叶雪里蕻或九头芥腌制。广东产者以一种变种芥菜腌制，也有用萝卜茎叶或榨菜叶腌制的，但质量差，且有苦味。此外，江苏、安徽、福建等地亦产。"
            },{
                "title":"嵊州榨面.png",
                "img":"嵊州榨面.jpg",
                "content":"嵊州榨面，历史悠久，制作精细，是赠送亲朋之礼品。前清时已驰名，是浙江嵊州地方传统名吃之一。嵊州榨面主要分布于崇仁、中南、黄泽、临城等区，其中以崇仁区为主要产区。湖荫、溪滩榨面，享有盛名。榨面烧煮方便，荤素皆宜，炒煮都可，并可做羹、菜。如加鸡蛋或打蛋化于榨面中煮，就叫鸡子榨面，在乡里是用来招待新女婿或贵客的点心。榨面是嵊州人赠送外地亲戚必不可少的特产之一。外地回乡探亲作客者，亦多携带榨面，回家与家人团聚吃面品尝为一大快事。1962年马寅初先生回嵊探亲，亦买崇仁榨面带往北京。逢年过节，集市上榨面买卖更兴旺。"
            }
        ]
    }
    return shaoXing;
}
//5湖州数据
function getHuZhouData(){
    var huZhou = {
        "site":
            {
                "logo":"湖州+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在湖州+箭头.png","食在湖州文字.png"],
                "play":["游在湖州+箭头.png","游在湖州文字.png"]
            },
        "atrBanner":"忆湖州.png",
        "intro": "湖州是一座具有2300多年历史的江南古城，地处浙江省北部，东邻嘉兴，南接杭州，西依天目山，北濒太湖，与无锡、苏州隔湖相望，是环太湖地区因湖而得名的城市。处在太湖南岸，东苕溪与西苕溪汇合处。建制始于战国，有众多的自然景观和历史人文景观，如莫干山、南浔古镇等。湖州是国家历史文化名城、国家森林城市、国家园林城市、国家卫生城市，有双渎雪藕、太湖百合等土特产品，同时也是近代湖商的发源地。",
        "attractions":[
            {
                "name" :"莫干山",
                "intro":"莫干山，国家AAAA级旅游景区、国家级风景名胜区、国家森林公园，为天目山之余脉，位于浙江省湖州市德清县境内，美丽富饶的沪、宁、杭金三角的中心。莫干山是中国四大避暑胜地之一，众多的历史名人，既为莫干山赢得了巨大的名人效应，更为莫干山留下了难以计数的诗文、石刻、事迹以及二百多幢式样各异、形状美观的名人别墅莫干山因春秋末年，吴王阖闾派干将、莫邪在此铸成举世无双的雌雄双剑而得名，是中国著名的休闲旅游及避暑胜地。莫干山山峦连绵起伏，风景秀丽多姿，景区面积达43平方公里，它虽不及泰山之雄伟、华山之险峻，却以绿荫如海的修竹、清澈不竭的山泉、星罗棋布的别墅、四季各异的迷人风光称秀于江南，享有“江南第一山”之美誉。",
                "img":["莫干山1.jpg","莫干山2.jpg"]
            },
            {
                "name" :"南浔古镇",
                "intro":"南浔古镇位于湖州市南浔区，地处江浙两省交界处。明清时期为江南蚕丝名镇，是一个人文资源充足、中西建筑合璧的江南古镇。南浔古镇景区占地面积34.27平方公里，古镇保护范围东界至宜园遗址东侧起，西界至永安街起，南界自嘉业堂藏书楼及小莲庄起，北界至百间楼，保护面积约168公顷，其中重点保护区面积88公顷。 旅游景区共分三大区块。第一块是南浔旅游景点富集区，张石铭故居、刘氏梯号等景点分布其中。第二块是由小莲庄、嘉业堂、文园等景点组成的中心景区。 第三块是以东大街以东的张静江故居和百间楼为主的东北区块。南浔古镇素有“文化之邦”和“诗书之乡”之称，出现过许多著名人物，如民国奇人张静江，“西泠印社”发起人之一张石铭，著名诗人、散文家徐迟等。。",
                "img":["南浔古镇1.jpg","南浔古镇2.jpg"]
            },
            {
                "name" :"小莲庄",
                "intro":"小莲庄是始建于清光绪年间的古典园林建筑。属于南浔首富刘镛（字贯经）的私家园林、家庙及义庄所在，位于南浔镇南栅万古桥西，北临鹧鸪溪，西与嘉业堂藏书楼隔河相望。园林以荷花池为中心，依地形设山理水，形成内外两园。内园是一座园中园，处于外园的东南角，以山为主体。仿唐代诗人杜牧《山行》之意，凿池栽芰，叠石成山。山道弯弯，半山苍松，半山红枫，枫林松径，山路回转，小巧而又曲折，宛然一座大盆景。此园与外园以粉墙相隔，又以漏窗相通，似隔非隔，内外园山色湖光，相映成趣。外园以荷池为中心，池广约十亩，沿池点缀亭台楼阁，步移景异，颇具匠心。",
                "img":["小莲庄1.jpg","小莲庄2.jpg"]

            }],
        "foodBanner":"食在湖州.png",
        "foods":[
            {
                "title":"千张包子.png",
                "img":"千张包子.jpg",
                "content":"千张包子是浙江湖州传统的名点。清光绪四年（ 1878 ），湖州菜贩丁莲芳以鲜猪肉、千张为原料，裹成长枕形千张包子，配细丝粉，名曰千张包子丝粉头，肩挑叫卖。后听取顾客意见，在肉馅中添进笋衣、开洋，并改为五厘米见方的三角形包子，细丝粉改用以绿豆为原料的粗丝粉，切成 4-5 厘米，使外形、馅料和辅料等方面均有别于家常色彩而独具一格。后又听取顾客意见，不断创新改进，成为湖州名点。此名点以用料讲究、烹调有术、味道鲜美而闻名遐迩。包子所用的千张和丝粉都是特制的，千张薄而韧，包得密不透气，香浓汁鲜；丝粉白而粗，久煮不糊，柔软入味。"
            },
            {
                "title":"芽麦塌饼.png",
                "img":"芽麦塌饼.jpg",
                "content":"麦芽塌饼是江浙一带的特色传统茶点，当地特产之一。它是一种乡土点心。清明节这里的人们喜欢用麦芽塌饼做早点，在田里忙得腹中空空时，麦芽塌饼又成了人们垫饥的好干粮，而摆起场面吃“熏青豆茶”时，自然也少不了这种应时美味。麦芽塌饼的特色主要取决于制作该饼的重要原料泥湖菜和麦芽。泥胡菜在浙北桐乡一带俗称草头，白虎子。是清明时期大家自制的美食且营养丰富。"
            },{
                "title":"长兴爆鳝丝.png",
                "img":"长兴爆鳝丝.jpg",
                "content":"长兴爆鳝丝是雉城传统的特色名菜。色、香、味俱佳，远近闻名。主料鳝鱼选料讲究，须用大小一式的鳝鱼丝，鳝鱼划丝浸渗后，用“五油”(素油、荤油、麻油、酱油、糟油)“三辣”(老姜、青椒、胡椒粉)配以火腿丝等，用文火慢爆烹制成，鲜美可口，风味独特。相传，乾隆游江南到长兴，品尝此菜后赞叹不绝，后被列为宫廷名肴。长兴县临太湖，毗天目，全具盛产鳝鱼，品质兼优，且制作鳝鱼的技艺 十分高超。相传，乾隆皇帝巡视江南之际，杭州官府通报各地名厨高手烹菜 献艺。据称“长兴爆鳝丝”夺得魁首，被乾隆赞誉为“江南难得一味”。此菜口感香脆，解乏健脑，是缓解疲劳的上品。"
            }
        ]
    }
    return huZhou;

}
//6嘉兴数据
function getJiaXingData(){
    var jiaXing = {
        "site":
            {
                "logo":"嘉兴+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在嘉兴+箭头.png","食在嘉兴文字.png"],
                "play":["游在嘉兴+箭头.png","游在嘉兴文字.png"]
            },
        "atrBanner":"忆嘉兴.png",
        "intro": "嘉兴，别称禾城，是浙江省地级市，长江三角洲中心区27城之一，嘉兴是国家历史文化名城，建制始于秦，有两千多年人文历史，自古为繁华富庶之地，素有“鱼米之乡”、“丝绸之府”美誉。嘉兴名人辈出，涌现出茅盾、徐志摩、金庸、王国维、丰子恺、张乐平等名家大师。嘉兴自然风光以潮、湖、河、海并存驰誉江南，拥有南湖、乌镇、西塘三个5A级景区，以及盐官（钱江潮）、南北湖、绮园、月河历史街区、梅花洲、九龙山、东湖、茅盾故居、徐志摩故居等著名景点，构成江南水乡特色；中共一大在嘉兴胜利闭幕，是中国共产党诞生地，成为中国近代史上重要的革命纪念地。",
        "attractions":[
            {
                "name" :"南湖",
                "intro":"南湖，旧称陆渭池，又称马场湖、滮湖 ，位于浙江省嘉兴市南湖区，地处嘉兴市城东南部，中心地理坐标：东经120°76′，北纬30°76′；景区占地面积约5.86平方千米，核心区占地面积2.76平方千米。京杭大运河嘉兴段主流经过北丽桥、城北桥至西丽桥分二水，一水向东入西南湖，一水向西仍为运河。秀水在绕城经过濠河，流入南湖 。南湖，由运河各渠汇流而成，上承长水塘和海盐塘，下泄于平湖塘和长纤塘，南湖四周地势低平，河港纵横。湖南北长，东西狭，水域面积约624亩，水深2至4米。2007年01月06日，浙江省旅游局公布南湖风景名胜区列为“浙江最值得去的五十个景区”；2010年5月，南湖景区创建为第一批全国廉政教育基地。2011年09月06日，国家旅游局批准南湖旅游区为国家AAAAA级旅游景区。",
                "img":["南湖1.jpg","南湖2.jpg"]
            },
            {
                "name" :"乌镇",
                "intro":"乌镇位于浙江省嘉兴市桐乡市，地处江浙沪“金三角”之地、杭嘉湖平原腹地，距杭州、苏州均为60公里，距上海106公里。属太湖流域水系，河流纵横交织，京杭大运河依镇而过。乌镇原以市河为界，分为乌青二镇，河西为乌镇，属湖州府乌程县；河东为青镇，属嘉兴府桐乡县。解放后，市河以西的乌镇划归桐乡县，才统称乌镇。乌镇是首批中国历史文化名镇、中国十大魅力名镇、全国环境优美乡镇、国家5A级旅游景区，素有“中国最后的枕水人家”之誉，拥有7000多年文明史和1300年建镇史，是典型的中国江南水乡古镇，有“鱼米之乡、丝绸之府”之称。有六千年历史，是全国二十个黄金周预报景点及江南六大古镇之一。",
                "img":["乌镇1.jpg","乌镇2.jpg"]
            },
            {
                "name" :"西塘",
                "intro":"西塘镇，隶属浙江省嘉兴市嘉善县，位于江浙沪三地交界处，古名斜塘，平川，东临姚庄镇，西靠天凝镇、陶庄镇，南接干窑镇，北与芦墟镇毗邻，中心地理位置坐标为东经120°53′，北纬30°56′，距嘉善市区10公里，全镇行政区域面积82.87平方千米（2017年）。西塘镇地处杭嘉湖平原水网地区，属于北亚热带南缘的东亚季风区。西塘镇辖18个村，4个社区，西塘镇人口91135人（2017年） ，2016年，西塘镇实现地区生产总值54.4亿元 。西塘历史悠久，是古代吴越文化的发祥地之一、江南六大古镇之一，为吴地方文化的千年水乡古镇。在春秋战国时期是吴越两国的交壤之境，素有“吴根越角”和“越角人家”之称。",
                "img":["西塘1.jpg","西塘2.jpg"]

            }],
        "foodBanner":"食在嘉兴.png",
        "foods":[
            {
                "title":"嘉兴粽子.png",
                "img":"嘉兴粽子.jpg",
                "content":"嘉兴粽子的历史源远流长。六、七千年前，先民们孕育了长江下游太湖流域早期新石器文化的代表——马家浜文化，这是中华民族古老文明的源头之一，也是我国稻作最早的起源地之一。汉唐以来，嘉兴发展成为中国历史上最主要的稻作区，被誉为“天下粮仓”。同时，嘉兴历史上还是我国重要的商品猪生产基地，肉鸡和鲜蛋产量和质量也很高。这些丰富优质的农副产品原料，为发展各类花色粽创造了十分有利的条件，这也是后来形成五芳斋粽子独特品质的一个重要因素。"
            },
            {
                "title":"印花糕.png",
                "img":"印花糕.jpg",
                "content":"嘉兴城乡旧时人家都备有印花糕模，逢年过节、婚丧嫁娶、为长者祝寿、给小孩庆满月、造房上梁、农时节令都要把糯、粳米粉蒸熟，用糕模印制图案各异的糖糕或有馅心的糕。糕模种类、形状不一，有寿桃、元宝、满龙(盘龙)、双鱼、如意、暗八仙、三牲等，还有用“寿”、“福”、“四季平安”、“黄金万两”等字配图的。如给长辈做寿，制做寿糕、寿桃；小孩满月，外婆家上门庆贺送上满龙糕，四周放上“福禄寿喜”糕，名曰“龙风呈样”。各种吉祥图案都甚具艺术意趣。"
            },{
                "title":"长安宴球.png",
                "img":"长安宴球.jpg",
                "content":"宴球的主要原料之一是鱼，有白鲢、花鲢、草鱼三种，以选用3斤以上的白鲢鱼最佳，因为此鱼肉细嫩活泛。而白鲢鱼有当年、隔年之分，后者为上；又有内塘鱼和养殖鱼之别，内塘鱼为优，因它吃草为主，养殖白鲢多吃油饼，多泥土气，鲜味欠佳。当年的尤甚。宴球的另一主要原料是肉，肉要用肥肉，选料讲究也颇多。海宁的“长安宴球”是一道美味佳肴，长安人一提起“长安宴球”大都会以一种自豪的口吻向你滔滔不绝地介绍：“宴球”是长安的一道名菜，写进《长安镇志》的。"
            }
        ]
    }
    return jiaXing;

}
//7舟山数据
function getZhouShanData(){
    var zhoushan = {
        "site":
            {
                "logo":"舟山+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在舟山+箭头.png","食在舟山文字.png"],
                "play":["游在舟山+箭头.png","游在舟山文字.png"]
            },
        "atrBanner":"忆舟山.png",
        "intro": "舟山市，位于浙江省东北部，东临东海、西靠杭州湾、北界上海市。舟山背靠上海、杭州、宁波等大中城市和长江三角洲等辽阔腹地，面向太平洋，具有较强的地缘优势，踞中国南北沿海航线与长江水道交汇枢纽，是长江流域和长江三角洲对外开放的海上门户和通道，与亚太新兴港口城市呈扇形辐射之势，境内拥有由国务院批准设立的大宗商品交易管理与监督中心。",
        "attractions":[
            {
                "name" :"东极",
                "intro":"东极地理位置独特，东极诸岛远离舟山本岛，距沈家门45公里，拥有大小26个岛屿和108个岩礁。岛外12海里就是公海。东极即是舟山群岛东端岛屿，同时也是中国海洋最东端的边境岛屿 ，“东极”——名副其实。其中庙子湖、青浜、东福山、黄兴为4个居人岛，是舟山群岛中海山风光和渔家风情最典型的岛屿，堪称绝佳的旅游、避暑、度假胜地。东极不仅有浓厚、古朴的渔家特色，更有那美不胜收的风光，它几乎包揽了真正意义上的阳光、碧海、岛礁、海味。气候宜人，水质清澈，是少有的纯洁之地。这里海面一年四季变化有常，静胜杭州西湖，一马平川；怒比钱塘秋潮，惊涛裂岸。东极诸岛有“云雾岛”美称，每年春、夏，岛顶上云雾飘绕，而海岸边却是阳光普照，蔚为奇观。东福山、叶子山奇山峻岩，巧夺天工，伟比泰山，险近两岳，怪如黄山，异似磐砣。",
                "img":["东极1.jpg","东极2.jpg"]
            },
            {
                "name" :"南长涂沙滩",
                "intro":"南长涂沙滩位于嵊泗本岛南侧中部海湾，与基湖沙滩有“姐妹沙”之称。两个沙滩仅以一座虎头山岗相隔。滩长2750米，宽200米，实由毗连的南长涂、高场湾和石柱3个沙滩组成，滩前亦有小屿。滩面洁净柔软，呈乳黄色，莹莹如新月之嵌于碧海青岗间。其中，南长涂与高场湾两沙滩衔接处，崖石拱立若石门，称大、小龙眼石。滩岸黑松深幽，层绿叠翠，尤当夕阳斜照，碧海微泛金光，静沙浮屿，富有诗画意境，此景即为著名的“长涂落日”。沙滩洁净柔软，呈乳黄色，宛如新月镶嵌于碧海青山之中。",
                "img":["南长涂沙滩1.jpg","南长涂沙滩2.jpg"]
            },
            {
                "name" :"普陀山",
                "intro":"普陀山风景名胜区位于浙江杭州湾以东约100海里，是舟山群岛中的一个小岛。全岛面积12.5平方公里，呈狭长形，南北最长处为8.6里，东西最宽外3.5公里。普陀山风景名胜区素有海天佛国、南海圣境之称，是首批国家重点风景名胜区。最高处佛顶山，海拔约300米。东达日本，北接登莱，南亘瓯闽，西通吴会，是中国的东大门。五代后梁贞明二年（公元916年），日僧慧锷自五台山请观音像归国，途经普陀山被大风所阻，于紫竹林结茅留居，建不肯去观音院。历朝相继在此兴建寺院，以供奉观音菩萨为主。普陀山也就成为中国四大佛教道场之一。",
                "img":["普陀山1.jpg","普陀山2.jpg"]

            }],
        "foodBanner":"食在舟山.png",
        "foods":[
            {
                "title":"大烤目鱼.png",
                "img":"大烤目鱼.jpg",
                "content":"大烤目鱼是一道菜品，为整条目鱼制作，将目鱼所有的触须全部塞进处理干净的目鱼身体内部，用特制的调料包进行卤制，成品后色泽光亮香气诱人，内壁不粘连，口感紧实。"
            },
            {
                "title":"红烧鲳鱼.png",
                "img":"红烧鲳鱼.jpg",
                "content":"家常红烧鲳鱼，是一道菜的菜名。鲳鱼体形侧扁成盘形，背较厚，口端位，无须，体色呈白身、银鳞、黑尾、线鳍，四色相配极为美观。菜品特色鲳鱼也叫平鱼，肉味有如鲻鱼的香味。其鱼肉中含有的不饱和脂肪酸W-3系列，经医学临床证明它是减少心血管疾病发生重要物资，鲳鱼胆固醇含量也低于所有的动物性食品，鲳鱼肉厚、刺少、味佳，营养丰富，是天然营养佳品。鲳鱼体形侧扁成盘形，背较厚，口端位，无须，体色呈白身、银鳞、黑尾、线鳍，四色相配极为美观。"
            },{
                "title":"黄鱼羹.png",
                "img":"黄鱼羹.jpg",
                "content":"黄鱼羹是浙江省传统的地方名菜，属于浙菜系。黄鱼去鳞洗净，取鱼肉切丁；笋、海参洗净切丁；切成斜片状；蛋打匀，备用，热锅加油，放葱段爆香，捞起葱段，加水，放入黄鱼、笋、海参、火腿、豆瓣、盐、味精、姜水，翻炒煮熟，淋上生粉水及蛋，起锅前浇上香油即可。此汤味道鲜美，营养丰富，适合各类人群食用。"
            }
        ]
    }
    return zhoushan;
}
//8宁波数据
function getNingBoData(){
    var ningBo = {
        "site":
            {
                "logo":"宁波+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在宁波+箭头.png","食在宁波文字.png"],
                "play":["游在宁波+箭头.png","游在宁波文字.png"]
            },
        "atrBanner":"忆宁波.png",
        "intro": "宁波地处中国华东地区、东南沿海，大陆海岸线中段，长江三角洲南翼，东有舟山群岛为天然屏障，宁波属于典型的江南水乡兼海港城市，是中国大运河南端出海口、“海上丝绸之路”东方始发港。宁波是国家历史文化名城，公元前2000多年的夏代，宁波的名称为“鄞”，春秋时为越国境地，秦时属会稽郡的鄞、鄮、句章三县，唐时称明州。唐朝长庆元年（821年），明州州治迁到三江口，并筑内城，标志着宁波建城之始。明洪武十四年（1381年），取“海定则波宁”之义，改称宁波，一直沿用至今，是中国著名的院士之乡。",
        "attractions":[
            {
                "name" :"鼓楼",
                "intro":"宁波鼓楼始建于唐长庆元年(821年)，至今已有1100多年的历史。它是宁波历史上正式置州治、立城市的标志。宁波鼓楼是宁波市仅存的古城楼遗址，是国家文物重点保护的古建筑之一。游人登楼，便可一览宁波城之全貌。在那里，分布着大大小小的摊点，因此吸引了许多外地洋人游客前来参观这片名胜古迹。“谯楼鼓角晓连营”，元代诗人陈孚的诗句，体现了鼓楼在我国历史上的特殊地位。古时鼓楼设有报时的刻漏和更鼓，日常击鼓报时；战时侦察瞭望，还负有保城池，抵外侮的使命。当年明州刺史韩察将州治从小溪镇迁到宁波“三江口”，以中山广场到鼓楼这一带为中心，建起官置，又立木栅为城，后来又以大城砖石筑成城墙，历史上叫子城。子城的南城门就是现在的鼓楼。",
                "img":["鼓楼1.jpg","鼓楼2.jpg"]
            },
            {
                "name" :"南塘老街",
                "intro":"宁波南塘老街由宁波城旅投资发展有限公司开发建设，位于浙江省宁波古城南门外，曾经是旧宁波商贸文化聚集地的“南门三市”，位列宁波八大历史街区之一，同时也是宁波市“紫线规划”保护区域。呈南北走向，以祖关山路为界，分为南、北两街。街区保留了300多米的传统街巷，拥有文保单位1处，文保点6个。宋代著名学者袁燮的后裔世居于此，区域内现存的袁氏家族居宅建筑群规模最大，类型包括居住院落、祠堂、学校等，其他还包括甬水桥、永善亭和关圣殿等文保建筑。北街以传统文化为基调，以商业为内容，以城市旅游为发展方向。南街主打“城市休闲”概念，突显休闲生活。",
                "img":["南塘老街1.jpg","南塘老街2.jpg"]
            },
            {
                "name" :"天一阁",
                "intro":"天一阁，位于浙江省宁波市海曙区，建于明嘉靖四十年至四十五年（1561年—1566年），由当时退隐的明朝兵部右侍郎范钦主持建造，占地面积2.6万平方米，已有400多年的历史。天一阁藏书楼坐北朝南，为两层砖木结构的硬山顶重楼式建筑，通高8.5米，斜坡屋顶，青瓦覆上。 一层面阔、进深各六间，二层除楼梯间外为一大通间，以书橱间隔。阁前凿“天一池”通月湖，园林以“福、禄、寿”作总体造型，用山石堆成“九狮一象”等景点。天一阁及其周围园林具有江南庭院式园林特色。天一阁的藏书和建筑为研究书法、地方史、石刻、石构建筑和浙东民居建筑提供了实物资料。",
                "img":["天一阁1.jpg","天一阁2.jpg"]

            }],
        "foodBanner":"食在宁波.png",
        "foods":[
            {
                "title":"宁波年糕.png",
                "img":"宁波年糕.jpg",
                "content":"统年节食俗，南方地区春节食品，年糕作为一种食品在中国具有悠久的历史。宁波人吃年糕，主要是炒、汤二种。油菜蕻炒、荠菜炒、梭子蟹炒味道最佳。青菜肉丝年糕汤、雪菜肉丝年糕汤也较常见。我国地域广、风俗习惯各地不同，年糕的种类也多种多样。具有代表性的有北方的白糕、塞北农家的黄米糕、江南水乡的水磨年糕、西南的糯粑粑;台湾的红龟糕等。年糕有南北风味之别。北方年糕有蒸、炸两种，均为甜味;南方年糕除蒸、炸外，尚有片炒和汤煮诸法，味道甜咸皆有。"
            },
            {
                "title":"宁波汤圆.png",
                "img":"宁波汤圆.jpg",
                "content":"宁波汤圆是浙江省宁波市的一种传统小吃，是中国的代表小吃之一，也是春节，元宵节节日食俗，历史十分悠久。据传，汤圆起源于宋朝。当时明州（现浙江宁波市）兴起吃一种新奇食品，即用黑芝麻、猪脂肪油、少许白砂糖做馅，外面用糯米粉搓成球，煮熟后，吃起来香甜可口，饶有风趣。因为这种糯米球煮在锅里又浮又沉，所以它最早叫“浮元子”，后来有的地区把“浮元子”改称元宵。与大多数中国人不同，宁波人在春节早晨都有合家聚坐共进汤圆的传统习俗。"
            },{
                "title":"熏鱼.png",
                "img":"熏鱼.jpg",
                "content":"熏——俗作熏。会意。金文，上面象火烟冒出,中间是烟突(本古“窗”字),两点表示烟苔,下面是火焰。合起来是烟突冒烟。本义:火烟向上冒。《尔雅》“炎炎，熏也”，《诗·豳风·七月》“穹窒熏鼠，塞向墐户”。制作熏鱼，一般都会选用草鱼或者青鱼。而这样的约定俗成也只是到了当代才定型，之前一直是各色鱼种混杂出现，其中明确可考的就分别有：马鲛鱼、鲫鱼、鳜鱼、鲤鱼、塘鳢鱼等。具体用到草鱼或者青鱼的制法，直到清代中叶才出现明确的记载，只是早期会用柏树枝或者荔枝壳来熏制，到了清晚期以后才渐渐改用茶叶和大米。并在同时期出现了与熏鱼非常相似，一直到了当代不分彼此的“爆鱼”，但是熏鱼的称呼已然畅行天下，而爆鱼的叫法，至今仅见江南一隅。"
            }
        ]
    }
    return ningBo;

}
//9台州数据
function getTaiZhouData(){
    var taiZhou = {
        "site":
            {
                "logo":"台州+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在台州+箭头.png","食在台州文字.png"],
                "play":["游在台州+箭头.png","游在台州文字.png"]
            },
        "atrBanner":"忆台州.png",
        "intro": "台州地处中国华东地区、浙江中部沿海，东濒东海，北靠绍兴市、宁波市，南邻温州市，西与金华市和丽水市毗邻，依山面海。台州是江南水乡，水穿城过。历史上台州“河网密布、港汊交纵”，水乡风韵不亚于苏杭，有“走遍苏杭、不如温黄”之说。台州素以佛宗道源享誉海内外，是佛教天台宗和道教南宗的发祥地。天台山以其深邃的文化内涵孕育出了博大精深的“和合文化”。台州是浙江“七山一水两分田”的缩影，是山、海、水和谐的生态福地。",
        "attractions":[
            {
                "name" :"琼台仙谷",
                "intro":"琼台仙谷景区面积7.3平方公里，是一处比较典型的花岗岩地质地貌景观。灵溪为该景区的主景线。沿溪北行，两旁山壁对峙，山势峥嵘峻峭，奇峰纷呈，怪石错列，且愈入愈奇。著名的有“李白题诗岩”、“仙人聚会”、“双女峰”、“元宝石”、“佛手峰”等景。灵溪百丈坑有瀑如龙，下注成潭，潭水晶莹如黛，名“龙潭”。诗仙李白在《求崔山人百丈崖瀑布图》古风中极写其绝景：百丈素崖裂，四周丹壁开。龙潭中喷射，昼夜生风雷。但见瀑泉落……龙潭瀑布东侧有周灵王太子晋王乔修炼之金庭洞，伴王乔之长寿神龟，依然静伏洞中。洞上有飞鹤亭，纪念王乔跨鹤飞升。亭北有“通天”花岗岩牌坊，新建浙江一绝之“凌云栈道”，高达300米，真有“徐徐送客上青天”之意境。",
                "img":["琼台仙谷1.jpg","琼台仙谷2.jpg"]
            },
            {
                "name" :"桃江十三渚",
                "intro":"桃江十三渚风景区位于临海市桃渚镇，东临东海，北界三门，南距台州市区仅30公里，交通十分便捷。桃江十三渚集渚上田园风光、火山遗迹等资源于一体，峰岩怪石、洞天林立，是桃渚省级风景名胜区和临海国家地质公园的重要组成部分。由桃江风情、孔雀啄绿、火山遗迹、盘龙临海、将军遗风、绿客餐秀、长城峰林、石柱登天、桔岭流香、桃江画渚十个分景区组成。桃江十三渚因桃江将田畦割裂包围成大小不一、形状迥异的十三个渚而得名，渚，意为“水中的陆地”，十三渚区域面积达600多亩，星罗棋布，大的有80多亩，小的仅半亩。陆地与水域面积各半，是典型的湿地。渚上原来植有大量桃树，所以这里也称桃渚镇。桃江十三渚水碧田绿，赤山黛影，渚上风光随季节农作物更替呈五彩交替，这里是中国最美的田园风光。",
                "img":["桃江十三渚1.jpg","桃江十三渚2.jpg"]
            },
            {
                "name" :"天湖",
                "intro":"天湖风景区是天台山国家重点风景名胜区的核心景区之一，集山水聚人文于一体的国家，首批AAAA级旅游区，景区距天台县城2公里。岩奇、峰异、水秀、谷幽，诠释着天湖之自然奇趣。一条幽谷，奇岩耸峙，三湖层叠，瀑布成群，青山倒映，苍翠如染，天台山山水精华尽集于此。智者大师隐修说法，首创天台宗；苏东坡、米芾等历代名人题赋形成的摩崖石刻群；如来古洞、龙山武书院、古禅林寺、乾隆御碑、华东第一石刻弥勒大佛、财神殿等演绎着天湖之历史人文。攀岩、垂钓、滑索、水上乐园、游戏场和三星级度假酒店，打造起“休闲天堂”。天台山文化之精华，自然之奇趣，休闲之天堂----在天湖交汇。",
                "img":["天湖1.jpg","天湖2.jpg"]

            }],
        "foodBanner":"食在台州.png",
        "foods":[
            {
                "title":"八大碗.png",
                "img":"八大碗.jpg",
                "content":"仙居八大碗是浙江仙居地方民间招待宾朋的正统菜谱，历史悠久，选料地道，制作讲究，排列严谨，适用广泛，文化渊源深远，是仙居传统饮食文化的精典。八大碗分上四碗和下四碗，上四碗分别为：采荷莲子（或白扁豆）、湘子海参（或肉参）、铁拐敲肉、钟离翻碗肉；下四碗分别为：洞宾大鱼、仙姑肉皮泡、国舅泡鲞、果老豆腐。仙居传统菜谱为“八大碗”，寓意吉祥，“八”在中国文化中为吉祥之数。中国的古典文化中以阴阳、五行、八卦为纲，从而在后天八卦中延生出第八卦为坤（≡≡），坤为地、为母、为牛、为众多，又加上“八”是十以内偶数中的最大数，所以寓意出众多的吉祥之说。"
            },
            {
                "title":"天台扁食.png",
                "img":"天台扁食.jpg",
                "content":"天台扁食是浙江省台州市的一道特色小吃，属于浙菜系，因发源于天台县而得名，该菜品是麦粉制成的食物。属于春节等重大节日的年节食品。天台扁食也是麦粉制成的食物。有点象北方的饺子、南方的馄饨，但又有其自身的特点。它比饺子精致，比馄饨丰满。馅的多样性更非饺子、馄饨可比。把皮子两端弯成圆形，用拇指、食指捏合，就成了周围高中间低的扁食，跟人的耳朵确实相像，现做现烫，在汤中加点酱油醋，又热又香，那味道够你夸的。当然，也有现包现烤，放上油，撒上葱，淡黄油亮，是难得的下酒佳馔。"
            },{
                "title":"糟羹.png",
                "img":"糟羹.jpg",
                "content":"糟羹是浙江省台州市的一道传统小吃，属于浙菜系，该菜品也是台州地区元宵节的应节食品。糟羹食以米粉，薯粉或藕粉为主料，用肉丝、冬笋丝、香菇、木耳、鲜蛏、豆干、油泡、川豆板、菠菜等炒熟，再加入少许米粉，煮成带咸味的糊状食品。正月十五喝的糟羹为甜的，用番薯粉或藕粉配上莲子、甜枣、桂圆等做成。调制而成，分咸、甜两种。各地元宵吃汤圆，而台州则是吃糟羹。每年正月十四看过花灯之后，人们便会回家美美地吃起糟羹来。台州习俗是正月十四吃咸的糟羹，正月十五吃甜的山粉糊。"
            }
        ]
    }
    return taiZhou;
}
//10温州数据
function getWenZhouData(){
    var wenZhou = {
        "site":
            {
                "logo":"温州+圈.png",
                "poem":"中转页诗.png",
                "eat":["食在温州+箭头.png","食在温州文字.png"],
                "play":["游在温州+箭头.png","游在温州文字.png"]
            },
        "atrBanner":"忆温州.png",
        "intro": "温州地处中国华东地区、浙江东南部、瓯江下游南岸，东濒东海、南毗福建、西及西北部与丽水市相连、北和东北部与台州市接壤，是中国数学家的摇篮、中国南戏的故乡、中国海鲜鸡蛋之乡、中国鞋都，温州人被国人称之为东方犹太人。温州是国家历史文化名城 ，素有“东南山水甲天下”之美誉。温州古为瓯地，也称东瓯，公元323年建郡，为永嘉郡，传说建郡城时有白鹿衔花绕城一周，故名鹿城。唐朝时（公元675年）始称温州 ，至今已有2000余年的建城历史。温州是中国民营经济发展的先发地区与改革开放的前沿阵地，在改革开放初期，以“南有吴川，北有温州”享誉全国。",
        "attractions":[
            {
                "name" :"江心屿",
                "intro":"江心屿，位于温州市区北面瓯江中游，呈东西长、南北狭的形状，属于中国四大名屿。该屿风景秀丽，东西双塔凌空，映衬江心寺，历来被称为“瓯江蓬莱”。历代著名诗人谢灵运、孟浩然、韩愈、陆游、文天祥等都曾相继留迹江心屿。千百年来文人留有叹咏江心屿著名诗章近800篇。屿中名胜古迹众多，如宋文信国公祠、浩然楼、谢公亭、澄鲜阁及博物馆、革命烈士纪念馆、工人疗养院均系省市级文保建筑。现建有儿童乐园、游乐场、情人岛、盆景园、拓展园、戛纳名人摄影公馆、共青湖等。",
                "img":["江心屿1.jpg","江心屿2.jpg"]
            },
            {
                "name" :"楠溪江",
                "intro":"楠溪江位于浙江省温州市北部的永嘉县境内，南距温州市区26公里 ，东与雁荡山毗邻，西接缙云仙都。楠溪江是国家AAAA级旅游区，世界地质公园。楠溪江和雁荡山这两个国家级名胜区之间有石桅岩至雁湖的旅游专用公路。楠溪江景区，总面积671平方公里，景区分为大楠溪 、石桅岩、大若岩、太平岩、岩坦溪、四海山、源头七大景区，共有八百多个景点。风景区沿江分布，有台湾水青冈、银杏、华西枫杨等多种国家重点保护珍贵树种。",
                "img":["楠溪江1.jpg","楠溪江2.jpg"]
            },
            {
                "name" :"雁荡山",
                "intro":"雁荡山以山水奇秀闻名，素有“海上名山、寰中绝胜”之誉，史称中国“东南第一山” ，主体位于浙江省温州市东北部海滨，小部在台州市温岭南境。雁荡山形成于1亿2000万年以前，是环太平洋大陆边缘火山带中一座白垩纪流纹质破火山。《载敬堂集》载：“雁荡山以瓯江自然断裂，分北雁荡山和南雁荡山。以景观区位分有北雁荡山、南雁荡山、西雁荡山、东雁荡山、中雁荡山之称。”其开山凿胜始于南北朝，兴于唐，盛于宋。历代文人墨客纷至沓来，谢灵运、沈括、徐霞客、张大千、郭沫若、陈志岁等都留下了诗篇和墨迹。",
                "img":["雁荡山1.jpg","雁荡山2.jpg"]

            }],
        "foodBanner":"食在温州.png",
        "foods":[
            {
                "title":"炒粉干.png",
                "img":"炒粉干.jpg",
                "content":"炒粉干是浙江省温州市的一道著名地方小吃，属于浙菜系，该菜品的制作原料有粉干、鸡蛋、圆白菜等，无论街头小吃，排档，餐馆或是酒店都可以看到温州炒粉干的身影。炒粉干配牛奶、紫菜汤、豆浆、鱼丸汤等往往是不少温州人的选择。粉干在没下锅以前，看上去和粉丝是没什么区别的。但是粉干颜色比较深，炒过后有面的口感，却又是粉丝的味道。就这样的吃法在温州是家家户户喜欢吃的。温州人把炒粉干当主食，也当点心，只要喜欢，不管早中晚还是夜宵，均可享受。可以说，温州炒粉颠覆了对炒河粉，粉干的概念。"
            },
            {
                "title":"黄金卷.png",
                "img":"黄金卷.jpg",
                "content":"黄金卷，温州洞头县传统的地方小吃。由鳗鱼炮胶、竹荪、墨鱼饼三种原料套成圆卷后制成。以鳗鱼炮胶为主料。将炮胶水发，竹荪、墨鱼饼切成与炮胶长短相仿，把三种原料套成圆卷，经油氽，然后调味、勾芡，装盘即可。此菜色泽金黄，质地软糯，鲜美可口。鳗鱼炮胶是渔家传统菜，营养价值很高。“黄金卷”金黄的面饼色泽鲜亮，香味诱人，采用五谷杂粮面，精制而成的黄色面饼口感香浓，营养丰富。"
            },{
                "title":"温州鱼丸.png",
                "img":"温州鱼丸.jpg",
                "content":"温州鱼丸是浙江省温州市的一道著名地方小吃，属于浙菜系，该菜品以新鲜的鱼肉为主料，正宗的温州鱼丸有三大特点：即料码足、有韧劲、味道鲜。1998年“温州鱼丸”被定为“中华名小吃”之一。温州鱼丸是一道浙江温州的传统名点，水乡人家常见的风味小吃食品，与世界各地制作的鱼丸都有所不同，汤色澄清微酸辣味，鱼丸有弹性，多为不规则长条形，并呈半透明的玉白色。"
            }
        ]
    }
    return wenZhou;
}