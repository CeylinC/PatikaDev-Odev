# Selection Sort Sıralama
**Soru:** [22,27,16,2,18,6] dizisini Insert sort ile sıralayınız.

**1. Adım** İkinci elemanı _key_ olarak alalım. Kendinden önceki elemanlardan en küçük büyük sayının önüne yerleştirilir.
Key: 27
Kendinden sonra en küçük büyük sayı: -
[22, 27, 16, 2, 18, 6]

**2. Adım** Üçüncü elemanı _key_ olarak alalım. Kendinden önceki elemanlardan en küçük büyük sayının önüne yerleştirilir.
Key: 16
Kendinden sonra en küçük büyük sayı: 22
[16, 22, 27, 2, 18, 6]

**3. Adım** Dördüncü elemanı _key_ olarak alalım. Kendinden önceki elemanlardan en küçük büyük sayının önüne yerleştirilir.
Key: 2
Kendinden sonra en küçük büyük sayı: 16
[2, 16, 22, 27, 18, 6]

**4. Adım** Beşinci elemanı _key_ olarak alalım. Kendinden önceki elemanlardan en küçük büyük sayının önüne yerleştirilir.
Key: 18
Kendinden sonra en küçük büyük sayı: 22
[2, 16, 18, 22, 27, 6]

**5. Adım** Altıncı elemanı _key_ olarak alalım. Kendinden önceki elemanlardan en küçük büyük sayının önüne yerleştirilir.
Key: 6
Kendinden sonra en küçük büyük sayı: 16
[2, 6, 16, 18, 22, 27]


Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer?
**Cevap:** Average case, aradığımız sayının ortada olması.

**Soru:** [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

**1. Adım** Birinci eleman en küçük sayı varsayılıp ilerki elemanlarda kendinden daha küçük sayı ile yer değiştirilir.
Varsaydığımız en küçük sayı: 7
Kendinden en küçük sayı: 2
[2, 3, 5, 8, 7, 9, 4, 15, 6]

**2. Adım** İkinci eleman en küçük sayı varsayılıp ilerki elemanlarda kendinden daha küçük sayı ile yer değiştirilir.
Varsaydığımız en küçük sayı: 3
Kendinden sonra en küçük sayı: 3
[2, 3, 5, 8, 7, 9, 4, 15, 6]

**3. Adım** Üçüncü eleman en küçük sayı varsayılıp ilerki elemanlarda kendinden daha küçük sayı ile yer değiştirilir.
Varsaydığımız en küçük sayı: 5
Kendinden sonra en küçük sayı: 4
[2, 3, 4, 8, 7, 9, 5, 15, 6]

**4. Adım** Dördüncü eleman en küçük sayı varsayılıp ilerki elemanlarda kendinden daha küçük sayı ile yer değiştirilir.
Varsaydığımız en küçük sayı: 8
Kendinden sonra en küçük sayı: 5
[2, 3, 4, 5, 7, 9, 8, 15, 6]
