import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="bg-black">
        <div className="w-full top-0 fixed py-8 mx-auto flex justify-center">
          <div className="py-6 px-12 rounded-full bg-green-600 flex justify-start space-x-12">
            <Link href={"/"} className="text-white hover:text-green-800">
              Beranda
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Program
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Blog
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Tentang Kami
            </Link>
            <Link href={"/"} className="text-white hover:text-green-800">
              Kontak
            </Link>
          </div>
        </div>
        <div className="space-y-8 grid grid-cols-1 place-items-center text-center pt-48">
          <div>
            <h1 className="text-white text-6xl font-bold">
              Journey to Discover Your Path
            </h1>
          </div>
          <div className="w-2xl">
            <p className="text-white text-lg font-light">
              Belajar tak lagi terbatas di ruang kelas. Kini, dunia adalah
              sekolah Anda. Bersama CozyJourney, mari jelajahi dunia dan temukan
              arah Anda
            </p>
          </div>
        </div>
        <div className="py-28 flex justify-center">
          <div className="bg-white py-8 px-8 w-8/12 rounded-3xl">
            <div className="space-y-1">
              <h3 className="text-xl">Cari Program</h3>
              <p className="text-sm font-light text-gray-500">
                Temukan program yang sesuai dengan kebutuhan pendidikan Anda
              </p>
            </div>
            <form className="grid grid-cols-4 gap-4 py-10">
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Tujuan</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <select className="w-full border-0">
                    <option>Pilih Tujuan</option>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Durasi Program</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <select className="w-full border-0">
                    <option>Pilih Durasi</option>
                    <option>2 Minggu</option>
                    <option>1 Bulan</option>
                  </select>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Tanggal Mulai</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <input type="date" className="w-full border-0"></input>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-lg text-gray-500">Peserta</h3>
                <div className="px-4 py-2 border border-gray-200 rounded-sm">
                  <select className="w-full border-0 ">
                    <option>Jumlah Peserta</option>
                    <option>5-10 Orang</option>
                    <option>20 Orang</option>
                    <option>30 Orang</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="w-full flex justify-center gap-4">
              <button
                className="bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded"
                type="button"
              >
                Cari Program
              </button>
              <button
                className="focus:shadow-outline focus:outline-none text-black font-bold py-4 px-8 rounded"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-20 space-y-8 mt-32">
        <h2 className="font-bold text-5xl">
          Membangun Jembatan
          <span className="font-bold text-5xl text-green-700">
            Pendidikan Global
          </span>
        </h2>
        <p className="font-light text-sm text-gray-400 mx-80">
          Kami adalah lembaga pendidikan terpercaya yang telah memfasilitasi
          ribuan siswa untuk menempuh pendidikan di negara Internasional Arab
          Saudi, Jepang, Korea Selatan Dan Australi .
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-18 py-10 mb-20">
        <div className="w-full py-48 bg-[url(/background-about.jpg)] bg-cover rounded-xl"></div>
        <div className="w-full py-10 space-y-10 px-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pengalaman 5+ Tahun
              </h3>
              <p className="text-muted-foreground">
                Lebih dari 15 tahun pengalaman dalam memfasilitasi program
                pertukaran pelajar ke negara-negara Muslim dengan tingkat
                kepuasan 98%.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Program Komprehensif
              </h3>
              <p className="text-muted-foreground">
                Mulai dari persiapan bahasa, bimbingan akademik, hingga
                akomodasi selama di negara tujuan.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pendamping Profesional dan Berpengalaman
              </h3>
              <p className="text-muted-foreground">
                Selama program anda akan di dampingi team kami yang
                berpengalaman dan profesional
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dukungan Berkelanjutan
              </h3>
              <p className="text-muted-foreground">
                Jaringan alumni yang kuat dan dukungan karir setelah
                menyelesaikan program untuk memastikan kesuksesan jangka
                panjang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-6 px-8 py-10">
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
      </div>
      <div className="text-center py-28 space-y-8 mt-48">
        <h2 className="font-bold text-5xl">
          Pilih Program Pertukaran
          <br />
          <span className="font-bold text-5xl text-green-700">
            Terbaik Untuk Anda
          </span>
        </h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Pilih program yang sesuai dengan tujuan pendidikan dan spiritual Anda.
          Setiap program dirancang untuk memberikan pengalaman transformatif.
        </p>
      </div>
      <div className="flex justify-start gap-6 px-8 py-6">
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div>
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-xs">2 Minggu</p>
            </div>
            <div>
              <p className="text-xs">15-20 Peserta</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="px-6 py-4">
            <h3>Highlight Program:</h3>
            <div className="flex flex-wrap gap-2 py-5">
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Kelas Bahasa Arab
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Studi Quran
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Ziarah
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Sertifikat
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={""}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div>
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-xs">2 Minggu</p>
            </div>
            <div>
              <p className="text-xs">15-20 Peserta</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="px-6 py-4">
            <h3>Highlight Program:</h3>
            <div className="flex flex-wrap gap-2 py-5">
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Kelas Bahasa Arab
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Studi Quran
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Ziarah
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Sertifikat
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={""}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div>
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-xs">2 Minggu</p>
            </div>
            <div>
              <p className="text-xs">15-20 Peserta</p>
            </div>
          </div>
          <div className="px-6 py-6">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="px-6 py-4">
            <h3>Highlight Program:</h3>
            <div className="flex flex-wrap gap-2 py-5">
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Kelas Bahasa Arab
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Studi Quran
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Ziarah
              </span>
              <span className="text-xs rounded-full border border-gray-400 px-2 py-1">
                Sertifikat
              </span>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={""}
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <Link
          className="border border-green-600 focus:shadow-outline focus:outline-none text-green-600 font-bold py-4 px-8 rounded hover:bg-green-600 hover:text-white"
          type="button"
          href={""}
        >
          Lihat Semua Program
        </Link>
      </div>
      <div className="text-center py-20 space-y-8 mt-30">
        <h2 className="font-bold text-5xl">
          Kisah Inspiratif
          <br />
          <span className="font-bold text-5xl text-green-700">Para Alumni</span>
        </h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Dengarkan pengalaman nyata dari para mahasiswa yang telah merasakan
          transformasi spiritual dan akademik melalui program pertukaran kami
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 px-8 py-10">
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
        <div className="bg-black py-55 px-55"></div>
      </div>
      <div className="text-center py-12 space-y-4 mt-48">
        <h2 className="font-bold text-5xl">Info Dan Berita</h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Temukan tips, pengalaman, dan panduan terkini seputar pendidikan dan
          program exchange internasional
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 px-8 py-10">
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="flex gap-6 px-6 mt-6">
            <div>
              <p className="text-xs">15 Maret 2025</p>
            </div>
            <div>
              <p className="text-xs">1 Jam</p>
            </div>
          </div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>

          <div className="px-6 py-2">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="flex justify-between  px-4 py-2">
            <Link className=" py-3 px-2 rounded-md text-black" href={""}>
              Dr. Ahmad Thohir
            </Link>
            <Link className="px-10 py-3 text-black font-bold" href={""}>
              Baca Selengkapnya
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="flex gap-6 px-6 mt-6">
            <div>
              <p className="text-xs">15 Maret 2025</p>
            </div>
            <div>
              <p className="text-xs">1 Jam</p>
            </div>
          </div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>

          <div className="px-6 py-2">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="flex justify-between  px-4 py-2">
            <Link className=" py-3 px-2 rounded-md text-black" href={""}>
              Dr. Ahmad Thohir
            </Link>
            <Link className="px-10 py-3 text-black font-bold" href={""}>
              Baca Selengkapnya
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-green-600 rounded-t-xl"></div>
          <div className="flex gap-6 px-6 mt-6">
            <div>
              <p className="text-xs">15 Maret 2025</p>
            </div>
            <div>
              <p className="text-xs">1 Jam</p>
            </div>
          </div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>

          <div className="px-6 py-2">
            <p className="text-base font-light text-gray-500">
              Program intensif 2 minggu di Makkah dengan fokus pada studi Islam,
              bahasa Arab, dan pengalaman spiritual di Masjidil Haram.
            </p>
          </div>
          <div className="flex justify-between  px-4 py-2">
            <Link className=" py-3 px-2 rounded-md text-black" href={""}>
              Dr. Ahmad Thohir
            </Link>
            <Link className="px-10 py-3 text-black font-bold" href={""}>
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-28 space-y-8 mt-26">
        <h2 className="font-bold text-5xl">
          Ingin Menjadi Bagian dari Kisah Sukses Selanjutnya?
        </h2>
        <p className="font-light text-sm text-gray-400 mx-96">
          Bergabunglah dengan ribuan mahasiswa lainnya yang telah merasakan
          transformasi hidup melalui program pertukaran pelajar kami
        </p>
        <div className="w-full flex justify-center gap-4">
          <button
            className="bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-8 rounded"
            type="button"
          >
            Konsultasi Gratis
          </button>
        </div>
      </div>

      <div className="bg-green-700 w-full grid grid-cols-4 gap-10 py-6 px-12">
        <div className="px-4 py-8 space-y-4">
          <h3 className="font-bold text-2xl">Education Exchange</h3>
          <p className="text-gray-300 text-sm font-light">
            Belajar tak lagi terbatas di ruang kelas. Kini, dunia adalah sekolah
            Anda. Bersama CozyJourney, mari jelajahi dunia dan temukan arah Anda
          </p>
          <div className="flex justify-start gap-4 mt-18">
            <p>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <p>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </p>
            <p>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className="px-10 py-8 space-y-4">
          <h3 className="text-white text-xl font-bold">Program</h3>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Program Makkah
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Program Madinah
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Program Malaysia
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Program Australia
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Program Jepang
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Program Korea
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-8 space-y-4">
          <h3 className="text-white text-xl font-bold">Layanan</h3>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Belajar Online
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Community Learning
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Konsultasi Gratis
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-8 space-y-4">
          <h3 className="text-white text-xl font-bold">Kontak</h3>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  Jl. Pendidikan No. 123 Jakarta Selatan 12345
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  +62 21 1234 5678
                </Link>
              </li>
              <li>
                <Link href={""} className="text-gray-300 text-sm font-light">
                  info@islamiceducation.id
                </Link>
              </li>
            </ul>
            <h3 className="text-white text-xl font-bold">News Letter</h3>
            <div>
              <div className="mb-5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="base-input"
                    placeholder="Email Anda"
                    className="bg-white/10 border-white/20 border-0 text-white placeholder:text-white/60 rounded-md"
                  ></input>
                  <button
                    type="submit"
                    className="flex-shrink-0 bg-green-800 px-3 py-2 rounded-lg hover:bg-green-900 hover:cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 text-gray-800 dark:text-white rotate-45"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-700 w-full py-8 px-12 space-y-8">
        <div className="w-full bg-white h-[0.04]"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © 2025 Islamic Education Exchange. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white">
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
