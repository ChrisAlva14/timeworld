const data ={
    "SurAmerica": [
        { pais: "Argentina", referencia: "America/Argentina/Buenos_Aires", ciudades: ["Buenos Aires", "Rosario", "Posadas", "Córdoba"] },
        { pais: "Bolivia", referencia: "America/La_Paz", ciudades: ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"] },

        // Brasil tiene varios husos horarios
        { pais: "Brasil", referencia: "America/Fortaleza", ciudades: ["Brasilia", "São Paulo"] },
        { pais: "Brasil", referencia: "America/Cuiaba", ciudades: ["Mato Grosso"] },
        { pais: "Brasil", referencia: "America/Rio_Branco", ciudades: ["Acre"] },

        { pais: "Chile", referencia: "America/Santiago", ciudades: ["Santiago de Chile", "Concepción", "Puerto Montt", "Punta Arenas"] },
        { pais: "Colombia", referencia: "America/Bogota", ciudades: ["Bogotá", "Medellín", "Cali", "Barranquilla"] },
        { pais: "Ecuador", referencia: "America/Guayaquil", ciudades: ["Quito", "Guayaquil"] },
        { pais: "Guayana", referencia: "America/Cayenne", ciudades: ["Cayenne"] },
        { pais: "Guyana", referencia: "America/Guyana", ciudades: ["Georgetown"] },
        { pais: "Paraguay", referencia: "America/Asuncion", ciudades: ["Asunción", "Encarnación", "Ciudad del Este"] },
        { pais: "Perú", referencia: "America/Lima", ciudades: ["Lima", "Arequipa", "Iquitos", "Cusco"] },
        { pais: "Surinam", referencia: "America/Cayenne", ciudades: ["Paramaribo"] },
        { pais: "Uruguay", referencia: "America/Montevideo", ciudades: ["Montevideo", "Punta del Este"] },
        { pais: "Venezuela", referencia: "America/Caracas", ciudades: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"] }
    ],

    "CentroAmerica": [
        { pais: "Belice", referencia: "America/Belize", ciudades: ["Belice", "San Ignacio", "Orange Walk", "Belmopan"] },
        { pais: "Costa Rica", referencia: "America/Costa_Rica", ciudades: ["San José", "Alajuela", "Cartago", "Limón"] },
        { pais: "El Salvador", referencia: "America/El_Salvador", ciudades: ["San Salvador", "Santa Ana", "San Miguel", "Soyapango"] },
        { pais: "Guatemala", referencia: "America/Guatemala", ciudades: ["Ciudad de Guatemala", "Quetzaltenango", "Escuintla", "Cobán"] },
        { pais: "Honduras", referencia: "America/Tegucigalpa", ciudades: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choluteca"] },
        { pais: "Nicaragua", referencia: "America/Managua", ciudades: ["Managua", "León", "Granada", "Masaya"] },
        { pais: "Panamá", referencia: "America/Panama", ciudades: ["Ciudad de Panamá", "Colón", "David", "Santiago"] },
        { pais: "Cuba", referencia: "America/Havana", ciudades: ["La Habana", "Santiago de Cuba", "Camagüey", "Holguín"] }
    ],

    "NorteAmerica": [
        // Canadá tiene varios husos horarios
        { pais: "Canadá", referencia: "America/Toronto", ciudades: ["Toronto", "Ottawa", "Montreal", "Quebec"] },
        { pais: "Canadá", referencia: "America/Vancouver", ciudades: ["Vancouver", "Victoria"] },
        { pais: "Canadá", referencia: "America/Edmonton", ciudades: ["Edmonton", "Calgary"] },
        { pais: "Canadá", referencia: "America/St_Johns", ciudades: ["St. John's"] },

        // México también tiene diferentes husos horarios
        { pais: "México", referencia: "America/Mexico_City", ciudades: ["Ciudad de México", "Guadalajara", "Puebla", "Querétaro"] },
        { pais: "México", referencia: "America/Tijuana", ciudades: ["Tijuana", "Mexicali"] },
        { pais: "México", referencia: "America/Cancun", ciudades: ["Cancún", "Chetumal", "Playa del Carmen"] },
        { pais: "México", referencia: "America/Hermosillo", ciudades: ["Hermosillo"] },

        // Estados Unidos tiene múltiples zonas horarias
        { pais: "EEUU", referencia: "America/New_York", ciudades: ["Nueva York", "Washington D.C.", "Boston", "Filadelfia"] },
        { pais: "EEUU", referencia: "America/Chicago", ciudades: ["Chicago", "Houston", "Dallas", "Austin"] },
        { pais: "EEUU", referencia: "America/Denver", ciudades: ["Denver", "Salt Lake City", "Phoenix"] },
        { pais: "EEUU", referencia: "America/Los_Angeles", ciudades: ["Los Ángeles", "San Francisco", "San Diego", "Las Vegas"] },
        { pais: "EEUU", referencia: "America/Anchorage", ciudades: ["Anchorage"] },
        { pais: "EEUU", referencia: "Pacific/Honolulu", ciudades: ["Honolulu"] }
    ],

    "Europa": [
        // España tiene dos husos horarios: peninsular y Canarias
        { pais: "España", referencia: "Europe/Madrid", ciudades: ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Granada"] },
        { pais: "España", referencia: "Atlantic/Canary", ciudades: ["Las Palmas", "Santa Cruz de Tenerife"] },

        { pais: "Francia", referencia: "Europe/Paris", ciudades: ["París", "Lyon", "Marsella", "Toulouse", "Niza", "Burdeos"] },
        { pais: "Alemania", referencia: "Europe/Berlin", ciudades: ["Berlín", "Hamburgo", "Múnich", "Colonia", "Frankfurt", "Stuttgart"] },
        { pais: "Italia", referencia: "Europe/Rome", ciudades: ["Roma", "Milán", "Nápoles", "Turín", "Florencia", "Bolonia"] },
        { pais: "Países Bajos", referencia: "Europe/Amsterdam", ciudades: ["Ámsterdam", "Róterdam", "La Haya", "Utrecht", "Eindhoven", "Groninga"] },
        { pais: "Bélgica", referencia: "Europe/Brussels", ciudades: ["Bruselas", "Amberes", "Gante", "Brujas", "Lieja", "Lovaina"] },
        { pais: "Reino Unido", referencia: "Europe/London", ciudades: ["Londres", "Mánchester", "Birmingham", "Glasgow", "Liverpool", "Edimburgo", "Belfast"] },
        { pais: "Portugal", referencia: "Europe/Lisbon", ciudades: ["Lisboa", "Oporto", "Coímbra", "Braga", "Funchal", "Ponta Delgada"] },
        { pais: "Noruega", referencia: "Europe/Oslo", ciudades: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Kristiansand"] },
        { pais: "Suecia", referencia: "Europe/Stockholm", ciudades: ["Estocolmo", "Gotemburgo", "Malmö", "Uppsala", "Västerås", "Örebro"] },
        { pais: "Dinamarca", referencia: "Europe/Copenhagen", ciudades: ["Copenhague", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Viborg"] },
        { pais: "Finlandia", referencia: "Europe/Helsinki", ciudades: ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Rovaniemi"] },
        { pais: "Grecia", referencia: "Europe/Athens", ciudades: ["Atenas", "Salónica", "Patras", "Heraclión", "Larisa", "Volos"] },
        { pais: "Turquía", referencia: "Europe/Istanbul", ciudades: ["Estambul", "Ankara", "Esmirna", "Bursa", "Antalya", "Konya"] },

        // Rusia tiene múltiples husos horarios
        { pais: "Rusia", referencia: "Europe/Moscow", ciudades: ["Moscú", "San Petersburgo", "Kazan", "Nizhni Nóvgorod", "Samara", "Saratov"] },
        { pais: "Rusia", referencia: "Europe/Kaliningrad", ciudades: ["Kaliningrado"] },

        // Países pequeños y repúblicas bálticas
        { pais: "Andorra", referencia: "Europe/Andorra", ciudades: ["Andorra la Vieja"] },
        { pais: "Austria", referencia: "Europe/Vienna", ciudades: ["Viena", "Salzburgo", "Graz", "Innsbruck"] },
        { pais: "Luxemburgo", referencia: "Europe/Luxembourg", ciudades: ["Luxemburgo"] },
        { pais: "Estonia", referencia: "Europe/Tallinn", ciudades: ["Tallin", "Tartu", "Narva", "Pärnu"] },
        { pais: "Letonia", referencia: "Europe/Riga", ciudades: ["Riga", "Daugavpils", "Liepāja", "Ventspils"] },
        { pais: "Lituania", referencia: "Europe/Vilnius", ciudades: ["Vilna", "Kaunas", "Klaipeda", "Šiauliai"] },

        // Otros países
        { pais: "Irlanda", referencia: "Europe/Dublin", ciudades: ["Dublín", "Cork", "Limerick", "Galway"] },
        { pais: "Serbia", referencia: "Europe/Belgrade", ciudades: ["Belgrado", "Novi Sad", "Niš", "Kragujevac"] },
        { pais: "República Checa", referencia: "Europe/Prague", ciudades: ["Praga", "Brno", "Ostrava", "Plzeň"] },
        { pais: "Rumania", referencia: "Europe/Bucharest", ciudades: ["Bucarest", "Cluj-Napoca", "Timișoara", "Iași"] },
        { pais: "Hungría", referencia: "Europe/Budapest", ciudades: ["Budapest", "Debrecen", "Szeged", "Miskolc"] },
        { pais: "Suiza", referencia: "Europe/Zurich", ciudades: ["Zúrich", "Ginebra", "Basilea", "Berna"] },
        { pais: "Mónaco", referencia: "Europe/Monaco", ciudades: ["Mónaco"] },
        { pais: "Malta", referencia: "Europe/Malta", ciudades: ["Valletta", "Sliema", "Birkirkara", "Qormi"] },
        { pais: "Bielorrusia", referencia: "Europe/Minsk", ciudades: ["Minsk", "Brest", "Gomel", "Vitebsk"] },
        { pais: "Bulgaria", referencia: "Europe/Sofia", ciudades: ["Sofía", "Plovdiv", "Varna", "Burgas"] },
        { pais: "Albania", referencia: "Europe/Tirane", ciudades: ["Tirana", "Durrës", "Vlorë", "Shkodër"] },
        { pais: "Macedonia del Norte", referencia: "Europe/Skopje", ciudades: ["Skopje", "Bitola", "Kumanovo", "Ohrid"] },
        { pais: "Kosovo", referencia: "Europe/Belgrade", ciudades: ["Pristina", "Mitrovica", "Ferizaj", "Gjakova"] },
        { pais: "San Marino", referencia: "Europe/San_Marino", ciudades: ["San Marino"] },
        { pais: "Liechtenstein", referencia: "Europe/Vaduz", ciudades: ["Vaduz"] }
    ],
    
    "Asia": [
        { pais: "China", referencia: "Asia/Shanghai", ciudades: ["Pekín", "Shanghái", "Guangzhou", "Shenzhen"] },
        { pais: "Japón", referencia: "Asia/Tokyo", ciudades: ["Tokio", "Osaka", "Nagoya", "Sapporo"] },
        { pais: "Corea del Sur", referencia: "Asia/Seoul", ciudades: ["Seúl", "Busan", "Incheon", "Daegu"] },
        { pais: "India", referencia: "Asia/Kolkata", ciudades: ["Nueva Delhi", "Bombay", "Bangalore", "Hyderabad"] },

        // Rusia (Asia) cubre varios husos horarios
        { pais: "Rusia (Asia)", referencia: "Asia/Yekaterinburg", ciudades: ["Yekaterimburgo", "Omsk", "Novosibirsk"] },
        { pais: "Rusia (Asia)", referencia: "Asia/Vladivostok", ciudades: ["Vladivostok", "Khabarovsk"] },

        { pais: "Pakistán", referencia: "Asia/Karachi", ciudades: ["Karachi", "Lahore", "Islamabad", "Faisalabad"] },
        { pais: "Bangladesh", referencia: "Asia/Dhaka", ciudades: ["Daca", "Chittagong", "Khulna", "Rajshahi"] },

        // Indonesia tiene varios husos horarios
        { pais: "Indonesia", referencia: "Asia/Jakarta", ciudades: ["Yakarta", "Surabaya", "Bandung", "Medan"] },
        { pais: "Indonesia", referencia: "Asia/Makassar", ciudades: ["Makassar", "Denpasar", "Mataram"] },
        { pais: "Indonesia", referencia: "Asia/Jayapura", ciudades: ["Jayapura", "Sorong"] },

        { pais: "Filipinas", referencia: "Asia/Manila", ciudades: ["Manila", "Quezon City", "Davao", "Cebu"] },
        { pais: "Tailandia", referencia: "Asia/Bangkok", ciudades: ["Bangkok", "Chiang Mai", "Pattaya", "Phuket"] },
        { pais: "Vietnam", referencia: "Asia/Ho_Chi_Minh", ciudades: ["Ho Chi Minh", "Hanoi", "Da Nang", "Haiphong"] },
        { pais: "Camboya", referencia: "Asia/Phnom_Penh", ciudades: ["Phnom Penh", "Siem Riep", "Battambang", "Sihanoukville"] },
        { pais: "Laos", referencia: "Asia/Vientiane", ciudades: ["Vientiane", "Luang Prabang", "Savannakhet", "Pakse"] },
        { pais: "Malasia", referencia: "Asia/Kuala_Lumpur", ciudades: ["Kuala Lumpur", "George Town", "Ipoh", "Johor Bahru"] },
        { pais: "Singapur", referencia: "Asia/Singapore", ciudades: ["Singapur"] },
        { pais: "Arabia Saudita", referencia: "Asia/Riyadh", ciudades: ["Riad", "Yeda", "La Meca", "Medina"] },
        { pais: "Emiratos Árabes Unidos", referencia: "Asia/Dubai", ciudades: ["Dubái", "Abu Dabi", "Sharjah", "Al Ain"] },
        { pais: "Catar", referencia: "Asia/Qatar", ciudades: ["Doha", "Al Wakrah", "Al Rayyan"] },
        { pais: "Israel", referencia: "Asia/Jerusalem", ciudades: ["Jerusalén", "Tel Aviv", "Haifa", "Eilat"] },
        { pais: "Irak", referencia: "Asia/Baghdad", ciudades: ["Bagdad", "Mosul", "Basora", "Erbil"] },
        { pais: "Irán", referencia: "Asia/Tehran", ciudades: ["Teherán", "Mashhad", "Isfahán", "Tabriz"] },
        { pais: "Kazajistán", referencia: "Asia/Almaty", ciudades: ["Almaty", "Astana", "Shymkent", "Karagandá"] },
        { pais: "Uzbekistán", referencia: "Asia/Tashkent", ciudades: ["Tashkent", "Samarkanda", "Bukhara", "Namangan"] },
        { pais: "Kirguistán", referencia: "Asia/Bishkek", ciudades: ["Bishkek", "Osh", "Jalal-Abad", "Karakol"] },
        { pais: "Myanmar", referencia: "Asia/Yangon", ciudades: ["Yangón", "Mandalay", "Naypyidaw", "Bago"] },
        { pais: "Sri Lanka", referencia: "Asia/Colombo", ciudades: ["Colombo", "Kandy", "Galle", "Jaffna"] },
        { pais: "Mongolia", referencia: "Asia/Ulaanbaatar", ciudades: ["Ulán Bator", "Erdenet", "Darkhan"] },
        { pais: "Afganistán", referencia: "Asia/Kabul", ciudades: ["Kabul", "Herat", "Kandahar", "Mazar-i-Sharif"] }
    ],
    "Pacifico": [
        // Australia tiene varios husos horarios
        { pais: "Australia", referencia: "Australia/Sydney", ciudades: ["Sídney", "Melbourne", "Brisbane", "Canberra"] },
        { pais: "Australia", referencia: "Australia/Adelaide", ciudades: ["Adelaida"] },
        { pais: "Australia", referencia: "Australia/Perth", ciudades: ["Perth"] },
        { pais: "Australia", referencia: "Australia/Darwin", ciudades: ["Darwin"] },

        { pais: "Nueva Zelanda", referencia: "Pacific/Auckland", ciudades: ["Auckland", "Wellington", "Christchurch", "Hamilton"] },
        { pais: "Fiyi", referencia: "Pacific/Fiji", ciudades: ["Suva", "Nadi", "Lautoka"] },
        { pais: "Papúa Nueva Guinea", referencia: "Pacific/Port_Moresby", ciudades: ["Port Moresby", "Lae", "Madang", "Mount Hagen"] },
        { pais: "Islas Salomón", referencia: "Pacific/Guadalcanal", ciudades: ["Honiara", "Auki", "Gizo", "Tulagi"] },
        { pais: "Vanuatu", referencia: "Pacific/Efate", ciudades: ["Port Vila", "Luganville", "Lenakel"] },
        { pais: "Samoa", referencia: "Pacific/Apia", ciudades: ["Apia", "Vaitele", "Faleula"] },
        { pais: "Tonga", referencia: "Pacific/Tongatapu", ciudades: ["Neiafu", "Haveluloto"] },

        // Kiribati (varios husos horarios)
        { pais: "Kiribati", referencia: "Pacific/Tarawa", ciudades: ["Tarawa", "Betio"] },
        { pais: "Kiribati", referencia: "Pacific/Enderbury", ciudades: ["Enderbury", "Rawaki"] },
        { pais: "Kiribati", referencia: "Pacific/Kiritimati", ciudades: ["Kiritimati"] },

        { pais: "Palau", referencia: "Pacific/Palau", ciudades: ["Ngerulmud", "Koror"] },
        { pais: "Islas Marshall", referencia: "Pacific/Majuro", ciudades: ["Majuro", "Ebeye"] },

        // Micronesia (varios husos horarios)
        { pais: "Micronesia", referencia: "Pacific/Chuuk", ciudades: ["Weno", "Tol"] },
        { pais: "Micronesia", referencia: "Pacific/Kosrae", ciudades: ["Lelu", "Tafunsak"] },
        { pais: "Micronesia", referencia: "Pacific/Pohnpei", ciudades: ["Palikir", "Kolonia"] },

        { pais: "Nauru", referencia: "Pacific/Nauru", ciudades: ["Yaren", "Anabar", "Aiwo"] },
        { pais: "Tuvalu", referencia: "Pacific/Funafuti", ciudades: ["Funafuti", "Vaiaku"] },
        { pais: "Nueva Caledonia", referencia: "Pacific/Noumea", ciudades: ["Noumea", "Mont-Dore", "Dumbéa"] },

        // Polinesia Francesa (varios husos horarios)
        { pais: "Polinesia Francesa", referencia: "Pacific/Tahiti", ciudades: ["Papeete", "Faaa", "Pirae"] },
        { pais: "Polinesia Francesa", referencia: "Pacific/Marquesas", ciudades: ["Hiva Oa", "Nuku Hiva"] },
        { pais: "Polinesia Francesa", referencia: "Pacific/Gambier", ciudades: ["Mangareva"] },
    ],
    "Africa": [
        { pais: "Costa de Marfil", referencia: "Africa/Abidjan", ciudades: ["Abidjan", "Yamoussoukro", "San Pedro", "Bouaké"] },
        { pais: "Kenia", referencia: "Africa/Nairobi", ciudades: ["Nairobi", "Mombasa", "Kisumu", "Eldoret"] },
        { pais: "Argelia", referencia: "Africa/Algiers", ciudades: ["Argel", "Orán", "Constantina", "Annaba"] },
        { pais: "Nigeria", referencia: "Africa/Lagos", ciudades: ["Lagos", "Abuja", "Port Harcourt", "Kano"] },
        { pais: "Guinea-Bisáu", referencia: "Africa/Bissau", ciudades: ["Bissau", "Bafatá", "Gabu", "Cacheu"] },
        { pais: "Mozambique", referencia: "Africa/Maputo", ciudades: ["Maputo", "Beira", "Nampula", "Chimoio"] },
        { pais: "Egipto", referencia: "Africa/Cairo", ciudades: ["El Cairo", "Alejandría", "Giza", "Sharm el-Sheikh"] },
        { pais: "Marruecos", referencia: "Africa/Casablanca", ciudades: ["Casablanca", "Rabat", "Marrakech", "Tangier"] },
        { pais: "Ceuta", referencia: "Africa/Ceuta", ciudades: ["Ceuta"] },
        { pais: "Sáhara Occidental", referencia: "Africa/El_Aaiun", ciudades: ["El Aaiún", "Dakhla", "Smara", "Boujdour"] },
        { pais: "Sudáfrica", referencia: "Africa/Johannesburg", ciudades: ["Johannesburgo", "Ciudad del Cabo", "Durban", "Pretoria"] },
        { pais: "Sudán del Sur", referencia: "Africa/Juba", ciudades: ["Juba", "Wau", "Malakal", "Rumbek"] },
        { pais: "Sudán", referencia: "Africa/Khartoum", ciudades: ["Jartum", "Omdurman", "Port Sudan", "Nyala"] },
        { pais: "Liberia", referencia: "Africa/Monrovia", ciudades: ["Monrovia", "Gbarnga", "Buchanan", "Voinjama"] },
        { pais: "Chad", referencia: "Africa/Ndjamena", ciudades: ["N'Djamena", "Moundou", "Sarh", "Abéché"] },
        { pais: "São Tomé y Príncipe", referencia: "Africa/Sao_Tome", ciudades: ["São Tomé", "Principe", "Santana", "Trindade"] },
        { pais: "Libia", referencia: "Africa/Tripoli", ciudades: ["Trípoli", "Bengasi", "Misrata", "Zintan"] },
        { pais: "Túnez", referencia: "Africa/Tunis", ciudades: ["Túnez", "Sfax", "Sousse", "Kairouan"] },
        { pais: "Namibia", referencia: "Africa/Windhoek", ciudades: ["Windhoek", "Swakopmund", "Walvis Bay", "Rundu"] },
    ]

}

const cities = [
    "Buenos Aires, Argentina", "Rosario, Argentina", "Posadas, Argentina", "Córdoba, Argentina", "La Paz, Bolivia",
    "Sucre, Bolivia", "Santa Cruz, Bolivia", "Cochabamba, Bolivia", "Brasilia, Brasil", "São Paulo, Brasil",
    "Mato Grosso, Brasil", "Acre, Brasil", "Santiago de Chile, Chile", "Concepción, Chile", "Puerto Montt, Chile",
    "Punta Arenas, Chile", "Bogotá, Colombia", "Medellín, Colombia", "Cali, Colombia", "Barranquilla, Colombia",
    "Quito, Ecuador", "Guayaquil, Ecuador", "Cayenne, Guayana", "Georgetown, Guyana", "Asunción, Paraguay", "Encarnación, Paraguay",
    "Ciudad del Este, Paraguay", "Lima, Perú", "Arequipa, Perú", "Iquitos, Perú", "Cusco, Perú", "Paramaribo, Surinam",
    "Montevideo, Uruguay", "Punta del Este, Uruguay", "Caracas, Venezuela", "Maracaibo, Venezuela", "Valencia, Venezuela",
    "Barquisimeto, Venezuela", "Belice, Belice", "San Ignacio, Belice", "Orange Walk, Belice", "Belmopan, Belice",
    "San José, Costa Rica", "Alajuela, Costa Rica", "Cartago, Costa Rica", "Limón, Costa Rica", "San Salvador, El Salvador",
    "Santa Ana, El Salvador", "San Miguel, El Salvador", "Soyapango, El Salvador", "Ciudad de Guatemala, Guatemala",
    "Quetzaltenango, Guatemala", "Escuintla, Guatemala", "Cobán, Guatemala", "Tegucigalpa, Honduras", "San Pedro Sula, Honduras",
    "La Ceiba, Honduras", "Choluteca, Honduras", "Managua, Nicaragua", "León, Nicaragua", "Granada, Nicaragua", "Masaya, Nicaragua",
    "Ciudad de Panamá, Panamá", "Colón, Panamá", "David, Panamá", "Santiago, Panamá", "La Habana, Cuba", "Santiago de Cuba, Cuba",
    "Camagüey, Cuba", "Holguín, Cuba", "Toronto, Canadá", "Ottawa, Canadá", "Montreal, Canadá", "Quebec, Canadá",
    "Vancouver, Canadá", "Victoria, Canadá", "Edmonton, Canadá", "Calgary, Canadá", "St. John's, Canadá", "Ciudad de México, México",
    "Guadalajara, México", "Puebla, México", "Querétaro, México", "Tijuana, México", "Mexicali, México", "Cancún, México",
    "Chetumal, México", "Playa del Carmen, México", "Hermosillo, México", "Nueva York, EEUU", "Washington D.C., EEUU",
    "Boston, EEUU", "Filadelfia, EEUU", "Chicago, EEUU", "Houston, EEUU", "Dallas, EEUU", "Austin, EEUU", "Denver, EEUU",
    "Salt Lake City, EEUU", "Phoenix, EEUU", "Los Ángeles, EEUU", "San Francisco, EEUU", "San Diego, EEUU", "Las Vegas, EEUU",
    "Anchorage, EEUU", "Honolulu, EEUU", "Madrid, España", "Barcelona, España", "Valencia, España", "Sevilla, España", "Bilbao, España",
    "Granada, España", "Las Palmas, España", "Santa Cruz de Tenerife, España", "París, Francia", "Lyon, Francia", "Marsella, Francia",
    "Toulouse, Francia", "Niza, Francia", "Burdeos, Francia", "Berlín, Alemania", "Hamburgo, Alemania", "Múnich, Alemania",
    "Colonia, Alemania", "Frankfurt, Alemania", "Stuttgart, Alemania", "Roma, Italia", "Milán, Italia", "Nápoles, Italia",
    "Turín, Italia", "Florencia, Italia", "Bolonia, Italia", "Ámsterdam, Países Bajos", "Róterdam, Países Bajos",
    "La Haya, Países Bajos", "Utrecht, Países Bajos", "Eindhoven, Países Bajos", "Groninga, Países Bajos", "Bruselas, Bélgica",
    "Amberes, Bélgica", "Gante, Bélgica", "Brujas, Bélgica", "Lieja, Bélgica", "Lovaina, Bélgica", "Londres, Reino Unido",
    "Mánchester, Reino Unido", "Birmingham, Reino Unido", "Glasgow, Reino Unido", "Liverpool, Reino Unido", "Edimburgo, Reino Unido",
    "Belfast, Reino Unido", "Lisboa, Portugal", "Oporto, Portugal", "Coímbra, Portugal", "Braga, Portugal", "Funchal, Portugal",
    "Ponta Delgada, Portugal", "Oslo, Noruega", "Bergen, Noruega", "Trondheim, Noruega", "Stavanger, Noruega", "Drammen, Noruega",
    "Kristiansand, Noruega", "Estocolmo, Suecia", "Gotemburgo, Suecia", "Malmö, Suecia", "Uppsala, Suecia", "Västerås, Suecia",
    "Örebro, Suecia", "Copenhague, Dinamarca", "Aarhus, Dinamarca", "Odense, Dinamarca", "Aalborg, Dinamarca", "Esbjerg, Dinamarca",
    "Viborg, Dinamarca", "Helsinki, Finlandia", "Espoo, Finlandia", "Tampere, Finlandia", "Vantaa, Finlandia", "Oulu, Finlandia",
    "Rovaniemi, Finlandia", "Atenas, Grecia", "Salónica, Grecia", "Patras, Grecia", "Heraclión, Grecia", "Larisa, Grecia",
    "Volos, Grecia", "Estambul, Turquía", "Ankara, Turquía", "Esmirna, Turquía", "Bursa, Turquía", "Antalya, Turquía",
    "Konya, Turquía", "Moscú, Rusia", "San Petersburgo, Rusia", "Kazan, Rusia", "Nizhni Nóvgorod, Rusia", "Samara, Rusia",
    "Saratov, Rusia", "Kaliningrado, Rusia", "Andorra la Vieja, Andorra", "Viena, Austria", "Salzburgo, Austria", "Graz, Austria",
    "Innsbruck, Austria", "Luxemburgo, Luxemburgo", "Tallin, Estonia", "Tartu, Estonia", "Narva, Estonia", "Pärnu, Estonia",
    "Riga, Letonia", "Daugavpils, Letonia", "Liepāja, Letonia", "Ventspils, Letonia", "Vilna, Lituania", "Kaunas, Lituania",
    "Klaipeda, Lituania", "Šiauliai, Lituania", "Dublín, Irlanda", "Cork, Irlanda", "Limerick, Irlanda", "Galway, Irlanda",
    "Belgrado, Serbia", "Novi Sad, Serbia", "Niš, Serbia", "Kragujevac, Serbia", "Praga, República Checa", "Brno, República Checa",
    "Ostrava, República Checa", "Plzeň, República Checa", "Bucarest, Rumania", "Cluj-Napoca, Rumania", "Timișoara, Rumania",
    "Iași, Rumania", "Budapest, Hungría", "Debrecen, Hungría", "Szeged, Hungría", "Miskolc, Hungría", "Zúrich, Suiza",
    "Ginebra, Suiza", "Basilea, Suiza", "Berna, Suiza", "Mónaco, Mónaco", "Valletta, Malta", "Sliema, Malta", "Birkirkara, Malta",
    "Qormi, Malta", "Minsk, Bielorrusia", "Brest, Bielorrusia", "Gomel, Bielorrusia", "Vitebsk, Bielorrusia", "Sofía, Bulgaria",
    "Plovdiv, Bulgaria", "Varna, Bulgaria", "Burgas, Bulgaria", "Tirana, Albania", "Durrës, Albania", "Vlorë, Albania",
    "Shkodër, Albania", "Skopje, Macedonia del Norte", "Bitola, Macedonia del Norte", "Kumanovo, Macedonia del Norte",
    "Ohrid, Macedonia del Norte", "Pristina, Kosovo", "Mitrovica, Kosovo", "Ferizaj, Kosovo", "Gjakova, Kosovo",
    "San Marino, San Marino", "Vaduz, Liechtenstein", "Pekín, China", "Shanghái, China", "Guangzhou, China",
    "Shenzhen, China", "Tokio, Japón", "Osaka, Japón", "Nagoya, Japón", "Sapporo, Japón", "Seúl, Corea del Sur",
    "Busan, Corea del Sur", "Incheon, Corea del Sur", "Daegu, Corea del Sur", "Nueva Delhi, India", "Bombay, India",
    "Bangalore, India", "Hyderabad, India", "Yekaterimburgo, Rusia (Asia)", "Omsk, Rusia (Asia)", "Novosibirsk, Rusia (Asia)",
    "Vladivostok, Rusia (Asia)", "Khabarovsk, Rusia (Asia)", "Karachi, Pakistán", "Lahore, Pakistán", "Islamabad, Pakistán",
    "Faisalabad, Pakistán", "Daca, Bangladesh", "Chittagong, Bangladesh", "Khulna, Bangladesh", "Rajshahi, Bangladesh",
    "Yakarta, Indonesia", "Surabaya, Indonesia", "Bandung, Indonesia", "Medan, Indonesia", "Makassar, Indonesia", "Denpasar, Indonesia",
    "Mataram, Indonesia", "Jayapura, Indonesia", "Sorong, Indonesia", "Manila, Filipinas", "Quezon City, Filipinas", "Davao, Filipinas",
    "Cebu, Filipinas", "Bangkok, Tailandia", "Chiang Mai, Tailandia", "Pattaya, Tailandia", "Phuket, Tailandia", "Ho Chi Minh, Vietnam",
    "Hanoi, Vietnam", "Da Nang, Vietnam", "Haiphong, Vietnam", "Phnom Penh, Camboya", "Siem Riep, Camboya", "Battambang, Camboya",
    "Sihanoukville, Camboya", "Vientiane, Laos", "Luang Prabang, Laos", "Savannakhet, Laos", "Pakse, Laos", "Kuala Lumpur, Malasia",
    "George Town, Malasia", "Ipoh, Malasia", "Johor Bahru, Malasia", "Singapur, Singapur", "Riad, Arabia Saudita",
    "Yeda, Arabia Saudita", "La Meca, Arabia Saudita", "Medina, Arabia Saudita", "Dubái, Emiratos Árabes Unidos",
    "Abu Dabi, Emiratos Árabes Unidos", "Sharjah, Emiratos Árabes Unidos", "Al Ain, Emiratos Árabes Unidos", "Doha, Catar",
    "Al Wakrah, Catar", "Al Rayyan, Catar", "Jerusalén, Israel", "Tel Aviv, Israel", "Haifa, Israel", "Eilat, Israel", "Bagdad, Irak",
    "Mosul, Irak", "Basora, Irak", "Erbil, Irak", "Teherán, Irán", "Mashhad, Irán", "Isfahán, Irán", "Tabriz, Irán", "Almaty, Kazajistán",
    "Astana, Kazajistán", "Shymkent, Kazajistán", "Karagandá, Kazajistán", "Tashkent, Uzbekistán", "Samarkanda, Uzbekistán",
    "Bukhara, Uzbekistán", "Namangan, Uzbekistán", "Bishkek, Kirguistán", "Osh, Kirguistán", "Jalal-Abad, Kirguistán",
    "Karakol, Kirguistán", "Yangón, Myanmar", "Mandalay, Myanmar", "Naypyidaw, Myanmar", "Bago, Myanmar", "Colombo, Sri Lanka",
    "Kandy, Sri Lanka", "Galle, Sri Lanka", "Jaffna, Sri Lanka", "Ulán Bator, Mongolia", "Erdenet, Mongolia", "Darkhan, Mongolia",
    "Kabul, Afganistán", "Herat, Afganistán", "Kandahar, Afganistán", "Mazar-i-Sharif, Afganistán", "Sídney, Australia",
    "Melbourne, Australia", "Brisbane, Australia", "Canberra, Australia", "Adelaida, Australia", "Perth, Australia", "Darwin, Australia",
    "Auckland, Nueva Zelanda", "Wellington, Nueva Zelanda", "Christchurch, Nueva Zelanda", "Hamilton, Nueva Zelanda", "Suva, Fiyi",
    "Nadi, Fiyi", "Lautoka, Fiyi", "Port Moresby, Papúa Nueva Guinea", "Lae, Papúa Nueva Guinea", "Madang, Papúa Nueva Guinea",
    "Mount Hagen, Papúa Nueva Guinea", "Honiara, Islas Salomón", "Auki, Islas Salomón", "Gizo, Islas Salomón", "Tulagi, Islas Salomón",
    "Port Vila, Vanuatu", "Luganville, Vanuatu", "Lenakel, Vanuatu", "Apia, Samoa", "Vaitele, Samoa", "Faleula, Samoa", "Neiafu, Tonga",
    "Haveluloto, Tonga", "Tarawa, Kiribati", "Betio, Kiribati", "Enderbury, Kiribati", "Rawaki, Kiribati", "Kiritimati, Kiribati",
    "Ngerulmud, Palau", "Koror, Palau", "Majuro, Islas Marshall", "Ebeye, Islas Marshall", "Weno, Micronesia", "Tol, Micronesia",
    "Lelu, Micronesia", "Tafunsak, Micronesia", "Palikir, Micronesia", "Kolonia, Micronesia", "Yaren, Nauru", "Anabar, Nauru",
    "Aiwo, Nauru", "Funafuti, Tuvalu", "Vaiaku, Tuvalu", "Noumea, Nueva Caledonia", "Mont-Dore, Nueva Caledonia", "Dumbéa, Nueva Caledonia",
    "Papeete, Polinesia Francesa", "Faaa, Polinesia Francesa", "Pirae, Polinesia Francesa", "Hiva Oa, Polinesia Francesa",
    "Nuku Hiva, Polinesia Francesa", "Mangareva, Polinesia Francesa", "Abidjan, Costa de Marfil", "Yamoussoukro, Costa de Marfil",
    "San Pedro, Costa de Marfil", "Bouaké, Costa de Marfil", "Nairobi, Kenia", "Mombasa, Kenia", "Kisumu, Kenia", "Eldoret, Kenia",
    "Argel, Argelia", "Orán, Argelia", "Constantina, Argelia", "Annaba, Argelia", "Lagos, Nigeria", "Abuja, Nigeria",
    "Port Harcourt, Nigeria", "Kano, Nigeria", "Bissau, Guinea-Bisáu", "Bafatá, Guinea-Bisáu", "Gabu, Guinea-Bisáu", "Cacheu, Guinea-Bisáu",
    "Maputo, Mozambique", "Beira, Mozambique", "Nampula, Mozambique", "Chimoio, Mozambique", "El Cairo, Egipto", "Alejandría, Egipto",
    "Giza, Egipto", "Sharm el-Sheikh, Egipto", "Casablanca, Marruecos", "Rabat, Marruecos", "Marrakech, Marruecos", "Tangier, Marruecos",
    "Ceuta, Ceuta", "El Aaiún, Sáhara Occidental", "Dakhla, Sáhara Occidental", "Smara, Sáhara Occidental", "Boujdour, Sáhara Occidental",
    "Johannesburgo, Sudáfrica", "Ciudad del Cabo, Sudáfrica", "Durban, Sudáfrica", "Pretoria, Sudáfrica", "Juba, Sudán del Sur",
    "Wau, Sudán del Sur", "Malakal, Sudán del Sur", "Rumbek, Sudán del Sur", "Jartum, Sudán", "Omdurman, Sudán", "Port Sudan, Sudán",
    "Nyala, Sudán", "Monrovia, Liberia", "Gbarnga, Liberia", "Buchanan, Liberia", "Voinjama, Liberia", "N'Djamena, Chad", "Moundou, Chad",
    "Sarh, Chad", "Abéché, Chad", "São Tomé, São Tomé y Príncipe", "Principe, São Tomé y Príncipe", "Santana, São Tomé y Príncipe",
    "Trindade, São Tomé y Príncipe", "Trípoli, Libia", "Bengasi, Libia", "Misrata, Libia", "Zintan, Libia", "Túnez, Túnez", "Sfax, Túnez",
    "Sousse, Túnez", "Kairouan, Túnez", "Windhoek, Namibia", "Swakopmund, Namibia", "Walvis Bay, Namibia", "Rundu, Namibia"
]

// obtiene "Buenos Aires, Argentina" y devuelve "Buenos Aires"
function getCityName(valor) {
    
    const partes = valor.split(',');
    return partes[0];
}

// me devuelve la referencia dependiendo de la ciudad("Oporto, Portugal") recibida por parametro
const getCityReference = (city) => {

    const cityName = getCityName(city)

    for (const region in data) {
        for (const { pais, referencia, ciudades } of data[region]) {
            if (ciudades.includes(cityName)) {
                return referencia;
            }
        }
    }

    return false
}

const getCities = () => {
    const citiesList = [];
    for (const region in data) {
        data[region].forEach(({ pais, ciudades }) => {
            ciudades.forEach(ciudad => {
                citiesList.push(`${ciudad}, ${pais}`);
            });
        });
    }

    return citiesList
}


export {
    getCityReference,
    cities,
    data,
    getCities,
}
