const wordsDict = {
    'A': ['Abstrakcja','Afera','Ale se dałem', 'Ambona', 'Aspi (Asperger)'],
    'B': ['Banan','Bazyl (Bazyliszek)','Barpio', 'Beti Majner', 'Bożenka'],
    'C': ['Ciepły','Co?','Cumica','Cyberprzemoc', 'Cysińska','Cysterna'],
    'D': ['Disco Cola','Dobek','Dobri', 'Dora','Dźwięczny'],
    'E': ['Elitarna Szkoła (Elyta)'],
    'F': ['Farmazon', 'Fejur Prada', 'Filtrujący (Sączący)','Fujak'],
    'G': ['Gang Pacuły','Gazownia','Gębi','Grabeczka','Grinda'],
    'H': ['Hitman','Hog Rider','Holona (Bombona)'],
    'I': ['Igiełka'],
    'J': ['Japa','Juma'],
    'K': ['Kafelka','Kaganiec','Kaj się kto ląg tam go ciąg','Kapsuła','Kaspi','Kiełbasa (incydent spałkowy)','Klej','Koń','Krecik','Krokodyl (Lacoste)','Kujaw'],
    'L': ['Lampa','Lampi','Lekarz','Lipidy','Lodomir','Lodowska'],
    'M': ['Małą łyżeczką też się człowiek naje','Makaroni','Marzenka','Mikrotik'],
    'N': ['Niedokręcony','Norbi','NPCecik'],
    'O': ['Obszlamiony','Odjebać Lewego','Otwieraju Zamykaju'],
    'P': ['Pianeczka','Pierwiastek','Piotrusiu nie dawaj się','Posejdon','Pownuk','Przepalone Styki','Przyjebany jak paczka gwoździ','Przyjemny','Przytrzymany'],
    'R': ['Rakieta','Rakietnica','Robot','Rondo','Rondzielak (Rondo)'],
    'S': ['Sahara','Sawicka Nowakowa Kowalska','Sensi','Sigma Boy','Siostra 12 lat','Słonik','Starszy Stopa','Stopa','Strikur','Strikużyca','Swond','Szromini','Ślado','Świątynia','Świniak'],
    'T': ['Tościwo'],
    'U': ['Ukrainiec'],
    'W': ['Willa','Wodospad','Wszawica','Wypalone Styki'],
    'Z': ['Zalewać Mercedesa miłością','Zesty','Zielony','Żonojebca']
};

const definitions = {
    'Abstrakcja' : 'legendarny tekst Stopy, który oznacza coś nierealnego, co nie powinno mieć miejsca w panujących warunkach',
    'Ambona': 'inaczej Bartosz Holona',
    'Aspi (Asperger)': 'inaczej Wojciech Cyganek' , 
    'Afera' : 'jakaś spruta (zazwyczaj od nauczyciela)', 
    'Ale se dałem' : 'mistyczny tekst M. Kasztelana po tym jak za dużo wypił',

    'Barpio' : 'inaczej Bartosz Stawinoga',
    'Beti Majner' : 'inaczej Beata Górnik',
    'Banan' :  'inaczej Paweł Kierot (dziecko co baluje za hajs starego)',
    'Bożenka' : 'inaczej Bożena ...',
    'Bazyl (Bazyliszek)' : 'brzydka osoba (zazwyczaj płci żeńskiej)',

    'Ciepły' : 'soczysty, śmierdzący, drażniący pierd',
    'Cyberprzemoc' : 'akt przemocy (zazwyczaj stosowany przez grupę aspiego)' , 
    'Cysterna' : 'inaczej Zuzanna Księżopolska',
    'Co?' : 'mistyczny wyraz zakazany w obszarach panowania Grindy', 
    'Cysińska' : 'inaczej Maja Krzemińska',
    'Cumica' : 'inaczej Dawid Woźnica',

    'Dobek' : 'przyjeb, inaczej Adam Dobek',
    'Dźwięczny' : 'głośny pierd',
    'Dora' : 'inaczej Agnieszka Dworak',
    'Disco Cola' : 'legendarny napój bogów (dostępny tylko w III Rzeszy)', 
    'Dobri' : 'forma powitania, zamiennie stosowane z dzień dobry',

    'Elitarna Szkoła (Elyta)' : 'inaczej Śl. TZN (zazwyczaj używane aby wyśmiać władzę)',

    'Fujak' :'inaczej Fujitsu', 
    'Filtrujący (Sączący)' : 'glut poddany procesowi filtracji',
    'Fejur Prada' : 'legendarna koszulka banana, za którą dostał bana',
    'Farmazon' : 'inaczej osoba gadająca bzdury',

    'Gębi' : 'określenie na osobę, której wali z ryja', 
    'Gang Pacuły' : 'lepsza grupa, dominatorzy genetyczni', 
    'Grabeczka' : 'inaczej Piotr Grabka',
    'Gazownia' : 'inaczej sala ...', 
    'Grinda' : 'inaczej Linda Grabowska',

    'Holona (Bombona)' : 'wywinięty kołnierzyk marynarki', 
    'Hog Rider' : 'określenie na ukraińca płci męskiej', 
    'Hitman' : 'inaczej Norbert Gajos', 

    'Igiełka' : 'legendarny przedmiot umożliwiając reset routera',

    'Juma' : 'inaczej kradzież',
    'Japa' : 'inaczej zamknij się, zamiennie stosowane z "ryj"',

    'Kaspi' : 'inaczej niespuszczony mocz w muszli, zazwyczaj barzdo żółty', 
    'Krecik' : 'inaczej Piotr Kajor', 
    'Kapsuła' : 'inaczej Jakub Pacuła', 
    'Krokodyl (Lacoste)' : 'inaczej rozklejony but', 
    'Kiełbasa (incydent spałkowy)' : 'porzygać się', 
    'Klej' : 'określenie dla sytuacji, gdy ktoś robi coś nieustannie, niekontaktując z otaczającym go światem' ,
    'Kujaw' : 'inaczej tłuste włosy', 
    'Koń' : '......', 
    'Kafelka' : 'inaczej A. Felka', 
    'Kaganiec' : 'inaczej krawat', 
    'Kaj się kto ląg tam go ciąg' : 'legendarny tekst Pani Haśnik, chuj wie co określa (ew. Nie ma to jak w domu)',

    'Lampa' : 'inaczej debil',
    'Lodomir' : 'inaczej Oliwier Kopycki', 
    'Lampi' : 'inaczej Maks Nowak', 
    'Lipidy' : 'mistyczny temat lekcji biologi, prawdopodobnie jedyny nieprzerobiony temat w historii lekcji biologii w Śl. TZN', 
    'Lodowska' : 'inaczej Katarzyna Godowska',
    'Lekarz' : 'legendarny spawn point Kaszteliniego',

    'Makaroni' : 'inaczej Oliwier Kopycki, sytuacyjny pseudoim z okresu praktyk zawodowych 2024', 
    'Mikrotik' : 'legendarny, ikoniczny zamiennik powszechnych urządzeń sieciowych', 
    'Marzenka' : 'inaczej Marzena Pilch', 
    'Małą łyżeczką też się człowiek naje' : 'legendarny tekst Mikołaja Kasztelana, potwierdza tezę że nie warto się spieszyć robiąc cokolwiek',

    'Niedokrecony' : 'inaczej ktoś przyjebany', 
    'Norbi' : 'inaczej Norbert Gajos',
    'NPCecik' : 'niezidentyfikowana osoba, zachowująca się nienaturalnie, niewyróżniająca się',

    'Otwieraju Zamykaju' : 'legendarny tekst Hog Ridera z urlopu w Brennej, używany w odniesieniu do źle otwierającego się okna balkonowego',
    'Odjebać Lewego' : 'mówić nieprawdę, upierać się o swojej racji pierdoląc farmazony',
    'Obszlamiony' : 'inaczej ubrudzony, umorusany, brudny',

    'Przepalone Styki' : 'pogorszenie stanu psychicznego lub intelektualnego osoby, do którego dochodzić ma wskutek nadmiernego pochłaniania niskojakościowych, mało wymagających treści w sieci, inaczej brainrot', 
    'Przyjemny' : 'nieśmierdzący pierd', 
    'Pownuk' : 'inaczej Łukasz Pownug', 
    'Posejdon' : 'inaczej Oliwier Kopycki', 
    'Przytrzymany' : 'osoba o niskim ilorazie inteligencji, opóźniona w rozwoju, potencjalnie urodzona po pewnych komplikacjach', 
    'Przyjebany jak paczka gwoździ' : 'legendarne powiedzenie Maksa Spałka, oznacza osobę głupią',
    'Pierwiastek' : 'inaczej Mateusz Wydra',
    'Pianeczka' : 'inaczej Marcin Pianka',
    'Piotrusiu nie dawaj się' : 'legendarny tekst, wypowiadany w celu dodania otuchy Piotrusiowi',

    'Rondo' : 'określenie na łysiejącą głowę', 
    'Rondzielak (Rondo)' : 'inaczej Grzegorz Śladowski',
    'Rakietnica' : 'inaczej jakub Wałęsa' ,
    'Rakieta' : 'inaczej ocena niedostateczna', 
    'Robot' : 'inaczej Filip Olek',

    'Sawicka Nowakowa Kowalska'  : 'legendarny tekst Sawickiej, który nic nie oznacza',
	'Strikur' : 'inaczej Igor Filipek',
	'Strikużyca' : 'inaczej żona strikura', 
	'Sensi' : 'inaczej Mariusz Sendor', 
	'Szromini' : 'inaczej Andrzej Szromek', 
	'Świniak' : 'inaczej Michał Okoń', 
	'Sigma Boy' : 'legendarna piosenka, hymn każdej sigmy',
	'Ślado' : 'inaczej Grzegorz Śladowski, również określenie na lekcje przz niego prowadzone',
	'Stopa' : 'inaczej Mikołaj Szopa',
	'Starszy Stopa' : 'inaczej Szymon Szopa'	,
 	'Siostra 12 lat' : 'inaczej czyjaś młodsza siostra, obiekt westchnień Lewego', 
	'Słonik' : 'inaczej Paulina Matysik',
	'Świątynia' : 'inaczej główny budynek szkoły', 
	'Sahara' : 'określenie na coś suchego (suszę pod pachami, suszę na grzale)', 
	'Swond' : 'inaczej smród',
	
    'Tościwo' : 'legendarne tosty ze sklepiku szkolnego',

	'Ukrainiec' : 'zazwyczaj osoba gorsza, zza wschodniej granicy',

	'Wszawica' : 'inaczej Mateusz Zając', 
	'Wypalone Styki' : 'nieodwracalne utracenie przyzwoitego stanu psychicznego lub intelektualnego osoby, do którego dochodzić ma wskutek nadmiernego pochłaniania niskojakościowych, mało wymagających treści w sieci', 
	'Wodospad' : 'określenie na przemoczoną koszulę pod pachami',
	'Willa' : 'legendarna posiadłość banana',


	'Zielony' : 'solidny glut z nosa zazwyczaj w kolorze zielonym', 
	'Zalewać Mercedesa miłością' : 'tankować BMW',
	'Zesty' : 'inaczej Igor Zielosko',

	'Żonojebca' : 'inaczej Michał Rybok, również określenie na kogoś kto wyrywa cudzą dziewczynę',
};

function showWords(letter) {
    const words = wordsDict[letter] || [];
    let output = `<h3>Wyrazy na literę ${letter}:</h3>`;
    if (words.length > 0) {

        words.forEach(word => {
            output += `<li onclick="showDefinition('${word}')">${word}</li>`;
        });

    } else {
        output += `<p>Brak wyrazów na tę literę.</p>`;
    }
    document.getElementById("words").innerHTML = output;
}

function showDefinition(word) {
    const definition = definitions[word] || 'Brak definicji.';
    const html = `
        <h3>${word}</h3>
        <p>${definition}</p>
    `;
    document.getElementById("definition").innerHTML = html;

    // Wyświetl różowy kontener
    const container = document.getElementById('definition-container');
    container.style.display = 'block';
}


function randomWord() {
    const letters = Object.keys(wordsDict);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const words = wordsDict[randomLetter];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    showDefinition(randomWord);
}

function searchWord() {
    const query = document.getElementById('search-box').value.toLowerCase();
    
    // Jeśli pole wyszukiwania jest puste, usuń wyniki i zakończ funkcję
    if (query === '') {
        document.getElementById("words").innerHTML = '';
        return;
    }

    const matchingWords = Object.values(wordsDict)
        .flat()
        .filter(word => word.toLowerCase().includes(query));

    let output = `<h3>Wyniki wyszukiwania:</h3>`;
    if (matchingWords.length > 0) {

        matchingWords.forEach(word => {
            output += `<li onclick="showDefinition('${word}')">${word}</li>`;
        });

    } else {
        output += `<p>Brak wyników.</p>`;
    }
    document.getElementById("words").innerHTML = output;
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("login-modal");
    const loginBtn = document.getElementById("login-btn");
    const errorMessage = document.getElementById("error-message");

    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "4321") {
            modal.style.display = "none";
        } else {
            errorMessage.style.display = "block"; // Pokaż komunikat o błędzie
        }
    });
});

