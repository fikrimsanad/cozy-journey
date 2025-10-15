import { Calendar, MapPin, UsersRound } from "lucide-react";
import Link from "next/link";
import React from "react";

function program() {
  return (
    <div>
      <div className="pt-48 bg-[url(/hero-makkah.png)] bg-cover">
        <div className="w-full py-12 space-y-8">
          <div className="w-full text-center">
            <h1 className="text-white text-5xl font-bold">
              Dapatkan Diskon<br></br>
              <span className="text-yellow-500">
                Hingga 20% Untuk Program Pilihan
              </span>
            </h1>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-light md:mx-72">
              Wujudkan impian belajar di Tanah Suci dengan penawaran terbaik
              kami. Kesempatan terbatas untuk pendaftaran bulan ini! Daftar
              Sekarang
            </p>
          </div>
          <div className="flex justify-center gap-4 my-10">
            <button
              className="bg-yellow-500 focus:shadow-outline focus:outline-none text-black font-normal py-2 px-4 rounded"
              type="button"
            >
              Daftar Sekarang
            </button>
            <button
              className="border border-white text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Lihat Syarat & Ketentuan
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-8 py-12 border border-b-gray-300 flex gap-4">
        <div className="w-full space-y-2">
          <h3 className="text-sm text-gray-500">Tujuan</h3>
          <div className="px-4 py-2 border border-gray-200 rounded-sm">
            <select className="w-full border-0 text-sm">
              <option>Pilih Tujuan</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>
        </div>
        <div className="w-full space-y-2">
          <h3 className="text-sm text-gray-500">Durasi Program</h3>
          <div className="px-4 py-2 border border-gray-200 rounded-sm">
            <select className="w-full border-0 text-sm">
              <option>Pilih Durasi</option>
              <option>2 Minggu</option>
              <option>1 Bulan</option>
            </select>
          </div>
        </div>
        <div className="w-full space-y-2">
          <h3 className="text-sm text-gray-500">Harga</h3>
          <div className="px-4 py-2 border border-gray-200 rounded-sm">
            <select className="w-full border-0 text-sm">
              <option>Semua Harga</option>
              <option> Dibawah Rp 40 Juta</option>
              <option> Rp 40 Juta</option>
              <option> Di Atas Rp 40 Juta</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 mt-16">
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-[url(/hero-makkah.png)] bg-cover rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div className="flex gap-1">
              <MapPin size={17} />
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={17} />
              <p className="text-xs">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={17} />
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
          <div className="px-5">
            <div className="md:flex justify-between gap-3 px-4 py-4 bg-gray-50 mb-6 rounded-lg">
              <div className="py-1">
                <p className="font-light text-sm text-gray-500">
                  Harga Program :
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-xl">
                  Rp 35.000.000
                </h4>
              </div>
            </div>
          </div>

          <div className="md:flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={"/program/detail-program"}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-[url(/hero-makkah.png)] bg-cover rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div className="flex gap-1">
              <MapPin size={17} />
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={17} />
              <p className="text-xs">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={17} />
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
          <div className="px-5">
            <div className="md:flex justify-between gap-3 px-4 py-4 bg-gray-50 mb-6 rounded-lg">
              <div className="py-1">
                <p className="font-light text-sm text-gray-500">
                  Harga Program :
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-xl">
                  Rp 35.000.000
                </h4>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={"/program/detail-program"}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-[url(/hero-makkah.png)] bg-cover  rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div className="flex gap-1">
              <MapPin size={17} />
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={17} />
              <p className="text-xs">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={17} />
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
          <div className="px-5">
            <div className="md:flex justify-between gap-3 px-4 py-4 bg-gray-50 mb-6 rounded-lg">
              <div className="py-1">
                <p className="font-light text-sm text-gray-500">
                  Harga Program :
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-xl">
                  Rp 35.000.000
                </h4>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={"/program/detail-program"}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-[url(/hero-makkah.png)] bg-cover rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div className="flex gap-1">
              <MapPin size={17} />
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={17} />
              <p className="text-xs">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={17} />
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
          <div className="px-5">
            <div className="md:flex justify-between gap-3 px-4 py-4 bg-gray-50 mb-6 rounded-lg">
              <div className="py-1">
                <p className="font-light text-sm text-gray-500">
                  Harga Program :
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-xl">
                  Rp 35.000.000
                </h4>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={"/program/detail-program"}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-[url(/hero-makkah.png)] bg-cover rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div className="flex gap-1">
              <MapPin size={17} />
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={17} />
              <p className="text-xs">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={17} />
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
          <div className="px-5">
            <div className="md:flex justify-between gap-3 px-4 py-4 bg-gray-50 mb-6 rounded-lg">
              <div className="py-1">
                <p className="font-light text-sm text-gray-500">
                  Harga Program :
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-xl">
                  Rp 35.000.000
                </h4>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={"/program/detail-program"}
            >
              Detail
            </Link>
          </div>
        </div>
        <div className="w-full rounded-xl border border-gray-200">
          <div className="w-full h-48 bg-[url(/hero-makkah.png)] bg-cover  rounded-t-xl"></div>
          <div className="py-4 px-6">
            <h3 className="font-bold text-xl">Program Intensif Mekkah</h3>
          </div>
          <div className="flex gap-6 px-6">
            <div className="flex gap-1">
              <MapPin size={17} />
              <p className="text-xs">Mekkah, Saudi Arabia</p>
            </div>
            <div className="flex gap-1">
              <Calendar size={17} />
              <p className="text-xs">2 Minggu</p>
            </div>
            <div className="flex gap-1">
              <UsersRound size={17} />
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
          <div className="px-5">
            <div className="md:flex justify-between gap-3 px-4 py-4 bg-gray-50 mb-6 rounded-lg">
              <div className="py-1">
                <p className="font-light text-sm text-gray-500">
                  Harga Program :
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-700 text-xl">
                  Rp 35.000.000
                </h4>
              </div>
            </div>
          </div>
          <div className="md:flex gap-3 px-4 py-2">
            <Link
              className="bg-green-600 py-3 px-22 rounded-md text-white"
              href={""}
            >
              Daftar Sekarang
            </Link>
            <Link
              className="px-6 py-3 rounded-md border border-gray-300"
              href={"/program/detail-program"}
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default program;
