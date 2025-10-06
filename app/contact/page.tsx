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
    </div>
  );
}

export default contact;
