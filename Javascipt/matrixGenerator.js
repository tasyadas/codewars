/**
 * ================
 * Matrix Generator
 * ================
 *
 * [Description]
 * 1. matrixGenerator merupakan sebuah fungsi yang menerima input berupa string
 * 2. fungsi akan mengembalikan sebuah array multidimensi dengan ukuran angka yang sama (1x1, 2x2, 3x3, ...dst)
 * 3. Ukuran dari array multidimensi tersebut ditentukan dari jumlah karakter yang ada di input
 *    sehingga array result yang bentuknya persegi (ukuran x ukuran) memuat seluruh karakter pada input
 * 4. array akan diisi dengan parameter string dan bintang/star ('*').
 * 5. Karakter bintang/star ('*') diisi sesuai dengan jumlah elemen kosong dan mulai ditulis pada index jumlah elemen kosong
 *
 * [Contoh]
 * @input = 'abcdefgh'
 * jumlah karakter = 8
 * maka ukuran 3 => 3*3 = 9
 *
 * Kenapa ukuran 3?
 * Karena jika ukuran 2*2 terlalu kecil (total = 4, hanya muat 'abcd')
 * dan jika ukuran 4*4 terlalu besar
 *
 * ukuran adalah 3*3 = 9 dikurangi panjang karakter 8 = 1,
 * MAKA elemen kosong akan ada 1, TULISLAH karakter bintang/star mulai dari index 1 sebanyak 1 kali
 * jika jumlah elemen kosong sudah habis, maka dilanjutkan untuk menuliskan string dari parameter
 *
 * @output =
 * [
 *  [ 'a', '*', 'b' ],
 *  [ 'c', 'd', 'e' ],
 *  [ 'f', 'g', 'h' ]
 * ]
 *
 * [Contoh 2]
 * @input = 'p23f4793847f9834jd983274t0'
 * jumlah karakter = 26
 * maka ukuran 6 => 6*6 = 36
 *
 * Kenapa ukuran 6?
 * Karena jika ukuran 5*5 terlalu kecil (total = 25, hanya muat 'p23f4793847f9834jd983274t')
 * dan jika ukuran 7*7 terlalu besar
 *
 * ukuran adalah 6*6 = 36 dikurangi panjang karakter 26 = 10,
 * MAKA elemen kosong akan ada 10, TULISLAH karakter bintang/star mulai dari index 10 sebanyak 10 kali
 * jika jumlah elemen kosong sudah habis, maka dilanjutkan untuk menuliskan string dari parameter
 *
 * @output =
 * [
 *  [ 'p', '2', '3', 'f', '4', '7' ],
 *  [ '9', '3', '8', '4', '*', '*' ],
 *  [ '*', '*', '*', '*', '*', '*' ],
 *  [ '*', '*', '7', 'f', '9', '8' ],
 *  [ '3', '4', 'j', 'd', '9', '8' ],
 *  [ '3', '2', '7', '4', 't', '0' ]
 * ]
 *
 * [Rules]
 * 1. `Hanya boleh` menggunakan built-in function .push() dan .unshift()
 * 2. Diperbolehkan menggunakan built-in function Math
 */
// find ixj
function akar(params) {
    indexArray = params.length
    number = 0
    
    for (let i = 0; (i * i) <= indexArray; i++) {
        if (i * i === indexArray) {
            return i
        }
        number = i
    }
    return number
}

function splitManual(text, kelipatan) {
  toArray = []
  temp = []
  for (let i = 0; i < text.length; i++) {
    if (temp.length === kelipatan) {
      toArray.push(temp)
      temp = []
    }
    temp.push(text[i])

    if (i === (text.length - 1)) {
      toArray.push(temp)
    }
  }
  return toArray
}

function matrixGenerator(str) {
  kelipatan = akar(str)
  ukuran = kelipatan * kelipatan

  if (ukuran < str.length) {
    kelipatan += 1      
  }

  hasil_kelipatan = kelipatan * kelipatan
  selisih = hasil_kelipatan - str.length

  count = 0
  first_str = ''
  sec_str = ''
  third_str = ''
  space = 0
  for (let i = 0; i < str.length; i++) {
    if (i >= selisih && count < selisih) {
      sec_str += '*'
      count++
      space++
    }
    if(i < selisih){
      first_str += str[i]
      space++
    }
    if (i >= selisih) {
      third_str += str[i]
      space++
    }
    if (space === 3) {
      
    }
  }

  new_str = first_str+sec_str+third_str
  result = splitManual(new_str, kelipatan)
  return result
}

console.log(matrixGenerator('abcdefgh'))
// [ [ 'a', '*', 'b' ], [ 'c', 'd', 'e' ], [ 'f', 'g', 'h' ] ]

console.log(matrixGenerator('pq98d327b5c3v'))
/*
[
  [ 'p', 'q', '9', '*' ],
  [ '*', '*', '8', 'd' ],
  [ '3', '2', '7', 'b' ],
  [ '5', 'c', '3', 'v' ]
]
*/

console.log(matrixGenerator('q289c370bcq2f98fdg89'))
/*
[
  [ 'q', '2', '8', '9', 'c' ],
  [ '*', '*', '*', '*', '*' ],
  [ '3', '7', '0', 'b', 'c' ],
  [ 'q', '2', 'f', '9', '8' ],
  [ 'f', 'd', 'g', '8', '9' ]
]
*/

console.log(matrixGenerator('654dg8erfg654dsf3g2d4sfg657sfdg89'))
/*
[
  [ '6', '5', '4', '*', '*', '*' ],
  [ 'd', 'g', '8', 'e', 'r', 'f' ],
  [ 'g', '6', '5', '4', 'd', 's' ],
  [ 'f', '3', 'g', '2', 'd', '4' ],
  [ 's', 'f', 'g', '6', '5', '7' ],
  [ 's', 'f', 'd', 'g', '8', '9' ]
]
*/

console.log(matrixGenerator('p23f4793847f9834jd983274t0'))
/*
[
  [ 'p', '2', '3', 'f', '4', '7' ],
  [ '9', '3', '8', '4', '*', '*' ],
  [ '*', '*', '*', '*', '*', '*' ],
  [ '*', '*', '7', 'f', '9', '8' ],
  [ '3', '4', 'j', 'd', '9', '8' ],
  [ '3', '2', '7', '4', 't', '0' ]
]
*/
