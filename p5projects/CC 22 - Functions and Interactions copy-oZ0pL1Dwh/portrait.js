function david(x, y) {

  fill(168, 109, 60);
  noStroke();
  //head
  ellipse(x, y, 50, 60);
  //eyes
  fill(0)
  ellipse(x - 12, y - 5, 7, 5);
  ellipse(x + 12, y - 5, 7, 5);
  //nose
  stroke(0);
  line(x - 3, y + 4, x + 3, y + 4);

  //  brows
  arc(x - 10, y - 12, 8, 4, PI, 0, PIE);
  arc(x + 10, y - 12, 8, 4, PI, 0, PIE);
  
  //beard
  arc(x, y + 10, 50, 55, -0.15, PI+0.15, PIE);

  //mouth
  fill(168, 109, 50);
  ellipse(x, y + 15, 30, 8);
  fill(0);
  ellipse(x, y + 15, 10, 1);

  //hat
  fill(70, 70, 60);
  arc(x, y - 16, 45, 30, PI - QUARTER_PI / 10, 0 + QUARTER_PI / 10, PIE);
  fill(50, 50, 10);
  arc(x, y - 12, 50, 15, PI - QUARTER_PI / 10, 0 + QUARTER_PI / 10, PIE);

}