// Flashcard data for Hán Việt learning app
const flashcards = [
    { 
        hanzi: '文化', pinyin: 'wén huà', hanviet: 'Văn hóa', vietnamese: 'Văn hóa', 
        char1: { hanzi: '文', pinyin: 'wén', hanviet: 'Văn', words: [
            { hanzi: '文明', pinyin: 'wén míng', hanviet: 'Văn minh' },
            { hanzi: '文件', pinyin: 'wén jiàn', hanviet: 'Văn kiện' },
            { hanzi: '文学', pinyin: 'wén xué', hanviet: 'Văn học' },
            { hanzi: '文字', pinyin: 'wén zì', hanviet: 'Văn tự' },
            { hanzi: '文具', pinyin: 'wén jù', hanviet: 'Văn cụ' }
        ]},
        char2: { hanzi: '化', pinyin: 'huà', hanviet: 'Hóa', words: [
            { hanzi: '变化', pinyin: 'biàn huà', hanviet: 'Biến hóa' },
            { hanzi: '化学', pinyin: 'huà xué', hanviet: 'Hóa học' },
            { hanzi: '消化', pinyin: 'xiāo huà', hanviet: 'Tiêu hóa' },
            { hanzi: '进化', pinyin: 'jìn huà', hanviet: 'Tiến hóa' },
            { hanzi: '化装', pinyin: 'huà zhuāng', hanviet: 'Hóa trang' }
        ]},
    },
    { 
        hanzi: '国家', pinyin: 'guó jiā', hanviet: 'Quốc gia', vietnamese: 'Đất nước', 
        char1: { hanzi: '国', pinyin: 'guó', hanviet: 'Quốc', words: [
            { hanzi: '外国', pinyin: 'wài guó', hanviet: 'Ngoại quốc' },
            { hanzi: '国际', pinyin: 'guó jì', hanviet: 'Quốc tế' },
            { hanzi: '国土', pinyin: 'guó tǔ', hanviet: 'Quốc thổ' },
            { hanzi: '国家', pinyin: 'guó jiā', hanviet: 'Quốc gia' },
            { hanzi: '国庆', pinyin: 'guó qìng', hanviet: 'Quốc khánh' }
        ]},
        char2: { hanzi: '家', pinyin: 'jiā', hanviet: 'Gia', words: [
            { hanzi: '家庭', pinyin: 'jiā tíng', hanviet: 'Gia đình' },
            { hanzi: '大家', pinyin: 'dà jiā', hanviet: 'Đại gia/Mọi người' },
            { hanzi: '回家', pinyin: 'huí jiā', hanviet: 'Hồi gia/Về nhà' },
            { hanzi: '专家', pinyin: 'zhuān jiā', hanviet: 'Chuyên gia' },
            { hanzi: '家具', pinyin: 'jiā jù', hanviet: 'Gia cụ' }
        ]},
    },
    { 
        hanzi: '历史', pinyin: 'lì shǐ', hanviet: 'Lịch sử', vietnamese: 'Lịch sử', 
        char1: { hanzi: '历', pinyin: 'lì', hanviet: 'Lịch', words: [
            { hanzi: '经历', pinyin: 'jīng lì', hanviet: 'Kinh lịch' },
            { hanzi: '日历', pinyin: 'rì lì', hanviet: 'Nhật lịch' },
            { hanzi: '历代', pinyin: 'lì dài', hanviet: 'Lịch đại' },
            { hanzi: '历来', pinyin: 'lì lái', hanviet: 'Lịch lai' },
            { hanzi: '历程', pinyin: 'lì chéng', hanviet: 'Lịch trình' }
        ]},
        char2: { hanzi: '史', pinyin: 'shǐ', hanviet: 'Sử', words: [
            { hanzi: '史书', pinyin: 'shǐ shū', hanviet: 'Sử thư' },
            { hanzi: '史料', pinyin: 'shǐ liào', hanviet: 'Sử liệu' },
            { hanzi: '正史', pinyin: 'zhèng shǐ', hanviet: 'Chính sử' },
            { hanzi: '历史', pinyin: 'lì shǐ', hanviet: 'Lịch sử' },
            { hanzi: '史前', pinyin: 'shǐ qián', hanviet: 'Sử tiền' }
        ]},
    },
    { 
        hanzi: '社会', pinyin: 'shè huì', hanviet: 'Xã hội', vietnamese: 'Xã hội', 
        char1: { hanzi: '社', pinyin: 'shè', hanviet: 'Xã', words: [
            { hanzi: '社团', pinyin: 'shè tuán', hanviet: 'Xã đoàn' },
            { hanzi: '社会', pinyin: 'shè huì', hanviet: 'Xã hội' },
            { hanzi: '社长', pinyin: 'shè zhǎng', hanviet: 'Xã trưởng' },
            { hanzi: '社区', pinyin: 'shè qū', hanviet: 'Xã khu' },
            { hanzi: '合作社', pinyin: 'hé zuò shè', hanviet: 'Hợp tác xã' }
        ]},
        char2: { hanzi: '会', pinyin: 'huì', hanviet: 'Hội', words: [
            { hanzi: '会议', pinyin: 'huì yì', hanviet: 'Hội nghị' },
            { hanzi: '机会', pinyin: 'jī huì', hanviet: 'Cơ hội' },
            { hanzi: '开会', pinyin: 'kāi huì', hanviet: 'Khai hội' },
            { hanzi: '会见', pinyin: 'huì jiàn', hanviet: 'Hội kiến' },
            { hanzi: '协会', pinyin: 'xié huì', hanviet: 'Hiệp hội' }
        ]},
    },
    { 
        hanzi: '安全', pinyin: 'ān quán', hanviet: 'An toàn', vietnamese: 'An toàn', 
        char1: { hanzi: '安', pinyin: 'ān', hanviet: 'An', words: [
            { hanzi: '平安', pinyin: 'píng ān', hanviet: 'Bình an' },
            { hanzi: '安排', pinyin: 'ān pái', hanviet: 'An bài' },
            { hanzi: '安装', pinyin: 'ān zhuāng', hanviet: 'An trang' },
            { hanzi: '安静', pinyin: 'ān jìng', hanviet: 'An tĩnh' },
            { hanzi: '公安', pinyin: 'gōng ān', hanviet: 'Công an' }
        ]},
        char2: { hanzi: '全', pinyin: 'quán', hanviet: 'Toàn', words: [
            { hanzi: '完全', pinyin: 'wán quán', hanviet: 'Hoàn toàn' },
            { hanzi: '全部', pinyin: 'quán bù', hanviet: 'Toàn bộ' },
            { hanzi: '安全', pinyin: 'ān quán', hanviet: 'An toàn' },
            { hanzi: '齐全', pinyin: 'qí quán', hanviet: 'Tề toàn' },
            { hanzi: '全力', pinyin: 'quán lì', hanviet: 'Toàn lực' }
        ]},
    },
    { 
        hanzi: '公司', pinyin: 'gōng sī', hanviet: 'Công ty', vietnamese: 'Công ty', 
        char1: { hanzi: '公', pinyin: 'gōng', hanviet: 'Công', words: [
            { hanzi: '公共', pinyin: 'gōng gòng', hanviet: 'Công cộng' },
            { hanzi: '公平', pinyin: 'gōng píng', hanviet: 'Công bằng' },
            { hanzi: '公开', pinyin: 'gōng kāi', hanviet: 'Công khai' },
            { hanzi: '公司', pinyin: 'gōng sī', hanviet: 'Công ty' },
            { hanzi: '公民', pinyin: 'gōng mín', hanviet: 'Công dân' }
        ]},
        char2: { hanzi: '司', pinyin: 'sī', hanviet: 'Ty', words: [
            { hanzi: '司机', pinyin: 'sī jī', hanviet: 'Ty cơ/Tài xế' },
            { hanzi: '司法', pinyin: 'sī fǎ', hanviet: 'Tư pháp' },
            { hanzi: '司令', pinyin: 'sī líng', hanviet: 'Tư lệnh' },
            { hanzi: '公司', pinyin: 'gōng sī', hanviet: 'Công ty' },
            { hanzi: '司空见惯', pinyin: 'sī kōng jiàn guàn', hanviet: 'Ty không kiến quán' }
        ]},
    },
    { 
        hanzi: '市场', pinyin: 'shì chǎng', hanviet: 'Thị trường', vietnamese: 'Thị trường', 
        char1: { hanzi: '市', pinyin: 'shì', hanviet: 'Thị', words: [
            { hanzi: '都市', pinyin: 'dū shì', hanviet: 'Đô thị' },
            { hanzi: '市场', pinyin: 'shì chǎng', hanviet: 'Thị trường' },
            { hanzi: '城市', pinyin: 'chéng shì', hanviet: 'Thành thị' },
            { hanzi: '市长', pinyin: 'shì zhǎng', hanviet: 'Thị trưởng' },
            { hanzi: '上市', pinyin: 'shàng shì', hanviet: 'Thượng thị' }
        ]},
        char2: { hanzi: '场', pinyin: 'chǎng', hanviet: 'Tràng/Trường', words: [
            { hanzi: '广场', pinyin: 'guǎng chǎng', hanviet: 'Quảng trường' },
            { hanzi: '现场', pinyin: 'xiàn chǎng', hanviet: 'Hiện trường' },
            { hanzi: '会场', pinyin: 'huì chǎng', hanviet: 'Hội trường' },
            { hanzi: '市场', pinyin: 'shì chǎng', hanviet: 'Thị trường' },
            { hanzi: '场所', pinyin: 'chǎng suǒ', hanviet: 'Tràng sở' }
        ]},
    },
    { 
        hanzi: '合同', pinyin: 'hé tong', hanviet: 'Hợp đồng', vietnamese: 'Hợp đồng', 
        char1: { hanzi: '合', pinyin: 'hé', hanviet: 'Hợp', words: [
            { hanzi: '合作', pinyin: 'hé zuò', hanviet: 'Hợp tác' },
            { hanzi: '合适', pinyin: 'hé shì', hanviet: 'Hợp thích' },
            { hanzi: '合法', pinyin: 'hé fǎ', hanviet: 'Hợp pháp' },
            { hanzi: '合同', pinyin: 'hé tong', hanviet: 'Hợp đồng' },
            { hanzi: '合并', pinyin: 'hé bìng', hanviet: 'Hợp nhất' }
        ]},
        char2: { hanzi: '同', pinyin: 'tong', hanviet: 'Đồng', words: [
            { hanzi: '一同', pinyin: 'yì tóng', hanviet: 'Nhất đồng' },
            { hanzi: '同意', pinyin: 'tóng yì', hanviet: 'Đồng ý' },
            { hanzi: '同学', pinyin: 'tóng xué', hanviet: 'Đồng học' },
            { hanzi: '同样', pinyin: 'tóng yàng', hanviet: 'Đồng dạng' },
            { hanzi: '共同', pinyin: 'gòng tóng', hanviet: 'Cộng đồng' }
        ]},
    },
    { 
        hanzi: '改革', pinyin: 'gǎi gé', hanviet: 'Cải cách', vietnamese: 'Cải cách', 
        char1: { hanzi: '改', pinyin: 'gǎi', hanviet: 'Cải', words: [
            { hanzi: '改正', pinyin: 'gǎi zhèng', hanviet: 'Cải chính' },
            { hanzi: '改变', pinyin: 'gǎi biàn', hanviet: 'Cải biến' },
            { hanzi: '改进', pinyin: 'gǎi jìn', hanviet: 'Cải tiến' },
            { hanzi: '改革', pinyin: 'gǎi gé', hanviet: 'Cải cách' },
            { hanzi: '修改', pinyin: 'xiū gǎi', hanviet: 'Tu cải' }
        ]},
        char2: { hanzi: '革', pinyin: 'gé', hanviet: 'Cách', words: [
            { hanzi: '革命', pinyin: 'gé mìng', hanviet: 'Cách mạng' },
            { hanzi: '改革', pinyin: 'gǎi gé', hanviet: 'Cải cách' },
            { hanzi: '革除', pinyin: 'gé chú', hanviet: 'Cách trừ' },
            { hanzi: '革新', pinyin: 'gé xīn', hanviet: 'Cách tân' },
            { hanzi: '革职', pinyin: 'gé zhí', hanviet: 'Cách chức' }
        ]},
    },
    { 
        hanzi: '任务', pinyin: 'rèn wù', hanviet: 'Nhiệm vụ', vietnamese: 'Nhiệm vụ', 
        char1: { hanzi: '任', pinyin: 'rèn', hanviet: 'Nhiệm', words: [
            { hanzi: '责任', pinyin: 'zé rèn', hanviet: 'Trách nhiệm' },
            { hanzi: '任命', pinyin: 'rèn mìng', hanviet: 'Nhiệm mệnh' },
            { hanzi: '任何', pinyin: 'rèn hé', hanviet: 'Nhậm hà' },
            { hanzi: '担任', pinyin: 'dān rèn', hanviet: 'Đảm nhiệm' },
            { hanzi: '任务', pinyin: 'rèn wù', hanviet: 'Nhiệm vụ' }
        ]},
        char2: { hanzi: '务', pinyin: 'wù', hanviet: 'Vụ', words: [
            { hanzi: '事物', pinyin: 'shì wù', hanviet: 'Sự vật' },
            { hanzi: '任务', pinyin: 'rèn wù', hanviet: 'Nhiệm vụ' },
            { hanzi: '公务', pinyin: 'gōng wù', hanviet: 'Công vụ' },
            { hanzi: '服务', pinyin: 'fú wù', hanviet: 'Phục vụ' },
            { hanzi: '务必', pinyin: 'wù bì', hanviet: 'Vụ tất' }
        ]},
    },
    
    // Completed flashcards with detailed character analysis
    { 
        hanzi: '组织', pinyin: 'zǔ zhī', hanviet: 'Tổ chức', vietnamese: 'Tổ chức', 
        char1: { hanzi: '组', pinyin: 'zǔ', hanviet: 'Tổ', words: [
            { hanzi: '小组', pinyin: 'xiǎo zǔ', hanviet: 'Tiểu tổ' },
            { hanzi: '组合', pinyin: 'zǔ hé', hanviet: 'Tổ hợp' },
            { hanzi: '组成', pinyin: 'zǔ chéng', hanviet: 'Tổ thành' },
            { hanzi: '组织', pinyin: 'zǔ zhī', hanviet: 'Tổ chức' },
            { hanzi: '分组', pinyin: 'fēn zǔ', hanviet: 'Phân tổ' }
        ]},
        char2: { hanzi: '织', pinyin: 'zhī', hanviet: 'Chức', words: [
            { hanzi: '纺织', pinyin: 'fǎng zhī', hanviet: 'Phương chức' },
            { hanzi: '编织', pinyin: 'biān zhī', hanviet: 'Biên chức' },
            { hanzi: '组织', pinyin: 'zǔ zhī', hanviet: 'Tổ chức' },
            { hanzi: '交织', pinyin: 'jiāo zhī', hanviet: 'Giao chức' },
            { hanzi: '织布', pinyin: 'zhī bù', hanviet: 'Chức bố' }
        ]},
    },
    { 
        hanzi: '会议', pinyin: 'huì yì', hanviet: 'Hội nghị', vietnamese: 'Hội nghị', 
        char1: { hanzi: '会', pinyin: 'huì', hanviet: 'Hội', words: [
            { hanzi: '开会', pinyin: 'kāi huì', hanviet: 'Khai hội' },
            { hanzi: '会议', pinyin: 'huì yì', hanviet: 'Hội nghị' },
            { hanzi: '聚会', pinyin: 'jù huì', hanviet: 'Tụ hội' },
            { hanzi: '协会', pinyin: 'xié huì', hanviet: 'Hiệp hội' },
            { hanzi: '机会', pinyin: 'jī huì', hanviet: 'Cơ hội' }
        ]},
        char2: { hanzi: '议', pinyin: 'yì', hanviet: 'Nghị', words: [
            { hanzi: '建议', pinyin: 'jiàn yì', hanviet: 'Kiến nghị' },
            { hanzi: '商议', pinyin: 'shāng yì', hanviet: 'Thương nghị' },
            { hanzi: '会议', pinyin: 'huì yì', hanviet: 'Hội nghị' },
            { hanzi: '议论', pinyin: 'yì lùn', hanviet: 'Nghị luận' },
            { hanzi: '决议', pinyin: 'jué yì', hanviet: 'Quyết nghị' }
        ]},
    },
    { 
        hanzi: '计划', pinyin: 'jì huà', hanviet: 'Kế hoạch', vietnamese: 'Kế hoạch', 
        char1: { hanzi: '计', pinyin: 'jì', hanviet: 'Kế', words: [
            { hanzi: '计算', pinyin: 'jì suàn', hanviet: 'Kế toán' },
            { hanzi: '统计', pinyin: 'tǒng jì', hanviet: 'Thống kế' },
            { hanzi: '设计', pinyin: 'shè jì', hanviet: 'Thiết kế' },
            { hanzi: '计划', pinyin: 'jì huà', hanviet: 'Kế hoạch' },
            { hanzi: '估计', pinyin: 'gū jì', hanviet: 'Ước kế' }
        ]},
        char2: { hanzi: '划', pinyin: 'huà', hanviet: 'Hoạch', words: [
            { hanzi: '划分', pinyin: 'huà fēn', hanviet: 'Hoạch phân' },
            { hanzi: '规划', pinyin: 'guī huà', hanviet: 'Quy hoạch' },
            { hanzi: '计划', pinyin: 'jì huà', hanviet: 'Kế hoạch' },
            { hanzi: '策划', pinyin: 'cè huà', hanviet: 'Sách hoạch' },
            { hanzi: '划船', pinyin: 'huá chuán', hanviet: 'Hoạch thuyền' }
        ]},
    },
    { 
        hanzi: '科学', pinyin: 'kē xué', hanviet: 'Khoa học', vietnamese: 'Khoa học', 
        char1: { hanzi: '科', pinyin: 'kē', hanviet: 'Khoa', words: [
            { hanzi: '学科', pinyin: 'xué kē', hanviet: 'Học khoa' },
            { hanzi: '科学', pinyin: 'kē xué', hanviet: 'Khoa học' },
            { hanzi: '理科', pinyin: 'lǐ kē', hanviet: 'Lý khoa' },
            { hanzi: '文科', pinyin: 'wén kē', hanviet: 'Văn khoa' },
            { hanzi: '科目', pinyin: 'kē mù', hanviet: 'Khoa mục' }
        ]},
        char2: { hanzi: '学', pinyin: 'xué', hanviet: 'Học', words: [
            { hanzi: '学习', pinyin: 'xué xí', hanviet: 'Học tập' },
            { hanzi: '学校', pinyin: 'xué xiào', hanviet: 'Học hiệu' },
            { hanzi: '学生', pinyin: 'xué shēng', hanviet: 'Học sinh' },
            { hanzi: '科学', pinyin: 'kē xué', hanviet: 'Khoa học' },
            { hanzi: '大学', pinyin: 'dà xué', hanviet: 'Đại học' }
        ]},
    },
    { 
        hanzi: '教育', pinyin: 'jiào yù', hanviet: 'Giáo dục', vietnamese: 'Giáo dục', 
        char1: { hanzi: '教', pinyin: 'jiào', hanviet: 'Giáo', words: [
            { hanzi: '教师', pinyin: 'jiào shī', hanviet: 'Giáo sư' },
            { hanzi: '教学', pinyin: 'jiào xué', hanviet: 'Giáo học' },
            { hanzi: '教室', pinyin: 'jiào shì', hanviet: 'Giáo thất' },
            { hanzi: '教育', pinyin: 'jiào yù', hanviet: 'Giáo dục' },
            { hanzi: '教授', pinyin: 'jiào shòu', hanviet: 'Giáo thụ' }
        ]},
        char2: { hanzi: '育', pinyin: 'yù', hanviet: 'Dục', words: [
            { hanzi: '培育', pinyin: 'péi yù', hanviet: 'Bồi dục' },
            { hanzi: '养育', pinyin: 'yǎng yù', hanviet: 'Dưỡng dục' },
            { hanzi: '教育', pinyin: 'jiào yù', hanviet: 'Giáo dục' },
            { hanzi: '体育', pinyin: 'tǐ yù', hanviet: 'Thể dục' },
            { hanzi: '发育', pinyin: 'fā yù', hanviet: 'Phát dục' }
        ]},
    },
    { 
        hanzi: '知识', pinyin: 'zhī shì', hanviet: 'Tri thức', vietnamese: 'Kiến thức', 
        char1: { hanzi: '知', pinyin: 'zhī', hanviet: 'Tri', words: [
            { hanzi: '知道', pinyin: 'zhī dào', hanviet: 'Tri đạo' },
            { hanzi: '知识', pinyin: 'zhī shì', hanviet: 'Tri thức' },
            { hanzi: '通知', pinyin: 'tōng zhī', hanviet: 'Thông tri' },
            { hanzi: '认知', pinyin: 'rèn zhī', hanviet: 'Nhận tri' },
            { hanzi: '感知', pinyin: 'gǎn zhī', hanviet: 'Cảm tri' }
        ]},
        char2: { hanzi: '识', pinyin: 'shì', hanviet: 'Thức', words: [
            { hanzi: '认识', pinyin: 'rèn shì', hanviet: 'Nhận thức' },
            { hanzi: '意识', pinyin: 'yì shí', hanviet: 'Ý thức' },
            { hanzi: '知识', pinyin: 'zhī shì', hanviet: 'Tri thức' },
            { hanzi: '常识', pinyin: 'cháng shí', hanviet: 'Thường thức' },
            { hanzi: '见识', pinyin: 'jiàn shí', hanviet: 'Kiến thức' }
        ]},
    },
    { 
        hanzi: '智慧', pinyin: 'zhì huì', hanviet: 'Trí tuệ', vietnamese: 'Trí tuệ', 
        char1: { hanzi: '智', pinyin: 'zhì', hanviet: 'Trí', words: [
            { hanzi: '智力', pinyin: 'zhì lì', hanviet: 'Trí lực' },
            { hanzi: '智能', pinyin: 'zhì néng', hanviet: 'Trí năng' },
            { hanzi: '智慧', pinyin: 'zhì huì', hanviet: 'Trí tuệ' },
            { hanzi: '明智', pinyin: 'míng zhì', hanviet: 'Minh trí' },
            { hanzi: '才智', pinyin: 'cái zhì', hanviet: 'Tài trí' }
        ]},
        char2: { hanzi: '慧', pinyin: 'huì', hanviet: 'Tuệ', words: [
            { hanzi: '慧眼', pinyin: 'huì yǎn', hanviet: 'Tuệ nhãn' },
            { hanzi: '慧心', pinyin: 'huì xīn', hanviet: 'Tuệ tâm' },
            { hanzi: '智慧', pinyin: 'zhì huì', hanviet: 'Trí tuệ' },
            { hanzi: '聪慧', pinyin: 'cōng huì', hanviet: 'Thông tuệ' },
            { hanzi: '慧根', pinyin: 'huì gēn', hanviet: 'Tuệ căn' }
        ]},
    },
    { 
        hanzi: '学院', pinyin: 'xué yuàn', hanviet: 'Học viện', vietnamese: 'Học viện', 
        char1: { hanzi: '学', pinyin: 'xué', hanviet: 'Học', words: [
            { hanzi: '学习', pinyin: 'xué xí', hanviet: 'Học tập' },
            { hanzi: '学校', pinyin: 'xué xiào', hanviet: 'Học hiệu' },
            { hanzi: '学生', pinyin: 'xué shēng', hanviet: 'Học sinh' },
            { hanzi: '学院', pinyin: 'xué yuàn', hanviet: 'Học viện' },
            { hanzi: '大学', pinyin: 'dà xué', hanviet: 'Đại học' }
        ]},
        char2: { hanzi: '院', pinyin: 'yuàn', hanviet: 'Viện', words: [
            { hanzi: '医院', pinyin: 'yī yuàn', hanviet: 'Y viện' },
            { hanzi: '法院', pinyin: 'fǎ yuàn', hanviet: 'Pháp viện' },
            { hanzi: '学院', pinyin: 'xué yuàn', hanviet: 'Học viện' },
            { hanzi: '研究院', pinyin: 'yán jiū yuàn', hanviet: 'Nghiên cứu viện' },
            { hanzi: '庭院', pinyin: 'tíng yuàn', hanviet: 'Đình viện' }
        ]},
    },
    { 
        hanzi: '成绩', pinyin: 'chéng jì', hanviet: 'Thành tích', vietnamese: 'Thành tích', 
        char1: { hanzi: '成', pinyin: 'chéng', hanviet: 'Thành', words: [
            { hanzi: '成功', pinyin: 'chéng gōng', hanviet: 'Thành công' },
            { hanzi: '完成', pinyin: 'wán chéng', hanviet: 'Hoàn thành' },
            { hanzi: '成绩', pinyin: 'chéng jì', hanviet: 'Thành tích' },
            { hanzi: '成长', pinyin: 'chéng zhǎng', hanviet: 'Thành trưởng' },
            { hanzi: '变成', pinyin: 'biàn chéng', hanviet: 'Biến thành' }
        ]},
        char2: { hanzi: '绩', pinyin: 'jì', hanviet: 'Tích', words: [
            { hanzi: '功绩', pinyin: 'gōng jì', hanviet: 'Công tích' },
            { hanzi: '业绩', pinyin: 'yè jì', hanviet: 'Nghiệp tích' },
            { hanzi: '成绩', pinyin: 'chéng jì', hanviet: 'Thành tích' },
            { hanzi: '政绩', pinyin: 'zhèng jì', hanviet: 'Chính tích' },
            { hanzi: '实绩', pinyin: 'shí jì', hanviet: 'Thực tích' }
        ]},
    },
    { 
        hanzi: '文学', pinyin: 'wén xué', hanviet: 'Văn học', vietnamese: 'Văn học', 
        char1: { hanzi: '文', pinyin: 'wén', hanviet: 'Văn', words: [
            { hanzi: '文明', pinyin: 'wén míng', hanviet: 'Văn minh' },
            { hanzi: '文件', pinyin: 'wén jiàn', hanviet: 'Văn kiện' },
            { hanzi: '文学', pinyin: 'wén xué', hanviet: 'Văn học' },
            { hanzi: '文字', pinyin: 'wén zì', hanviet: 'Văn tự' },
            { hanzi: '文具', pinyin: 'wén jù', hanviet: 'Văn cụ' }
        ]},
        char2: { hanzi: '学', pinyin: 'xué', hanviet: 'Học', words: [
            { hanzi: '学习', pinyin: 'xué xí', hanviet: 'Học tập' },
            { hanzi: '学校', pinyin: 'xué xiào', hanviet: 'Học hiệu' },
            { hanzi: '学生', pinyin: 'xué shēng', hanviet: 'Học sinh' },
            { hanzi: '科学', pinyin: 'kē xué', hanviet: 'Khoa học' },
            { hanzi: '大学', pinyin: 'dà xué', hanviet: 'Đại học' }
        ]},
    },
    
    // Remaining flashcards with basic data only (char1: null, char2: null)
    { hanzi: '音乐', pinyin: 'yīn yuè', hanviet: 'Âm nhạc', vietnamese: 'Âm nhạc', char1: null, char2: null  },
    { hanzi: '美术', pinyin: 'měi shù', hanviet: 'Mỹ thuật', vietnamese: 'Mỹ thuật', char1: null, char2: null },
    { hanzi: '电影', pinyin: 'diàn yǐng', hanviet: 'Điện ảnh', vietnamese: 'Phim ảnh', char1: null, char2: null },
    { hanzi: '生活', pinyin: 'shēng huó', hanviet: 'Sinh hoạt', vietnamese: 'Cuộc sống', char1: null, char2: null },
    { hanzi: '幸福', pinyin: 'xìng fú', hanviet: 'Hạnh phúc', vietnamese: 'Hạnh phúc', char1: null, char2: null },
    { hanzi: '浪漫', pinyin: 'làng màn', hanviet: 'Lãng mạn', vietnamese: 'Lãng mạn', char1: null, char2: null },
    { hanzi: '感动', pinyin: 'gǎn dòng', hanviet: 'Cảm động', vietnamese: 'Cảm động', char1: null, char2: null },
    { hanzi: '感谢', pinyin: 'gǎn xiè', hanviet: 'Cảm tạ', vietnamese: 'Cảm ơn', char1: null, char2: null },
    { hanzi: '勇敢', pinyin: 'yǒng gǎn', hanviet: 'Dũng cảm', vietnamese: 'Dũng cảm', char1: null, char2: null },
    { hanzi: '自信', pinyin: 'zì xìn', hanviet: 'Tự tin', vietnamese: 'Tự tin', char1: null, char2: null },
    { hanzi: '决定', pinyin: 'jué dìng', hanviet: 'Quyết định', vietnamese: 'Quyết định', char1: null, char2: null },
    { hanzi: '选择', pinyin: 'xuǎn zé', hanviet: 'Tuyển trạch', vietnamese: 'Lựa chọn', char1: null, char2: null },
    { hanzi: '继续', pinyin: 'jì xù', hanviet: 'Kế tục', vietnamese: 'Tiếp tục', char1: null, char2: null },
    { hanzi: '发生', pinyin: 'fā shēng', hanviet: 'Phát sinh', vietnamese: 'Xảy ra', char1: null, char2: null },
    { hanzi: '发现', pinyin: 'fā xiàn', hanviet: 'Phát hiện', vietnamese: 'Phát hiện', char1: null, char2: null },
    { hanzi: '解决', pinyin: 'jiě jué', hanviet: 'Giải quyết', vietnamese: 'Giải quyết', char1: null, char2: null },
    { hanzi: '发展', pinyin: 'fā zhǎn', hanviet: 'Phát triển', vietnamese: 'Phát triển', char1: null, char2: null },
    { hanzi: '原因', pinyin: 'yuán yīn', hanviet: 'Nguyên nhân', vietnamese: 'Nguyên nhân', char1: null, char2: null },
    { hanzi: '结果', pinyin: 'jié guǒ', hanviet: 'Kết quả', vietnamese: 'Kết quả', char1: null, char2: null },
    { hanzi: '条件', pinyin: 'tiáo jiàn', hanviet: 'Điều kiện', vietnamese: 'Điều kiện', char1: null, char2: null },
    { hanzi: '困难', pinyin: 'kùn nan', hanviet: 'Khốn nạn/Khó khăn', vietnamese: 'Khó khăn', char1: null, char2: null },
    { hanzi: '问题', pinyin: 'wèn tí', hanviet: 'Vấn đề', vietnamese: 'Vấn đề', char1: null, char2: null },
    { hanzi: '要求', pinyin: 'yāo qiú', hanviet: 'Yêu cầu', vietnamese: 'Yêu cầu', char1: null, char2: null },
    { hanzi: '理解', pinyin: 'lǐ jiě', hanviet: 'Lý giải', vietnamese: 'Hiểu, thông hiểu', char1: null, char2: null },
    { hanzi: '意见', pinyin: 'yì jiàn', hanviet: 'Ý kiến', vietnamese: 'Ý kiến', char1: null, char2: null },
    { hanzi: '态度', pinyin: 'tài dù', hanviet: 'Thái độ', vietnamese: 'Thái độ', char1: null, char2: null },
    { hanzi: '变化', pinyin: 'biàn huà', hanviet: 'Biến hóa', vietnamese: 'Thay đổi', char1: null, char2: null },
    { hanzi: '特别', pinyin: 'tè bié', hanviet: 'Đặc biệt', vietnamese: 'Đặc biệt', char1: null, char2: null },
    { hanzi: '普通', pinyin: 'pǔ tōng', hanviet: 'Phổ thông', vietnamese: 'Bình thường', char1: null, char2: null },
    { hanzi: '完全', pinyin: 'wán quán', hanviet: 'Hoàn toàn', vietnamese: 'Hoàn toàn', char1: null, char2: null },
    { hanzi: '世界', pinyin: 'shì jiè', hanviet: 'Thế giới', vietnamese: 'Thế giới', char1: null, char2: null },
    { hanzi: '海洋', pinyin: 'hǎi yáng', hanviet: 'Hải dương', vietnamese: 'Đại dương', char1: null, char2: null },
    { hanzi: '气候', pinyin: 'qì hòu', hanviet: 'Khí hậu', vietnamese: 'Khí hậu', char1: null, char2: null },
    { hanzi: '环境', pinyin: 'huán jìng', hanviet: 'Hoàn cảnh', vietnamese: 'Môi trường', char1: null, char2: null },
    { hanzi: '保护', pinyin: 'bǎo hù', hanviet: 'Bảo hộ', vietnamese: 'Bảo vệ', char1: null, char2: null },
    { hanzi: '交通', pinyin: 'jiāo tōng', hanviet: 'Giao thông', vietnamese: 'Giao thông', char1: null, char2: null },
    { hanzi: '火车', pinyin: 'huǒ chē', hanviet: 'Hỏa xa', vietnamese: 'Tàu hỏa', char1: null, char2: null },
    { hanzi: '汽车', pinyin: 'qì chē', hanviet: 'Khí xa', vietnamese: 'Xe hơi', char1: null, char2: null },
    { hanzi: '飞机', pinyin: 'fēi jī', hanviet: 'Phi cơ', vietnamese: 'Máy bay', char1: null, char2: null },
    { hanzi: '地址', pinyin: 'dì zhǐ', hanviet: 'Địa chỉ', vietnamese: 'Địa chỉ', char1: null, char2: null },
    { hanzi: '房间', pinyin: 'fáng jiān', hanviet: 'Phòng gian', vietnamese: 'Căn phòng', char1: null, char2: null },
    { hanzi: '警察', pinyin: 'jǐng chá', hanviet: 'Cảnh sát', vietnamese: 'Cảnh sát', char1: null, char2: null },
    { hanzi: '医生', pinyin: 'yī shēng', hanviet: 'Y sinh', vietnamese: 'Bác sĩ', char1: null, char2: null },
    { hanzi: '药房', pinyin: 'yào fáng', hanviet: 'Dược phòng', vietnamese: 'Hiệu thuốc', char1: null, char2: null },
    { hanzi: '健康', pinyin: 'jiàn kāng', hanviet: 'Kiện khang', vietnamese: 'Sức khỏe', char1: null, char2: null },
    { hanzi: '紧张', pinyin: 'jǐn zhāng', hanviet: 'Khẩn trương', vietnamese: 'Lo lắng, căng thẳng', char1: null, char2: null },
    { hanzi: '注意', pinyin: 'zhù yì', hanviet: 'Chú ý', vietnamese: 'Chú ý', char1: null, char2: null },
    { hanzi: '耐心', pinyin: 'nài xīn', hanviet: 'Nại tâm', vietnamese: 'Kiên nhẫn', char1: null, char2: null },
    { hanzi: '希望', pinyin: 'xī wàng', hanviet: 'Hy vọng', vietnamese: 'Hy vọng', char1: null, char2: null },
    { hanzi: '理想', pinyin: 'lǐ xiǎng', hanviet: 'Lý tưởng', vietnamese: 'Lý tưởng', char1: null, char2: null },
    { hanzi: '目标', pinyin: 'mù biāo', hanviet: 'Mục tiêu', vietnamese: 'Mục tiêu', char1: null, char2: null },
    { hanzi: '成功', pinyin: 'chéng gōng', hanviet: 'Thành công', vietnamese: 'Thành công', char1: null, char2: null },
    { hanzi: '失败', pinyin: 'shī bài', hanviet: 'Thất bại', vietnamese: 'Thất bại', char1: null, char2: null },
    { hanzi: '权力', pinyin: 'quán lì', hanviet: 'Quyền lực', vietnamese: 'Quyền lực', char1: null, char2: null },
    { hanzi: '平等', pinyin: 'píng děng', hanviet: 'Bình đẳng', vietnamese: 'Bình đẳng', char1: null, char2: null },
    { hanzi: '自由', pinyin: 'zì yóu', hanviet: 'Tự do', vietnamese: 'Tự do', char1: null, char2: null },
    { hanzi: '代表', pinyin: 'dài biǎo', hanviet: 'Đại biểu', vietnamese: 'Đại diện', char1: null, char2: null },
    { hanzi: '讨论', pinyin: 'tǎo lùn', hanviet: 'Thảo luận', vietnamese: 'Thảo luận', char1: null, char2: null },
    { hanzi: '同意', pinyin: 'tóng yì', hanviet: 'Đồng ý', vietnamese: 'Đồng ý', char1: null, char2: null },
    { hanzi: '反对', pinyin: 'fǎn duì', hanviet: 'Phản đối', vietnamese: 'Phản đối', char1: null, char2: null },
    { hanzi: '重要', pinyin: 'zhòng yào', hanviet: 'Trọng yếu', vietnamese: 'Quan trọng', char1: null, char2: null },
    { hanzi: '方便', pinyin: 'fāng biàn', hanviet: 'Phương tiện', vietnamese: 'Tiện lợi', char1: null, char2: null },
    { hanzi: '麻烦', pinyin: 'má fan', hanviet: 'Ma phiền', vietnamese: 'Phiền phức', char1: null, char2: null },
    { hanzi: '简单', pinyin: 'jiǎn dān', hanviet: 'Giản đơn', vietnamese: 'Đơn giản', char1: null, char2: null },
    { hanzi: '复杂', pinyin: 'fù zá', hanviet: 'Phức tạp', vietnamese: 'Phức tạp', char1: null, char2: null },
    { hanzi: '全部', pinyin: 'quán bù', hanviet: 'Toàn bộ', vietnamese: 'Toàn bộ', char1: null, char2: null },
    { hanzi: '部分', pinyin: 'bù fèn', hanviet: 'Bộ phận', vietnamese: 'Một phần', char1: null, char2: null },
    { hanzi: '将来', pinyin: 'jiāng lái', hanviet: 'Tương lai', vietnamese: 'Tương lai', char1: null, char2: null },
    { hanzi: '永远', pinyin: 'yǒng yuǎn', hanviet: 'Vĩnh viễn', vietnamese: 'Mãi mãi', char1: null, char2: null },
    { hanzi: '最近', pinyin: 'zuì jìn', hanviet: 'Tối cận', vietnamese: 'Gần đây', char1: null, char2: null },
    { hanzi: '马上', pinyin: 'mǎ shàng', hanviet: 'Mã thượng', vietnamese: 'Lập tức', char1: null, char2: null },
    { hanzi: '感谢', pinyin: 'gǎn xiè', hanviet: 'Cảm tạ', vietnamese: 'Cảm ơn', char1: null, char2: null },
    { hanzi: '原谅', pinyin: 'yuán liàng', hanviet: 'Nguyên lượng', vietnamese: 'Tha thứ', char1: null, char2: null },
    { hanzi: '欢迎', pinyin: 'huān yíng', hanviet: 'Hoan nghênh', vietnamese: 'Chào mừng', char1: null, char2: null },
    { hanzi: '请问', pinyin: 'qǐng wèn', hanviet: 'Thỉnh vấn', vietnamese: 'Xin hỏi', char1: null, char2: null },
    { hanzi: '先生', pinyin: 'xiān sheng', hanviet: 'Tiên sinh', vietnamese: 'Ông/Thầy', char1: null, char2: null },
    { hanzi: '女士', pinyin: 'nǚ shì', hanviet: 'Nữ sĩ', vietnamese: 'Bà/Cô', char1: null, char2: null },
    { hanzi: '父母', pinyin: 'fù mǔ', hanviet: 'Phụ mẫu', vietnamese: 'Bố mẹ', char1: null, char2: null },
    { hanzi: '朋友', pinyin: 'péng yǒu', hanviet: 'Bằng hữu', vietnamese: 'Bạn bè', char1: null, char2: null },
    { hanzi: '我们', pinyin: 'wǒ men', hanviet: 'Ngã môn', vietnamese: 'Chúng tôi/ta', char1: null, char2: null },
];
