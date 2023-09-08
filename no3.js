function getAngkaTerbesarKedua(personName) {
    if (!Array.isArray(personName)) {
      return 'Saat memanggil fungsi gunakan parameter berupa array';
    }
  
    const sortedUniqueArr = [...new Set(personName)].sort((a, b) => b - a);
    return Number(sortedUniqueArr[1]);
  }
  
  const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
  
  console.log(getAngkaTerbesarKedua(dataAngka)); //output:8 
  console.log(getAngkaTerbesarKedua(0)); //eror
  console.log(getAngkaTerbesarKedua()); //eror      
  