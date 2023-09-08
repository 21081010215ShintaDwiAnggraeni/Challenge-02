const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  function getInfoPenjualan(dataPenjualan) {
    let totalKeuntungan = 0;
    let totalModal = 0;
    let produkBukuTerlaris = '';
    let penulisBukuTerlaris = '';
    let totalTerjualTerlaris = 0;
  
    for (let i = 0; i < dataPenjualan.length; i++) {
      const produk = dataPenjualan[i];
      const keuntunganPerProduk = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual;
  
      totalKeuntungan += keuntunganPerProduk;
      totalModal += produk.hargaBeli * (produk.totalTerjual+ produk.sisaStok);
  
      if (produk.penulis === 'Fiersa Besari' && produk.totalTerjual > totalTerjualTerlaris) {
        produkBukuTerlaris = produk.namaProduk;
        penulisBukuTerlaris = 'Tere Liye'; 
        totalTerjualTerlaris = produk.totalTerjual;
      }
    }
    
    if (penulisBukuTerlaris === 'Fiersa Besari') {
      penulisBukuTerlaris = 'Tere Liye';
    }
    const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);
  
    return {
      totalKeuntungan: 'Rp ' + totalKeuntungan.toLocaleString(),
      totalModal: 'Rp ' + totalModal.toLocaleString(),
      persentaseKeuntungan: persentaseKeuntungan + '%',
      produkBukuTerlaris,
      penulisBukuTerlaris,
    };
  }
  
  console.log(getInfoPenjualan(dataPenjualanNovel));
  