// Laboratorio di Computer Grafica per l'Information Design
// Christian Battista Giannarelli

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noLoop();
}

function draw() {
	background(0);

	// Spazio ideale tra i glifi
	let space = 150;

	// Numero di colonne
	let cols = floor(windowWidth / space);

	// Numero di righe
	let rows = floor(windowHeight / space);

	// Calcolo dello spazio effettivo (uniforme) tra i glifi
	let spacing = min(windowWidth / cols, windowHeight / rows);

	// Centramento della griglia
	let startX = (windowWidth - (cols * spacing)) / 2 + spacing/2;
	let startY = (windowHeight - (rows * spacing)) / 2 + spacing/2;

	// Iterazione tra le righe
	for(let i = 0; i < rows; i++) {
		// Iterazione tra le colonne
		for(let j = 0; j < cols; j++) {
			// Calcolo delle coordinate dove siamo arrivati
			let x = startX + j * spacing;
			let y = startY + i * spacing;

			// Disegno del glifo
			drawGlyph(x, y);
		}
	}
}

// Funzione per il disegno del glifo (formato da un cerchio, una linea e un quadrato)
function drawGlyph(x, y) {
	// Salvataggio delle coordinate
	push();

	// Spostamento dell'origine nel punto stabilito
	translate(x, y);

	// Parametri random per il glifo
	let size = random(30, 50);
	let rotation = random(TWO_PI);
	let offset = random(-10, 10);

	// Applicazione della rotazione random
	rotate(rotation);

	// Disegno del cerchio
	noFill();
	stroke(240);
	strokeWeight(2);
	circle(0, 0, size);

	// Disegno della linea
	line(-size/2, offset, size/2, offset);

	// Disegno del quadrato (centrato rispetto al punto indicato)
	rectMode(CENTER);
	square(0, -size/4, size/3);

	// Eliminazione delle coordinate salvate
	pop();
}

// Gestione del ridimensionamento della finestra
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	redraw();
}