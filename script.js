// --- Zbiór Zadań ---
const zadania = [

    // --- Poziom 1: Podstawowe Zapytania SELECT i WHERE (1-6) ---
    {
        tytul: "Zadanie 1: Wybór Wszystkich Kolumn",
        opis: "Wyświetl wszystkie kolumny i wiersze z tabeli `Klienci`.",
        selektor: "",
        wlasnosc: "SELECT",
        wartosc: "*",
        gotowy_sql: "SELECT * FROM Klienci;"
    },
    {
        tytul: "Zadanie 2: Wybór Konkretnych Kolumn",
        opis: "Wyświetl tylko kolumny `Nazwisko` i `Miasto` z tabeli `Klienci`.",
        selektor: "",
        wlasnosc: "SELECT",
        wartosc: "Nazwisko, Miasto",
        gotowy_sql: "SELECT Nazwisko, Miasto FROM Klienci;"
    },
    {
        tytul: "Zadanie 3: Filtrowanie (WHERE)",
        opis: "Wyświetl wszystkich klientów, których miasto to 'Warszawa'.",
        selektor: "",
        wlasnosc: "WHERE",
        wartosc: "Miasto = 'Warszawa'",
        gotowy_sql: "SELECT * FROM Klienci WHERE Miasto = 'Warszawa';"
    },
    {
        tytul: "Zadanie 4: Filtrowanie Liczbowe",
        opis: "Wyświetl zamówienia o `Wartosc` większej niż 1000.00.",
        selektor: "",
        wlasnosc: "WHERE",
        wartosc: "Wartosc > 1000.00",
        gotowy_sql: "SELECT * FROM Zamowienia WHERE Wartosc > 1000.00;"
    },
    {
        tytul: "Zadanie 5: Sortowanie (ORDER BY)",
        opis: "Wyświetl wszystkie zamówienia, sortując je malejąco po kolumnie `Wartosc`.",
        selektor: "",
        wlasnosc: "ORDER BY",
        wartosc: "Wartosc DESC",
        gotowy_sql: "SELECT * FROM Zamowienia ORDER BY Wartosc DESC;"
    },
    {
        tytul: "Zadanie 6: Unikalne Wartości (DISTINCT)",
        opis: "Wyświetl listę unikalnych miast, w których mieszkają nasi klienci.",
        selektor: "",
        wlasnosc: "DISTINCT",
        wartosc: "Miasto",
        gotowy_sql: "SELECT DISTINCT Miasto FROM Klienci;"
    },

    // --- Poziom 2: Operatory Logiczne i Agregacja (7-12) ---
    {
        tytul: "Zadanie 7: Operatory Logiczne (AND)",
        opis: "Wyświetl klientów z miasta 'Kraków', których `LimitKredytowy` jest większy niż 5000.",
        selektor: "",
        wlasnosc: "WHERE",
        wartosc: "AND",
        gotowy_sql: "SELECT * FROM Klienci WHERE Miasto = 'Kraków' AND LimitKredytowy > 5000;"
    },
    {
        tytul: "Zadanie 8: Operator LIKE",
        opis: "Znajdź klientów, których `Nazwisko` zaczyna się na literę 'K'.",
        selektor: "",
        wlasnosc: "LIKE",
        wartosc: "'K%'",
        gotowy_sql: "SELECT * FROM Klienci WHERE Nazwisko LIKE 'K%';"
    },
    {
        tytul: "Zadanie 9: Operator BETWEEN",
        opis: "Wyświetl zamówienia, których `Wartosc` mieści się w zakresie od 500 do 1500.",
        selektor: "",
        wlasnosc: "BETWEEN",
        wartosc: "500 AND 1500",
        gotowy_sql: "SELECT * FROM Zamowienia WHERE Wartosc BETWEEN 500 AND 1500;"
    },
    {
        tytul: "Zadanie 10: Agregacja (COUNT)",
        opis: "Oblicz, ile łącznie zamówień znajduje się w tabeli `Zamowienia`.",
        selektor: "",
        wlasnosc: "COUNT",
        wartosc: "*",
        gotowy_sql: "SELECT COUNT(ZamowienieID) FROM Zamowienia;"
    },
    {
        tytul: "Zadanie 11: Agregacja (SUM i AVG)",
        opis: "Oblicz sumę wszystkich wartości zamówień oraz średnią wartość zamówienia.",
        selektor: "",
        wlasnosc: "SUM, AVG",
        wartosc: "Wartosc",
        gotowy_sql: "SELECT SUM(Wartosc), AVG(Wartosc) FROM Zamowienia;"
    },
    {
        tytul: "Zadanie 12: Agregacja (MAX i MIN)",
        opis: "Podaj najwyższą i najniższą wartość zamówienia.",
        selektor: "",
        wlasnosc: "MAX, MIN",
        wartosc: "Wartosc",
        gotowy_sql: "SELECT MAX(Wartosc), MIN(Wartosc) FROM Zamowienia;"
    },

    // --- Poziom 3: Grupowanie i Złączenia (GROUP BY i JOIN) (13-20) ---
    {
        tytul: "Zadanie 13: Grupowanie (GROUP BY)",
        opis: "Zlicz, ile zamówień złożył każdy klient. Wynik powinien zawierać `KlientID` i liczbę zamówień.",
        selektor: "",
        wlasnosc: "GROUP BY",
        wartosc: "KlientID",
        gotowy_sql: "SELECT KlientID, COUNT(ZamowienieID) FROM Zamowienia GROUP BY KlientID;"
    },
    {
        tytul: "Zadanie 14: Grupowanie z Filtrowaniem (HAVING)",
        opis: "Wyświetl tylko te `Miasta`, w których mamy więcej niż 5 klientów. Użyj klauzuli HAVING.",
        selektor: "",
        wlasnosc: "HAVING",
        wartosc: "COUNT(KlientID) > 5",
        gotowy_sql: "SELECT Miasto, COUNT(KlientID) FROM Klienci GROUP BY Miasto HAVING COUNT(KlientID) > 5;"
    },
    {
        tytul: "Zadanie 15: Wewnętrzne Złączenie (INNER JOIN)",
        opis: "Połącz tabele, wyświetlając `Nazwisko` klienta oraz `Wartosc` złożonego zamówienia. Użyj INNER JOIN.",
        selektor: "",
        wlasnosc: "INNER JOIN",
        wartosc: "K.KlientID = Z.KlientID",
        gotowy_sql: "SELECT K.Nazwisko, Z.Wartosc FROM Klienci K INNER JOIN Zamowienia Z ON K.KlientID = Z.KlientID;"
    },
    {
        tytul: "Zadanie 16: JOIN i Sortowanie",
        opis: "Wyświetl `Nazwisko` klienta i `Wartosc` jego zamówień, sortując wynik malejąco po wartości.",
        selektor: "",
        wlasnosc: "JOIN",
        wartosc: "ORDER BY",
        gotowy_sql: "SELECT K.Nazwisko, Z.Wartosc FROM Klienci K JOIN Zamowienia Z ON K.KlientID = Z.KlientID ORDER BY Z.Wartosc DESC;"
    },
    {
        tytul: "Zadanie 17: JOIN z Agregacją",
        opis: "Oblicz łączną wartość zamówień dla każdego klienta. Wynik ma zawierać `Nazwisko` i sumę wartości.",
        selektor: "",
        wlasnosc: "JOIN, SUM, GROUP BY",
        wartosc: "K.Nazwisko",
        gotowy_sql: "SELECT K.Nazwisko, SUM(Z.Wartosc) FROM Klienci K JOIN Zamowienia Z ON K.KlientID = Z.KlientID GROUP BY K.Nazwisko;"
    },
    {
        tytul: "Zadanie 18: JOIN, Agregacja i HAVING",
        opis: "Wyświetl `Nazwisko` klientów, których łączna wartość zamówień przekroczyła 10000.",
        selektor: "",
        wlasnosc: "JOIN, HAVING",
        wartosc: "SUM(Z.Wartosc) > 10000",
        gotowy_sql: "SELECT K.Nazwisko FROM Klienci K JOIN Zamowienia Z ON K.KlientID = Z.KlientID GROUP BY K.Nazwisko HAVING SUM(Z.Wartosc) > 10000;"
    },
    {
        tytul: "Zadanie 19: Zewnętrzne Złączenie (LEFT JOIN)",
        opis: "Wyświetl wszystkich klientów i wartość ich zamówień. Jeśli klient nie złożył zamówienia, ma być NULL. Użyj LEFT JOIN.",
        selektor: "",
        wlasnosc: "LEFT JOIN",
        wartosc: "NULL",
        gotowy_sql: "SELECT K.Nazwisko, Z.Wartosc FROM Klienci K LEFT JOIN Zamowienia Z ON K.KlientID = Z.KlientID;"
    },
    {
        tytul: "Zadanie 20: Podzapytanie (Subquery)",
        opis: "Wyświetl wszystkich klientów, którzy złożyli zamówienie o `Wartosc` wyższej niż średnia wszystkich zamówień.",
        selektor: "",
        wlasnosc: "IN, AVG",
        wartosc: "Subquery",
        gotowy_sql: "SELECT * FROM Klienci WHERE KlientID IN (SELECT KlientID FROM Zamowienia WHERE Wartosc > (SELECT AVG(Wartosc) FROM Zamowienia));"
    }
];


let aktualnyIndeksZadania = 0;


const zadanieTytul = document.getElementById('zadanie-tytul');
const zadanieOpis = document.getElementById('zadanie-opis');
const kodCSSArea = document.getElementById('kod-css'); 
const sprawdzPrzycisk = document.getElementById('sprawdz-przycisk');
const komunikat = document.getElementById('komunikat');



/**

 * @param {string} sql 
 * @returns {string} 
 */
function normalizujSQL(sql) {

    sql = sql.replace(/\s+/g, ' ').trim();

    return sql.toLowerCase();
}



function zaladujZadanie() {
    const zadanie = zadania[aktualnyIndeksZadania];
    if (!zadanie) {

        zadanieTytul.textContent = "Gratulacje! 🎉";
        zadanieOpis.innerHTML = "Udało Ci się ukończyć wszystkie zadania SQL! Jesteś gotów do egzaminu INF.03!";
        kodCSSArea.value = "";
        kodCSSArea.disabled = true;
        sprawdzPrzycisk.disabled = true;
        komunikat.textContent = "";
        return;
    }

    zadanieTytul.textContent = zadanie.tytul;
    zadanieOpis.innerHTML = zadanie.opis; 
    kodCSSArea.value = ""; 
    komunikat.textContent = "";
    sprawdzPrzycisk.textContent = "Sprawdź Zapytanie!";
    sprawdzPrzycisk.disabled = false;
}



function sprawdzKod() {
    const wprowadzoneSQL = kodCSSArea.value;
    const aktualneZadanie = zadania[aktualnyIndeksZadania];


    const normalizowanyWprowadzony = normalizujSQL(wprowadzoneSQL);
    const normalizowanyGotowy = normalizujSQL(aktualneZadanie.gotowy_sql);

  
    if (normalizowanyWprowadzony === normalizowanyGotowy) {
        
        komunikat.textContent = "Poprawnie! Przechodzisz do następnego zadania. ✅";
        komunikat.className = 'komunikat sukces';

  
        sprawdzPrzycisk.textContent = "Następne Zadanie >>";
        sprawdzPrzycisk.removeEventListener('click', sprawdzKod);
        sprawdzPrzycisk.addEventListener('click', nastepneZadanie);

    } else {
        
        komunikat.textContent = "Niepoprawnie. Spróbuj jeszcze raz! Pamiętaj o poprawnym składzie, kropkach i przecinkach. ❌";
        komunikat.className = 'komunikat blad';
    }
}


function nastepneZadanie() {
    aktualnyIndeksZadania++;
    sprawdzPrzycisk.removeEventListener('click', nastepneZadanie);
    sprawdzPrzycisk.addEventListener('click', sprawdzKod);
    zaladujZadanie();
}

zaladujZadanie(); 
sprawdzPrzycisk.addEventListener('click', sprawdzKod); 