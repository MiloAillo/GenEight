CREATE DATABASE  IF NOT EXISTS `geneight` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `geneight`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: geneight
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `berita`
--

DROP TABLE IF EXISTS `berita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `berita` (
  `beritaID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `judul` varchar(255) NOT NULL,
  `isi` text NOT NULL,
  `waktu` date DEFAULT (curdate()),
  PRIMARY KEY (`beritaID`),
  KEY `userID` (`userID`),
  CONSTRAINT `berita_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `berita`
--

LOCK TABLES `berita` WRITE;
/*!40000 ALTER TABLE `berita` DISABLE KEYS */;
INSERT INTO `berita` VALUES (108,32,'Usung Budaya Tradisional di Era Kemajuan GEN-Z,SMK N 8 Semarang Peringati Hari Kartini dengan AKSARA','Setiap tanggal 21 April, masyarakat Indonesia merayakan Hari Kartini untuk mengenang jasa Raden Ajeng Kartini, seorang pahlawan nasional yang memperjuangkan emansipasi perempuan dan pendidikan bagi kaum wanita di Indonesia pada awal abad ke-20. Di sekolah-sekolah, peringatan Hari Kartini bukan hanya sebuah tradisi, tetapi juga momen penting untuk mengajarkan nilai-nilai kesetaraan gender, keberanian, dan keberagaman kepada para siswa.\n\nDi banyak sekolah, peringatan Hari Kartini diadakan dengan berbagai kegiatan yang kreatif dan edukatif. Hal tersebut juga diadakan di SMK N 8 Semarang. Mengusung Budaya Tradisional di Era Kemajuan GEN-Z, OSIS SMK N 8 Semarang memperingati Hari Kartini dengan menggelar Ajang Kreativitas Kartinian Snapan Bersama atau disingkat dengan AKSARA. Terdapat beberapa mata lomba yang diadakan oleh OSIS SMK N 8 Semarang   yang dilaksanakan selama 2 hari , pada tanggal  24 – 25 April 2024. Mata lomba tersebut diantaranya ada Grobak Sodor, Ladies On The Shoot (LOTS), dan Duta Bahasa, yang diikuti oleh siswa kelas X dan XI ( perwakilan per kelas ).\n\nGrobak Sodor merupakan permainan tradisional Indonesia yang dimainkan oleh beberapa anak secara berkelompok dengan kekompakan dan kerjasama di setiap kelompoknya yang secara tidak langsung terdapat penerapan nilai – nilai P5.\n\nSelain grobak sodor, lomba dan kompetisi yang lainnya adalah lomba Duta Bahasa di mana dalam mata lomba ini siswa menyampaikan pidato tentang perjuangan Kartini dengan tema Emansipasi Wanita. Lomba ini menggambarkan semangat siswa dalam meniru perjuangan Kartini dalam kesetaraan gender. Melalui kegiatan-kegiatan ini, siswa-siswi tidak hanya diajak untuk mengingat jasa Kartini saja tetapi juga untuk merenungkan dan menginternalisasi nilai-nilai yang beliau perjuangkan, serta mengajak Kartini masa kini untuk terus semangat dalam aksi nyata membangun dan memajukan Indonesia.\n\nTak hanya itu, peringatan Hari Kartini di sekolah juga diisi dengan berbagai kegiatan lainnya yang melibatkan siswa mengembangkan bakat dengan mengekspresikan keahlian pribadi siswi dalam tata kecantikan. Misalnya, siswi dapat merias wajah teman perempuan dengan kemampuan yang dimiliki.\n\nPeringatan Hari Kartini di SMK N 8 Semarang juga mendapatkan dukungan dari para sponsor ship dari Indosat Oredoo Three, OMG cosmetic, Oti Chicken.\n\nMelalui berbagai kegiatan tersebut, peringatan Hari Kartini di sekolah bukan hanya menjadi sebuah acara rutin dalam kalender pendidikan, tetapi juga menjadi wahana untuk membentuk generasi muda yang sadar akan pentingnya kesetaraan gender dan memegang teguh semangat Kartini dalam membangun masa depan Indonesia yang lebih baik dan lebih adil bagi semua warganya.','2025-06-07'),(110,32,'Siswa SMK Negeri 8 Semarang Raih Prestasi Juara 2 dalam Lomba Fotografi Dinus Walk 2024','Semarang, 7 Februari 2024 - Sukses terus menghiasi perjalanan prestasi SMK Negeri 8 Semarang, kali ini para siswa menorehkan prestasi cemerlang dengan meraih juara 2 dalam Lomba Fotografi Dinus Photowalk#9 Tahun 2024. Lomba bergengsi yang dilaksanakan pada Minggu, 28 Januari 2024 ini, diadakan oleh Pers Kampus Warta Dinus Universitas Dian Nuswantoro (Dinus) Semarang dan diikuti oleh berbagai sekolah tingkat menengah di wilayah tersebut.\n\nDengan tema \"Let’s Fall in Love with Semarang\", Lomba Fotografi Dinus Photowalk#9 tahun 2024 menjadi ajang bagi para siswa untuk menunjukkan bakat dan kreativitas mereka dalam bidang fotografi. Devaro Ridho Damara siswa XI DKV 1 dari SMK Negeri 8 Semarang berhasil mencuri perhatian para juri dengan karya-karya fotografi yang menggambarkan keindahan dari Kota Semarang.\n\nDevaro Ridho, menyatakan kegembiraannya atas pencapaian ini. \"Saya sangat bersyukur bisa meraih juara 2 dalam Lomba Fotografi Dinus Photowalk. Ini bukan hanya tentang meraih penghargaan, tetapi juga tentang pengalaman dan pembelajaran yang sangat berharga bagi kami sebagai siswa. Terima kasih kepada sekolah, guru pembimbing, dan semua pihak yang telah memberikan dukungan.\"\n\nPlt. Kepala SMK Negeri 8 Semarang, Ibu Almiati, menyampaikan selamat kepada Devaro atas prestasi gemilang yang telah diraih. \"Prestasi ini menjadi bukti bahwa potensi dan kreativitas siswa-siswi kami tidak hanya terbatas di bidang akademis, tetapi juga dalam bidang seni dan keterampilan. Teruslah mengembangkan bakat dan minat kalian, karena setiap prestasi adalah langkah menuju kesuksesan yang lebih besar.\"\n\nDengan meraih juara 2 dalam Lomba Fotografi Dinus Photowalk#9 Tahun 2024, SMK Negeri 8 Semarang sekali lagi membuktikan bahwa mereka bukan hanya sebagai lembaga pendidikan yang unggul secara akademis, tetapi juga sebagai wadah pembinaan bakat dan potensi siswa dalam berbagai bidang, menciptakan generasi yang berprestasi dan berdaya saing tinggi.','2025-06-07');
/*!40000 ALTER TABLE `berita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kejuaraan`
--

DROP TABLE IF EXISTS `kejuaraan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kejuaraan` (
  `kejuaraanID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `jurusan` enum('PPLG','TJKT','PS','DKV','LK') DEFAULT NULL,
  `kejuaraan` text,
  PRIMARY KEY (`kejuaraanID`),
  KEY `userID` (`userID`),
  CONSTRAINT `kejuaraan_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kejuaraan`
--

LOCK TABLES `kejuaraan` WRITE;
/*!40000 ALTER TABLE `kejuaraan` DISABLE KEYS */;
INSERT INTO `kejuaraan` VALUES (31,32,'PS','Kejuaraan Senam Artistik Putri Atlit PON Aceh 2024 a.n. Catur Indah Lestari XI PS2 '),(32,32,'TJKT','Juara 2 dan 3 Lomba Dayung Tk. Provinsi Jawa Tengah 2024 a.n. Rahma Ayu XI TJKT 2'),(33,32,'PS','Juara 1 Prestasi Kyarugi Under 46 Putri Kejuaraan Taekwondo Kota Semarang 2024 a.n. Dwi Astuti XPS1'),(34,32,'DKV','Juara 1 Dalam Lomba \"Kyai Guru 2024 Championship\" a.n. AVERILL GAMA PUTRA X DKV 3'),(35,32,'PS','Juara HARAPAN 3 Kategori Berani Putri DUTA GENRE KOTA SEMARANG 2024 a.n Gheanira XI PS2'),(36,32,'DKV','Juara 1 menggambar ilustrasi 2024 SATYA AUREL NAFISAH XI DKV3'),(37,32,'LK','Juara 3 pencak silat 2024 AILA CANDA RIZKIKA PUTRI (XI LK1)'),(38,32,'PPLG','Juara 3 beefest cyber security 2024 BANON KENTA OKTORA (XI PPLG2)'),(39,32,'DKV','Juara 1 Kelompok Putra Kejuaraan Karate Daerah 2024 Karate Do Tingkat Jawa Tengah dan DIY Brian Abdiel Aryadipta Kristanto X DKV1'),(40,32,'PPLG','JUARA I KIDS HACKATHON 2024 KATEGORI SMA/SMK TINGKAT Nasional, DAFFA KUMARA SETA R ( XI PPLG2) penyelenggara PT. Telkom '),(41,32,'LK','Juara 1 kategori mix pair junior tangerang open 2024 tingkat nasional atas nama Naura Zalfa Halilah Rayya X LK 1'),(42,32,'DKV','Juara II lomba Pembuatan video yg diselenggarakan oleh Atk Jaya Store dalam rangka menyambut hari Pahlawan 2024 an. Nero Zhafran Evan Pradipta XII DKV3, Aldina Bilbina X DKV 3, Adinda Aisyah X DKV3'),(43,32,'DKV','Juara I Lomba Poster 2024 di selenggarakan oleh HIMA Manajemen UNSI Kramat 9B. \"It\'s time to Contribute Through Work\" an.Sastra Jendar XI DKV2'),(44,32,'PPLG','Perolehan Score TOEIC 12 Tertinggi Nasional 2024, Derafa Alif Saindeva XII PPLG3'),(45,32,'LK','Juara 1 lomba tari kreasi penerbat expo tingkat kota Semarang Pradava Nail Alfadry - X LK 1 '),(46,32,'PPLG','Juara 1 LKS Kota Semarang Web Technologies an. El Rakai Umar Wahid XI PPLG 3'),(47,32,'PPLG','Juara III LKN SCIENCE OLIMPIADE ( LSO) 2024 Bidang Studi Bahasa dan Sastra Indonesia SMA Tingkat Provinsi Jawa Tengah a.n. Amara Silvi A XI PPLG 3'),(48,32,'PPLG','Juara I LKN SCIENCE OLIMPIADE ( LSO) 2024 Bidang Studi Bahasa dan Sastra Indonesia SMA Tingkat Nasional a.n. Amara Silvia A XI PPLG 3'),(49,32,'DKV','Juara III LKS DESAIN GRAFIS TINGKAT KOTA SEMARANG, Gabriela Nirwasita S XI DKV2'),(50,32,'DKV','JUARA I NASIONAL, POSTER COMPETITION 2024, EVENT HIMBIDI & DIGITAL BUSINESS BINUS JAKARTA, Gabriela Nirwasita S XI DKV 2'),(51,32,'PPLG','JUARA HARAPAN 2 LOMBA FILM PENDEK  ANTI KORUPSI TINGKAT SMA, ULUNG BIRAWA ANYANGGA XI PPLG1 Diselenggarakan oleh Inspektorat Kota Semarang'),(52,32,'LK','Juara III Nasional Aerobic Gymnastic, an. Naura X LK1. Des 2024'),(53,32,'LK','JUARA 3 Lomba Desain Poster Kesehatan 2024 dengan tema: “Generasi Sehat: Mengintegrasikan Kesejahteraan Jasmani, Mental, dan Sosial Bagi Generasi Muda” a.n.Helda XI LK1 1 '),(54,32,'DKV','JUARA 1 Lomba Desain Poster Kesehatan 2024 dengan tema: “Generasi Sehat: Mengintegrasikan Kesejahteraan Jasmani, Mental, dan Sosial Bagi Generasi Muda” a.n. Ahyahita X DKV 3 Penyelenggara udinus, Des 2024'),(55,32,'PPLG','Juara 1 lomba coding Hackathon tingkat nasional Telkom Univ. Daffa kumara, Jabriel Hans, Erlangga Tresnamada XI PPLG 2'),(56,32,'LK','JUARA 1  Kelas Individual Woman dan kelas Mix Pairs Kejuaraan Senam kel umur Prov Jateng an Naura Zalfa Halillah Raya X LK 1'),(57,32,'PPLG','Juara III IT Competititon Udinus (Ahmad Raihan Khomeini Saputra, XI PPLG 1, Byantara Nadif Al Dzaky, XI PPLG 1, Gazella Dayana Safira, XI PPLG 1, Keynatasha Zahra Aurely, XI PPLG 1)'),(58,32,'PPLG','Juara I IT Competition Udinus (Daffa Kumara Seta Rahmasin XI PPLG 2, Erlangga Tresnamada Muliawan XI PPLG 2, Dirdadivina Marir Faranddena X PPLG 1)'),(60,32,'PPLG','Juara III DINACOM AIDEATHON 2025 (Dinda Alicya Ruiz, Anggreani Biyan Ndari, Vianka Shainna Santoso) kelas: XI PPLG 1'),(61,32,'PPLG','Juara II Dinacom Software Development (Jabriel Hans Talula, Affan Helmi Sungkar, Erlang Tresnamada Muliawan) Kelas: XI PPLG 2'),(63,32,'LK','Juara 1 Dinusfest 2025 D\'agastara kategori lomba tari (Pradava Nail X LK 1, Najwa Kirana X PS 1, Kinanti Faldia XI LK 1, Helda Hasiaristi XI LK 1, Septi Ayu R XI LK 1)'),(64,32,'LK','Juara 1 lks Web Health & Sosial Care :  Sophitia XI LK1'),(65,32,'LK','Juara 2 lomba pidato, NAILAH ZULFA ARWATI kelas xl lk 1, faculity of health competition UDINUS 2025'),(66,32,'DKV','Juara II Popda TK. kota Semarang Cabang Olah raga Panahan,Ziljian Ryu XI DKV 3'),(67,32,'TJKT','Juara 1 Popda Tk.Kota Semarang Cabang Olah Raga Dayung, Rahma Ayu Lestari XI TJKT 2'),(68,32,'DKV','Juara 2 Popda Tk Kota Semarang, cabang olah raga Pencak Silat Kategori seni putra tunggal, Avriel Gama Putra XI DKV 3'),(69,32,'PPLG','Juara 2 LKS TK PROV JATENG CLOUD COMPUTING 2025'),(70,32,'PPLG','JUARA 2 LKS TK PROV JATENG IT SOFTWARE 2025'),(71,32,'LK','JUARA 2 LKS TK PROV JATENG HEALTHBAND SOCIAL CARE 2025');
/*!40000 ALTER TABLE `kejuaraan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulusan`
--

DROP TABLE IF EXISTS `lulusan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lulusan` (
  `lulusanID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `jurusan` enum('PPLG','TJKT','PS','DKV','LK') DEFAULT NULL,
  `lulusan` text,
  PRIMARY KEY (`lulusanID`),
  KEY `userID` (`userID`),
  CONSTRAINT `lulusan_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulusan`
--

LOCK TABLES `lulusan` WRITE;
/*!40000 ALTER TABLE `lulusan` DISABLE KEYS */;
INSERT INTO `lulusan` VALUES (121,32,'PPLG','Front end Engineer'),(122,32,'PPLG','Back end Engineer'),(123,32,'PPLG','UI/UX (User Experience and Interface)'),(124,32,'PPLG','Cyber Security'),(125,32,'PPLG',' System Analyst'),(126,32,'PPLG','Freelancer bidang IT'),(127,32,'TJKT','Menjadi seorang IT (Informasi Teknologi)'),(128,32,'TJKT','System engineer (teknik sistem)'),(129,32,'TJKT','Network analyst'),(130,32,'TJKT','Network manager'),(131,32,'TJKT','IT Architect'),(132,32,'TJKT','Information technology manager'),(133,32,'TJKT','System administrator'),(134,32,'PS','Pramu Sosial di Panti Sosial (Lansia, Anak, Disabilitas dan NAPZA) dan LSM.'),(135,32,'PS','Edu care PAUD, TK dan Day Care'),(136,32,'PS','Penyuluh Sosial Kemasyarakatan'),(137,32,'PS','Asisten Advokasi Anak'),(138,32,'PS','Asisten Pekerja Sosial Medis di Rumah Sakit.'),(139,32,'PS','Asisten Pekerja Sosial Koreksional di Lembaga Hukum'),(140,32,'PS','Home Care'),(141,32,'DKV','Sebagai wirausaha maupun freelancer : (desainer grafis, ilustrator, fotografer, animator)'),(142,32,'DKV','Biro konsultan desain (graphic house)'),(143,32,'DKV','Biro iklan (advertising)'),(144,32,'DKV','Rumah produksi (production house)'),(145,32,'DKV','Stasiun TV'),(146,32,'DKV','Percetakan dan penerbitan'),(147,32,'DKV','Hubungan Masyarakat (public relation'),(148,32,'LK','Caregiver atau pendamping lansia professional di Panti Sosial, rumah sakit, masyarakat dan keluarga'),(149,32,'LK','Pendamping lansia homecare maupun daycare'),(150,32,'LK','Caregiver di luar negeri (Jepang, Australia, Belanda, dll.)'),(151,32,'LK','Caregiver di Rukun Senior Living Bogor ');
/*!40000 ALTER TABLE `lulusan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materi`
--

DROP TABLE IF EXISTS `materi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materi` (
  `materiID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `jurusan` enum('PPLG','TJKT','PS','DKV','LK') DEFAULT NULL,
  `materi` text,
  PRIMARY KEY (`materiID`),
  KEY `userID` (`userID`),
  CONSTRAINT `materi_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materi`
--

LOCK TABLES `materi` WRITE;
/*!40000 ALTER TABLE `materi` DISABLE KEYS */;
INSERT INTO `materi` VALUES (159,32,'PPLG','Informatika'),(160,32,'PPLG','Pemrograman Dasar'),(161,32,'PPLG','Gim (Mengenal pembuatan aplikasi dan game didalam dunia hiburan)'),(162,32,'PPLG','Konsentrasi Rekayasa Perangkat Lunak'),(163,32,'PPLG','Proyek Kreatif dan Kewirausahaan'),(164,32,'PPLG','Front end'),(165,32,'PPLG','back end'),(166,32,'PPLG','UI/UX'),(167,32,'TJKT','Informatika'),(168,32,'TJKT','dasar-dasar teknik jaringan komputer dan telekomunikasi'),(169,32,'TJKT','Konsentrasi teknik komputer dan jaringan '),(170,32,'TJKT','Projek kreatif dan kewirausahaan'),(171,32,'TJKT','Teknologi layangan jaringan'),(172,32,'TJKT','Memahami penerapan media dan jaringan telekomunikasi.'),(173,32,'TJKT','Memahami penggunaan Alat Ukur dalam teknik Jaringan Komputer dan Telekomunikasi.'),(174,32,'PS','Informatika'),(175,32,'PS','Dasar-dasar Kejuruan Pekerjaan Sosial'),(176,32,'PS','Keterampilan Pekerjaan Sosial'),(177,32,'PS','Kesehatan'),(178,32,'PS','Intervensi Pelayanan Pekerjaan Sosial pada Penyandang Masalah Sosial'),(179,32,'PS','Bahasa Jepang'),(180,32,'PS','Projek kreatif dan kewirausahaan'),(181,32,'DKV','Technopreuneur bidang usaha DKV'),(182,32,'DKV','Menciptakan peluang bisnis bidang DKV'),(183,32,'DKV','Sketsa dan illustrasi'),(184,32,'DKV','Fotografi'),(185,32,'DKV','Komputer grafis'),(186,32,'DKV','Desainer iklan'),(187,32,'LK','Dasar-dasar pendampingan senior'),(188,32,'LK','Informatika'),(189,32,'LK','Kesehatan'),(190,32,'LK','Psikologi, sosiologi & antropologi'),(191,32,'LK','Gerontologi dan gerontik'),(192,32,'LK','Kesehatan mental senior'),(193,32,'LK','Komunikasi dan relasi');
/*!40000 ALTER TABLE `materi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qna`
--

DROP TABLE IF EXISTS `qna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qna` (
  `idQnA` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `pertanyaan` varchar(255) DEFAULT NULL,
  `jawaban` text,
  PRIMARY KEY (`idQnA`),
  UNIQUE KEY `idQnA` (`idQnA`),
  KEY `userID` (`userID`),
  CONSTRAINT `qna_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qna`
--

LOCK TABLES `qna` WRITE;
/*!40000 ALTER TABLE `qna` DISABLE KEYS */;
INSERT INTO `qna` VALUES (19,32,'Apakah Disediakan Tempat Untuk Anak Anak Menghadiri Ibadah Jumat?','Ya, kami menyediakan ruang sholat jumat bagi yang beragama muslim. Dan bagi yang non-muslim, kami juga menyediakan tempat ibadah.'),(20,32,'Apakah benar SMKN 8 Semarang Menggunakan Sistem \'Moving Class\'?','Kami menerapkan sistem \'Moving Class\' yang artinya setiap hari siswa menempati kelas yang berbeda. Hal ini bertujuan agar siswa dapat mengenal sekolah lebih luas dan mencegah kebosanan siswa.');
/*!40000 ALTER TABLE `qna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (32,'fariskahlilhaidar@gmail.com','$2b$12$ILdrjhAQwI6Y4/GN3IPRROlSt5ufRsy0m8LgZe7Mg.8Uw/jSh9jpO','Developer');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'geneight'
--

--
-- Dumping routines for database 'geneight'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-08 12:20:53
