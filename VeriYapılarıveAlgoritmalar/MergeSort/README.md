# Merge Sort
[16,21,11,8,12,22] merge sort ile açıklayarak sıralayınız.

**1. Adım** Tek bir eleman kalıncıya kadar parçala.</br>
[16,21,11,8,12,22]</br>
[16,21,11] + [8,12,22]</br>
[16] + [21,11]  &  [8] + [12,22]</br>
[16]  -  [21] + [11]  &  [8]  -  [12] + [22]</br>

**2. Adım** Sıralayarak birleştir.</br>
[16]  -  [21]  -  [11]  &  [8]  -  [12]  -  [22]</br>
[16]  -  [11,21]  &  [8]  -  [12,22]</br>
[11,16,21]  &  [8,12,22]</br>
[8,11,12,21,22]</br>

**Big-O Gösterimi:** O(nlogn)
