import Link from "next/link";
import React from "react";

function DetailProgram() {
  return (
    <div>
      <div className="pt-36 bg-[url(/hero-makkah.png)] bg-cover">
        <div className="w-full px-20 py-12 space-y-8">
          <div>
            <Link href={"/program"}>Kembali</Link>
          </div>
          <div className="flex gap-6 ">
            <div>
              <p className="text-lg text-white">5.0</p>
            </div>
            <div>
              <p className="text-lg text-white">Rp 25.000.000</p>
            </div>
          </div>
          <div className="w-full text-left">
            <h1 className="text-white text-5xl font-bold">
              Program Intensif Makkah
            </h1>
          </div>
          <div className="flex gap-6">
            <div>
              <p className="text-lg text-white">Mekkah, Saudi Arabia</p>
            </div>
            <div>
              <p className="text-lg text-white">2 Minggu</p>
            </div>
            <div>
              <p className="text-lg text-white">15-20 Peserta</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-20 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-8">
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Visi Kami</h3>
            <p className="font-light text-sm text-gray-500">
              Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
              yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
              pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak
              dan berwawasan global.
            </p>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Visi Kami</h3>
            <p className="font-light text-sm text-gray-500">
              Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
              yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
              pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak
              dan berwawasan global.
            </p>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Visi Kami</h3>
            <p className="font-light text-sm text-gray-500">
              Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
              yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
              pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak
              dan berwawasan global.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Visi Kami</h3>
            <p className="font-light text-sm text-gray-500">
              Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
              yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
              pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak
              dan berwawasan global.
            </p>
          </div>
          <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
            <h3 className="font-bold text-2xl">Visi Kami</h3>
            <p className="font-light text-sm text-gray-500">
              Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
              yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
              pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak
              dan berwawasan global.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProgram;
