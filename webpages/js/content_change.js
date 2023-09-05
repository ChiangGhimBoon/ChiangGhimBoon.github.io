function exerciseContentByWeek(){
    var exercise_div = document.getElementById('exercise')
    const week = document.getElementById('week');
    const value = week.value;
    const node = document.createElement('p')
    switch(parseInt(value)) {
        case 1:
            node.innerHTML=
`
<h2>2D CAD</h2>
<p>What is 2D CAD? Well, CAD stands for "Computer Aided Design". Through the use of computer softwares, you are able to create graphic designs or sketches. Softwares like Adobe Illustrator or Fusion 360 are some examples of commonly used softwares for designing or sketching.</p>
<br>

<h2>Excercise 1</h2>
<p>For task 1, we needed to edit a photo of ourselves using GIMP. GIMP is a raster graphics editor used for image manipulation and image editing. We had to choose a picture of ourselves that we want to edit and just remove the background.</p>
<br>

<p>This is the picture that I have chosen to edit!</p>
<img src="../picture/my pic cropped.jpg" >
<br>

<p>This is how the final picture looks like</p>
<img src="../picture/edited pic.png" >
<br>

<h2>2D CAD</h2>
<h2>Excercise 1</h2>
<p>For the first excercise, we are going to sketch this using Fusion 360 as a form of practice.</p>
<img src="../picture/Excercise 1 .png" >
<br>

<p>I started off by selecting a plane that I want to sketch on. Then I sketched out the excercise on the XY plane.</p>
<br>

<p>This is how the final sketch looks like after adding in the dimensions.</p>
<img src="../picture/ex 1 done.png" >
<br>

<h2>Excercise 2</h2>
<p>For the first excercise, we are once againg going to sketch this using Fusion 360 </p>
<img src="../picture/Excercise 2 .png" >
<br>

<p>Following the previous excercise, I started off by selecting to sketch on the xy plane.</p>
<br>

<p>This is how the final sketch looks like after adding in the dimensions.</p>
<img src="../picture/ex 2 done.png" >
<br>

<p>These shapes might look intimidating and confusing to draw, often times not knowing where you can start from. But once you break down the sketches into simple shapes like squares and circles, it will be much easier to start and draw.</p>
`
            break
        case 2:
            node.innerHTML=
`
<h2>3D CAD</h2>
<p>For 3D CAD, it is slightly different from 2D CAD. As the term "3D CAD" suggests, we need to turn the 2D sketches into solid 3D objects. This is usually done through the "extrude" or "revolve" function.</p>
<br>

<h2>Lego brick</h2>
<p>For this excercise, we will be using Fusion 360 to make this Lego brick.</p>
<img src="../picture/lego brick.png">
<br>
<iframe src="https://ichat4101.autodesk360.com/shares/public/SHd38bfQT1fb47330c994f1f3bf212018440?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
<br>

<p>First I start off by creating a cuboid.</p>
<img src="../picture/lego brick 1.png">
<br>

<p>Then I made sketches on the top surface of the lego brick to create the studs.</p>
<img src="../picture/lego brick 2.png">
<br>

<p>After that, I extruded the studs.</p>
<img src="../picture/lego brick 3.png">
<br>

<p>As for the bottom of the brick, I did the same thing. I off set the edge of the cubiod by 1.20mm inwards to create the walls of the brick. After that I extruded the sketched area to create a cavity.</p>
<img src="../picture/lego brick 4.png">
<br>

<p>Lastly, I sketched circles on the surface of the cavity and the extruded it.</p>
<img src="../picture/lego brick 5.png">
<br>

<p>Finally we are done with the lego brick! This is how the top and bottom of the lego brick looks like</p>
<img src="../picture/lego brick 3.png">
<img src="../picture/lego brick 6.png">
<br>



<h2>Name Tag</h2>
<p>For this excercise, we will be making a name tag.</p>
<img src="../picture/name tag.png" >
<br>
<iframe src="https://ichat4101.autodesk360.com/shares/public/SHd38bfQT1fb47330c99a64924d6f8fa8306?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
<br>

<p>First I start off by creating the sketch of the name tag.</p>
<img src="../picture/Name tag 1.png">

<p>next, I used the extrude function to turn the 2D sketch into a 3D object.</p>
<img src="../picture/Name tag 2.png">

<p>I then created another sketch on the 3D object.</p>
<img src="../picture/Name tag 3.png">

<p>Once again, I used the extrude funtion to off set the sketch on the 3D object so that there is now depth on the name tag.</p>
<img src="../picture/Name tag 4.png">

<p>It was time to put my name on the name tag. So I created another sketch on the name tag and used the text function to put my name on.</p>
<img src="../picture/Name tag 5.png">

<p>Lastly, I extruded the letters on the name tag and now my name is visible.</p>
<img src="../picture/Name tag 6.png">

<p>This is how the final picture looks like.</p>
<img src="../picture/Name tag done.png">
`

            break
    }
    exercise_div.removeChild(exercise_div.firstElementChild)
    exercise_div.appendChild(node)
}

function assignmentContentByIndex(){
    var assignment_div = document.getElementById('assignment')
    const num = document.getElementById('num');
    const value = num.value;
    const node = document.createElement('p')
    switch(parseInt(value)) {
        case 1:
            node.innerHTML=
            
`
<br>
<p class="paragraph"> For assignment 1, I fabricated a wooden storage box through 2d laser cutting.</p>
<br>

<h2>Wooden Storage Box</h2>
<img src="../picture/box closed.jpg">
<p class="paragraph">This is the final look of the box closed</p>
<br>

<h2>Ideation</h2>
<img src="../picture/ideation.jpg">
<p>First, I did a rough ideation and sketch to work out all the components and measurements.</p>

<h2>Sketch</h2>
<img src="../picture/triangle front.png">
<p>Next, I then created all the different parts of the box using fusion 360. I then exported the sketches as a DXF file to prepare for laser cutting. After laser cutting the parts, I assembled the box.</p>
<br>

<img src="../picture/box open.jpg">
<p class="paragraph">This is how the assembled box looks when everything is open.</p>
<br>

<h2>Takeaway of this assignment</h2>
<p>I got to learn and familiarise myself with the process of 2d laser cutting.</p>

`
            break
        case 2:
            node.innerHTML=
`
<br>
<p class="paragraph"> For assignment 2, I 3d printed a chess piece & phone stand.</p>
<br>

<h2>Chess piece</h2>
<iframe src="https://ichat4101.autodesk360.com/shares/public/SHd38bfQT1fb47330c999bb90f89cf100830?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
<br>

<h2>Sketch</h2>
<img src="../picture/Chess/chess sketch.png" width="100%">
<p class="paragraph">To begin with, I first drew a 2d sketch of half of a chess piece.</p>
<br>

<h2>Revolving</h2>
<img src="../picture/Chess/chess revolve.png" width="100%">
<p class="paragraph"> Next, I used the revolve function to turn the 2d sketch into a 3d model of a chess piece.</p>
<br>

<h2>Chess crown</h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/LNZSOz-xbGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<p class="paragraph"> After creating the 3d model, I created another sketch on the plane & created a circle. I then extruded the circle so that it intersects with the crown of the chess piece, deleting the affected area & creating a curve. Next, I used the circular pattern function & created a consistent pattern to make the crown of the queen chess piece.</p>
<br>

<h2>Slicing with UltiMaker Cura</h2>
<img src="../picture/Chess/cura slicer.png" width="100%">
<p class="paragraph">The 3D model is finally done. Before it can be 3D printed, It has to be sliced in UltiMaker Cura for the 3D printer to be able to read the file.</p>
<br>

<h2>Slicing with UltiMaker Cura</h2>
<img src="../picture/Chess/chess printed.jpg" width="100%">
<p class="paragraph">This is what the chess piece looks like after printing and cleaning up.</p>
<br>

<h2>Phone Stand</h2>
<p class="paragraph">As for the phone stand, I sketched the model out in Fusion 360 and the sliced it in UltiMaker Cura before 3D printing.</p>
<br>
<iframe src="https://ichat4101.autodesk360.com/shares/public/SHd38bfQT1fb47330c9975c25efad8898ed8?mode=embed" width="640" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
<br>
<p class="paragraph">This is what the final 3D printed phone stand looks like.</p>
<img src="../picture/phone stand.jpg" width="100%">

<h2>Takeaway of this assignment</h2>
<p>I got to learn and familiarise myself with the process of 3d printing.</p>
`
            break
        case 3:
            node.innerHTML=
`
<br>
<p class="paragraph">For assignment 3, we're tasked to use TinkerCAD Programming to work on embedded programming. There are a total of 4 tasks for assignment 3.</p>
<br>

<h2>Task 1</h2>
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/bg1lVF2yGqo?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
<p class="paragraph">For task 1, I wrote a program to blink the LED in a variety of patterns. In this case, the LED blinks once, pauses for 1000ms, blinks twice, pauses for 1000ms & so on up till it blinks 4 times. I set pin 6 (Red LED) as output & made use of the function void blink to turn the LED on for 200ms & to turn it off for 100ms to simulate one blink.</p>
<br>
<div class="code">
<pre>
void setup()
{ 
  pinMode(6, OUTPUT);//sets the mode of pin 6 as output
}

void loop()
{
  blink(); 
  delay(1000); //pause for 1000ms
  blink();
  blink();
  delay(1000); 
  blink();
  blink();
  blink();
  delay(1000);
  blink();
  blink();
  blink();
  blink();
  delay(1000);
}

void blink(){ //turns the LED on for 200ms & turns it off for 200ms
  digitalWrite(6,HIGH);
  delay(200);
  digitalWrite(6,LOW);
  delay(200);
}

    </pre>
</div>
<br>

<h2>Task 2</h2>
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/28I3hCjoXJ9?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
<p class="paragraph">For task 2, using the same technique, I connected 2 more LEDs of different colours (green & blue) to the Arduino board using pins 6,7 & 8. This time, the LEDs would be lit in the sequence of Red -> Green -> blue. This time, I set pin 6 (Blue LED), 7 (Green LED) & 8 (Red LED) as outpt & used the void loop function to create the LED pattern.</p>
<br>
<div class="code">
    <h3>Here is the code:</h3>
    <pre>
    void setup()
{
  pinMode(6,OUTPUT);//Blue LED as output
  pinMode(7,OUTPUT);//Green LED as output
  pinMode(8,OUTPUT);//Red LED as output
}

void loop()
{
  digitalWrite(8, HIGH);
  delay(500); // Wait for 500 millisecond(s)
  digitalWrite(7, HIGH);
  delay(500); 
  digitalWrite(6, HIGH);
  delay(500);
  digitalWrite(8, LOW);
  delay(500);
  digitalWrite(7, LOW);
  delay(500); 
  digitalWrite(6, LOW);
  delay(500);
  
}
</pre>
</div>
<br>

<h2>Task 3</h2>
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/7YczuSOEani?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
<p class="paragraph">For task 3, using the same circuit as task 1 I added a switch & written a code that when the switch is pressed, the LEDs will light up. Pressing the button for a second time will switch the LED off. I made use of the boolean function to toggle the state of the LED & the button while setting pin 6 (LED) as output & pin 4 (button) as input.</p>
<br>
<div class="code">
    <h3>Here is the code:</h3>
    <pre>
    bool LEDstate = LOW, lastButState = HIGH, currentButState = HIGH;

void setup()
{ 
  pinMode(6, OUTPUT);//sets the mode of pin 6 as output
  pinMode(4, INPUT);//sets the mode of pin 4 as input
}

void loop()
{
  lastButState = currentButState;
  currentButState = digitalRead(4);
  if(lastButState == HIGH && currentButState == LOW) {
    LEDstate = !LEDstate;
    digitalWrite(6,LEDstate);
  }
}
    </pre>
</div>
<br>

<h2>Task 4</h2>
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/6zGFRxaxcVO?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
<p class="paragraph">For task 4, using the same switch in task 3, it now coltrols the type of light-up & flashing of the LEDs. Pressing the switch will only turn on the red LED. Pressing it again will only turn on the Green LED. Pressing it next will only turn on the Blue LED. Press it again & it will turn on all 3 LEDs & will turn all 3 LEDs off with a final press. </p>
<br>
<div class="code">
    <h3>Here is the code:</h3>
    <pre>
    bool LEDstate = LOW, lastButState = HIGH, currentButState = HIGH;
  byte acc = 0;
void setup()
{ 
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(6, OUTPUT);//sets the mode of pin 6 as output
  pinMode(4, INPUT);//sets the mode of pin 4 as input
}

void loop()
{
  
  
  lastButState = currentButState;
  currentButState = digitalRead(4);
  if(lastButState == HIGH && currentButState == LOW) {
    acc++;
    if (acc > 4) acc = 0;
    switch(acc){
    case 0:
      digitalWrite(6,LOW);
      digitalWrite(7,LOW);
      digitalWrite(8,LOW);
      break;
      case 1:
      digitalWrite(6,HIGH);
      break;
      case 2:
      digitalWrite(6,LOW);
      digitalWrite(7,HIGH);
      break;
      case 3:
      digitalWrite(7,LOW);
      digitalWrite(8,HIGH);
      break;
      case 4:
      digitalWrite(6,HIGH);
      digitalWrite(7,HIGH);
      digitalWrite(8,HIGH);
      break;
}
}
}
    </pre>
</div>
<br>
<h2>Takeaway of this assignment</h2>
<p>From this assignment, I have better understood embedded programming & how I can apply it to my final project. However, I am still quite unfarmiliar coding with C++ & need more practice & exposure.</p>
`
            break
        
        case 4:
            node.innerHTML=
`
<p></p>
`
            break
    }
    assignment_div.removeChild(assignment_div.firstElementChild)
    assignment_div.appendChild(node)
}

