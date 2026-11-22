// Three additional, lesson-specific questions complement the two curriculum questions.
const Q = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation });

export const extraQuestions = {
  1: [
    Q('Dalam “a useful book”, useful termasuk kelas kata apa?', ['Adverb', 'Adjective', 'Verb'], 1, 'Useful menerangkan noun book, sehingga berfungsi sebagai adjective.'),
    Q('Kata study berfungsi sebagai noun dalam kalimat mana?', ['I study every day.', 'They study at night.', 'My study is small.'], 2, 'Study setelah my mengisi posisi noun pada noun phrase my study.'),
    Q('Pernyataan mana yang benar tentang akhiran -ly?', ['Semua kata -ly adalah adverb.', 'Tidak ada adjective berakhiran -ly.', 'Akhiran -ly tidak selalu menentukan kelas kata.'], 2, 'Friendly adalah adjective walaupun berakhiran -ly; fungsi harus dilihat dalam konteks.'),
  ],
  2: [
    Q('Dalam “She gave me a gift”, apa fungsi me?', ['Direct object', 'Indirect object', 'Subject complement'], 1, 'Me adalah penerima, sedangkan a gift adalah benda yang diberikan.'),
    Q('Mengapa a doctor dalam “She is a doctor” bukan object?', ['Karena menjelaskan identitas subject.', 'Karena terletak sebelum verb.', 'Karena selalu merupakan adverbial.'], 0, 'A doctor adalah subject complement setelah linking verb is.'),
    Q('Manakah yang merupakan adverbial berbentuk prepositional phrase?', ['Quickly', 'In the library', 'Happy'], 1, 'In the library adalah prepositional phrase yang berfungsi sebagai adverbial tempat.'),
  ],
  3: [
    Q('Pola “They painted the wall blue yesterday” adalah ...', ['S + V + O + C + A', 'S + V + C + O + A', 'S + V + O + O'], 0, 'The wall adalah object, blue object complement, dan yesterday adverbial waktu.'),
    Q('Dalam “She put the keys on the table”, on the table berfungsi sebagai ...', ['Subject complement', 'Object kedua', 'Adverbial tempat'], 2, 'Frasa tempat melengkapi makna put dalam pola S + V + O + A.'),
    Q('Pernyataan mana yang benar tentang unsur S, V, O, C, A?', ['Setiap huruf selalu satu kata.', 'Satu unsur dapat berupa frasa panjang.', 'Semua kalimat harus punya object.'], 1, 'The very curious student tetap satu subject meskipun terdiri dari beberapa kata.'),
  ],
  4: [
    Q('Urutan pernyataan netral yang tepat adalah ...', ['Object + subject + verb', 'Subject + verb + object', 'Verb + object + subject'], 1, 'Dalam pernyataan dasar, subject biasanya mendahului verb dan object mengikuti verb.'),
    Q('Manakah kalimat dengan urutan yang wajar?', ['We grammar studied.', 'We studied grammar.', 'Grammar studied we.'], 1, 'Grammar adalah object dari studied sehingga ditempatkan setelah verb.'),
    Q('Di mana often lazim ditempatkan dalam “She ... studies”?', ['Sebelum main verb: She often studies.', 'Setelah subject sebagai object: She studies often grammar.', 'Sebelum subject: Often she studies selalu wajib.'], 0, 'Adverb frekuensi seperti often lazim muncul sebelum main verb.'),
  ],
  5: [
    Q('Setelah does dalam pertanyaan present simple, main verb berbentuk ...', ['V2', 'Bentuk dasar', 'Verb-ing'], 1, 'Does sudah membawa penanda present dan orang ketiga; main verb kembali ke bentuk dasar.'),
    Q('Manakah negasi past simple yang benar?', ['They did not went.', 'They did not go.', 'They do not went.'], 1, 'Did not diikuti bentuk dasar go.'),
    Q('Pertanyaan dengan be yang benar adalah ...', ['Does she is ready?', 'Is she ready?', 'Do she be ready?'], 1, 'Be dipindahkan sebelum subject tanpa do-support dalam pertanyaan sederhana.'),
  ],
  6: [
    Q('Cara menghitung advice yang tepat adalah ...', ['Two advices', 'Two pieces of advice', 'An advice'], 1, 'Advice umumnya uncountable; gunakan unit pieces of untuk menghitungnya.'),
    Q('Quantifier yang cocok untuk noun countable plural adalah ...', ['Many', 'Much', 'A little'], 0, 'Many digunakan dengan countable plural seperti many books.'),
    Q('Dalam “two coffees”, coffees biasanya berarti ...', ['Dua jenis grammar', 'Dua porsi minuman', 'Kata yang selalu salah'], 1, 'Noun yang biasanya mass dapat menjadi countable ketika bermakna porsi.'),
  ],
  7: [
    Q('Mengapa bentuk yang benar adalah “an hour”?', ['Karena h diucapkan keras.', 'Karena bunyi awalnya vokal.', 'Karena hour selalu plural.'], 1, 'Pemilihan a/an mengikuti bunyi; h pada hour tidak diucapkan.'),
    Q('Kalimat yang merujuk kategori umum adalah ...', ['The dogs in our yard are noisy.', 'Dogs need exercise.', 'The dog we saw is friendly.'], 1, 'Plural noun tanpa article dapat menyatakan kategori umum.'),
    Q('Setelah “I saw a dog”, rujukan berikutnya lazim menjadi ...', ['an dog', 'the dog', 'a dogs'], 1, 'The dog merujuk kembali ke anjing yang sudah diperkenalkan.'),
  ],
  8: [
    Q('Bentuk object pronoun untuk she adalah ...', ['her', 'hers', 'she'], 0, 'Her digunakan sebagai object pronoun, misalnya I called her.'),
    Q('Manakah possessive pronoun yang dapat berdiri sendiri?', ['my', 'their', 'mine'], 2, 'Mine menggantikan noun phrase seperti my book.'),
    Q('Kalimat mana yang rujukan pronoun-nya perlu diperjelas?', ['Maya told Lina that she was late.', 'Maya was late.', 'Lina called Maya.'], 0, 'She dapat merujuk Maya atau Lina sehingga kalimat ambigu.'),
  ],
  9: [
    Q('Demonstrative yang cocok dengan books di dekat pembicara adalah ...', ['this', 'these', 'that'], 1, 'These digunakan untuk plural yang dekat dalam konteks.'),
    Q('Some dapat muncul dalam pertanyaan ketika ...', ['menawarkan sesuatu', 'semua jawaban harus no', 'noun selalu singular'], 0, 'Would you like some tea? adalah pertanyaan tawaran.'),
    Q('Pilih bentuk untuk “___ water” pada pertanyaan netral.', ['Any', 'Many', 'These'], 0, 'Any umum digunakan pada pertanyaan tentang jumlah tidak pasti dengan uncountable noun.'),
  ],
  10: [
    Q('Dalam “The soup tastes delicious”, delicious adalah ...', ['Adverb cara', 'Adjective sebagai complement', 'Direct object'], 1, 'Delicious mendeskripsikan soup setelah linking verb tastes.'),
    Q('Manakah adverb yang berarti “hampir tidak”?', ['hard', 'hardly', 'friendly'], 1, 'Hardly berarti hampir tidak, berbeda dari hard yang dapat berarti dengan keras.'),
    Q('Pilih pasangan yang benar.', ['a carefully driver / drives careful', 'a careful driver / drives carefully', 'a careful driver / drives careful'], 1, 'Careful menerangkan noun; carefully menerangkan cara mengemudi.'),
  ],
  11: [
    Q('Present simple lazim dipakai untuk ...', ['kejadian yang sedang berlangsung detik ini', 'kebiasaan dan fakta umum', 'masa lalu alternatif'], 1, 'Present simple menyatakan kebiasaan, fakta, dan keadaan umum.'),
    Q('Pilih bentuk untuk subject she.', ['She work.', 'She works.', 'She working.'], 1, 'Orang ketiga tunggal memakai -s pada present simple positif.'),
    Q('Manakah present simple untuk jadwal tetap?', ['The train leaves at six.', 'The train is leave at six.', 'The train left yesterday.'], 0, 'Jadwal tetap dapat dinyatakan dengan present simple walaupun waktunya nanti.'),
  ],
  12: [
    Q('Rumus present continuous adalah ...', ['am/is/are + V-ing', 'have/has + V3', 'will + V1'], 0, 'Present continuous memakai bentuk be yang sesuai ditambah verb-ing.'),
    Q('Kalimat mana yang menunjukkan situasi sementara?', ['They stay there every year.', 'They are staying there this week.', 'They stayed there last year.'], 1, 'Are staying menyoroti situasi sementara selama minggu ini.'),
    Q('Manakah verb yang biasanya tidak continuous pada makna keadaan?', ['run', 'write', 'know'], 2, 'Know biasanya menyatakan keadaan pengetahuan, bukan proses yang sedang berlangsung.'),
  ],
  13: [
    Q('Dalam “I usually walk, but today I am taking the bus”, usually walk berarti ...', ['kebiasaan', 'kejadian lampau', 'rencana hipotetis'], 0, 'Usually memberi konteks kebiasaan sehingga present simple cocok.'),
    Q('Pilih bentuk untuk aktivitas sementara minggu ini.', ['She works from home this week.', 'She is working from home this week.', 'She worked from home every week.'], 1, 'Present continuous menekankan keadaan sementara selama this week.'),
    Q('Perbedaan “I think she is right” dan “I am thinking about it” adalah ...', ['keduanya pasti masa lampau', 'think pertama adalah pendapat, kedua proses berpikir', 'thinking selalu salah'], 1, 'Makna verb menentukan apakah continuous wajar.'),
  ],
  14: [
    Q('Past simple digunakan untuk ...', ['kejadian selesai di waktu lampau', 'proses yang sedang berlangsung sekarang', 'fakta tanpa waktu'], 0, 'Past simple menempatkan kejadian pada masa lampau yang selesai.'),
    Q('Pilih bentuk negatif yang benar.', ['She did not saw it.', 'She did not see it.', 'She does not saw it.'], 1, 'Did not sudah menandai lampau; see kembali ke bentuk dasar.'),
    Q('Bentuk past simple dari buy adalah ...', ['buyed', 'bought', 'buying'], 1, 'Buy adalah irregular verb dengan bentuk lampau bought.'),
  ],
  15: [
    Q('Dalam “I was reading when the lights went out”, kegiatan latarnya adalah ...', ['went out', 'was reading', 'when'], 1, 'Was reading adalah proses yang sedang berlangsung saat kejadian lain menyela.'),
    Q('Bentuk be yang tepat untuk they pada past continuous adalah ...', ['was', 'were', 'is'], 1, 'They memakai were dalam past continuous.'),
    Q('Pilih kalimat tentang dua proses yang berlangsung bersamaan.', ['She was reading while I was cooking.', 'She reads when I cooked.', 'She will read because I cook.'], 0, 'Dua bentuk past continuous dapat menunjukkan proses yang berlangsung bersamaan di masa lalu.'),
  ],
  16: [
    Q('Will paling cocok untuk keputusan yang dibuat saat berbicara dalam ...', ['I will help you with that bag.', 'I am meeting her at six as arranged.', 'I visited her yesterday.'], 0, 'Will dapat menyatakan keputusan spontan atau tawaran saat berbicara.'),
    Q('Setelah will, verb harus ...', ['mendapat -s untuk she', 'berbentuk dasar', 'selalu verb-ing'], 1, 'Will diikuti bentuk dasar untuk semua subject.'),
    Q('Negasi dari “She will come” adalah ...', ['She does not will come.', 'She will not come.', 'She will not comes.'], 1, 'Letakkan not setelah will dan gunakan bentuk dasar come.'),
  ],
  17: [
    Q('Be going to dapat menunjukkan ...', ['niat yang sudah ada', 'masa lalu yang selesai', 'object complement'], 0, 'Going to sering menekankan niat atau rencana yang sudah terbentuk.'),
    Q('“Look at those clouds. It ... rain.” Bentuk yang cocok adalah ...', ['is going to', 'was going to yesterday', 'has been'], 0, 'Tanda awan saat ini mendukung prediksi dengan be going to.'),
    Q('Pilih kalimat untuk janji bertemu yang sudah diatur.', ['I am meeting my tutor on Friday.', 'I meet my tutor yesterday.', 'I meeting my tutor on Friday.'], 0, 'Present continuous dapat menyatakan pengaturan masa depan yang sudah dibuat.'),
  ],
  18: [
    Q('Bentuk present perfect adalah ...', ['have/has + V3', 'am/is/are + V-ing', 'did + V2'], 0, 'Present perfect dibentuk dengan have atau has dan past participle.'),
    Q('Manakah yang cocok dengan waktu lampau selesai yesterday?', ['I have finished it yesterday.', 'I finished it yesterday.', 'I had finish it yesterday.'], 1, 'Past simple dipakai ketika waktu lampau yang selesai disebut jelas.'),
    Q('Dalam “She has lived here since 2020”, since menunjukkan ...', ['durasi tiga tahun', 'titik awal', 'waktu masa depan'], 1, 'Since menyebut titik awal sebuah keadaan yang berlanjut.'),
  ],
  19: [
    Q('Pertanyaan “Have you seen this film?” terutama menanyakan ...', ['waktu spesifik', 'pengalaman hingga kini', 'waktu masa depan'], 1, 'Present perfect dapat menanyakan pengalaman tanpa waktu selesai tertentu.'),
    Q('Jawaban untuk “When did you see it?” yang tepat adalah ...', ['I saw it in 2022.', 'I have seen it in 2022.', 'I seeing it in 2022.'], 0, 'Waktu in 2022 selesai sehingga past simple tepat.'),
    Q('Manakah keadaan yang masih berlangsung?', ['She lived here from 2020 to 2022.', 'She has lived here since 2020.', 'She moved away in 2022.'], 1, 'Present perfect dengan since dapat menunjukkan keadaan yang berlanjut sampai sekarang.'),
  ],
  20: [
    Q('Present perfect continuous menekankan ...', ['proses atau durasi', 'hanya jumlah hasil', 'masa lalu alternatif'], 0, 'Bentuk continuous menyoroti kegiatan yang berlangsung atau baru berhenti.'),
    Q('Pilih bentuk lengkap yang benar.', ['has studying', 'has been studying', 'have been studies'], 1, 'Susunannya has + been + verb-ing untuk she/he/it.'),
    Q('Kalimat mana yang lebih menekankan hasil selesai?', ['I have completed three exercises.', 'I have been studying all morning.', 'It has been raining.'], 0, 'Present perfect simple dengan jumlah three exercises menyoroti hasil.'),
  ],
  21: [
    Q('Could dapat menjadi permintaan sopan pada ...', ['Could you open the window?', 'She could swim at six.', 'It could get cold.'], 0, 'Could you ...? sering digunakan untuk meminta bantuan dengan sopan.'),
    Q('Untuk satu keberhasilan khusus di masa lalu, bentuk yang sering lebih jelas adalah ...', ['was able to', 'can to', 'will could'], 0, 'Was able to atau managed to menyoroti satu keberhasilan tertentu.'),
    Q('Manakah bentuk masa depan kemampuan yang benar?', ['I will can join.', 'I will be able to join.', 'I can to join.'], 1, 'Be able to dapat dipakai setelah will untuk menyatakan kemampuan masa depan.'),
  ],
  22: [
    Q('“You must not enter” berarti ...', ['tidak wajib masuk', 'dilarang masuk', 'sebaiknya masuk'], 1, 'Must not menyatakan larangan.'),
    Q('“You do not have to enter” berarti ...', ['dilarang masuk', 'tidak wajib masuk', 'pasti masuk'], 1, 'Do not have to menyatakan tidak ada kewajiban.'),
    Q('Bentuk saran negatif yang tepat adalah ...', ['You should not go.', 'You should not to go.', 'You must not go untuk semua saran.'], 0, 'Should not + bentuk dasar memberi saran agar tidak melakukan tindakan.'),
  ],
  23: [
    Q('May dan might menyatakan kemungkinan dengan ...', ['persentase tetap yang berbeda', 'makna yang bergantung konteks', 'makna selalu masa lalu'], 1, 'Keduanya tidak memiliki persentase kemungkinan tetap.'),
    Q('Dugaan tentang masa lalu dapat memakai ...', ['might have + V3', 'might + V2', 'might to + V1'], 0, 'Might have + past participle membicarakan kemungkinan lampau.'),
    Q('“May I ask a question?” menyatakan ...', ['izin formal', 'proses lampau', 'kewajiban'], 0, 'May pada pertanyaan ini meminta izin secara formal atau sopan.'),
  ],
  24: [
    Q('Dalam passive voice, object aktif biasanya menjadi ...', ['subject pasif', 'adverbial', 'modal'], 0, 'Object aktif dipindahkan menjadi subject dalam passive voice.'),
    Q('Pilih passive past simple yang benar.', ['The report was wrote.', 'The report was written.', 'The report written was.'], 1, 'Passive past simple memakai was/were + V3; written adalah V3 dari write.'),
    Q('Mengapa “The baby sleeps” tidak lazim dipasifkan?', ['Tidak memiliki direct object.', 'Subject-nya singular.', 'Verb-nya present.'], 0, 'Sleep pada penggunaan ini intransitive sehingga tidak ada object yang menjadi subject pasif.'),
  ],
  25: [
    Q('“I had my laptop repaired” biasanya berarti ...', ['saya sendiri memperbaiki', 'saya mengatur orang lain memperbaiki', 'laptop memperbaiki saya'], 1, 'Causative have + object + V3 menunjukkan pekerjaan yang diatur/dialami.'),
    Q('Pilih pola dengan orang yang mengerjakan disebut langsung.', ['I had a technician repair it.', 'I had a technician repaired it.', 'I had a technician to repair it.'], 0, 'Have + person diikuti bentuk dasar repair.'),
    Q('Setelah get + person, bentuk yang tepat adalah ...', ['V3 tanpa object', 'to + V1', 'will + V2'], 1, 'Get someone to do something memakai to-infinitive.'),
  ],
  26: [
    Q('Dalam “She likes tea, but he prefers coffee”, but menunjukkan ...', ['pilihan', 'kontras', 'akibat'], 1, 'But menghubungkan dua gagasan yang berlawanan.'),
    Q('Koma sebelum and lazim ketika and menghubungkan ...', ['dua independent clauses', 'dua huruf', 'semua dua noun'], 0, 'Dua klausa lengkap sering dipisah koma + coordinating conjunction.'),
    Q('Manakah penghubung untuk pilihan?', ['so', 'but', 'or'], 2, 'Or menyatakan pilihan atau alternatif.'),
  ],
  27: [
    Q('“Because it rained.” sebagai satu kalimat formal adalah ...', ['klausa lengkap', 'fragment', 'passive voice'], 1, 'Because memperkenalkan dependent clause yang memerlukan main clause dalam tulisan formal.'),
    Q('Jika dependent clause berada di awal, biasanya setelahnya ada ...', ['koma', 'tanda tanya', 'semicolon wajib'], 0, 'Koma memisahkan klausa pembuka dari main clause.'),
    Q('Pilih kalimat kontras yang benar.', ['Although it rained, we went out.', 'Although it rained, but we went out.', 'Because it rained, but we went out.'], 0, 'Although sudah menandai kontras; but tidak perlu untuk hubungan yang sama.'),
  ],
  28: [
    Q('Defining relative clause biasanya ...', ['dipisah koma', 'tidak dipisah koma', 'harus memakai which untuk orang'], 1, 'Defining clause diperlukan untuk identifikasi dan biasanya tidak diapit koma.'),
    Q('Dalam non-defining relative clause, relative pronoun yang tidak dipakai adalah ...', ['who', 'which', 'that'], 2, 'That tidak digunakan untuk memperkenalkan non-defining clause.'),
    Q('Kata untuk menunjukkan kepemilikan dalam relative clause adalah ...', ['whose', 'where', 'when'], 0, 'Whose menghubungkan noun dengan kepemilikan.'),
  ],
  29: [
    Q('Pada first conditional biasa, if-clause memakai ...', ['present simple', 'will + V1', 'past perfect'], 0, 'If-clause memakai present simple walaupun hasilnya merujuk masa depan.'),
    Q('Klausa hasil dapat memakai can untuk ...', ['kemampuan atau izin', 'lampau selesai', 'subject complement'], 0, 'Can memberi nuansa kemampuan atau izin pada hasil bersyarat.'),
    Q('Pilih urutan yang juga benar.', ['We will stay home if it rains.', 'We will stay home if it will rains.', 'We would stayed home if it rains.'], 0, 'If-clause boleh muncul di akhir tanpa mengubah pola dasar.'),
  ],
  30: [
    Q('Second conditional terutama membayangkan ...', ['masa lalu yang sudah selesai', 'keadaan kini atau nanti yang tidak nyata', 'fakta ilmiah'], 1, 'Second conditional memakai bentuk lampau untuk jarak dari kenyataan kini/nanti.'),
    Q('Pola third conditional adalah ...', ['if + past perfect, would have + V3', 'if + present, will + V1', 'if + past, would + V1'], 0, 'Third conditional membicarakan masa lalu alternatif.'),
    Q('“If she had left earlier, she would have caught the train” menyiratkan ...', ['ia benar-benar naik kereta', 'ia tidak berangkat lebih awal', 'ini rencana masa depan'], 1, 'Third conditional membayangkan akibat lampau yang tidak terjadi.'),
  ],
  31: [
    Q('Reported speech setelah said sering mengubah will menjadi ...', ['would', 'will have', 'was'], 0, 'Will lazim bergeser menjadi would saat reporting verb berbentuk lampau.'),
    Q('Kata waktu tomorrow dalam laporan lampau dapat berubah menjadi ...', ['yesterday', 'the next day', 'now'], 1, 'The next day menyesuaikan sudut waktu dari pelapor.'),
    Q('Pilih laporan untuk “I can swim,” he said.', ['He said he could swim.', 'He said I can swim.', 'He said he can to swim.'], 0, 'Can lazim bergeser ke could dan I merujuk pada he.'),
  ],
  32: [
    Q('Reported yes/no question umumnya diperkenalkan oleh ...', ['if atau whether', 'that saja', 'because'], 0, 'If/whether menghubungkan reported yes/no question.'),
    Q('Pilih urutan reported question yang benar.', ['She asked where was he.', 'She asked where he was.', 'She asked where did he was.'], 1, 'Reported question memakai urutan pernyataan: subject sebelum verb.'),
    Q('Pola melaporkan permintaan adalah ...', ['ask + object + to + V1', 'ask + object + V2', 'ask + to + object'], 0, 'Ask someone to do something adalah pola umum untuk reported request.'),
  ],
  33: [
    Q('Jika who adalah subject, pertanyaan yang tepat adalah ...', ['Who did called?', 'Who called?', 'Who does called?'], 1, 'Subject question tidak memerlukan do-support.'),
    Q('Pertanyaan object dari “Maya called Leo” adalah ...', ['Who called Leo?', 'Who did Maya call?', 'Who Maya called?'], 1, 'Did + subject + base verb menanyakan object yang dihubungi.'),
    Q('Setelah did dalam wh-question, verb utama berbentuk ...', ['V1', 'V2', 'V3'], 0, 'Did membawa penanda lampau, sehingga main verb memakai bentuk dasar.'),
  ],
  34: [
    Q('Bentuk comparative dari good adalah ...', ['gooder', 'better', 'best'], 1, 'Good memiliki comparative tak beraturan: better.'),
    Q('Untuk membandingkan dua hal, pakai ...', ['than', 'the most', 'as than'], 0, 'Comparative biasanya diikuti than saat dua hal dibandingkan.'),
    Q('Manakah superlative yang tepat?', ['the most useful', 'the more useful', 'most useful than'], 0, 'The most useful menyatakan derajat tertinggi di suatu kelompok.'),
  ],
  35: [
    Q('Setelah enjoy, bentuk yang lazim adalah ...', ['to + verb', 'verb-ing', 'modal + verb'], 1, 'Enjoy biasanya diikuti gerund, misalnya enjoy reading.'),
    Q('Setelah want, bentuk yang lazim adalah ...', ['to + verb', 'verb-ing saja', 'V2'], 0, 'Want biasanya diikuti to-infinitive.'),
    Q('Pilih kalimat yang benar.', ['I decided leaving early.', 'I decided to leave early.', 'I decided leave early.'], 1, 'Decide mengambil to-infinitive.'),
  ],
  36: [
    Q('Preposisi untuk jam tertentu adalah ...', ['in', 'on', 'at'], 2, 'At dipakai untuk waktu spesifik seperti at 9.'),
    Q('Preposisi untuk hari Senin adalah ...', ['on', 'in', 'at'], 0, 'On dipakai untuk nama hari.'),
    Q('Preposisi untuk tahun 2025 adalah ...', ['at', 'in', 'on'], 1, 'In dipakai untuk bulan dan tahun.'),
  ],
  37: [
    Q('Dalam turn it off, it diletakkan ...', ['setelah off', 'di antara turn dan off', 'sebelum turn'], 1, 'Pronoun object berada di tengah phrasal verb separable.'),
    Q('Look after termasuk ...', ['phrasal verb yang tidak dipisah', 'comparative', 'modal'], 0, 'Look after bermakna merawat dan object mengikuti partikel after.'),
    Q('Pilih penempatan pronoun yang benar.', ['Pick it up.', 'Pick up it.', 'It pick up.'], 0, 'Pada pick up yang separable, pronoun berada di tengah.'),
  ],
  38: [
    Q('Dalam “The list of lessons ...”, subject inti adalah ...', ['lessons', 'list', 'of'], 1, 'List adalah head noun yang menentukan agreement.'),
    Q('Everyone lazim memakai verb ...', ['plural', 'singular', 'tanpa bentuk finite'], 1, 'Everyone adalah indefinite pronoun singular.'),
    Q('Pilih kalimat yang benar.', ['Each student have a book.', 'Each student has a book.', 'Each students has a book.'], 1, 'Each student singular, sehingga memakai has.'),
  ],
  39: [
    Q('Dua independent clauses dapat digabung dengan ...', ['koma saja', 'semicolon', 'spasi saja'], 1, 'Semicolon dapat menghubungkan dua klausa lengkap yang berkaitan.'),
    Q('“I studied, I passed” adalah contoh ...', ['comma splice', 'relative clause', 'passive voice'], 0, 'Dua klausa lengkap tidak cukup dipisahkan oleh satu koma.'),
    Q('Pilih perbaikan yang benar.', ['I studied, so I passed.', 'I studied, I passed.', 'I studied so, I passed.'], 0, 'Koma + coordinating conjunction so menghubungkan kedua klausa.'),
  ],
  40: [
    Q('Urutan penyuntingan yang efisien dimulai dari ...', ['struktur dan tense', 'warna huruf', 'jumlah kata saja'], 0, 'Periksa struktur dan tense sebelum rincian artikel atau pilihan kata.'),
    Q('“For three years” menunjukkan ...', ['titik awal', 'durasi', 'lokasi'], 1, 'For menunjukkan lamanya waktu; since menunjukkan titik awal.'),
    Q('Pilih hasil suntingan untuk keadaan yang berlanjut.', ['She has lived here since 2020.', 'She lives here since 2020.', 'She lived here since 2020 until now.'], 0, 'Present perfect dengan since menyatakan keadaan sejak 2020 hingga kini.'),
  ],
};

export function questionsFor(lesson) {
  const applicationOptions = lesson.id % 2 ? [lesson.good, lesson.bad] : [lesson.bad, lesson.good];
  return [
    { prompt: lesson.question, options: lesson.options, answer: lesson.answer, explanation: lesson.explanation },
    { prompt: `Pilih kalimat yang benar untuk topik ${lesson.title}.`, options: applicationOptions, answer: lesson.id % 2 ? 0 : 1, explanation: `Kalimat yang benar: “${lesson.good}” ${lesson.note}` },
    ...extraQuestions[lesson.id],
  ];
}
