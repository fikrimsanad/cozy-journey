import {
  BadgeInfo,
  Calendar,
  GraduationCap,
  MapPin,
  Shield,
  UsersRound,
  History,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function DetailProgram() {
  return (
    <div>
      <div className="pt-36 bg-[url(/hero-makkah.png)] bg-cover">
        <div className="w-full px-20 py-12 space-y-8">
          <div>
            <Link href={"/program"} className="text-white">
              Kembali
            </Link>
          </div>
          <div className="flex gap-6 ">
            <div>
              <p className="text-lg text-white">5.0</p>
            </div>
            <div>
              <span className="text-lg text-black font-bold px-6 py-2 rounded-full bg-yellow-500">
                Rp 35.000.000
              </span>
            </div>
          </div>
          <div className="w-full text-left">
            <h1 className="text-white text-5xl font-bold">
              Program Intensif Makkah
            </h1>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-1">
              <MapPin size={23} color="white" />
              <p className="text-lg text-white">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={22} color="white" />
              <p className="text-lg text-white">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={22} color="white" />
              <p className="text-lg text-white">15-20 Peserta</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-20 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-8 mb-10">
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <div className="flex gap-2">
              <BadgeInfo size={30} />
              <h3 className="font-bold text-2xl">Tentang Program</h3>
            </div>
            <p className="font-light text-sm text-gray-500">
              Program intensif 2 minggu yang dirancang khusus untuk memberikan
              pengalaman mendalam dalam studi Islam dan bahasa Arab di kota suci
              Makkah. Peserta akan mengikuti kelas intensif bahasa Arab, studi
              Al-Qur'an, dan berbagai kegiatan spiritual di sekitar Masjidil
              Haram.
            </p>
            <div className=" py-4">
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
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <div className="flex gap-2">
              <GraduationCap size={30} />
              <h3 className="font-bold text-2xl">Kurikulum Program</h3>
            </div>

            <p className="font-light text-sm text-gray-500">
              Bahasa Arab Dasar hingga Menengah
            </p>
            <p className="font-light text-sm text-gray-500">
              Studi Al-Qur'an dan Tafsir
            </p>
            <p className="font-light text-sm text-gray-500">
              Sejarah Islam dan Peradaban
            </p>
            <p className="font-light text-sm text-gray-500">
              Praktik Ibadah dan Spiritual
            </p>
            <p className="font-light text-sm text-gray-500">
              Budaya dan Tradisi Arab
            </p>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <div className="flex gap-2">
              <Shield size={30} />
              <h3 className="font-bold text-2xl">Fasilitas Program </h3>
            </div>

            <p className="font-light text-sm text-gray-500">
              Akomodasi dekat Masjidil Haram
            </p>
            <p className="font-light text-sm text-gray-500">
              Transport antar-jemput
            </p>
            <p className="font-light text-sm text-gray-500">Makan 3x sehari</p>
            <p className="font-light text-sm text-gray-500">
              Guide berbahasa Indonesia
            </p>
            <p className="font-light text-sm text-gray-500">Sertifikat resmi</p>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <div className="flex gap-2">
              <History size={30} />
              <h3 className="font-bold text-2xl">Timeline Program</h3>
            </div>
            <p className="font-light text-sm text-gray-500">
              Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
              yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
              pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak
              dan berwawasan global.
            </p>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Testimoni</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl h-72 w-full px-8 py-10">
                <p className="italic font-light text-black">
                  "Program ini benar-benar mengubah hidup saya. Pengalaman
                  belajar di Makkah memberikan perspektif baru tentang Islam dan
                  bahasa Arab."
                </p>
                <div className="flex py-8">
                  <div className="h-15 w-15 rounded-full bg-black"></div>
                  <div className="px-4 py-2 space-y-1">
                    <span className="bg-green-800 text-white text-xs rounded-full px-3 py-1">
                      Program Australi
                    </span>
                    <h4 className="text-sm font-bold mt-2">Fikri Muhammad</h4>
                    <p className="text-xs font-light">
                      Pelajar SMK Negri 09 Jakarta
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl h-72 w-full px-8 py-10">
                <p className="italic font-light text-black">
                  "Program ini benar-benar mengubah hidup saya. Pengalaman
                  belajar di Makkah memberikan perspektif baru tentang Islam dan
                  bahasa Arab."
                </p>
                <div className="flex py-8">
                  <div className="h-15 w-15 rounded-full bg-black"></div>
                  <div className="px-4 py-2 space-y-1">
                    <span className="bg-green-800 text-white text-xs rounded-full px-3 py-1">
                      Program Australi
                    </span>
                    <h4 className="text-sm font-bold mt-2">Fikri Muhammad</h4>
                    <p className="text-xs font-light">
                      Pelajar SMK Negri 09 Jakarta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Daftar Program</h3>
            <div className="flex space-x-2">
              <h4 className="font-bold text-green-700 text-3xl">
                Rp 35.000.000
              </h4>
              <p className="font-light text-gray-400 mt-2">/ Peserta</p>
            </div>

            <div className="border-y-2 border-y-gray-100 py-4 space-y-4">
              <div className="flex justify-between">
                <p>Durasi :</p>
                <p>2 Minggu</p>
              </div>
              <div className="flex justify-between">
                <p>Peserta :</p>
                <p>10-15 Peserta</p>
              </div>
              <div className="flex justify-between">
                <p>Rating :</p>
                <p>5.0</p>
              </div>
            </div>
            <div className="grid grid-cols-1 space-y-4">
              <div>
                <button className="bg-green-600 py-3 px-24 rounded-md text-white w-full">
                  Daftar Sekarang
                </button>
              </div>
              <div>
                <button className="border border-gray-400 py-3 px-24 rounded-md text-gray-600 w-full">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Butuh Bantuan?</h3>
            <p className="font-light text-sm text-gray-500">
              Tim kami siap membantu Anda dengan informasi lebih lanjut tentang
              program ini.
            </p>
            <div>
              <button className="border border-gray-400 py-3 px-24 rounded-md text-gray-600 w-full">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProgram;
