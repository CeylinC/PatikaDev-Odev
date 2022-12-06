# Merge Sort
[16,21,11,8,12,22] merge sort ile açıklayarak sıralayınız.

**1. Adım** Tek bir eleman kalıncıya kadar parçala.
[16,21,11,8,12,22]
[16,21,11] + [8,12,22]
[16] + [21,11]  &  [8] + [12,22]
[16]  -  [21] + [11]  &  [8]  -  [12] + [22]

**2. Adım** Sıralayarak birleştir.
[16]  -  [21]  -  [11]  &  [8]  -  [12]  -  [22]
[16]  -  [11,21]  &  [8]  -  [12,22]
[11,16,21]  &  [8,12,22]
[8,11,12,21,22]

**Big-O Gösterimi:** O(nlogn)
