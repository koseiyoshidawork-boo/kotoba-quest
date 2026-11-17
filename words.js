// 「英語のテストで単語で無双して50点とったら結構嬉しかったりする」の単語データ
// 出典：教科書「Word Study」の表（p.88〜91 消化器系、p.102 嚥下、p.113〜115 聴覚）
// 図にだけ載っている語は入れていません。
//
// 各項目の意味
//   ja   : 問題として表示する日本語（表の日本語欄のまま）
//   en   : 正解として表示する英語
//   alt  : 別解（表に並んで載っている同義語や形容詞形）。入力するとどれも正解になります
//   cats : 分野（digestive=消化器系、swallowing=嚥下、hearing=聴覚）。複数の分野に載る語は両方入れます

window.CATEGORIES = {
  digestive: '消化器系',
  swallowing: '嚥下',
  hearing: '聴覚'
};

window.WORDS = [
  // ===== 消化器系 A. 部位名（p.88）=====
  { ja: '消化器系', en: 'digestive system', alt: [], cats: ['digestive'] },
  { ja: '腹部；腹部の', en: 'abdomen', alt: ['belly', 'abdominal'], cats: ['digestive'] },
  { ja: '食道；食道の', en: 'esophagus', alt: ['esophageal'], cats: ['digestive', 'swallowing'] },
  { ja: '胃；胃の', en: 'stomach', alt: ['gastric'], cats: ['digestive'] },
  { ja: '噴門', en: 'cardia', alt: [], cats: ['digestive'] },
  { ja: '幽門', en: 'pylorus', alt: [], cats: ['digestive'] },
  { ja: '腸；腸の', en: 'intestine', alt: ['bowel', 'gut', 'intestinal'], cats: ['digestive'] },
  { ja: '小腸', en: 'small intestine', alt: ['small bowel'], cats: ['digestive'] },
  { ja: '大腸', en: 'large intestine', alt: ['large bowel'], cats: ['digestive'] },
  { ja: '十二指腸；十二指腸の', en: 'duodenum', alt: ['duodenal'], cats: ['digestive'] },
  { ja: '空腸；空腸の', en: 'jejunum', alt: ['jejunal'], cats: ['digestive'] },
  { ja: '回腸；回腸の', en: 'ileum', alt: ['ileal'], cats: ['digestive'] },
  { ja: '盲腸；盲腸の', en: 'cecum', alt: ['cecal'], cats: ['digestive'] },
  { ja: '結腸；結腸の', en: 'colon', alt: ['colonic'], cats: ['digestive'] },
  { ja: '上行結腸', en: 'ascending colon', alt: [], cats: ['digestive'] },
  { ja: '横行結腸', en: 'transverse colon', alt: [], cats: ['digestive'] },
  { ja: '下行結腸', en: 'descending colon', alt: [], cats: ['digestive'] },
  { ja: 'S状結腸', en: 'sigmoid colon', alt: [], cats: ['digestive'] },
  { ja: '直腸；直腸の', en: 'rectum', alt: ['rectal'], cats: ['digestive'] },
  { ja: '肛門；肛門の', en: 'anus', alt: ['anal'], cats: ['digestive'] },
  { ja: '虫垂；虫垂の', en: 'appendix', alt: ['appendiceal'], cats: ['digestive'] },
  { ja: '肝臓；肝臓の', en: 'liver', alt: ['hepatic'], cats: ['digestive'] },
  { ja: '胆嚢；胆嚢の', en: 'gallbladder', alt: ['cholecyst', 'cholecystic'], cats: ['digestive'] },
  { ja: '胆管', en: 'bile duct', alt: ['biliary duct'], cats: ['digestive'] },
  { ja: '膵臓；膵臓の', en: 'pancreas', alt: ['pancreatic'], cats: ['digestive'] },
  { ja: '腹膜；腹膜の', en: 'peritoneum', alt: ['peritoneal'], cats: ['digestive'] },
  { ja: '上腹部；上腹部の', en: 'epigastrium', alt: ['epigastric'], cats: ['digestive'] },
  { ja: '下腹部；下腹部の', en: 'hypogastrium', alt: ['hypogastric'], cats: ['digestive'] },

  // ===== 消化器系 B. 生理（p.89）=====
  { ja: '吸収', en: 'absorption', alt: [], cats: ['digestive'] },
  { ja: '排泄', en: 'defecation', alt: [], cats: ['digestive'] },
  { ja: '消化', en: 'digestion', alt: [], cats: ['digestive'] },
  { ja: '摂取', en: 'ingestion', alt: [], cats: ['digestive'] },

  // ===== 消化器系 C. 症状（p.89〜90）=====
  { ja: '膨満', en: 'bloating', alt: [], cats: ['digestive'] },
  { ja: '食欲不振', en: 'anorexia', alt: [], cats: ['digestive'] },
  { ja: '胸焼け', en: 'heartburn', alt: [], cats: ['digestive'] },
  { ja: '吐き気', en: 'nausea', alt: [], cats: ['digestive'] },
  { ja: '血便', en: 'bloody stool', alt: [], cats: ['digestive'] },
  { ja: '便秘', en: 'constipation', alt: [], cats: ['digestive'] },
  { ja: '胃痙攣', en: 'stomach cramps', alt: [], cats: ['digestive'] },
  { ja: '心窩部痛，上腹部痛', en: 'epigastralgia', alt: ['epigastric pain'], cats: ['digestive'] },
  { ja: '嘔吐', en: 'vomiting', alt: [], cats: ['digestive'] },

  // ===== 消化器系 D. 疾患名（p.90〜91）=====
  { ja: '虫垂炎', en: 'appendicitis', alt: [], cats: ['digestive'] },
  { ja: '胆嚢炎', en: 'cholecystitis', alt: [], cats: ['digestive'] },
  { ja: '胆石〔症〕', en: 'cholelithiasis', alt: ['gallstone'], cats: ['digestive'] },
  { ja: '肝硬変', en: 'cirrhosis', alt: [], cats: ['digestive'] },
  { ja: '大腸炎', en: 'colitis', alt: [], cats: ['digestive'] },
  { ja: '潰瘍性大腸炎', en: 'ulcerative colitis', alt: [], cats: ['digestive'] },
  { ja: 'クローン病', en: 'Crohn’s disease', alt: [], cats: ['digestive'] },
  { ja: '憩室炎', en: 'diverticulitis', alt: [], cats: ['digestive'] },
  { ja: '十二指腸潰瘍', en: 'duodenal ulcer', alt: [], cats: ['digestive'] },
  { ja: '胃潰瘍', en: 'gastric ulcer', alt: [], cats: ['digestive'] },
  { ja: '胃炎', en: 'gastritis', alt: [], cats: ['digestive'] },
  { ja: '胃食道逆流症', en: 'gastroesophageal reflux disease (GERD)', alt: ['gastroesophageal reflux disease', 'GERD'], cats: ['digestive'] },
  { ja: '痔疾', en: 'hemorrhoids', alt: [], cats: ['digestive'] },
  { ja: '肝炎', en: 'hepatitis', alt: [], cats: ['digestive'] },
  { ja: '腸閉塞', en: 'ileus', alt: ['intestinal obstruction'], cats: ['digestive'] },
  { ja: '過敏性腸症候群', en: 'irritable bowel syndrome (IBS)', alt: ['irritable bowel syndrome', 'IBS'], cats: ['digestive'] },
  { ja: '膵炎', en: 'pancreatitis', alt: [], cats: ['digestive'] },
  { ja: '腸捻転', en: 'volvulus', alt: [], cats: ['digestive'] },

  // ===== 消化器系 E. その他（p.91）=====
  { ja: '食欲', en: 'appetite', alt: [], cats: ['digestive'] },
  { ja: '便通', en: 'bowel movement', alt: [], cats: ['digestive'] },
  { ja: '大便', en: 'feces', alt: ['stool'], cats: ['digestive'] },
  { ja: '胃液', en: 'gastric juice', alt: [], cats: ['digestive'] },
  { ja: '消化〔性〕の', en: 'peptic', alt: [], cats: ['digestive'] },

  // ===== 嚥下 A. 部位名（p.102）※食道は上の消化器系に両方の分野で登録済み =====
  { ja: '上顎骨', en: 'maxilla', alt: [], cats: ['swallowing'] },
  { ja: '下顎骨', en: 'mandible', alt: [], cats: ['swallowing'] },
  { ja: '舌骨', en: 'hyoid bone', alt: [], cats: ['swallowing'] },
  { ja: '口蓋垂', en: 'uvula', alt: ['uvula of soft palate'], cats: ['swallowing'] },
  { ja: '喉頭蓋', en: 'epiglottis', alt: [], cats: ['swallowing'] },
  { ja: '気管；気管の', en: 'trachea', alt: ['tracheal'], cats: ['swallowing'] },
  { ja: '歯肉；歯肉の', en: 'gum', alt: ['gingiva', 'gingival'], cats: ['swallowing'] },
  { ja: '口腔', en: 'oral cavity', alt: [], cats: ['swallowing'] },
  { ja: '舌；舌の', en: 'tongue', alt: ['lingua', 'lingual'], cats: ['swallowing'] },
  { ja: '舌扁桃', en: 'lingual tonsil', alt: [], cats: ['swallowing'] },
  { ja: '咽頭；咽頭の', en: 'pharynx', alt: ['pharyngeal'], cats: ['swallowing'] },
  { ja: '咽頭腔', en: 'cavity of pharynx', alt: [], cats: ['swallowing'] },
  { ja: '鼻咽頭', en: 'nasopharynx', alt: [], cats: ['swallowing'] },
  { ja: '喉頭；喉頭の', en: 'larynx', alt: ['laryngeal'], cats: ['swallowing'] },

  // ===== 嚥下 B. 生理学 =====
  { ja: '嚥下する，飲み込む', en: 'swallow', alt: [], cats: ['swallowing'] },
  { ja: '唾液分泌，流涎（りゅうぜん）', en: 'salivation', alt: [], cats: ['swallowing'] },

  // ===== 嚥下 C. 疾患名 =====
  { ja: '嚥下障害，嚥下困難', en: 'dysphagia', alt: [], cats: ['swallowing'] },
  { ja: '嚥下不能〔症〕', en: 'aphagia', alt: [], cats: ['swallowing'] },
  { ja: '嚥下痛', en: 'odynophagia', alt: [], cats: ['swallowing'] },
  { ja: '舌炎', en: 'glossitis', alt: [], cats: ['swallowing'] },

  // ===== 嚥下 D. その他 =====
  { ja: '唾液', en: 'saliva', alt: [], cats: ['swallowing'] },

  // ===== 聴覚 A. 部位名（p.113〜114）=====
  { ja: '感覚系', en: 'the sensory systems', alt: [], cats: ['hearing'] },
  { ja: '聴覚系', en: 'the auditory system', alt: [], cats: ['hearing'] },
  { ja: '耳；耳の，聴覚の', en: 'ear', alt: ['auris', 'auricular', 'aural'], cats: ['hearing'] },
  { ja: '外耳', en: 'the outer ear', alt: [], cats: ['hearing'] },
  { ja: '耳輪上部', en: 'helix', alt: [], cats: ['hearing'] },
  { ja: '対輪', en: 'antihelix', alt: ['anthelix'], cats: ['hearing'] },
  { ja: '耳甲介', en: 'concha', alt: ['concha of ear'], cats: ['hearing'] },
  { ja: '耳垂，耳たぶ', en: 'auricular lobule', alt: ['earlobe'], cats: ['hearing'] },
  { ja: '外耳道', en: 'external acoustic meatus', alt: ['ear canal'], cats: ['hearing'] },
  { ja: '中耳', en: 'the middle ear', alt: [], cats: ['hearing'] },
  { ja: '鼓膜', en: 'tympanic membrane', alt: ['eardrum'], cats: ['hearing'] },
  { ja: '鼓室', en: 'tympanic cavity', alt: [], cats: ['hearing'] },
  { ja: '耳小骨', en: 'tympanic bone', alt: [], cats: ['hearing'] },
  { ja: '耳管', en: 'Eustachian tube', alt: [], cats: ['hearing'] },
  { ja: '内耳', en: 'the inner ear', alt: [], cats: ['hearing'] },
  { ja: 'ツチ骨', en: 'malleus', alt: [], cats: ['hearing'] },
  { ja: 'キヌタ骨', en: 'incus', alt: [], cats: ['hearing'] },
  { ja: 'アブミ骨', en: 'stapes', alt: [], cats: ['hearing'] },
  { ja: '三半規管', en: 'semicircular canal', alt: [], cats: ['hearing'] },
  { ja: '蝸牛', en: 'cochlea', alt: [], cats: ['hearing'] },
  { ja: '蝸牛神経，聴神経', en: 'cochlear nerve', alt: ['auditory nerve'], cats: ['hearing'] },
  { ja: '迷路', en: 'labyrinth', alt: [], cats: ['hearing'] },
  { ja: '前庭神経', en: 'vestibular nerve', alt: [], cats: ['hearing'] },
  { ja: '内耳神経，前庭蝸牛神経，第八脳神経', en: 'vestibulocochlear nerve', alt: ['eighth cranial nerve'], cats: ['hearing'] },
  { ja: '内耳道', en: 'internal auditory meatus', alt: [], cats: ['hearing'] },
  { ja: '錐体骨', en: 'petrous bone', alt: [], cats: ['hearing'] },
  { ja: '側頭骨', en: 'temporal bone', alt: [], cats: ['hearing'] },

  // ===== 聴覚 B. 疾患名（p.114）=====
  { ja: '難聴，聴力障害', en: 'hearing disturbance', alt: ['hearing loss', 'hearing impairment'], cats: ['hearing'] },
  { ja: '伝音性難聴', en: 'transmission deafness', alt: ['conductive hearing loss', 'conduction deafness', 'conductive deafness'], cats: ['hearing'] },
  { ja: '感音性難聴', en: 'sensorineural hearing impairment', alt: ['sensorineural hearing loss', 'perception deafness', 'sensorineural deafness'], cats: ['hearing'] },
  { ja: '耳鼻咽喉疾患', en: 'otorhinolaryngologic disease', alt: ['ENT (ear-nose-throat) disease', 'ENT disease', 'ear-nose-throat disease'], cats: ['hearing'] },
  { ja: '中枢性難聴', en: 'central hearing loss', alt: [], cats: ['hearing'] },
  { ja: '騒音性難聴', en: 'noise-induced hearing loss', alt: [], cats: ['hearing'] },

  // ===== 聴覚 C. その他（p.115）=====
  { ja: '聴力検査，オージオメトリー', en: 'audiometry', alt: ['hearing test'], cats: ['hearing'] },
  { ja: '骨伝導', en: 'bone conduction', alt: [], cats: ['hearing'] },
  { ja: '空気伝導', en: 'air conduction', alt: [], cats: ['hearing'] },
  { ja: '耳垢', en: 'earwax', alt: [], cats: ['hearing'] },
  { ja: '耳かき', en: 'earpick', alt: [], cats: ['hearing'] },
  { ja: '点耳薬', en: 'eardrops', alt: [], cats: ['hearing'] },
  { ja: '耳鏡', en: 'otoscope', alt: [], cats: ['hearing'] },
  { ja: '額帯鏡', en: 'auriscope', alt: ['head mirror'], cats: ['hearing'] }
];
