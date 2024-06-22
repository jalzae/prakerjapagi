function tambah(angka, angkadua) {
  return angka + angkadua
}

const kurang = function (angka, angkadua = 20) {
  return angka - angkadua
}
const kali = (angka, angkadua) => {
  return angka * angkadua
}

(
  () => {
    console.log(tambah(10,20))
    console.log(kurang(10,20))
    console.log(kali(10,20))
   }
)()