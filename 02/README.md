# ![](../assets/img/logo-readme2.jpg) &nbsp; JS Forms #02

Tym razem nasz formularz to panel rejestracji do serwisu.

Aby można było się zarejestrować to należy wprowadzić poprawny adres email (sprawdzić czy zawiera znak @ lub użyć odpowiedniego [wyrażenie regularnego](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)), podać dwa razy takie same hasła (dla pewności, że użytkonik nie pomylił się wpisując hasło), które są dłuższe niż 6 znaków oraz zaakceptować regulamin (sprawdzić czy jest `checked`).

Jeśli warunki zostały spełnione to w konsoli powinien pojawić się napis `done`. W przeciwnym razie należy zaznaczyć na czerwono kolor font-u dla `<label/>` błędnie wprowdzonych danych.

Do rozwiązania problemu oznaczania błędnych elementów można użyć tablicy, która bedzie przechowywać dane tj. `const errors = []`. W momencie wystąpienia błędów dodajemy do tej tablicy selektor elementu, który błędnie jest wypełniony.

Na samym końcu wykonujemy pętlę (`for` lub `forEach`), która zaznacza elementy z błędem.

&nbsp;

> Jeśli nie posiadasz materiałów do tego zadania to znajdziesz je na stronie [devmentor.pl](https://devmentor.pl)
