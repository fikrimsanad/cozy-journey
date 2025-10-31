import {
  Clock8,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinHouse,
  PhoneCall,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function contact() {
  return (
    <div>
      <div className="pt-48 bg-[url(/hero-makkah.png)] bg-cover">
        <div className="w-full py-12 space-y-8">
          <div className="w-full text-center">
            <h1 className="text-white text-5xl font-bold">
              Mari Berdiskusi Tentang<br></br>
              <span className="text-yellow-500">
                Perjalanan Pendidikan Anda
              </span>
            </h1>
          </div>
          <div className="text-center">
            <p className="text-white text-lg font-light md:mx-72">
              Tim kami siap membantu menjawab pertanyaan dan memberikan
              informasi yang Anda butuhkan
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 py-20 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <div className="w-fit px-4 py-4 bg-gray-50 rounded-lg">
            <MapPinHouse color="green" size={40} />
          </div>
          <h3 className="font-bold text-xl">Alamat Kantor</h3>
          <p className="font-light text-sm text-gray-500">
            Jl. Pendidikan Islam No. 123
          </p>
          <p className="font-light text-sm text-gray-500">
            Jakarta Selatan, DKI Jakarta 12345
          </p>
          <p className="font-light text-sm text-gray-500">Indonesia</p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <div className="w-fit px-4 py-4 bg-gray-50">
            <PhoneCall color="green" size={40} />
          </div>
          <h3 className="font-bold text-xl">Telepon</h3>
          <p className="font-light text-sm text-gray-500">+62 21 1234 5678</p>
          <p className="font-light text-sm text-gray-500">
            +62 812 3456 7890 (WhatsApp)
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <div className="w-fit bg-gray-50 px-4 py-4">
            <Mail color="green" size={40} />
          </div>
          <h3 className="font-bold text-xl">Email</h3>
          <p className="font-light text-sm text-gray-500">
            info@islamiceducation.id
          </p>
          <p className="font-light text-sm text-gray-500">
            admissions@islamiceducation.id
          </p>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <div className="w-fit px-4 py-4 bg-gray-50">
            <Clock8 color="green" size={40} />
          </div>
          <h3 className="font-bold text-xl">Jam Operasional</h3>
          <p className="font-light text-sm text-gray-500">
            Senin - Jumat: 09:00 - 17:00 WIB
          </p>
          <p className="font-light text-sm text-gray-500">
            Sabtu: 09:00 - 14:00 WIB
          </p>
          <p className="font-light text-sm text-gray-500">
            Minggu & Hari Libur: Tutup
          </p>
        </div>
      </div>
      <div className="px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Kirim Pesan</h3>
          <form className="space-y-4 mt-10">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm">
                  Nama Lengkap
                </label>
              </div>
              <div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama lengkap Anda"
                  className="border border-gray-200 px-4 py-2 w-full rounded-lg text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Masukkan Email Anda"
                    className="border border-gray-200 px-4 py-2 w-full rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label htmlFor="phone" className="text-sm">
                    No Telp
                  </label>
                </div>
                <div>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="Masukkan No Telp Anda"
                    className="border border-gray-200 px-4 py-2 w-full rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label htmlFor="message" className="text-sm">
                  Pesan
                </label>
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tulis pesan Anda di sini..."
                  rows={6}
                  className="border border-gray-200 px-4 py-2 w-full rounded-lg text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-700 text-white rounded-sm"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
        <div className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4">
          <h3 className="font-bold text-2xl">Lokasi Kami</h3>
          <div className="w-full h-[500px] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2087167489385!2d106.82493631476896!3d-6.236704795502634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38e67e8c5fb%3A0xc32445f5d8f0c!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
      <div className="w-full text-center space-y-3 mt-32">
        <h1 className="text-black text-5xl font-bold">
          Terhubung Ke Media Sosial
        </h1>
        <p>Dapatkan update terbaru, tips, dan inspirasi dari program kami</p>
      </div>
      <div className="px-20 py-20 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link
          className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4 text-center"
          href={""}
        >
          <div className="flex items-center justify-center mx-auto">
            <Facebook color="green" size={40} />
          </div>
          <h3 className="font-bold text-lg">Facebook</h3>
        </Link>
        <Link
          className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4 text-center"
          href={""}
        >
          <div className="flex items-center justify-center mx-auto">
            <Instagram color="green" size={40} />
          </div>
          <h3 className="font-bold text-lg">Instagram</h3>
        </Link>
        <Link
          className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4 text-center"
          href={""}
        >
          <div className="flex items-center justify-center mx-auto">
            <Youtube color="green" size={40} />
          </div>
          <h3 className="font-bold text-lg">Youtube</h3>
        </Link>
        <Link
          className="border border-gray-200 py-8 px-10 w-full rounded-md space-y-4 text-center"
          href={""}
        >
          <div className="flex items-center justify-center mx-auto">
            <Linkedin color="green" size={40} />
          </div>
          <h3 className="font-bold text-lg">Linkedin</h3>
        </Link>
      </div>
    </div>
  );
}

export default contact;
