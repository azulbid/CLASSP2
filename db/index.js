let products = {
	usuario :  { 

			id: 1,
			nombreUsuario: 'NinuchaDeSanlorenzo',
			clave: 'Vivone`',
			email: 'ninucha@gmail.com',
			fechaNac: 08-07-03,
			dni: 44360558,
			//fotoPerfil
		},

    lista: [{
		id: 1,
		nombre: "Venus de Milo",
		Artista: "Alejandro de Antioquía",
		Técnica: "Escultura de Mármol",
		Dimensiones: "211 cm de alto",
        Creación: "130 a. C.-100 a. C.",
		imagen: '/images/venusdemilo.webp',
		comentarios: 'Muy buena!'
	}, {
		id: 2,
		nombre: "Apolo y Dafne",
		Artista: "Francesco Albani",
        Técnica: "Óleo sobre cobre fijado en tabla",
        Dimensiones:"17.5 cm × 35.5 cm",
		Creación: "entre 1615 y 1620",
		imagen: '/images/2150 1 Bernini-Apolo y Dafne-Galería Borghese Roma.jpeg',
		comentarios: 'MALISIMA!'
	}, {
		id: 3,
		nombre: "La Gioconda o Monna Lisa",
		Artista: "Leonardo da Vinci",
		Técnica: "Pintura al óleo sobre tabla de álamo",
		Dimensiones: "79 cm × 53 cm",
        Creación: "	1503-1519.",
		imagen: '/images/lamona.jpeg',
		comentarios: 'Muy buena!'
	}, {
		id: 4,
		nombre: "Autorretrato",
		Artista: "Alberto Durero",
		Técnica: "Óleo sobre vitela (pergamino) pegado a una tela",
		Dimensiones: "56,5 cm × 44,5 cm",
        Creación: "130 a. C.-100 a. C.",
		imagen: '/images/autorretrato.jpeg',
		comentarios: 'Muy buena!'
	}, 
{
		id: 5,
		nombre: "Venus del Pardo",
		Artista: "Tiziano",
		Técnica: "Óleo sobre lienzo",
		Dimensiones: "196 cm × 385 cm.",
        Creación: "1535-1540",
		imagen: '/images/venusdelpardo.jpeg',
		comentarios: 'Muy buena!'
	}
    ],

	comentarios: [{
		id: 1,
		user: 'Jano',
		comment: 'Muy buena obra!',
	},
	{
		id: 2,
		user: 'Santino',
		comment: 'WOW!',
	},
	{
		id: 3,
		user: 'Miranda',
		comment: 'Sobrevalorada!!!!!!'
	},
	{
		id: 4,
		user: 'Juli',
		comment: 'AMOOOOOO!',
	},
	{
		id: 5,
		user: 'Uma',
		comment: 'Malisima!!!!!!'
	}
],

	
/* cambiar la info de mascomentados */
	mascomentados: [ {
			id: 1,
			nombre: "La creación de Adan",
			Artista: "Miguel Angel",
			Técnica: "Acrilico",
			Dimensiones: "211 cm x 30 cm",
			Creación: "130 a. C.-100 a. C.",
			imagen: '/images/adan.png',
		}, {
			id: 2,
			nombre: "Nenúfares",
			Artista: "Monet",
			Técnica: "Óleo sobre cobre fijado en tabla",
			Dimensiones:"17.5 cm × 35.5 cm",
			Creación: "entre 1615 y 1620",
			imagen: '/images/nenufares.png',
		}, {
			id: 3,
			nombre: "La joven de la perla",
			Artista: "Vermeer",
			Técnica: "Pintura al óleo sobre tabla de álamo",
			Dimensiones: "79 cm × 53 cm",
			Creación: "	1503-1519.",
			imagen: '/images/lajoven.png',

		}, {
			id: 4,
			nombre: "La noche estrellada",
			Artista: "Vincent van Gogh",
			Técnica: "Óleo sobre vitela (pergamino) pegado a una tela",
			Dimensiones: "56,5 cm × 44,5 cm",
			Creación: "130 a. C.-100 a. C.",
			imagen: '/images/lanocheestrellada.png',

		}, 
	{
			id: 5,
			nombre: "El beso",
			Artista: "Klimt",
			Técnica: "Óleo sobre lienzo",
			Dimensiones: "196 cm × 385 cm.",
			Creación: "1535-1540",
			imagen: '/images/elbeso.png',

		}
	],
}
module.exports = products;

