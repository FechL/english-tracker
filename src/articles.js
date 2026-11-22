// Long-form learning articles. Each section is prose first, with optional examples and lists.
const S = (title, paragraphs, examples = [], points = []) => ({ title, paragraphs, examples, points });

export const articleSections = {
  1: [
    S('A. Kelas kata dan fungsi dalam kalimat', [
      'Parts of speech mengelompokkan kata menurut perilakunya: noun menamai orang, benda, atau gagasan; verb menyatakan tindakan atau keadaan; adjective memberi sifat pada noun; dan adverb dapat menerangkan verb, adjective, atau seluruh kalimat. Kelompok lain seperti pronoun, determiner, preposition, dan conjunction membantu membangun hubungan antarkata. Kelas kata adalah titik awal analisis, tetapi tidak sama dengan peran sebuah frasa di dalam kalimat.',
      'Perhatikan kata study. Dalam I study every day, study adalah verb. Dalam My study is small, study adalah noun. Kata yang tampak sama dapat berpindah kelas ketika bentuk dan konteksnya berubah. Karena itu, jangan menilai satu kata hanya dari terjemahannya; lihat posisi, kata di sekitarnya, dan pekerjaan yang sedang dilakukannya.'
    ], [['The careful student writes clearly.', 'The student adalah frasa noun sebagai subject; careful adalah adjective yang menjelaskan student; writes adalah verb; clearly adalah adverb yang menjelaskan cara menulis.']]),
    S('B. Empat kelas inti', [
      'Noun dapat berupa nama khusus (Jakarta), benda konkret (book), atau konsep abstrak (knowledge). Noun sering muncul setelah article atau determiner dan dapat menjadi subject, object, atau complement. Verb adalah pusat klausa; bentuknya dapat menunjukkan waktu, aspek, dan kesesuaian dengan subject. Beberapa verb memerlukan object, sementara yang lain dapat berdiri sendiri.',
      'Adjective biasanya muncul sebelum noun atau setelah linking verb: a useful book dan The book is useful. Adverb sering menjawab bagaimana, kapan, seberapa sering, atau seberapa kuat: She speaks clearly; They often study; It is very useful. Namun akhiran -ly bukan tes mutlak: friendly adalah adjective, sedangkan fast dapat menjadi adjective maupun adverb.'
    ], [['She is a fast runner. She runs fast.', 'Fast menerangkan runner pada kalimat pertama dan runs pada kalimat kedua. Bentuknya sama, tetapi fungsinya berbeda.']]),
    S('C. Kelompok pendukung yang sering tertukar', [
      'Pronoun menggantikan noun phrase, misalnya she menggantikan Maya. Determiner muncul bersama noun untuk membatasi rujukannya: the book, my friend, some water. Preposition menghubungkan noun phrase dengan bagian kalimat lain: in the room, after class. Conjunction menghubungkan kata atau klausa: tea and coffee; I stayed because it rained.',
      'Sebuah kata tidak selalu masuk satu kotak sederhana. That, misalnya, dapat menjadi determiner dalam that book atau memperkenalkan klausa dalam I know that she left. Untuk pemula, cukup tentukan fungsi yang relevan dalam kalimat yang sedang dibaca, lalu verifikasi dengan contoh lain.'
    ], [], ['Cari verb utama terlebih dahulu, lalu tandai noun phrase di sekitarnya.', 'Tanyakan kata apa yang diterangkan oleh adjective atau adverb.', 'Periksa apakah sebuah kata menunjuk, menggantikan, atau menghubungkan bagian lain.'])
  ],
  2: [
    S('A. Parts of speech dan sentence elements', [
      'Pada Lesson 1, kita mengelompokkan kata berdasarkan jenisnya: noun, verb, adjective, adverb, dan kelompok lain. Sekarang fokusnya bergeser ke peran kata atau frasa ketika membentuk sebuah klausa. Parts of speech menjawab “kata ini termasuk jenis apa?”, sedangkan sentence elements menjawab “bagian ini bekerja sebagai apa di dalam kalimat?”. Perbedaan ini menjadi dasar untuk memahami tenses, passive voice, relative clauses, dan complex sentences.',
      'Dalam The student reads a book carefully, student adalah noun, tetapi the student sebagai satu frasa berfungsi sebagai subject. Book juga noun, tetapi a book berfungsi sebagai object. Carefully adalah adverb yang mengisi fungsi adverbial. Jadi kelas kata dan elemen kalimat tidak dapat dipertukarkan begitu saja.'
    ], [['The student reads a book carefully.', 'The student = Subject (S); reads = Verb (V); a book = Object (O); carefully = Adverbial (A). Artinya: siswa itu membaca sebuah buku dengan hati-hati.']], ['Parts of speech: kelas atau jenis kata, misalnya noun dan adjective.', 'Sentence elements: fungsi frasa dalam klausa, misalnya subject, object, dan complement.']),
    S('B. Subject (S): pokok pembicaraan', [
      'Subject menunjukkan siapa atau apa yang menjadi pokok pembicaraan dalam suatu klausa. Bentuknya biasanya noun, pronoun, atau noun phrase, tetapi gerund phrase juga dapat mengisi posisi ini. Untuk menemukannya, cari verb utama dahulu, lalu tanyakan siapa atau apa yang melakukan tindakan atau mengalami keadaan itu.',
      'Dalam The engineer develops a new system, pertanyaan Who develops a new system? dijawab oleh The engineer. Dalam Learning English takes time, seluruh frasa Learning English adalah subject meskipun dimulai dengan bentuk -ing. Subject bukan selalu satu kata, dan bukan selalu pelaku yang sengaja melakukan tindakan; dalam passive voice, subject dapat menerima tindakan.'
    ], [['The students in my class are intelligent.', 'The students in my class adalah satu noun phrase yang berfungsi sebagai subject; are adalah verb; intelligent adalah subject complement.']]),
    S('C. Verb (V): pusat predikat', [
      'Verb menyatakan tindakan, proses, atau keadaan dan menjadi inti predicate. Dalam analisis struktur, verb dapat berupa satu kata (sleeps) atau verb phrase (has been studying). Auxiliary dan main verb dalam has been studying dianalisis sebagai satu kelompok verb. Jangan keliru menganggap setiap kata di antaranya sebagai elemen kalimat yang terpisah.',
      'Transitive verb mengambil direct object dalam penggunaan tertentu: She reads a book. Intransitive verb tidak mengambil direct object: The baby sleeps. Beberapa verb dapat dipakai dengan dua cara. I eat every morning lengkap tanpa object, sedangkan I eat breakfast every morning mempunyai breakfast sebagai object. Yang menentukan ialah penggunaan verb dalam kalimat, bukan label tetap yang dihafal dari kamus.'
    ], [['She has been studying English.', 'She = Subject; has been studying = Verb phrase; English = Object.']], ['Transitive: She bought a laptop. Laptop adalah direct object.', 'Intransitive: The baby sleeps. Tidak ada direct object.']),
    S('D. Object (O): sasaran dan penerima', [
      'Direct object (DO) biasanya menjadi sasaran tindakan verb. Dalam She bought a laptop, tanyakan What did she buy? Jawabannya a laptop. Indirect object (IO) sering menunjukkan penerima, terutama pada verb pemberian atau komunikasi. Dalam She gave me a gift, me adalah penerima dan a gift adalah benda yang diberikan.',
      'Bandingkan She gave a gift to me. Di sini a gift tetap direct object, tetapi to me adalah prepositional phrase yang menunjukkan penerima; jangan otomatis melabelinya indirect object dalam pola yang sama. Membedakan bentuk dan peran membantu saat kamu mempelajari perubahan urutan kata dan passive voice.'
    ], [['She gave me a gift.', 'She = S; gave = V; me = indirect object; a gift = direct object.']], ['Tanyakan “apa yang dibeli/dibaca/diberikan?” untuk mencari direct object.', 'Tanyakan “kepada siapa?” untuk mencari penerima, lalu lihat apakah bentuknya noun phrase atau prepositional phrase.']),
    S('E. Complement (C): penjelas subject atau object', [
      'Complement melengkapi makna struktur dengan menjelaskan atau mengidentifikasi subject maupun object. Subject complement mengikuti linking verb seperti be, seem, become, feel, atau look. Dalam She is a doctor, a doctor mengidentifikasi She; ia bukan benda yang menerima tindakan is. Adjective juga dapat menjadi subject complement: He is happy; The food tastes delicious.',
      'Object complement menjelaskan object setelah verb tertentu. Dalam They elected him president, president menyebut jabatan him. Dalam The news made her sad, sad menggambarkan keadaan her sebagai akibat berita. Tes yang berguna: apakah bagian terakhir menerima tindakan, atau menerangkan subject/object? Noun phrase dapat menjadi object maupun complement, sehingga bentuk kata saja tidak cukup.'
    ], [['They elected him president.', 'They = S; elected = V; him = O; president = object complement karena mengidentifikasi him.']], ['She bought a car: a car adalah object, sasaran tindakan bought.', 'She is a teacher: a teacher adalah subject complement, identitas She.', 'They made him angry: angry adalah object complement, keadaan him.']),
    S('F. Adverbial (A): waktu, tempat, cara, dan alasan', [
      'Adverbial memberi informasi tentang waktu, tempat, cara, alasan, frekuensi, atau durasi. Fungsinya dapat diisi oleh berbagai bentuk: adverb (quickly), prepositional phrase (at night), noun phrase (last week), atau clause (when he saw her). Inilah sebabnya adverb dan adverbial berbeda: adverb adalah kelas kata, sedangkan adverbial adalah fungsi dalam kalimat.',
      'Sebagian adverbial mudah dihilangkan tanpa merusak struktur: She reads carefully → She reads. Namun tidak semua bersifat opsional. Dalam She put the book on the table, frasa tempat dibutuhkan agar makna put lengkap. Saat menganalisis kalimat, perhatikan tuntutan verb dan bukan sekadar bertanya apakah suatu frasa menerangkan tempat.'
    ], [['He smiled when he saw her.', 'When he saw her adalah adverbial clause of time.'], ['He studies in the library.', 'In the library adalah prepositional phrase yang berfungsi sebagai adverbial of place.']], ['She works carefully: carefully = adverb yang berfungsi sebagai adverbial.', 'They met last week: last week = noun phrase yang berfungsi sebagai adverbial.']),
    S('G. Tujuh pola dasar kalimat', [
      'Setelah mengenali S, V, O, C, dan A, kita dapat merangkum pola klausa. Model berikut berguna untuk analisis awal, tetapi kalimat nyata dapat memiliki modifier tambahan atau lebih dari satu clause. Satu huruf mewakili sebuah unsur, bukan selalu satu kata. Karena itu, My younger brother tetap satu subject dan a new laptop tetap satu object.',
      'Tujuh pola umum adalah S+V (The baby sleeps), S+V+C (She is intelligent), S+V+A (She lives in Malang), S+V+O (He reads a book), S+V+O+O (She gave me a gift), S+V+O+C (They made him angry), dan S+V+O+A (She put the book on the table). Pada S+V+A dan S+V+O+A, A sering diperlukan oleh verb yang dipakai. Pada kalimat lain, adverbial dapat hanya berupa tambahan.'
    ], [['My younger brother bought a new laptop yesterday.', 'My younger brother = S; bought = V; a new laptop = O; yesterday = A. Pola inti S+V+O dengan tambahan A waktu.']], ['S+V: The baby sleeps.', 'S+V+C: She is intelligent.', 'S+V+A: She lives in Malang.', 'S+V+O: He reads a book.', 'S+V+O+O: She gave me a gift.', 'S+V+O+C: They made him angry.', 'S+V+O+A: She put the book on the table.']),
    S('H. Kesalahan yang sering muncul', [
      'Jangan menganggap setiap noun adalah subject. Book dapat menjadi subject dalam The book is interesting, tetapi menjadi object dalam She reads the book. Jangan pula menyebut semua unsur setelah verb sebagai object: happy dalam She is happy adalah subject complement. Dua kesalahan ini muncul ketika kita menilai jenis kata, bukan fungsi frasa.',
      'Tidak semua kalimat memerlukan object. He sleeps sudah lengkap, sedangkan He sleeps in a bed menambahkan adverbial tempat. Bentuk He sleeps a bed keliru untuk makna itu. Terakhir, jangan menyamakan adverb dengan adverbial: in the morning bukan adverb, melainkan prepositional phrase yang mengisi fungsi adverbial waktu.'
    ], [], ['Cari verb utama dan subject lebih dulu.', 'Pisahkan direct object dari penerima dalam pola pemberian.', 'Uji apakah complement menjelaskan subject atau object.', 'Tentukan bentuk frasa dan fungsinya secara terpisah.'])
  ],
  3: [
    S('A. Membaca pola sebagai fungsi, bukan jumlah kata', [
      'S, V, O, C, dan A adalah label untuk peran unsur klausa. Sebuah unsur dapat terdiri dari satu kata, frasa panjang, atau bahkan clause. Dalam The very curious student reads a difficult book, seluruh The very curious student adalah subject dan a difficult book adalah object. Karena itu, pola S+V+O tidak berarti kalimat hanya berisi tiga kata.',
      'Notasi yang dipakai buku dapat berbeda. Sebagian memisahkan indirect object (IO) dan direct object (DO), sementara yang lain menulis dua O. Untuk object complement, sebagian menggunakan OC. Dalam materi ini, yang paling penting adalah uji fungsinya: apakah unsur itu menerima tindakan, menjelaskan subject/object, atau memberi keterangan?'
    ], [['Maya gave her friend a book.', 'Maya = S; gave = V; her friend = IO; a book = DO. Polanya dapat ditulis S+V+O+O atau S+V+IO+DO.']]),
    S('B. Membedakan complement dan adverbial', [
      'Setelah linking verb, bagian yang mendeskripsikan subject adalah subject complement: The room became quiet. Quiet bukan tempat atau waktu; ia adalah keadaan room. Setelah verb seperti paint atau make, bagian yang mendeskripsikan object dapat menjadi object complement: They painted the wall blue. Blue adalah keadaan wall setelah tindakan painted.',
      'Adverbial menjawab pertanyaan seperti kapan, di mana, atau bagaimana. Dalam They painted the wall blue yesterday, yesterday adalah A waktu, sedangkan blue tetap C untuk the wall. Dalam She put the keys on the table, on the table adalah A tempat yang diperlukan untuk melengkapi penggunaan put. Membedakan keduanya membuat susunan kalimat lebih mudah dipahami.'
    ], [['They painted the wall blue yesterday.', 'They = S; painted = V; the wall = O; blue = OC; yesterday = A. Pola lengkap S+V+O+C+A.']]),
    S('C. Cara menganalisis kalimat baru', [
      'Langkah pertama ialah menemukan verb utama atau verb phrase. Kedua, cari subject yang berkaitan dengan verb itu. Ketiga, periksa apakah verb memerlukan object, complement, atau keterangan tertentu. Keempat, tandai tambahan waktu, tempat, cara, dan alasan. Kerjakan pada klausa utama lebih dulu; jangan mencoba mengurai seluruh kalimat kompleks dalam satu langkah.',
      'Gunakan pertanyaan uji sederhana. Jika suatu noun phrase menjawab “apa yang dibeli?”, itu mungkin direct object. Jika unsur setelah be atau become menggambarkan subject, itu subject complement. Jika unsur setelah object menggambarkan hasil pada object, itu object complement. Jika bagian itu menjawab “kapan?”, “di mana?”, atau “bagaimana?”, pertimbangkan adverbial.'
    ], [['She put the keys on the table.', 'She = S; put = V; the keys = O; on the table = A tempat. Polanya S+V+O+A.']], ['Jangan paksa semua frasa tempat menjadi tambahan opsional.', 'Pastikan satu unsur dapat terdiri dari beberapa kata.', 'Tulis label yang lebih spesifik, seperti IO/DO atau SC/OC, ketika membantu.'])
  ],
  4: [
    S('A. Mengapa urutan kata penting', [
      'Bahasa Inggris banyak memakai posisi untuk menunjukkan hubungan antarunsur. Dalam pernyataan netral, subject biasanya mendahului verb, lalu object atau complement mengikuti verb. Karena itu, We studied grammar lebih mudah dipahami daripada We grammar studied. Susunan ini tetap berlaku ketika subject atau object berupa frasa panjang: My younger brother studied English grammar.',
      'Keterangan waktu dan tempat dapat berpindah untuk penekanan, tetapi pemula sebaiknya memulai dari susunan yang paling jelas. We studied grammar at home last night menempatkan tempat sebelum waktu; Last night, we studied grammar at home juga wajar ketika waktu ingin ditekankan. Pergeseran keterangan tidak berarti object bebas berpindah ke depan verb.'
    ], [['We studied grammar at home last night.', 'We = subject; studied = verb; grammar = object; at home = tempat; last night = waktu.']]),
    S('B. Posisi adverb dan batas aturan sederhana', [
      'Adverb cara sering berada setelah verb atau object: She spoke clearly; He checked the answer carefully. Adverb tertentu juga bisa diletakkan sebelum main verb: He carefully checked the answer. Sebaliknya, adverb frekuensi seperti often biasanya muncul sebelum main verb tetapi setelah be: She often studies; She is often late. Posisi ini berkaitan dengan jenis adverb, bukan satu aturan universal untuk semua keterangan.',
      'Saat menulis pertanyaan, susunan dasar pernyataan berubah. Auxiliary mendahului subject: Did you study last night? Setelah did, main verb kembali ke bentuk dasar study. Jadi menguasai urutan kata juga berarti membedakan pernyataan, pertanyaan, dan klausa yang dimulai oleh keterangan.'
    ], [['He carefully checked the answer.', 'Carefully menerangkan checked. Bentuk He checked the answer carefully juga alami.']]),
    S('C. Langkah praktis menyusun kalimat', [
      'Mulailah dengan memilih satu klausa inti: siapa atau apa subject-nya, apa verb-nya, dan apakah verb membutuhkan object atau complement. Setelah kalimat inti lengkap, tambahkan keterangan yang benar-benar membantu pembaca. Baca ulang untuk memastikan tiap frasa punya tempat yang masuk akal.',
      'Jika kalimat terasa janggal, jangan langsung mengganti kata-katanya. Tandai setiap unsur dengan S, V, O, C, atau A. Kesalahan We grammar studied last night at home menjadi terlihat karena grammar berada sebelum studied. Perbaiki inti S+V+O lebih dulu, baru atur keterangan tempat dan waktu.'
    ], [], ['Bangun kerangka S+V lebih dahulu.', 'Tambahkan O atau C bila diperlukan oleh verb.', 'Letakkan keterangan secara jelas dan hindari meniru urutan bahasa Indonesia kata demi kata.'])
  ],
  5: [
    S('A. Mengapa bahasa Inggris memakai auxiliary', [
      'Dalam present simple dan past simple, verba leksikal tidak dapat dipindahkan begitu saja ke depan subject untuk membentuk pertanyaan biasa. Kita memakai do, does, atau did. Auxiliary membawa informasi waktu dan persesuaian: does untuk present dengan he/she/it, did untuk past dengan semua subject. Main verb sesudahnya berbentuk dasar. Itulah alasan Does she studies? keliru; bentuk yang tepat Does she study?',
      'Verb be berbeda karena dapat berfungsi sebagai auxiliary atau linking verb. Is she ready? terbentuk dengan memindahkan is sebelum subject. Untuk negasi, tambahkan not setelah be: She is not ready. Kita tidak perlu do-support pada kalimat sederhana yang verb utamanya be.'
    ], [['Does she study every day?', 'Does = auxiliary present untuk she; she = subject; study = bentuk dasar; every day = keterangan frekuensi.']]),
    S('B. Pernyataan, negasi, dan pertanyaan', [
      'Bandingkan She studies English, She does not study English, dan Does she study English? Akhiran -s hanya muncul pada verba utama dalam pernyataan positif. Ketika does hadir, informasi orang ketiga tunggal sudah diwakili oleh does. Pada past simple, bandingkan They went home, They did not go home, dan Did they go home? Setelah did, gunakan go, bukan went.',
      'Kata tanya seperti where atau why biasanya diletakkan sebelum auxiliary: Where does she study? Pertanyaan tentang subject memiliki pola lain, misalnya Who called you?, yang akan dibahas lebih rinci pada Lesson 33. Untuk saat ini, kuasai dulu pola do/does/did pada pertanyaan yang menanyakan object atau keterangan.'
    ], [['They do not live here.', 'Do not membentuk negasi present simple untuk they; live tetap bentuk dasar.']]),
    S('C. Pemeriksaan cepat sebelum menulis', [
      'Tentukan waktu kalimat, subject, dan jenis verb. Jika verb-nya be, gunakan be untuk negasi atau inversi. Jika verb-nya verba leksikal dalam simple tense, gunakan do/does/did. Setelah itu periksa apakah main verb sudah kembali ke bentuk dasar. Banyak kesalahan terjadi karena penanda yang sama dipakai dua kali, seperti Does she studies? atau Did you went?',
      'Dalam percakapan, contraction seperti don’t, doesn’t, didn’t, dan isn’t sangat umum. Bentuk panjang berguna untuk latihan agar susunannya tampak jelas. Makna negasi tidak berubah hanya karena bentuknya dipendekkan.'
    ], [], ['Be: Is she ready? She is not ready.', 'Present simple: Does she study? She does not study.', 'Past simple: Did they go? They did not go.'])
  ],
  6: [
    S('A. Yang dihitung adalah unit gramatikal', [
      'Countable noun mempunyai bentuk tunggal dan jamak: one apple, two apples. Singular countable noun biasanya memerlukan determiner seperti a, the, atau my ketika digunakan sebagai noun phrase biasa. Uncountable noun diperlakukan sebagai massa, konsep, atau kategori yang tidak langsung diberi angka: information, advice, furniture, water. Ini bukan pernyataan tentang dunia fisik, melainkan cara bahasa Inggris mengelompokkan makna tersebut.',
      'Untuk menghitung sesuatu yang uncountable, sebutkan satuannya: a piece of advice, two pieces of furniture, a bottle of water. Bentuk an information keliru dalam penggunaan umum karena information tidak menerima article a/an secara langsung. Beberapa noun berubah menurut konteks: coffee bisa berarti minuman secara umum, sementara two coffees dapat berarti dua porsi.'
    ], [['I need some information.', 'Information diperlakukan uncountable. Some menyatakan jumlah yang tidak ditentukan.']]),
    S('B. Penentu jumlah yang sesuai', [
      'Many, a few, dan angka biasa dipakai dengan countable plural: many books, a few questions, three apples. Much dan a little dipakai dengan uncountable: much time, a little advice. Some dan a lot of dapat dipakai dengan keduanya dalam banyak konteks: some books, some water, a lot of books, a lot of water.',
      'Saat memilih is atau are, lihat noun phrase utamanya. The information is useful, tetapi The pieces of information are useful. Pada contoh kedua, subject utamanya pieces, yang jamak. Ketelitian ini membantu bukan hanya dalam article, tetapi juga subject–verb agreement.'
    ], [['She bought three apples.', 'Angka three menuntut noun countable bentuk jamak apples.']]),
    S('C. Cara memeriksa noun baru', [
      'Sebelum menulis a/an atau menambahkan -s, tanyakan makna noun dalam kalimat itu. Apakah kita membicarakan benda satu per satu, atau bahan/gagasan secara umum? Jika ragu, periksa kamus pembelajar untuk tanda C (countable) atau U (uncountable), karena terjemahan Indonesia tidak selalu memberi petunjuk yang cukup.',
      'Jangan menghafal semua uncountable noun sebagai daftar tanpa konteks. Buat pasangan contoh, misalnya advice versus a piece of advice, atau water versus a glass of water. Dengan begitu, kamu belajar cara mengubah makna menjadi unit yang bisa dihitung.'
    ], [], ['Countable tunggal: an apple.', 'Countable jamak: three apples.', 'Uncountable: some information.', 'Satuan: a piece of information.'])
  ],
  7: [
    S('A. Article menunjukkan cara pembaca mengenali rujukan', [
      'A/an biasanya memperkenalkan satu anggota countable yang belum dikenali secara spesifik: I saw a dog. The digunakan ketika pendengar dapat mengidentifikasinya: The dog was friendly merujuk kembali ke anjing yang baru disebut. The juga dapat dipakai ketika noun dibatasi oleh konteks, misalnya the book on the table. Pilihan article adalah soal rujukan, bukan sekadar apakah benda itu dekat atau jauh.',
      'Plural dan uncountable noun yang menyatakan kategori umum sering tidak memakai article: Dogs need exercise; Water is important. Ini disebut zero article. Namun jika rujukannya khusus, the bisa muncul: The dogs in our yard are noisy; The water in this glass is cold.'
    ], [['I saw a dog. The dog was friendly.', 'A memperkenalkan satu anjing; the menunjukkan anjing yang sama sudah dapat dikenali.']]),
    S('B. Memilih a atau an berdasarkan bunyi', [
      'A dipakai sebelum bunyi konsonan, an sebelum bunyi vokal. Karena hour dan honest dimulai bunyi vokal, kita menulis an hour dan an honest person. University dimulai bunyi /y/ walaupun huruf pertamanya u, sehingga a university. Singkatan juga mengikuti pengucapannya, bukan huruf tertulis saja.',
      'A/an hanya dapat melekat pada singular countable noun dalam penggunaan biasa: a book, an idea. Bentuk a books atau an information keliru karena noun berikutnya tidak memenuhi syarat. Jika kamu melihat adjective di antaranya, tetap perhatikan bunyi kata tepat setelah article: an interesting book.'
    ], [['She is an honest person.', 'H pada honest tidak diucapkan, sehingga bunyi awalnya vokal dan article-nya an.']]),
    S('C. Tiga pertanyaan sebelum memilih', [
      'Pertama, apakah noun ini countable dalam makna sekarang? Kedua, apakah bentuknya singular atau plural? Ketiga, apakah pembaca sudah dapat mengetahui benda yang dimaksud? Jika singular countable dan belum spesifik, pilih a/an. Jika rujukannya dikenal atau dibatasi, pilih the. Jika plural atau uncountable dan berbicara secara umum, pertimbangkan zero article.',
      'Article sering menjadi sumber kesalahan karena bahasa Indonesia tidak memiliki sistem yang persis sama. Baca dua kalimat berurutan, bukan satu kalimat terisolasi; pilihan the sering bergantung pada informasi yang sudah muncul sebelumnya.'
    ], [], ['I need a book: satu buku yang belum ditentukan.', 'I need the book you mentioned: buku tertentu.', 'Books can help: buku sebagai kategori umum.'])
  ],
  8: [
    S('A. Bentuk pronoun mengikuti perannya', [
      'Subject pronoun seperti I, he, she, we, dan they umumnya berada pada posisi subject. Object pronoun seperti me, him, her, us, dan them muncul sebagai object verb atau preposition. Bandingkan She called him dengan He called her. Mengubah urutan pelaku dan penerima mengubah bentuk pronoun yang diperlukan.',
      'Dalam She gave him her notes, she adalah pelaku, him penerima, dan her menunjukkan pemilik notes. Kata her dapat menjadi object pronoun atau possessive determiner; posisinya menentukan fungsi. Karena itu, menghafal satu terjemahan “dia” saja tidak cukup.'
    ], [['She gave him her notes.', 'She = subject; him = penerima; her = possessive determiner sebelum notes.']]),
    S('B. Possessive determiner dan possessive pronoun', [
      'My, your, his, her, our, dan their harus diikuti noun: my book, their class. Mine, yours, his, hers, ours, dan theirs menggantikan seluruh noun phrase dan berdiri sendiri: This book is mine. Jangan menulis This book is my tanpa noun sesudah my. Bentuk his kebetulan sama pada kedua fungsi, tetapi posisinya tetap berbeda.',
      'Pronoun juga perlu antecedent atau rujukan yang jelas. Dalam Maya told Lina that she was late, she bisa merujuk Maya atau Lina. Jika makna penting, ulangi nama atau susun ulang kalimat agar pembaca tidak perlu menebak.'
    ], [['This book is mine.', 'Mine berarti my book dalam posisi yang berdiri sendiri; tidak perlu menambahkan book lagi.']]),
    S('C. Langkah memilih bentuk yang benar', [
      'Tandai dulu apakah kata itu menjadi pelaku, sasaran/penerima, atau penanda kepemilikan. Jika kepemilikan, tanyakan apakah noun akan muncul setelahnya. Gunakan her notes ketika notes disebut, tetapi The notes are hers ketika noun sudah digantikan. Selalu baca ulang kalimat sebelumnya untuk memastikan rujukan pronoun jelas.',
      'Kesalahan Her gave he she notes mencampur tiga fungsi sekaligus. Perbaikannya She gave him her notes mengikuti kerangka subject + verb + penerima + benda. Menganalisis peran satu demi satu lebih aman daripada menerjemahkan kata demi kata.'
    ], [], ['Subject: She gave the notes.', 'Object: Maya called her.', 'Sebelum noun: her notes.', 'Berdiri sendiri: The notes are hers.'])
  ],
  9: [
    S('A. Demonstrative mengikuti jarak dan jumlah', [
      'This dan that dipakai untuk singular, sedangkan these dan those untuk plural. Perbedaan dekat/jauh dapat bersifat fisik, waktu, atau kedekatan dalam percakapan. This book dapat berarti buku di tangan; that idea dapat merujuk pada gagasan yang baru saja disebut orang lain. Dalam These books are useful, bentuk these cocok dengan books yang plural.',
      'Demonstrative dapat muncul sebelum noun (these books) atau berdiri sendiri (These are useful). Ketika berdiri sendiri, rujukannya harus jelas. Jangan menulis This books karena demonstrative singular bertentangan dengan noun plural.'
    ], [['These books are useful.', 'These menunjukkan plural yang terasa dekat dalam konteks; books juga plural.']]),
    S('B. Quantifier menyatakan jumlah tanpa angka pasti', [
      'Some lazim dalam pernyataan positif dan tawaran: I have some questions; Would you like some tea? Any lazim dalam pertanyaan dan negasi: Do you have any questions? I do not have any questions. Ini kecenderungan umum, bukan larangan mutlak. Some dalam pertanyaan tawaran sering mengisyaratkan bahwa pembicara berharap jawaban positif.',
      'Many cocok dengan countable plural, sedangkan much cocok dengan uncountable: many questions, much time. A lot of dapat dipakai dengan keduanya. Selain bentuk noun, perhatikan makna kalimat; any dalam pernyataan positif dapat berarti “apa pun”, seperti You can choose any book.'
    ], [['Do you have any questions?', 'Any cocok untuk pertanyaan netral tentang keberadaan sejumlah pertanyaan.']]),
    S('C. Memeriksa kesesuaian', [
      'Baca noun setelah demonstrative atau quantifier. Apakah singular, plural, countable, atau uncountable? Setelah itu tentukan apakah kalimat berupa pernyataan, pertanyaan, tawaran, atau negasi. Keduanya sama pentingnya: this/these berkaitan dengan jumlah, sementara some/any sering berkaitan dengan jenis ujaran.',
      'Jika ragu, buat pasangan minimal: this book/these books dan that book/those books. Lalu tambahkan beberapa kalimat penuh agar bentuk itu tidak lepas dari konteks. Belajar dalam pasangan membantu melihat perubahan yang benar-benar membawa makna.'
    ], [], ['This book / these books.', 'That book / those books.', 'Some water / any water.'])
  ],
  10: [
    S('A. Apa yang diterangkan?', [
      'Adjective memberi sifat pada noun atau pronoun: a careful driver, The driver is careful. Adverb dapat menerangkan verb, adjective, adverb lain, atau seluruh kalimat: She drives carefully; extremely careful; very carefully; Fortunately, she arrived. Pertanyaan kuncinya adalah apa yang sedang diterangkan, bukan sekadar apakah kata berakhir dengan -ly.',
      'Dalam She is a careful driver, careful menerangkan driver. Dalam She drives carefully, carefully menerangkan tindakan drives. Bentuk She drives careful dapat terdengar dalam dialek tertentu, tetapi untuk standar pembelajaran gunakan carefully pada makna cara mengemudi.'
    ], [['She is a careful driver. She drives carefully.', 'Kalimat pertama memakai adjective untuk noun; kalimat kedua memakai adverb untuk verb.']]),
    S('B. Linking verb dan bentuk yang tampak mirip', [
      'Setelah linking verb seperti be, seem, look, feel, dan taste, kita biasanya memakai adjective untuk mendeskripsikan subject: The soup tastes good; She feels tired. Jangan memaksa adverb hanya karena kata itu muncul setelah verb. Tastes good berarti soup memiliki rasa yang baik, bukan soup melakukan tindakan mencicipi secara baik.',
      'Tidak semua adverb berakhiran -ly. Fast dapat menjadi adverb dalam He runs fast; hard dapat berarti “dengan keras” dalam She works hard. Hardly justru berarti “hampir tidak”. Friendly adalah adjective meskipun berakhiran -ly. Perhatikan makna dan fungsi sebelum mengubah bentuk kata.'
    ], [['The soup tastes delicious.', 'Delicious adalah adjective sebagai subject complement; ia menggambarkan soup.']]),
    S('C. Cara mengecek pilihan', [
      'Cari noun yang ingin diberi sifat. Jika sifat itu melekat pada noun, pilih adjective. Jika kamu ingin menjelaskan cara suatu tindakan dilakukan, pilih adverb yang sesuai. Lalu periksa apakah verb di antaranya linking verb, karena setelahnya sering muncul adjective sebagai complement.',
      'Untuk menghindari terjemahan langsung, tulis dua versi berpasangan: She is a careful driver dan She drives carefully. Dengan membandingkan pasangan semacam ini, perbedaan fungsi menjadi terlihat meskipun makna Indonesianya dekat.'
    ], [], ['A careful explanation: adjective sebelum noun.', 'She explained carefully: adverb untuk cara.', 'The explanation sounds clear: adjective setelah linking verb.'])
  ],
  11: [
    S('A. Kapan present simple dipakai', [
      'Present simple dipakai untuk kebiasaan, fakta umum, dan keadaan yang berlaku sekarang. She works in Jakarta dapat menjelaskan pekerjaan atau situasi biasanya, bukan berarti ia sedang bekerja tepat saat berbicara. Water boils at 100°C at sea level menyatakan fakta ilmiah dalam kondisi yang disebut. Penanda seperti usually, often, every day, dan on Mondays sering membantu mengenali kebiasaan, tetapi makna kalimat tetap lebih penting daripada satu kata penanda.',
      'Present simple juga dipakai untuk jadwal tetap: The train leaves at six. Dalam konteks ini kalimat merujuk masa depan, tetapi bentuk verba tetap present simple karena jadwal diperlakukan sebagai fakta terencana.'
    ], [['She works in Jakarta.', 'She adalah subject orang ketiga tunggal, maka work mendapat -s.']]),
    S('B. Bentuk positif, negatif, dan pertanyaan', [
      'Dengan I/you/we/they, gunakan bentuk dasar: I work; They work. Dengan he/she/it, tambahkan -s atau -es sesuai ejaan: She works; He watches. Be memiliki bentuk sendiri: I am, you/we/they are, he/she/it is. Dalam negatif dan pertanyaan verba leksikal, gunakan do/does lalu bentuk dasar: She does not work; Does she work?',
      'Jangan menaruh dua penanda orang ketiga sekaligus. Does she works? salah karena does sudah membawa penanda itu. Untuk pertanyaan dengan be, gunakan Is she ready?, bukan Does she be ready?'
    ], [['Does she work in Jakarta?', 'Does berada sebelum subject; work kembali ke bentuk dasar.']]),
    S('C. Membedakan kebiasaan dari kejadian sekarang', [
      'Bandingkan I read English articles every morning dengan I am reading an English article now. Kalimat pertama adalah kebiasaan; kedua adalah aktivitas yang sedang berlangsung. Jika ingin menyatakan kebiasaan yang bersifat sementara, konteks dapat memerlukan bentuk lain; jangan memilih tense hanya berdasarkan satu terjemahan “sedang” atau “biasanya”.',
      'Saat memeriksa tulisan, tandai apakah pernyataan itu berlaku berulang, umum, atau berlangsung tepat saat ini. Kemudian cocokkan bentuk subject dan verb. Present simple sangat sering dipakai dalam deskripsi diri, rutinitas, fakta, dan petunjuk singkat.'
    ], [], ['She works every weekday: rutinitas.', 'The class starts at nine: jadwal.', 'Water boils at 100°C at sea level: fakta bersyarat.'])
  ],
  12: [
    S('A. Aktivitas yang sedang berlangsung', [
      'Present continuous menggunakan am/is/are + verb-ing. Bentuk ini sering menggambarkan kegiatan yang sedang berlangsung di sekitar saat berbicara: I am reading a grammar lesson now. Tidak harus berarti tindakan terjadi persis pada detik kalimat diucapkan; She is writing a book dapat menggambarkan proyek yang sedang berjalan selama beberapa bulan.',
      'Bentuk ini juga dapat menyatakan situasi sementara: They are staying with family this week. Penanda now, at the moment, this week, atau these days membantu, tetapi kontekslah yang menentukan apakah keadaan itu sementara.'
    ], [['I am reading a grammar lesson now.', 'Am adalah auxiliary untuk I; reading adalah bentuk -ing; now menunjukkan kegiatan saat ini.']]),
    S('B. Susunan dan perubahan ejaan', [
      'Dalam pernyataan positif gunakan S + be + V-ing. Untuk negatif, letakkan not sesudah be: I am not reading. Untuk pertanyaan, pindahkan be ke depan subject: Are you reading? Verb-ing memiliki beberapa aturan ejaan: make → making, run → running, lie → lying. Bentuk I reading keliru karena auxiliary be tidak ada.',
      'Beberapa verb yang menyatakan keadaan, pemilikan, atau pikiran—seperti know, believe, dan own—biasanya tidak dipakai dalam continuous pada makna biasa. Namun beberapa verb memiliki makna lain yang dapat berlangsung sebagai aktivitas: I am thinking about the answer berbeda dari I think the answer is correct.'
    ], [['They are staying with family this week.', 'Are staying menunjukkan situasi sementara selama minggu ini.']]),
    S('C. Apa yang harus diperiksa', [
      'Tanyakan apakah kalimat menjelaskan proses sementara atau aktivitas yang sedang berlangsung. Jika ya, pilih be yang sesuai dengan subject dan tambahkan verb-ing. Baca ulang untuk memastikan tidak ada bentuk ganda seperti is studies atau bentuk yang kehilangan be seperti she studying.',
      'Bandingkan dengan present simple. I read every day menjelaskan pola berulang; I am reading now menjelaskan proses saat ini. Kedua kalimat dapat benar tentang orang yang sama, tetapi menjawab pertanyaan berbeda.'
    ], [], ['I am reading: proses kini.', 'They are staying here this week: sementara.', 'She is meeting her tutor tomorrow: rencana yang sudah diatur.'])
  ],
  13: [
    S('A. Dua sudut pandang terhadap waktu kini', [
      'Present simple memandang situasi sebagai kebiasaan, fakta, atau keadaan yang relatif stabil. Present continuous menyoroti aktivitas yang sedang berlangsung atau situasi sementara. I usually walk, but today I am taking the bus memperlihatkan keduanya dalam satu kalimat: usually walk adalah kebiasaan, am taking adalah pengecualian hari ini.',
      'Perbedaan ini tidak selalu berarti permanen versus sementara secara mutlak. She works in a bank dapat berarti pekerjaan saat ini, yang suatu hari bisa berubah. She is working from home this week menekankan pengaturan sementara. Pilih bentuk berdasarkan sudut pandang yang ingin disampaikan.'
    ], [['She works in a bank and is working from home this week.', 'Works menggambarkan pekerjaan biasanya; is working menggambarkan lokasi kerja sementara minggu ini.']]),
    S('B. Stative verbs dan perubahan makna', [
      'Verb seperti know, like, believe, need, dan own biasanya menunjukkan keadaan, bukan proses yang terlihat berlangsung. Karena itu, I know the answer lebih lazim daripada I am knowing the answer. Namun verb tertentu bisa berubah makna: I think she is right menyatakan pendapat; I am thinking about the problem menyatakan kegiatan berpikir yang sedang berlangsung.',
      'Lihat pula have: I have a car menyatakan kepemilikan, sedangkan I am having lunch menyatakan aktivitas makan. Jadi daftar “stative verb” berguna sebagai panduan, tetapi makna spesifik dalam kalimat tetap perlu diperiksa.'
    ], [['I usually walk, but today I am taking the bus.', 'Usually memberi sinyal rutinitas; today dan konteks pengecualian mendukung continuous.']]),
    S('C. Cara membuat keputusan', [
      'Tulis pertanyaan sederhana: apakah ini kebiasaan/fakta, atau kejadian yang sedang berlangsung/bersifat sementara? Jika ada dua konteks, gunakan dua bentuk sebagaimana contoh. Setelah memilih, cek susunan: present simple he/she/it biasanya memakai -s; present continuous selalu memerlukan be + -ing.',
      'Jangan memakai am/is/are di depan verba dasar tanpa -ing untuk makna continuous. I am usually walk tidak benar. Jika ingin rutinitas, gunakan I usually walk; jika sedang berjalan sekarang, gunakan I am walking.'
    ], [], ['I work here: keadaan pekerjaan sekarang.', 'I am working here this month: penekanan sementara.', 'I think so: pendapat; I am thinking: proses.'])
  ],
  14: [
    S('A. Kejadian yang selesai pada masa lampau', [
      'Past simple menempatkan peristiwa dalam waktu lampau yang sudah selesai: We visited Bali last year. Waktu dapat disebut jelas, seperti yesterday atau in 2022, atau dipahami dari cerita. Verb beraturan biasanya mendapat -ed, sedangkan verb tidak beraturan memiliki bentuk kedua sendiri, misalnya go → went dan see → saw.',
      'Past simple juga menyusun rangkaian kejadian dalam narasi: I woke up, made breakfast, and left. Kita tidak perlu menambahkan was pada setiap verb; was/were dipakai untuk be atau sebagai bagian bentuk lain seperti past continuous.'
    ], [['We visited Bali last year.', 'Visited adalah V2 beraturan; last year adalah waktu lampau yang selesai.']]),
    S('B. Do-support pada negatif dan pertanyaan', [
      'Pernyataan positif memakai V2: You saw the message. Negatif dan pertanyaan memakai did + bentuk dasar: You did not see the message; Did you see the message? Karena did sudah menunjukkan waktu lampau, bentuk Did you saw? menggandakan penanda lampau dan keliru.',
      'Verb be mengikuti pola khusus: She was tired; She was not tired; Was she tired? Jangan menambahkan did untuk pertanyaan sederhana dengan be. Perhatikan pula ejaan -ed dan pengucapannya, tetapi struktur kalimat tetap lebih penting daripada menghafal satu akhiran.'
    ], [['Did you see the message?', 'Did = auxiliary lampau; see = bentuk dasar, bukan saw.']]),
    S('C. Memilih bentuk saat bercerita', [
      'Saat menulis pengalaman, tetapkan titik waktu atau urutan cerita. Gunakan past simple untuk kejadian yang selesai, lalu pertahankan perspektif waktu secara konsisten. Jika ingin menyoroti proses yang sedang terjadi pada saat tertentu di masa lalu, gunakan past continuous pada klausa yang relevan.',
      'Untuk verb tidak beraturan, buat pasangan yang sering dipakai dalam kalimat lengkap: go/went, see/saw, buy/bought. Menghafal daftar tanpa konteks sering membuat bentuk positif dan bentuk setelah did tertukar.'
    ], [], ['She went home: pernyataan lampau.', 'She did not go home: negatif.', 'Did she go home?: pertanyaan.'])
  ],
  15: [
    S('A. Latar sebuah kejadian lampau', [
      'Past continuous memakai was/were + V-ing untuk menunjukkan proses yang sedang berlangsung pada titik waktu masa lalu. I was studying when the phone rang menempatkan studying sebagai kegiatan latar, sedangkan rang sebagai kejadian singkat yang datang di tengahnya. Bentuk ini juga dapat menggambarkan dua aktivitas yang berlangsung bersamaan: She was reading while I was cooking.',
      'Bukan berarti semua kegiatan lampau harus continuous. Jika kita hanya ingin menyatakan kejadian selesai, past simple cukup: I studied yesterday. Past continuous dipilih ketika proses atau latar waktunya penting.'
    ], [['I was studying when the phone rang.', 'Was studying = kegiatan yang sedang berjalan; rang = kejadian yang menyela.']]),
    S('B. Bentuk dan penanda hubungan waktu', [
      'Gunakan was untuk I/he/she/it dan were untuk you/we/they. Negatifnya I was not studying; pertanyaannya Were they studying? Bentuk I were studying salah dalam pernyataan biasa dengan I. When sering memperkenalkan kejadian yang menyela, sedangkan while sering menghubungkan dua proses, tetapi makna sebenarnya tetap ditentukan oleh verb dan konteks.',
      'At 8 p.m., they were walking menunjukkan kegiatan pada satu titik waktu lampau. Kalimat They walked at 8 p.m. dapat dibaca sebagai kejadian yang dimulai atau terjadi saat itu. Pilihan aspek mengubah fokus yang ingin dibawa pembicara.'
    ], [['They were walking at 8 p.m.', 'Were walking menyoroti proses berjalan pada pukul delapan.']]),
    S('C. Menggabungkan dua klausa', [
      'Tentukan peristiwa mana yang menjadi latar dan mana yang terjadi secara singkat. Tempatkan latar dalam past continuous dan kejadian yang menyela dalam past simple ketika itu sesuai makna: I was reading when the lights went out. Kedua klausa dapat ditukar urutannya: When the lights went out, I was reading.',
      'Hindari memilih tense hanya karena ada when atau while. Pertama pahami garis waktu kejadian, kemudian pilih bentuk. Ini membantu saat kalimat menjadi lebih panjang atau memiliki lebih dari dua peristiwa.'
    ], [], ['I was cooking when she arrived: latar + kejadian.', 'We were talking while they were eating: dua proses.', 'I cooked dinner last night: kejadian selesai.'])
  ],
  16: [
    S('A. Will sebagai salah satu cara berbicara tentang masa depan', [
      'Will adalah modal yang dapat digunakan untuk prediksi, keputusan spontan, janji, atau tawaran. I think it will rain tomorrow menyatakan prediksi; I will help you with that bag dapat menjadi keputusan atau tawaran saat berbicara. Bahasa Inggris memiliki beberapa cara menyatakan masa depan, sehingga will bukan pilihan wajib setiap kali kalimat mengandung tomorrow.',
      'Will diikuti bentuk dasar untuk semua subject: I will go, she will go, they will go. Tidak ada tambahan -s setelah will. Bentuk singkat I’ll dan won’t umum dalam percakapan, tetapi bentuk lengkap memudahkan saat mempelajari pola.'
    ], [['I think it will rain tomorrow.', 'Think memberi konteks prediksi; will rain adalah modal + bentuk dasar.']]),
    S('B. Makna bergantung konteks', [
      'Bandingkan I will call you later (janji atau keputusan) dengan I am calling you at six (pengaturan yang telah dibuat). Keduanya merujuk masa depan, tetapi menunjukkan sudut pandang berbeda. Will juga muncul dalam permintaan atau kesediaan: Will you help me? Jawabannya tidak selalu sekadar ramalan tentang masa depan.',
      'Negatif will not/won’t dapat menyatakan penolakan atau prediksi negatif tergantung konteks. The door won’t open mungkin berarti pintu menolak terbuka; It won’t rain mungkin prediksi. Baca keseluruhan situasi sebelum memberi label.'
    ], [['I will help you with that bag.', 'Will + help, bukan will helps; penutur menawarkan bantuan.']]),
    S('C. Membuat kalimat yang tepat', [
      'Tentukan apakah kamu sedang memprediksi, menjanjikan, menawarkan, atau memutuskan sesuatu saat itu. Jika will cocok, gunakan will + V1. Untuk pertanyaan pindahkan will ke depan subject: Will she come? Untuk negatif letakkan not setelah will: She will not come.',
      'Jika sebuah rencana sudah dibuat sebelumnya, going to atau present continuous mungkin menyampaikan maksud lebih jelas. Perbandingan ini dibahas pada pelajaran berikutnya. Fokus utama di sini ialah fungsi will dan bentuk verba sesudahnya.'
    ], [], ['Prediksi: It will rain.', 'Keputusan/tawaran: I will help.', 'Pertanyaan: Will you join us?'])
  ],
  17: [
    S('A. Niat yang sudah ada dan bukti yang terlihat', [
      'Be going to sering dipakai untuk niat atau rencana yang sudah ada sebelum percakapan: We are going to start a study group. Bentuk ini juga cocok untuk prediksi yang didukung tanda sekarang: Look at those clouds. It is going to rain. Dalam kedua fungsi itu, be harus sesuai subject dan verb sesudah to tetap bentuk dasar.',
      'Kalimat I going to meet my tutor tidak lengkap karena tidak ada am. Bentuk tepatnya I am going to meet my tutor. Keterangan waktu seperti on Friday memperjelas kapan rencana terjadi, tetapi tidak mengubah pola dasar.'
    ], [['We are going to start a study group.', 'Are going to menunjukkan niat; start tetap bentuk dasar.']]),
    S('B. Present continuous untuk pengaturan', [
      'Present continuous dapat merujuk masa depan jika ada pengaturan yang sudah dibuat: I am meeting my tutor on Friday. Biasanya ada waktu atau konteks yang membuat makna masa depannya jelas. Polanya sama dengan continuous sekarang, tetapi waktunya ditentukan oleh on Friday.',
      'Going to dan present continuous sering tumpang tindih pada rencana pribadi. I am going to meet my tutor menyoroti niat, sedangkan I am meeting my tutor dapat menyoroti janji yang sudah diatur. Jangan menganggap perbedaannya selalu kaku; gunakan bentuk yang paling tepat untuk pesan yang ingin disampaikan.'
    ], [['I am meeting my tutor on Friday.', 'Present continuous dipahami sebagai rencana karena keterangan on Friday dan konteks janji.']]),
    S('C. Membandingkan dengan will', [
      'Ketika keputusan baru dibuat saat berbicara, will sering alami: The bag is heavy. I will carry it. Ketika niat sudah ada, going to dapat lebih jelas: I am going to carry it tomorrow. Ketika pengaturan konkret sudah disepakati, present continuous sering digunakan: I am meeting them at noon.',
      'Periksa tiga hal dalam kalimatmu: kapan niat muncul, apakah ada bukti saat ini, dan apakah pertemuan atau kegiatan sudah diatur. Setelah memilih bentuk, cek auxiliary be, -ing, serta preposition waktu yang tepat.'
    ], [], ['Niat: I am going to study tonight.', 'Bukti: It is going to rain.', 'Pengaturan: I am meeting my tutor on Friday.'])
  ],
  18: [
    S('A. Menghubungkan masa lalu dengan sekarang', [
      'Present perfect berbentuk have/has + past participle (V3). Bentuk ini dapat menceritakan pengalaman hingga kini, hasil yang relevan saat ini, atau keadaan yang bermula dahulu dan masih berlanjut. I have finished my homework menyoroti hasil sekarang: tugas sudah selesai. She has visited Singapore twice menyatakan pengalaman sampai saat ini tanpa menyebut kapan tepatnya.',
      'Kita juga dapat mengatakan She has lived here since 2020 jika ia masih tinggal di sini. Since memberi titik awal; for memberi durasi. Pemilihan ini bergantung pada makna, bukan sekadar apakah verb tampak “lampau”.'
    ], [['I have finished my homework.', 'Have + finished (V3) menghubungkan pekerjaan yang selesai dengan keadaan sekarang.']]),
    S('B. Waktu selesai dan waktu yang masih terbuka', [
      'Present perfect biasanya tidak digabung dengan keterangan waktu lampau yang sudah selesai seperti yesterday atau in 2022: I have finished my homework yesterday tidak sesuai dalam penggunaan standar. Jika waktunya dinyatakan selesai, gunakan past simple: I finished my homework yesterday. Sebaliknya, today atau this week mungkin masih berlangsung, sehingga present perfect dapat cocok dalam konteks tertentu.',
      'Pertanyaan Have you ever visited Singapore? bertanya tentang pengalaman sampai sekarang. Jika lawan bicara lalu menanyakan kapan, jawabannya dapat berpindah ke past simple: Yes, I visited in 2022. Dua tense itu bekerja bersama untuk memberikan informasi yang berbeda.'
    ], [['She has visited Singapore twice.', 'Twice menghitung pengalaman hingga saat ini tanpa menempatkannya pada tanggal lampau tertentu.']]),
    S('C. Bentuk dan pemeriksaan', [
      'Pilih have untuk I/you/we/they dan has untuk he/she/it. Setelahnya, pakai V3: gone, seen, written, finished. Jangan tertukar antara V2 dan V3 pada irregular verbs, misalnya saw versus seen. Negatifnya She has not seen it; pertanyaannya Has she seen it?',
      'Sebelum memakai present perfect, tanyakan hubungan kejadian dengan sekarang. Jika tujuannya semata melaporkan kejadian pada waktu selesai, past simple biasanya lebih tepat. Jika yang penting adalah pengalaman atau hasil kini, present perfect dapat membawa makna itu.'
    ], [], ['Pengalaman: I have seen that film.', 'Hasil: I have finished.', 'Durasi: She has lived here since 2020.'])
  ],
  19: [
    S('A. Pertanyaan yang dijawab kedua tense', [
      'Present perfect sering menjawab apakah sesuatu pernah terjadi atau apa hasilnya saat ini. Past simple sering menjawab kapan kejadian itu terjadi dalam masa lampau yang selesai. I have seen that film menyampaikan pengalaman. I saw it in 2022 menempatkan pengalaman itu pada tahun tertentu. Perbedaan ini bukan sekadar bentuk have versus V2; ia mengatur fokus informasi.',
      'Kedua tense dapat muncul berurutan: I have seen that film, but I saw it in 2022. Kalimat pertama memperkenalkan pengalaman, kalimat kedua memberikan detail waktu. Ini pola percakapan yang alami.'
    ], [['I have seen that film, but I saw it in 2022.', 'Have seen = pengalaman hingga kini; saw = peristiwa pada tahun lampau yang selesai.']]),
    S('B. Penanda waktu sebagai petunjuk, bukan mesin otomatis', [
      'Yesterday, last year, dan in 2022 menunjuk periode lampau yang selesai sehingga biasanya berpasangan dengan past simple. Ever, never, already, yet, for, dan since sering muncul dengan present perfect, tetapi maknanya tetap harus dipahami. For dapat muncul dengan past simple jika durasinya sudah selesai: I lived there for three years, but I moved away.',
      'She has lived here since 2020 menyatakan situasi yang masih relevan atau berlanjut. She lived here from 2020 to 2022 menyatakan periode yang selesai. Keterangan waktu membantu membedakan kedua makna itu.'
    ], [['She has lived here since 2020.', 'Since memberi titik awal; present perfect menunjukkan hubungan dengan sekarang.']]),
    S('C. Memperbaiki kalimat yang salah', [
      'Bentuk I have seen that film in 2022 menggabungkan present perfect dengan waktu lampau selesai. Jika 2022 penting, tulis I saw that film in 2022. Jika waktunya tidak penting, cukup I have seen that film. Pilih salah satu fokus informasi, lalu cocokkan tense-nya.',
      'Baca kembali pertanyaan yang ingin dijawab. “Pernah?” biasanya membuka present perfect; “Kapan?” biasanya mengarah ke past simple. Pertanyaan ini lebih berguna daripada menghafal daftar kata penanda tanpa memahami konteks.'
    ], [], ['Have you seen it? — pengalaman.', 'When did you see it? — waktu kejadian.', 'I saw it in 2022. — waktu selesai.'])
  ],
  20: [
    S('A. Proses yang dimulai di masa lalu', [
      'Present perfect continuous memakai have/has been + V-ing. Bentuk ini menyoroti proses atau lamanya kegiatan yang dimulai dahulu dan masih berjalan, atau baru saja berhenti dengan akibat yang terlihat. I have been studying for two hours menekankan durasi belajar. It has been raining all morning dapat menjelaskan jalan yang masih basah.',
      'Untuk beberapa situasi, present perfect simple juga mungkin. I have studied English for two years dan I have been studying English for two years sama-sama dapat menyatakan durasi, tetapi bentuk continuous lebih menyoroti kegiatan yang berlangsung.'
    ], [['I have been studying for two hours.', 'Have been studying adalah satu verb phrase; for two hours menyatakan durasi.']]),
    S('B. Proses dibanding hasil', [
      'Bandingkan I have completed three exercises dengan I have been completing exercises all morning. Kalimat pertama menekankan jumlah hasil yang selesai; kedua menyoroti proses selama pagi. Tidak semua verb nyaman dipakai continuous: know, own, dan beberapa verba keadaan lainnya biasanya memakai present perfect simple ketika menunjukkan durasi, misalnya I have known her for years.',
      'Negatifnya I have not been studying; pertanyaannya Have you been studying? Perhatikan urutan auxiliary have/has, been, lalu V-ing. Bentuk I have studying keliru karena been hilang.'
    ], [['It has been raining all morning.', 'Continuous menyoroti proses hujan; konteks dapat menunjukkan akibatnya sekarang.']]),
    S('C. Cara memilih bentuk', [
      'Tanyakan apakah kamu ingin menekankan jumlah hasil, atau proses dan lama kegiatan. Jika hasil yang selesai menjadi pusat informasi, present perfect simple sering jelas. Jika lamanya aktivitas yang masih berlangsung menjadi fokus, present perfect continuous sering lebih tepat. Jika verb merupakan stative verb dalam makna tertentu, pertimbangkan simple.',
      'Periksa penanda for dan since: for menyatakan durasi, since menyatakan titik awal. Keduanya bisa muncul bersama bentuk perfect jika hubungan waktunya masih mencapai saat ini.'
    ], [], ['I have written three pages: hasil.', 'I have been writing all morning: proses.', 'I have known her for years: keadaan.'])
  ],
  21: [
    S('A. Kemampuan dan kemungkinan dengan can', [
      'Can + bentuk dasar verb menyatakan kemampuan saat ini, izin informal, atau kemungkinan umum. She can speak three languages berbicara tentang kemampuan; You can use this room memberi izin; It can get cold here menjelaskan kemungkinan umum. Makna yang tepat bergantung konteks. Jangan menambahkan to setelah can: can to speak tidak benar.',
      'Untuk negatif, gunakan cannot atau can’t. Untuk pertanyaan, pindahkan can ke depan subject: Can she speak French? Tidak perlu do/does karena can sudah modal auxiliary.'
    ], [['She can speak three languages.', 'Can diikuti speak, bukan to speak atau speaks.']]),
    S('B. Could dan be able to', [
      'Could dapat menyatakan kemampuan umum di masa lalu: When I was six, I could swim. Could juga membuat permintaan lebih sopan: Could you open the window? Untuk satu keberhasilan khusus di masa lalu, was/were able to atau managed to sering lebih jelas: After trying twice, she was able to open the door.',
      'Be able to berguna ketika kita memerlukan bentuk waktu yang tidak tersedia pada can: I will be able to join next week. Bentuk be harus berubah sesuai tense dan subject. Jangan menganggap could selalu berarti lampau; dalam permintaan sopan, waktunya bisa sekarang.'
    ], [['Could you open the window?', 'Could di sini membentuk permintaan sopan, bukan laporan kemampuan masa lalu.']]),
    S('C. Memilih berdasarkan makna', [
      'Tanyakan apakah kamu sedang menyatakan kemampuan, memberi izin, atau meminta bantuan. Setelah itu tentukan waktunya. Can umum untuk sekarang; could dapat merujuk kemampuan lampau umum atau permintaan sopan; be able to fleksibel untuk masa depan atau keberhasilan tertentu.',
      'Lihat verb setelah modal. Baik can maupun could langsung diikuti bentuk dasar tanpa to dan tanpa -s. Pola sederhana ini juga berlaku pada banyak modal lain yang dibahas berikutnya.'
    ], [], ['She can swim: kemampuan kini.', 'She could swim at six: kemampuan lampau umum.', 'She was able to finish: keberhasilan khusus.'])
  ],
  22: [
    S('A. Kewajiban, aturan, dan saran', [
      'Must dan have to sering menyatakan keharusan, sedangkan should biasanya menyatakan saran. You must wear a seat belt terdengar sebagai keharusan kuat; You have to wear a seat belt dapat menyebut aturan atau keadaan yang mewajibkan. Dalam banyak konteks keduanya dapat saling menggantikan, sehingga jangan menafsirkan perbedaan sumber kewajiban sebagai hukum mutlak.',
      'You should review the examples memberi saran, bukan aturan wajib. Setelah must dan should, gunakan bentuk dasar: must wear, should review. Have to memiliki to sebagai bagian konstruksinya: have to wear.'
    ], [['You should review the examples.', 'Should + review, bukan should to review.']]),
    S('B. Negasi yang mengubah makna', [
      'Perbedaan paling penting adalah must not versus do not have to. You must not enter berarti kamu dilarang masuk. You do not have to enter berarti masuk tidak wajib; kamu boleh memilih. Should not berarti sebaiknya tidak melakukan sesuatu. Ketiga bentuk itu tidak dapat ditukar tanpa mengubah makna.',
      'Untuk masa lampau, had to menyatakan keharusan yang terjadi dahulu: I had to leave early. Must tidak memiliki bentuk lampau biasa yang sama. Pertanyaan Have you to...? jarang dalam banyak varietas modern; Do you have to leave? adalah pilihan aman dalam percakapan umum.'
    ], [['You do not have to come early.', 'Tidak wajib datang lebih awal; bukan larangan untuk datang lebih awal.']]),
    S('C. Menentukan intensitas pesan', [
      'Saat menulis instruksi, tentukan apakah hal itu wajib, dilarang, hanya disarankan, atau tidak wajib. Pilihan modal akan mengubah sikap penutur terhadap tindakan. Baca ulang kalimat negatif dengan cermat karena satu kata not dapat menghasilkan arti yang sangat berbeda.',
      'Untuk latihan, buat satu situasi dan empat kalimat: You must wear a helmet; You must not ride without one; You should check the helmet; You do not have to buy a new one. Dengan konteks yang sama, fungsi tiap bentuk menjadi jelas.'
    ], [], ['Must: wajib.', 'Must not: dilarang.', 'Should: disarankan.', 'Do not have to: tidak wajib.'])
  ],
  23: [
    S('A. Kemungkinan dengan may dan might', [
      'May dan might sering dipakai ketika penutur tidak yakin suatu peristiwa akan terjadi: It may rain; It might rain. Might sering terasa lebih tentatif, tetapi tidak ada persentase kemungkinan yang tetap untuk masing-masing bentuk. Konteks, nada, dan informasi yang dimiliki penutur memengaruhi makna.',
      'Keduanya diikuti bentuk dasar verb tanpa -s: It might rain, bukan It might rains. Untuk dugaan tentang masa lalu, gunakan may/might have + past participle: She may have missed the bus.'
    ], [['It might rain later.', 'Might menunjukkan kemungkinan; rain tetap bentuk dasar.']]),
    S('B. May untuk izin', [
      'May I ask a question? adalah permintaan izin yang terasa lebih formal daripada Can I ask a question? Keduanya dapat dipahami, tetapi fungsi dan tingkat formalitasnya berbeda. Dalam jawaban, You may leave memberi izin dengan nada resmi atau sopan.',
      'Jangan menyamakan semua may dengan kemungkinan. May I...? biasanya izin; It may rain biasanya kemungkinan. Bentuk yang sama mendapat makna berbeda karena subject, jenis kalimat, dan situasi percakapan.'
    ], [['May I ask a question?', 'May di awal pertanyaan menandai permintaan izin formal.']]),
    S('C. Menulis dugaan yang proporsional', [
      'Pilih may atau might ketika bukti belum cukup untuk pernyataan pasti. Jika ingin menyatakan keyakinan sangat kuat, bentuk lain seperti must dalam makna deduksi dapat dipakai, tetapi jangan menafsirkan modal sebagai angka probabilitas. Jelaskan sumber dugaan dalam kalimat lain bila pembaca membutuhkannya.',
      'Periksa bahwa main verb setelah modal berada dalam bentuk dasar, lalu pastikan waktu yang dimaksud. It might rain menunjuk sekarang atau nanti; It might have rained menunjuk dugaan tentang peristiwa lampau.'
    ], [], ['It may rain: kemungkinan.', 'She might have left: dugaan lampau.', 'May I leave?: izin.'])
  ],
  24: [
    S('A. Mengubah fokus kalimat', [
      'Passive voice dipakai ketika hal yang dikenai tindakan lebih penting daripada pelakunya, atau ketika pelaku tidak diketahui. Dalam Maya wrote the report, Maya menjadi fokus. Dalam The report was written by Maya, the report menjadi subject. Jika pelakunya tidak penting, by Maya boleh dihilangkan: The report was written yesterday.',
      'Object aktif menjadi subject pasif. Verb dibentuk dengan be dalam tense yang tepat + past participle (V3). Karena itu, was wrote keliru; setelah was gunakan written. Perubahan voice tidak mengharuskan perubahan waktu.'
    ], [['The report was written yesterday.', 'The report = subject pasif; was = be lampau; written = V3.']]),
    S('B. Bentuk pada beberapa tense', [
      'Present simple passive: English is spoken in many countries. Past simple passive: The report was written yesterday. Present perfect passive: The report has been written. Komponen be berubah sesuai tense dan subject, sementara main verb tetap V3. Pertanyaan dan negasi mengubah auxiliary: Was the report written? The report was not written.',
      'Tidak semua verb bisa membentuk passive biasa. Verb intransitive yang tidak memiliki direct object, seperti sleep dalam The baby sleeps, tidak menyediakan object untuk menjadi subject pasif. Periksa pola verb aktif dahulu sebelum mencoba mengubahnya.'
    ], [['English is spoken in many countries.', 'Is spoken adalah present simple passive; pelaku umum tidak perlu disebut.']]),
    S('C. Kapan pelaku disebut', [
      'Tambahkan by + agent jika identitas pelaku membantu: The report was written by Maya. Jika informasi pelaku sudah jelas, tidak diketahui, atau tidak relevan, kalimat pasif sering lebih ringkas tanpa agent. Namun jangan memakai passive hanya agar tulisan terlihat formal; active voice sering lebih jelas bila pelaku dan tindakannya penting.',
      'Saat mengedit, tanyakan apa yang ingin pembaca perhatikan pertama kali. Jika hasil atau penerima tindakan menjadi topik, passive dapat bekerja. Jika yang penting adalah siapa melakukan sesuatu, active mungkin lebih langsung.'
    ], [], ['Active: Maya wrote the report.', 'Passive: The report was written by Maya.', 'Tanpa agent: The report was written yesterday.'])
  ],
  25: [
    S('A. Mengatur agar orang lain mengerjakan sesuatu', [
      'Causative have/get something done menunjukkan bahwa seseorang mengatur atau mengalami pekerjaan yang dikerjakan pihak lain. I had my laptop repaired biasanya berarti saya mengatur layanan perbaikan, bukan bahwa saya sendiri memperbaikinya. She got her hair cut juga menunjukkan layanan atau tindakan yang terjadi pada rambutnya.',
      'Pola dasarnya have/get + object + V3. Object adalah hal yang dikerjakan, misalnya my laptop; repaired adalah past participle yang menunjukkan tindakan terhadap object. Bentuk had my laptop repaired tidak menyebut siapa teknisinya, walaupun agent dapat ditambahkan jika penting.'
    ], [['I had my laptop repaired.', 'Had = causative; my laptop = object; repaired = pekerjaan yang dilakukan pada laptop.']]),
    S('B. Menyebut orang yang mengerjakan', [
      'Jika pelakunya disebut sebelum verb kedua, pola berubah: I had a technician repair my laptop atau I got a technician to repair my laptop. Setelah have + person gunakan bentuk dasar; setelah get + person gunakan to + bentuk dasar. Jangan mencampur kedua pola itu dengan have/get + object + V3.',
      'Bandingkan I repaired my laptop dengan I had my laptop repaired. Kalimat pertama menempatkan saya sebagai pelaku langsung; kalimat kedua menempatkan saya sebagai orang yang mengatur perbaikan. Pilihan struktur membawa perbedaan makna yang penting.'
    ], [['She got her hair cut.', 'Hair adalah hal yang dipotong; cut di sini V3 yang bentuknya sama dengan V1 dan V2.']]),
    S('C. Menghindari ambiguitas', [
      'Kalimat I had repaired my laptop by a technician tidak menyampaikan causative dengan jelas. Jika maksudnya teknisi yang memperbaiki, tulis I had my laptop repaired by a technician. Susunan object dan V3 menentukan siapa yang dipahami melakukan pekerjaan.',
      'Periksa tiga peran: siapa yang mengatur, apa yang dikerjakan, dan apakah pelaku perlu disebut. Setelah itu pilih salah satu pola causative secara utuh. Dengan cara ini, kamu tidak hanya menghafal urutan kata, tetapi juga menjaga makna kalimat.'
    ], [], ['Have/get + thing + V3: had my laptop repaired.', 'Have + person + V1: had a technician repair it.', 'Get + person + to V1: got a technician to repair it.'])
  ],
  26: [
    S('A. Menghubungkan unsur yang setara', [
      'Coordinating conjunction menghubungkan dua unsur dengan tingkat struktur yang setara: tea and coffee, a short but useful lesson, atau dua independent clauses. And menambah informasi, but menunjukkan kontras, or memberi pilihan, dan so menyatakan akibat. Pilihan conjunction harus mencerminkan hubungan logis antara dua bagian kalimat.',
      'Dalam I studied, so I passed, kedua klausa dapat berdiri sendiri. Koma sebelum so membantu pembaca melihat batas klausa. Dalam tea and coffee, tidak ada dua klausa lengkap sehingga koma biasanya tidak diperlukan.'
    ], [['I studied, so I passed.', 'So menghubungkan sebab dan akibat antara dua independent clauses.']]),
    S('B. Koma dan hubungan makna', [
      'Ketika dua independent clauses dihubungkan oleh and, but, or, atau so, koma sebelum conjunction lazim dalam tulisan formal. She likes tea, but he prefers coffee memiliki dua subject dan dua verb. Namun She likes tea and coffee hanya menghubungkan dua noun sehingga tidak memerlukan koma yang sama.',
      'Jangan menambahkan conjunction tanpa bagian yang dihubungkan. I studied so I passed because berakhir dengan because tanpa klausa alasan. Setelah because diperlukan klausa yang menerangkan sebab, atau hapus because jika tidak diperlukan.'
    ], [['She likes tea, but he prefers coffee.', 'But menunjukkan kontras antara dua klausa yang masing-masing lengkap.']]),
    S('C. Memilih penghubung yang tepat', [
      'Bacalah tiap sisi penghubung secara terpisah. Apakah keduanya sama jenisnya—dua kata, dua frasa, atau dua klausa? Lalu tentukan hubungan maknanya: tambahan, pilihan, kontras, atau akibat. Jika hubungannya tidak jelas, mungkin kalimat perlu dibagi atau disusun ulang.',
      'Gunakan conjunction untuk membantu alur gagasan, bukan sekadar membuat kalimat lebih panjang. Dua kalimat pendek yang jelas sering lebih baik daripada satu kalimat panjang dengan penghubung yang salah.'
    ], [], ['And: tambahan.', 'But: kontras.', 'Or: pilihan.', 'So: akibat.'])
  ],
  27: [
    S('A. Main clause dan dependent clause', [
      'Subordinating conjunction memperkenalkan klausa yang bergantung pada klausa utama. Because it rained mempunyai subject dan verb, tetapi sebagai alasan yang diawali because, ia mengundang kelanjutan: Because it rained, we stayed inside. Klausa utama we stayed inside dapat berdiri sendiri. Hubungan keduanya membuat kalimat lebih informatif.',
      'Conjunction seperti because, although, when, dan if membawa hubungan yang berbeda: sebab, kontras, waktu, dan syarat. Memilih kata yang salah dapat mengubah logika kalimat meskipun tata bahasanya tampak benar.'
    ], [['Because it rained, we stayed inside.', 'Because it rained = klausa alasan; we stayed inside = klausa utama.']]),
    S('B. Posisi klausa dan tanda baca', [
      'Dependent clause dapat berada di awal atau akhir: Because it rained, we stayed inside; We stayed inside because it rained. Ketika dependent clause muncul di awal, koma biasanya memisahkannya dari main clause. Di akhir, koma sering tidak diperlukan untuk klausa yang menyatu erat dengan makna utama.',
      'Although menandai kontras yang tidak terduga: We went out although it rained. Jangan menulis although tetapi kemudian menambahkan but untuk hubungan yang sama dalam satu struktur sederhana: Although it rained, but we went out. Pilih salah satu pola yang lengkap.'
    ], [['We stayed inside although the café was open.', 'Although memperkenalkan keadaan yang berlawanan dengan kemungkinan pergi ke luar.']]),
    S('C. Memeriksa kelengkapan', [
      'Cari subject dan finite verb pada setiap klausa. Lalu tentukan mana yang dapat berdiri sendiri. Jika kalimat hanya berbunyi Because it rained, ia menjadi fragment dalam tulisan biasa; tambahkan klausa utama. Namun dalam percakapan, fragment kadang dipakai sebagai jawaban singkat. Untuk menulis artikel atau esai, gunakan struktur lengkap kecuali ada alasan gaya yang jelas.',
      'Coba pindahkan dependent clause dari depan ke belakang. Jika maknanya tetap masuk akal, kamu telah memahami hubungan logisnya. Setelah itu, sesuaikan komanya.'
    ], [], ['Because: alasan.', 'Although: kontras.', 'When: waktu.', 'If: syarat.'])
  ],
  28: [
    S('A. Klausa yang menjelaskan noun', [
      'Relative clause memberikan informasi tentang noun yang mendahuluinya. The student who answered is my friend memakai who answered untuk menentukan student yang dimaksud. Who lazim untuk orang, which untuk benda, whose untuk kepemilikan. That dapat menggantikan who atau which dalam banyak defining relative clauses.',
      'Relative pronoun dapat menjadi subject atau object di dalam relative clause. The student who answered: who adalah subject dari answered. The book that I read: that adalah object dari read dan dalam banyak defining clauses dapat dihilangkan: The book I read.'
    ], [['The student who answered is my friend.', 'Who answered membatasi student yang dimaksud; tidak ada koma.']]),
    S('B. Defining dan non-defining', [
      'Defining clause diperlukan agar pembaca tahu noun yang mana, sehingga biasanya tidak dipisah koma. Non-defining clause hanya menambahkan informasi dan ditandai koma: My phone, which I bought yesterday, is new. Jika klausa itu dihapus, pembaca masih tahu phone mana yang dimaksud dari konteks.',
      'Dalam non-defining clause, jangan memakai that sebagai pengganti who atau which, dan relative pronoun umumnya tidak dihilangkan. Perbedaan koma dapat mengubah makna: My brother who lives in Bandung ... menyiratkan pemilihan satu dari beberapa saudara; My brother, who lives in Bandung, ... menyajikan lokasi sebagai informasi tambahan.'
    ], [['My phone, which I bought yesterday, is new.', 'Which I bought yesterday adalah informasi tambahan, sehingga dipisah koma.']]),
    S('C. Kesalahan yang perlu dihindari', [
      'Untuk orang, gunakan who dalam contoh standar ini: The student who answered, bukan The student which answered. Jangan mengulang pronoun yang sudah diwakili relative pronoun: The student who she answered ... salah jika who adalah subject. Periksa peran relative pronoun di klausa kecilnya.',
      'Coba pisahkan menjadi dua kalimat, lalu gabungkan. The student answered. The student is my friend. Noun yang sama dapat diganti dengan who ketika kedua kalimat disatukan. Cara ini membantu menghindari susunan yang kehilangan subject atau memiliki subject ganda.'
    ], [], ['Defining: tanpa koma.', 'Non-defining: dipisah koma, tanpa that.', 'Who untuk orang; which untuk benda; whose untuk kepemilikan.'])
  ],
  29: [
    S('A. Syarat yang mungkin terjadi', [
      'First conditional membicarakan hasil masa depan yang mungkin terjadi jika sebuah syarat terpenuhi. Pola pengajaran yang umum adalah if + present simple, will + bentuk dasar: If it rains, we will stay home. Rains berbentuk present meskipun hujannya merujuk masa depan. Klausa hasil memakai will untuk menyatakan kemungkinan keputusan atau akibat.',
      'Klausa dapat ditukar urutannya: We will stay home if it rains. Ketika if-clause berada di awal, koma biasanya memisahkannya dari klausa hasil. Di akhir, koma sering tidak diperlukan.'
    ], [['If it rains, we will stay home.', 'If-clause memakai present simple; result clause memakai will + V1.']]),
    S('B. Variasi hasil dan batas pola', [
      'Klausa hasil tidak selalu harus memakai will. If you finish early, you can leave memakai can untuk izin atau kemampuan. If the weather improves, we may go out memakai may untuk kemungkinan. Pilihan modal bergantung pada makna yang diinginkan, sementara if-clause tetap menyatakan syarat.',
      'Bentuk If it will rain, we will stay home biasanya tidak tepat untuk kondisi biasa. Ada penggunaan khusus will dalam if-clause, misalnya menyatakan kesediaan, tetapi itu bukan pola dasar first conditional. Untuk latihan awal, gunakan present simple setelah if.'
    ], [['I will call you if I finish early.', 'Posisi if-clause di akhir tidak mengubah hubungan syarat dan hasil.']]),
    S('C. Memeriksa logika kalimat', [
      'Tanyakan apakah syarat itu mungkin terpenuhi dan hasilnya masih berada di masa depan. Jika ya, first conditional dapat cocok. Jika syaratnya tidak nyata atau hanya dibayangkan, second conditional mungkin lebih tepat. Perbedaan ini tentang tingkat kenyataan, bukan sekadar memilih bentuk lampau atau present.',
      'Saat menulis, baca tiap klausa secara terpisah: apa syaratnya, apa akibatnya? Pastikan klausa hasil benar-benar bergantung pada syarat itu dan tidak menyatakan hubungan sebab akibat yang tidak masuk akal.'
    ], [], ['If + present simple, will + V1.', 'If-clause boleh di awal atau akhir.', 'Can/may dapat menggantikan will bila maknanya berbeda.'])
  ],
  30: [
    S('A. Second conditional: membayangkan keadaan kini', [
      'Second conditional menggambarkan situasi sekarang atau masa depan yang tidak nyata, berlawanan dengan fakta, atau kecil kemungkinan. If I had more time, I would read more menyiratkan bahwa saya sekarang tidak memiliki cukup waktu. Bentuk past pada had menunjukkan jarak dari kenyataan, bukan bahwa waktunya selalu lampau.',
      'Pola umumnya if + past simple, would + bentuk dasar. Untuk be, If I were you adalah bentuk umum dalam saran dan aman untuk tulisan formal. Was juga terdengar dalam percakapan informal pada beberapa konteks, tetapi tidak perlu dicampur dalam satu latihan dasar.'
    ], [['If I had more time, I would read more.', 'Had menyatakan syarat hipotetis kini; would read adalah hasil yang dibayangkan.']]),
    S('B. Third conditional: membayangkan masa lalu lain', [
      'Third conditional membicarakan sesuatu yang sudah tidak bisa diubah: If she had left earlier, she would have caught the train. Kenyataannya, ia tidak berangkat lebih awal dan tidak berhasil mengejar kereta. Polanya if + past perfect, would have + V3. Bentuk ini sering dipakai untuk menyesal, mengevaluasi pilihan, atau menjelaskan akibat alternatif.',
      'Jangan tertukar antara had left dan would have caught. Klausa if menyebut syarat lampau yang tidak terpenuhi; klausa hasil menyebut akibat yang tidak terjadi. Kedua sisi bekerja bersama untuk membentuk makna hipotetis.'
    ], [['If she had left earlier, she would have caught the train.', 'Had left = syarat lampau alternatif; would have caught = hasil alternatif.']]),
    S('C. Menentukan jenis conditional', [
      'Tanyakan waktu dan kenyataannya. Apakah syarat mungkin terjadi nanti? Gunakan first conditional. Apakah syarat dibayangkan untuk keadaan sekarang atau masa depan? Gunakan second. Apakah kamu sedang mengubah masa lalu yang sudah selesai? Gunakan third. Pertanyaan ini lebih kuat daripada menghafal nomor conditional tanpa konteks.',
      'Bentuk If I would have time, I read more mencampur pola. Jika maksudnya keadaan kini yang tidak nyata, perbaikannya If I had more time, I would read more. Setelah pola dasar dikuasai, kamu dapat mempelajari mixed conditionals yang menghubungkan waktu berbeda.'
    ], [], ['First: kemungkinan nyata nanti.', 'Second: keadaan kini yang dibayangkan.', 'Third: masa lalu alternatif.'])
  ],
  31: [
    S('A. Dari kutipan langsung ke laporan', [
      'Direct speech mempertahankan kata-kata pembicara di dalam tanda kutip: She said, “I am tired.” Reported speech menyampaikan isinya dari sudut pandang pelapor: She said that she was tired. Dalam laporan, I berubah menjadi she karena orang yang dirujuk berubah. That sering boleh dihilangkan dalam kalimat laporan sederhana.',
      'Setelah reporting verb lampau seperti said, tense sering bergeser ke belakang: am → was, will → would, have done → had done. Pergeseran ini disebut backshift. Namun backshift tidak selalu wajib ketika isi ucapan masih benar atau masih relevan; konteks menentukan pilihan.'
    ], [['She said that she was tired.', 'Said adalah reporting verb lampau; she mengganti I dari ucapan asli; was mengganti am.']]),
    S('B. Pronoun dan keterangan waktu', [
      'Selain tense, sesuaikan pronoun dan keterangan tempat/waktu dengan situasi pelaporan. Jika seseorang berkata I will call you tomorrow, laporan pada hari berikutnya mungkin menjadi He said he would call me the next day. Perubahan tomorrow menjadi the next day hanya diperlukan jika titik waktu pelapor sudah bergeser.',
      'Jangan mengubah pronoun secara mekanis. I dalam kutipan asli dapat merujuk orang yang berbeda di tiap cerita. Tanyakan siapa pembicara asli, siapa pelapor, dan siapa pendengar. Reported speech adalah pekerjaan menjaga makna, bukan sekadar mengganti bentuk verba.'
    ], [['He said he would call later.', 'Will dalam ucapan asli sering menjadi would setelah said, jika laporan berada dalam perspektif lampau.']]),
    S('C. Memeriksa laporan yang dibuat', [
      'Baca kalimat asli dan laporan secara berdampingan. Pastikan orang, waktu, dan tempat masih merujuk pada hal yang sama. Bentuk She said that I am tired dapat salah jika I seharusnya merujuk ke perempuan yang berbicara; dalam konteks itu, She said that she was tired lebih tepat.',
      'Jika pernyataan berupa fakta umum yang tetap benar, tense dapat dipertahankan dalam beberapa konteks. Karena itu, pahami alasan pergeseran sebelum memaksakan semua laporan ke satu pola.'
    ], [], ['Identifikasi pembicara asli.', 'Sesuaikan pronoun dengan sudut pandang pelapor.', 'Pertimbangkan backshift dan keterangan waktu.'])
  ],
  32: [
    S('A. Pertanyaan yang dilaporkan memakai urutan pernyataan', [
      'Direct question Where do you live? memakai do sebelum subject. Dalam reported question, susunannya menjadi He asked where I lived. Setelah where, urutan subject + verb kembali seperti pernyataan. Bentuk He asked where did I live tidak tepat karena inversi pertanyaan langsung tidak dipertahankan di dalam klausa laporan.',
      'Untuk yes/no question, gunakan if atau whether: She asked if I was ready. If di sini berarti “apakah”, bukan syarat first conditional. Reporting verb asked menunjukkan bahwa klausa berikutnya berisi pertanyaan yang dilaporkan.'
    ], [['He asked where I lived.', 'Where memperkenalkan isi pertanyaan; I lived memakai urutan subject + verb.']]),
    S('B. Permintaan dan instruksi', [
      'Permintaan dapat dilaporkan dengan asked + object + to + V1: She asked me to wait. Instruksi yang lebih tegas sering memakai told + object + to + V1: He told us to leave. Untuk larangan, tempatkan not sebelum to: He told us not to leave. Jangan menulis He told not us to leave.',
      'Perbedaan asked dan told berkaitan dengan jenis ujaran dan tingkat ketegasan. Sebuah permintaan sopan dalam kutipan langsung dapat berubah menjadi asked me to ..., sementara perintah dapat menjadi told me to .... Pilih verb pelapor yang cocok dengan maksud asli.'
    ], [['She asked me to wait.', 'Me adalah orang yang diminta; to wait adalah tindakan yang diminta.']]),
    S('C. Langkah mengubah ujaran', [
      'Tentukan apakah ujaran asli berupa wh-question, yes/no question, atau permintaan/perintah. Untuk pertanyaan, pilih wh-word atau if/whether, lalu gunakan urutan pernyataan. Untuk permintaan, pilih asked/told + orang + to-infinitive. Sesuaikan pronoun dan waktu bila sudut pandang berubah.',
      'Baca hasilnya sebagai kalimat utuh. Jika masih terdengar seperti pertanyaan langsung setelah asked—misalnya where did I live—periksa kembali urutan subject dan auxiliary.'
    ], [], ['Wh-question: asked where I lived.', 'Yes/no: asked if I was ready.', 'Request: asked me to wait.', 'Negative command: told us not to leave.'])
  ],
  33: [
    S('A. Pertanyaan tentang object atau keterangan', [
      'Wh-question dapat meminta informasi tentang object, tempat, waktu, alasan, atau cara. Jika yang ditanya bukan subject, present/past simple biasanya memakai do-support: Where do you work? Who did you call? Auxiliary berada sebelum subject dan main verb kembali ke bentuk dasar. Susunan Where you do work? keliru untuk pertanyaan biasa.',
      'Jika verb-nya be, pindahkan be: Where are you? Jika ada modal, pindahkan modal: When can we start? Pertama identifikasi verb phrase agar kamu tahu auxiliary mana yang bergerak ke depan.'
    ], [['Where do you work?', 'Where = informasi tempat; do mendahului subject you; work adalah bentuk dasar.']]),
    S('B. Pertanyaan tentang subject', [
      'Jika who atau what justru mewakili subject, do-support tidak diperlukan dalam bentuk sederhana: Who called you? Di sini who melakukan tindakan called. Bandingkan Who did you call? Di sana you adalah subject dan who adalah object yang ditanyakan. Perbedaan satu auxiliary mengubah peran orang yang dicari.',
      'Cara menguji: buat jawaban sederhana. Maya called you menjawab Who called you? You called Maya menjawab Who did you call? Setelah melihat posisi subject dalam jawaban, pola pertanyaan menjadi lebih masuk akal.'
    ], [['Who called you?', 'Who adalah subject dari called; tidak perlu did.']]),
    S('C. Membuat pertanyaan yang jelas', [
      'Tentukan informasi yang hilang dari kalimat jawaban, lalu pilih question word yang sesuai. Setelah itu cari apakah informasi yang hilang merupakan subject atau bukan. Jika bukan subject, pilih auxiliary sesuai tense dan pindahkan ke depan subject. Jika subject, bentuk wh-word biasanya langsung diikuti verb.',
      'Pertanyaan tak langsung, seperti Could you tell me where you work?, memiliki urutan berbeda pada klausa kecilnya. Itu sebabnya pola reported questions pada Lesson 32 perlu dibedakan dari pertanyaan langsung pada pelajaran ini.'
    ], [], ['Who called you? — menanyakan subject.', 'Who did you call? — menanyakan object.', 'Where do you work? — menanyakan tempat.'])
  ],
  34: [
    S('A. Membandingkan dua hal atau satu kelompok', [
      'Comparative digunakan untuk membandingkan dua hal: This lesson is easier than the last one. Superlative menyatakan satu hal berada pada tingkat paling tinggi atau rendah dalam sebuah kelompok: This is the easiest lesson in the module. Comparative sering diikuti than; superlative biasanya didahului the dalam pola biasa.',
      'Adjective pendek sering memakai -er/-est; adjective yang lebih panjang sering memakai more/most. Ada banyak rincian ejaan dan pengecualian, sehingga “pendek” versus “panjang” adalah panduan awal, bukan hukum tanpa variasi.'
    ], [['This lesson is easier than the last one.', 'Easy berubah menjadi easier; than memperkenalkan hal yang dibandingkan.']]),
    S('B. Bentuk tidak beraturan dan kesalahan ganda', [
      'Good berubah menjadi better/best, bad menjadi worse/worst, dan far memiliki bentuk farther/farthest atau further/furthest menurut konteks. Bentuk more easier tidak tepat karena comparative sudah ditandai oleh -er. Pilih satu strategi: easier atau more useful, bukan keduanya sekaligus.',
      'Perhatikan ejaan: big → bigger → biggest menggandakan konsonan akhir; happy → happier → happiest mengubah y menjadi i. Contoh di dalam kalimat lebih mudah diingat daripada daftar bentuk terpisah.'
    ], [['That is the most useful example.', 'Useful memakai most pada superlative; the memperkenalkan tingkat paling tinggi dalam konteks.']]),
    S('C. Menulis perbandingan yang bermakna', [
      'Sebutkan dasar perbandingan jika perlu: easier than the previous lesson, the most useful example in this chapter. Tanpa konteks, pembaca mungkin tidak tahu kelompok atau ukuran yang dipakai. Pastikan pula dua hal yang dibandingkan sejenis: My answer is clearer than yours, bukan membandingkan answer dengan orang.',
      'Saat mengedit, tandai apakah kamu membandingkan dua hal atau memilih satu dari kelompok. Itu menentukan comparative atau superlative sebelum kamu memikirkan bentuk -er/-est atau more/most.'
    ], [], ['Dua hal: easier than.', 'Satu dari kelompok: the easiest.', 'Tidak beraturan: good → better → best.'])
  ],
  35: [
    S('A. Verb kedua mengikuti pola verb pertama', [
      'Ketika dua verb berdekatan, bentuk verb kedua sering ditentukan oleh verb pertama. Enjoy, avoid, dan finish lazim diikuti -ing: I enjoy reading. Want, decide, dan hope lazim diikuti to + bentuk dasar: She wants to improve. Bentuk I enjoy to read tidak sesuai pola standar enjoy. Tidak ada satu aturan yang membuat semua verb memilih bentuk sama.',
      'Untuk mempelajari pola, simpan verb bersama contoh pendek: enjoy reading, decide to read, avoid making mistakes. Menghafal bentuk verb tanpa pasangannya membuat pemakaian dalam kalimat lebih sulit.'
    ], [['I enjoy reading in English.', 'Enjoy diikuti gerund reading; in English menjelaskan bahasa yang dipakai.']]),
    S('B. Verb yang menerima dua bentuk', [
      'Beberapa verb dapat diikuti gerund maupun infinitive, tetapi maknanya kadang berbeda. Stop smoking berarti berhenti merokok; stop to smoke berarti berhenti dari kegiatan lain untuk merokok. Remember locking the door mengacu pada ingatan tentang tindakan yang sudah dilakukan; remember to lock the door adalah pengingat untuk tindakan yang perlu dilakukan.',
      'Ada juga verb yang menerima dua bentuk dengan perbedaan kecil atau bergantung konteks. Karena itu, periksa kamus pembelajar ketika menemukan pola baru. Jangan memaksakan satu aturan umum pada semua verb.'
    ], [['She wants to improve her grammar.', 'Want diikuti to-infinitive; improve tetap bentuk dasar setelah to.']]),
    S('C. Setelah preposition', [
      'Preposition biasanya diikuti noun phrase atau bentuk -ing jika yang dimaksud adalah tindakan: I am interested in learning more. In adalah preposition, sehingga learning cocok. Jangan menganggap setiap to selalu infinitive; dalam look forward to meeting you, to adalah preposition dan diikuti -ing.',
      'Periksa kata tepat sebelum verb kedua. Apakah ia verb yang memiliki pola tertentu, atau preposition? Langkah ini sering menyelesaikan pilihan gerund versus infinitive dengan cepat.'
    ], [], ['Enjoy reading: gerund.', 'Want to read: infinitive.', 'Interested in reading: setelah preposition.'])
  ],
  36: [
    S('A. Waktu: at, on, dan in', [
      'At sering dipakai untuk waktu spesifik seperti at 9 dan at noon. On dipakai untuk hari atau tanggal: on Monday, on 22 November. In dipakai untuk bulan, tahun, musim, atau periode lebih panjang: in June, in 2026, in the morning. The class starts at 9 on Monday menggabungkan waktu jam dan hari dengan preposition berbeda.',
      'Aturan ini memberi titik awal, tetapi ekspresi tetap memiliki kebiasaan sendiri: at night, in the morning, on Monday morning. Perhatikan frasa lengkap, bukan hanya kata waktu yang berdiri sendiri.'
    ], [['The class starts at 9 on Monday.', 'At untuk pukul tertentu; on untuk hari.']]),
    S('B. Tempat: titik, permukaan, dan ruang', [
      'At sering melihat lokasi sebagai titik atau tempat kegiatan: at the station, at school. On sering dipakai untuk permukaan: on the table, on the wall. In sering melihat sesuatu berada di dalam ruang atau wilayah: in the room, in Jakarta. She lives in Jakarta memakai in karena kota dipandang sebagai wilayah tempat tinggal.',
      'Makna preposition dapat berubah sesuai cara penutur memandang lokasi. At the school dapat menekankan lokasi/gedung, sedangkan in the school dapat menekankan bagian dalam gedung. Karena itu, jangan menyederhanakan semua pilihan menjadi ukuran fisik kecil atau besar.'
    ], [['She lives in Jakarta.', 'In dipakai untuk kota sebagai wilayah.']]),
    S('C. Belajar sebagai kolokasi', [
      'Catat preposition bersama frasa yang lazim: at 9, on Monday, in Jakarta, on the table. Buat kalimat utuh agar makna tempat atau waktunya jelas. Jika sebuah frasa terdengar janggal, periksa contoh kamus karena beberapa kombinasi tidak dapat ditebak dari terjemahan Indonesia.',
      'Bentuk The class starts in 9 salah untuk jam tertentu; ganti in menjadi at. Sesudahnya, baca seluruh kalimat untuk memastikan preposition lain, seperti on Monday, juga sesuai.'
    ], [], ['At 9: jam.', 'On Monday: hari.', 'In Jakarta: wilayah/kota.'])
  ],
  37: [
    S('A. Verb dan particle membentuk satu makna', [
      'Phrasal verb menggabungkan verb dengan particle, misalnya turn off, look after, atau give up. Maknanya kadang dapat dipahami dari bagiannya, tetapi sering perlu dipelajari sebagai satu unit. Turn off the light berarti mematikan lampu; look after her brother berarti merawat atau menjaga saudaranya.',
      'Jangan selalu menerjemahkan off, after, atau up kata demi kata. Catat makna keseluruhan dalam contoh kalimat. Phrasal verb sangat umum dalam bahasa Inggris sehari-hari dan dapat memiliki lebih dari satu makna menurut konteks.'
    ], [['Please turn off the light.', 'Turn off adalah satu unit makna; the light adalah object.']]),
    S('B. Separable dan inseparable', [
      'Beberapa phrasal verb transitive dapat dipisah oleh object noun: turn off the light atau turn the light off. Jika object berupa pronoun, biasanya harus diletakkan di tengah: turn it off, bukan turn off it. Bentuk Please turn the light it off salah karena mengulang object.',
      'Phrasal verb lain tidak dapat dipisah seperti look after: She looks after her brother, bukan She looks her brother after. Karena pemisahan bergantung pada verb tertentu, pelajari phrasal verb bersama pola object-nya.'
    ], [['She looks after her brother.', 'Look after tidak dipisah oleh object her brother.']]),
    S('C. Cara mencatat dan memakai', [
      'Untuk setiap phrasal verb baru, tulis makna, satu contoh, apakah ia mengambil object, dan apakah object dapat memisahkan verb dan particle. Jika mungkin, uji dengan pronoun. Misalnya turn off the light → turn it off. Catatan seperti ini lebih berguna daripada daftar arti tanpa struktur.',
      'Saat mengedit, lihat apakah object noun atau pronoun sudah muncul tepat sekali dan berada di posisi yang diizinkan. Ini membantu memperbaiki kalimat seperti turn the light it off dengan cepat.'
    ], [], ['Turn off the light / turn the light off.', 'Turn it off, bukan turn off it.', 'Look after her brother, bukan look her brother after.'])
  ],
  38: [
    S('A. Verb mengikuti subject inti', [
      'Subject–verb agreement berarti bentuk finite verb sesuai dengan subject dalam jumlah dan orang. Present simple memberi -s pada banyak verb dengan subject orang ketiga tunggal: She works. Verb be memiliki bentuk is/are/was/were. Everyone is ready memakai is karena everyone diperlakukan singular secara gramatikal dalam kalimat standar.',
      'Jangan memilih verb berdasarkan noun yang paling dekat jika noun itu hanya bagian dari frasa tambahan. Dalam The list of lessons is long, subject intinya list (singular), bukan lessons (plural). Frasa of lessons menjelaskan list, tetapi tidak mengubah agreement.'
    ], [['The list of lessons is long.', 'List adalah head noun dari subject; is mengikuti list yang singular.']]),
    S('B. Subject yang tampak rumit', [
      'Frasa seperti each student, every lesson, dan everyone biasanya mengambil verb singular: Each student has a notebook. Sementara subject plural seperti the students mengambil verb plural: The students have notebooks. Jika ada dua noun yang dihubungkan and sebagai subject gabungan, verb sering plural: Maya and Lina are here.',
      'Ada konstruksi yang lebih rumit, seperti either...or, collective nouns, dan jumlah sebagai satu kesatuan. Untuk tahap ini, temukan head noun dan pahami apakah subject dipandang satu atau lebih dari satu. Jangan menebak hanya dari kata terakhir sebelum verb.'
    ], [['Everyone is ready.', 'Everyone merujuk banyak orang tetapi secara gramatikal memakai agreement singular.']]),
    S('C. Cara mengoreksi agreement', [
      'Temukan verb utama, lalu telusuri kembali ke subject yang mengendalikannya. Abaikan sementara frasa prepositional atau relative clause di antara keduanya. Setelah subject inti jelas, tentukan singular atau plural dan pilih bentuk verb yang cocok.',
      'Dalam Everyone are ready, kesalahan muncul karena makna “semua orang” terasa plural. Bentuk yang tepat adalah Everyone is ready. Pemeriksaan ini sangat penting pada kalimat panjang, saat subject dan verb terpisah oleh banyak kata.'
    ], [], ['Everyone is ready.', 'The students are ready.', 'The list of lessons is long.'])
  ],
  39: [
    S('A. Memisahkan dua klausa lengkap', [
      'Independent clause memiliki subject dan finite verb serta dapat berdiri sendiri. I reviewed the lesson dan I took the quiz adalah dua independent clauses. Jika keduanya hanya dipisahkan koma— I reviewed the lesson, I took the quiz —terjadilah comma splice dalam tulisan standar. Tanda baca harus menunjukkan hubungan struktur yang jelas.',
      'Salah satu perbaikan adalah menambahkan coordinating conjunction: I reviewed the lesson, and I took the quiz. Pilihan lain ialah titik atau semicolon: I reviewed the lesson. I took the quiz. / I reviewed the lesson; then I took the quiz.'
    ], [['I reviewed the lesson, and I took the quiz.', 'Koma + and menghubungkan dua klausa lengkap dengan benar.']]),
    S('B. Fragment dan run-on', [
      'Fragment adalah bagian yang diperlakukan sebagai kalimat lengkap padahal unsur wajibnya tidak ada, misalnya Because I was tired. sebagai kalimat formal yang berdiri sendiri. Tambahkan main clause: Because I was tired, I went home. Run-on terjadi ketika dua klausa lengkap disambung tanpa pemisah yang memadai.',
      'Titik, semicolon, dan koma + conjunction memiliki nuansa ritme berbeda. Titik memberi jeda paling jelas; semicolon menghubungkan dua gagasan yang berkaitan erat; conjunction menamai hubungan seperti tambahan atau kontras. Pilih berdasarkan alur gagasan, bukan sekadar agar aturan tanda baca terpenuhi.'
    ], [['I reviewed the lesson; then I took the quiz.', 'Semicolon memisahkan dua klausa lengkap yang berkaitan erat.']]),
    S('C. Cara proofreading', [
      'Baca setiap bagian di sekitar koma atau titik dan tanyakan apakah ia mempunyai subject dan finite verb. Jika dua bagian lengkap dipisah hanya oleh koma, perbaiki dengan conjunction, semicolon, atau titik. Jika bagian setelah titik tidak dapat berdiri sendiri, sambungkan dengan klausa utama atau lengkapi strukturnya.',
      'Bacalah tulisan dengan suara pelan. Jeda alami membantu menemukan kalimat yang terlalu padat, tetapi keputusan tanda baca tetap harus didasarkan pada struktur klausa. Ini membuat tulisan lebih mudah diikuti pembaca.'
    ], [], ['Dua klausa: titik.', 'Dua klausa berkaitan: semicolon.', 'Dua klausa + hubungan: koma dan conjunction.'])
  ],
  40: [
    S('A. Penyuntingan dimulai dari struktur', [
      'Sebelum memperhalus pilihan kata, pastikan setiap kalimat mempunyai struktur yang lengkap. Cari subject dan finite verb, lalu lihat apakah verb memerlukan object, complement, atau keterangan. Perbaiki fragment dan run-on terlebih dahulu karena keduanya membuat pembaca sulit mengikuti gagasan. Setelah kerangka kalimat benar, pemeriksaan bentuk menjadi lebih mudah.',
      'Baca tiap paragraf dengan satu pertanyaan: apa gagasan utama kalimat ini? Jika beberapa ide bertabrakan, pecah kalimat atau hubungkan dengan conjunction yang tepat. “Natural English” bukan berarti selalu memilih kalimat panjang; kejelasan lebih penting daripada kerumitan.'
    ], [['I reviewed the lesson, and I took the quiz.', 'Dua klausa lengkap dihubungkan dengan conjunction yang sesuai.']]),
    S('B. Waktu, agreement, dan rujukan', [
      'Pada pemeriksaan kedua, lihat tense dan aspek. She has studied English for three years dapat menyatakan kegiatan belajar yang bermula dulu dan masih relevan sekarang. She has been studying English for three years lebih menyoroti proses. Since memberi titik awal—since 2023—sedangkan for memberi durasi— for three years. Kalimat She is studying English since three years perlu diperbaiki pada dua bagian sekaligus.',
      'Periksa pula subject–verb agreement, article, dan pronoun. Tanyakan apakah the merujuk sesuatu yang sudah diketahui, apakah a/an cocok dengan noun, dan apakah she/it/they mempunyai rujukan jelas. Kesalahan kecil dapat menumpuk walaupun pola utama kalimat sudah benar.'
    ], [['She has studied English for three years.', 'Present perfect simple dapat menyatakan durasi yang masih relevan; for menunjukkan lamanya periode.']]),
    S('C. Membaca ulang untuk makna dan alur', [
      'Setelah akurasi, baca tulisan dari sudut pandang pembaca. Apakah urutan gagasan logis? Apakah pilihan kata sesuai tingkat formalitas? Apakah ada frasa yang dapat disederhanakan tanpa kehilangan makna? Baca dengan suara pelan untuk menemukan kalimat yang tersendat. Jangan mengubah kalimat yang sudah benar hanya karena ada bentuk lain yang juga mungkin.',
      'Penyuntingan paling efektif dilakukan dalam beberapa lintasan: struktur, bentuk, lalu makna dan alur. Jika semuanya diperiksa sekaligus, kesalahan mudah terlewat. Gunakan contoh dari pelajaran sebelumnya sebagai rujukan saat menghadapi pola yang belum yakin.'
    ], [], ['Pass 1: struktur klausa.', 'Pass 2: tense, agreement, article, pronoun.', 'Pass 3: makna, pilihan kata, dan alur.'])
  ],
};
