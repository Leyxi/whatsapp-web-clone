const sentences = [
	"Wow, itu terdengar seru! Ceritakan lebih banyak dong!",
	"Joyce menikmati makan pancake dengan saus sambal.",
	"Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Saat itu, dia tidak mendengarkan musik, dia sedang menjalani pengalaman lucu bersama teman-teman sekelasnya.",
	"Jam di dalam blog ini dan jam di laptop saya beda satu jam dari satu sama lain.",
	" Mereka berlari di sekitar sudut untuk menemukan bahwa mereka tiba-tiba berpindah ke masa lalu bersama-sama.",
	"Tolong pakai bando telinga ini, ya. Kita kan nggak bisa dengar kalau kamu ngomong.",
	"Yang dia pengen cuma jawabannya, tapi dia nggak nyangka bakal se-sekali itu. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Dia senang latihan balet di kamar mandi. Iya, di kamar mandi!",
	"Kita bisa ke taman nggak, ya?",
	"Dimana sih kucing oranye itu? Kata anjing hitam gede.",
	"Kita bisa bikin burung terbang pergi kalau kita loncat ke sesuatu.",
	"Kita bisa mampir ke toko sama anjing. Gak jauh kok.",
	"Kucing kuning besar saya makan burung hitam kecil.",
	"Saya suka baca buku saya di sekolah bareng temen sekelas.",
	"Besok kita renang di taman. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Kelas kita mejadi lebih seru setelah pelawak utama keluar.",
	"Saya denger Nancy cakep banget, nih!",
	"Kadang-kadang kita harus nyerah dan menang dengan curang, kayak mainnya kita di kelas tadi.",
	"Biru terdengar terlalu dingin waktu itu, tapi ternyata enak buat dicampur sama gin.",
	"Smoothie teh hijau dan alpukat yang kita buat ternyata lumayan enak.",
	"Tiba-tiba, semuanya berubah!",
	"Sekarang ada 4 jendela terbuka di komputer, gak tau kenapa juga sih.",
	"Gary gak ngerti kenapa Doug naik ke atas buat dapetin uang kertas satu dolar pas diajak mainin sapi.",
	"Saluran South Pine yang isinya hiu itu ternyata jadi satu-satunya jalan masuk atau keluar.",
	"Waktu dia nanya nomor favoritnya, dia jawab dengan mantap kalau itu angka berlian.",
	"Dia yakin banget kalau nyuci lemari baju itu kunci buat bisa nyetir dengan baik.",
	"Dia tambahin poin keterampilan di Karisma dan Kekuatan. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Mary ngeyakin kalo kalkulatornya punya riwayat, pasti bakal lebih memalukan dari riwayat browsing komputernya.",
	"Kucing emang hewan peliharaan yang asik, bersih, dan nggak bikin ribut.",
	"Main tenis pake bola boling itu jauh lebih susah daripada main boling pake bola tenis.",
	"Ada lebih dari 500 ekor bintang laut di laci kamar mandi kita.",
	"Lebah pembunuh kecewa banget sama prasangka orang tentang dia.",
	"Gak sering juga nemuin pisang yang basah di jalanan.",
	"Yen Jepang buat dagang masih terkenal banget.",
	"Shakespeare ternyata seorang mekanik diesel terkenal abad ke-17. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Dia memutuskan buat ngelive hidupnya sesuai manifesto ketukan besar.",
	"Lebah pada akhirnya memberontak sama ratu mereka.",
	"Kepercayaan dirinya keren sih, sayangnya dibayangin sama kebodohannya. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Dia berusaha supaya halamannya jadi yang terbaik di lingkungan.",
	"Carol minum darah kayak vampir, seriusan.",
	"Dan makannya awan kayak permen kapas.",
	"Dia coba diet whisky, dan tiba-tiba kehilangan tiga hari.",
	"Peta harta karun yang menarik itu sayangnya gak bisa saya baca. Tidak mungkin meyakinkan seekor monyet untuk memberi Anda pisang dengan menjanjikan pisang tak terbatas ketika mereka mati.",
	"Henry gak bisa memutuskan apakah dia mekanik otomotif atau imam.",
	"Boyak-boyak putih kecil menandai lokasi ratusan pot kepiting.",
	"Jangan injak kaca yang pecah, nanti kaki kamu luka.",
	"Teriakan dia berhasil bikin para remaja nakal jadi diam seketika."
];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
