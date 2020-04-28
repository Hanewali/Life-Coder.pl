# Git Presentation

Prezentacja na temat Gita musi być na tyle prosta, na ile to tylko możliwe. Bardzo ważne będzie przedstawienie zalet Gita, porównać go z SVNem, i wypunktować jakie mogą być jego pozytywne zastosowania i inne zalety.

Plan podstawowy:

1. Porównanie Gita i SVNa, a więc zalet zdecentralizowanego systemu kontroli wersji nad scentralizowanym.
2. Zaproponowanie prostego Workflow Gita.
3. Git - dlaczego wprowadzenie go teraz ma  sens,  w kontekście Code Review, branchy i Pull Requestów.
4. Propozycja przetestowania rozwiązania na jednym z naszych obecnych projektów.
5. Wspomnienie o dalszych, bardziej odległych od chwili obecnej możliwościach, które Git udostępni.

## Porównanie Gita i Subversion

To jest tak naprawdę porównanie wad i zalet scentralizowanych i zdecentralizowanych systemów kontroli wersji. Ja osobiście jestem adwokatem tych drugich. W idealnym świecie historia wersji to nie jest tylko "zrobiłem taska A", ale rzeczywiście opisanie w wiadomości zmian, które zostały wprowadzone. Potrafi się to potem przysłużyć odnalezieniu powodów, dla którego powstały pewne fragmenty kodu, który mógł powodować błędy. 

Obecnie każdy commit na naszym kodzie musi spełniać pewne warunki:

- Kod **musi** się kompilować
- Aplikacja **musi działać** po pobraniu i skompilowaniu nowej wersji
- Jeśli commit jest wykonywany podczas edytowania, a nie dodawania nowej funkcjonalności, to nie może on jej uszkodzić i uniemożliwić korzystania z niej, **zwłaszcza** jeśli jest to funkcjonalność ważna dla biznesu i/lub reszty aplikacji.

Warunki te sprawiają, że gdyby chcieć robić commity opisane jako "Usunięcie pola ExampleField w ExampleViewModel", trzeba przejść całą listę kroków przed nimi:

1. Usunięcie wszystkich wykorzystań tego pola (to może być kilka commitów)
2. Przetestowanie czy na pewno usunięcie tego pola nie stworzyło mniej lub bardziej krytycznych błędów w działaniu aplikacji
3. Naprawienie ewentualnych błędów (znowu możliwe kilka commitów)
4. Usunięcie pola z modelu

Te kroki trzeba przejść niezależnie od systemu kontroli wersji który się stosuje, ale ich kolejność nie jest już taka stała. Obecnie, w scentralizowanym systemie kontroli wersji, każdy commit od razu trafia na serwer, gdzie może być przez kogoś pobrany, i, jeśli zmiana nie jest przetestowana, może uszkodzić działanie aplikacji - **nie daj boże**, żeby ktoś akurat chciał zrobić wgrywkę na demo i pobrał nowe zmiany. 

Git, jako zdecentralizowany system kontroli wersji, zdejmuje z programisty to ograniczenie, dodając kolejny krok pomiędzy wykonaniem zmiany, a wysłaniem jej na serwer:

1. Programista wykonuje zmianę w kodzie
2. Git Commit - zapisanie wykonanej zmiany w kontroli wersji
3. Git Push - Wrzucenie **wszystkich** scommitowanych wcześniej zmian na serwer kontroli wersji.

Pierwsze dwa kroki z tego schematu można powtarzać do woli, poniewaz Push podsumowuje je, wysyłając je wszystkie na serwer. 

Taki workflow wprowadza kilka zmian:

- Commit staje się tylko i wyłącznie informacją o wprowadzonej zmianie w kodzie
- Kod nie musi kompilować się w momencie wykonywania commita, a dopiero, gdy chcemy wrzucić zmiany na serwer. W ten sposób możemy dokumentować całą historię, nie szkodząc pracy innych ludzi. (ten punkt będzie bardziej rozbudowany gdy  dojdzie do tematu branchy)
- Mimo że commit istnieje już w historii wersji, nie będzie on od razu dostępny do pobrania dla innych programistów pobierających (w przypadku Gita, **pull-**ujących) nową wersję kodu

Dzięki takim zasadom pojedynczy commit może rzeczywiście wrócić do roli "wprowadziłem zmianę" zamiast "wykonałem zadanie", a więc ulepsza historię wersji, zapewniając większe bezpieczeństwo osób aktualizujących projekt. 

## Git Workflow

W temacie workflowu trzeba jeszcze dorzucić temat branchy. Tego konceptu raczej nie trzeba tłumaczyć. Podstawowo w gicie każde repozytorium posiada brancha "master", czyli główny, podstawowy branch projektu. Kazdy branch poza nim użytkownicy tworzą sami. Proponowana podstawowa struktura repozytorium w Gicie wyglądała następująco:

1. Master - wersja kodu na środowisku produkcyjnym. 
2. Demo - wersja kodu na środowisku demo/stage, zależy od projektu. Tych branchy może być kilka, w zależności od tego ile istnieje środowisk demonstracyjnych lub testowych. Dla Igorii bylyby to co najmniej dwa branche: Sandbox i UAT.
3. Dev - najbardziej aktualna wersja kodu, która nie jest jeszcze wypuszczona do klienta

Te trzy branche są też w każdym projekcie branchami specjalnymi. Ich ważną specyfiką jest to, że w idelnym świecie do nich **nic nie jest commitowane.** Należy unikać zmieniania czegokolwiek w tych branchach, ponieważ trudniej jest śledzić i kontrolować takie zmiany. 

Poza tymi trzeba branchami proponuję prosty workflow:

1. Na każde zadanie zakładany jest osobny branch (najlepiej i lokalny, i zdalny), odchodzący od brancha Dev, którego nazwa byłaby numerem zadania.
2. Każdy commit w tym zadaniu były wykonywany wyłącznie w tym branchu.
3. Kiedy funkcjonalność jest skończona i na pewno chce się ją wprowadzić, wykonywana jest operacja łączenia branchy. (Merge lub rebase - to jest temat do dyskusji, która opcja jest lepsza)
4. Opcjonalne rozwiązywanie konfliktów, które mogą się pojawić

W punkcie trzecim napisałem o tym że możliwe są albo operacje merge, albo rebase. Różnica między nimi jest taka, że Merge jedyne co robi, to podsumowuje zmiany z brancha, na którym pracowaliśmy w jednym commicie (tzw. Merge commit) na branchu, do którego te zmiany dodajemy. Rebase z kolei dodaje wszystkie commity z brancha na któym pracowaliśmy do brancha do którego dołączamy zmiany. Rebase można też wykonywać interaktywnie, żeby nie dodawać do historii brancha Dev niepotrzebnych commitów - na przykład kiedy jeden z commitów jest poprawką do jednego z poprzednich.

## Git w kontekście Code Review, Branche, Pull Requesty

Cały ten temat składa się ze ściśle powiązanych ze sobą pojęć. 

## Test na jednym z naszych projektów

Proponuję Selfbilling + schedule, bo tam pracują gitowcy którzy szybko wyłapią wady

## Przyszłe możliwości

-   Jenkins
-   Przeniesienie sql do plików
-   testy
-   CI/CD