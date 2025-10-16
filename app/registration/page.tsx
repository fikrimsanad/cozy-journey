import React from "react";

function registration() {
  return (
    <div className="pt-40">
      <div className="px-28 text-center my-10 space-y-4">
        <h2 className="font-bold text-4xl">Formulir Pendaftaran</h2>
        <p className="text-sm text-gray-400">
          Isi formulir di bawah ini untuk mendaftar program pertukaran pelajar
        </p>
      </div>
      <div className="grid grid-cols-3 px-28 py-20 gap-10">
        <div className="col-span-2 px-12">
          <div>
            <h4 className="text-2xl font-bold">Informasi Pendaftar</h4>
            <p className="text-sm text-gray-400">
              Pastikan semua informasi yang Anda berikan akurat dan lengkap
            </p>
            <form className="space-y-4 py-8">
              <div className="w-full space-y-2">
                <h3 className="text-sm text-gray-500">Nama Lengkap</h3>
                <input
                  type="text"
                  placeholder="Masukan Nama Lengkap"
                  className=" w-full py-2 px-4 border border-gray-200 rounded-sm"
                ></input>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-sm text-gray-500">Email</h3>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className=" w-full py-2 px-4 border border-gray-200 rounded-sm"
                ></input>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full space-y-2">
                  <h3 className="text-sm text-gray-500">No Telp</h3>
                  <input
                    type="number"
                    placeholder="021-12345678"
                    className=" w-full py-2 px-4 border border-gray-200 rounded-sm"
                  ></input>
                </div>
                <div className="w-full space-y-2">
                  <h3 className="text-sm text-gray-500">Tanggal Lahir</h3>
                  <input
                    type="date"
                    className=" w-full py-2 border border-gray-200 rounded-sm px-4"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full space-y-2">
                  <h3 className="text-sm text-gray-500">Pendidikan Terakhir</h3>
                  <div className="px-4 py-2 border border-gray-200 rounded-sm">
                    <select className="w-full border-0 text-sm">
                      <option>Pilih Pendidikan</option>
                      <option>Diploma (D3)</option>
                      <option>Sarjana (S1)</option>
                      <option>Magister (S2)</option>
                    </select>
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <h3 className="text-sm text-gray-500">
                    Universitas/Institusi
                  </h3>
                  <input
                    type="text"
                    placeholder="Nama Universitas/Institusi "
                    className=" w-full py-2 border border-gray-200 rounded-sm px-4"
                  ></input>
                </div>
              </div>
              <div>
                <div className="w-full space-y-2">
                  <h3 className="text-sm text-gray-500">
                    Program Yang Diminati
                  </h3>
                  <div className="px-4 py-2 border border-gray-200 rounded-sm">
                    <select className="w-full border-0 text-sm">
                      <option>Pilih Tujuan</option>
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full space-y-2">
                <h3 className="text-sm text-gray-500">Motivasi Ikut Program</h3>
                <textarea
                  className=" w-full h-28 py-4 border border-gray-200 rounded-sm px-4"
                  placeholder="Ceritakan Motivasi Anda Sebanyak ( Minimal 50 Karakter)"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4 space-y-4">
                <div>
                  <button className="border border-gray-400 py-3 px-24 rounded-md text-gray-600 w-full">
                    Kembali
                  </button>
                </div>
                <div>
                  <button className="bg-green-600 py-3 px-24 rounded-md text-white w-full transform hover:scale-105 transition-all duration-300 hover:bg-green-500 hover:cursor-pointer">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold">Ringkasan Pendaftaran</h4>
          <p className="text-sm text-gray-400">
            Detail program yang Anda pilih
          </p>
          <div className="border border-gray-200 bg-green-50 rounded-lg py-5 px-4 mt-8 ">
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Program Intensif Madinah</h4>
              <p className="font-light text-gray-500 text-sm">
                Program intensif studi Islam di Makkah
              </p>
              <div className="border-b border-b-gray-200 flex justify-between py-2 mt-10">
                <p>Durasi :</p>
                <p>3 Bulan</p>
              </div>
              <div className="flex justify-between mt-8">
                <p>Biaya Program :</p>
                <p className="font-bold text-green-700 text-lg">
                  Rp 25.000.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default registration;
