const dataPenjualanPakAldi = [
    {
      namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori: "Sepatu Sport",
      totalTerjual: 90,
    },
    {
      namaProduct: 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori: "Sepatu Sneaker",
      totalTerjual: 37,
    },
    {
      namaProduct: 'Sepatu Warrior Tristan Maroon High',
      kategori: "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual: 90,
    },
    {
      namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori: "Sepatu Sneaker",
      totalTerjual: 90,
    }
  ];

function hitungTotalPenjualan(dataPenjualan) {
    if (!Array.isArray(dataPenjualan)) {
      return "Eror, Parameter harus menggunakan Array";
    }
  
    let totalTerjual = 0;
  
    for (let i = 0; i < dataPenjualan.length; i++) {
      const produk = dataPenjualan[i];
  
      if (typeof produk.totalTerjual === "number") {
        totalTerjual += produk.totalTerjual;
      }
    }
  
    return {
        totalTerjual  : totalTerjual
      };
  }
  
  const totalPenjualan = hitungTotalPenjualan(dataPenjualanPakAldi);
  console.log(totalPenjualan); 
  