import {
  GraduationCap,
  MapPinHouse,
  ScanEye,
  School,
  ShieldCheck,
  Target,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function detail() {
  return (
    <div>
      <div className="pt-48 bg-[url(/hero-makkah.png)] bg-cover">
        <div className="w-full py-12 space-y-8">
          <div className="w-full text-center">
            <h1 className="text-white text-5xl font-bold">
              Membangun Jembatan <br></br>
              <span className="text-yellow-500">Pendidikan Global</span>
            </h1>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-light md:mx-72">
              Wujudkan impian belajar di Tanah Suci dengan penawaran terbaik
              kami. Kesempatan terbatas untuk pendaftaran bulan ini! Daftar
              Sekarang
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 py-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <div className="w-fit px-4 py-4 bg-gray-50 rounded-lg">
            <ScanEye color="green" size={40} />
          </div>
          <h3 className="font-bold text-2xl">Visi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
            yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
            pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak dan
            berwawasan global.
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <div className="w-fit px-4 py-4 bg-gray-50 rounded-lg">
            <Target color="green" size={40} />
          </div>
          <h3 className="font-bold text-2xl">Misi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menyediakan program pertukaran berkualitas tinggi ke berbagai negara
          </p>
          <p className="font-light text-sm text-gray-500">
            Membangun kemitraan strategis dengan universitas terkemuka
          </p>
          <p className="font-light text-sm text-gray-500">
            Memberikan bimbingan komprehensif untuk kesuksesan akademik dan
            spiritual
          </p>
          <p className="font-light text-sm text-gray-500">
            Menciptakan jaringan alumni yang kuat dan bermanfaat
          </p>
        </div>
      </div>

      <div className="px-20 py-20 text-center space-y-4 ">
        <h3 className="font-bold text-4xl">Siapa Kami?</h3>
        <p className="font-light text-sm text-gray-500 md:mx-48">
          Islamic Education Exchange adalah lembaga pendidikan yang
          didedikasikan untuk memfasilitasi program pertukaran pelajar ke
          pusat-pusat keilmuan Islam terkemuka di Timur Tengah. Kami percaya
          bahwa belajar langsung di Tanah Suci dan negara-negara Muslim lainnya
          memberikan pengalaman transformatif yang tidak dapat digantikan.{" "}
        </p>
      </div>

      <div className="px-48 py-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="py-10 w-full  grid grid-cols-1 justify-items-center space-y-8">
          <div>
            <GraduationCap size={45} color="green" />
          </div>
          <div className="text-center">
            <h4>+100</h4>
            <p>Alumni Sukses</p>
          </div>
        </div>
        <div className="py-10 w-full  grid grid-cols-1 justify-items-center space-y-8">
          <div>
            <School size={45} color="green" />
          </div>
          <div className="text-center">
            <h4>+10</h4>
            <p>Partner Universitas</p>
          </div>
        </div>
        <div className="py-10 w-full  grid grid-cols-1 justify-items-center space-y-8">
          <div className="text-center">
            <ShieldCheck size={45} color="green" />
          </div>
          <div className="text-center">
            <h4>+5</h4>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
      </div>
      <div className="px-20 py-10 space-y-4 ">
        <p className="font-light text-sm text-gray-500 md:mx-48">
          Dengan tim profesional yang berpengalaman, jaringan luas, dan komitmen
          terhadap keunggulan, kami telah membantu ribuan pelajar Indonesia
          mewujudkan impian mereka untuk belajar di universitas-universitas
          bergengsi seperti Universitas Islam Madinah, King Saud University, dan
          institusi terkemuka lainnya.
        </p>
      </div>
      <div className="px-20 py-10 space-y-4 text-center ">
        <h3 className="font-bold text-4xl">Pendiri & Pemimpin</h3>
        <p className="font-light text-sm text-gray-500 md:mx-48">
          Dipimpin oleh para ahli dengan dedikasi tinggi terhadap pendidikan
          Islam
        </p>
      </div>
      <div className="px-28 py-20 grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <div className="px-20 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Visi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
            yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
            pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak dan
            berwawasan global.
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Misi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menyediakan program pertukaran berkualitas tinggi ke berbagai negara
          </p>
          <p className="font-light text-sm text-gray-500">
            Membangun kemitraan strategis dengan universitas terkemuka
          </p>
          <p className="font-light text-sm text-gray-500">
            Memberikan bimbingan komprehensif untuk kesuksesan akademik dan
            spiritual
          </p>
          <p className="font-light text-sm text-gray-500">
            Menciptakan jaringan alumni yang kuat dan bermanfaat
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Misi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menyediakan program pertukaran berkualitas tinggi ke berbagai negara
          </p>
          <p className="font-light text-sm text-gray-500">
            Membangun kemitraan strategis dengan universitas terkemuka
          </p>
          <p className="font-light text-sm text-gray-500">
            Memberikan bimbingan komprehensif untuk kesuksesan akademik dan
            spiritual
          </p>
          <p className="font-light text-sm text-gray-500">
            Menciptakan jaringan alumni yang kuat dan bermanfaat
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Visi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menjadi lembaga terdepan dalam memfasilitasi Perjalanan pendidikan
            yang berkualitas, menghubungkan pelajar Indonesia dengan tempat
            pendidikan terbaik di dunia, dan menghasilkan generasi berakhlak dan
            berwawasan global.
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Misi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menyediakan program pertukaran berkualitas tinggi ke berbagai negara
          </p>
          <p className="font-light text-sm text-gray-500">
            Membangun kemitraan strategis dengan universitas terkemuka
          </p>
          <p className="font-light text-sm text-gray-500">
            Memberikan bimbingan komprehensif untuk kesuksesan akademik dan
            spiritual
          </p>
          <p className="font-light text-sm text-gray-500">
            Menciptakan jaringan alumni yang kuat dan bermanfaat
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Misi Kami</h3>
          <p className="font-light text-sm text-gray-500">
            Menyediakan program pertukaran berkualitas tinggi ke berbagai negara
          </p>
          <p className="font-light text-sm text-gray-500">
            Membangun kemitraan strategis dengan universitas terkemuka
          </p>
          <p className="font-light text-sm text-gray-500">
            Memberikan bimbingan komprehensif untuk kesuksesan akademik dan
            spiritual
          </p>
          <p className="font-light text-sm text-gray-500">
            Menciptakan jaringan alumni yang kuat dan bermanfaat
          </p>
        </div>
      </div>
    </div>
  );
}

export default detail;
