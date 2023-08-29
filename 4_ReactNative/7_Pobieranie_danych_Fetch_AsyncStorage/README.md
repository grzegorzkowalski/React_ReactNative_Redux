# All over the world!!!

1. Stwórz aplikację, której celem jest wyświetlenie listy wszystkich krajów naszego globu. 
   Aplikacja pobiera dane z publicznego api – znajdującego się pod adresem [Klik!](https://countrylayer.com/documentation/). Przyjrzyj się danym pobieranym z api. 
2. Musisz założyć darmowe konto, żeby otrzymać klucz API [pod tym adresem](https://manage.countrylayer.com/signup/free).   
3. Wykorzystajmy komponent `FlatList`, żeby wyświetlić listę państw, flagę, oraz szczegółowe informacje o kraju.
4.  Nie przejmuj się, że nie wszystkie flagi są dostępne.
5. Sprawdź w konsoli, jakie dane otrzymujesz z serwera. 
6. Potrzebujesz inspiracji:
  * Wyświetl stolicę państwa.
  * Wyświetl nazwę kraju w jego własnym języku.
  * Podaj przybliżony dystans stolicy kraju do Twojego rodzinnego miasta. Koordynaty Twojego miasta pobierz 
    z google maps a koordynaty stolicy danego kraju z pliku `capitalLangLong.js` w folderze data. 
  ```javascript
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

```
7. Gdybyś przekroczył limit zapytań, dane masz zapisane dodatkowo w folderze `data`.


# Stack Navigator – Fetch

1. Stwórzmy aplikację radiową w której użytkownik będzie mógł zobaczyć ramówkę rozgłośni radiowej
2. Stwórz nawigację zgodnie ze strategią stack navigator
3. Nawigacja powinna zawierać dwa ekrany
– Home
– Antena
4. na ekranie Home stwórz 4 buttony przenoszące do ekranu Antena. Każdy z buttonów powinien przekazywać parametr `antena` do widoku anteny. Tworzymy 4 buttony z parameterm `antena` o wartości od 1 do 4. Parametry będą reprezentowały 4 programy radiowe. 
5. W widoku antena stwórz zapytanie do api o schemacie url: 
`https://miniramowka.polskieradio.pl/Schedule/GetByDate?Id=3&Date=2021-05-13`
– pamiętaj aby pod `Id` podstawić odpowiednią antenę a pod `Date` aktualną datę
6. Zapisz osotatnio słuchaną antenę w AsyncStorage
7. Jeśli informacja o ostatnio słuchanej antenie znajduje się w AsyncStorage renderuj użytkownikowi w ekranie Home dodatkowy button z linkiem do ostatnio słuchanej anteny. 

# Async Storage

1. Zainstaluj bibliotekę AsyncStorage.
2. Zapisz swoje imię do AsyncStorage. Następnie pobież je do stanu komponentu (zrób to również dla wartości początkowe `name` w useState).
3. Wewnątrz funkcji `handleGame` napisz logikę gry w papier, nożyce, kamień
4. Po każdej grze zapisz informacje o zwycięzcy do asyncStorage. Uwaga dane powinny być zapisywane do jednego klucza w formacie: `['Computer won', 'Name won', 'Computer won']` itd. Pamiętaj, że dane w AsyncStorage możesz zapisać w stringu. Użyj funkcji `JSON.stringify` `JSON.parse` do zapisywania i odczytywania historii. 
5. Pokaż historię w ekranie - musisz przekazać ją z AsyncStorage do stanu
6. Wyłącz aplikację i włącz ponownie aby przekonać się czy dane się przechowały

# Gra w stolice

1. Pamiętasz API z listą państw z jednego z poprzednich zadań?
2. Wylosuj z listy w zemiennej `countries` jeden klucz kraju. 
3. Wyślij zapytanie do API i pobierz informacje o kraju. Zapisz informacje do stanu i pokaż użytkownikowu nazwę kraju. 
4. W polu input użytkownk może wpisać stolice kraju. Sprawdź czy jest poprawna – napisz logikę sprawdzania w funkcji `handleGame`.
5. Pokaż użytkownikowi informacje o tym czy wpisał poprawnie.
6. Dla chętnych: Stwórz przycisk do restartowania gry.
7. Dla chętnych: Stwórz historię gry w AsyncStorage.


