# Binary Search Tree
**[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.**

**Birinci değeri(7)**<br>
+ **root** varsayalım.

**İkinci değer(5)**<br>
+ 7'den küçük olduğu için **sola** yerleşir.<br>

**Üçüncü değer(1)**<br>
+ 7'den küçük olduğu için **sola** yerleşir. <br>
+ 5'den küçük olduğu için **sola** yerleşir.<br>

**Dördüncü değer(8)**<br>
+ 7'den büyük olduğu için **sağa** yerleşir.<br>

**Beşinci değer(3)**<br>
+ 7'den küçük olduğu için **sola** yerleşir.<br>
+ 5'den küçük olduğu için **sola** yerleşir.<br>
+ 1'den büyük olduğu için **sağa** yerleşir.<br>

**Altıncı değer(6)**<br>
+ 7'den küçük olduğu için **sola** yerleşir.<br>
+ 5'den büyük olduğu için **sağa** yerleşir.<br>

**Yedinci değer(0)**<br>
+ 7'den küçük olduğu için **sola** yerleşir.<br>
+ 5'den küçük olduğu için **sola** yerleşir.<br>
+ 1'den küçük olduğu için **sola** yerleşir.<br>

**Sekizinci değer(9)**<br>
+ 7'den büyük olduğu için **sağa** yerleşir.<br>
+ 8'den büyük olduğu için **sağa** yerleşir.<br>

**Dokuzuncu değer(4)**<br>
+ 7'den küçük olduğu için **sola** yerleşir.<br>
+ 5'den küçük olduğu için **sola** yerleşir.<br>
+ 1'den küçük olduğu için **sola** yerleşir.<br>
+ 3'den büyük olduğu için **sağa** yerleşir.<br>

**Onuncu değer(2)**<br>
+ 7'den küçük olduğu için **sola** yerleşir.<br>
+ 5'den küçük olduğu için **sola** yerleşir.<br>
+ 1'den küçük olduğu için **sola** yerleşir.<br>
+ 3'den küçük olduğu için **sola** yerleşir.<br>

```
       7
     /   \
    5     8
   / \     \
  1   6     9
 / \
0   3
   / \
  2   4
```
