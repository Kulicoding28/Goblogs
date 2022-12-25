import React from "react";
import Container from "../components/Container";
import InfoPost from "../components/InfoPost";
import Layout from "../components/Layout";

export default function Detail() {
  return (
    <div>
      <Layout>
        <Container>
          <div className="w-full mx-auto flex items-center justify-center bg-slate-200 mt-10 font-bold rounded-sm flex-col md:mb-4">
            <InfoPost
              catagory="Tech"
              date="09 November 2022"
              tittle="Take a peek at the technology used by Gojek Indonesia"
            />
            <div className="">
              <img src="/detail1.png" className=" w-full md:mt-4 mt-2" />
            </div>
          </div>

          <div className="w-full mx-auto">
            <p className="  bg-slate-200 text-black md:text-lg md:p-20 p-5 text-md text-center tracking-wide leading-loose ">
              Teknologi adalah keseluruhan sarana untuk menyediakan
              barang-barang yang diperlukan bagi kelangsungan dan kenyamanan
              hidup manusia.[1]
            </p>
            <p className="  bg-slate-200 text-black text-md md:p-20 p-2 text-left mt-4 tracking-wide leading-loose inline-block align-middle ">
              Penggunaan teknologi oleh manusia dimulai dengan pengubahan sumber
              daya alam menjadi alat-alat sederhana. Penemuan prasejarah tentang
              kemampuan mengendalikan api telah menaikkan ketersediaan
              sumber-sumber pangan, sedangkan penciptaan roda telah membantu
              manusia dalam bepergian dan mengendalikan lingkungan mereka.
              Perkembangan teknologi terbaru, termasuk di antaranya mesin cetak,
              telepon, dan Internet, telah memperkecil hambatan fisik terhadap
              komunikasi dan memungkinkan manusia untuk berinteraksi secara
              bebas dalam skala global. Tetapi, tidak semua teknologi digunakan
              untuk tujuan damai. Pengembangan senjata penghancur yang semakin
              hebat telah berlangsung sepanjang sejarah dari pentungan sampai
              senjata nuklir.
            </p>
            <p className="  bg-slate-200 text-black text-md md:p-20 p-2 text-left mt-4 tracking-wide leading-loose inline-block align-middle">
              Teknologi telah memengaruhi masyarakat dan sekelilingnya dalam
              banyak cara. Di banyak kelompok masyarakat, teknologi telah
              membantu memperbaiki ekonomi (termasuk ekonomi global masa kini)
              dan telah memungkinkan bertambahnya kaum senggang. Banyak proses
              teknologi menghasilkan produk sampingan yang tidak dikehendaki
              yang disebut pencemar dan menguras sumber daya alam, merugikan,
              dan merusak Bumi dan lingkungannya. Berbagai macam penerapan
              teknologi telah memengaruhi nilai suatu masyarakat dan teknologi
              baru sering kali mencuatkan pertanyaan-pertanyaan etika baru.
              Sebagai contoh: meluasnya gagasan tentang efisiensi dalam konteks
              produktivitas manusia, suatu istilah yang pada awalnya hanya
              menyangkut permesinan. Contoh lainnya adalah tantangan norma-norma
              tradisional.
            </p>
            <p className="  bg-slate-200 text-black text-md md:p-20 p-2 text-left mt-4 tracking-wide leading-loose inline-block align-middle">
              Bahwa keadaan ini membahayakan lingkungan dan mengucilkan manusia.
              Penyokong paham-paham seperti transhumanisme dan
              tekno-progresivisme memandang proses teknologi yang berkelanjutan
              sebagai hal yang menguntungkan bagi masyarakat dan kondisi
              manusia. Tentu saja, paling sedikit hingga saat ini diyakini bahwa
              pengembangan teknologi hanya terbatas bagi umat manusia, tetapi
              kajian-kajian ilmiah terbaru mengisyaratkan bahwa primata lainnya
              dan komunitas lumba-lumba tertentu telah mengembangkan alat-alat
              sederhana dan belajar untuk mewariskan pengetahuan mereka kepada
              keturunan mereka.
            </p>
          </div>
        </Container>
      </Layout>
    </div>
  );
}
