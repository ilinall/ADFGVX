# ADFGVX
Реализация шифра ADFGVX на JavaScript с простым веб-интерфейсом для шифрования и дешифрования текста.

## Описание
Шифр ADFGVX — это шифр подстановки и транспозиции, который использовался во время Первой мировой войны. Он основан на использовании квадрата Полибия и дополнительной перестановки столбцов.

## Функциональность
- **createADFGVXSquare(key)**: Создает ключевую матрицу 6x6 на основе введенного ключа.
- **Encrypt(plaintext, key)**: Зашифровывает текст с использованием ключевой матрицы
- **Decrypt(ciphertext, key)**: Преобразует зашифрованный текст обратно в открытый текст, используя ключ и квадрат ADFGVX.

## Пример1
- **Ключ**: SECRET
- **Tекст**: HELLO 123
- **Зашифрованный текст**: DVADFFFFFX VGVVVX
## Пример2
- **Ключ**: key
- **Текст**: Martha sees bananas are on sale. Bananas are usually 3 dollars per bunch, but they are 1 dollar today. Martha wants 3 bunches of bananas because she is going to make banana bread. This would normally cost Martha 9 dollars, but today it costs Martha 3 dollars. Martha saved 6 dollars. Martha also needs 2 bags of flour and 2 bags of sugar. Flour costs 3 dollars per 5-pound bag. Sugar costs 4 dollars per 5-pound bag. It costs 6 dollars for the flour and 8 dollars for the sugar. Together, they cost 14 dollars.
- **Зашифрованный текст**:FDAGGAGFDGAG GDADADGD AVAGFFAGFFAGGD AGGAAD FGFF GDAGFAAD AVAGFFAGFFAGGD AGGAAD GGGDGGAGFAFAAF VX DAFGFAFAAGGAGD FVADGA AVGGFFAXDG AVGGGF GFDGADAF AGGAAD VG DAFGFAFAAGGA GFFGDAAGAF FDAGGAGFDGAG GXAGFFGFGD VX AVGGFFAXDGADGD FGDD AVAGFFAGFFAGGD AVADAXAGGGGDAD GDDGAD DVGD DFFGDVFFDF GFFG FDAGAAAD AVAGFFAGFFAG AVGAADAGDA GFDGDVGD GXFGGGFADA FFFGGAFDAGFAFAAF AXFGGDGF FDAGGAGFDGAG XX DAFGFAFAAGGAGD AVGGGF GFFGDAAGAF DVGF AXFGGDGFGD FDAGGAGFDGAG VX DAFGFAFAAGGAGD FDAGGAGFDGAG GDAGGVADDA XF DAFGFAFAAGGAGDFDAGGAGFDGAG AGFAGDFG FFADADDAGD VV AVAGDFGD FGDD DDFAFGGGGA AGFFDA VV AVAGDFGD FGDD GDGGDFAGGA DDFAFGGGGA AXFGGDGFGD VX DAFGFAFAAGGAGD FVADGA XDFVFGGGFFDA AVAGDF GDGGDFAGGA AXFGGDGFGD XA DAFGFAFAAGGAGD FVADGA XDFVFGGGFFDA AVAGDF DVGF AXFGGDGFGD XF DAFGFAFAAGGAGD DDFGGA GFDGAD DDFAFGGGGA AGFFDA XV DAFGFAFAAGGAGD DDFGGA GFDGAD GDGGDFAGGA GFFGDFADGFDGADGA GFDGADAF AXFGGDGF VGXA DAFGFAFAAGGAGD

