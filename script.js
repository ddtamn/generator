const guestName = document.getElementById("guest-name");

const invitationURI = document.getElementById("invitation-URI");

const redaksi = document.getElementById("invitation-editor");

const shareButton = document.querySelector(".share-btn");

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "%2B");
}

guestName.addEventListener("input", (e) => {
  invitationURI.value =
    "https://dinvite.online/fahyadika?to=" + convertToSlug(e.target.value);

  redaksi.innerHTML = `السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ

Dengan memohon rahmat Allah SWT, izinkan kami untuk mengundang Bapak/Ibu/Saudara/i dalam acara akad dan resepsi
pernikahan kami,

*Satria Dika Saputra, S.Si & Fahya Aulia Louto, S.Farm*

*Akad Nikah*
Akan dilaksanakan pada :
Hari, Tanggal : Minggu, 08 Januari 2023
Jam : 09:00 Wita
Lokasi : JL Asparagus No 4 Hanga-Hanga 1 (Belakang Toko EKP), Kediaman Mempelai Wanita

*Resepsi*
Akan dilaksanakan pada :
Hari, Tanggal : Senin, 09 Januari 2023
Jam : 19.30 Wita
Lokasi : JL MT Haryono, Kel Luwuk, Kab Banggai, Gedung Graha Dongkalan

Undangan dapat diakses melalui:
https://dinvite.online/fahyadika?to=${convertToSlug(e.target.value)}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa & restu,
serta kami ucapkan terima kasih.

وَ السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
      `;

  shareButton.href = `https://api.whatsapp.com/send/?text=%D8%A7%D9%84%D8%B3%D9%8E%D9%91%D9%84%D8%A7%D9%8E%D9%85%D9%8F+%D8%B9%D9%8E%D9%84%D9%8E%D9%8A%D9%92%D9%83%D9%8F%D9%85%D9%92+%D9%88%D9%8E%D8%B1%D9%8E%D8%AD%D9%92%D9%85%D9%8E%D8%A9%D9%8F+%D8%A7%D9%84%D9%84%D9%87%D9%90+%D9%88%D9%8E%D8%A8%D9%8E%D8%B1%D9%8E%D9%83%D9%8E%D8%A7%D8%AA%D9%8F%D9%87%D9%8F%0A%0ADengan+memohon+rahmat+Allah+SWT%2C+izinkan+kami+untuk+mengundang+Bapak%2FIbu%2FSaudara%2Fi+dalam+acara+akad+dan+resepsi+pernikahan+kami%2C+%0A%0A%2ASatria+Dika+Saputra%2C+S.Si+%26+Fahya+Aulia+Louto%2C+S.Farm%2A%0A%0A%2AAkad+Nikah%2A%0AAkan+dilaksanakan+pada+%3A%0AHari%2C+Tanggal+%3A+Minggu%2C+08+Januari+2023%0AJam+%3A+09%3A00+Wita%0ALokasi+%3A+JL+Asparagus+No+4+Hanga-Hanga+1+%28Belakang+Toko+EKP%29%2C+Kediaman+Mempelai+Wanita%0A%0A%2AResepsi%2A%0AAkan+dilaksanakan+pada+%3A%0AHari%2C+Tanggal+%3A+Senin%2C+09+Januari+2023%0AJam+%3A+19.30+Wita%0ALokasi+%3A+JL+MT+Haryono%2C+Kel+Luwuk%2C+Kab+Banggai%2C+Gedung+Graha+Dongkalan%0A%0AUndangan+dapat+diakses+melalui%3A%0Ahttps://dinvite.online/fahyadika?to=${convertToSlug(
    e.target.value
  )}%0A%0AMerupakan+suatu+kehormatan+dan+kebahagiaan+bagi+kami+apabila+Bapak%2FIbu%2FSaudara%2Fi+berkenan+hadir+memberikan+doa+%26+restu%2C+serta+kami+ucapkan+terima+kasih.%0A%0A%D9%88%D9%8E+%D8%A7%D9%84%D8%B3%D9%91%D9%8E%D9%84%D8%A7%D9%8E%D9%85%D9%8F+%D8%B9%D9%8E%D9%84%D9%8E%D9%8A%D9%92%D9%83%D9%8F%D9%85%D9%92+%D9%88%D9%8E%D8%B1%D9%8E%D8%AD%D9%92%D9%85%D9%8E%D8%A9%D9%8F+%D8%A7%D9%84%D9%84%D9%87%D9%90+%D9%88%D9%8E%D8%A8%D9%8E%D8%B1%D9%8E%D9%83%D9%8E%D8%A7%D8%AA%D9%8F%D9%87%D9%8F&type=custom_url&app_absent=0`;
});
