# Jawaban Technical Test Skenario: Pengelolaan Buku Telepon

## _Build using node v18.16.0 dan Typescript_

## Fitur :

- Menambahkan kontak baru dengan nama dan nomor telepon ke dalam buku telepon
- Menghapus kontak dari buku telepon berdasarkan nama
- Mencari nomor telepon kontak berdasarkan nama. Mengembalikan nomor telepon jika kontak ditemukan, dan pesan "Kontak tidak ditemukan" jika tidak ditemukan

## Tech

### aplikasi ini menggunakan:

- [node.js] - sebagai development environment

  - - tutorial cara installasi node.js nya :
      - https://www.youtube.com/watch?v=VfN1_pEdQAA&t=633s

- [Typescript] - sebagai bahasa pemrograman
  - - tutorial cara installasi typescript nya :
      - https://www.youtube.com/watch?v=gkPrpGexmho&t=110s

## Installation

requires [Node.js](https://nodejs.org/) v18.16.0 to run.

- copy / clone github repository
- lalu buka dalam text editor anda
- install semua dependencies yang dibutuhkan dengan menjalankan perintah dibawah dalam terminal CLI anda:

```
npm install
```

Pastikan Anda telah menginstal Node.js dan TypeScript sebelum menjalankan program ini, lalu masuk kedalam folder project-nya:

```sh
cd simple-phonebook
```

lalu jalankan di script lewat terminal anda :

```
npm run start
```

### hasil nya akan terlihat seperti ini :

```
$ npm run start

> simple-phonebook@1.0.0 start
> ts-node src/app.ts

1234567890
9876543210
Kontak tidak ditemukan
Kontak tidak ditemukan
```

## License

MIT

**Free Software, Cool Yeah!**