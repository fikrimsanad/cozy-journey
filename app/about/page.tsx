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
    </div>
  );
}

export default detail;
